import puppeteer from 'puppeteer';
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = 'https://demo1.leotheme.com/leo_vogaza_demo/en/home-2.html';
const OUTPUT_DIR = path.join(__dirname, 'website');

// Crear directorio de salida
await fs.ensureDir(OUTPUT_DIR);

// Descargar archivo con reintentos
async function downloadFile(url, outputPath, retries = 3) {
  try {
    console.log(`Descargando: ${url}`);
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      },
      maxRedirects: 5,
      validateStatus: (status) => status < 500 // Aceptar códigos 2xx, 3xx y 4xx
    });

    // Si es 403 o 404, skip
    if (response.status === 403 || response.status === 404) {
      console.log(`⊘ Saltado (${response.status}): ${url}`);
      return false;
    }

    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, response.data);
    console.log(`✓ Descargado: ${path.relative(OUTPUT_DIR, outputPath)}`);
    return true;
  } catch (error) {
    if (retries > 0 && error.code !== 'ERR_BAD_REQUEST') {
      console.log(`Reintentando (${retries} intentos restantes): ${url}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return downloadFile(url, outputPath, retries - 1);
    }
    console.error(`✗ Error descargando ${url}: ${error.message}`);
    return false;
  }
}

// Convertir URL relativa a absoluta
function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch {
    return null;
  }
}

// Obtener ruta local para un recurso
function getLocalPath(url, baseUrl) {
  try {
    const urlObj = new URL(url);
    const baseUrlObj = new URL(baseUrl);

    // Si es del mismo dominio
    if (urlObj.hostname === baseUrlObj.hostname) {
      let pathname = urlObj.pathname;
      if (pathname.startsWith('/')) pathname = pathname.substring(1);
      return pathname;
    } else {
      // Recursos externos - guardar en carpeta 'external'
      const extPath = `external/${urlObj.hostname}${urlObj.pathname}`;
      return extPath;
    }
  } catch {
    return null;
  }
}

console.log('Iniciando descarga de la página con Puppeteer...\n');
console.log('Lanzando navegador (esto puede tomar unos segundos)...\n');

// 1. Usar Puppeteer para obtener el HTML renderizado
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

// Configurar viewport y user agent
await page.setViewport({ width: 1920, height: 1080 });
await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');

console.log('Navegando a la página...\n');

// Navegar a la página
await page.goto(TARGET_URL, {
  waitUntil: 'networkidle0', // Esperar a que no haya más de 0 conexiones de red por al menos 500ms
  timeout: 60000
});

console.log('Página cargada, extrayendo HTML...\n');

// Obtener el HTML renderizado
const html = await page.content();

await browser.close();

const $ = cheerio.load(html);

// 2. Extraer y descargar todos los recursos
const resources = new Set();

// CSS
$('link[rel="stylesheet"], link[rel="preload"][as="style"]').each((_, elem) => {
  const href = $(elem).attr('href');
  if (href) resources.add({ type: 'css', url: resolveUrl(TARGET_URL, href) });
});

// JavaScript
$('script[src]').each((_, elem) => {
  const src = $(elem).attr('src');
  if (src) resources.add({ type: 'js', url: resolveUrl(TARGET_URL, src) });
});

// Imágenes
$('img[src], img[data-src], source[srcset], img[srcset]').each((_, elem) => {
  const src = $(elem).attr('src') || $(elem).attr('data-src');
  if (src) resources.add({ type: 'img', url: resolveUrl(TARGET_URL, src) });

  const srcset = $(elem).attr('srcset');
  if (srcset) {
    srcset.split(',').forEach(src => {
      const url = src.trim().split(' ')[0];
      if (url) resources.add({ type: 'img', url: resolveUrl(TARGET_URL, url) });
    });
  }
});

// Fondos CSS inline
$('[style*="background"]').each((_, elem) => {
  const style = $(elem).attr('style');
  const urlMatches = style?.match(/url\(['"]?([^'"()]+)['"]?\)/g);
  if (urlMatches) {
    urlMatches.forEach(match => {
      const url = match.match(/url\(['"]?([^'"()]+)['"]?\)/)[1];
      if (url && !url.startsWith('data:')) {
        resources.add({ type: 'img', url: resolveUrl(TARGET_URL, url) });
      }
    });
  }
});

// Fuentes
$('link[rel*="font"], link[href*=".woff"], link[href*=".ttf"]').each((_, elem) => {
  const href = $(elem).attr('href');
  if (href) resources.add({ type: 'font', url: resolveUrl(TARGET_URL, href) });
});

console.log(`\nRecursos encontrados: ${resources.size}\n`);

// 3. Descargar todos los recursos
const resourceMap = new Map(); // URL original -> ruta local

for (const resource of resources) {
  if (!resource.url) continue;
  if (resource.url.startsWith('data:')) continue; // Skip data URLs

  const localPath = getLocalPath(resource.url, TARGET_URL);
  if (!localPath) continue;

  const outputPath = path.join(OUTPUT_DIR, localPath);
  const success = await downloadFile(resource.url, outputPath);

  if (success) {
    resourceMap.set(resource.url, localPath);
  }
}

// 4. Descargar CSS y extraer recursos embebidos
console.log('\nProcesando archivos CSS...\n');

for (const [url, localPath] of resourceMap.entries()) {
  if (localPath.endsWith('.css')) {
    try {
      const cssPath = path.join(OUTPUT_DIR, localPath);
      let cssContent = await fs.readFile(cssPath, 'utf-8');

      // Buscar URLs en CSS
      const urlMatches = cssContent.match(/url\(['"]?([^'"()]+)['"]?\)/g) || [];

      for (const match of urlMatches) {
        const relativeUrl = match.match(/url\(['"]?([^'"()]+)['"]?\)/)[1];
        if (relativeUrl.startsWith('data:')) continue;

        const absoluteUrl = resolveUrl(url, relativeUrl);
        if (!absoluteUrl) continue;

        const resourceLocalPath = getLocalPath(absoluteUrl, TARGET_URL);
        if (!resourceLocalPath) continue;

        // Descargar recurso si no existe
        if (!resourceMap.has(absoluteUrl)) {
          const outputPath = path.join(OUTPUT_DIR, resourceLocalPath);
          const success = await downloadFile(absoluteUrl, outputPath);
          if (success) {
            resourceMap.set(absoluteUrl, resourceLocalPath);
          }
        }

        // Calcular ruta relativa desde el CSS
        const cssDir = path.dirname(localPath);
        const relativePath = path.relative(cssDir, resourceLocalPath).replace(/\\/g, '/');

        // Reemplazar en CSS
        cssContent = cssContent.replace(match, `url('${relativePath}')`);
      }

      await fs.writeFile(cssPath, cssContent);
    } catch (error) {
      console.error(`Error procesando CSS ${localPath}:`, error.message);
    }
  }
}

// 5. Modificar HTML para usar recursos locales
console.log('\nActualizando referencias en HTML...\n');

// CSS
$('link[rel="stylesheet"], link[rel="preload"][as="style"]').each((_, elem) => {
  const href = $(elem).attr('href');
  if (href) {
    const absoluteUrl = resolveUrl(TARGET_URL, href);
    if (absoluteUrl && resourceMap.has(absoluteUrl)) {
      $(elem).attr('href', resourceMap.get(absoluteUrl));
    }
  }
});

// JavaScript
$('script[src]').each((_, elem) => {
  const src = $(elem).attr('src');
  if (src) {
    const absoluteUrl = resolveUrl(TARGET_URL, src);
    if (absoluteUrl && resourceMap.has(absoluteUrl)) {
      $(elem).attr('src', resourceMap.get(absoluteUrl));
    }
  }
});

// Imágenes
$('img[src]').each((_, elem) => {
  const src = $(elem).attr('src');
  if (src && !src.startsWith('data:')) {
    const absoluteUrl = resolveUrl(TARGET_URL, src);
    if (absoluteUrl && resourceMap.has(absoluteUrl)) {
      $(elem).attr('src', resourceMap.get(absoluteUrl));
    }
  }
});

$('img[data-src]').each((_, elem) => {
  const src = $(elem).attr('data-src');
  if (src && !src.startsWith('data:')) {
    const absoluteUrl = resolveUrl(TARGET_URL, src);
    if (absoluteUrl && resourceMap.has(absoluteUrl)) {
      $(elem).attr('data-src', resourceMap.get(absoluteUrl));
    }
  }
});

// Fondos CSS inline
$('[style*="background"]').each((_, elem) => {
  let style = $(elem).attr('style');
  const urlMatches = style?.match(/url\(['"]?([^'"()]+)['"]?\)/g);
  if (urlMatches) {
    urlMatches.forEach(match => {
      const url = match.match(/url\(['"]?([^'"()]+)['"]?\)/)[1];
      if (url.startsWith('data:')) return;

      const absoluteUrl = resolveUrl(TARGET_URL, url);
      if (absoluteUrl && resourceMap.has(absoluteUrl)) {
        style = style.replace(match, `url('${resourceMap.get(absoluteUrl)}')`);
      }
    });
    $(elem).attr('style', style);
  }
});

// Eliminar scripts de analíticas y externos que no queremos
$('script[src*="googletagmanager"], script[src*="google-analytics"], script[src*="facebook"], script[src*="doubleclick"]').remove();

// 6. Guardar HTML modificado
const finalHtml = $.html();
const htmlOutputPath = path.join(OUTPUT_DIR, 'index.html');
await fs.writeFile(htmlOutputPath, finalHtml);

console.log(`\n✓ Página descargada exitosamente en: ${OUTPUT_DIR}`);
console.log(`✓ Recursos descargados: ${resourceMap.size}`);
console.log(`\n✓ Abre el archivo: ${htmlOutputPath}`);

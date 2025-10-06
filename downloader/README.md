# Descargador de Páginas Web

Esta aplicación descarga una página web completa con todos sus recursos (imágenes, CSS, JavaScript, fuentes) y la organiza localmente para que funcione de forma autónoma.

## Instalación

```bash
cd downloader
npm install
```

## Uso

### Descarga con Puppeteer (recomendado)

Usa Puppeteer para sortear protecciones anti-bot como Cloudflare:

```bash
npm run download
```

### Descarga simple con Axios

Para sitios sin protección:

```bash
npm run download-simple
```

Esto descargará la página https://demo1.leotheme.com/leo_vogaza_demo/en/home-2.html y todos sus recursos.

## Salida

Los archivos se guardarán en la carpeta `website/`:

- `website/index.html` - Página principal con referencias actualizadas
- `website/modules/` - CSS y JavaScript
- `website/themes/` - Temas y recursos
- `website/img/` - Imágenes
- `website/external/` - Recursos de dominios externos

## Personalización

Para descargar una página diferente, edita la variable `TARGET_URL` en `download.js`.

## Características

- ✓ Descarga HTML, CSS, JS, imágenes y fuentes
- ✓ Procesa recursos embebidos en CSS (@import, url())
- ✓ Actualiza todas las referencias a rutas locales
- ✓ Maneja recursos externos
- ✓ Sistema de reintentos para descargas fallidas
- ✓ Preserva la estructura de directorios original

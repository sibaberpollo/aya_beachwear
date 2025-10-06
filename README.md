# Leo Vogaza - Demo Next.js

Este es un demo de Next.js que convierte completamente el HTML original de Leo Vogaza en una aplicación Next.js funcional.

## ✅ Características

- ✅ Todos los recursos externos descargados (fuentes, imágenes, patterns)
- ✅ Todos los archivos locales (CSS, JS, imágenes) copiados
- ✅ HTML original completamente respetado
- ✅ Sin Turbopack (según especificaciones)
- ✅ Configurado para usar pnpm
- ✅ Completamente funcional

## 🚀 Instalación

```bash
pnpm install
```

## 🏃 Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🏗️ Build

```bash
pnpm build
pnpm start
```

## 📁 Estructura del Proyecto

```
nextjs-demo/
├── public/
│   ├── fonts/                    # Fuentes descargadas (Material Icons, FontAwesome, etc.)
│   ├── images/
│   │   ├── slideshow/           # Imágenes del slideshow
│   │   ├── banners/             # Banners
│   │   ├── products/            # Imágenes de productos
│   │   └── patterns/            # Patterns de fondo
│   ├── index_files/             # CSS, JS e imágenes locales originales
│   ├── js/
│   │   └── global-vars.js       # Variables globales de JavaScript
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── html/
│   │   │       ├── header/route.ts  # API para servir header HTML
│   │   │       ├── main/route.ts    # API para servir main HTML
│   │   │       └── footer/route.ts  # API para servir footer HTML
│   │   ├── globals.css          # Imports de CSS originales
│   │   ├── layout.tsx           # Layout con metadata y scripts
│   │   └── page.tsx             # Página principal con componentes
│   ├── components/
│   │   ├── Header.tsx           # Componente Header (client-side)
│   │   ├── MainContent.tsx      # Componente Main (client-side)
│   │   └── Footer.tsx           # Componente Footer (client-side)
│   └── data/
│       ├── body.html            # HTML completo original (referencia)
│       ├── header.html          # HTML del header (541 líneas)
│       ├── main.html            # HTML del contenido (2,761 líneas)
│       └── footer.html          # HTML del footer (3,085 líneas)
└── package.json                 # Configurado para pnpm sin Turbopack
```

## 📝 Recursos Descargados

### Fuentes (4 archivos)
- MaterialIcons-Regular.woff2
- karatone-webfont.woff2
- fontawesome-webfont.woff2
- fa-light-300.woff2

### Imágenes (31 archivos)
- 3 imágenes de slideshow
- 2 banners
- 10 imágenes de productos
- 14 patterns
- 2 iconos

### Archivos Locales (de index_files/)
- CSS: load_font.css, theme-60372a53.css
- JavaScript: bottom-b9697052.js
- Imágenes: logos, banners, productos, blog, manufacturers, etc.

## 🎨 Estilos

Los estilos originales se mantienen completamente:
- `load_font.css` - Definiciones de fuentes (Poppins, Monsieur La Doulaise)
- `theme-60372a53.css` - Todos los estilos del tema original

## 🔧 Tecnologías

- Next.js 15.5.4
- React 19.1.0
- TypeScript 5.9.3
- pnpm 10.17.1

## 📌 Notas Importantes

- El HTML original se divide en 3 componentes React (Header, MainContent, Footer)
- Los componentes son client-side (`'use client'`) para evitar problemas de hidratación
- El HTML se carga dinámicamente desde API routes para máxima compatibilidad
- Variables globales de JavaScript incluidas en `/public/js/global-vars.js`
- Todos los recursos están localizados (no hay dependencias de CDNs externos)
- El proyecto NO usa Turbopack según especificaciones
- Todas las rutas de recursos apuntan a `/public/`

## 🔧 Arquitectura

### Componentes Client-Side
Los componentes `Header`, `MainContent` y `Footer` son client-side components que:
1. Se marcan con `'use client'` para renderización en el cliente
2. Usan `useEffect` para cargar HTML después del montaje
3. Hacen fetch a las API routes para obtener el HTML
4. Evitan problemas de hidratación al no renderizar en el servidor

### API Routes
Las rutas `/api/html/*` sirven el HTML estático desde los archivos en `src/data/`:
- `/api/html/header` → header.html
- `/api/html/main` → main.html
- `/api/html/footer` → footer.html

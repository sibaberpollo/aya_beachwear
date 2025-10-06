# Aya Beachwear

Proyecto de e-commerce de trajes de baño.

## Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Archivos Estáticos

El diseño HTML original está disponible en:
- **URL local:** http://localhost:3000/original.html
- **URL producción:** https://tu-dominio.vercel.app/original.html

## Desplegar en Vercel

### Opción 1: Usando Vercel CLI

```bash
# Instalar Vercel CLI (si no lo tienes)
pnpm add -g vercel

# Desplegar
vercel
```

### Opción 2: Desde GitHub

1. Sube este repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa el proyecto desde GitHub
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"

**Importante:** Vercel usará automáticamente `pnpm` porque lo detecta en el `vercel.json`.

## Estructura del Proyecto

```
/
├── app/                  # App directory de Next.js
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página de inicio
├── public/              # Archivos estáticos
│   ├── original.html    # HTML original del diseño
│   └── external/        # Assets (CSS, imágenes, fuentes)
├── index.html           # HTML original (referencia)
└── vercel.json          # Configuración de Vercel
```

## URLs Disponibles

- `/` - Página de inicio de Next.js
- `/original.html` - Diseño HTML estático original


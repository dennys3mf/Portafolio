# Guía de Despliegue en Vercel

## Preparación del Proyecto

Tu proyecto está configurado y listo para desplegar en Vercel con los siguientes archivos:

### Archivos Configurados

1. **astro.config.mjs** - Adaptador de Vercel instalado
2. **vercel.json** - Configuración de build
3. **.vercelignore** - Archivos excluidos del despliegue
4. **.env.example** - Template de variables de entorno
5. **package.json** - Dependencias actualizadas

## Paso 1: Preparar en Local

```bash
# Verificar que todo funciona localmente
npm run build

# Verificar el preview
npm run preview
```

## Paso 2: Conectar a Vercel

### Opción A: Interfaz Web (Recomendado)

1. Ve a https://vercel.com
2. Haz click en "New Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente:
   - Framework: Astro
   - Build Command: npm run build
   - Output Directory: dist
5. Click en "Deploy"

### Opción B: CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Deploy a staging (preview)
vercel

# Deploy a producción
vercel --prod
```

## Paso 3: Configuración en Vercel (si es necesaria)

En caso de usar variables de entorno:

1. Project Settings → Environment Variables
2. Agrega las variables según sea necesario
3. Redeploy

## Características Habilitadas

✅ Web Analytics - Seguimiento de visitantes
✅ Image Optimization - Optimización de imágenes
✅ Server-Side Rendering (SSR)
✅ Astro DB Support

## Próximos Despliegues

Una vez conectado:
- Cada push a main/master desplegará automáticamente
- Otros branches crearán "Preview Deployments"
- Vercel generará URLs automáticas

## Referencias

- Astro + Vercel: https://docs.astro.build/guides/deploy/vercel/
- Vercel Docs: https://vercel.com/docs
- Astro DB: https://docs.astro.build/en/guides/astro-db/

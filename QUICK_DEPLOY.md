# 🚀 Desplegar en Vercel en 30 segundos

## Forma Más Rápida

### Paso 1: Subir a GitHub
```bash
git add .
git commit -m "Listo para Vercel"
git push
```

### Paso 2: Conectar en Vercel
1. Ve a https://vercel.com
2. Click "New Project"  
3. Selecciona tu repo de GitHub
4. Click "Deploy"

**¡Listo!** Vercel hará el resto automáticamente.

---

## Alternativa: Vercel CLI

```bash
npm install -g vercel    # Primera vez solo
vercel --prod             # Deploy a producción
```

---

## Listo. Eso es todo.

Tu proyecto está configurado con:
- ✅ Adaptador Vercel
- ✅ Astro DB
- ✅ Build optimizado
- ✅ Variables de entorno

**Vercel se encargará del hosting.**

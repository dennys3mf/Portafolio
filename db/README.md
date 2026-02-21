# Astro DB - Base de Datos del Portafolio

Este proyecto utiliza **Astro DB**, la base de datos integrada nativa de Astro, para gestionar el contenido dinámico del portafolio.

## 📊 Tablas disponibles

### 1. **Projects** (Proyectos)
Almacena información sobre los proyectos del portafolio.

```typescript
{
  id: number (PK)
  slug: string (unique)
  titleEs: string
  titleEn: string
  descriptionEs: string
  descriptionEn: string
  image: string
  imageAlt: string
  category: string ('mobile', 'web', 'game', etc)
  technologies: string[] (JSON)
  featured: boolean
  status: string ('completed', 'in-progress', 'planning')
  liveUrl?: string
  githubUrl?: string
  startDate: date
  endDate?: date
  createdAt: date
  updatedAt: date
}
```

### 2. **Skills** (Habilidades)
Almacena habilidades técnicas y profesionales.

```typescript
{
  id: number (PK)
  nameEs: string
  nameEn: string
  category: string ('language', 'framework', 'tool', 'soft-skill')
  level: string ('beginner', 'intermediate', 'advanced', 'expert')
  icon?: string
  yearsOfExperience: number
  featured: boolean
  order: number
  createdAt: date
}
```

### 3. **Testimonials** (Testimonios)
Almacena testimonios de clientes y colegas.

```typescript
{
  id: number (PK)
  clientName: string
  clientRole: string
  clientCompany: string
  clientImage?: string
  textEs: string
  textEn: string
  rating: number (1-5)
  projectId?: number (FK)
  featured: boolean
  createdAt: date
}
```

### 4. **BlogPosts** (Artículos de Blog)
Almacena artículos del blog.

```typescript
{
  id: number (PK)
  slug: string (unique)
  titleEs: string
  titleEn: string
  excerptEs: string
  excerptEn: string
  contentEs: string
  contentEn: string
  image?: string
  imageAlt?: string
  tags: string[] (JSON)
  category: string
  author: string
  published: boolean
  featured: boolean
  readingTime: number (minutos)
  publishedAt?: date
  createdAt: date
  updatedAt: date
}
```

### 5. **Contact** (Contactos)
Almacena mensajes de contacto del formulario.

```typescript
{
  id: number (PK)
  name: string
  email: string
  subject: string
  message: string
  status: string ('new', 'read', 'replied')
  read: boolean
  createdAt: date
}
```

## 🛠️ Cómo usar

### Importar las funciones de utilidad

```astro
---
import { 
  getAllProjects, 
  getFeaturedProjects,
  getAllSkills,
  getAllBlogPosts 
} from '../lib/db';

const projects = await getAllProjects();
const featuredSkills = await getFeaturedSkills();
---
```

### En componentes Astro

```astro
---
import { getFeaturedProjects } from '../lib/db';

const projects = await getFeaturedProjects();
---

<section>
  {projects.map(project => (
    <div>
      <h3>{project.titleEs}</h3>
      <p>{project.descriptionEs}</p>
    </div>
  ))}
</section>
```

### En API Routes

```typescript
// src/pages/api/projects.json.ts
import { getAllProjects } from '../../lib/db';

export async function GET() {
  const projects = await getAllProjects();
  return new Response(JSON.stringify(projects));
}
```

## 📝 Funciones disponibles

### Proyectos

- `getAllProjects()` - Obtener todos
- `getFeaturedProjects()` - Obtener destacados
- `getProjectsByCategory(category)` - Por categoría
- `getProjectBySlug(slug)` - Un proyecto específico

### Habilidades

- `getAllSkills()` - Obtener todas
- `getFeaturedSkills()` - Obtener destacadas
- `getSkillsByCategory(category)` - Por categoría
- `getSkillsByLevel(level)` - Por nivel

### Testimonios

- `getAllTestimonials()` - Obtener todos
- `getFeaturedTestimonials()` - Obtener destacados
- `getTestimonialsByProject(projectId)` - Por proyecto

### Blog

- `getAllBlogPosts()` - Obtener todos publicados
- `getFeaturedBlogPosts()` - Obtener destacados
- `getBlogPostsByCategory(category)` - Por categoría
- `getBlogPostsByTag(tag)` - Por etiqueta
- `getBlogPostBySlug(slug)` - Un artículo específico
- `getRecentBlogPosts(limit)` - Últimos N artículos

### Contacto

- `saveContactMessage(name, email, subject, message)` - Guardar mensaje
- `getAllContactMessages()` - Obtener todos
- `getUnreadMessages()` - Obtener no leídos

## 🚀 Inicializar BD con datos

```bash
npm run astro db push
```

Esto ejecutará el archivo `db/seed.ts` y poblará la BD con datos de ejemplo.

## 📱 Agregar datos manualmente

### 1. Desde código Astro

```astro
---
import { db, Project } from 'astro:db';

await db.insert(Project).values({
  id: 4,
  slug: 'nuevo-proyecto',
  titleEs: 'Mi Nuevo Proyecto',
  titleEn: 'My New Project',
  // ... resto de campos
});
---
```

### 2. Usando el dashboard local (Astro Studio)

```bash
npm run astro db shell
```

## 🔍 Consultas avanzadas

### Usar filtros

```typescript
import { eq, desc, and } from 'astro:db';
import { db, Project } from 'astro:db';

// Un proyecto específico
const project = await db
  .select()
  .from(Project)
  .where(eq(Project.slug, 'mi-proyecto'));

// Proyectos completados y destacados
const featured = await db
  .select()
  .from(Project)
  .where(and(
    eq(Project.status, 'completed'),
    eq(Project.featured, true)
  ));
```

## 📚 Traducción

Todos los campos de contenido presentan versiones en español (`Es`) e inglés (`En`). 

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const project = await getProjectBySlug('mi-proyecto');
const title = lang === 'es' ? project.titleEs : project.titleEn;
---

<h1>{title}</h1>
```

## 🔐 Seguridad

- Las conexiones a BD están protegidas por defecto
- Los datos sensibles se guardán en variables de entorno
- Para producción, conectar a Astro Studio (dashboard web)

## 📖 Documentación oficial

- [Astro DB Documentation](https://docs.astro.build/en/guides/astro-db/)
- [Astro Studio](https://studio.astro.build/)

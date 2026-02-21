# Comandos útiles para Astro DB

## Primeros pasos

### 1. Inicializar la base de datos
```bash
npm run astro db push
```
Esto:
- Crea las tablas definidas en `db/config.ts`
- Ejecuta el seed de datos en `db/seed.ts`
- Prepara la BD para producción

### 2. Acceso a la BD local (REPL Shell)
```bash
npm run astro db shell
```
Esto abre un shell interactivo donde puedes ejecutar comandos SQL directamente.

### 3. Conectar a Astro Studio (producción)
```bash
npm run astro db login
```
Esto te permite conectar tu BD remota a Astro Studio para administración desde la web.

## Desarrollo

### Ejecutar el servidor de desarrollo
```bash
npm run dev
```
La BD se sincroniza automáticamente durante el desarrollo.

### Ejecutar el build de producción
```bash
npm run build
```

### Ver un preview
```bash
npm run preview
```

## Ejemplos de consultas en REPL

Un vez dentro del shell (`npm run astro db shell`), puedes ejecutar:

```sql
-- Ver todos los proyectos
SELECT * FROM Project;

-- Ver proyectos destacados
SELECT * FROM Project WHERE featured = true;

-- Ver habilidades expertizadas
SELECT * FROM Skill WHERE level = 'expert';

-- Ver artículos publicados
SELECT * FROM BlogPost WHERE published = true ORDER BY publishedAt DESC;

-- Contar testimonios
SELECT COUNT(*) as total FROM Testimonial;

-- Ver mensajes de contacto no leídos
SELECT * FROM Contact WHERE read = false;
```

## Agregar datos desde el código

### En componentes Astro

```astro
---
import { db, Project } from 'astro:db';

// Insertar uno
await db.insert(Project).values({
  id: 99,
  slug: 'nuevo-proyecto',
  titleEs: 'Nuevo Proyecto',
  titleEn: 'New Project',
  descriptionEs: 'Descripción...',
  descriptionEn: 'Description...',
  image: '/projects/image.jpg',
  imageAlt: 'Alt text',
  category: 'web',
  technologies: ['Astro', 'React'],
  featured: true,
  status: 'completed',
  startDate: new Date('2025-01-01'),
  createdAt: new Date(),
  updatedAt: new Date(),
});

// Actualizar
import { eq } from 'astro:db';

await db
  .update(Project)
  .set({ featured: false })
  .where(eq(Project.id, 99));

// Eliminar
await db
  .delete(Project)
  .where(eq(Project.id, 99));
---
```

### En scripts de Node.js

```typescript
// scripts/import-data.ts
import { db, Project } from 'astro:db';

async function importProjects() {
  const projects = [
    { /* ... */ },
    { /* ... */ },
  ];
  
  await db.insert(Project).values(projects);
}

importProjects();
```

## Estructura de archivos

```
db/
├── config.ts          # Schema de tablas
├── seed.ts            # Datos iniciales
└── README.md          # Documentación

src/
├── lib/
│   └── db.ts          # Funciones de utilidad
├── pages/
│   └── api/
│       ├── projects.json.ts
│       ├── skills.json.ts
│       ├── blog.json.ts
│       └── contact.json.ts
└── ...
```

## Endpoint API disponibles

- **GET** `/api/projects.json` - Todos los proyectos
  - Query: `?featured=true` - Solo destacados
  
- **GET** `/api/skills.json` - Todas las habilidades
  - Query: `?featured=true` - Solo destacadas
  - Query: `?category=language` - Por categoría
  - Query: `?level=expert` - Por nivel

- **GET** `/api/blog.json` - Todos los artículos
  - Query: `?featured=true` - Solo destacados
  - Query: `?category=tutorial` - Por categoría
  - Query: `?recent=5` - Últimos N artículos

- **POST** `/api/contact.json` - Guardar mensaje de contacto
  - Body: `{ name, email, subject, message }`

## Funciones disponibles en `src/lib/db.ts`

Ver [db/README.md](./db/README.md) para la lista completa de funciones.

## Tipos TypeScript

```typescript
import type { Project, Skill, Testimonial, BlogPost, Contact } from 'astro:db';

// Usar tipos en tus componentes
interface Props {
  project: Project;
  skills: Skill[];
}
```

## Troubleshooting

### Error: "No database found"
Ejecuta: `npm run astro db push`

### Error: "Connection refused"
La BD local no está disponible. Reinicia con:
```bash
npm run dev
```

### Cambios en schema no se aplican
Ejecuta: `npm run astro db push --force`

### Resetear BD completamente
```bash
npm run astro db reset
```

## Más información

- [Documentación oficial de Astro DB](https://docs.astro.build/en/guides/astro-db/)
- [Astro Studio Dashboard](https://studio.astro.build/)
- [Discord - Astro Community](https://astro.build/chat)

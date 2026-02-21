import { column, defineDb, defineTable } from "astro:db";

/**
 * Tabla de Autores
 * Almacena información de los autores de comentarios
 */
const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    country: column.text(),
  },
});

/**
 * Tabla de Comentarios
 * Almacena los comentarios de los proyectos
 */
const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    postId: column.text(),
    body: column.text(),
    authorId: column.number({ references: () => Author.columns.id }),
  },
});

export default defineDb({
  tables: { Comment, Author },
});

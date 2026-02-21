import { db, Author, Comment } from 'astro:db';
import { eq, desc } from 'astro:db';

/**
 * Utilidades para consultas a la base de datos
 */

// ==================== COMMENTS ====================

/**
 * Obtener todos los comentarios
 */
export async function getAllComments() {
  return await db.select().from(Comment);
}

/**
 * Obtener comentarios por post
 */
export async function getCommentsByPost(postId: string) {
  return await db
    .select()
    .from(Comment)
    .where(eq(Comment.postId, postId))
    .orderBy(desc(Comment.id));
}

/**
 * Obtener un comentario por ID
 */
export async function getCommentById(id: string) {
  const result = await db
    .select()
    .from(Comment)
    .where(eq(Comment.id, id));
  return result[0];
}

// ==================== AUTHORS ====================

/**
 * Obtener todos los autores
 */
export async function getAllAuthors() {
  return await db.select().from(Author);
}

/**
 * Obtener un autor por ID
 */
export async function getAuthorById(id: string) {
  const result = await db
    .select()
    .from(Author)
    .where(eq(Author.id, id));
  return result[0];
}

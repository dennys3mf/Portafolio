import { db, Project, Skill, Testimonial, BlogPost, Contact } from 'astro:db';
import { eq, desc, and } from 'astro:db';

/**
 * Utilidades para consultas a la base de datos
 */

// ==================== PROJECTS ====================

/**
 * Obtener todos los proyectos
 */
export async function getAllProjects() {
  return await db.select().from(Project);
}

/**
 * Obtener proyectos destacados
 */
export async function getFeaturedProjects() {
  return await db
    .select()
    .from(Project)
    .where(eq(Project.featured, true));
}

/**
 * Obtener proyectos por categoría
 */
export async function getProjectsByCategory(category: string) {
  return await db
    .select()
    .from(Project)
    .where(eq(Project.category, category));
}

/**
 * Obtener un proyecto por slug
 */
export async function getProjectBySlug(slug: string) {
  const result = await db
    .select()
    .from(Project)
    .where(eq(Project.slug, slug));
  return result[0];
}

// ==================== SKILLS ====================

/**
 * Obtener todas las habilidades
 */
export async function getAllSkills() {
  return await db
    .select()
    .from(Skill)
    .orderBy(Skill.order);
}

/**
 * Obtener habilidades destacadas
 */
export async function getFeaturedSkills() {
  return await db
    .select()
    .from(Skill)
    .where(eq(Skill.featured, true))
    .orderBy(Skill.order);
}

/**
 * Obtener habilidades por categoría
 */
export async function getSkillsByCategory(category: string) {
  return await db
    .select()
    .from(Skill)
    .where(eq(Skill.category, category))
    .orderBy(Skill.order);
}

/**
 * Obtener habilidades por nivel
 */
export async function getSkillsByLevel(level: string) {
  return await db
    .select()
    .from(Skill)
    .where(eq(Skill.level, level))
    .orderBy(Skill.order);
}

// ==================== TESTIMONIALS ====================

/**
 * Obtener todos los testimonios
 */
export async function getAllTestimonials() {
  return await db.select().from(Testimonial);
}

/**
 * Obtener testimonios destacados
 */
export async function getFeaturedTestimonials() {
  return await db
    .select()
    .from(Testimonial)
    .where(eq(Testimonial.featured, true));
}

/**
 * Obtener testimonios por proyecto
 */
export async function getTestimonialsByProject(projectId: number) {
  return await db
    .select()
    .from(Testimonial)
    .where(eq(Testimonial.projectId, projectId));
}

// ==================== BLOG POSTS ====================

/**
 * Obtener todos los artículos publicados
 */
export async function getAllBlogPosts() {
  return await db
    .select()
    .from(BlogPost)
    .where(eq(BlogPost.published, true))
    .orderBy(desc(BlogPost.publishedAt));
}

/**
 * Obtener artículos destacados
 */
export async function getFeaturedBlogPosts() {
  return await db
    .select()
    .from(BlogPost)
    .where(and(eq(BlogPost.published, true), eq(BlogPost.featured, true)))
    .orderBy(desc(BlogPost.publishedAt));
}

/**
 * Obtener artículos por categoría
 */
export async function getBlogPostsByCategory(category: string) {
  return await db
    .select()
    .from(BlogPost)
    .where(and(eq(BlogPost.published, true), eq(BlogPost.category, category)))
    .orderBy(desc(BlogPost.publishedAt));
}

/**
 * Obtener artículos por etiqueta
 */
export async function getBlogPostsByTag(tag: string) {
  const posts = await getAllBlogPosts();
  return posts.filter(post => 
    (post.tags as string[]).includes(tag)
  );
}

/**
 * Obtener un artículo por slug
 */
export async function getBlogPostBySlug(slug: string) {
  const result = await db
    .select()
    .from(BlogPost)
    .where(eq(BlogPost.slug, slug));
  return result[0];
}

/**
 * Obtener artículos recientes
 */
export async function getRecentBlogPosts(limit: number = 5) {
  return await db
    .select()
    .from(BlogPost)
    .where(eq(BlogPost.published, true))
    .orderBy(desc(BlogPost.publishedAt))
    .limit(limit);
}

// ==================== CONTACTS ====================

/**
 * Guardar un nuevo mensaje de contacto
 */
export async function saveContactMessage(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  return await db.insert(Contact).values({
    name,
    email,
    subject,
    message,
    status: 'new',
    read: false,
    createdAt: new Date(),
  });
}

/**
 * Obtener todos los mensajes de contacto
 */
export async function getAllContactMessages() {
  return await db
    .select()
    .from(Contact)
    .orderBy(desc(Contact.createdAt));
}

/**
 * Obtener mensajes sin leer
 */
export async function getUnreadMessages() {
  return await db
    .select()
    .from(Contact)
    .where(eq(Contact.read, false));
}

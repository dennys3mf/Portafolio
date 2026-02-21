import { db, Comment, Author } from "astro:db";

export default async function seed() {
  // Limpiar datos existentes
  await db.delete(Comment);
  await db.delete(Author);
  
  await db.insert(Author).values([
    { id: 1, name: "Jonathan Bello", country: "MX" },
    { id: 2, name: "María González", country: "ES" },
    { id: 3, name: "Gabriel Martínez", country: "AR" }
  ]);

  await db.insert(Comment).values([
    { id: 1, authorId: 1, postId: "1", body: "¡Excelente proyecto! Me encanta cómo resolviste el problema de las becas." },
    { id: 2, authorId: 2, postId: "1", body: "Muy útil, necesitábamos algo así en el mercado." },
    { id: 3, authorId: 3, postId: "2", body: "El CSS Game es increíble, lo estoy usando para enseñar a mis estudiantes!" },
  ]);

  console.log('✅ Database seeded successfully!');
}

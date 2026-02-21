import { normalizeDatabaseUrl, asDrizzleTable } from '@astrojs/db/runtime';
import { createClient } from '@astrojs/db/db-client/libsql-local.js';
import { BlogPost, and, eq, desc, Contact, Project, Skill } from '@astrojs/db/dist/runtime/virtual.js';

const dbUrl = normalizeDatabaseUrl("./db.sqlite", "file:///D:/Proyectos-2026/portafolio/.astro/content.db");
const db = createClient({ url: dbUrl });

asDrizzleTable("Comment", {"columns":{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Comment","primaryKey":true}},"postId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"postId","collection":"Comment","primaryKey":false,"optional":false}},"body":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"body","collection":"Comment","primaryKey":false,"optional":false}},"authorId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"authorId","collection":"Comment","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Author","primaryKey":true}}}}},"deprecated":false,"indexes":{}}, false);
asDrizzleTable("Author", {"columns":{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Author","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Author","primaryKey":false,"optional":false}},"country":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"country","collection":"Author","primaryKey":false,"optional":false}}},"deprecated":false,"indexes":{}}, false);

async function getAllProjects() {
  return await db.select().from(Project);
}
async function getFeaturedProjects() {
  return await db.select().from(Project).where(eq(Project.featured, true));
}
async function getAllSkills() {
  return await db.select().from(Skill).orderBy(Skill.order);
}
async function getFeaturedSkills() {
  return await db.select().from(Skill).where(eq(Skill.featured, true)).orderBy(Skill.order);
}
async function getSkillsByCategory(category) {
  return await db.select().from(Skill).where(eq(Skill.category, category)).orderBy(Skill.order);
}
async function getSkillsByLevel(level) {
  return await db.select().from(Skill).where(eq(Skill.level, level)).orderBy(Skill.order);
}
async function getAllBlogPosts() {
  return await db.select().from(BlogPost).where(eq(BlogPost.published, true)).orderBy(desc(BlogPost.publishedAt));
}
async function getFeaturedBlogPosts() {
  return await db.select().from(BlogPost).where(and(eq(BlogPost.published, true), eq(BlogPost.featured, true))).orderBy(desc(BlogPost.publishedAt));
}
async function getBlogPostsByCategory(category) {
  return await db.select().from(BlogPost).where(and(eq(BlogPost.published, true), eq(BlogPost.category, category))).orderBy(desc(BlogPost.publishedAt));
}
async function getRecentBlogPosts(limit = 5) {
  return await db.select().from(BlogPost).where(eq(BlogPost.published, true)).orderBy(desc(BlogPost.publishedAt)).limit(limit);
}
async function saveContactMessage(name, email, subject, message) {
  return await db.insert(Contact).values({
    name,
    email,
    subject,
    message,
    status: "new",
    read: false,
    createdAt: /* @__PURE__ */ new Date()
  });
}

export { getBlogPostsByCategory as a, getRecentBlogPosts as b, getAllBlogPosts as c, getFeaturedProjects as d, getAllProjects as e, getFeaturedSkills as f, getFeaturedBlogPosts as g, getSkillsByCategory as h, getSkillsByLevel as i, getAllSkills as j, saveContactMessage as s };

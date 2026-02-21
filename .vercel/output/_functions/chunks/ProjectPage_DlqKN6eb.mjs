import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { normalizeDatabaseUrl, asDrizzleTable } from '@astrojs/db/runtime';
import { createClient } from '@astrojs/db/db-client/libsql-local.js';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
import { a as getLangFromUrl, $ as $$Layout, u as useTranslations } from './_astro_content_zVkrQXYG.mjs';
import { $ as $$Image } from './_astro_assets_AKK8XZqR.mjs';
/* empty css                          */

const dbUrl = normalizeDatabaseUrl("./db.sqlite", "file:///D:/Proyectos-2026/portafolio/.astro/content.db");
const db = createClient({ url: dbUrl });

const Comment = asDrizzleTable("Comment", {"columns":{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Comment","primaryKey":true}},"postId":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"postId","collection":"Comment","primaryKey":false,"optional":false}},"body":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"body","collection":"Comment","primaryKey":false,"optional":false}},"authorId":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"authorId","collection":"Comment","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Author","primaryKey":true}}}}},"deprecated":false,"indexes":{}}, false);
const Author = asDrizzleTable("Author", {"columns":{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Author","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Author","primaryKey":false,"optional":false}},"country":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"country","collection":"Author","primaryKey":false,"optional":false}}},"deprecated":false,"indexes":{}}, false);

const $$Astro = createAstro();
const $$ProjectPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectPage;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { project } = Astro2.props;
  let comentarios = await db.select().from(Comment).where(eq(Comment.postId, project.data.id));
  let authores = await db.select().from(Author);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const comment = formData.get("comment");
    const name = formData.get("name");
    const country = formData.get("country");
    if (!comment || !name || !country) {
      console.error("Faltan datos en el formulario");
    } else {
      let author = authores.find((a) => a.name === name && a.country === country);
      if (!author) {
        const newAuthorId = authores.length > 0 ? Math.max(...authores.map((a) => a.id)) + 1 : 1;
        await db.insert(Author).values({
          id: newAuthorId,
          name: name.toString(),
          country: country.toString()
        });
        author = { id: newAuthorId, name: name.toString(), country: country.toString() };
        authores.push(author);
      }
      const newCommentId = comentarios.length > 0 ? Math.max(...comentarios.map((c) => c.id)) + 1 : 1;
      await db.insert(Comment).values({
        id: newCommentId,
        postId: project.data.id,
        body: comment.toString(),
        authorId: author.id
      });
      comentarios = await db.select().from(Comment).where(eq(Comment.postId, project.data.id));
    }
  }
  const formattedDate = new Intl.DateTimeFormat(lang, {
    dateStyle: "long"
  }).format(project.data.publishDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.data.title, "data-astro-cid-gkjf3u6o": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-surface rounded-2xl py-12 container mb-12" data-astro-cid-gkjf3u6o> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full aspect-video object-cover h-96 lg:h-[30rem] xl:h-[36rem] rounded-2xl mb-8", "src": project.data.cover, "alt": project.data.title, "data-astro-cid-gkjf3u6o": true })} <div class="max-w-4xl mx-auto px-4" data-astro-cid-gkjf3u6o> <h1 class="text-4xl lg:text-5xl font-bold text-text-main mb-4" data-astro-cid-gkjf3u6o> ${project.data.title} </h1> <p class="text-lg text-text-secondary mb-6" data-astro-cid-gkjf3u6o> ${project.data.description} </p> <div class="flex flex-wrap gap-4 mb-8" data-astro-cid-gkjf3u6o> <div class="text-sm text-text-secondary" data-astro-cid-gkjf3u6o> <strong data-astro-cid-gkjf3u6o>${t("nav.projects")}:</strong> ${formattedDate} </div> <a${addAttribute(project.data.url, "href")} target="_blank" rel="noopener noreferrer" class="text-sm text-primary-700 hover:underline" data-astro-cid-gkjf3u6o> ${t("nav.projects")} →
</a> </div> <div class="flex flex-wrap gap-2 mb-8" data-astro-cid-gkjf3u6o> ${project.data.techs.map((tech) => renderTemplate`<span class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm" data-astro-cid-gkjf3u6o> ${tech} </span>`)} </div> <article class="prose prose-lg dark:prose-invert max-w-none
        prose-headings:text-text-main
        prose-p:text-text-secondary
        prose-a:text-primary-700 hover:prose-a:text-primary-600
        prose-strong:text-text-main
        prose-ul:text-text-secondary
        prose-ol:text-text-secondary" data-astro-cid-gkjf3u6o> ${renderSlot($$result2, $$slots["default"])} </article> </div> </section>  <section class="comments-section w-full max-w-2xl mx-auto px-4 py-10" data-astro-cid-gkjf3u6o> <h2 class="text-2xl font-bold text-text-main mb-6" data-astro-cid-gkjf3u6o> ${t("project.comments.title")} </h2> <!-- Lista de comentarios --> <div class="mb-12 flex flex-col gap-4" data-astro-cid-gkjf3u6o> ${comentarios.map((comentario) => {
    const author = authores.find(
      (author2) => author2.id === comentario.authorId
    );
    return renderTemplate`<div class="flex items-start space-x-4 bg-surface p-4 rounded-lg shadow-md" data-astro-cid-gkjf3u6o> <div class="flex-shrink-0" data-astro-cid-gkjf3u6o> <img${addAttribute(`https://flagsapi.com/${author?.country}/flat/64.png`, "src")} alt="Bandera" class="w-12 h-12 rounded-full" data-astro-cid-gkjf3u6o> </div> <div class="flex-1" data-astro-cid-gkjf3u6o> <b class="text-text-main" data-astro-cid-gkjf3u6o>${author?.name}</b> <p class="text-text-secondary mt-1" data-astro-cid-gkjf3u6o>${comentario.body}</p> </div> </div>`;
  })} </div> <!-- Formulario de comentarios --> <form method="post" id="commentForm" class="space-y-6 bg-surface p-6 rounded-lg shadow-md" data-astro-cid-gkjf3u6o> <div class="flex flex-row items-center gap-4 mb-4" data-astro-cid-gkjf3u6o> <div class="w-12 h-12 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center" data-astro-cid-gkjf3u6o> <span class="text-2xl" data-astro-cid-gkjf3u6o>🌍</span> </div> <div class="flex-1" data-astro-cid-gkjf3u6o> <label for="name" class="block text-sm font-medium text-text-main mb-1" data-astro-cid-gkjf3u6o> ${t("project.comments.name")}:
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
            bg-white dark:bg-gray-800 text-text-main
            focus:ring-2 focus:ring-primary-500 focus:border-transparent" data-astro-cid-gkjf3u6o> </div> </div> <input type="hidden" name="country" value="MX" data-astro-cid-gkjf3u6o> <div data-astro-cid-gkjf3u6o> <label for="comment" class="block text-sm font-medium text-text-main mb-2" data-astro-cid-gkjf3u6o> ${t("project.comments.comment")}:
</label> <textarea id="comment" name="comment" rows="4" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md
          bg-white dark:bg-gray-800 text-text-main
          focus:ring-2 focus:ring-primary-500 focus:border-transparent" data-astro-cid-gkjf3u6o></textarea> </div> <button type="submit" class="w-full bg-primary-700 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-md transition duration-200" data-astro-cid-gkjf3u6o> ${t("project.comments.send")} </button> </form> </section> ` })} `;
}, "D:/Proyectos-2026/portafolio/src/components/pages/ProjectPage.astro", void 0);

export { $$ProjectPage as $ };

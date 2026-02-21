import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_uUssfg5y.mjs';
import 'piccolore';
import { a as getLangFromUrl, $ as $$Layout, u as useTranslations } from './_astro_content_uRh5PISs.mjs';
import { $ as $$Image } from './_astro_assets_DEwNP_oA.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$ProjectPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectPage;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const { project } = Astro2.props;
  const formattedDate = new Intl.DateTimeFormat(lang, {
    dateStyle: "long"
  }).format(project.data.publishDate);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.data.title, "data-astro-cid-gkjf3u6o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-surface rounded-2xl py-12 container mb-12" data-astro-cid-gkjf3u6o> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full aspect-video object-cover h-96 lg:h-[30rem] xl:h-[36rem] rounded-2xl mb-8", "src": project.data.cover, "alt": project.data.title, "data-astro-cid-gkjf3u6o": true })} <div class="max-w-4xl mx-auto px-4" data-astro-cid-gkjf3u6o> <h1 class="text-4xl lg:text-5xl font-bold text-text-main mb-4" data-astro-cid-gkjf3u6o> ${project.data.title} </h1> <p class="text-lg text-text-secondary mb-6" data-astro-cid-gkjf3u6o> ${project.data.description} </p> <div class="flex flex-wrap gap-4 mb-8" data-astro-cid-gkjf3u6o> <div class="text-sm text-text-secondary" data-astro-cid-gkjf3u6o> <strong data-astro-cid-gkjf3u6o>${t("nav.projects")}:</strong> ${formattedDate} </div> <a${addAttribute(project.data.url, "href")} target="_blank" rel="noopener noreferrer" class="text-sm text-primary-700 hover:underline" data-astro-cid-gkjf3u6o> ${t("nav.projects")} →
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
  })} </div> </section> ` })} `;
}, "D:/Proyectos-2026/portafolio/src/components/pages/ProjectPage.astro", void 0);

export { $$ProjectPage as $ };

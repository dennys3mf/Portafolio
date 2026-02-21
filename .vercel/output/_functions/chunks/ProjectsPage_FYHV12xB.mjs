import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, b as createAstro } from './astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { a as getLangFromUrl, c as getEntries, u as useTranslations, d as useTranslatedPath } from './_astro_content_DBlyr6LJ.mjs';
import { $ as $$Image } from './_astro_assets_AKK8XZqR.mjs';

const $$Astro = createAstro();
const $$ProjectsPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsPage;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const { projects } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container px-4 py-16"> <h1 class="text-4xl lg:text-5xl font-bold text-text-main mb-12 text-center"> ${t("nav.proyectos")} </h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map(async (project) => {
    const projectIdCleaned = project.slug.replace(`${lang}/`, "");
    const categories = await getEntries(project.data.category);
    return renderTemplate`<article class="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"> <a${addAttribute(translatePath(`/projects/${projectIdCleaned}`), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": project.data.cover, "alt": project.data.title, "class": "w-full h-48 object-cover" })} </a> <div class="p-6"> <a${addAttribute(translatePath(`/projects/${projectIdCleaned}`), "href")} class="hover:text-primary-700"> <h3 class="text-xl font-bold text-text-main mb-2 line-clamp-1"> ${project.data.title} </h3> </a> <p class="text-text-secondary mb-4 line-clamp-3"> ${project.data.description} </p> <div class="flex flex-wrap gap-2 mb-4"> ${categories.map((category) => renderTemplate`<span class="px-2 py-1 rounded-full text-xs font-medium"${addAttribute(`background-color: ${category.data.color}20; color: ${category.data.color}`, "style")}> ${category.data.name} </span>`)} </div> <div class="flex flex-wrap gap-2"> ${project.data.techs.slice(0, 3).map((tech) => renderTemplate`<span class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs"> ${tech} </span>`)} ${project.data.techs.length > 3 && renderTemplate`<span class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
+${project.data.techs.length - 3} </span>`} </div> </div> </article>`;
  })} </div> </section>`;
}, "D:/Proyectos-2026/portafolio/src/components/pages/ProjectsPage.astro", void 0);

export { $$ProjectsPage as $ };

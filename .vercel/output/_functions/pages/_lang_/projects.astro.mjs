import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from '../../chunks/astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { $ as $$ProjectsPage } from '../../chunks/ProjectsPage_j5xHpujF.mjs';
import { a as getLangFromUrl, b as getCollection, $ as $$Layout } from '../../chunks/_astro_content_Bo6M-qVv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const currentProjects = await getCollection("projects", ({ id }) => {
    return id.startsWith(lang);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectsPage", $$ProjectsPage, { "projects": currentProjects })} ` })}`;
}, "D:/Proyectos-2026/portafolio/src/pages/[lang]/projects.astro", void 0);

const $$file = "D:/Proyectos-2026/portafolio/src/pages/[lang]/projects.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

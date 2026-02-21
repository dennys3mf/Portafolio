import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/_astro_content_Va_eDN4M.mjs';
import { $ as $$ProjectsPage } from '../../chunks/ProjectsPage_B5ObMXoI.mjs';
export { renderers } from '../../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const lang = "en";
  const title = "Projects | Gabriel Marquez";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectsPage", $$ProjectsPage, { "lang": lang })} ` })}`;
}, "D:/Proyectos-2026/portafolio/src/pages/en/projects.astro", void 0);

const $$file = "D:/Proyectos-2026/portafolio/src/pages/en/projects.astro";
const $$url = "/en/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

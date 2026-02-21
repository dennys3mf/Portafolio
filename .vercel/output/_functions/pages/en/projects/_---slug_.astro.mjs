import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from '../../../chunks/astro/server_uUssfg5y.mjs';
import 'piccolore';
import { g as getEntry, $ as $$Layout } from '../../../chunks/_astro_content_uRh5PISs.mjs';
import { $ as $$ProjectPage } from '../../../chunks/ProjectPage_B289HYuu.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const lang = "en";
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/en/");
  }
  const project = await getEntry("projects", `${lang}/${slug}`);
  if (!project) {
    return Astro2.redirect("/en/");
  }
  const title = `${project.data.title} | Gabriel Marquez`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectPage", $$ProjectPage, { "project": project, "lang": lang })} ` })}`;
}, "D:/Proyectos-2026/portafolio/src/pages/en/projects/[...slug].astro", void 0);

const $$file = "D:/Proyectos-2026/portafolio/src/pages/en/projects/[...slug].astro";
const $$url = "/en/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

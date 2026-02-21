import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from '../../../chunks/astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { $ as $$ProjectPage } from '../../../chunks/ProjectPage_CUAUJ89U.mjs';
import { g as getEntry, r as renderEntry } from '../../../chunks/_astro_content_Bo6M-qVv.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { lang, slug } = Astro2.params;
  const project = await getEntry("projects", `${lang}/${slug}`);
  if (!project) {
    return Astro2.redirect("/projects");
  }
  const { Content } = await renderEntry(project);
  return renderTemplate`${renderComponent($$result, "ProjectPage", $$ProjectPage, { "project": project }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "D:/Proyectos-2026/portafolio/src/pages/[lang]/projects/[...slug].astro", void 0);

const $$file = "D:/Proyectos-2026/portafolio/src/pages/[lang]/projects/[...slug].astro";
const $$url = "/[lang]/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

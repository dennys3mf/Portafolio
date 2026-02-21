import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { a as getLangFromUrl, $ as $$Layout, u as useTranslations } from '../chunks/_astro_content_z9ZD0c5f.mjs';
import { $ as $$Navbar, a as $$Projects, b as $$Services, c as $$Skills } from '../chunks/Services_Dh_LISHo.mjs';
import { Smartphone, Code2 } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const title = "Gabriel Marquez | Software Engineer";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="bg-background min-h-screen text-white pt-32 overflow-hidden"> <section id="inicio" class="max-w-6xl mx-auto px-6 pt-10 flex flex-col lg:flex-row items-center gap-16"> <div class="flex-1 text-center lg:text-left z-10"> <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-widest uppercase"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> </span> ${t("hero.status")} </div> <h1 class="text-6xl md:text-8xl font-bold font-sans leading-[1.1] mb-8 tracking-tighter"> ${t("hero.title")} <br> <span class="text-primary italic">${t("hero.titleHighlight")}</span> <br> ${t("hero.titleEnd")} </h1> <p class="text-lg md:text-xl text-slate-400 font-sans max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0"> ${t("hero.subtitle")} </p> <div class="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"> <button class="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-white/5"> ${t("hero.cta")} </button> <div class="flex items-center gap-6 border-l border-white/10 pl-8"> <div class="group flex flex-col items-center gap-2"> <img src="https://cdn.simpleicons.org/kotlin/3b82f6" class="w-7 h-7 group-hover:scale-120 transition-transform" alt="Kotlin"> <span class="text-[10px] font-mono text-slate-500">Kotlin</span> </div> <div class="group flex flex-col items-center gap-2"> <img src="https://cdn.simpleicons.org/flutter/02559b" class="w-7 h-7 group-hover:scale-120 transition-transform" alt="Flutter"> <span class="text-[10px] font-mono text-slate-500">Flutter</span> </div> <div class="group flex flex-col items-center gap-2"> <img src="https://cdn.simpleicons.org/astro/ff5d01" class="w-7 h-7 group-hover:scale-120 transition-transform" alt="Astro"> <span class="text-[10px] font-mono text-slate-500">Astro</span> </div> </div> </div> </div> <div class="flex-1 relative hidden lg:block"> <div class="relative w-full aspect-square flex items-center justify-center"> <div class="absolute w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div> <div class="relative z-10 w-full max-w-md p-1 border border-white/10 rounded-3xl bg-surface/30 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500"> <div class="bg-background rounded-[1.4rem] p-12 flex items-center justify-center border border-white/5"> <span class="text-9xl font-black text-white/10 tracking-tighter select-none">CODE</span> </div> <div class="absolute -top-6 -right-6 p-4 bg-surface border border-white/10 rounded-2xl shadow-2xl animate-bounce"> ${renderComponent($$result2, "Smartphone", Smartphone, { "className": "text-primary", "size": 32 })} </div> <div class="absolute -bottom-6 -left-6 p-4 bg-surface border border-white/10 rounded-2xl shadow-2xl animate-bounce [animation-delay:1s]"> ${renderComponent($$result2, "Code2", Code2, { "className": "text-primary", "size": 32 })} </div> </div> </div> </div> </section> <!-- Sección de Proyectos --> ${renderComponent($$result2, "Projects", $$Projects, {})} <!-- Sección de Servicios --> ${renderComponent($$result2, "Services", $$Services, {})} <!-- Sección de Habilidades --> ${renderComponent($$result2, "Skills", $$Skills, {})} </main> ` })}`;
}, "D:/Proyectos-2026/portafolio/src/pages/en/index.astro", void 0);

const $$file = "D:/Proyectos-2026/portafolio/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

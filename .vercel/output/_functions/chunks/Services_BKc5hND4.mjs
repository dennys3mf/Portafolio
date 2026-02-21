import { c as createComponent, m as maybeRenderHead, r as renderComponent, f as renderScript, a as renderTemplate, d as addAttribute, b as createAstro } from './astro/server_CH_ZUc5U.mjs';
import 'piccolore';
import { Sun, Moon } from 'lucide-react';
/* empty css                         */
import 'clsx';
import { a as getLangFromUrl, e as getLanguageName, f as getLanguages, b as getCollection, c as getEntries, d as useTranslatedPath } from './_astro_content_Bo6M-qVv.mjs';
import { $ as $$Image } from './_astro_assets_AKK8XZqR.mjs';

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="theme-toggle-wrapper" class="theme-toggle-wrapper" data-astro-cid-x3pjskd3> <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark/light theme" title="Toggle dark/light theme" data-astro-cid-x3pjskd3> <div class="toggle-container" data-astro-cid-x3pjskd3> ${renderComponent($$result, "Sun", Sun, { "className": "sun-icon", "size": 18, "data-astro-cid-x3pjskd3": true })} ${renderComponent($$result, "Moon", Moon, { "className": "moon-icon", "size": 18, "data-astro-cid-x3pjskd3": true })} </div> <div class="toggle-slider" data-astro-cid-x3pjskd3></div> </button> </div> ${renderScript($$result, "D:/Proyectos-2026/portafolio/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Proyectos-2026/portafolio/src/components/ThemeToggle.astro", void 0);

const $$Astro$4 = createAstro();
const $$LanguageToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageToggle;
  const currentLang = getLangFromUrl(Astro2.url);
  const languages = getLanguages();
  return renderTemplate`${maybeRenderHead()}<div class="relative group"> <button id="langToggle" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-surface/50 hover:bg-surface/80 transition-colors text-sm font-medium text-text-main" aria-label="Cambiar idioma"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6-4h.01M3 5a2 2 0 012-2h4a1 1 0 010 2H5a1 1 0 01-1-1zm17 0a2 2 0 00-2-2h-4a1 1 0 000 2h4a1 1 0 012 2z"></path> </svg> <span class="uppercase font-bold text-xs">${currentLang}</span> </button> <div id="langMenu" class="absolute top-full right-0 mt-2 w-32 bg-surface border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50"> ${languages.map((lang) => renderTemplate`<a${addAttribute(lang === "es" ? "/" : `/${lang}/`, "href")}${addAttribute(`block px-4 py-2 text-sm transition-colors ${currentLang === lang ? "bg-primary/20 text-primary font-bold" : "text-text-muted hover:text-text-main hover:bg-white/5"}`, "class")}> ${getLanguageName(lang)} </a>`)} </div> </div> ${renderScript($$result, "D:/Proyectos-2026/portafolio/src/components/LanguageToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Proyectos-2026/portafolio/src/components/LanguageToggle.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300"> <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"> <div class="flex items-center gap-2"> <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">G</div> <span class="text-xl font-bold text-text-main tracking-tight font-sans">Gabriel Marquez</span> </div> <div class="hidden md:flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-300"> <a href="#inicio" class="hover:text-blue-500 transition-colors">Inicio</a> <a href="#proyectos" class="hover:text-blue-500 transition-colors">Proyectos</a> <a href="#servicios" class="hover:text-blue-500 transition-colors">Servicios</a> </div> <div class="flex items-center gap-4"> ${renderComponent($$result, "LanguageToggle", $$LanguageToggle, {})} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </div> </div> </nav>`;
}, "D:/Proyectos-2026/portafolio/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const translatePath = useTranslatedPath(lang);
  const allProjects = await getCollection("projects", ({ id, data }) => {
    return id.startsWith(lang) && data.isRelevant === true;
  });
  return renderTemplate`${maybeRenderHead()}<section id="proyectos" class="max-w-6xl mx-auto px-6 py-20" data-astro-cid-amng4zvp> <div class="flex flex-col gap-4 mb-12" data-astro-cid-amng4zvp> <h2 class="text-4xl md:text-5xl font-bold tracking-tight" data-astro-cid-amng4zvp> ${lang === "es" ? "Proyectos Destacados" : "Featured Projects"} </h2> <p class="text-slate-400 text-lg max-w-2xl" data-astro-cid-amng4zvp> ${lang === "es" ? "Una selecci\xF3n de mis trabajos m\xE1s relevantes en desarrollo mobile y web" : "A selection of my most relevant work in mobile and web development"} </p> </div> ${allProjects.length === 0 ? renderTemplate`<div class="text-center py-12" data-astro-cid-amng4zvp> <p class="text-slate-400" data-astro-cid-amng4zvp>${lang === "es" ? "No hay proyectos disponibles" : "No projects available"}</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-amng4zvp> ${allProjects.map(async (project) => {
    const projectIdCleaned = project.slug.replace(`${lang}/`, "");
    const categories = await getEntries(project.data.category);
    return renderTemplate`<article class="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300" data-astro-cid-amng4zvp>  <div class="relative h-48 overflow-hidden" data-astro-cid-amng4zvp> ${renderComponent($$result, "Image", $$Image, { "src": project.data.cover, "alt": project.data.title, "class": "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300", "data-astro-cid-amng4zvp": true })} <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/80" data-astro-cid-amng4zvp></div> </div>  <div class="p-6" data-astro-cid-amng4zvp>  <div class="flex items-center gap-2 mb-3 flex-wrap" data-astro-cid-amng4zvp> ${categories.map((category) => renderTemplate`<span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"${addAttribute(`background-color: ${category.data.color}20; color: ${category.data.color}`, "style")} data-astro-cid-amng4zvp> ${category.data.name} </span>`)} ${project.data.isRelevant && renderTemplate`<span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-400" data-astro-cid-amng4zvp>
Featured
</span>`} </div>  <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors" data-astro-cid-amng4zvp> ${project.data.title} </h3>  <p class="text-slate-400 text-sm mb-4 line-clamp-2" data-astro-cid-amng4zvp> ${project.data.description} </p>  <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-amng4zvp> ${project.data.techs.slice(0, 3).map((tech) => renderTemplate`<span class="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10" data-astro-cid-amng4zvp> ${tech} </span>`)} ${project.data.techs.length > 3 && renderTemplate`<span class="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10" data-astro-cid-amng4zvp>
+${project.data.techs.length - 3} </span>`} </div>  <div class="flex gap-3 pt-4 border-t border-white/10" data-astro-cid-amng4zvp> <a${addAttribute(translatePath(`/projects/${projectIdCleaned}`), "href")} class="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"${addAttribute(lang === "es" ? "Ver detalles del proyecto" : "View project details", "title")} data-astro-cid-amng4zvp> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-amng4zvp><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-amng4zvp></path><polyline points="15 3 21 3 21 9" data-astro-cid-amng4zvp></polyline><line x1="10" y1="14" x2="21" y2="3" data-astro-cid-amng4zvp></line></svg> ${lang === "es" ? "Ver detalles" : "View details"} </a> <a${addAttribute(project.data.url, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors"${addAttribute(lang === "es" ? "Visitar sitio" : "Visit site", "title")} data-astro-cid-amng4zvp> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-amng4zvp><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" data-astro-cid-amng4zvp></path><polyline points="15 3 21 3 21 9" data-astro-cid-amng4zvp></polyline><line x1="10" y1="14" x2="21" y2="3" data-astro-cid-amng4zvp></line></svg> ${lang === "es" ? "Sitio" : "Site"} </a> </div> </div> </article>`;
  })} </div>`} </section> `;
}, "D:/Proyectos-2026/portafolio/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  const lang = getLangFromUrl(Astro2.url);
  const skills = [
    {
      id: 1,
      nameEs: "Kotlin",
      nameEn: "Kotlin",
      category: "language",
      level: "expert",
      icon: "kotlin",
      yearsOfExperience: 5,
      featured: true
    },
    {
      id: 2,
      nameEs: "Flutter",
      nameEn: "Flutter",
      category: "framework",
      level: "advanced",
      icon: "flutter",
      yearsOfExperience: 4,
      featured: true
    },
    {
      id: 3,
      nameEs: "Astro",
      nameEn: "Astro",
      category: "framework",
      level: "advanced",
      icon: "astro",
      yearsOfExperience: 1,
      featured: true
    },
    {
      id: 4,
      nameEs: "TypeScript",
      nameEn: "TypeScript",
      category: "language",
      level: "expert",
      icon: "typescript",
      yearsOfExperience: 3,
      featured: true
    },
    {
      id: 5,
      nameEs: "React",
      nameEn: "React",
      category: "framework",
      level: "advanced",
      icon: "react",
      yearsOfExperience: 3,
      featured: true
    },
    {
      id: 6,
      nameEs: "Tailwind CSS",
      nameEn: "Tailwind CSS",
      category: "tool",
      level: "expert",
      icon: "tailwindcss",
      yearsOfExperience: 3,
      featured: true
    },
    {
      id: 7,
      nameEs: "Firebase",
      nameEn: "Firebase",
      category: "tool",
      level: "advanced",
      icon: "firebase",
      yearsOfExperience: 4,
      featured: true
    },
    {
      id: 8,
      nameEs: "Git",
      nameEn: "Git",
      category: "tool",
      level: "expert",
      icon: "git",
      yearsOfExperience: 6,
      featured: true
    }
  ];
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});
  const categoryLabels = {
    "language": lang === "es" ? "Lenguajes" : "Languages",
    "framework": lang === "es" ? "Frameworks" : "Frameworks",
    "tool": lang === "es" ? "Herramientas" : "Tools",
    "soft-skill": lang === "es" ? "Habilidades Blandas" : "Soft Skills"
  };
  const levelColors = {
    "beginner": "bg-slate-500/20 text-slate-300",
    "intermediate": "bg-blue-500/20 text-blue-300",
    "advanced": "bg-cyan-500/20 text-cyan-300",
    "expert": "bg-primary/20 text-primary"
  };
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="max-w-6xl mx-auto px-6 py-20"> <div class="flex flex-col gap-4 mb-12"> <h2 class="text-4xl md:text-5xl font-bold tracking-tight"> ${lang === "es" ? "Habilidades" : "Skills"} </h2> <p class="text-slate-400 text-lg max-w-2xl"> ${lang === "es" ? "Tecnolog\xEDas y herramientas que domino para crear soluciones de alta calidad" : "Technologies and tools I master to create high-quality solutions"} </p> </div> ${skills.length === 0 ? renderTemplate`<div class="text-center py-12"> <p class="text-slate-400">${lang === "es" ? "No hay habilidades disponibles" : "No skills available"}</p> </div>` : renderTemplate`<div class="space-y-8"> ${Object.entries(skillsByCategory).map(([category, categorySkills]) => renderTemplate`<div> <h3 class="text-lg font-semibold mb-4 text-slate-300"> ${categoryLabels[category] || category} </h3> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"> ${categorySkills.map((skill) => {
    const name = lang === "es" ? skill.nameEs : skill.nameEn;
    const levelLabel = skill.level.charAt(0).toUpperCase() + skill.level.slice(1);
    const colorClass = levelColors[skill.level] || levelColors.intermediate;
    return renderTemplate`<div class="p-4 rounded-lg border border-white/10 bg-surface/30 hover:border-primary/50 hover:bg-surface/50 transition-all group cursor-default"${addAttribute(`${name} - ${levelLabel} (${skill.yearsOfExperience} years)`, "title")}> <div class="flex items-start justify-between mb-2"> <h4 class="font-semibold text-white group-hover:text-primary transition-colors"> ${name} </h4> ${skill.icon && renderTemplate`<img${addAttribute(`https://cdn.simpleicons.org/${skill.icon}/3b82f6`, "src")}${addAttribute(name, "alt")} class="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity">`} </div> <div class="flex items-center gap-2"> <span${addAttribute(`text-xs font-bold px-2 py-1 rounded ${colorClass}`, "class")}> ${levelLabel} </span> ${skill.yearsOfExperience > 0 && renderTemplate`<span class="text-xs text-slate-500"> ${skill.yearsOfExperience} ${skill.yearsOfExperience === 1 ? lang === "es" ? "a\xF1o" : "year" : lang === "es" ? "a\xF1os" : "years"} </span>`} </div> </div>`;
  })} </div> </div>`)} </div>`} </section>`;
}, "D:/Proyectos-2026/portafolio/src/components/Skills.astro", void 0);

const $$Astro = createAstro();
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const lang = getLangFromUrl(Astro2.url);
  const services = [
    {
      id: 1,
      icon: "\u{1F4F1}",
      titleEs: "Desarrollo M\xF3vil",
      titleEn: "Mobile Development",
      descriptionEs: "Aplicaciones nativas y multiplataforma con Kotlin, Flutter y React Native. Experiencias m\xF3viles de alta calidad para iOS y Android.",
      descriptionEn: "Native and cross-platform applications with Kotlin, Flutter and React Native. High-quality mobile experiences for iOS and Android.",
      features: ["Kotlin & Android", "Flutter & Dart", "React Native", "UI/UX Design"]
    },
    {
      id: 2,
      icon: "\u{1F310}",
      titleEs: "Desarrollo Web",
      titleEn: "Web Development",
      descriptionEs: "Sitios web modernos, r\xE1pidos y escalables con Astro, React y tecnolog\xEDas web de \xFAltima generaci\xF3n.",
      descriptionEn: "Modern, fast and scalable websites with Astro, React and cutting-edge web technologies.",
      features: ["Astro.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 3,
      icon: "\u{1F680}",
      titleEs: "Consultor\xEDa T\xE9cnica",
      titleEn: "Technical Consulting",
      descriptionEs: "Asesoramiento en arquitectura de software, selecci\xF3n de tecnolog\xEDas y mejores pr\xE1cticas de desarrollo.",
      descriptionEn: "Advice on software architecture, technology selection and development best practices.",
      features: ["Architecture", "Code Review", "Performance", "Best Practices"]
    },
    {
      id: 4,
      icon: "\u26A1",
      titleEs: "Optimizaci\xF3n & Performance",
      titleEn: "Optimization & Performance",
      descriptionEs: "An\xE1lisis y mejora del rendimiento de aplicaciones existentes. Auditor\xEDa de c\xF3digo y optimizaci\xF3n de recursos.",
      descriptionEn: "Analysis and improvement of existing application performance. Code audit and resource optimization.",
      features: ["Performance Audit", "Code Optimization", "SEO", "Accessibility"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="max-w-6xl mx-auto px-6 py-20" data-astro-cid-g5jplrhu> <div class="flex flex-col gap-4 mb-12 text-center" data-astro-cid-g5jplrhu> <h2 class="text-4xl md:text-5xl font-bold tracking-tight" data-astro-cid-g5jplrhu> ${lang === "es" ? "Servicios" : "Services"} </h2> <p class="text-slate-400 text-lg max-w-2xl mx-auto" data-astro-cid-g5jplrhu> ${lang === "es" ? "Soluciones personalizadas para llevar tus proyectos al siguiente nivel" : "Custom solutions to take your projects to the next level"} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-g5jplrhu> ${services.map((service) => {
    const title = lang === "es" ? service.titleEs : service.titleEn;
    const description = lang === "es" ? service.descriptionEs : service.descriptionEn;
    return renderTemplate`<article class="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 p-8" data-astro-cid-g5jplrhu>  <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-g5jplrhu></div> <div class="relative z-10" data-astro-cid-g5jplrhu>  <div class="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300" data-astro-cid-g5jplrhu> ${service.icon} </div>  <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors" data-astro-cid-g5jplrhu> ${title} </h3>  <p class="text-slate-400 mb-6 leading-relaxed" data-astro-cid-g5jplrhu> ${description} </p>  <div class="flex flex-wrap gap-2" data-astro-cid-g5jplrhu> ${service.features.map((feature) => renderTemplate`<span class="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all" data-astro-cid-g5jplrhu> ${feature} </span>`)} </div> </div>  <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" data-astro-cid-g5jplrhu></div> </article>`;
  })} </div>  <div class="mt-16 text-center" data-astro-cid-g5jplrhu> <div class="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/10 bg-surface/30 backdrop-blur-sm" data-astro-cid-g5jplrhu> <p class="text-lg text-slate-300" data-astro-cid-g5jplrhu> ${lang === "es" ? "\xBFTienes un proyecto en mente?" : "Do you have a project in mind?"} </p> <a${addAttribute(`${lang === "es" ? "" : "/en"}#contacto`, "href")} class="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/20" data-astro-cid-g5jplrhu> ${lang === "es" ? "\xA1Hablemos!" : "Let's talk!"} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g5jplrhu> <line x1="5" y1="12" x2="19" y2="12" data-astro-cid-g5jplrhu></line> <polyline points="12 5 19 12 12 19" data-astro-cid-g5jplrhu></polyline> </svg> </a> </div> </div> </section> `;
}, "D:/Proyectos-2026/portafolio/src/components/Services.astro", void 0);

export { $$Navbar as $, $$Projects as a, $$Services as b, $$Skills as c };

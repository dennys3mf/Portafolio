import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BJsGlgl6.mjs';
import { manifest } from './manifest_i_T_bMb_.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/blog.json.astro.mjs');
const _page2 = () => import('./pages/api/contact.json.astro.mjs');
const _page3 = () => import('./pages/api/projects.json.astro.mjs');
const _page4 = () => import('./pages/api/skills.json.astro.mjs');
const _page5 = () => import('./pages/en/projects.astro.mjs');
const _page6 = () => import('./pages/en/projects/_---slug_.astro.mjs');
const _page7 = () => import('./pages/en.astro.mjs');
const _page8 = () => import('./pages/projects.astro.mjs');
const _page9 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page10 = () => import('./pages/_lang_/projects.astro.mjs');
const _page11 = () => import('./pages/_lang_/projects/_---slug_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/blog.json.ts", _page1],
    ["src/pages/api/contact.json.ts", _page2],
    ["src/pages/api/projects.json.ts", _page3],
    ["src/pages/api/skills.json.ts", _page4],
    ["src/pages/en/projects.astro", _page5],
    ["src/pages/en/projects/[...slug].astro", _page6],
    ["src/pages/en/index.astro", _page7],
    ["src/pages/projects.astro", _page8],
    ["src/pages/projects/[...slug].astro", _page9],
    ["src/pages/[lang]/projects.astro", _page10],
    ["src/pages/[lang]/projects/[...slug].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "c678838e-7133-4fc1-b096-6c906f5ebf78",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

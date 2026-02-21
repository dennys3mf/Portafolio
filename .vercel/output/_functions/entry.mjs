import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C5kwd3Lr.mjs';
import { manifest } from './manifest_CPXEuG4a.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/en/projects/_---slug_.astro.mjs');
const _page2 = () => import('./pages/en.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page5 = () => import('./pages/_lang_/projects.astro.mjs');
const _page6 = () => import('./pages/_lang_/projects/_---slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/projects/[...slug].astro", _page1],
    ["src/pages/en/index.astro", _page2],
    ["src/pages/projects.astro", _page3],
    ["src/pages/projects/[...slug].astro", _page4],
    ["src/pages/[lang]/projects.astro", _page5],
    ["src/pages/[lang]/projects/[...slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d6ba22cc-843e-4d46-9b97-4cb8fd5e10dd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

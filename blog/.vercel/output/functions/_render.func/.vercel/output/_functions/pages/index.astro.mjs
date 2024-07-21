import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, b as createAstro } from '../chunks/astro/server_DymvwJvc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="ja"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Top</title>${renderHead()}</head> <body> <h1>My Astro Site</h1> </body></html>`;
}, "/Users/dnw/workspace/astro-dev/blog/src/pages/index.astro", void 0);

const $$file = "/Users/dnw/workspace/astro-dev/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_CLG0e3Z6.mjs';
import './chunks/astro-designed-error-pages_CGKDLKDl.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_jB8UF0V6.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/dotforge-web/dotforge-web/","cacheDir":"file:///home/runner/work/dotforge-web/dotforge-web/node_modules/.astro/","outDir":"file:///home/runner/work/dotforge-web/dotforge-web/dist/","srcDir":"file:///home/runner/work/dotforge-web/dotforge-web/src/","publicDir":"file:///home/runner/work/dotforge-web/dotforge-web/public/","buildClientDir":"file:///home/runner/work/dotforge-web/dotforge-web/dist/","buildServerDir":"file:///home/runner/work/dotforge-web/dotforge-web/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"* {\n  transition:\n    background-color 0.25s ease,\n    color 0.25s ease,\n    border-color 0.25s ease;\n}\n\n.no-transition,\n.no-transition * {\n  transition: none;\n}\n\nbody {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  background: var(--bg);\n  color: var(--text);\n}\n:root {\n  color-scheme: light dark;\n  --bg: #ffffff;\n  --panel: #f6f8fa;\n  --panel-border: #d0d7de;\n  --button-bg: #f6f8fa;\n  --button-border: #d0d7de;\n  --button-hover: #eaeef2;\n  --icon: #57606a;\n  --icon-hover: #111827;\n  --text: #111827;\n}\n\nhtml.theme-light {\n  color-scheme: light;\n}\n\nhtml.theme-dark {\n  color-scheme: dark;\n  --bg: #20232a;\n  --panel: #21252b;\n  --panel-border: #3e4451;\n  --button-bg: #2c313a;\n  --button-border: #3e4451;\n  --button-hover: #3e4451;\n  --icon: #ced4e0;\n  --icon-hover: #e6e6e6;\n  --text: #e5e9f0;\n}\n\nhtml.theme-solarized {\n  color-scheme: light;\n  --bg: #fdf6e3;\n  --panel: #eee8d5;\n  --panel-border: #93a1a1;\n  --button-bg: #eee8d5;\n  --button-border: #93a1a1;\n  --button-hover: #e4dcc6;\n  --icon: #586e75;\n  --icon-hover: #073642;\n  --text: #073642;\n}\n\nhtml.theme-neon {\n  color-scheme: dark;\n  --bg: #1e1f29;\n  --panel: #21222c;\n  --panel-border: #44475a;\n  --button-bg: #343746;\n  --button-border: #44475a;\n  --button-hover: #44475a;\n  --icon: #bd93f9;\n  --icon-hover: #ff79c6;\n  --text: #ffffff;\n}\n.debug-banner[data-astro-cid-wrgo5dvi]{width:100%;text-align:center;font-size:0.75rem;opacity:0.5;margin-top:0.25rem;margin-bottom:0.25rem;font-family:monospace}"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/work/dotforge-web/dotforge-web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_F4nwkxLv.mjs","/home/runner/work/dotforge-web/dotforge-web/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/home/runner/work/dotforge-web/dotforge-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_gBjyKzZu.mjs","@/components/ArtboardEditor.tsx":"_astro/ArtboardEditor.Cf1wjdfr.js","/home/runner/work/dotforge-web/dotforge-web/src/components/layout/TopBar":"_astro/TopBar.D7WHuUcf.js","@astrojs/preact/client.js":"_astro/client.-hf2h-qu.js","/home/runner/work/dotforge-web/dotforge-web/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.B5WgPpGH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_astro/ArtboardEditor.Cf1wjdfr.js","/_astro/TopBar.D7WHuUcf.js","/_astro/client.-hf2h-qu.js","/_astro/hooks.module.W51YuLhF.js","/_astro/jsxRuntime.module.8-cHyULf.js","/_astro/preact.module.DwQvwsCh.js","/_astro/signals.module.B5WgPpGH.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/chunks/_@astro-renderers_i28lvncl.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_C1gFeI4e.mjs","/_worker.js/chunks/astro-designed-error-pages_CGKDLKDl.mjs","/_worker.js/chunks/astro_Bt5_unxu.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_BU81cTec.mjs","/_worker.js/chunks/index_Bky1e3hi.mjs","/_worker.js/chunks/noop-middleware_jB8UF0V6.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_gBjyKzZu.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/astro/server_CLG0e3Z6.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"gWG/34drJN/lDbkeXSZYgSbIVMZyVs9UBLw8JI4qtOc=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };

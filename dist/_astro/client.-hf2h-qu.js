const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/signals.module.B5WgPpGH.js","_astro/preact.module.DwQvwsCh.js","_astro/hooks.module.W51YuLhF.js"])))=>i.map(i=>d[i]);
import { _, G, J } from './preact.module.DwQvwsCh.js';

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true               && deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

const StaticHtml = ({ value, name, hydrate = true }) => {
  if (!value) return null;
  const tagName = hydrate ? "astro-slot" : "astro-static-slot";
  return _(tagName, { name, dangerouslySetInnerHTML: { __html: value } });
};
StaticHtml.shouldComponentUpdate = () => false;
var static_html_default = StaticHtml;

const sharedSignalMap = /* @__PURE__ */ new Map();
var client_default = (element) => async (Component, props, { default: children, ...slotted }, { client }) => {
  if (!element.hasAttribute("ssr")) return;
  for (const [key, value] of Object.entries(slotted)) {
    props[key] = _(static_html_default, { value, name: key });
  }
  let signalsRaw = element.dataset.preactSignals;
  if (signalsRaw) {
    const { signal } = await __vitePreload(async () => { const { signal } = await import('./signals.module.B5WgPpGH.js');return { signal }},true              ?__vite__mapDeps([0,1,2]):void 0);
    let signals = JSON.parse(
      element.dataset.preactSignals
    );
    for (const [propName, signalId] of Object.entries(signals)) {
      if (Array.isArray(signalId)) {
        signalId.forEach(([id, indexOrKeyInProps]) => {
          const mapValue = props[propName][indexOrKeyInProps];
          let valueOfSignal = mapValue;
          if (typeof indexOrKeyInProps !== "string") {
            valueOfSignal = mapValue[0];
            indexOrKeyInProps = mapValue[1];
          }
          if (!sharedSignalMap.has(id)) {
            const signalValue = signal(valueOfSignal);
            sharedSignalMap.set(id, signalValue);
          }
          props[propName][indexOrKeyInProps] = sharedSignalMap.get(id);
        });
      } else {
        if (!sharedSignalMap.has(signalId)) {
          const signalValue = signal(props[propName]);
          sharedSignalMap.set(signalId, signalValue);
        }
        props[propName] = sharedSignalMap.get(signalId);
      }
    }
  }
  const child = _(
    Component,
    props,
    children != null ? _(static_html_default, { value: children }) : children
  );
  if (client === "only") {
    element.innerHTML = "";
    G(child, element);
  } else {
    J(child, element);
  }
  element.addEventListener("astro:unmount", () => G(null, element), { once: true });
};

export { client_default as default };

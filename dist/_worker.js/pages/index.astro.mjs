globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, k as renderSlot, l as renderComponent, n as renderHead, o as defineScriptVars, h as addAttribute } from '../chunks/astro/server_CLG0e3Z6.mjs';
import { l as l$1, _, H, K } from '../chunks/_@astro-renderers_i28lvncl.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_i28lvncl.mjs';
/* empty css                                 */

var t,r,u$1,i,o=0,f$1=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function p(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d(n){return o=1,h(D,n)}function h(n,u,i){var o=p(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r.__f=true;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=p(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=p(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function j(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u$1===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u$1=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u$1=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

var f=0;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l$1.vnode&&l$1.vnode(l),l}

function InspectorBubble({
  element,
  elementNode,
  onChange
}) {
  const [pos, setPos] = d({
    top: 0,
    left: 0
  });
  y(() => {
    if (!element || !elementNode) return;
    const rect = elementNode.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      // below element
      left: rect.right + 8
      // right of element
    });
  }, [element, elementNode, element?.x, element?.y]);
  if (!element) return null;
  return u("div", {
    style: {
      position: "fixed",
      top: `${pos.top}px`,
      left: `${pos.left}px`,
      background: "white",
      border: "1px solid #ccc",
      padding: "8px 12px",
      borderRadius: "8px",
      fontFamily: "sans-serif",
      fontSize: "13px",
      zIndex: 9999,
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      minWidth: "180px"
    },
    children: [u("div", {
      style: {
        marginBottom: "8px",
        fontWeight: 600
      },
      children: "Text Properties"
    }), u("label", {
      style: {
        display: "block",
        marginBottom: "8px"
      },
      children: ["Text", u("br", {}), u("input", {
        type: "text",
        value: element.text,
        onInput: (e) => {
          element.text = e.currentTarget.value;
          onChange();
        },
        style: {
          width: "100%",
          marginTop: "4px"
        }
      })]
    }), u("label", {
      style: {
        display: "block",
        marginBottom: "8px"
      },
      children: ["Font Size (mm)", u("br", {}), u("input", {
        type: "number",
        value: element.fontSize,
        onInput: (e) => {
          element.fontSize = Number(e.currentTarget.value);
          onChange();
        },
        style: {
          width: "100%",
          marginTop: "4px"
        }
      })]
    })]
  });
}

function ArtboardRenderer({
  artboard,
  selected,
  onSelect
}) {
  const canvasRef = A(null);
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Canvas uses pointer-based interaction; keyboard selection is not applicable for this visual editor.
    // biome-ignore lint/a11y/noStaticElementInteractions: Canvas uses pointer-based interaction; keyboard selection is not applicable for this visual editor.
    u("div", {
      ref: canvasRef,
      style: {
        width: "100%",
        height: "100vh",
        display: "flex",
        overflow: "auto",
        position: "relative",
        background: "var(--bg)"
      },
      onClick: () => onSelect(null),
      children: u("div", {
        style: {
          position: "relative",
          margin: "auto",
          background: "white",
          border: "2px solid var(--panel-border)",
          borderRadius: "6px",
          width: `${artboard.width}mm`,
          height: `${artboard.height}mm`,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          boxSizing: "border-box"
        },
        onClick: (e) => {
          if (e.target === e.currentTarget) onSelect(null);
        },
        children: artboard.elements.map((el) => (
          // biome-ignore lint/a11y/useKeyWithClickEvents: Artboard elements use pointer-based drag/click interaction for visual editing.
          // biome-ignore lint/a11y/noStaticElementInteractions: Artboard elements use pointer-based drag/click interaction for visual editing.
          u("div", {
            onClick: (e) => {
              e.stopPropagation();
              onSelect(el, e.currentTarget);
            },
            style: {
              position: "absolute",
              left: el.x,
              top: el.y,
              padding: "1px 2px",
              color: "black",
              background: selected === el ? "rgba(0,0,255,0.1)" : "transparent",
              border: selected === el ? "1px solid rgba(0,0,255,0.4)" : "none",
              cursor: "pointer",
              fontSize: `${el.fontSize}mm`,
              fontFamily: "sans-serif",
              userSelect: "none"
            },
            children: el.text
          }, el.id)
        ))
      })
    })
  );
}

function ArtboardEditor({
  artboard
}) {
  const [selected, setSelected] = d(null);
  const [selectedNode, setSelectedNode] = d(null);
  const [revision, setRevision] = d(0);
  function handleSelect(el, node) {
    setSelected(el);
    setSelectedNode(node ?? null);
  }
  function forceUpdate() {
    setRevision((r) => r + 1);
  }
  return u("div", {
    style: {
      position: "relative",
      height: "100%",
      width: "100%"
    },
    children: [u(ArtboardRenderer, {
      artboard,
      selected,
      onSelect: handleSelect,
      revision
    }), u(InspectorBubble, {
      element: selected,
      elementNode: selectedNode,
      onChange: forceUpdate
    })]
  });
}

const $$DebugBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="debug-banner" data-astro-cid-wrgo5dvi> ${"0812388b2a862c79b93b610fd2c0207224afb00e"} </div> `;
}, "/home/runner/work/dotforge-web/dotforge-web/src/components/debug/DebugBanner.astro", void 0);

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = ({
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  absoluteStrokeWidth,
  children,
  iconNode,
  class: classes = "",
  ...rest
}) => _(
  "svg",
  {
    ...defaultAttributes,
    width: String(size),
    height: size,
    stroke: color,
    ["stroke-width"]: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    class: ["lucide", classes].join(" "),
    ...rest
  },
  [...iconNode.map(([tag, attrs]) => _(tag, attrs)), ...H(children)]
);

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = ({ class: classes = "", className = "", children, ...props }) => _(
    Icon,
    {
      ...props,
      iconNode,
      class: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${toKebabCase(iconName)}`,
        classes,
        className
      )
    },
    children
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const FileText = createLucideIcon("file-text", [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const LayoutDashboard = createLucideIcon("layout-dashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Palette = createLucideIcon("palette", [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
]);

/**
 * @license lucide-preact v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const User = createLucideIcon("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);

const themeColors = {
  light: "#f6f8fa",
  // GitHub Light panel
  dark: "#21252b",
  // One Dark panel
  solarized: "#eee8d5",
  // Solarized Light panel
  neon: "#21222c"
  // Dracula panel
};
const themes = [{
  id: "system",
  label: "System"
}, {
  id: "light",
  label: "Light"
}, {
  id: "dark",
  label: "Dark"
}, {
  id: "solarized",
  label: "Solarized"
}, {
  id: "neon",
  label: "Neon"
}];
function resolveTheme(theme) {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return theme;
}

function ToolbarIcon({
  label,
  children,
  onClick
}) {
  return u("button", {
    type: "button",
    title: label,
    onClick,
    style: {
      width: "32px",
      height: "32px",
      borderRadius: "6px",
      background: "var(--button-bg)",
      border: "1px solid var(--button-border)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      transition: "background 0.15s, color 0.15s",
      color: "var(--icon)"
    },
    onMouseEnter: (e) => {
      e.currentTarget.style.color = "var(--icon-hover)";
      e.currentTarget.style.background = "var(--button-hover)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.color = "var(--icon)";
      e.currentTarget.style.background = "var(--button-bg)";
    },
    children: K(children, {
      size: 20,
      strokeWidth: 2,
      color: "currentColor"
    })
  });
}

function ThemeButton() {
  const [open, setOpen] = d(false);
  const [theme, setTheme] = d(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("dotforge-theme") || "system";
    }
    return "system";
  });
  const ref = A(null);
  y(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange() {
      const saved = localStorage.getItem("dotforge-theme");
      if (saved === "system" || !saved) {
        const resolved = mediaQuery.matches ? "dark" : "light";
        document.documentElement.className = `theme-${resolved}`;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", themeColors[resolved]);
      }
    }
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  y(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  function applyTheme(t) {
    setTheme(t);
    const resolved = resolveTheme(t);
    document.documentElement.className = `theme-${resolved}`;
    localStorage.setItem("dotforge-theme", t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", themeColors[resolved]);
    setOpen(false);
  }
  return u("div", {
    style: {
      position: "relative"
    },
    ref,
    children: [u(ToolbarIcon, {
      label: "Theme",
      onClick: () => setOpen(!open),
      children: u(Palette, {})
    }), open && u("div", {
      style: {
        position: "absolute",
        top: "40px",
        right: 0,
        background: "var(--panel)",
        border: "1px solid var(--panel-border)",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        padding: "6px 0",
        width: "140px",
        zIndex: 2e3
      },
      children: themes.map((t) => u("button", {
        type: "button",
        onClick: () => applyTheme(t.id),
        style: {
          display: "block",
          width: "100%",
          textAlign: "left",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer",
          color: "var(--text)",
          background: theme === t.id ? "var(--button-hover)" : "transparent",
          transition: "background 0.1s",
          font: "inherit"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "var(--button-hover)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = theme === t.id ? "var(--button-hover)" : "transparent";
        },
        children: t.label
      }, t.id))
    })]
  });
}

function TopBar() {
  return u("div", {
    style: {
      position: "absolute",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--panel)",
      border: "1px solid var(--panel-border)",
      borderRadius: "10px",
      padding: "8px 12px",
      display: "flex",
      gap: "12px",
      zIndex: 1e3,
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
    },
    children: [u(ToolbarIcon, {
      label: "Artboard",
      children: u(LayoutDashboard, {
        size: 20,
        strokeWidth: 2
      })
    }), u(ToolbarIcon, {
      label: "ZPL Editor",
      children: u(FileText, {
        size: 20,
        strokeWidth: 2
      })
    }), u(ToolbarIcon, {
      label: "Account",
      children: u(User, {
        size: 20,
        strokeWidth: 2
      })
    }), u(ThemeButton, {})]
  });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  const themeColorsJson = JSON.stringify(themeColors);
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="no-transition"> <head><meta charset="utf-8"><meta name="theme-color"', "><title>", "</title><script>(function(){", `
            (function() {
                var themeColors = JSON.parse(themeColorsJson);
                var saved = localStorage.getItem("dotforge-theme");
                var resolved;
                if (saved === "system" || !saved) {
                    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    resolved = prefersDark ? "dark" : "light";
                } else {
                    resolved = saved;
                }
                document.documentElement.className = "no-transition theme-" + resolved;
                var meta = document.querySelector('meta[name="theme-color"]');
                if (meta) meta.setAttribute("content", themeColors[resolved] || themeColors.light);
                requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        document.documentElement.classList.remove("no-transition");
                    });
                });
            })();
        })();<\/script>`, "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(themeColors.light, "content"), pageTitle || "DotForge", defineScriptVars({ themeColorsJson }), renderHead(), renderComponent($$result, "DebugBanner", $$DebugBanner, {}), renderComponent($$result, "TopBar", TopBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/dotforge-web/dotforge-web/src/components/layout/TopBar", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]));
}, "/home/runner/work/dotforge-web/dotforge-web/src/layouts/BaseLayout.astro", void 0);

function SampleArtboard() {
  return {
    width: 50,
    height: 30,
    elements: [{
      type: "text",
      x: 5,
      y: 10,
      text: "Hello DotForge",
      fontSize: 3
    }]
  };
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "DotForge - Editor" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArtboardEditor", ArtboardEditor, { "artboard": SampleArtboard(), "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ArtboardEditor.tsx", "client:component-export": "default" })} ` })}`;
}, "/home/runner/work/dotforge-web/dotforge-web/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/dotforge-web/dotforge-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

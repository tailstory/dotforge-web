import { d, A, y } from './hooks.module.W51YuLhF.js';
import { _, H, K } from './preact.module.DwQvwsCh.js';
import { u } from './jsxRuntime.module.8-cHyULf.js';

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

export { TopBar as default };

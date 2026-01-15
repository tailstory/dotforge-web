import { Palette } from "lucide-preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { resolveTheme, type ThemeId, themeColors, themes } from "../lib/theme";
import ToolbarIcon from "./ToolbarIcon";

export default function ThemeButton() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Read saved preference from localStorage (not resolved theme from DOM)
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("dotforge-theme") || "system";
    }
    return "system";
  });
  const ref = useRef<HTMLDivElement>(null);

  // Listen for system preference changes when using "system" theme
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange() {
      const saved = localStorage.getItem("dotforge-theme");
      if (saved === "system" || !saved) {
        const resolved: ThemeId = mediaQuery.matches ? "dark" : "light";
        document.documentElement.className = `theme-${resolved}`;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", themeColors[resolved]);
      }
    }
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function applyTheme(t: string) {
    setTheme(t);
    const resolved = resolveTheme(t);
    document.documentElement.className = `theme-${resolved}`;
    localStorage.setItem("dotforge-theme", t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", themeColors[resolved]);
    setOpen(false);
  }

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <ToolbarIcon label="Theme" onClick={() => setOpen(!open)}>
        <Palette />
      </ToolbarIcon>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: 0,
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
            padding: "6px 0",
            width: "140px",
            zIndex: 2000,
          }}
        >
          {themes.map((t) => (
            <div
              key={t.id}
              onClick={() => applyTheme(t.id)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                color: "var(--text)",
                background:
                  theme === t.id ? "var(--button-hover)" : "transparent",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--button-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  theme === t.id ? "var(--button-hover)" : "transparent")
              }
            >
              {t.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

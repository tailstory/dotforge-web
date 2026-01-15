export type ThemeId = "light" | "dark" | "solarized" | "neon";

export const themeColors: Record<ThemeId, string> = {
  light: "#f6f8fa", // GitHub Light panel
  dark: "#21252b", // One Dark panel
  solarized: "#eee8d5", // Solarized Light panel
  neon: "#21222c", // Dracula panel
};

export const themes = [
  { id: "system", label: "System" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "solarized", label: "Solarized" },
  { id: "neon", label: "Neon" },
] as const;

export function resolveTheme(theme: string): ThemeId {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme as ThemeId;
}

import { FileText, LayoutDashboard, User } from "lucide-preact";
import ThemeButton from "../ThemeButton";
import ToolbarIcon from "../ToolbarIcon";

export default function TopBar() {
  return (
    <div
      style={{
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
        zIndex: 1000,
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      <ToolbarIcon label="Artboard">
        <LayoutDashboard size={20} strokeWidth={2} />
      </ToolbarIcon>

      <ToolbarIcon label="ZPL Editor">
        <FileText size={20} strokeWidth={2} />
      </ToolbarIcon>

      <ToolbarIcon label="Account">
        <User size={20} strokeWidth={2} />
      </ToolbarIcon>

      <ThemeButton />
    </div>
  );
}

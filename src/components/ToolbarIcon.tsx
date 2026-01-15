import { type ComponentChildren, cloneElement } from "preact";

export default function ToolbarIcon({
  label,
  children,
  onClick,
}: {
  label: string;
  children: ComponentChildren;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      onClick={onClick}
      style={{
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
        color: "var(--icon)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--icon-hover)";
        e.currentTarget.style.background = "var(--button-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--icon)";
        e.currentTarget.style.background = "var(--button-bg)";
      }}
    >
      {cloneElement(children, {
        size: 20,
        strokeWidth: 2,
        color: "currentColor",
      })}
    </button>
  );
}

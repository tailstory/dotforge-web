import { Palette } from "lucide-preact";
import { useEffect, useRef, useState } from "preact/hooks";
import ToolbarIcon from "./ToolbarIcon";

export default function ThemeButton() {
	const [open, setOpen] = useState(false);
	const [theme, setTheme] = useState("light");
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const saved = localStorage.getItem("dotforge-theme");
		if (saved) {
			setTheme(saved);
			document.documentElement.className = `theme-${saved}`;
		}
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
		document.documentElement.className = `theme-${t}`;
		localStorage.setItem("dotforge-theme", t);
		setOpen(false);
	}

	const themes = [
		{ id: "light", label: "Light" },
		{ id: "dark", label: "Dark" },
		{ id: "solarized", label: "Solarized" },
		{ id: "neon", label: "Neon" },
	];

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

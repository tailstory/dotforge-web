import { d, y, A } from './hooks.module.W51YuLhF.js';
import { u } from './jsxRuntime.module.8-cHyULf.js';
import './preact.module.DwQvwsCh.js';

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

export { ArtboardEditor as default };

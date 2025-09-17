import { useId, useState } from "react";
import "./Collapse.css";

export default function Collapse({
  title,
  children,
  defaultOpen = false,
  className = "",
  onToggle,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  function toggle() {
    const next = !open;
    setOpen(next);
    onToggle?.(next);
  }

  return (
    <section className={`collapse ${open ? "is-open" : ""} ${className}`}>
      <h3 className="collapse-title">
        <button
          type="button"
          className="collapse-btn"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
        >
          <span className="collapse-btn__label">{title}</span>
          <svg
            className="collapse-btn__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M7 10l5 5 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </h3>

      <div
        id={panelId}
        className="collapse-panel"
        role="region"
        aria-hidden={!open}
      >
        <div className="collapse-panel__inner">{children}</div>
      </div>
    </section>
  );
}

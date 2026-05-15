"use client";

export interface MenuItem {
  key: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface MenuProps {
  items: MenuItem[];
  columns?: 1 | 2;
  onSelect?: (item: MenuItem) => void;
}

export default function Menu({ items, columns = 1, onSelect }: MenuProps) {
  const handleClick = (item: MenuItem) => {
    if (item.disabled) return;
    item.onClick?.();
    onSelect?.(item);
  };

  return (
    <ul className="menu-list" role="menu" style={columns === 2 ? { columns: 2, columnGap: "4ch" } : {}}>
      {items.map((item) => (
        <li key={item.key}>
          <button
            type="button"
            className={`menu-item${item.disabled ? " fg-bright-black" : ""}`}
            onClick={() => handleClick(item)}
            disabled={item.disabled}
            tabIndex={item.disabled ? -1 : 0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick(item);
              }
              if (e.key === " ") {
                e.preventDefault();
                handleClick(item);
              }
            }}
            role="menuitem"
          >
            <span className="menu-bracket">[</span>
            <span className="menu-key">{item.key}</span>
            <span className="menu-bracket">]</span>
            <span className="menu-arrow"> ► </span>
            <span className="menu-desc">{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

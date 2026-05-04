"use client";
import { ReactNode } from "react";

export interface MenuItem {
  key: string;
  label: string;
  href?: string;
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

  const rows = columns === 2
    ? chunk(items, Math.ceil(items.length / 2))
    : items.map(i => [i]);

  return (
    <ul className="menu-list" style={columns === 2 ? { columns: 2, columnGap: "4ch" } : {}}>
      {items.map((item) => (
        <li key={item.key}>
          <div
            className={`menu-item${item.disabled ? " fg-bright-black" : ""}`}
            onClick={() => handleClick(item)}
            tabIndex={item.disabled ? -1 : 0}
            onKeyDown={(e) => e.key === "Enter" && handleClick(item)}
            role="menuitem"
          >
            <span className="menu-bracket">[</span>
            <span className="menu-key">{item.key}</span>
            <span className="menu-bracket">]</span>
            <span className="menu-arrow"> ► </span>
            <span className="menu-desc">{item.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

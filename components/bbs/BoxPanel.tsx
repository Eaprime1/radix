import { ReactNode } from "react";
import { BOX, BoxStyle, boxTop, boxBottom, hline } from "@/lib/box";

interface BoxPanelProps {
  title?: string;
  style?: BoxStyle;
  width?: number;
  children: ReactNode;
  titleColor?: string;
  borderColor?: string;
}

export default function BoxPanel({
  title = "",
  style = "double",
  width = 78,
  children,
  titleColor = "var(--ansi-bright-cyan)",
  borderColor = "var(--ansi-blue)",
}: BoxPanelProps) {
  const b = BOX[style];
  const topLine = boxTop(width, title, style);
  const bottomLine = boxBottom(width, style);

  return (
    <div style={{ color: borderColor, fontFamily: "var(--font-terminal)", lineHeight: 1.2 }}>
      <div style={{ whiteSpace: "pre", overflow: "hidden" }}>
        {title ? (
          <>
            <span>{b.tl}{b.h.repeat(Math.max(0, Math.floor((width - 2 - title.length - 2) / 2)))}</span>
            <span style={{ color: titleColor }}>{` ${title} `}</span>
            <span>{b.h.repeat(Math.max(0, Math.ceil((width - 2 - title.length - 2) / 2)))}{b.tr}</span>
          </>
        ) : (
          <span>{topLine}</span>
        )}
      </div>
      <div>
        {children}
      </div>
      <div style={{ whiteSpace: "pre", overflow: "hidden" }}>
        <span>{bottomLine}</span>
      </div>
    </div>
  );
}

export function HRule({ width = 78, style = "double" as BoxStyle, color = "var(--ansi-blue)" }) {
  const b = BOX[style] as Record<string, string>;
  const tl = b.tee_l ?? b.v ?? "├";
  const tr = b.tee_r ?? b.v ?? "┤";
  return (
    <div style={{ color, whiteSpace: "pre", fontFamily: "var(--font-terminal)", overflow: "hidden" }}>
      {tl}{hline(width - 2, style)}{tr}
    </div>
  );
}

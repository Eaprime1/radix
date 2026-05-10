// CP437 box-drawing character sets
export const BOX = {
  // Single-line
  single: {
    tl: "┌", tr: "┐", bl: "└", br: "┘",
    h: "─", v: "│",
    tee_l: "├", tee_r: "┤", tee_t: "┬", tee_b: "┴",
    cross: "┼",
  },
  // Double-line
  double: {
    tl: "╔", tr: "╗", bl: "╚", br: "╝",
    h: "═", v: "║",
    tee_l: "╠", tee_r: "╣", tee_t: "╦", tee_b: "╩",
    cross: "╬",
  },
  // Double-horizontal, single-vertical
  dh: {
    tl: "╒", tr: "╕", bl: "╘", br: "╛",
    h: "═", v: "│",
    tee_l: "╞", tee_r: "╡",
  },
  // Single-horizontal, double-vertical
  dv: {
    tl: "╓", tr: "╖", bl: "╙", br: "╜",
    h: "─", v: "║",
    tee_l: "╟", tee_r: "╢",
  },
  // Rounded
  round: {
    tl: "╭", tr: "╮", bl: "╰", br: "╯",
    h: "─", v: "│",
  },
  // Block / shadow
  block: {
    full: "█", upper_half: "▀", lower_half: "▄",
    light: "░", medium: "▒", dark: "▓",
    left_half: "▌", right_half: "▊",
  },
  // Misc CP437
  misc: {
    bullet: "•", diamond: "◆", arrow_r: "►", arrow_l: "◄",
    arrow_u: "▲", arrow_d: "▼", check: "√", small_bullet: "·",
  },
} as const;

export type BoxStyle = keyof Omit<typeof BOX, "block" | "misc">;

export function hline(len: number, style: BoxStyle = "single"): string {
  return BOX[style].h.repeat(len);
}

export function boxTop(width: number, title: string, style: BoxStyle = "double"): string {
  const b = BOX[style];
  const inner = width - 2;
  if (!title) return b.tl + hline(inner, style) + b.tr;
  const displayTitle = title.length > inner - 2 ? title.substring(0, inner - 5) + "..." : title;
  const padded = ` ${displayTitle} `;
  const remaining = inner - padded.length;
  const left = Math.max(0, Math.floor(remaining / 2));
  const right = Math.max(0, remaining - left);
  return b.tl + b.h.repeat(left) + padded + b.h.repeat(right) + b.tr;
}

export function boxBottom(width: number, style: BoxStyle = "double"): string {
  const b = BOX[style];
  return b.bl + hline(width - 2, style) + b.br;
}

// ANSI 16-color palette — maps to CSS custom properties
export const ANSI = {
  BLACK:          "var(--ansi-black)",
  RED:            "var(--ansi-red)",
  GREEN:          "var(--ansi-green)",
  YELLOW:         "var(--ansi-yellow)",
  BLUE:           "var(--ansi-blue)",
  MAGENTA:        "var(--ansi-magenta)",
  CYAN:           "var(--ansi-cyan)",
  WHITE:          "var(--ansi-white)",
  BRIGHT_BLACK:   "var(--ansi-bright-black)",
  BRIGHT_RED:     "var(--ansi-bright-red)",
  BRIGHT_GREEN:   "var(--ansi-bright-green)",
  BRIGHT_YELLOW:  "var(--ansi-bright-yellow)",
  BRIGHT_BLUE:    "var(--ansi-bright-blue)",
  BRIGHT_MAGENTA: "var(--ansi-bright-magenta)",
  BRIGHT_CYAN:    "var(--ansi-bright-cyan)",
  BRIGHT_WHITE:   "var(--ansi-bright-white)",
} as const;

export type AnsiColor = typeof ANSI[keyof typeof ANSI];

// Semantic color roles
export const COLOR = {
  // Screen chrome
  SCREEN_BG:      "var(--ansi-black)",
  BORDER:         "var(--ansi-blue)",
  BORDER_TITLE:   "var(--ansi-bright-cyan)",

  // Status bars
  STATUSBAR_BG:   "var(--ansi-blue)",
  STATUSBAR_FG:   "var(--ansi-bright-white)",
  STATUSBAR_KEY:  "var(--ansi-bright-yellow)",

  // Menus
  MENU_ITEM:      "var(--ansi-bright-white)",
  MENU_KEY:       "var(--ansi-bright-cyan)",
  MENU_ARROW:     "var(--ansi-bright-yellow)",
  MENU_DESC:      "var(--ansi-white)",

  // Messages
  MSG_HEADER_FG:  "var(--ansi-bright-cyan)",
  MSG_HEADER_VAL: "var(--ansi-bright-white)",
  MSG_BODY:       "var(--ansi-bright-white)",
  MSG_QUOTE:      "var(--ansi-bright-green)",

  // File areas
  FILE_NAME:      "var(--ansi-bright-cyan)",
  FILE_SIZE:      "var(--ansi-bright-yellow)",
  FILE_DESC:      "var(--ansi-white)",
  FILE_NEW:       "var(--ansi-bright-green)",

  // Prompts
  PROMPT_FG:      "var(--ansi-bright-yellow)",
  PROMPT_INPUT:   "var(--ansi-bright-white)",

  // Highlights
  HIGHLIGHT_BG:   "var(--ansi-cyan)",
  HIGHLIGHT_FG:   "var(--ansi-black)",
  ERROR:          "var(--ansi-bright-red)",
  SUCCESS:        "var(--ansi-bright-green)",
  WARNING:        "var(--ansi-bright-yellow)",
} as const;

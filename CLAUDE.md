# Radix — Claude Session Context

## What radix is

Radix is the shadow aspect of origin. Every system has a prior system that gave
it form — radix is that prior. Ideas enter here before they have an implementation.
They develop, get reviewed, and leave when they're ready.

The leaving is correct. It is what is supposed to happen. But it is always lossy
and always creates pressure.

## What lives here

### The BBS UI design system (`app/`, `components/bbs/`, `styles/`, `lib/`)

A Next.js 15 static app implementing a BBS-era (1980s/90s) visual design system:
- **Design tokens**: ANSI 16-color palette as CSS vars, CP437 box-drawing characters
- **Components**: Terminal (CRT wrapper), StatusBar, BoxPanel, Menu, MessageHeader, FileList, Prompt, ANSIArt
- **Pages**: main menu (`/`), boards (`/boards`), files (`/files`), system info (`/system`)
- **Font**: VT323 (authentic terminal feel)
- **CRT effects**: scanline overlay, phosphor glow via CSS

This is the skin for `telegard_UNEXUSI` (Python BBS engine, separate repo).

### The concept system (`concepts/`)

A structured directory for ideas in development. Each concept has:
- Frontmatter: `title`, `status` (shadow/emerging/graduated), `entered`, `graduated_to`
- Sections: What it is, Why it matters, Current form, Open questions, Connections, Notes

Workflows:
- `radix-review.yml` — posts a first-review checklist on any PR touching concepts/
- `concept-graduate.yml` — opens a tracking issue when a concept is merged as graduated

## The relationship map

```
telegard_UNEXUSI (Python BBS engine)
    ↕ [telegard-radix-bridge — in shadow]
radix (this repo — Next.js BBS UI + concept system)
    ↑ origin for: bbs-ui-system concept
    ↑ shadow for: shadow-origin-model, telegard-radix-bridge
```

## What's next (by priority)

1. **telegard-radix-bridge** — WebSocket layer connecting telegard Python backend
   to the Next.js frontend. Each BBS node = one WS connection. Replace static
   `lib/sysinfo.ts` data with live API responses.

2. **ANSI art renderer** — render real `.ans`/`.asc` files from the telegard file
   library. The `components/bbs/ANSIArt.tsx` currently has static ASCII art only.

3. **Auth flow** — handle + password entry via the `Prompt` component → session
   token → passed in WebSocket header. telegard_UNEXUSI has user auth logic.

4. **shadow-origin-model** — the concept is emerging. It needs a cleaner
   articulation of the graduation criterion (readiness vs. pressure threshold).

## Key files

| File | Purpose |
|---|---|
| `lib/ansi.ts` | ANSI 16-color palette constants |
| `lib/box.ts` | CP437 box-drawing character sets + helpers |
| `lib/sysinfo.ts` | Static system manifest (replace with live API later) |
| `styles/globals.css` | All design tokens + component CSS |
| `components/bbs/` | All BBS UI components |
| `concepts/` | Concept lifecycle documents |
| `.github/workflows/radix-review.yml` | Auto first-review on concept PRs |
| `.github/workflows/concept-graduate.yml` | Graduation tracking |

## Tone

Radix does not explain itself defensively. The shadow does not justify its existence.
When writing concepts, copy, or system text: direct, terse, no hedging.

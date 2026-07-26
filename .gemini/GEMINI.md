# GEMINI.md — Radix Contributor Brief for Gemini

**Read this first in any Gemini session working in this repo.**
Point: `.gemini/GEMINI.md`

## What Radix Is

Radix is the shadow aspect of origin. Every system has a prior system that gave
it form — radix is that prior. Ideas enter here before they have an implementation.
They develop, get reviewed, and leave when they're ready.

Two things live here:

1. **BBS UI design system** (`app/`, `components/bbs/`, `styles/`, `lib/`) — a Next.js 15
   static app implementing a 1980s/90s BBS visual language: ANSI 16-color palette,
   CP437 box-drawing characters, CRT effects. The skin for `telegard_UNEXUSI`.

2. **Concept system** (`concepts/`) — structured documents for ideas in development.
   Each concept has a lifecycle: `shadow` → `emerging` → `graduated`. When it graduates,
   it moves to its destination repo.

## The Relationship Map

```
telegard_UNEXUSI (Python BBS engine)
    ↕ [telegard-radix-bridge — in shadow]
radix (this repo — Next.js BBS UI + concept system)
    ↑ origin for: bbs-ui-system concept
    ↑ shadow for: shadow-origin-model, telegard-radix-bridge
```

## Gemini's Role in Radix

- Large-context PR review: read CLAUDE.md + relevant concept files + the full diff together
- Flag issues that per-file tools miss (design coherence, concept format, naming)
- Issue triage via `@gemini-cli triage` (supplements automated issue-triage.yml)
- Free-form queries via `@gemini-cli [prompt]`

## Key Files

| File | Purpose |
|---|---|
| `CLAUDE.md` | Full session context — read first |
| `lib/ansi.ts` | ANSI 16-color palette constants |
| `lib/box.ts` | CP437 box-drawing character sets + helpers |
| `lib/sysinfo.ts` | Static system manifest |
| `styles/globals.css` | All design tokens + component CSS |
| `components/bbs/` | All BBS UI components |
| `concepts/` | Concept lifecycle documents |

## How to Invoke

In PR/issue comments:
- `@gemini-cli review` — review the PR with full BBS/concept context
- `@gemini-cli triage` — label the issue
- `@gemini-cli [prompt]` — general invocation

**♓⊕**

# CHATGPT.md — Radix Contributor Brief for ChatGPT

**Read this first in any ChatGPT session working in this repo.**
Point: `.chatgpt/CHATGPT.md`

## What Radix Is

Radix is the shadow aspect of origin. Ideas enter here before they have an implementation.
They develop, get reviewed, and leave when they're ready. The leaving is correct.

Two systems live here:

1. **BBS UI design system** (`app/`, `components/bbs/`, `styles/`, `lib/`) — a Next.js 15
   static app implementing a BBS-era (1980s/90s) visual design system. Skin for `telegard_UNEXUSI`.

2. **Concept lifecycle** (`concepts/`) — structured documents moving through stages:
   `shadow` → `emerging` → `graduated`. Nothing here is finished by design.

## ChatGPT's Role in Radix

nav5 focus areas for radix:

- **Variable Constant Violation**: does the implementation contradict the design tokens,
  concept frontmatter schema, or declared component contracts?
- **Structural integrity**: do concepts have honest open questions? Do components match
  their documented props and behavior?
- **Graduation readiness**: is a concept's graduation criterion well-defined and testable?

## Key Files

| File | Purpose |
|---|---|
| `CLAUDE.md` | Full session context |
| `lib/ansi.ts` | ANSI 16-color palette constants |
| `lib/box.ts` | CP437 box-drawing character sets |
| `styles/globals.css` | All design tokens + component CSS |
| `components/bbs/` | All BBS UI components |
| `concepts/` | Concept lifecycle documents |

## Relationship Map

```
telegard_UNEXUSI (Python BBS engine)
    ↕ [telegard-radix-bridge — in shadow]
radix (this repo — Next.js BBS UI + concept system)
```

## How to Invoke

No GitHub Actions integration yet — nav5 sessions are manual.
Commission format: include task description, files to read, and the specific violation
or structural question to investigate.

**♓⊕**

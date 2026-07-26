# Radix Code Review Style Guide

## Project context

Radix is a Next.js 15 static app (BBS UI design system) and a concept lifecycle system.
Primary languages: **TypeScript**, **CSS** (design tokens), **Markdown** (concept docs).
No backend. No API routes. No database. Build output is a static export.

---

## Review priorities (in order)

1. **Security** — no hardcoded secrets, no unsafe eval, no XSS in dynamic content
2. **TypeScript correctness** — proper types, no `any` without justification, no unused imports
3. **CSS design token hygiene** — new color/spacing values must use CSS vars from `styles/globals.css`, not hardcoded hex/px
4. **Component patterns** — BBS components use existing primitives: box-drawing chars from `lib/box.ts`, palette from `lib/ansi.ts`
5. **Concept file format** — frontmatter must include `title`, `status`, `entered`; all required sections present
6. **Workflow YAML** — gate pattern for user-controlled inputs; no raw `github.event.*.body` in `if:` expressions

---

## What NOT to flag

- BBS terminology: CP437, ANSI, CRT, phosphor, scanline, BBS, telegard, sysop — intentional domain language
- Radix vocabulary: shadow, emerging, graduated, radix, the shadow, the leaving — intentional
- Navigo and prima-clock references — internal contributor model
- Concept lifecycle language: "the shadow receives this", "it graduated" — intentional tone
- The `♓⊕` signature — collaborative marker
- Static export constraints — no dynamic routes, no server-side data fetching by design
- Inline CSS for CRT effects — the aesthetic requires it

---

## TypeScript guidance

- Flag: `any` type without a comment explaining why
- Flag: non-null assertion (`!`) on values that could realistically be null
- Flag: `console.log` left in component code
- Do NOT flag: `const` vs `let` pedantry when both are correct
- Do NOT flag: lack of unit tests — this is a design system / concept repo

---

## CSS guidance

- Flag: hardcoded hex colors that should be CSS vars from `styles/globals.css`
- Flag: px spacing values that conflict with the existing grid rhythm
- Do NOT flag: `!important` when used intentionally for CRT effect overrides
- Do NOT flag: vendor prefixes for scanline/phosphor effects

---

## Tone

Direct. One sentence per issue, one for the fix. No hedging.
Match the radix register: terse, no classroom framing.

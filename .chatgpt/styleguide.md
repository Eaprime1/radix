# Radix Style Guide for ChatGPT (nav5)

## Project context

Radix hosts two systems: a **Next.js 15 BBS UI** (TypeScript/CSS) and a **concept lifecycle**
(Markdown). Primary formats: TypeScript, CSS, Markdown. Content tone: direct, terse, no hedging.

The shadow does not justify its existence. When writing or reviewing: one sentence per finding.

---

## Review priorities for nav5 (in order)

1. **Variable Constant Violation** — does the implementation contradict declared invariants?
   - CSS custom property name in `styles/globals.css` ≠ usage in component → violation
   - Color token in `lib/ansi.ts` not matching the ANSI 16-color spec → violation
   - Concept frontmatter field missing or wrong type (`status` not in shadow/emerging/graduated) → violation
   - Component prop types contradicting actual usage → violation
   - Design token defined in CSS not applied consistently across components → violation

2. **Structural integrity**
   - BBS components: do box-drawing characters use the helpers from `lib/box.ts`?
   - Concepts: does each have all required sections? (What it is, Why it matters,
     Current form, Open questions, Connections, Notes)
   - Open questions in concept docs: are they real questions, not rhetorical filler?

3. **Graduation readiness** (concepts only)
   - Is the graduation criterion (readiness vs. pressure threshold) clearly defined?
   - Is `graduated_to` populated if status is `graduated`?

4. **TypeScript hygiene**
   - Missing return types on exported functions
   - `any` used where a specific type is possible
   - Props not typed with explicit interfaces

5. **CSS hygiene**
   - Custom properties not declared in `:root` before use
   - Magic numbers without a corresponding token

---

## What NOT to flag

- BBS terminology: ANSI, CP437, SYSOP, BBS, telnet, node — all intentional
- Radix vocabulary: shadow, emerging, graduated, shadow-origin, radix — all intentional
- CRT effects (scanlines, phosphor glow) — intentional aesthetic, not a bug
- The `♓⊕` signature — collaborative marker
- Lack of test coverage — concept/UI repo, not a logic library

---

## Tone

Direct. One finding per issue.
Match the radix register: terse, architectural, no hedging.

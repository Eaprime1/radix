---
title: "BBS-Era Design System"
status: graduated
entered: 2026-05-04
author: UNEXUSI
graduated_to: "eaprime1/radix — app/, components/bbs/, styles/, lib/"
graduated_on: 2026-05-04
---

# BBS-Era Design System

## What it is

A design language and component library built on BBS-era conventions: ANSI 16-color
palette, CP437 box-drawing characters, terminal typography, CRT effects. Implemented
as a Next.js static app. The visual foundation for telegard_UNEXUSI.

## Why it matters

telegard_UNEXUSI has engine (Python BBS backend) but no skin. Without a design
system, every UI decision is made in isolation. The design system provides the
shared vocabulary — color tokens, spacing, interaction patterns — that makes the
BBS feel coherent.

## Current form

Graduated. Living in this repo as source code:

- `lib/ansi.ts` — ANSI 16-color tokens as CSS custom properties
- `lib/box.ts` — CP437 box-drawing character sets (single, double, round, block)
- `styles/globals.css` — CRT scanlines, phosphor glow, utility classes
- `components/bbs/` — Terminal, StatusBar, BoxPanel, Menu, MessageHeader, FileList, Prompt, ANSIArt
- `app/` — Main menu, boards, files, system pages

## Open questions

- How should live data change the design system? Does a real-time BBS need
  components that the static design doesn't have yet?
- What is the right scope for the ANSI art renderer — full VT100/ANSI parser,
  or a constrained subset sufficient for `.ans`/`.asc` art files?
- Should the design system own auth UI state, or should Prompt remain purely
  presentational and let telegard-radix-bridge manage session logic?

## Connections

- telegard_UNEXUSI (the engine this skin wraps)
- shadow-origin-model (this concept itself demonstrates the model)
- telegard-radix-bridge (the integration layer to build next)

## Notes

---
*2026-05-04* — entered shadow as idea ("BBS-inspired UI")  
*2026-05-04* — emerged through build (Next.js app scaffolded, build passing)  
*2026-05-04* — graduated into eaprime1/radix PR #6

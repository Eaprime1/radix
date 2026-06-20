# Radix suites
Team suites for the Radix project.

## Overview
This repository currently focuses on CI/CD security automation and shared suite documentation. Application code can be added as the project expands.

## Repository layout
- `.github/workflows`: CI/CD and security automation workflows.
- .github/copilot-notes: Working notes and follow-ups for contributors.

## CI/CD Security Hardening
- Upgraded the EthicalCheck workflow to a maintained OWASP ZAP baseline scan action.
- Added workflow concurrency control to avoid overlapping scans.
- Added artifact upload and job-summary publishing for easier security report review.
- Kept scans non-blocking by default (fail_action: false) to encourage iterative hardening.
- Implemented timeouts, safer checkouts, and tighter permissions for all workflows.
# ⊕ radix

> *the root beneath the root*

Radix is the seed. Every system has a prior system that gave it form — radix
is that prior. Concepts enter here before they have an implementation. They
develop, get reviewed, and leave when they're ready. The leaving is correct.

---

## What lives here

### BBS UI Design System

A Next.js 15 static app implementing a BBS-era (1980s/90s) visual design system —
the skin for `telegard_UNEXUSI`.

- **Design tokens** — ANSI 16-color palette as CSS vars, CP437 box-drawing characters
- **Components** — Terminal (CRT wrapper), StatusBar, BoxPanel, Menu, MessageHeader,
  FileList, Prompt, ANSIArt
- **Router** — Navigo v8 hash routing (`/#boards`, `/#files`, `/#system`) — single-session, no reloads
- **Font** — VT323 (authentic terminal feel)
- **CRT effects** — scanline overlay, phosphor glow via CSS

### Concept System

A structured lifecycle for ideas. Each concept moves through: `shadow → emerging → graduated`.

```
concepts/
├── _template.md          ← start here
├── bbs-ui-system.md
├── shadow-origin-model.md
├── telegard-radix-bridge.md
├── sync-to-seed.md
├── branch-naming-protocol.md
└── pre-origin-flow.md
```

---

## Using radix as a template

When you create a new repo from this template, radix gives you:

- The full BBS UI component library (adapt or strip as needed)
- The concept lifecycle system (`concepts/` + review workflows)
- CI/CD hardening (CodeQL, dependency review, Codacy, OWASP ZAP)
- The `radix-review` and `claude-final-review` GitHub Actions workflows

**GitHub templates do not cascade updates.** The `sync-to-seed` concept
(currently emerging) will provide a workflow to pull core workflow updates
from radix into child repos when it graduates.

### Seed instructions for new repos

1. **Create from template** — use the "Use this template" button on GitHub
2. **Set your base branch** — rename `radix` to your buffer branch name
3. **Pick your icon** — replace `⊕` in README with your project's symbol
4. **Update `lib/sysinfo.ts`** — swap in your BBS name, sysop, boards, files
5. **Wire the backend** — replace static sysinfo data with your API calls
6. **Start your first concept** — copy `concepts/_template.md`, enter shadow

---

## Branch structure

| Branch | Role |
|---|---|
| `main` / `master` | Author's canonical version |
| `radix` | Integration buffer — PRs merge here before deploy |
| `֎name֎` | Internal / in development (Armenian eternity, inward) |
| `֍name֍` | Deployed / external-facing (Armenian eternity, outward) |

The eternity symbols encode flow direction. Inward `֎֎` = gathering/developing.
Outward `֍֍` = broadcasting/deployed. See `concepts/branch-naming-protocol.md`.

---

## Review workflows

### Radix First Review (`radix-review.yml`)
Triggers on any PR touching `concepts/`. Validates frontmatter, posts a
structured checklist comment.

### Claude Final Review (`claude-final-review.yml`)
Triggers when `@claude` appears in a PR comment or review. Posts a final
sign-off report covering title format, file hygiene, and concept validity.
If items are found, opens a tracking issue. To trigger: leave a PR comment
mentioning `@claude`.

### Concept Graduation (`concept-graduate.yml`)
Triggers on merge of PRs touching `concepts/`. Opens a tracking issue for
any concept with `status: graduated`.

---

## Relationship map

```
telegard_UNEXUSI (Python BBS engine)
    ↕  telegard-radix-bridge [shadow → emerging]
radix (this repo — Next.js BBS UI + concept system)   ⊕
    ↑  origin for: bbs-ui-system
    ↑  shadow for: shadow-origin-model, telegard-radix-bridge
    ↑  seed for: all child repos
```

---

## Key files

| File | Purpose |
|---|---|
| `lib/router.ts` | Navigo singleton + `useNavigo()` hook |
| `lib/ansi.ts` | ANSI 16-color palette constants |
| `lib/box.ts` | CP437 box-drawing character sets |
| `lib/sysinfo.ts` | Static system manifest (replace with live API) |
| `styles/globals.css` | All design tokens + component CSS |
| `components/bbs/` | All BBS UI components |
| `components/bbs/views/` | Full-screen view components (MainMenu, Boards, Files, System) |
| `concepts/` | Concept lifecycle documents |
| `concepts/_template.md` | Start here for new concepts |

---

## CI/CD Security

- CodeQL analysis (JavaScript/TypeScript)
- Dependency review on PRs
- OWASP ZAP baseline scan (non-blocking by default)
- Codacy static analysis
- Scorecard supply-chain hardening

---

*⊕ radix — the root beneath the root · ♓*

---
title: "Branch Naming Protocol"
status: emerging
entered: 2026-05-05
author: "UNEXUSI"
graduated_to: ""
graduated_on: ""
---

# Branch Naming Protocol

## What it is

A branching convention that uses Armenian eternity signs (֍ ֎) to encode
the flow state of a branch. The direction of the symbols tells you whether
the branch is gathering (internal, developing) or broadcasting (deployed, external).

Armenian eternity signs:
- `֍` (U+058D) — right-facing, energy flowing outward
- `֎` (U+058E) — left-facing, energy flowing inward

## Why it matters

Branch names are the first thing you read. They should carry meaning beyond
just content — they should tell you the state of flow. Is this branch still
drawing in? Or is it ready to push out? The symbols encode this without
requiring a separate status field or label lookup.

## Current form

### Standard branch tiers

| Branch | Role | Convention |
|---|---|---|
| `main` / `master` | Author's canonical version | no symbols |
| `radix` | Buffer and integration layer | no symbols |
| `֎name֎` | Internal / in development | inward symbols (gathering) |
| `֍name֍` | Deployed / external-facing | outward symbols (broadcasting) |

### Flow semantics

Inward `֎֎` — the branch is drawing energy in. Work is arriving, accumulating.
Not yet ready to broadcast. The arrows point toward the center of the name.

Outward `֍֍` — the branch is broadcasting. Deployed, interactive-ready, or
open to external contribution. Arrows point away from the name.

### Proposed flow states

```
֎unexusi֎     developing, internal
֍unexusi֍     live, deployed, external-ready
```

### Transition

When a branch transitions from internal to deployed, a workflow renames it
(or closes it and opens a new branch with the outward symbol). The rename
is logged in the PR description and a tracking issue is opened.

Auto-rename on deploy trigger is cleaner than manual — it removes the
decision burden and makes the symbol change an automatic consequence of
shipping.

### Why not change the branch name mid-life?

Branch name changes break local clones and any hardcoded references.
Options:
1. Accept the disruption — it's intentional ceremony marking deployment
2. Use a symbolic link branch (a tracking branch) that gets renamed while
   the real branch stays put
3. Use GitHub branch protection rename protection + a bot that updates
   dependent references

Open: which approach fits the team's tolerance for ceremony vs. friction?

## Open questions

- Should `֎name֎` → `֍name֍` be triggered by a GitHub deploy event, a manual workflow dispatch, or a PR merge to a specific branch?
- Do third-party tools (Vercel, CI, Codacy) handle Unicode branch names without issues?
- Is `֎name֎` too subtle to read at a glance in the GitHub UI, or does it stand out enough?
- **CI/CD tooling risk**: Git supports non-ASCII refs per spec, but shell scripts,
  Windows filesystems, and some CI runners may not. Test on all target environments
  before adopting. Fallback option: keep branch names ASCII-safe and carry the
  symbol semantics via a GitHub label or tag instead.
- What is the alt-code / emoji keyboard path for contributors who don't have the symbols memorized?

## Connections

- sync-to-seed — sync PRs should target the `֎name֎` gathering branch of each child
- telegard-radix-bridge — the first branch to adopt this naming protocol
- primal — if primal becomes the origin registry, it would track which symbol state each branch is in

## Notes

*2026-05-05* — entered shadow. The symbols were the user's idea. The encoding
semantics (inward = developing, outward = deployed) came from the session.

Unicode input:
- **Windows**: open Character Map (`charmap.exe`), search "Armenian eternity", copy-paste.
  Or in Word/Office: type `058D` then Alt+X to convert in-place.
- **Linux**: Ctrl+Shift+U, type `058d` or `058e`, then Enter.
- **Mac**: use the Unicode Hex Input keyboard (⌥ + 058D / 058E).
- **All platforms**: copy from here — ֍ ֎ — and save to a text snippet/shortcut.

The eternity sign choice is not arbitrary — it resonates with the radix
principle that origins are cycles, not lines.

---
*♓*

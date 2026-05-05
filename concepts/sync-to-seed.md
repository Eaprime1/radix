---
title: "Sync-to-Seed"
status: emerging
entered: 2026-05-05
author: "UNEXUSI"
graduated_to: ""
graduated_on: ""
---

# Sync-to-Seed

## What it is

A workflow pattern that propagates updates from a template repository (the seed)
to all repositories that were created from it. GitHub templates do not cascade —
this fills that gap. When core workflows, tooling, or conventions change in radix,
Sync-to-Seed pushes those changes downstream without overwriting divergent code.

## Why it matters

Template repos are one-shot. The moment someone forks from radix, the connection
is severed. Workflows rot. Security patches don't reach children. Naming
conventions drift. Sync-to-Seed keeps the forest healthy after the seed germinates.

The pressure is: we want radix to remain the authoritative source of the
operational layer (workflows, CI, review patterns) while each child repo owns
its own content and code.

## Current form

Not yet implemented. The pattern would involve:

1. A dispatch event in radix (`workflow_dispatch` or push to radix branch)
2. A manifest file listing all child repositories (`seeds.yml`)
3. The sync step: for each child repo, use the **Git Data API** to create a single
   atomic commit (create blobs → create tree → create commit → update ref),
   then open a PR pointing at that branch. This avoids the multiple-commits-per-file
   problem of calling `create_or_update_file` in a loop.
4. Child repos can opt out per-file via a `.radixignore` in `.github/`

Files to sync (candidates):
- `.github/workflows/radix-review.yml`
- `.github/workflows/claude-final-review.yml`
- `.github/workflows/concept-graduate.yml`
- `concepts/_template.md`

Files never synced (owned by child):
- `README.md`
- `concepts/*.md` (except `_template.md`)
- All application code

## Open questions

- Where does the child repo manifest live — in radix, or in a central primal registry?
- Should the sync PR require approval, or auto-merge on green CI?
- When a child has modified a synced file, does the PR show a conflict or silently skip?
- Is there a version header at the top of synced files so children know which seed revision they're on?

## Connections

- radix (this repo) — the seed
- primal — the potential registry of all child repos
- telegard-radix-bridge — first concrete child repo to receive synced workflows
- branch-naming-protocol — the branch structure that defines where sync PRs target

## Notes

*2026-05-05* — entered shadow. Monica AI summary: "Sync-to-Seed — ensure that
improvements to core workflows are consistently pulled into all derivative
repositories, keeping the entire forest healthy and updated."

The key insight: sync only the operational layer, never the content layer.
The seed provides form; the child provides substance.

---
*♓*

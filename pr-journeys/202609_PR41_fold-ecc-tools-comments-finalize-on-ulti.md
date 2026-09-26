# PR Journey: #41 — Fold ECC Tools comments; finalize on "ultima Probatio"

**Repository:** Eaprime1/radix  
**prima-clock:** 202609262234  
**Branch:** `claude/trusting-faraday-kdoq87` → `main`  
**Author:** @Eaprime1  
**State:** FINALIZED  

## Intent / Summary

Two things custos already has:
- Keep `ecc-tools[bot]`'s audit comments out of the reading path.
- Let finalize answer the Latin workflow's final sign-off, **ultima Probatio**.

## What Arrived

**1. `.github/workflows/minimize-ecc-comments.yml` (new).** This is the same file that's on `main` in custos, naught, nullus and maw.
- Each ECC comment starts one short run that minimizes it as soon as it lands. It's folded as "outdated" and can still be expanded. Comments from anyone else skip the job before a runner starts.
- A `workflow_dispatch` sweep (Actions → *Minimize ECC Tools comments* → PR number) folds every existing ECC comment on a PR.
  - Only a 404 counts as "not a PR". Other API errors are reported as they are.
  - The sweep fails if any comment can't be folded.
- Permissions are `issues: write` and `pull-requests: write`. `github-script` is pinned to the v7.1.0 commit SHA. The workflow acts only on `ecc-tools[bot]` comments.
- ECC is suspended right now, so no new ECC comments arrive. The sweep still folds the ones already posted.

**2. `.github/workflows/finalize-pr.yml`: Latin workflow trigger.** This matches custos#339.
- Finalize now runs on a comment that mentions `@claude` and says `ultima Probatio`.
- `@claude finalize` still works. It now allows any whitespace between the two words, including a line break.
- Recensio and Lustratio comments never finalize, even if they contain the word "finalize".
- Tested against the real comments: fires on `@claude ultima Probatio` and `@claude finalize`, skips `@claude ultima Recensio … or finalize` and `@claude merge when ready`.

`actionlint` passes on both files. Both take effect once merged, because `issue_comment` workflows run from the default branch. Until then, `@claude finalize` is still the phrase that finalizes this PR.

## Resonance

*quiet thread

---*

## The Arc

| Event | prima-clock | Actor |
|---|---|---|
| Opened | 202609230815 | @Eaprime1 |
| Finalized | 202609262234 | @Eaprime1 |

## CI Record

| Check | Result |
|---|---|
| Jshint (reported by Codacy) | ✅ |
| Tslint (reported by Codacy) | ✅ |
| Remark-lint (reported by Codacy) | ✅ |
| Jacksonlinter (reported by Codacy) | ✅ |
| Csslint (reported by Codacy) | ✅ |
| Stylelint (reported by Codacy) | ✅ |
| Codacy Static Code Analysis | ✅ |
| CodeQL | ✅ |
| claude-review | ✅ |
| Analyze (actions) | ✅ |
| build (18.x) | ✅ |
| build (20.x) | ✅ |
| build (22.x) | ✅ |
| dependency-review | ✅ |
| Codacy Security Scan | ✅ |
| GitGuardian Security Checks | ✅ |
| greeting | ✅ |
| label | ✅ |

## DeepSource Record

*Not configured for this repo.*

## Review Scores

| Dimension | Score | Note |
|---|---|---|
| Correctness | 5/5 | 18 CI check(s) — all passed |
| Consistency | 4/5 | Description complete · ethics 0/0 |
| Scope | 5/5 | 2 file(s) changed |
| Verification | 5/5 | 18 check run(s) completed |
| **Valuation** | **High** | 19/20 |

## What Door Does This Open?

The glossary itself is in custos (#359). Should radix link to it, or keep its own copy?

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_01XVihLtjp6k5TStKRVFcQsD

---
**prima-clock:** 202609262234  
**witnessed:** true  
*⊕ Radix — the shadow seals the record · ♓⊕*
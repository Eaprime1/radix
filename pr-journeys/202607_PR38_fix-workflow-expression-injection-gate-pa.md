# PR Journey: #38 — fix: workflow expression injection — gate pattern for all triggers (radix)

**Repository:** Eaprime1/radix  
**prima-clock:** 202607260212  
**Branch:** `claude/nifty-franklin-fxwp3r` → `main`  
**Author:** @Eaprime1  
**State:** FINALIZED  

## Intent / Summary

Fix HIGH-severity expression injection vulnerability (CWE-20) in radix workflow trigger gates.
`${{ github.event.comment.body }}` and `${{ github.event.review.body }}` were referenced
directly in job-level `if:` expressions. Fix: move body checks to gate `run:` steps using
`env:` blocks, gate main steps on `steps.gate.outputs.triggered == 'true'`.

## What Arrived

Three workflow files updated:

- **claude-final-review.yml** — handles two event types (issue_comment + pull_request_review);
  gate step uses `EVENT_NAME` env var to branch between body sources; main step gated on output
- **finalize-pr.yml** — job `if:` checks author_association only (allows `github-actions[bot]`);
  gate step checks `$COMMENT_BODY` via env for `@claude finalize`
- **pr-readiness.yml** — gate checks `@claude check` and explicitly excludes `@claude finalize`;
  Resonance section marked optional (not a gate blocker in radix)

## Resonance

*sealed*

## The Arc

| Event | prima-clock | Actor |
|---|---|---|
| Opened | 202607250000 | @Eaprime1 |
| Finalized | 202607260212 | @Eaprime1 |

## CI Record

| Check | Result |
|---|---|
| Codacy Static Code Analysis | ✅ |
| DeepSource: Shell | ✅ |
| DeepSource: Secrets | ✅ |
| dependency-review | ✅ |
| GitGuardian Security Checks | ✅ |
| claude-review | ⛔ |

*Note: claude-review OIDC failure is expected when the workflow file itself is modified in the PR.*

## DeepSource Record

**Passed:** 2  
**Failed:** 0  
**Skipped:** Language analyzers not applicable to this repo

## Review Scores

| Dimension | Score | Note |
|---|---|---|
| Correctness | 5/5 | CI passed — targeted security fix |
| Consistency | 4/5 | Template complete · ethics 2/2 |
| Scope | 5/5 | 3 file(s) changed |
| Verification | 3/5 | CI checks completed |
| **Valuation** | **High** | 17/20 |

## Ethics Check

- ✅ No secrets or credentials introduced
- ✅ Three-file targeted change — reduces attack surface, behavior unchanged

## What Door Does This Open?

Gate pattern is now canonical across all three repos. The `claude-final-review.yml`
dual-event gate (issue_comment + pull_request_review) is a reusable pattern for any
workflow that needs to respond to both comment and review triggers safely.

---
**prima-clock:** 202607260212  
**witnessed:** true  
*⊕ Radix — the shadow seals the record · ♓⊕*

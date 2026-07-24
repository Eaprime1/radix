# PR Journey: #35 — fix: workflow correctness — regex escape, auth gate, remove @mention

**Repository:** Eaprime1/radix  
**prima-clock:** 202607240524  
**Branch:** `claude/nifty-franklin-fxwp3r` → `main`  
**Author:** @Eaprime1  
**State:** FINALIZED (auto)  

## Intent / Summary

Fix seven bugs found during Copilot review of the radix PR workflow system, plus align readiness and README to radix's flexible section conventions (Summary/Changes accepted alongside Intent/What Arrived) and optional Resonance gate.

## What Arrived

Five files updated:

- **finalize-pr.yml** — `parseSection` escapes label before `RegExp` construction; `whatDoor` call adds `?`; `ethicsDone` uses `/\[x\]/i`; `allChecks` excludes `readiness`-named checks
- **auto-finalize.yml** — same fixes on two-param variant; `whatDoor` call updated; readiness exclusion added
- **pr-readiness.yml** — regex escape; `ethicsDone` case fix; `intent` and `whatArrived` gain `|| parseSection('Summary')` / `|| parseSection('Changes')` fallbacks; `templateOk` drops `&& resonance` (resonance is optional here); gate table updated to show flexible names and mark resonance as informational; comment upsert switched to `github.paginate`; auth gate added to job `if` condition
- **sovran-voice.yml** — removed `@${author}` mention line and the now-unused `const author` variable
- **pr-journeys/README.md** — Gates section updated: resonance marked optional, section names updated to show flexible alternatives

## The Arc

| Event | prima-clock | Actor |
|---|---|---|
| Opened | 202607240401 | @Eaprime1 |
| Auto-Finalized | 202607240524 | github-actions[bot] |

## CI Record

| Check | Result |
|---|---|
| Final Review ⊕ | ⏭ |
| Final Review ⊕ | ⏭ |
| Jshint (reported by Codacy) | ✅ |
| Tslint (reported by Codacy) | ✅ |
| Remark-lint (reported by Codacy) | ✅ |
| Jacksonlinter (reported by Codacy) | ✅ |
| Csslint (reported by Codacy) | ✅ |
| Stylelint (reported by Codacy) | ✅ |
| Codacy Static Code Analysis | ✅ |
| CodeQL | ✅ |
| PSScriptAnalyzer | ✅ |
| Bandit | ✅ |
| build (18.x) | ✅ |
| build (20.x) | ✅ |
| build (22.x) | ✅ |
| Codacy Security Scan | ✅ |
| API security baseline scan | ✅ |
| PSScriptAnalyzer | ✅ |
| Analyze (actions) | ✅ |
| claude-review | ✅ |
| bandit | ✅ |
| dependency-review | ✅ |
| build | ✅ |
| label | ✅ |
| greeting | ✅ |
| GitGuardian Security Checks | ✅ |

## DeepSource Record

*Not configured for this repo.*

## Review Scores

| Dimension | Score | Note |
|---|---|---|
| Correctness | 5/5 | 26 CI check(s) — all passed |
| Consistency | 5/5 | Description complete · ethics 3/3 |
| Scope | 5/5 | 5 file(s) changed |
| Verification | 5/5 | 26 check run(s) completed |
| **Valuation** | **High** | 20/20 |

## Ethics Check

- ✅ No secrets or credentials introduced
- ✅ Changes are additive fixes only — no behavior changed beyond bug closure and convention alignment
- ✅ Auth gate on `@claude check` limits triggering to OWNER/MEMBER/COLLABORATOR

---
**prima-clock:** 202607240524  
**witnessed:** true  
*⊕ Radix — the shadow seals the record · ♓⊕*
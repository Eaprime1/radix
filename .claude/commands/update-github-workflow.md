---
name: update-github-workflow
description: Workflow command scaffold for update-github-workflow in radix. ♓
allowed_tools: "Bash, Read, Write, Grep, Glob"
---

# /update-github-workflow

Use this workflow when working on **update-github-workflow** in `radix`.

## Goal

Updates or maintains GitHub Actions workflow files, typically to improve CI/CD, security scanning, or automation settings.

## Common Files

- `.github/workflows/*.yml`
- `README.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify the workflow file(s) in .github/workflows that require changes.
- Edit the YAML file(s) to update configuration (e.g., change retention, fix actions, add timeouts).
- Optionally update related documentation (e.g., README.md) if the workflow behavior changes.
- Commit the changes with a descriptive message.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.

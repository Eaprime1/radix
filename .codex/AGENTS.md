# ♓ ECC for Codex CLI

This document provides the repo-local ECC baseline for Codex CLI work in this repository.

## Repo Skill

- Repo-generated Codex skill: `.agents/skills/radix/SKILL.md`
- Claude-facing companion skill: `.claude/skills/radix/SKILL.md`
- Keep user-specific credentials and private MCPs in `~/.codex/config.toml`, not in this repo.

## MCP Baseline

Treat `.codex/config.toml` as the default ECC-safe baseline for work in this repository.
The generated baseline enables GitHub, Context7, Exa, Memory, Playwright, and Sequential Thinking.

## Multi-Agent Support

- Explorer: read-only evidence gathering
- Reviewer: correctness, security, and regression review
- Docs researcher: API and release-note verification

## Workflow Files

- `.claude/commands/update-github-workflow.md`

Use these workflow files as reusable task scaffolds when the detected repository workflows recur.

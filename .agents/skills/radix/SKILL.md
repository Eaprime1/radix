# ♓ radix Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns, conventions, and automated workflows used in the `radix` repository. The repository primarily contains GitHub Actions workflows (YAML). It covers workflow file organization, conventions, and how to maintain GitHub Actions workflows. By following these guidelines, contributors can ensure consistency and reliability across the codebase.

## Coding Conventions

### File Naming
- Use **lowercase-kebab-case** for workflow file names.
  - Example: `ci.yml`, `nextjs.yml`

### Workflow Files
- Workflow files live in `.github/workflows/`.
- Use YAML format (`.yml` or `.yaml`).
- Pin action versions with `@v4` (e.g., `actions/checkout@v4`).

### Commit Messages
- Freeform style, typically concise (~56 characters).
  - Example: `fix: correct action version in ci workflow`

## Workflows

### update-github-workflow
**Trigger:** When someone wants to modify, fix, or enhance automated workflows in the repository.
**Command:** `/update-github-workflow`

1. Identify the workflow file(s) in `.github/workflows` that require changes.
2. Edit the YAML file(s) to update configuration (e.g., change retention, fix actions, add timeouts).
3. Optionally update related documentation (e.g., `README.md`) if the workflow behavior changes.
4. Commit the changes with a descriptive message.

**Files Involved:**
- `.github/workflows/*.yml`
- `README.md`

**Example:**
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

## Testing Patterns

- The repository uses GitHub Actions for CI/CD automation.
- Workflows are verified by triggering them via push or pull request events.

## Commands

| Command                 | Purpose                                                        |
|-------------------------|----------------------------------------------------------------|
| /update-github-workflow | Initiate or request updates to GitHub Actions workflow files.  |

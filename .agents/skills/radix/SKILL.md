```markdown
# radix Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns, coding conventions, and automated workflows used in the `radix` TypeScript repository. It covers file organization, code style, testing approaches, and how to maintain GitHub Actions workflows. By following these guidelines, contributors can ensure consistency and reliability across the codebase.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.ts`, `dataFetcher.test.ts`

### Import Style
- Use **relative imports** for referencing local modules.
  - Example:
    ```typescript
    import { fetchData } from './dataFetcher';
    ```

### Export Style
- Use **named exports** rather than default exports.
  - Example:
    ```typescript
    // In userProfile.ts
    export function getUserProfile(id: string) { ... }

    // In another file
    import { getUserProfile } from './userProfile';
    ```

### Commit Messages
- Freeform style, typically concise (~56 characters).
  - Example: `fix: correct typo in userProfile function`

## Workflows

### update-github-workflow
**Trigger:** When someone wants to modify, fix, or enhance automated workflows in the repository.  
**Command:** `/update-workflow`

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

- Test files use the pattern `*.test.*` (e.g., `userProfile.test.ts`).
- The specific testing framework is unknown, but follow the file naming convention for tests.
- Example test file:
  ```typescript
  // userProfile.test.ts
  import { getUserProfile } from './userProfile';

  describe('getUserProfile', () => {
    it('returns user data for valid id', () => {
      // test implementation
    });
  });
  ```

## Commands

| Command           | Purpose                                                        |
|-------------------|----------------------------------------------------------------|
| /update-workflow  | Initiate or request updates to GitHub Actions workflow files.  |
```
# Radix suites
Team suites for the Radix project.

## Overview
This repository currently focuses on CI/CD security automation and shared suite documentation. Application code can be added as the project expands.

## Repository layout
- `.github/workflows`: CI/CD and security automation workflows.
- `.copilot-GitHub/notes`: Working notes and follow-ups for contributors.
- `pr-enhancement-guide.jsx`: Interactive PR enhancement guide component snippet.

## Previewing the PR guide component
This repository does not include a React runtime. To preview `pr-enhancement-guide.jsx` locally:

1. Scaffold a temporary React app: `npm create vite@latest /tmp/pr-guide-preview -- --template react`
2. Replace `/tmp/pr-guide-preview/src/App.jsx` with the contents of `pr-enhancement-guide.jsx` (keeping `export default function PRGuide()`).
3. Run:
   - `cd /tmp/pr-guide-preview`
   - `npm install`
   - `npm run dev`
4. Open the local Vite URL to interact with the guide.

## CI/CD Security Hardening
- Upgraded the EthicalCheck workflow to a maintained OWASP ZAP baseline scan action.
- Added workflow concurrency control to avoid overlapping scans.
- Added artifact upload and job-summary publishing for easier security report review.
- Kept scans non-blocking by default (fail_action: false) to encourage iterative hardening.
- Implemented timeouts, safer checkouts, and tighter permissions for all workflows.

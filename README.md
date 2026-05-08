# Radix suites
Team suites for the Radix project.

## Overview
This repository currently focuses on CI/CD security automation and shared suite documentation. Application code can be added as the project expands.

## Repository layout
- `.github/workflows`: CI/CD and security automation workflows.
- `.copilot-GitHub/notes`: Working notes and follow-ups for contributors.

## CI/CD Security Hardening
- Upgraded the EthicalCheck workflow to a maintained OWASP ZAP baseline scan action.
- Added workflow concurrency control to avoid overlapping scans.
- Added artifact upload and job-summary publishing for easier security report review.
- Kept scans non-blocking by default (fail_action: false) to encourage iterative hardening.
- Implemented timeouts, safer checkouts, and tighter permissions for all workflows.

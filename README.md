# suites
team suites

## CI ideas applied
- Upgraded the EthicalCheck workflow to a maintained OWASP ZAP baseline scan action.
- Added workflow concurrency control to avoid overlapping scans.
- Added artifact upload and job-summary publishing for easier security report review.
- Kept scans non-blocking by default (`fail_action: false`) to encourage iterative hardening.

---
title: "Telegard-Radix Bridge"
status: shadow
entered: 2026-05-04
author: UNEXUSI
graduated_to: ""
graduated_on: ""
---

# Telegard-Radix Bridge

## What it is

The integration layer between telegard_UNEXUSI (Python BBS backend) and radix
(Next.js BBS frontend). Real-time connection: each BBS node = one WebSocket
connection. Messages, file listings, and user state flow live from the backend
to the UI components.

## Why it matters

Right now radix has a static skin with no data beneath it. telegard has an engine
with no face. The bridge is what makes radix a functioning BBS rather than a
design demo.

## Current form

Not yet built. The gap is:
- telegard backend: Python, existing BBS logic (messages, files, users, doors)
- radix frontend: Next.js, static data in `lib/sysinfo.ts`
- bridge: nothing yet

What the bridge needs to do:
1. WebSocket server in telegard (or FastAPI wrapper around it)
2. WebSocket client in radix (`lib/ws.ts`)
3. Message protocol: node connect, board list, message read, file list, user auth
4. Replace static `sysinfo.ts` data with live API responses
5. Auth flow: handle + password → session token → passed in WS header

## Open questions

- WebSocket or SSE? (WS for bidirectional; SSE simpler for read-heavy flows)
- Session management: JWT in the WS? Cookie?
- What does the telegard Python backend currently expose? (need to read the repo)
- Does telegard already have a network layer or is it terminal-only?

## Connections

- telegard_UNEXUSI (the other side of the bridge)
- bbs-ui-system (what the bridge feeds data into)
- shadow-origin-model (this concept is deep in shadow — only pressure, no form yet)

## Notes

---
*2026-05-04* — entered shadow: named as "next milestone" in bbs-ui-system graduation notes

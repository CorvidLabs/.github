---
change: CHG-0001-adopt-trust-1-and-specsync-5-organization-governance
artifact: testing
---

# Testing

- Run `fledge lanes run verify`.
- Run `specsync check --strict --force`.
- Confirm `specsync agents status` reports Claude, Cursor, Codex, and Gemini.
- Run `fledge trust doctor` and `fledge trust verify`.

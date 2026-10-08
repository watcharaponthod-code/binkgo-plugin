---
name: handoff
description: Use when asked to summarise the session, or before ending a turn that changed files in a project with .binkgo/
---

# Handoff

`session_summary` is what the next session reads first and what the person who asked for the work sees on the dashboard. Write it for them.

## Format

- **summary**: two to four sentences. What state is the work in now, and what changed this session. Plain words, in the language the person uses with you; a non-developer should follow it.
- **done**: results, one per line. "Login page remembers the user after refresh", not "edited auth.ts".
- **next**: things someone can start on immediately, most important first. Include anything that is blocked and what it is waiting for.

Each call replaces the previous summary for this session, so always describe the whole session so far, not only the last turn.

## Rules

- State only what is true now. If a test is failing, say so.
- No secrets, keys or passwords.
- If the note that asked for the summary gave a session ref, pass it as `session`.
- Before summarising, make sure finished or blocked tasks are updated with `task_upsert` and checked fixes are saved with `log_fix`.

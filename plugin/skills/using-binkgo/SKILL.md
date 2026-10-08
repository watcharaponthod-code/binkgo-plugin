---
name: using-binkgo
description: Use in a project with a .binkgo/ vault or a Binkgo brief: what to record and when
---

# Using Binkgo

`.binkgo/` is this project's memory. Sessions, touched files and token use are recorded for you; you record what needs judgement, when it happens. The person sees it on the dashboard (`/binkgo:dashboard`) and can edit tasks there, so trust the brief and `read`, not your memory.

## Save tokens: map first

- Before searching or reading around an unfamiliar area, call `project_map` (no args for the index, or `path`). Read the note before the code. A note marked `[changed]` may be out of date: check what changed, then update it.
- After you understand an area, save a note with `project_map` `set`: one summary line, and details a future session would otherwise have to rediscover (entry points, how it connects, how to run or test it, gotchas). Not a file listing.

## What to record

| When | Tool |
|---|---|
| The goal or focus changes | `project_update` |
| Work is planned, started, blocked or finished | `task_upsert` |
| A real choice between alternatives, with the reason | `log_decision` |
| A bug fix you have checked | `log_fix` (see check-before-fix) |
| A file someone will open later (spec, plan, report, page) | `save_artifact` |
| You end a turn that changed files | `session_summary` (see handoff) |

## Writing well

- Write for someone who was not in the conversation, in the language the person uses. Task titles: one short line naming the outcome ("People can sign in"), no dates or versions, one task per outcome. Topic titles: two to four words, a noun phrase for a roadmap row ("Crop health alerts", not a sentence); the goal holds the detail.
- Set `priority` when they say something matters more, `due` only for a date they gave, `blocked_by` when one task cannot start before another, `parent` to split one outcome (one level), `milestone` for a dated goal. Clear with `null`.
- To look something up: `search`, then `read` the ref. Never edit `.binkgo/` by hand; never store secrets.
- No vault yet: `project_init` with the name and a one-sentence goal.

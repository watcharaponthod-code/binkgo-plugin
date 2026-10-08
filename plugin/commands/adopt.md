---
description: Fill an empty Binkgo vault from a long-running project's history (one-time, bounded)
---

Adopt this project into Binkgo: a one-time, bounded backfill so a project that has been running for a while starts with a useful memory. Keep the whole run to about 15 tool calls. Do not read every file, and do not invent history: write only what the sources below show.

1. Call `project_brief`. If there is no vault, call `project_init` with the folder name. If the vault already has a goal, a project map or tasks, tell the user it is already filled and stop.
2. Read the sources, in one batch where you can: `git log -50 --oneline`, the README, `CLAUDE.md` and `AGENTS.md` if they exist, and the top-level folder listing.
3. `project_update`: set the goal in one or two sentences, and the focus if the recent commits make it obvious.
4. `project_map`: save at most 8 notes, one per main area (a folder or module), each a short summary of what it is for and where to start.
5. `task_upsert`: create tasks from open TODO or FIXME comments (use `git grep -n "TODO\|FIXME"`) and from clearly unfinished work in the README. At most 15 tasks, each with a short title.
6. `log_decision`: log at most 5 decisions that the history or docs plainly show (a framework chosen, a rewrite, a dependency swapped). Skip it if none is clear.
7. Finish with `session_summary`, then tell the user in two lines what was recorded (goal, notes, tasks, decisions).

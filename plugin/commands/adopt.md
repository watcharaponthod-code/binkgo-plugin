---
description: Fill an empty Binkgo vault from a long-running project's history (one-time, bounded)
allowed-tools: Bash(node:*), Bash(git:*), Read, Glob, Grep
---

Adopt this project into Binkgo: a one-time, bounded backfill so a project that has been running for a while starts with a useful memory. Keep the whole run to about 15 tool calls. Do not read every file, and do not invent history: write only what the sources below show.

Binkgo has no MCP tools here. Write through Bash, one call per item, as `node "${CLAUDE_PLUGIN_ROOT}/dist/cli.cjs" <tool> '<json>'` (a wrong call answers with the field names). Batch several in one Bash call with `&&` where you can.

1. Run `node "${CLAUDE_PLUGIN_ROOT}/dist/cli.cjs" project_brief`. If it says there is no vault, run `project_init` with `{"name":"<folder name>"}`. If the vault already has a goal, a project map or tasks, tell the user it is already filled and stop.
2. Read the sources, in one batch where you can: `git log -50 --oneline`, the README, `CLAUDE.md` and `AGENTS.md` if they exist, and the top-level folder listing.
3. `project_update`: set `goal` in one or two sentences, and `focus` if the recent commits make it obvious.
4. `project_map` with `set`: save at most 8 notes, one per main area (a folder or module), each `{"set":{"path":"<area>","summary":"<what it is for>","details":"<where to start>"}}`.
5. `task_upsert`: create tasks from open TODO or FIXME comments (use `git grep -n "TODO\|FIXME"`) and from clearly unfinished work in the README. At most 15 tasks, each `{"title":"<short title>"}`.
6. `log_decision` (`title`, `decision`, `why`): log at most 5 decisions that the history or docs plainly show (a framework chosen, a rewrite, a dependency swapped). Skip it if none is clear.
7. Finish by telling the user in two lines what was recorded (goal, notes, tasks, decisions). Your final reply is saved as the session handoff, so end it with a line `Next: …`.

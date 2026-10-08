---
description: Open the Binkgo dashboard (local web page of all projects)
allowed-tools: Bash(node:*)
---

!`node "${CLAUDE_PLUGIN_ROOT}/dist/dashboard.cjs" --open --detach`

The command above has already started the dashboard (or found it running) and opened the browser. Reply with the URL from its output in one line. Do not call any tools.

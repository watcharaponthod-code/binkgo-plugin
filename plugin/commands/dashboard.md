---
description: Open the Binkgo dashboard (local web page of all projects)
---

Start the Binkgo dashboard and tell the user where to open it.

1. Run this command in the background (it keeps running until stopped):

   `node "${CLAUDE_PLUGIN_ROOT}/dist/dashboard.cjs" --open`

2. Read its first line of output, `Binkgo dashboard: <url>`, and report that URL to the user.
3. If it reports that the port is in use, the dashboard is probably already running at http://127.0.0.1:4319/. Say so, or retry with `--port <n>`.

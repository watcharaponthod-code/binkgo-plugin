# Binkgo plugin for Claude Code (free)

AI writes the code. **A person still has to run the project.**
Binkgo gives Claude Code and Codex a memory of the project (what's open, what was decided, which bugs were already fixed), so you can review and steer the work instead of re-explaining it every session.

## Install

```
claude plugin marketplace add watcharaponthod-code/binkgo-plugin
claude plugin install binkgo@binkgo
```

Requires Node.js 18+. Open Claude Code in any git project and you'll see:

```
🌿 Binkgo · my-project: project memory loaded. The AI does the work; you review and steer it.
```

## What you get free

- Automatic session log: files edited, tokens used, start and end of each session
- Tasks, decisions and fixes the AI records as it works, stored as Markdown in `.binkgo/` inside your repo
- A short project brief at every session start, so the AI doesn't start blind
- A warning before the AI edits a file whose bug was already fixed
- Works for teams through git: commit `.binkgo/` and everyone's AI shares the same memory

## The dashboard (paid, 350 THB once)

A board, roadmap, timeline and live AI status for the person in charge: see what every AI session did, correct it, and decide what happens next.
7-day free trial at **https://binkgo.vercel.app**

## Data

Everything stays in your repository and on your machine. No account is needed for the plugin.

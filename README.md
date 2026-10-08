# Binkgo plugin for Claude Code (free)

AI writes the code. **A person still has to run the project.**
Binkgo gives Claude Code and Codex a memory of the project (what's open, what was decided, which bugs were already fixed), so you can review and steer the work instead of re-explaining it every session.

## Install

Paste in a terminal:

```
claude plugin marketplace add watcharaponthod-code/binkgo-plugin && claude plugin install binkgo@binkgo
```

### For a team

Commit this as `.claude/settings.json` in your repo. Teammates who open the project in Claude Code are asked to install Binkgo, one click:

```json
{
  "extraKnownMarketplaces": {
    "binkgo": { "source": { "source": "github", "repo": "watcharaponthod-code/binkgo-plugin" } }
  },
  "enabledPlugins": { "binkgo@binkgo": true }
}
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

Inside Claude Code:

- `/binkgo` shows a project card in the chat: sprint, work in progress, what's next, recent fixes, plus a live status line
- `/binkgo dashboard` opens the web dashboard at once
- `/binkgo login` starts the 7-day trial: approve the code in your browser and it unlocks by itself

## Data

Everything stays in your repository and on your machine. No account is needed for the memory tools; the card and dashboard need a sign-in.

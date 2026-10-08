---
name: check-before-fix
description: Use before fixing a bug or failing test in a project with a .binkgo/ vault
---

# Check Before Fix

The same bug gets "fixed" again and again when nobody remembers the last attempt. Look first.

## Before changing code

1. Call `search` with the symptom in a few words.
2. Call `search` again with `file` set to each file you expect to change.
3. `read` every fix that comes back.
4. Decide:
   - **An active fix covers this symptom.** The earlier fix did not hold or something undid it. Find out which before writing a new one, and tell the user what you found.
   - **An earlier fix was reverted.** Read why. Do not repeat the approach that was reverted.
   - **Nothing relevant.** Go ahead.

If a note appears saying a file "was changed by earlier fixes", treat it the same way: read those fixes before editing. An edit to a file with an active fix may be refused once with a Binkgo note listing the earlier fixes; read them, then retry the edit.

## After the fix

Record it only once you have checked the result (test passes, behaviour confirmed):

- `log_fix` with the symptom as the user would describe it, the actual cause, what you changed, and every file you changed.
- `verified: true` only if you ran something that proves it. Otherwise `false`.
- If this replaces an earlier fix, pass `supersedes` with its ref. If you undid an earlier fix, pass `reverts`.

Do not log attempts that did not work as fixes. Mention them in the session summary instead.

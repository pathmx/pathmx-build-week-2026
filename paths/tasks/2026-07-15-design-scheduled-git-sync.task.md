---
type: task
status: ready
owner: Mark
reviewer: Tram
date: 2026-07-15
due: 2026-07-16
related:
  - ./index.tasks.md
  - ./2026-07-15-provision-muthurd-space.task.md
---

# Design Scheduled Git Sync For Muthurd

## Outcome

Choose a conservative, observable synchronization policy for the served
checkout on `muthurd`, then automate it without overwriting human or Codex work.

---

## Next Move

Agree whether the server is a pull-only deployment checkout or a bidirectional
working copy, including what should happen when the tree is dirty or histories
diverge.

---

## Proposed First Slice

Keep the served checkout on `main` as a deployment copy. Run a user `launchd`
job every five minutes under a non-overlapping lock. It should fetch, then act
only on states that cannot discard work:

| State after fetch | Automated behavior |
| --- | --- |
| Clean and equal | Record success; do nothing. |
| Clean and behind | Fast-forward only, then ask the gateway to refresh. |
| Clean and ahead | Stop and report until push authority is chosen. |
| Dirty | Preserve every file; stop and report. |
| Diverged | Do not merge, rebase, reset, stash, or force-push; stop and report. |
| Offline or unauthenticated | Keep serving the last good checkout and report failure. |

Write bounded logs outside the repository and expose the last result in a
small machine-local status file. A later bidirectional slice may push existing
commits from an Andrew-owned working branch, but it should never invent commits
from a dirty tree or automatically merge them into `main`.

---

## Decision Needed

Choose between one working checkout, where edits immediately affect the public
Space, and a safer two-checkout model: a clean served `main` deployment plus a
separate Andrew/Codex working clone whose branches can be pushed for review.

---

## Done When

- GitHub and the server working tree have explicit authority and writer rules.
- Dirty, ahead, behind, diverged, offline, and authentication states each have
  a safe documented behavior.
- The schedule, lock, logs, health signal, and notification path are chosen.
- Credentials stay outside the repository and have only the required scope.
- The resulting script and scheduler receive failure-path tests before launch.

---

## Activity

- **2026-07-15:** Split from remote provisioning before implementation. The
  initial recommendation is a `launchd` job that fetches frequently and only
  fast-forwards a clean checkout; it must stop and report dirty or diverged
  state rather than stashing, resetting, merging, or force-pushing.
- **2026-07-15:** Remote discovery confirmed anonymous HTTPS fetch works but
  unattended push authentication does not. This makes pull-only deployment a
  safe first slice while branch and credential authority are decided.

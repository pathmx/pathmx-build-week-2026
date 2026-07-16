---
type: task
status: done
owner: Mark
reviewer: Andrew
date: 2026-07-16
due: 2026-07-16
related:
  - ./index.tasks.md
---

# Sync The PathMX Authoring Skill

## Outcome

Use the complete canonical `pathmx-authoring` skill in Build Week and replace
the previous manual-copy process with a repeatable check and synchronization
command owned by the canonical PathMX repository.

---

## Next Move

No synchronization work remains. After a future canonical skill change, use
the canonical check command to detect drift and its write mode to reconcile the
complete package.

---

## Done When

- The complete skill package matches canonical PathMX byte-for-byte.
- One command can detect drift without writing and synchronize intentionally.
- Both skill copies pass structural validation.
- Unrelated Build Week changes remain untouched.

---

## Activity

- **2026-07-16:** The canonical command found eight drifted files, synchronized
  the complete skill package, and now reports no drift. Both copies pass
  `quick_validate.py` and compare byte-for-byte. Three focused sync tests and
  scoped diff checks pass. PathMX `0.1.10` is current, and the focused task
  build reports one Path, 14 written artifacts, and the expected Source in its
  manifest. Visual review was skipped because rendered behavior did not
  change; unrelated Build Week work remains untouched.
- **2026-07-16:** Claimed for the canonical skill reconciliation and repeatable
  sync workflow.

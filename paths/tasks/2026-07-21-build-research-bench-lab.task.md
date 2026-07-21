---
type: task
status: done
owner: Andrew
date: 2026-07-21
related:
  - ../andrew/2026-07-21-next-demo-shortlist.notes.md
  - ../labs/index.path.md
  - ../labs/research-bench/index.demo.md
  - ../labs/dialectic-spiral/index.demo.md
---

# Build A Research Bench Lab

## Outcome

Ship a Labs demo for "What should I believe?" where a learner pins claims,
attaches ordinary citations, rates confidence, and leaves a Codex prompt for the
next discriminating question—all as readable Markdown Source.

---

## Next Move

None for this task. Andrew can run a live response-submission pass when
continuing locally; any resulting interaction issue should get its own task.

---

## Done When

- One contested question frames the bench.
- Learner can work with at least two claims, linked sources, confidence, and
  open questions using ordinary Markdown plus PathMX questions—no invented
  citation syntax.
- Ends with a copyable Codex follow-up prompt grounded in the bench state.
- Linked from `paths/labs/index.path.md`.
- `pathmx build` and exact route lookup pass; Browse/Play checks recorded or
  skipped with reason.

---

## Activity

- **2026-07-21:** Claimed from the next-demo shortlist. Keep MVP citation UX as
  Markdown tables/links and durable questions; pair conceptually with Dialectic
  Spiral later, not as a dependency.
- **2026-07-21:** Authored
  [`paths/labs/research-bench/index.demo.md`](../labs/research-bench/index.demo.md)
  around the contested question "should you always finish the antibiotic
  course?" with two pinned claims, six ordinary Markdown citations balanced
  across both sides (WHO, U.S. CDC public-facing and stewardship pages, NHS,
  the [BMJ 2017 Llewelyn analysis](https://www.bmj.com/content/358/bmj.j3418),
  and the [JAMA Internal Medicine 2016 Spellberg viewpoint](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2536180)),
  a five-option starting-confidence single choice, a five-option post-reading
  better-supported single choice, a long-text "what would change your mind",
  a three-field open-questions Block, and a copyable Codex prompt for the
  next discriminating question. Linked from the
  [Labs hub](../labs/index.path.md). No PathMX citation syntax was invented
  and no learner response or submission is prefilled.

---

## Result

- **Route:** `/labs/research-bench` (verified via
  `bunx pathmx route paths/labs/research-bench/index.demo.md --json -o
  .pathmx-check`).
- **Focused scratch build:**
  `bunx pathmx build paths/labs/research-bench/index.demo.md -o .pathmx-check
  --clean` — Built 1 path, 232 artifacts, 0 deleted, 0 warnings under
  PathMX 0.1.25 in an isolated worktree containing only this task's edits.
- **Root scratch build:**
  `bunx pathmx build paths/index.path.md -o .pathmx-check --clean` — Built 1
  path, 387 artifacts, 0 warnings in that same isolated worktree, confirming
  the new Source and hub link resolve inside the full Build Week graph. A
  parallel root build against the shared workspace (where sibling
  campus-constellation and youtube-watch-recall edits coexist) also
  succeeded, so the addition is orthogonal to sibling work landing in the
  same push window.
- **Manifest check:** `labs/research-bench/index.demo` and its Blocks
  (`the-contested-question`, `competing-claims`, `citations`,
  `initial-confidence`, `better-supported-claim`, `what-would-change-mind`,
  `open-questions`, `codex-prompt`, `what-this-bench-is-not`) all appear in
  the generated `sources.json`.
- **PathMX version:** 0.1.25 (native and repository dependency).
- **Live Player:** skipped — no repository Player listener was running in
  this cloud-agent sandbox, and starting a long-lived server for a one-shot
  verification would outlive the check. The route and Blocks are verified
  from built metadata; a subsequent in-session `pathmx play` will pick this
  Source up on refresh.
- **Integrated main:** PathMX 0.1.26 built the root graph as 1 Path with 410
  artifacts and no warnings; route remains `/labs/research-bench`.

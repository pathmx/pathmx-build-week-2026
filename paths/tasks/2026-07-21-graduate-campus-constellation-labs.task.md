---
type: task
status: done
owner: Andrew
date: 2026-07-21
related:
  - ../labs/campus-constellation/index.demo.md
  - ../labs/campus-constellation/campus-constellation.components.md
  - ../labs/campus-constellation/campus-constellation.css
  - ../labs/index.path.md
  - ../research/campus-constellation-networking.path.md
  - ../andrew/2026-07-21-next-demo-shortlist.notes.md
---

# Graduate Campus Constellation Into Labs

## Outcome

Campus Constellation graduated from `paths/research/` into
`paths/labs/campus-constellation/` as a playable mission Path. Prefilled
learner question fixtures were cleared, the scoped stylesheet was retargeted,
the Labs hub links the new demo, and the original research entry is now a
pointer stub that preserves inbound `related:` links.

---

## Next Move

Follow-on lab work continues from the
[next-demo shortlist](../andrew/2026-07-21-next-demo-shortlist.notes.md).

---

## Done When

- Readiness findings are recorded with concrete blockers or a graduate pass.
- If graduated: Labs hub links the demo; build and exact route succeed; research
  index still finds the Path.
- Prefixed learner `response` / `submission` fixtures are removed or replaced
  with unanswered question Blocks before publish.
- Verification and any skipped live review are recorded.

---

## Readiness findings

1. **PathMX 0.1.25 build:** clean before and after the move. Baseline: 384
   artifacts written, 0 warnings. After the move plus link cleanup: 24
   artifacts written, 0 deleted, 0 warnings.
2. **Prefilled fixtures:** the Source shipped three `response` /
   `submission` fixtures pinned to prior run IDs (`choose-north-star`,
   `set-practice-level`, `next-route-signal`). All three were cleared so the
   published Labs demo greets a learner with unanswered questions.
3. **Literate Components + CSS after relocation:** the eleven components
   (`networking-loop`, `north-star-planner`, `difficulty-explorer`,
   `constellation-map`, `introduction-builder`, `curiosity-ladder`,
   `recovery-flashcards`, `mission-picker`, `evidence-reflection`,
   `follow-up-builder`, `route-advisor`) all resolve in the built demo. The
   scoped stylesheet's `data-pathmx-source` selectors were retargeted to
   `labs/campus-constellation/index.demo`; Play returns the demo with the
   expected `data-pathmx-source` attribute so the scoped background, headings,
   blockquote, and table treatment continue to apply.
4. **Mission-Path posture:** the arc runs from north star → orbit map → 15-second
   introduction → curiosity ladder → awkward-moment rehearsal → 48-hour mission
   → reflection → thank-you → adaptive next route. It stays a rehearsal for one
   real conversation rather than a networking theory dump, and each Block is a
   useful move the learner can leave with.
5. **Accessibility notes (inspected in Source and confirmed in the served
   HTML, not live-emulated):**
    - Narrow width: each component sets container queries around 32–38rem to
      collapse its control grid to one or two columns; the demo uses no
      table-based data grids that would clip at 390 px.
    - Keyboard: all interactive elements are native `<button>`, `<input>`,
      `<select>`, and `<textarea>` with visible 3px focus outlines against the
      dark theme's `--pmx-color-focus` token.
    - Reduced motion: only the recovery flashcards register a short opacity
      transition, and that block is guarded by
      `@media (prefers-reduced-motion:no-preference)` so users who request less
      motion get no animation.
    - Forced colors + print: `campus-constellation.css` includes a
      `@media (forced-colors:active)` block and a `@media print` block that
      neutralize gradients, shadows, and colored text.
    - No-JS: the visible headings, tables, orbit description, ladder prompts,
      mission cards, and thank-you scaffold remain readable Markdown even when
      Literate Components do not enhance.
6. **Inbound links preserved:** the research index still links to the same
   `campus-constellation-networking.path.md` slug (now a graduated stub that
   points to the Labs demo). The `related:` frontmatter references from six
   other tasks and notes continue to resolve. Historical `changes.log.md`
   references were retargeted to the new labs paths so the build reports zero
   unresolved-link warnings. The obsolete `lenubaotram2606` actor session was
   already removed on upstream `main`, so the integration preserved that
   deletion rather than restoring the old session.

## Verification

- `pathmx build` (0.1.25) → 384 artifacts, 0 warnings before; 24 artifacts, 0
  warnings after the move plus link cleanup.
- `pathmx route paths/labs/campus-constellation/index.demo.md` →
  `/labs/campus-constellation`.
- `pathmx route paths/research/campus-constellation-networking.path.md` →
  `/research/campus-constellation-networking.path` (stub still resolves).
- `pathmx play` GET `/labs/campus-constellation` → HTTP 200, page carries
  `data-pathmx-source="labs/campus-constellation/index.demo"` and every one of
  the eleven component tags.
- `pathmx play` GET `/research/campus-constellation-networking.path` → HTTP 200
  and the stub links onward to the Labs demo.
- Live keyboard-tab, narrow-viewport, reduced-motion, and no-JS emulation were
  inspected in Source and in the served HTML but not exercised in an active
  browser session; Andrew or Mark can double-check under review.
- Integrated `main` verification on PathMX 0.1.26 built 1 Path with 410
  artifacts and no warnings; the exact route remains
  `/labs/campus-constellation`.

---

## Activity

- **2026-07-21:** Ran the readiness pass. All six checklist items passed, so
  the Path was moved (not copied) into `paths/labs/campus-constellation/`,
  the scoped stylesheet was retargeted, prefilled fixtures were cleared, the
  Labs hub was linked, the research entry became a pointer stub, and the
  single actor Play session was retargeted alongside the move. `pathmx build`
  is clean at 0.1.25 and Play returns the demo at `/labs/campus-constellation`.
- **2026-07-21:** Claimed from the next-demo shortlist as the default
  post-submission pick. Source currently lives under `paths/research/` and is
  not linked from the Labs hub.

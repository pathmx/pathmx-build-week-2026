---
type: task
status: done
owner: Andrew
reviewer: Mark
date: 2026-07-21
related:
  - ../andrew/2026-07-21-relationship-garden-implementation.plan.md
  - ../andrew/2026-07-21-relationship-garden-outline.notes.md
  - ../labs/relationship-garden/index.demo.md
---

# Build Relationship Garden MVP Lab

## Outcome

Create a readable, playable local-first personal CRM where a learner can see
why one relationship needs attention, understand its parallel contexts, choose
and log a respectful next move, and carry a precise persistence prompt back to
Codex.

---

## Next Move

Mark rehearses the locked Relationship Garden judge cut in the submission
deck: Internship → Priya → resolve thank-you → Pending persistence.

---

## Done When

- Six fictional person Sources and the JSON resource mirror remain in sync.
- The garden supports bed filtering, recency postures, person selection,
  Parallel Lives, and an in-session log-touch flow.
- A weekly attention queue explains its priorities from explicit recency and
  open-loop data without an opaque score.
- The Priya flow supports one next-move update and generates an exact prompt
  for persisting the touch and next move.
- The demo and five-prompt ritual are readable in Markdown and playable at
  `/labs/relationship-garden`.
- Build, exact-route, wide/narrow Player, keyboard, reduced-motion, and
  no-JavaScript fallback checks are recorded, including anything skipped.

---

## Activity

- **2026-07-21:** Andrew rejected Campaign Forge as the third showcase and
  locked Relationship Garden instead. Three read-only agent reviews converged
  on a local-first personal CRM centered on one transparent weekly
  follow-through loop rather than a larger field set, connector layer, or
  sales pipeline.
- **2026-07-21:** Added a three-person weekly attention queue derived only from
  explicit open loops, recency, and no-guilt pins; a visible “why now” in the
  person panel; an editable post-touch next move; an explicit resolved-loop
  control; local-calendar date handling; future-date rejection; unknown-date
  handling; and focus restoration after closing a person.
- **2026-07-21:** PathMX 0.1.25 built the focused Source as one Path with 206
  artifacts and the final root graph with 363 artifacts; exact route lookup
  returned `/labs/relationship-garden`, the component script parsed
  independently, and `git diff --check` passed. The fresh local Player verified
  Internship → Priya → Parallel Lives → touch →
  resolved thank-you: Priya moved from 67-day quiet to recently tended, left
  the two-person queue, kept the revised next move, and generated a precise
  pending-persistence prompt. Browser errors were empty. At 390×844 the
  document, component, and attention queue had no horizontal overflow; closing
  the panel restored focus to Priya. The readable no-JavaScript next-touch
  index, reduced-motion rule, and forced-colors treatment were inspected in
  Source but not re-emulated after this copy-and-queue refinement.
- **2026-07-21:** Claimed the implementation handoff after syncing `main` to
  `e0e663b`. Confirmed native PathMX `0.1.24`; preserved the unrelated
  in-progress My Greenville work while reconciling the upstream task board.
- **2026-07-21:** Built the complete local MVP: six fictional person Sources
  and their verified JSON mirror, a single nonlinear garden instrument, four
  bed filters, recency postures, one-plant Parallel Lives chips, Priya's
  context-bleed caution, browser-local touch logging, an explicit pending-save
  boundary, and five learner-voice Codex prompts. Kept direct manipulation out
  of ordered Player states because filter, selection, and form entry are not a
  linear lesson sequence.
- **2026-07-21:** Focused PathMX build passed with 206 artifacts; the full root
  build passed with 360 artifacts. Exact route lookup returned
  `/labs/relationship-garden` and Priya's Source route. `git diff --check`, the
  five-prompt count, and a structured six-record Markdown/JSON mirror check
  passed. Build output retained the three pre-existing Tufte warnings and two
  unrelated upstream broken links in `paths/work-log/index.path.md`; no new
  Relationship Garden diagnostics appeared.
- **2026-07-21:** Live local Chrome review verified All -> Internship filters
  six plants to Priya and Marcus; Priya exposes alumni-panelist + recruiter
  lives and the caution; tending changes her from 67-day quiet to recent,
  shows pending persistence, fills and copies the Return prompt, and leaves
  console/page logs clear. At 390x844, document and component horizontal
  overflow were both false. Keyboard Tab reached bed filters, the lens, and
  person buttons with a 3px visible outline; reduced-motion removed the plant
  transition; no-JavaScript kept all six fallback records readable; Next/Prev
  Beat and Block navigation round-tripped to the original Play URL.
- **2026-07-21:** The in-app Browser rejected every localhost form with
  `ERR_BLOCKED_BY_CLIENT`, so the equivalent live checks ran in the bundled
  local headless browser. The change log and outgoing checker remain skipped
  because no commit or push was requested; the task stays in progress for
  Andrew's review and publishing decision.

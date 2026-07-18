---
status: active
date: 2026-07-18
related:
  - ../labs/chess/index.demo.md
  - ../tasks/2026-07-15-explore-reference-labs-and-test-authoring-skill.task.md
  - ../tasks/2026-07-18-clarify-player-navigation-and-link-affordances.task.md
  - ../research/resources.path.md
---

# Andrew's Labs Review: Chess, Navigation, And Completion

## Source Material

- [July 18 labs walkthrough](https://www.loom.com/share/0c6e72c323c84ebd8ead8e0256c23f25)
- Review surface: the Build Week labs hub and Chess demo in Browse and Play.
- A transcript was supplied to Codex and summarized here. The raw transcript is
  intentionally not committed.

These are exploratory observations, not accepted requirements. They capture
where Andrew felt oriented, surprised, delighted, or unsure while moving
between the perspective of an experienced user and a first-time learner.

---

## Discovery And Orientation

- Command-K search felt valuable for jumping directly to labs and tasks.
- Search results expose repository-shaped concepts such as folders, Paths, and
  Sources. Andrew could make sense of them, but the distinction may not be
  immediately legible to a beginner.
- Direct navigation from a task result to its Source felt strong.
- The Chess Literate Components dropdown was discoverable and useful once
  noticed.

---

## Link Destinations

- The local Chess lab is intact and its public route returns successfully. The
  external “canonical Chess demo” link and its three neighboring upstream
  runtime and stylesheet links all return 404. PathMX preserves those authored
  destinations correctly, so this is an unavailable target rather than an
  internal-route rewrite failure; local copies of the helper files remain.
- The built document already classifies local links as resolved internal
  relations and GitHub links as external relations. The visible link does not
  tell Andrew whether activation will stay inside the Space or move into the
  browser.
- The generated external anchors have no visible destination indicator and do
  not request a new tab. A useful affordance should distinguish internal from
  external destinations before activation without making ordinary prose
  visually noisy. It should also work for keyboard and screen-reader users and
  make the new-tab versus same-tab behavior deliberate.

---

## Chess Interaction And State

- The interactive board and annotated replay were compelling. The next-action
  message, such as “choose a black piece to move,” could draw more attention.
- After entering the board, keyboard input belongs to the interactive
  component until Andrew deliberately leaves it. That boundary is reasonable,
  but it is not always obvious why Player navigation has stopped responding.
- Reloading resets the board. That may be the intended browser-local state
  contract, but the experience does not communicate whether component state is
  temporary, restorable, or durable.
- Play mode persisting across internal navigation felt useful.

---

## End Of Path

- At the final Beat, repeated forward input produces no visible change. Andrew
  wondered whether the Player was broken or no longer accepting input.
- A positive completion signal could say that the Path is complete and offer
  an intentional next move: return to Browse, revisit, choose another lab, or
  finish.
- Escape provided a way out of focused interaction, but the relationship
  among component focus, Play navigation, and leaving Play needs a clearer
  mental model.

---

## Findings That Need More Evidence

- A login issue was mentioned outside the recorded walkthrough, but there is
  not yet an exact route, authentication state, error message, or reproduction
  sequence to classify it.
- Command-K result language, component-state persistence, and the strength of
  Chess's next-action cue may each deserve separate work only after comparison
  with another lab or the canonical Player.

The actionable navigation questions are tracked in
[Clarify Player Navigation And Link Affordances](../tasks/2026-07-18-clarify-player-navigation-and-link-affordances.task.md).

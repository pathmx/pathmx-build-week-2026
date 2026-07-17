---
type: task
status: review
owner: Tram
reviewer: Mark
date: 2026-07-15
due: 2026-07-18
related:
  - ../research/index.path.md
  - ../research/campus-constellation-networking.path.md
  - ../research/campus-constellation.components.md
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
---

# Contribute Research Explorations And Ideas

## Outcome

Give the project useful outside perspective by adding any relevant research,
exploration, question, or product idea that could shape the learning
experience, evaluation, or final story.

---

## Next Move

Mark reviews the campus-at-night visual system alongside the independent Play
beats, with special attention to narrow layout and keyboard focus.

---

## Done When

- At least one research or idea Source is committed and linked from the index.
- The note distinguishes source material, observations, project implications,
  and the next question or experiment.
- Private links, credentials, learner data, and raw transcripts are excluded.
- A scratch build passes and any actionable follow-up is linked to a task.

---

## Activity

- **2026-07-17:** Fixed direct component controls after rendered testing showed
  that enabled options did not change their visible selection. Every component
  now declares an initial state, reads `state.get()` inside state-change
  notifications, and renders direct-control feedback immediately while using
  the same state channel as Play. Browser checks confirmed Reach, Stretch,
  Guide, and Reveal coaching all update; the focused 133-artifact build and
  `git diff --check` passed.
- **2026-07-17:** Added a distinct campus-at-night visual system informed by
  Campaign Forge's hierarchy: a strong arrival, route-like cyan and gold
  accents, map-grid atmosphere, framed callouts, and clearer table surfaces.
  The focused PathMX 0.1.13 build produced 133 artifacts with only the three
  known Tufte warnings. Browse review confirmed the title, section nodes, and
  flashcard hierarchy; the browser console had no errors. Narrow-layout and
  keyboard review remain with Mark.
- **2026-07-17:** Reopened the task for a visual-design pass using Campaign
  Forge as a composition reference while keeping a distinct campus-at-night
  identity and preserving the networking learning flow.
- **2026-07-17:** Split the experience into eleven independent Literate
  Components and mapped every staged interaction to ordered Player beats. The
  recovery practice now draws from seven randomized awkward-moment cards,
  presents the prompt before coaching, and resets to the prompt beat for each
  new card. PathMX 0.1.13 built the focused path with 132 artifacts; only the
  three known Tufte theme warnings remained. Browse and Play exposed the new
  component beats, direct flashcard controls reset correctly, browser logs had
  no errors, and `git diff --check` passed. Mark's keyboard and visual review
  remains.
- **2026-07-17:** Reopened implementation with reviewer Mark retained. The
  experience brief keeps native questions durable while giving every other
  learning move an independent, keyboard-accessible component. Recovery
  practice becomes a randomized prompt-first flashcard with explicit reveal
  and next-card controls.
- **2026-07-15:** Added
  [`campus-constellation.components.md`](../research/campus-constellation.components.md)
  with a clickable four-orbit relationship map and a five-state recovery
  rehearsal deck. Imported and used both components in the learning path.
  PathMX 0.1.10 built 132 artifacts; compiled output contains both expanded
  component roots, scoped CSS, instance scripts, and the recovery deck's five
  ordered Player states. `git diff --check` passed. Visual, keyboard, pointer,
  and narrow-container Play review remain.
- **2026-07-15:** Reopened implementation to add the requested PathMX HTML
  experience through a companion `.components.md` Source rather than renaming
  the learning `.path.md` Source.
- **2026-07-15:** Added durable single-choice interactions for the learner's
  North Star, starting difficulty, and hardest moment. The rendered build
  contains three radio-question forms mapped to
  `questions.submitSingleChoice`; the North Star writing exercise remains a
  separate Block so its instructional lists cannot become accidental options.
  The scratch build and `git diff --check` passed. Browser submission and Play
  pacing review remain for the reviewer.
- **2026-07-15:** Reopened implementation to make the guidance interactive
  with the repository's reviewed single-choice question Action pattern.
- **2026-07-15:** Added and indexed the Campus Constellation path with a
  learner-defined North Star, three difficulty levels, relationship mapping,
  modular introductions, curiosity questions, awkward-moment rehearsal, a
  48-hour field mission, evidence capture, follow-up, and adaptive next routes.
  Grounded the design in public Harvard, Yale, and UC Berkeley career guidance.
  `pathmx build -o .pathmx-check` passed on PathMX 0.1.10 with 134 artifacts;
  only the three known Tufte theme warnings remained. `git diff --check`
  passed. Visual Play review and commit remain for reviewer acceptance.
- **2026-07-15:** Claimed for a college networking-skills learning path. The
  working concept is a “Campus Constellation” of goal-led conversation quests,
  reflection, follow-up, and evidence of growing confidence.
- **2026-07-15:** Consolidated the unstarted college-scenario, Codex-evaluation,
  and demo-story assignments into this open research contribution. Those
  topics remain useful prompts, but none is required.

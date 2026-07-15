---
status: recorded
date: 2026-07-14
---

# Hackathon Meeting

- When: July 14, 2026 at 5:00 PM EDT
- Source: summarized from the team's Granola meeting notes
- Attendance: Granola identifies Mark as the note creator; the attendee list
  was not otherwise captured

Private Granola links, contact details, and the raw transcript are omitted.

---

## Goal And Deliverable

Build a significant PathMX feature during Build Week and submit it by
8:00 PM EDT on Tuesday, July 21.

The proposed submission is a learner starter repository plus a skills bundle.
A learner should be able to point Codex at the repository, let Codex install
PathMX and start the server, and use the learning experience alongside the
agent.

The core feature is durable user-state mutation from the Player: answers,
annotations, ratings, and similar interactions persist back to readable
Markdown. Annotation persistence is already partially working, and the team
considers this capability foundational for the fall roadmap.

---

## Product And Architecture Direction

- Markdown remains the source of truth; do not add a separate state layer.
- Learners bring their existing agent rather than using AI embedded in
  PathMX. The learning space stays local-first, portable, and readable by
  different agents.
- The Player has two conceptual layers: a fast, hot-reloading runtime surface
  for content and a persistent HUD for navigation, menus, the mini-map, and
  beat-level interaction.
- Interaction focuses on one meaningful Beat at a time instead of exposing
  raw document editing.
- The working repository holds project notes and experiments. A separate
  learner starter repository becomes the reusable submission artifact.

The precise authoring contract for mutations is still being refined, so labs
should rely on documented capabilities rather than inventing local syntax.

---

## Interaction And Learning Primitives

Candidate mutation surfaces include GitHub-style task checkboxes, star
ratings, thumbs up/down, open response fields, and Typeform-style quiz or
assessment components.

The broader learning design system may include flashcards, quizzes, timers,
stepped or sequenced content, tabs, and Socratic or "grill me" questioning.
Existing Literate Component examples should guide agent-authored widgets so a
long learning path feels coherent rather than assembled from unrelated parts.

---

## Demo Direction

Plan for a three-minute video that explains how the system works, shows three
strong learning scenarios, and ends with a clear call to action.

Candidate scenarios:

1. an in-person physical skill such as solving a Rubik's Cube or learning a
   cooking technique;
2. a college topic such as discrete mathematics;
3. a conceptual or exploratory topic such as AI skills versus models.

Adaptive accessibility, including a curriculum adjusted for dyslexia, could
demonstrate how the learner Persona changes the experience.

---

## Ownership And Action Items

### Mark

- Keep PathMX build tooling and the mutation layer moving.
- Update the authoring skills as capabilities stabilize.
- Add demo examples and Literate Component references to the working
  repository.
- Publish frequent CLI builds and notify the team when an update is ready.

### Andrew

- Prototype interactive and exploratory UX using Literate Components under
  `paths/labs/`, with the assets needed to reproduce it.
- Explore the component design system and stress-test its usability.
- Link the referenced interactive artifacts in the working repository.
- Set up repository-commit notifications through Slack Workflows or another
  agreed trigger.

### Tram

- Keep the team aligned and the work organized.
- Draft a college-student learning-path scenario for the demo.
- Run Codex-driven tests and evaluations.

---

## Timeline

- July 14: collect notes, ideas, and examples in the working repository.
- July 15: scaffold the repository and prepare the PathMX 0.1.9 release with
  Player Actions.
- July 16: begin prototyping various learner scenarios/outcomes.
- July 18–19: polish, QA, and evaluations.
- Monday, July 20: reach a feature-complete shape.
- Tuesday, July 21 at 8:00 PM EDT: submit and record the demo video.

July 16 is the intended prototyping and alignment checkpoint.

---

## Open Questions

- What exact Markdown authoring shape should each mutation primitive use?
- Which three scenarios best prove the product claim in the demo window?
- How will the team expose a shared public version without committing private
  links or data?

---

## Resolved Follow-ups

- Tram owns coordination, the college-student scenario, and the evaluation
  lane.
- Codex-facing coordination now runs through the
  [Build Week task dashboard](../tasks/index.tasks.md), with one canonical
  Markdown Source per task.
- The remaining mutation, scenario, and publication questions are linked to
  explicit tasks instead of living only in these meeting notes.

---
type: meeting-notes
status: active
date: 2026-07-20
title: July 20 Build Week Check-In
related:
  - ../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md
  - ../tasks/2026-07-20-update-pathmx-skills.task.md
  - ../tasks/2026-07-20-produce-submission-video.task.md
  - ./2026-07-20-devpost-submission-draft.notes.md
  - ../guides/2026-07-20-build-week-submission-readiness.guide.md
  - ../labs/kepler-orbit/index.demo.md
  - ../labs/chess-opening-lesson/index.demo.md
---

# July 20 Build Week Check-In

This is a sanitized decision and handoff record derived from the team meeting
notes. The private meeting link and raw transcript remain outside the
repository.

---

## Accepted Direction

- Frame the work as a practical contribution to durable knowledge and
  learning alongside agents, not as an academic paper or a generalized
  “learn anything” product.
- Use **portable, executable curriculum** as the central concept: durable,
  remixable Source that an agent can work with and a learner can play.
- Keep bring-your-own-agent as part of the model. The durable workspace should
  work with the learner's chosen agent rather than require one hosted agent.
- Show the current single-player PathMX experience. Mention stateful and
  multi-user possibilities as future work, not as demonstrated capabilities.
- Use the repository itself as evidence of the method: research, tasks,
  decisions, experiments, reviews, and changes evolved with Codex in durable
  Source instead of an external project-management system.

---

## Submission Package

Present one coherent package with three parts:

1. **Build Week lab** — the primary research notebook, report, judge route,
   and reproducible evidence.
2. **Learning Starter** — an everyday-user scaffold with Agent Skills,
   examples, and a durable project-folder workflow.
3. **Playable examples** — the Kepler orbit experiment, interactive chess
   lesson, and a third example to be selected by Andrew.

These are parts of one Devpost story, not three unrelated products. The final
public repository placement for every example still needs to be verified
before the links are entered.

The Starter currently distinguishes two skill roles:

- a `pathmx` authoring skill that teaches the agent PathMX Source, Beats, and
  Player behavior; and
- a `paths` workflow skill that guides the creation and maintenance of a
  learner-owned path.

---

## Video Decision

Record the under-three-minute video as a playthrough of a PathMX slide deck.
The deck should be both the script and a cloneable meta-demo of the project:

1. Ground the repository, Markdown Source, and PathMX workflow.
2. Start a fresh Codex session and create a small learning path or experience.
3. Show that the resulting curriculum remains durable and portable.
4. Tour the Kepler, chess, and third showcase examples.

The content target is the evening of July 20. The recording target is 7:00 PM
EDT on July 21, one hour before the official 8:00 PM EDT deadline.

---

## Owners And Follow-Ups

### Mark

- [ ] Publish the shared submission scaffold in this repository so the team
      has one coordination point.
- [ ] Add an explicit project-folder setup step to the learner workflow: ask
      where the durable project should live and suggest a sensible persistent
      default.
- [ ] Draft the PathMX slide deck and make the content complete on July 20.
- [ ] Retest the revised `paths` skill with Tram after Tram pushes it.
- [ ] Polish, record, upload, and verify the public video by 7:00 PM EDT on
      July 21.

### Andrew

- [ ] Draft the external-facing **What it does** section.
- [ ] Select and add the third high-impact example, including its judge route
      and task evidence.
- [ ] Review the presentation framing and final video deck.

### Tram

- [ ] Update and push the `paths` workflow skill based on the Saturday test.
- [ ] Retest the updated workflow with Mark.
- [ ] Review the slide deck when it is ready.

---

## Open Decisions And Risks

- Final public project name and elevator pitch.
- Third showcase example and whether a backup is still necessary.
- Exact public repository URLs and where the examples live.
- Final wording of **What it does** after Andrew's draft.
- Known Player bugs that require a newer build for the selected route.
- The revised `paths` skill and the persistent project-folder setup still need
  clean-session verification.
- The tighter proximal-edge and rubric experiment was too disjointed in its
  current form; do not make it a headline capability without a successful
  retest.


---
status: recorded
date: 2026-07-16
related:
  - ../labs/focus-components/index.demo.md
  - ../labs/practice-interview/index.demo.md
  - ../research/practice-interview-voice-agent.path.md
  - ../research/youtube-learning-skill.path.md
  - ../tasks/index.tasks.md
---

# July 16 Working Session Notes

- When: July 16, 2026
- Source: summarized from Mark and Tram's working session notes
- Scope: non-personal product, workflow, repository, and submission notes

Personal context, private links, and raw notes are omitted.

---

## Learning Motivation And Focus Beats

The team discussed short "coach tip" popups that appear mid-lesson with brief
encouragement or technique guidance. The pattern should feel closer to an
annotation or footnote than a modal, similar to the earlier flashcard-style
popup that appears briefly and then gets out of the learner's way.

The "focus beats" direction remains promising. The current prototype includes
a Breath Pacer, Reflection Prompt, and Grounding Check, but the family needs
iteration on framing, visual polish, and more specific prompts before it moves
from Build Week exploration into the Learner Starter.

Useful categories:

- Pause and breathe
- Pause and reflect
- Coach encouragement, including inline or player-level encouragement

For speaking practice, the team preferred a "say it out loud" prompt over a
fill-in-the-blank response. The value is verbal delivery, so requiring written
input can undermine the exercise.

---

## Practice Interview Feature

The practice interview concept is a guided, repeatable mock interview flow with
voice input and scoring. The key differentiator from a general ChatGPT
conversation is a pre-built flow with consistent structure, rubric-backed
feedback, and trackable improvement across repeated attempts.

The current text-based prototype uses three phases:

- Behavioral questions
- Technical questions
- Product or system questions

The prototype scores answers on structure, evidence, reflection, and delivery.
The current scoring should be treated as simulated until the team lands a real
rubric and implementation boundary.

A real-time voice version should use OpenAI's Realtime API. The repeated
practice loop matters: the learner should be able to practice the same
scenario several times and compare scores over time. A practical prep strategy
is to build four or five core STAR stories and rotate them across question
types.

---

## Player, Quiz, And Review Workflow

Quiz and form inputs are not persisting correctly, and annotation persistence
is still being diagnosed. Fixing annotations remains important because the team
wants to review submitted learner work directly inside the Player.

Recent Player work includes keyboard-controlled table navigation, with row and
column focus available without using a mouse. A link-hover feature now shows
all links in the current Beat and provides a keyboard shortcut to open them.

The task board now has a visible and assignable reviewer field. Agents update
task status, due dates, and task evidence as work moves. The change log gives
the team a concise record of what has landed.

The team should consider daily Slack updates so everyone can keep a shared view
of the work. Delayed pushes increase merge-conflict risk, so contributors
should publish local work frequently enough for others to integrate it. Agents
can help resolve merge conflicts quickly, especially when preserving both sides
requires careful diff review.

---

## Learner Starter, Templates, And Examples

The PathMX Learning Starter is the student-facing template repository. This
Build Week repository remains the development and testing sandbox, and polished
patterns should graduate into the Learner Starter.

The intended initializer is:

```sh
pathmx init --template learning-starter
```

The target behavior is to clone the organization template and run the Player
automatically, but template initialization has not fully landed yet.

Agent behavior depends heavily on example quality in the repository. The team
should aim for five to seven high-quality canonical examples. Prompt and
example design will need guardrails so agents do not always default to the
nearest matching pattern when a different pattern is better.

Skills were updated today. The Learner Starter skills and `paths/` folder still
need to be updated to match the useful Build Week patterns.

---

## Integration And Task-Management Research

The YouTube integration idea is a skill that finds relevant videos for a
learning topic and generates questions from captions. YouTube transcripts and
captions are already structured enough to support a Khan Academy-style
mid-video prompt pattern in a future prototype.

Research findings have been added to the repository's research area. For
offline experiments in the open-source PathMX build, `youtube-dl` or a similar
tool may be useful, but that path is not part of the contest submission plan.

The team also discussed a GTD-inspired agent skill for task management. Useful
principles include an inbox model, single-action breakdowns, and pruning stale
items so team tasks remain concrete and reviewable.

---

## Submission Direction And Next Moves

The expected submission likely includes two repositories: this working Build
Week repository and the learner-facing template repository. Judging is expected
to include AI pre-screening before human review of finalists.

Andrew's experimental UX work, including 3D and visual components, remains a
strong demo asset. The "learn to code without agents" framing was also floated
as a compelling path angle because it positions manual coding as a skill worth
preserving, not only a fallback when agents are unavailable.

The meeting notes called out `pathmx self-update` to move to PathMX 0.1.13 and
restart any already-running server. Another CLI release is expected after the
current bug fix lands.

Next moves:

- Iterate on the focus beat components before adding them to the Learner
  Starter.
- Rebuild the networking path with flashcard-style interactive Blocks,
  referencing the flashcard components in the PathMX Core repository.
- Run `pathmx self-update`, then restart any running server.
- Push local work frequently enough to reduce merge-conflict risk.
- Build a learner onboarding checklist for testing the Learner Starter repo.
- Have all three team members manually walk through the Learner Starter before
  automating evaluations.
- Update the Learner Starter skills and `paths/` folder.
- Meet on July 17, 2026 around 12:30 PM for a working lunch and continued
  build session, if the schedule holds.

---
type: brief
status: proposed
date: 2026-07-18
title: Build Week Reshape — Learning Happens in the Player
related:
  - ../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md
  - https://github.com/pathmx/pathmx-learning-starter
  - https://openai.com/build-week/
  - https://openai.devpost.com/
---

# Build Week Reshape: Learning Happens in the Player

This is the proposed product direction for the rest of Build Week. It replaces
the earlier experience in which Codex did most of the work in a separate task
and sent the learner back and forth between chat and the PathMX Player.

> **New product promise:** Start with something you want to learn. Stay in one
> playable learning space while a learning agent helps shape the path, teaches,
> responds to your work, and leaves you with a durable record you own.

The goal is not to generate a complete course in advance. The goal is to make
learning feel like an ongoing collaboration between the learner and an agent
inside a living path.

---

## Why We Are Reshaping

Our first learner tests surfaced a mismatch between the product we want and the
experience we built:

- the agent was too detached from the learning surface;
- waiting for a general coding agent to author and revise whole files broke the
  pace of learning;
- the learner had to understand which app, task, file, or link to return to;
- generated paths were structurally uneven across models and attempts;
- links did not consistently return the learner to Play;
- question submission and navigation failures made the experience feel
  unreliable; and
- a short external conversation often committed to a learning goal and roadmap
  before the learner had supplied enough evidence.

The useful discovery is that PathMX itself already has the right center of
gravity: a durable, playable learning surface. The agent should become an actor
inside that surface rather than the surface being a by-product of an external
agent task.

---

## The New Experience

### 1. Begin at a personal Learning Home

The learner launches PathMX and arrives at a mostly empty Home. Existing paths
and overall progress appear here. The main invitation is **New Path**.

There is no requirement to open a separate Codex task or know which skill to
invoke before learning can begin.

### 2. Shape one new Path

Choosing **New Path** creates a private onboarding journey for that attempt.
The learner answers a small number of focused questions about:

- what they want to be able to do or understand;
- why it matters;
- what they already know;
- where they tend to get stuck;
- time, pace, and useful constraints; and
- how they would like the experience to feel.

The learning agent can ask a small diagnostic question when the starting point
is unclear. It then presents a draft outcome and a visible roadmap. The learner
can confirm it or ask for changes before the Path is created.

### 3. See the roadmap without generating everything

The new Path immediately shows:

- a clear outcome;
- what counts as evidence of success;
- the current Lesson;
- completed Lessons and progress; and
- a small number of drafted next Lessons.

Draft Lessons make the future visible without pretending the plan is fixed.
The agent can adapt unstarted Lessons as it learns more. It should ask before
removing or substantially changing something the learner has already been
promised.

### 4. Start one Lesson at a time

Choosing **Start Lesson** creates the Lesson immediately and opens it. The
learner sees the outcome, starting point, and first useful move without waiting
for a whole lesson to be generated.

The agent then adds complete learning Blocks as the Lesson unfolds:

- explanations;
- worked examples;
- comparisons;
- predictions;
- questions;
- practice;
- feedback;
- remediation; and
- reflection.

The Lesson may last for many rounds. It is complete when the agent can point to
evidence that the learner reached the outcome and the learner agrees.

### 5. Let learner actions drive the agent

The agent wakes when a meaningful learner action needs a response: submitting
an answer, completing a practice move, asking for clarification on a specific
Beat, or requesting a change.

The response appears in the Lesson near the work that caused it. There is no
detached chat transcript to reconcile with the curriculum later.

If something is confusing, the learner can use an annotation-like composer on
the current Beat. A useful explanation or remediation becomes part of the
Lesson, not a temporary sidebar exchange.

### 6. Return to a Path that remembers

Completing a Lesson updates the Path, records a short synthesis, and makes the
next move visible. The learner can close the experience and return later
without needing the original agent conversation.

The files remain readable and editable. The learner owns the path, responses,
progress, and learning record.

---

## Experience Principles

### One learning surface

The Player is where the learner reads, answers, asks, receives help, and sees
progress. Codex powers the learning agent but does not require the learner to
manage a parallel chat workflow.

### Immediate structure, progressive intelligence

New Paths and Lessons should appear immediately from maintained starting
shapes. Rich agent output can arrive afterward. A visible three-dot writing
state is honest; a blank page while an agent thinks is not.

### Durable by default

Goals, answers, agent responses, progress, and next steps survive reload and
remain understandable as normal files. Browser state and agent history are not
the learner's only record.

### Visible scaffolding, adaptable plan

Learners should know where they are going without receiving a rigid, fully
generated curriculum. Draft Lessons provide orientation while leaving room for
evidence-based changes.

### Learner control

The agent may adapt teaching and unstarted drafts. The learner confirms the
overall outcome, major roadmap changes, Lesson completion, and changes to the
agent's enduring behavior.

### Purposeful visual quality

The Starter includes a restrained visual baseline, reviewed learning patterns,
and a catalog of maintained interactive components. The agent selects a chess
board, flashcard, comparison, simulation, or other component only when it
improves the learning move.

For Build Week, the agent selects existing components rather than writing new
component code during a Lesson.

### Fast enough to preserve thought

- An action should acknowledge immediately.
- The agent-writing state should appear in under 100 milliseconds.
- The first useful agent output should target five seconds.
- A failed or slow turn should become an honest retry state rather than an
  endless “waiting for source” message.

---

## The Golden Demonstration

The submission should show one uninterrupted journey:

1. Open an almost-empty Learning Home.
2. Choose **New Path**.
3. Answer a concise onboarding flow.
4. Review and confirm the proposed outcome and Lesson roadmap.
5. Arrive at the new Path.
6. Start the first Lesson.
7. Interact with one strong visual or interactive learning Block.
8. Submit an agent-created question or practice response.
9. Watch the agent add a response that clearly uses that evidence.
10. Return to the Path and see progress plus the next Lesson.
11. Reload or reopen and show that the learning record and next move remain.

Chess opening principles is a strong demonstration topic because the learner
can compare positions, use a maintained board component, make a concrete
choice, and receive visually grounded feedback without requiring a long
course.

---

## Build Week MVP

The MVP includes:

- a minimal personal Learning Home;
- one onboarding instance per new Path attempt;
- a confirmed Path with visible progress and Lesson Drafts;
- on-demand Lesson creation;
- inline learner questions and persisted responses;
- an agent that reacts inside the Lesson;
- clarification from the current learning Beat;
- a visible writing, failure, and retry experience;
- a maintained learning-pattern and component library;
- a general learning component set plus the chess component pack;
- one local Codex-powered agent connection;
- Lesson completion and parent-Path progress; and
- a cold-resume demonstration.

The MVP does not include:

- multiple simultaneous learning agents;
- a general course-authoring product;
- a full form builder;
- agent-written Literate Components;
- unrestricted agent self-modification;
- cross-Path memory;
- provider-switching UI;
- hosted multi-user accounts; or
- a generalized event platform.

---

## What We Are Submitting

The submission is not “the PathMX source code.” It is a runnable product called
something like:

> **Teach Me Anything — a local learning space that grows with you, powered by
> PathMX and Codex.**

The recommended category is **Education**.

### Primary judge-facing repository

Use `pathmx-learning-starter` as the primary submission repository. It should
contain everything specific to this learning product that a judge should be
able to inspect:

- the minimal Starter Sources;
- onboarding, Path, and Lesson starting shapes;
- the learning-agent Persona and instructions;
- reviewed learning Block examples;
- theme recipes and base styles;
- maintained Literate Components and their licensed assets;
- the contest-specific local agent adapter or integration tooling;
- a completed example Path for quick inspection;
- setup and testing instructions; and
- a `BUILD_WEEK.md` explaining what was new, what existed before, and how Codex
  and GPT-5.6 were used.

The current Build Week workspace remains the team's coordination, research,
lab, and evidence repository. It may be linked as optional supporting material,
but it should not be the primary product repository judges are asked to
understand.

The submitted product is the learning repository plus the small amount of
tooling needed to run its Player-native loop. Skills may help us build, inspect,
or extend it, but they should not be the product's main interaction model. A
learner or judge should not need to know a skill name or invoke a separate
authoring workflow to complete the golden journey.

### PathMX Core remains private during Labs

PathMX is a pre-existing platform currently in Labs. Its Core source remains
private while its APIs and product boundaries stabilize. We should not submit
the private PathMX Core repository or share it with judging accounts.

Judges instead install an exact packaged PathMX version and run the learning
repository through its documented local commands. The submission must be
transparent that PathMX is a pre-existing dependency with private Core source
and clearly name the new Build Week work layered on it.

This is allowed in principle: the challenge permits existing frameworks and
pre-existing projects, but requires disclosure of what is new and evidence of
Codex/GPT-5.6 use during the submission period. We still need to confirm that
the packaged PathMX license permits judge installation and testing.

### Do not hide all of the contest work in Core

The challenge evaluates technological implementation as well as design. If the
submitted repository contains only Markdown prompts while every new agent-loop
behavior is invisible inside proprietary Core, the project may look much
thinner than it is.

The strongest boundary is:

- keep general PathMX engine and Player implementation private;
- expose the contest-specific learning adapter, configuration, templates,
  curriculum assets, and product behavior in the learning repository; and
- document the small public interface between that repository and the packaged
  PathMX runtime.

If the adapter cannot be separated safely, the runnable demo, architecture
overview, Build Week change record, and clear pre-existing/new disclosure must
carry more of the technical story. That is a weaker judging position than a
visible contest-specific integration package.

---

## What Judges Should Be Able To Do

The README should take a judge from zero to the Home with a short sequence like:

```sh
bun add -g @fellowhumans/pathmx@<submitted-version>
pathmx init my-learning-space --template pathmx-learning-starter
cd my-learning-space
pathmx play --open
```

The exact submitted flow should:

- state that Codex Desktop or CLI must already be installed and signed in;
- require no separate OpenAI API key for the first adapter if that proves
  viable;
- use fictional sample learner data;
- include a ready-made example if live generation is temporarily unavailable;
- document supported operating systems and expected startup time;
- provide one exact test journey; and
- make failures understandable without private team intervention.

---

## Required Submission Materials

The current official challenge page requires:

- a working project;
- one category;
- a project description;
- a public YouTube demo shorter than three minutes, with audio explaining how
  Codex and GPT-5.6 were used; and
- a code repository with setup instructions and a testing path.

The repository may be public or private. A private repository must be shared
with the judging accounts named on the challenge page. That option does not
help protect PathMX Core if Core itself is the submitted repository, so Core
should remain outside the submission entirely.

The submission deadline is **Tuesday, July 21, 2026 at 5:00 PM PDT / 8:00 PM
EDT**. No edits are allowed after the deadline.

Official references:

- [OpenAI Build Week](https://openai.com/build-week/)
- [OpenAI Build Week on Devpost](https://openai.devpost.com/)
- [Challenge FAQ](https://openai.devpost.com/details/faqs)
- [Official rules](https://openai.devpost.com/rules)

---

## Three-Minute Video Shape

### 0:00–0:20 — The problem

AI tutoring often disappears into chat. Learners lose the path, evidence, and
next step when the conversation ends.

### 0:20–0:45 — Start locally

Show the almost-empty Home and choose **New Path**.

### 0:45–1:15 — Shape the goal

Answer the onboarding questions. Show the agent proposing a concrete outcome
and visible roadmap.

### 1:15–1:45 — Start learning

Open the first Lesson and show a strong chess component or comparison Block.

### 1:45–2:20 — Close the adaptive loop

Submit one answer. Show the writing indicator and the agent's contextual
response appearing inline.

### 2:20–2:40 — Show durability

Return to the Path, show progress, reload, and resume from the same next move.

### 2:40–3:00 — Explain what is new

Name the Player-native learning loop, local Codex connection, durable Sources,
and the Build Week work. Briefly distinguish the new learning product from the
pre-existing PathMX runtime.

---

## Team Decisions Before Assignment

We should align on these before splitting implementation lanes:

1. Confirm `pathmx-learning-starter` as the primary submitted repository.
2. Decide which contest-specific adapter/tooling can live there without
   exposing private PathMX Core.
3. Confirm chess opening principles as the golden demo topic.
4. Confirm whether the Build Week workspace is linked publicly as supporting
   evidence or kept team-facing.
5. Confirm the license for the submitted repository, component assets, and
   packaged judge-use of PathMX.
6. Turn the golden journey into named owner/reviewer lanes only after the
   product boundary is accepted.

The immediate goal is not to distribute every open task. It is to agree on one
product, one demonstration, one judge-facing repository, and one honest story
about what existed before Build Week and what we built during it.

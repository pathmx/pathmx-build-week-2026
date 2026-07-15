---
status: proposed
---

# Kickoff Lanes

These lanes are designed to let everyone begin immediately while leaving room
to reshape the product after the first evidence arrives.

---

## Shared Finish Line

Demonstrate one learner asking Codex to learn a topic, playing a durable PathMX
curriculum, submitting meaningful evidence, receiving an adapted next step,
and resuming later without losing the work.

Each person owns an outcome and a file boundary. Crossing a boundary starts
with a short handoff rather than a silent rewrite.

---

## Tram: Learner-Flow Evaluation

**Outcome:** determine whether a learner can complete the
[data-science golden loop](../labs/data-science-golden-loop/index.path.md)
without live coaching from its author.

Start by playing the path as written. Record:

1. where the goal or next action is unclear;
2. whether the question and assignment feel meaningfully different;
3. whether the adapted next step matches the submitted evidence;
4. what a beginning data-science learner would change.

Tram owns learner-facing wording and evaluation notes for this run. Mark
reviews whether the full durable loop worked; he does not rewrite the test
notes into what he expected to see.

---

## Andrew: Interaction Stress Lab

**Outcome:** take one pattern from the
[Literate Component proving ground](../labs/component-patterns/index.demo.md)
and find the first meaningful limit while building a learning interaction.

Choose one seam:

- ordered state shared with the Player;
- private data-driven manipulation;
- asynchronous data and presented-only activity.

Copy the smallest relevant component into a new directory under `paths/labs/`.
Record the intended learner behavior, the first limit encountered, and whether
the limit is authoring friction, a missing documented capability, or a core
bug. Do not work around a missing contract with a hidden runtime API.

Andrew owns the lab. Tram reviews whether the interaction improves learning,
not how ambitious its implementation is.

---

## Mark: Core Integration

**Outcome:** keep the published project workflow installable and the PathMX
CLI and Player capable of running the team's accepted experiments.

Project curriculum, skills, reports, and lab work stay in this repository.
Only confirmed CLI or Player defects and accepted core capabilities move to
the `pathmx` repository. A surprising result is first captured as a reproducible
lab observation; it is not automatically a core feature request.

Andrew reviews whether a fix unblocks the stress case. Mark owns the final core
scope and verification.

---

## First Checkpoint

Each person brings one artifact rather than a verbal status:

- Tram: one completed learner run plus three concrete observations;
- Andrew: one modified component lab plus its first documented limit;
- Mark: a reproducible install/play command and any core issue packet created
  from the two runs.

At the checkpoint, accept, revise, cut, or replace each lane for the next work
block.

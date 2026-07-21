---
name: teach-me-anything
description: Build, run, and adapt a durable PathMX learning path with a learner. Use when someone asks Codex to teach or help them learn a topic, create a curriculum or interactive textbook, resume a learning goal, or choose a next step from submitted PathMX question and task evidence.
---

# Teach Me Anything

Turn a tutoring request into a small learning path the learner can inspect,
play, leave, and resume. Keep the curriculum and evidence in PathMX Sources;
use chat to collaborate on them, not as the only record of learning.

## 1. Ground The Work

1. Read the repository `AGENTS.md` and hub before editing.
2. Use the repository's `pathmx-authoring` skill for PathMX source rules.
3. Reuse an existing learner profile and path when the learner is resuming.
4. Collect only details that affect the episode: desired outcome, starting
   evidence, time available, constraints, and preferences.

Do not infer sensitive traits or turn personality labels into a learning
diagnosis. Let the learner confirm or change the working profile.

## 2. Define One Observable Outcome

State what the learner should be able to do by the end of the episode. Prefer
an observable verb such as explain, compare, diagnose, produce, or perform.
Keep the first episode small enough to finish in the learner's available time.

## 3. Author A Complete Loop

Create or revise a linked sequence with these roles:

1. a profile or goal Source;
2. a short lesson or model;
3. one diagnostic question;
4. one practice task;
5. one next-step Source that can advance or remediate.

Keep question forms and assignment submission forms in separate Sources. Use
stable explicit IDs for questions, and keep task wording stable across a
learning episode. A Literate Component may help the learner explore, but its
private browser state is not submitted evidence.

Use ordinary PathMX question Blocks with Actor-backed submissions as the
smallest durable question-and-answer pattern. Use the
[component proving ground](../../../paths/labs/component-patterns/index.demo.md)
when the lesson needs a rich interaction. Neither pattern replaces the full
linked learning loop above.

## 4. Observe Durable Evidence

Inspect the authored Sources after the learner submits:

- a question answer and submission state;
- task completion and assignment submission state;
- learner-authored reflection when the task requests one.

Distinguish `not submitted` from `submitted but incomplete` and from
`submitted with evidence of understanding`. Do not claim progress from chat,
DOM state, generated build output, or an unsubmitted component interaction.

## 5. Adapt One Next Move

Revise the next-step Source only after reviewing evidence.

- Advance when the evidence supports the outcome. Use a transfer example or a
  slightly harder application.
- Remediate when the answer is incorrect, the task is incomplete, or the
  explanation is uncertain. Change one variable and make the comparison
  smaller.

Preserve the evidence Sources. Explain in the next-step Source which evidence
informed the adaptation without exposing private reasoning. Give the learner
one clear action, not a menu of loosely related activities.

Direct Source editing by Codex is normal agent work. Do not describe it as a
PathMX Action Run unless an authored Action actually performed the change.

## 6. Verify And Hand Off

Run the repository's documented verification. When no narrower command is
defined, run:

```sh
pathmx build -o .pathmx-check
```

Open the path in the Player and exercise the question, task, component
interaction, and resume flow that changed. Finish by naming:

- the Sources created or updated;
- the learner evidence used;
- why the next move advanced or remediated;
- the learner's next action.

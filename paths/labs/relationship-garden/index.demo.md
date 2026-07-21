---
type: demo
status: playable
title: Relationship Garden
description: A local-first garden for remembering who matters, keeping parallel contexts visible, and tending one quiet relationship without guilt.
route: /labs/relationship-garden
tags: [relationships, local-memory, stewardship, parallel-lives]
related:
  - ../../tasks/2026-07-21-build-relationship-garden-mvp-lab.task.md
  - ../../andrew/2026-07-21-relationship-garden-implementation.plan.md
  - ./prompt-ritual.path.md
  - ./people/index.path.md
theme:
  color:
    accent: "#3f6b4d"
    focus: "#146c43"
  dark:
    color:
      accent: "#8eb89a"
      focus: "#a8d9b5"
play:
  steps:
    lists: items
    tables: rows
---

[@garden]: ./relationship-garden.components.md

# Relationship Garden

## Tend relationships, not a pipeline

A contact list remembers names. A relationship garden remembers **why a person
matters, which parts of life you share, what has gone quiet, and what one human
next move might be**.

This is not inbox surveillance, a lead score, or a nag machine. It reads six
fictional local Sources. Recency is useful, but it is never a verdict on care.

> The question is not “Who should I extract value from?” It is “Who have I not
> talked to in a while—whom I still care about?”

---

<!--
type: orientation
id: choose-bed
title: Choose one bed
-->

## Give this week one North Star

A garden bed groups relationships around a part of life. It is a lens, not a
box a person can never leave.

| Bed | What it helps you tend |
| --- | --- |
| **Internship** | Mentors, alumni, and field guides around a next professional step |
| **Campus** | Classmates, club leaders, and nearby community |
| **Craft** | Collaborators and people who make the work more honest |
| **Hometown** | Long, sometimes seasonal relationships that should not become tasks |

For this walkthrough, choose **Internship**. Two quiet plants make the recency
signal visible without implying that either relationship has failed.

---

<!--
type: instrument
id: garden-glance
title: Tend one quiet relationship
-->

## Let the garden answer one small question

Use the instrument in this order:

1. Filter to **Internship**.
2. Select **Priya Nair** and read how you met.
3. Turn **Parallel Lives** on.
4. Notice why alumni-panelist and recruiter-coffee are not interchangeable.
5. Log a touch with a tiny fictional note, such as “Sent a thank-you and asked
   which product experiment taught her the most.”
6. Watch Priya return to **Recently tended**, then copy the persistence prompt.

<relationship-garden label="Fictional Relationship Garden demonstration"></relationship-garden>

---

<!--
type: concept
id: read-parallel-lives
title: Read Parallel Lives
-->

## The same person can meet you in more than one life

Priya appears once in the garden, but her panel keeps two contexts visible:
**Alumni panelist** and **Recruiter coffee**. The lens adds every life as a chip
without duplicating the human.

That boundary matters. A thoughtful alumni-lane thank-you may fit today; a
casual message that silently becomes a recruiting ask may not.

Parallel Lives is not more segmentation. It is a reminder to approach the
relationship through the context that actually earned the trust.

---

<!--
type: practice
id: log-a-touch
title: Log a touch without pretending it persisted
-->

## Watering changes the session, not the Source

The garden responds immediately when you log a touch: the date changes,
freshness is recomputed, and the plant stands upright. That feedback is
browser-local.

The interface says **Pending persistence** because no PathMX Host Action or
invented save contract is hiding underneath it. You decide whether this memory
belongs in your files.

That boundary is part of the product:

- direct interaction can remain private and temporary;
- durable evidence is an intentional Source edit;
- Codex receives an exact instruction instead of being asked to infer what
  happened.

---

<!--
type: handoff
id: persist-with-codex
title: Carry the touch back to Source
-->

## Tomorrow's agent should see the same human

The Return prompt names the person, date, channel, note, and both records that
must stay in sync. A real persistence turn updates:

1. [people/priya-nair.person.md](./people/priya-nair.person.md), the readable
   human and agent truth; and
2. garden.people.json, the component mirror.

Open the [full fictional people catalog](./people/index.path.md) to see the
same six humans without the garden interface.

This is the local dual-surface loop: act in the Player, make the intended
change explicit, and leave a Source that another agent can understand later.

---

<!--
type: reference
id: prompt-ritual
title: Keep the weekly ritual
-->

## Five prompts are enough for the first season

The garden has one compact operating rhythm: begin, capture, clarify parallel
lives, return after a touch, and let a relationship go dormant without guilt.

[Open the five-prompt Relationship Garden ritual](./prompt-ritual.path.md).

No Gmail, calendar, contacts, or social graph is scraped. The presets tell
Codex to use only the files the learner chose to keep here.

---

<!--
type: conclusion
id: what-this-proves
title: What this proves
-->

## An instrument can keep a life, not only teach a skill

The [chess opening lesson](../chess-opening-lesson/index.demo.md) is a practice
instrument: each move teaches a capability.

Relationship Garden is a life-memory instrument: each return preserves origin,
context, recency, and one next move without flattening a person into a lead.

Both are ordinary Markdown. Both become playable. Both give tomorrow's agent a
durable place to begin.

> Tend one human clearly. Let the garden stay unfinished.

[Back to the labs index](../index.path.md)

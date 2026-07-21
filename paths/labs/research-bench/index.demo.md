---
type: demo
status: playable
title: "Research Bench: What Should I Believe?"
description: A durable evidence bench that pins competing claims, cites ordinary sources, records confidence and open questions, and hands the next discriminating move to Codex.
route: /labs/research-bench
tags: [research, evidence, epistemics, contested-claims]
related:
  - ../../tasks/2026-07-21-build-research-bench-lab.task.md
  - ../../andrew/2026-07-21-next-demo-shortlist.notes.md
  - ../dialectic-spiral/index.demo.md
play:
  steps:
    lists: items
    tables: rows
---

# Research Bench

## What should I believe?

Most contested questions do not need a stronger opinion. They need a
**durable bench**: the question written down, two or more real claims pinned
side by side, actual sources attached, a dated read of how confident you are,
and the one follow-up that would move you.

Chat forgets all of that by tomorrow. Ordinary Markdown does not.

This bench works one contested question at a time. It stays educational, not
inflammatory. You leave with a readable Source you—or Codex—can pick up next
week and push forward with a sharper question, not a fresh argument.

---

<!--
type: orientation
id: how-the-bench-works
title: How the bench works
-->

## Four layers, one Source

Each bench uses the same layers, in order:

| Layer | What belongs here | What must not creep in |
| --- | --- | --- |
| **Question** | One contested but researchable question. | Rhetorical framing that pre-picks a side. |
| **Claims** | At least two competing positions in plain words. | Straw versions of the position you disagree with. |
| **Citations** | Ordinary Markdown links to public sources, dated when checked. | Invented PathMX citation syntax, private links, screenshots you cannot re-find. |
| **Reading** | Your dated confidence, better-supported pick, open questions, and next move. | Certainty language that hides the bench's remaining gaps. |

The first three layers below are pre-loaded with a worked example. The
fourth is durable Markdown questions the Player writes back into this file.

---

<!--
type: bench
id: the-contested-question
title: The contested question
-->

## Today's contested question

> **If your doctor prescribes antibiotics for a mild bacterial infection,
> should you always finish the entire course even after you feel better?**

The received advice most of us grew up hearing is "always finish the course
or you'll cause resistance." Since 2017, several public-health voices have
argued that the advice is at best oversimplified and at worst wrong. Both
positions cite real evidence. Neither is a fringe view.

This bench does not replace clinical guidance for a specific illness or
patient. It practices holding two well-sourced claims in the same room long
enough to ask a better follow-up.

---

<!--
type: bench
id: competing-claims
title: Competing claims
-->

## Two claims, pinned

| # | Claim | Who typically says it |
| --- | --- | --- |
| **A** | Always complete the full prescribed course of antibiotics, even after symptoms resolve, to reduce the risk of antimicrobial resistance and relapse. | Traditional public-health guidance, echoed by many national health services and patient leaflets. |
| **B** | For many common infections, evidence supports taking the shortest effective course and stopping when clinically appropriate, guided by a clinician; the blanket "always finish the course" rule is not well supported by resistance evidence and may itself encourage overuse. | A growing group of infectious-disease researchers and clinicians, following the 2017 BMJ analysis piece and later stewardship reviews. |

Both claims are about the general prescribing principle, not about any one
prescription in front of you. If you are actually deciding whether to stop a
current course, the honest answer is: **talk to the prescribing clinician**.

---

<!--
type: bench
id: citations
title: Citations
-->

## Sources on the bench

Cited as ordinary Markdown links. Recheck dates before reusing.

**Supporting Claim A (finish the course):**

- [World Health Organization — Antimicrobial resistance Q&A](https://www.who.int/news-room/questions-and-answers/item/antimicrobial-resistance)
  advises the public to only use antibiotics when prescribed and to follow
  the healthcare professional's directions, framing individual misuse as a
  driver of resistance. Checked 2026-07-21.
- [U.S. CDC — About Antimicrobial Resistance](https://www.cdc.gov/antimicrobial-resistance/about/index.html)
  positions patient adherence to prescribed antibiotic use inside its overall
  resistance-prevention program. Checked 2026-07-21.
- [NHS — Antibiotics: How and when to take them](https://www.nhs.uk/conditions/antibiotics/)
  tells patients to keep taking the medicine until the course is finished
  even if they feel better, unless a healthcare professional tells them to
  stop. Checked 2026-07-21.

**Supporting Claim B (shortest effective course):**

- [Llewelyn et al., BMJ 2017 — "The antibiotic course has had its day"](https://www.bmj.com/content/358/bmj.j3418)
  argues that the "complete the course" message is not supported by
  resistance evidence for most common infections and that longer-than-needed
  exposure itself selects for resistant organisms. Checked 2026-07-21.
- [Spellberg, JAMA Internal Medicine 2016 — "The New Antibiotic Mantra: Shorter Is Better"](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2536180)
  reviews trials in which shorter antibiotic courses matched or beat longer
  ones for common infections. Checked 2026-07-21.
- [CDC — Antibiotic Stewardship: Core Elements](https://www.cdc.gov/antibiotic-use/hcp/core-elements/index.html)
  frames "use the shortest effective duration" as a clinical stewardship
  principle inside hospitals, alongside patient education. Checked
  2026-07-21.

Note that the CDC appears on both sides. That is not a contradiction—it is
the shape of the actual debate: public-facing patient messaging and clinical
stewardship guidance are aimed at different failure modes.

---

<!--
type: question
id: initial-confidence
title: Rate your starting confidence
actions:
  submit: questions.submitSingleChoice
-->

## Before reading the sources: how confident are you in Claim A?

Pick the level that matches your gut answer **before** you open the citations
above. This is a starting reading, not a final verdict.

- Strongly agree — I would tell a friend to always finish the course.
- Lean agree — I mostly believe it, with some doubt.
- Genuinely unsure — I can argue both sides.
- Lean disagree — I suspect the rule is oversimplified.
- Strongly disagree — I already think shortest-effective-course is closer to right.

---

<!--
type: question
id: better-supported-claim
title: After reading, which claim is better supported?
actions:
  submit: questions.submitSingleChoice
-->

## After reading the sources: which claim do the sources support better?

Base this on **the evidence on this bench**, not on which position feels
safer. It is fine to say the bench itself is not enough yet.

- Claim A is clearly better supported by these sources.
- Claim A is slightly better supported, but the bench is thin.
- The sources genuinely split; both claims are defensible.
- Claim B is slightly better supported, but the bench is thin.
- Claim B is clearly better supported by these sources.

---

<!--
type: question
id: what-would-change-mind
title: What would change your mind?
question:
  type: long
actions:
  submit: questions.submitText
-->

## What would change your mind?

Name a specific piece of evidence that would move your reading toward the
other claim. A single well-powered trial? A named review? A guideline change
from a body you already trust? Be concrete enough that Codex can go look for
it later.

---

<!--
type: question
id: open-questions
title: Open questions from this bench
question:
  type: fields
actions:
  submit: questions.submitFields
-->

## Open questions from this bench

Fill in the parts you now notice are missing. Empty fields are honest; they
tell the next agent where to start.

The gap that most bothers me is **___**<!-- @response.field id=gap label="Biggest gap" placeholder="e.g. no trial data for skin infections" -->.

The infection or context I actually care about is **___**<!-- @response.field id=context label="Specific context" placeholder="e.g. adult UTI, pediatric ear infection" -->.

One source I trust and want checked next is **___**<!-- @response.field id=next-source label="Next source to check" placeholder="e.g. Cochrane review on UTI duration" required=false -->.

---

<!--
type: handoff
id: codex-prompt
title: Hand the bench to Codex
-->

## Copy this into Codex

The bench is now durable Markdown. The next move is not another opinion—it
is a **discriminating question** that would separate Claim A from Claim B
on your specific context. Paste the prompt below into Codex from this
repository so it can read the bench and act.

```text
Open paths/labs/research-bench/index.demo.md and read every Block, including
the response and submission data on the question Blocks. Treat that as the
current state of my bench.

Then propose ONE discriminating question — not an opinion — that, if answered
by a real source, would meaningfully shift my read between Claim A and
Claim B for the specific context I recorded in "open-questions". The
question must be:

1. Grounded in a gap the current bench actually has (not a general
   restatement of the debate).
2. Answerable by a public, linkable source (guideline, systematic review,
   trial, registry, agency page).
3. Framed so a "yes" and a "no" answer would move me in different directions.

Return the question, why it discriminates, and 2–3 candidate sources you
would consult first. Do not resolve the debate for me.
```

---

<!--
type: reflection
id: what-this-bench-is-not
title: What this bench is not
-->

## What the bench is deliberately not

- **Not medical advice.** The example question is a stand-in for the shape
  of contested public claims. Real prescribing decisions belong with a
  clinician who knows the patient.
- **Not a debate scoreboard.** "Which claim is better supported" is a dated
  reading of the sources on this bench, not a permanent verdict about the
  world.
- **Not a citation format.** Sources are ordinary Markdown links. If a
  future PathMX citation feature ships, the bench upgrades in place; the
  Source stays readable Markdown either way.
- **Not a replacement for the [Dialectic Spiral](../dialectic-spiral/index.demo.md).**
  That lab is a conceptual instrument for how positions sublate over time.
  This one is a working bench for one concrete question and its evidence.

[Back to the labs index](../index.path.md)

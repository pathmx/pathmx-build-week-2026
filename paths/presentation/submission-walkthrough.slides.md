---
type: slides
status: draft
title: Learn anything. Keep what you learn.
date: 2026-07-21
related:
  - ../tasks/2026-07-20-produce-submission-video.task.md
  - ../work-log/2026-07-20-devpost-submission-draft.notes.md
theme:
  color:
    bg: "#f7f3ea"
    fg: "#1d2a26"
    accent: "#147d6c"
    surface: "#fffdf8"
    muted: "#5e6e68"
    border: "#cad8d2"
  prose:
    size: 1.14rem
    leading: 1.45
  measure: 68ch
  shape:
    radius: 0.8rem
  dark:
    color:
      bg: "#101815"
      fg: "#e9f2ee"
      accent: "#63d2b8"
      surface: "#18241f"
      muted: "#a9bbb4"
      border: "#3c544b"
      link: "#8adfcf"
      focus: "#a8efe2"
play:
  steps:
    lists: items
    tables: single
---

[@styles]: ./submission-walkthrough.css

<!--
id: promise
title: Learn anything. Keep what you learn.
-->

<p class="eyebrow">Learning Labs · Build Week 2026</p>

# Learn anything.

## Keep what you learn.

You ask AI a great question. You get a great answer. A week later, it is
buried—and the next conversation starts from scratch.

<!-- Video target: 0:00–0:20 -->

---

<!--
id: ownership
title: A Path you own
-->

# An AI conversation becomes a Path you own.

Follow it. Change it. Pick it up tomorrow.

<div class="path-route" aria-label="Conversation becomes a Path">
  <span class="node muted-node">Conversation</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node active-node">Path</span>
</div>

The lab records the work. The Starter helps someone make their own Path. The
examples show what Paths can do.

<!-- Video target: 0:20–0:35 -->

---

<!--
id: hero-proof
title: One learner, one useful move
-->

# One learner. One useful move.

> Help me learn the Italian Game—a chess opening—without memorizing move
> sequences. I want to understand what each move is trying to achieve.

<div class="path-route" aria-label="Goal becomes Markdown and opens in the Player">
  <span class="node">Goal</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node">Markdown you own</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node active-node">Player</span>
</div>

We tell Codex what we want to learn. It writes a readable Path and opens the
first move.

<!-- Recording move: use a fresh Codex session; show the real request, the
created Markdown, Player entry, one learner action, and the saved result or
changed next move. Cut generation time, not the evidence. -->

<!-- Video target: 0:35–1:25 -->

---

<!--
id: continuation
title: Continue instead of restarting
-->

# Tomorrow, continue. Do not restart.

What you do changes what comes next.

<div class="path-route" aria-label="Goal leads to practice, a result, and a next move">
  <span class="node">Goal</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node">Practice</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node">Result</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node active-node">Next move</span>
</div>

Close it. Come back tomorrow. Your Path—and your place in it—are still there.

<!-- Video target: 1:25–1:45 -->

---

<!--
id: range
title: Three different experiences
-->

# One format. Three different experiences.

- **Practice:** [Chess](../labs/chess-opening-lesson/index.demo.md) steps through
  an opening and explains each move.
- **Explore:** [Kepler](../labs/kepler-orbit/index.demo.md) changes speed and
  lets the orbit respond.
- **Create:** [Campaign Forge](../labs/campaign-forge/index.demo.md) compares
  possibilities and shapes a playable artifact.

<!-- Recording move: give each example one short visual cut. Keep Campaign
Forge only if the team accepts it as the final contrasting example. -->

<!-- Video target: 1:45–2:10 -->

---

<!--
id: turning-point
title: What Build Week taught us
-->

# We started too big.

Whole-course generation was slow, uneven, and disconnected.

So we narrowed it: one useful move, one learner action, one better next move.

Mark Johnson created PathMX before Build Week. This week, Codex and GPT-5.6
helped us test the smaller loop and build its Starter, examples, and evidence.

The loop runs locally today. Shared and multi-user Paths are future work.

<!-- Video target: 2:10–2:35 -->

---

<!--
id: closing
title: The broader Path
-->

# Learning is where we started.

Any experience with context, action, and a result worth keeping could become a
Path.

<div class="path-route path-route-open" aria-label="Paths can support learning, practice, creation, decisions, and more">
  <span class="node">Learn</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node">Practice</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node">Create</span>
  <span class="arrow" aria-hidden="true">→</span>
  <span class="node">Decide</span>
  <span class="arrow continuation-mark" aria-hidden="true">→</span>
</div>

And this presentation? It is a Path, too.

<div class="closing-contrast" aria-label="A document tells, an app enables, and a Path guides">
  <p><strong>A document</strong> tells you something.</p>
  <p><strong>An app</strong> lets you do something.</p>
  <p><strong>A Path</strong> guides you from understanding to action—and stays yours.</p>
  <p class="closing-tagline">Learn anything. Keep what you learn.</p>
</div>

<!-- Video target: 2:35–3:00 -->

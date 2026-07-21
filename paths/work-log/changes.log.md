---
status: active
date: 2026-07-15
updated: 2026-07-21
related:
  - ../index.path.md
  - ./index.path.md
  - ../tasks/2026-07-15-add-change-log-workflow.task.md
  - ../tasks/2026-07-21-style-change-log-as-blog.task.md
  - ../tasks/2026-07-21-add-project-feature-cards.task.md
styles:
  classes:
    - change-journal
---

<!--
type: change
date: "2026-07-21T16:52:46-04:00"
-->

[@change-published]: ./changes.components.md

## Hosted bootstrap, release checks, and the eval record align

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The Build Week home now points learners and judges to the canonical raw
`bootstrap.md`, a one-prompt setup guide, a full technical eval report, and the
separate concise findings deck. The report records the phased Codex CLI method,
scenario and profile matrix, deterministic and judge measures, latency data,
failure-driven instruction changes, three accessible comparison figures, the
subagent experiment, and explicit limits.

Canonical skill sync now transactionally replaces the complete managed skill
tree in the current checkout without creating or switching Git branches. The
same `/learn`, `/teach`, and `/pathmx` packages are byte-identical in the
Learning Starter and this repository. The unverified project-scoped Terra
worker was removed after two probes accepted the delegation but launched
Sol/low children.

PathMX 0.1.25 passed 64 canonical skill tests, the Starter candidate and normal
compatibility checks, and a clean Build Week root build with 369 artifacts and
no warnings. Player review covered the new report and revised deck in dark
mode: twelve chart rows and three figures rendered without horizontal overflow
or console warnings, and built metadata confirms the four deck metric cards are
four component Beats.

---

<!--
type: change
date: "2026-07-21T15:36:32-04:00"
-->

[@change-published]: ./changes.components.md

## Learning skills add a bounded parallel runway

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The repo-local `/learn` mirror now keeps the learner conversation, shared
indexes, profile, activity state, and placement decisions with the parent agent
while allowing two or three direct workers to research or draft separate later
session files after the learner confirms the map. A shared vocabulary and
scenario contract, one owner per file, focused worker checks, and a fixed join
point keep coordination from becoming another source of learner waiting.

The synchronized PathMX reference also documents the accepted
`styles.classes` Source and Block selector contract and the lower-specificity
prose baseline. Its fixture proof remains in the canonical skills repository;
the Build Week content continues to follow the installed PathMX version.

Verification: the canonical skills suite passed 61 tests. This repository's
full PathMX build produced 106 artifacts with only the three known unsupported
Tufte-theme fields.

---

<!--
type: change
date: "2026-07-21T15:21:17-04:00"
-->

[@change-published]: ./changes.components.md

# Build Week Changes

## Two local-life labs become reviewable on the Build Week hub

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

[Relationship Garden](../labs/relationship-garden/index.demo.md) now gives the
hub a playable, local-first stewardship instrument: six fictional people,
parallel contexts, an in-session touch, and an explicit Codex persistence
handoff. [My Greenville: Coffee Field Notes](../labs/my-greenville/index.demo.md)
is linked as a deliberately unfinished personal atlas with five researched
coffee anchors, dated public evidence, privacy-safe field prompts, and one next
outing. The [Relationship Garden task](../tasks/2026-07-21-build-relationship-garden-mvp-lab.task.md)
and [My Greenville task](../tasks/2026-07-21-build-my-greenville-coffee-path.task.md)
record the remaining human review boundaries.

PathMX 0.1.24 completed a clean scratch build with 3,546 artifacts; exact route
lookups resolved both new Sources. Live Player review covered the Relationship
Garden filter → Priya → Parallel Lives → session-touch flow and the Greenville
arrival route; both had no horizontal overflow at 390 × 844 and no checked
browser warning/error logs. `git diff --check` passed. The no-JavaScript fallback
was not repeated in this publish pass.

---

<!--
type: change
date: "2026-07-21T14:45:00-04:00"
-->

## Andrew lands the Relationship Garden handoff on main

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Andrew's strategy scratchpad now lives on `main` under
[`paths/andrew/`](../andrew/index.path.md), including the
[Relationship Garden concept outline](../andrew/2026-07-21-relationship-garden-outline.notes.md)
and the agent-ready
[implementation plan](../andrew/2026-07-21-relationship-garden-implementation.plan.md).
The working name is **Relationship Garden** (lab id `relationship-garden`)
rather than Reputation Garden, to keep stewardship tone over extractive CRM
language. The research index links both docs so implementing agents can find
the handoff without a private branch. Tracked in the
[owning task](../tasks/2026-07-17-andrew-demo-strategy-notes.task.md).

PathMX scratch build verification is recorded with the landing commit; Play
review was skipped because these are ordinary notes with no new interaction
behavior.

---

<!--
type: change
date: "2026-07-21T14:23:27-04:00"
-->

## The Build Week hub gains reusable feature and team cards

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The home page now uses shared layout cards for featured work and team bios,
Lucide icons in hub links, softer header atmosphere, and chip-style lists,
while the repo-local skill pack renames the personal workflow from `/path` to
`/learn` and `/teach`.

The [owning task](../tasks/2026-07-21-add-project-feature-cards.task.md) covers
`<project-feature>` and the placeholder hub cards; `<team-member>`, list-chip
styling, and larger heading type live in `layout.components.md` and
`styles/base.css`. PathMX Core follow-ups for Block `surface` styles and the
named-slot leak were filed in the Core inbox rather than papered over here
beyond a temporary CSS hide.

Verification: `pathmx build -o .pathmx-check` succeeded with only the known
Tufte-theme and unrelated work-log link warnings. Live Player review confirmed
the three feature cards, three team cards with initials, iconified hub lists,
and header wash on `/index.path`.

---

<!--
type: change
date: "2026-07-21T12:18:29-04:00"
-->

[@change-published]: ./changes.components.md

## The changes log becomes a connected build journal

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Every entry in this log now carries its publish timestamp as structured Block
topmatter and renders it as semantic, locale-aware metadata beneath the title.
Source-scoped journal styling gives each outcome the spacing of a short blog
post, while a continuous Path line and filled title nodes make the sequence of
work visible without turning the log into a card grid.

The [owning task](../tasks/2026-07-21-style-change-log-as-blog.task.md) records
the data-shape migration, component and visual checks, and any remaining
follow-up. The reusable `change-published` component keeps the ISO timestamp
as the durable source while presenting a long date and local time to the
reader.

PathMX 0.1.22 produced 291 artifacts in a clean full build with only the three
pre-existing Tufte-theme warnings. The focused Player route rendered all 22
timestamps in both light and dark schemes at 1280 × 720 and 390 × 844, kept
the Path line aligned without horizontal overflow, and reported no browser
errors. The strengthened change-log check, shell syntax check, and
`git diff --check` also passed.

---

<!--
type: change
date: "2026-07-21T12:14:02-04:00"
-->

## The Build Week hub starts at the submission walkthrough

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The [Build Week hub](../index.path.md) now opens with a **Start Here** link to
the dedicated [submission walkthrough](../presentation/submission-walkthrough.slides.md),
so the intended three-minute presentation is the first clear route for a new
visitor. The technical [internal eval review](../presentation/walkthrough.slides.md)
remains available but is explicitly labelled as separate. The owning
[video task](../tasks/2026-07-20-produce-submission-video.task.md) records the
navigation decision and the remaining recording checks.

The hero learner request now names the Italian Game as a chess opening instead
of assuming the audience already recognizes it. The clearer wording remains
aligned with the actual chess lesson while making the example immediately
legible to a first-time judge.

PathMX 0.1.22 built the graph successfully; Player review confirmed the link
is visible on initial hub arrival, opens the submission route, and has no
browser-console errors. A focused Player pass also confirmed that the clarified
hero request fits comfortably at presentation size. The three pre-existing
unsupported Tufte-theme fields remain the only build warnings.

---

<!--
type: change
date: "2026-07-21T11:25:33-04:00"
-->

## The submission story becomes a dedicated public Path

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The new [submission walkthrough](../presentation/submission-walkthrough.slides.md)
turns the three-minute video into a seven-Block Path: one human learning
problem, a concrete goal → readable Source → Player proof, durable continuation,
three contrasting examples, an honest Build Week turning point, and a controlled
zoom-out from learning to the broader Path concept. Its recurring route motif
and restrained light/dark presentation styles support the spoken story without
changing the separate internal evaluation deck.

The owning [video task](../tasks/2026-07-20-produce-submission-video.task.md)
records the three independent presentation reviews, the pre-existing versus
Build Week contribution boundary, and the remaining recording decisions.
PathMX 0.1.22 built the complete graph successfully; a 1280 × 720 Player pass
covered all seven Blocks, forward and backward navigation, the closing fit, and
the Chess, Kepler, and Campaign Forge routes. The only warnings were the three
pre-existing unsupported Tufte-theme fields. Stopwatch rehearsal, live proof of
the durable learner loop, and final acceptance or replacement of Campaign Forge
remain before recording.

---

<!--
type: change
date: "2026-07-21T10:53:07-04:00"
-->

## The personal learning starter is backed by a repeatable eval loop

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The canonical [PathMX skills](https://github.com/pathmx/pathmx-skills) now
provide one hosted bootstrap, a buffered personal-learning workflow, verified
PathMX authoring guidance, and a real Codex CLI eval harness. The rebuilt
[Learning Starter](https://github.com/pathmx/pathmx-learning-starter) keeps one
Player root, visible milestone state, a complete two-session module scaffold,
durable activity and annotation records, learner-controlled presentation, and
checks that reject thin or structurally invalid learning modules. Tram's early
workflow contribution remains named in the canonical skill tests and design
history.

The [internal eval review](../presentation/walkthrough.slides.md) documents the
objective, harness phases, scenario coverage, scoring method, observed latency,
failure-driven repository changes, current evidence, and limitations. It shows
how default-strength runs exposed latency, lower-reasoning runs exposed
instruction gaps, and the hardened fast-profile candidate reached 100%
deterministic and independent-judge scores on the final ambiguous-goal and
return-and-adapt scenarios. The linked
[manual Codex Desktop guide](../guides/self-learning-manual-test.guide.md) lets
the team repeat the same flow from the hosted bootstrap.

The canonical suite passed 55 tests, both consumer repositories matched the
canonical skills byte for byte, and the Starter compatibility fixture passed
against its exact PathMX 0.1.21 baseline. PathMX 0.1.22 built the 279-artifact
Build Week graph with only the three pre-existing Tufte-theme warnings. Player
review confirmed the presentation styles, results cards, and manual-guide link
with no browser warnings. A follow-up light/dark Player pass improved the
deck's type scale, made all four result metrics native Beats, and replaced the
glowing cards with a flatter theme-responsive treatment. A root-level
[lab stylesheet](../styles/lab.css), informed by the technical visual system
on `pathmx.dev`, now gives the complete graph a monospaced, compact, flat
light/dark baseline. Presentation styling is limited to wider report blocks
and the metric-grid flourish; intentionally bespoke labs retain their own
themes. Published-template variance runs and a complete human Codex Desktop
pass remain release follow-up in the
[starter task](../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md).

---

<!--
type: change
date: "2026-07-19T14:52:53-04:00"
-->

## A beginner chess-opening lesson exercises the canonical components

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

[Build Before You Attack](../labs/chess-opening-lesson/index.demo.md) turns the
canonical Chess Board and Chess Game components into a short beginner lesson
on controlling the center, developing pieces, and making the king safe. Its
annotated Italian Game replay now exposes every half-move sequentially in Play
while retaining the teaching notes, followed by a concrete development-move
practice board. The shared Chess Game layout compresses the board, controls,
move list, and active note into a single narrow Player-friendly column, and the
official [Labs hub](../labs/index.path.md) now links the lesson. The owning
[lesson task](../tasks/2026-07-19-build-chess-opening-lesson.task.md) is in
review for Mark's graduation decision.

The same review also records two canonical-component follow-ups without
presenting them as completed fixes. The new
[promotion task](../tasks/2026-07-19-add-chess-promotion-choice.task.md) calls
for an accessible queen, rook, bishop, or knight choice with queen as the
fallback. The active
[navigation task](../tasks/2026-07-18-clarify-player-navigation-and-link-affordances.task.md)
now includes the reproduced component-link rewrite collision: the first link
to an imported component Source retains its raw relative Markdown address and
404s on an extensionless route, although the nested component route exists.

PathMX 0.1.19 built the complete graph with only the three known Tufte-theme
warnings. Live Browse and Play checks covered replay forward and backward
movement, direct board interaction, retained piece rendering, Player Context
Actions, focus restoration, and a 390 × 844 layout without horizontal
overflow. A final Player pass confirmed the replay advances from the starting
position through `1. e4`, `1... e5`, and `2. Nf3`, then returns through the same
positions. Synthetic keyboard activation remained inconclusive, so real-device
keyboard and touch review is explicitly still required.

---

<!--
type: change
date: "2026-07-18T21:16:03-04:00"
-->

## Labs walkthrough yields a workspace link audit and Player follow-ups

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Andrew's continuing lab review is now captured in the
[field-guide task](../tasks/2026-07-15-explore-reference-labs-and-test-authoring-skill.task.md)
and the dated [review notes](./2026-07-18-andrew-labs-review.notes.md). Kepler
Orbit works overall, but its tall instrument can extend below the Player
viewport while a scroll intended to inspect it can advance the Beat. The Simple
Learner Quiz successfully wrote and rendered durable answers, but the open
Player remained at `Saved. Updating...` and did not make forward navigation
clear. Those test responses were removed so the shared quiz remains unanswered.

The new [workspace link audit](../research/workspace-link-audit.notes.md) checks
73 Markdown Sources and a fresh generated preview. All 223 authored internal
targets exist and all 68 generated document routes return successfully. Four
first reference-definition links—Bookshelf, Chess, Layout, and 3D Globe—are
emitted one directory too high on extensionless demo routes. Of 69 unique
external URLs, 48 work directly or through expected redirects; 19 canonical
PathMX GitHub targets are inaccessible without authentication, one is gated by
Devpost login, and one is an unresolved component template. No external target
was proven malformed or dead. The owning
[navigation task](../tasks/2026-07-18-clarify-player-navigation-and-link-affordances.task.md)
is now in progress with Mark reviewing the split between Build Week link
cleanup and PathMX Core fixes. PathMX 0.1.17 built the complete graph with only
the three known Tufte-theme warnings; visual browser link QA remains follow-up
because browser control was unavailable during the audit.

---

<!--
type: change
date: "2026-07-18T15:52:12-04:00"
-->

## Andrew's Chess walkthrough becomes navigation review evidence

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Andrew's [July 18 labs walkthrough](https://www.loom.com/share/0c6e72c323c84ebd8ead8e0256c23f25)
now appears with the other [shared walkthroughs](../research/resources.path.md),
and a dated [review summary](./2026-07-18-andrew-labs-review.notes.md) preserves
the useful observations without committing the raw transcript. The review
captures Command-K discovery, Chess interaction and temporary state, keyboard
ownership after entering a component, Play-mode continuity, missing final-Beat
confirmation, and the need to distinguish internal from external links before
activation.

A new [navigation and link-affordance task](../tasks/2026-07-18-clarify-player-navigation-and-link-affordances.task.md)
assigns Andrew and Mark the broader Player review. The active
[Chess task](../tasks/2026-07-17-fix-chess-piece-disappearing.task.md) now owns
the concrete reference cleanup: the local lab and helper files remain intact,
but the canonical directory and three upstream GitHub file links all return
404. PathMX preserves those destinations correctly as external links, so this
is not a route-rewriting failure. PathMX 0.1.17 built the task graph with 240
artifacts and only the three known Tufte-theme warnings; a fresh watched preview
also served the new Sources successfully. Remaining work is to replace the
broken Chess links, test the visible external-link contract, reproduce the
component-focus and end-of-Path experience, and gather exact evidence for the
separately mentioned login issue.

---

<!--
type: change
date: "2026-07-18T15:26:14-04:00"
-->

## Lab reviews gain a shared field guide and concrete Player follow-ups

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The [authoring-skill review task](../tasks/2026-07-15-explore-reference-labs-and-test-authoring-skill.task.md)
now gives Andrew one compact review method and a lab-specific focus for every
demo in the hub. It also records the Campaign Forge observations from the
public Space: its Campaign Card code fence is present as one built `code` Beat,
but the focused Player can fail to show it as expected; arrow-key traversal can
become intermittent after pointer interaction; and the focused presentation
can feel too small. The next review separates authored visual scale from Player
focus and keyboard ownership before filing a PathMX Core issue.

The [Dialectic Spiral task](../tasks/2026-07-17-build-native-generative-artifact-lab.task.md)
now tracks the mismatch between a selected stage pill and the visible spiral
state, plus the accidental `[^c1]` annotation and its Actor-session evidence.
No lab implementation or Actor evidence is part of this task-tracking change.
PathMX 0.1.17 built the focused task graph with 234 artifacts; only the three
known Tufte-theme warnings remain. Mark and Tram retain their assigned review
boundaries, and the interaction findings still require focused reproduction.

---

<!--
type: change
date: "2026-07-18T13:31:53-04:00"
-->

## The Hegelian Spiral Perplexity artifact becomes a native Dialectic Spiral lab

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The [Dialectic Spiral lab](../labs/dialectic-spiral/index.demo.md) ports the
shared [Hegelian Spiral](https://hegelianspiral.pplx.app/) artifact into the
Player as a `<dialectic-spiral>` Literate Component: a canvas spiral that
reads its palette from CSS custom properties (so one drawing routine follows
light and dark schemes), exposes observe → thesis → antithesis → synthesis →
climb → absolute as ordered Play-traversable states, pauses animation outside
its presented Beat, and degrades to a labeled static SVG without JavaScript.
A companion [design-notes research page](../research/perplexity-artifact-design-notes.notes.md)
records the cross-artifact CSS/style techniques worth reusing (oklab
`color-mix` surfaces, editorial Fraunces/Inter pairing, tabular-nums readouts,
scene-plus-readout layout) and flags candidates for Core or the starter theme.
The [owning task](../tasks/2026-07-17-build-native-generative-artifact-lab.task.md)
records verification — PathMX 0.1.13 build with only the known Tufte warnings,
component wiring confirmed in the built HTML — and is in review with Tram for
the rendered Play pass across schemes, widths, and reduced motion.

---

<!--
type: change
date: "2026-07-17T15:20:40-04:00"
-->

## Campus Constellation becomes a Play-by-beat practice constellation

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Two learner-facing surfaces in the
[Campus Constellation path](../research/campus-constellation-networking.path.md)
no longer expose persistence or agent internals. The "Choose Your North Star"
question prompt drops "saved as readable learning evidence," and the
adaptive-plan closing no longer narrates that Codex updates the path "outside the
chat." Per the authoring contract (`source-authoring.md`, Interactive And
Version-Sensitive Surfaces), that maintainer context now lives in hidden Block
data — the question's `submission`/`response` topmatter and a `note` on the
adaptive-plan Block — while the learner copy states only the decision and next
move. Its companion
[component family](../research/campus-constellation.components.md) now gives
each of eleven learning features an independent interaction and aligns every
meaningful stage with ordered Player beats. Seven randomized awkward-moment
flashcards keep the learner on a prompt beat before revealing coaching and
reset to a new prompt for the next card.

The path now also carries a distinct campus-at-night visual system informed by
Campaign Forge's strong arrival and instrument-like framing: deep navy space,
cyan route signals, warm gold checkpoints, a subtle map grid, framed callouts,
and clearer table surfaces. The metaphor remains specific to campus routes and
relationship constellations rather than borrowing the fantasy lab's identity.

Direct component controls now also share a correctly initialized state
channel with Play. State listeners read the current value explicitly, and
buttons provide immediate visible feedback, fixing options that looked enabled
but did not change when clicked.

The focused PathMX 0.1.13 build produced 133 artifacts with no new warnings
(only the three known Tufte token diagnostics). Browse and Play exposed the
ordered component beats, the flashcard reveal and random-reset flow worked,
browser review confirmed the new arrival and flashcard hierarchy with no
new console errors; direct checks covered Reach, Stretch, Guide, and Reveal
coaching. `git diff --check` passed. The owning
[research task](../tasks/2026-07-15-contribute-research-explorations.task.md)
is with Mark for keyboard and visual review.

---

<!--
type: change
date: "2026-07-17T11:12:18-04:00"
-->

## A shared resources and inspiration page collects what the team has been sharing

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

A new [Shared Resources & Inspiration](../research/resources.path.md) page, linked
from the [research index](../research/index.path.md), gathers the walkthrough
Looms, generative Perplexity artifacts, UI/product inspiration (Dilum Sanjaya,
the Spaceholders demo, the Player beat-navigation design spec, the hosted
reference labs), and the tools on the team's radar (Glaze, Supertonic TTS, and
the observability/audit-log podcast clip) that had been living only in Slack.
Personal and private links — family/news artifacts and the Devpost invite — were
deliberately kept out per the repo guardrails and the research index's
contributing note.

---

<!--
type: change
date: "2026-07-16T22:25:40-04:00"
-->

## A Dungeons & Dragons campaign workshop joins the lab demos

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

[Build a Dungeons & Dragons Campaign](../labs/campaign-forge/index.demo.md)
turns one fantasy premise into a campaign promise, faction triangle, five-place
map, flexible first session, pressure test, and reusable campaign card. It is
grounded in *The Lanterns of Duskmere* while keeping every planning move
portable to another tabletop campaign; the [labs index](../labs/index.path.md)
now links the workshop. Its lantern-lit field-guide presentation now includes
five focused Literate Components: the lantern pressure clock, an interactive
faction triangle, the Duskmere field map, a choice-responsive session spine,
and a deterministic consequence forge. Each keeps its underlying campaign
model readable without JavaScript and uses native direct controls plus ordered
Player states where traversal teaches the idea.

The owning [authoring-skill task](../tasks/2026-07-15-explore-reference-labs-and-test-authoring-skill.task.md)
records Browse and Play review, the mobile layout correction, and the
Player-level keyboard-navigation observation. PathMX 0.1.13 built the complete
graph successfully with 203 artifacts; the component Sources resolved in the
generated manifest, direct selection and Player Context Actions worked, and
the 390 × 844 layout had no horizontal overflow. Only the three pre-existing
Tufte theme warnings remain. Mark still needs to manually review keyboard
activation, reduced motion, and the complete visual flow; Andrew's broader
reviewed-lab tour remains open.

---

<!--
type: change
date: "2026-07-16T17:23:54-04:00"
-->

## Practice interview voice-agent spike maps the Realtime path

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The new
[Practice Interview Voice Agent](../research/practice-interview-voice-agent.path.md)
research note records the proposed OpenAI Realtime WebRTC architecture, prompt
shape, server-side scoring boundary, and unlanded Host Action contracts for
starting a session, scoring a turn, and saving durable evidence. The companion
[Practice Interview Simulator](../labs/practice-interview/index.demo.md) lab
adds an immersive local simulation with a room scene, mission-style interview
modes, live transcript signals, debrief ranking, targeted follow-up, polish or
practice routing, and a dossier-style evidence packet so reviewers can inspect
the learning loop without live OpenAI credentials.

The owning
[practice-interview task](../tasks/2026-07-16-spike-practice-interview-voice.task.md)
records the checks. PathMX 0.1.13 is current, the final scratch build passed
with 178 artifacts and only the known Tufte theme warnings, `git diff --check`
passed, the expected Sources appeared in the scratch graph, and headless Chrome
exercised desktop and mobile simulator paths through `/labs/practice-interview`.
Tram remains the assigned human reviewer.

---

<!--
type: change
date: "2026-07-16T17:23:54-04:00"
-->

## Task workflow now assigns explicit reviewers

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The task workflow now records a `reviewer` in every task Source and projects it
on the [task dashboard](../tasks/index.tasks.md). Reviewer assignment is limited
to Mark, Tram, or Andrew; owners remain the accountable humans, and the review
lane now has a named reader for each task.

The change is tracked in the
[reviewer workflow task](../tasks/2026-07-16-add-task-reviewers.task.md).
`pathmx self-update` confirmed PathMX 0.1.13 is current, the scratch PathMX
build passed with only the three known Tufte theme warnings, and
`git diff --check` passed. Play review was skipped because this is workflow
prose, frontmatter, and dashboard table work with no new interaction behavior;
Andrew remains the assigned human reviewer.

---

<!--
type: change
date: "2026-07-16T16:35:51-04:00"
-->

## The task dashboard drops a stale demo count

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The [task dashboard](../tasks/index.tasks.md) result for narrowing the labs
index no longer hardcodes "six" ready demos. The reviewed 3D globe reference
landed after that task, so the hub now links seven; the row now reads
count-agnostic to match the [labs index](../labs/index.path.md) and stay true
as the demo set changes.

---

<!--
type: change
date: "2026-07-15T23:07:00-04:00"
-->

## Campus Constellation turns college networking into interactive practice

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The new [Campus Constellation path](../research/campus-constellation-networking.path.md)
helps college students define a networking goal, choose a difficulty, rehearse
conversations, complete a real-world mission, and use evidence to select their
next practice. Its companion
[Literate Components](../research/campus-constellation.components.md) add a
clickable relationship-orbit map and a five-state awkward-moment rehearsal
deck, while three durable questions preserve the learner's choices in readable
Source.

PathMX 0.1.10 built the space successfully with both component roots, scoped
styles, scripts, and ordered Player states resolved. `git diff --check` also
passed. The merge cleanup preserved this entry and the Three Globe outcome as
separate Blocks; its verification is recorded in the
[cleanup task](../tasks/2026-07-15-resolve-campus-constellation-merge.task.md).
Visual, keyboard, pointer, and narrow-container Play review remain before final
acceptance; detailed evidence is recorded in the
[owning research task](../tasks/2026-07-15-contribute-research-explorations.task.md).

---

<!--
type: change
date: "2026-07-15T22:26:42-04:00"
-->

## A reviewed local-resource 3D globe joins the demo set

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The [Three Globe reference](../labs/three-globe/index.demo.md) now provides one
focused, data-backed scene at `/labs/three-globe`. It copies the reviewed
`<three-globe-scene>` component, network JSON, local Three.js bundle, local NASA
Earth texture, and provenance notices from immutable upstream commit
`35af1917`; the labs index links the new route.

The public PathMX 0.1.10 build produced 142 artifacts. Desktop and 390 px Play
reviews covered texture and data readiness, direct drag, responsive layout,
and component Beat presentation. The focused upstream gauntlet passed all
eight lifecycle, refresh, interaction, and failure checks, and the strict
maintainability review found no blocker. Canvas rotation remains pointer-only
and auto-rotation does not yet opt out for reduced motion; those limits are
recorded in the [owning task](../tasks/2026-07-15-add-three-globe-reference.task.md).

---

<!--
type: change
date: "2026-07-15T18:44:14-04:00"
-->

## The public Build Week Space now runs PathMX 0.1.10

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

PathMX 0.1.10 is installed on `muthurd`, and the replacement Spaces gateway is
serving its bundled Player at
[build-week.pathmx.net](https://build-week.pathmx.net/). Only the gateway was
restarted; the existing Cloudflare tunnel kept the same process throughout.

The public Player JavaScript and Player/runtime CSS hashes changed from the
0.1.9 bundle. The root, tasks, labs, changes log, and Kepler demo routes all
returned HTTP 200, while the private health path remained 404 and a write
request remained 405. Visual review was skipped because asset identity and the
public read-only behavior were verified directly. Detailed deployment evidence
is recorded in the
[owning task](../tasks/2026-07-15-update-muthurd-gateway-pathmx-0-1-10.task.md).

---

<!--
type: change
date: "2026-07-15T18:12:21-04:00"
-->

## The labs hub now lists only ready demos

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The [labs index](../labs/index.path.md) now has one plain `Demos` section that
links Chess, Tufte theme, layout components, the simple learner quiz,
Bookshelf, and Kepler orbit. The previous reviewed label is gone.

The unfinished Starter MVP test, slide presentation, and component proving
ground remain in the repository but are no longer linked from the hub. PathMX
0.1.9 built 123 artifacts without unresolved Source or asset links; only the
three known Tufte token warnings remain. Play review was skipped because this
is a list-only visibility change with no new interaction or presentation
behavior.

---

<!--
type: change
date: "2026-07-15T17:42:58-04:00"
-->

## Agents now update the playable changes log before pushing

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The repository now treats this Source as the concise record of landed work.
Agents prepend one outcome-first entry per `---` Block, link the owning task and
durable artifacts, record the meaningful verification or skipped review, and
name any remaining follow-up. Detailed execution evidence stays in the task;
this log records what became true.

`AGENTS.md` now requires a material update here before shared pushes. The
repository check compares the outgoing range with `origin/main`, fails when
other work has no matching log update, and verifies that every playable Block
contains a change-entry heading. Fixture tests prove the missing-update failure
and coherent-range success paths. The workflow remains intentionally local and
lightweight; server-side enforcement can be added if bypasses become a real
coordination problem.

---

<!--
type: change
date: "2026-07-15T17:42:58-04:00"
-->

## Current team handoffs and authoring guidance are focused

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The task board now names one immediate handoff for each collaborator. Andrew
will explore every reviewed lab and ask a fresh Codex task to apply the
repo-local authoring skill to a small lab change. Tram can contribute any
research exploration or idea under the research index. Mark's Starter MVP
guide remains explicitly in progress and is not ready for tester handoff.

The narrow college-scenario, evaluation, demo-story, prototype, and commit-
notification tasks had no activity, so they were consolidated or removed
rather than marked complete. The `pathmx-authoring` skill now matches PathMX
Core at `c50ab7c`, including the new design-engineering reference. Its validator
passed, every canonical task appears once on the dashboard, PathMX 0.1.9 built
126 artifacts with only the three known Tufte warnings, and the public task
dashboard reflected the new handoffs after muthurd refreshed.

---

<!--
type: change
date: "2026-07-15T17:42:58-04:00"
-->

## The PathMX 0.1.9 reference set graduates with Kepler

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The reviewed Build Week examples now cover Chess, layout components, durable
single-choice questions, Bookshelf, Tufte presentation, slides, component
patterns, and the
[Kepler orbit instrument](../labs/kepler-orbit/index.demo.md). Kepler was copied
from the canonical Core implementation with only its local route, backlink,
and Source selector adapted.

Focused Play reviews covered component traversal, controls, narrow behavior,
and current Player link Action hints without browser errors. The final
reference build completed on PathMX 0.1.9 without unresolved Source or asset
links; only the known Tufte token diagnostics remain. The owning
[verification task](../tasks/2026-07-15-verify-pathmx-0-1-9-reference-set.task.md)
is complete.

---

<!--
type: change
date: "2026-07-15T17:42:58-04:00"
-->

## The Build Week Space is live on muthurd

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

A clean `main` checkout now lives on `muthurd` and serves the repository as the
read-only [Build Week Space](https://build-week.pathmx.net/). The host runs
PathMX 0.1.9 and the current Codex app. Restarting the known Spaces gateway
replaced its stale pre-0.1.9 Player while preserving the existing Cloudflare
tunnel and public read-only boundary.

The root, task dashboard, and reviewed lab routes returned HTTP 200; control
URLs stayed unavailable and writes returned the expected read-only response.
The host checkout has been fast-forwarded and explicitly refreshed after each
shared push. A conservative scheduled-sync design remains ready for a later
decision about pull-only deployment versus a separate authenticated working
clone.

---

<!--
type: change
date: "2026-07-15T17:42:58-04:00"
-->

## Build Week coordination and the Starter MVP test become source-backed

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The workspace now has canonical task Sources, a playable dashboard, clear
human ownership, repository-level agent instructions, and durable completion
evidence. Stale reports, team scaffolding, abandoned golden-loop material, and
empty generated session shells were removed while the surviving meeting notes,
research, labs, and work log were linked from the root Path.

The
[self-learning Starter MVP test](../labs/self-learning-box/manual-test.guide.md)
now specifies the candidate initializer, fresh Codex onboarding, Player
handoff, proximal-edge work, Actor-backed learner evidence, reload, and one
evidence-based adaptation. The guide and initializer path are still being
finished; no tester run is claimed yet. The published workspace checkpoint was
audited, built, merged with remote `main` without a force push, and preserved
the remote history while resolving the stale-example overlap.

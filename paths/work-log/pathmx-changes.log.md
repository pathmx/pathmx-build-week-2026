---
status: active
date: 2026-07-13
updated: "2026-07-21T13:56:59-04:00"
related:
  - ../index.path.md
  - ./index.path.md
  - ../tasks/2026-07-21-publish-pathmx-core-progress-log.task.md
---

<!--
type: change
date: "2026-07-21T12:23:30-04:00"
-->

[@change-published]: ./changes.components.md

# PathMX Core Changes During Build Week

PathMX existed before this sprint. This is a curated record of the general
Core work that landed from July 13 through the July 21 submission deadline and
directly strengthened the learning experiences built here. It is not a commit
feed or a claim that the framework itself was created during Build Week.

PathMX Core remains closed-source under the PathMX Private Beta License, so
every entry is written to stand on its own.
This remains a living journal until the 8 PM deadline: new work is prepended,
and a CLI version is called published only after the public package and its
installed commands verify together. At this snapshot the latest verified CLI
is 0.1.25: the public registry, `pathmx self-update`, `pathmx`, and `pmx` agree.

## Play becomes quieter, clearer, and more resilient

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

PathMX 0.1.22 and 0.1.23 made **Start Play** the clear primary action, enlarged
slide prose, aligned in-play controls, tightened the mobile timeline, and gave
grid presentation responsive 3:2 cards. Beat guides now match the real shape
of prose, code, tables, and custom components. External links follow one
Player-owned policy without overriding authored downloads, targets, or
modified clicks, and restored cursors wait for the final snapped viewport
before appearing.

The same release wave repaired two less-visible failures found through the
Build Week Space: packaged Play now completes the whole graph and settles
Actions instead of stopping at its startup frontier, and warm cache adoption
reconstructs Literate Component state rather than restoring lossy output. The
packed release smoke now covers cold Build, a new linked Source, an
Action-driven Source change, warm Play, and a Literate Component. The complete
Build package passed 1,137 tests; an 865-Source Core run built cleanly in 72
seconds, then made the warm Player available in 140 ms and restored the full
Root in 2.17 seconds.

---

<!--
type: change
date: "2026-07-20T22:04:41-04:00"
-->

## Learner input converges on one durable Response model

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Editable values, read-only projections, natural Markdown Questions, and
Literate Components now share one Source-owned Response substrate. The same
normalization, validation, ownership, and formatting-preserving edit path
supports built-in saves and custom Actions. Invalid contextual Actions settle
as durable, non-writing validation outcomes, while the Player releases pending
state from the correlated Action completion rather than watching for an
unrelated DOM mutation.

This became the foundation for the
[personal learning Starter](https://github.com/pathmx/pathmx-learning-starter):
one onboarding Action can persist the learner's answers and generate a linked,
personalized starting Path atomically. Browser review proved live application
and restored values. Twenty warm submissions measured 50.8 ms p95 on a small
Root and 85.0 ms on a generated 1,000-Source Root, and the Host suite settled a
100-Action burst plus same-Source conflicts without partial or lost writes.
PathMX 0.1.20 carried the public Response and Action-form convergence; later
final-day releases strengthened packaged Play around it.

---

<!--
type: change
date: "2026-07-19T23:16:45-04:00"
-->

## Player-native learning Actions become fast and causally complete

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The learning loop moved onto a common Action context with canonical Source and
Block targets, revision-tracked reads, graph queries, bounded planning, atomic
application, and journaling. First-party Question, Response, task, and
annotation Actions use that same path. The Starter proved the seam with an
arbitrary prose learning goal, an onboarding proposal, atomic creation of a
Path and first Lesson, a learner answer, a second teaching turn, and restart.

Player settlement also stopped waiting for visible DOM mutation. The Server
returns a Projection receipt, Runtime remains responsible for applying the
canonical Source update, and the Player can distinguish saved, still
projecting, and rejected outcomes. Real-browser settlement measured 36.6 ms
p95 on the reference case and 55.4 ms on a 1,000-Source Root; all 370 Player
tests and the three Action browser/server scenarios passed. PathMX 0.1.19 then
passed a registry-clean install through init, build, dev, and a finalized
Source-writing Action.

---

<!--
type: change
date: "2026-07-18T22:41:03-04:00"
-->

## Questions complete through one Source-authoritative Player flow

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Single-choice, short-text, long-text, and multi-field Questions now expose one
stable response Beat. Native pointer and keyboard submission reach the same
generated form, focus is preserved, and explicit forward navigation remains
visible. The Player keeps only the essential submitting, awaiting-update, and
rejected states; slow saves graduate from a small delayed indicator to an
accessible retryable notice instead of changing the authored lesson layout.

Live Root updates also began carrying complete keyed document deltas. Runtime
can apply Block additions, removals, reordering, metadata, attributes, and
generated contributions without refetching the current route, while preserving
form values, selection, focus, and scroll position. A packaged gateway restart
proved cursor continuity over the public Space, and full affected suites,
typechecks, repeated watcher-active causal rebuilds, packed-release smoke, and
a real-browser choice/text/field/reload/Next Block journey passed. This work
shipped across PathMX 0.1.15 through 0.1.18.

---

<!--
type: change
date: "2026-07-17T23:45:22-04:00"
-->

## Live Spaces gain explicit Roots, continuity, and safe operations

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The live server evolved from one implicit graph into an explicit multi-Root
Host. Mounted navigation preserves the selected Root through links, graph and
search fetches, Runtime updates, queries, fragments, and Play state. Live
delivery is root-scoped, reconnects prove cursor and revision continuity, and
bounded standing maintenance keeps interactive work ahead of background
drains. Local Root inspection and Git synchronization accept only a clean,
exact fast-forward and reject dirty, conflicted, detached, ahead, diverged, or
oversized states.

The same day added durable Play position in the URL, stale-while-revalidate
search with stable keyboard selection, and the read-only `pathmx route`
command that turns a Source path into its built review route without guessing.
Focused verification included 150 isolated Root subscriptions, generation
replacement and overflow recovery, a live two-Root navigation pass, Host and
Server suites, Player and Runtime suites, package typechecks, and strict
maintainability review. These foundations fed the 0.1.15–0.1.17 release wave
after their final operational checks.

---

<!--
type: change
date: "2026-07-16T15:20:18-04:00"
-->

## Durable responses and focus become normal Markdown behavior

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Markdown-authored short and long Questions gained accessible controls and
durable learner text without moving raw responses into Action journals or
rendered prose. Choice controls became one coherent action, response fields
reused their rendered controls after updates, and Player focus settled after
scroll before presenting the next move. Authored table focus steps also became
real table regions rather than flattened approximations.

Warm build foundations advanced alongside the learner surface. Portable Root
input evidence, cache versioning, and reconciliation made repeated builds more
trustworthy; exact-title search ranking, stable keyboard selection, and async
index hydration made discovery predictable. The portable PathMX authoring
skill also gained one canonical synchronization command so Build Week and
downstream repositories could share the same verified guidance. These changes
shipped through PathMX 0.1.11, 0.1.12, and 0.1.13.

---

<!--
type: change
date: "2026-07-15T18:36:17-04:00"
-->

## Runtime, Player, Actors, and Actions form the first complete learning loop

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Runtime became the owner of the document surface—flow, slides, grid, themes,
and Beat focus—while Player retained navigation, commands, history, and chrome.
The Player gained contextual action islands, included Beats joined their host
routes, and the Beat guide began following the actual shape of prose,
interactive controls, and components. PathMX 0.1.9 and 0.1.10 published these
general presentation and focus contracts.

The first Actor-backed task and Question loop also reached the public packed
CLI gate: an Action traveled from a canonical Source form through Actor Host,
journaling, guarded Source change, rebuild, live paint, and reload. Durable
choice and text responses remained readable Markdown. The same work hardened
Unicode Source-version checks and produced the reviewed Chess, Tufte, Layout,
Bookshelf, Three Globe, Kepler, and simple-quiz references that this Build Week
workspace exercised. A warm task toggle measured 12 ms request time and 36 ms
from submit to canonical paint.

---

<!--
type: change
date: "2026-07-14T16:03:28-04:00"
-->

## The sprint begins from an interactive component and Play baseline

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

The Build Week baseline was PathMX 0.1.8, not a blank framework. At the start
of the sprint PathMX already provided Markdown Sources, Blocks, Beats, linked
Paths, a build system, and a web Player. The opening Core work stabilized
interactive Literate Components: component roots own their Beats, explicit
scalar state can begin unanswered, and continuous work follows shared visible
or presented lifetimes without teaching Player about component internals.

Game of Life and Three Globe moved onto that lifecycle, resource URLs gained
content identity for correct live refresh, and the browser gauntlet covered
animation, resize, pointer isolation, cleanup, dependency failure, and
fallback behavior. Sixty-five focused Build tests, 66 Player tests, both
typechecks, a 3,534-artifact clean build, and all 28 browser checks passed.
The CLI also gained `pathmx play --open`, launching the canonical entry route
directly into Play while preserving ordinary dev, print-URL, and programmatic
behavior.

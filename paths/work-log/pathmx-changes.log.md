---
status: active
date: 2026-07-13
updated: "2026-07-21T17:21:12-04:00"
related:
  - ../index.path.md
  - ./index.path.md
  - ../tasks/2026-07-21-publish-pathmx-core-progress-log.task.md
---

<!--
type: change
date: "2026-07-21T17:21:12-04:00"
-->

[@change-published]: ./changes.components.md

# PathMX Core Changes During Build Week

PathMX existed before this sprint. This is a curated record of the general
Core work that landed from July 13 through the July 21 submission deadline and
directly strengthened the learning experiences built here. It is not a commit
feed or a claim that the framework itself was created during Build Week.

PathMX is currently in Labs, with its Core source kept private while its APIs
and product boundaries stabilize, so every entry is written to stand on its
own.
The final audit compared the Core repository from the July 12 pre-sprint
baseline through the July 21 release cutoff: 135 commits, 18 tagged releases,
and 1,132 changed files across implementation, tests, generated assets,
fixtures, and durable documentation. The public CLI advanced from 0.1.7 to
0.1.26; 0.1.14 was skipped. A version is called published here only after the
public package and installed command verify together. At this snapshot
`pathmx self-update`, `pathmx`, and `pmx` agree on 0.1.26.

## The final release wave closes the largest authoring and recovery gaps

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

PathMX 0.1.24 through 0.1.26 completed the final Core pass. Warm Root adoption
now reconstructs plugin resolution state instead of reusing a lossy projection,
so Literate Components, footnotes, and other dependency-owned output survive a
process restart. Source and Block authors can attach reviewed `styles.classes`
tokens without fighting Runtime specificity, named Literate slots project only
into their named regions, and component-only layout wrappers no longer create
empty Play stops. Play also gained an explicit return to the selected Root
index while preserving unrelated URL state.

The packed release gate now proves cold Build, complete graph convergence, a
new linked Source, a real Source-writing Action, warm Play, and Literate
Component reconstruction. That broader gate matters because 0.1.20 exposed a
packaging regression and 0.1.21 immediately repaired it; 0.1.23 through 0.1.25
then hardened cache retention, plugin restoration, navigation, and live
recovery rather than treating the first green package as sufficient. PathMX
0.1.26 also replaced `UNLICENSED` package metadata with an explicit DUO-owned
proprietary beta license while the Labs-stage API and product boundaries
continue to stabilize.

Two post-0.1.26 Core edits remained local at the cutoff and are not presented
as shipped: relocating the idle light/dark control, and deciding whether the
Player's Play-active Literate Component attribute is a public authoring hook.
The latter is recorded in Core as an open skill/documentation contract issue.

---

<!--
type: change
date: "2026-07-21T13:49:01-04:00"
-->

## Large graphs retain less work and recover much faster

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

Build moved graph-wide state out of long-lived Sessions and into bounded,
durable structures: portable Root input evidence, content-addressed Root state,
compiled-Block records, deferred-result sidecars, byte-bounded recipe and
render working sets, revision-bound artifact readers, and Projection Store
mark-and-sweep collection. Search, Literate rendering, graph payload assembly,
Tailwind projection, Beat placement, and Beat labels also stopped repeating or
retaining graph-sized data when exact local facts were available.

The resulting warm path is materially different from the cold path. One
recorded full build improved from 76.99 seconds to a 2.65-second process-cold
reuse; later 860-plus-Source runs made the Player available in roughly
127–268 ms and restored the complete Root in about 1.4–2.2 seconds. A live
Projection Store that had reached 93.4 GiB gained bounded retention and
successfully restored after collection. Cold convergence still remained the
main performance boundary: the latest direct full-build evidence peaked near
1.84 GiB, above the 1.5 GiB worker target. The log therefore records the large
warm and retained-memory gains without claiming that cold build work is done.

---

<!--
type: change
date: "2026-07-21T12:23:30-04:00"
-->

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
date: "2026-07-18T10:53:51-04:00"
-->

## The CLI can create a safe Starter and manage official skills

<change-published datetime="{{ block.date }}">
  Published {{ block.date }}
</change-published>

`pathmx init <folder> --template <repo>` became a real onboarding boundary
rather than a documented clone command. It resolves an enabled public GitHub
Template in the PathMX organization, pins the exact source commit, validates a
bounded non-executable archive, and writes only into an absent target. Official
skills are installed by default from the canonical skill repository; an
existing Space can refresh them with `pathmx init --skills` using an exact
receipt of commits and file hashes.

The updater preserves unrelated skills, safely adopts byte-identical packages,
detects edited managed files and discovery-link conflicts before writing, and
limits `--force` to complete official package directories. Archive traversal,
collisions, hard links, special entries, oversized downloads, and unexpected
redirects are rejected. Twenty-seven focused parser, archive, Starter, and
updater tests plus the complete 118-test CLI suite and typecheck passed. This
is the Core mechanism behind the one-hosted-instruction learner flow evaluated
and presented in this Build Week repository.

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

The same opening release replaced several competing Markdown scans with one
exact, linear prepared-source foundation. Links, edits, annotations, Blocks,
and agent Markdown now share exact source spans rather than substring guesses;
pathological malformed input no longer becomes quadratic. Table-row
annotations keep rendered links and Beat identity, fenced-code annotations no
longer corrupt closing fences, and Unicode Source versions use the same byte
hash at planning and apply time. The complete Build suite grew through this
work while the controlled hot-path checks stayed within their accepted budget.

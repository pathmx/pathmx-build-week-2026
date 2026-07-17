---
status: active
date: 2026-07-15
related:
  - ../index.path.md
  - ./index.path.md
  - ../tasks/2026-07-15-add-change-log-workflow.task.md
---

# 2026-07-15 — Build Week Changes

## Andrew parks Build Week demo strategy notes off the team hub

Andrew's personal scratchpad now lives under
[`paths/andrew/`](../andrew/index.path.md) with
[wedge, demo, and long-term memory notes](../andrew/2026-07-17-build-week-wedge-demo-memory.notes.md)
covering Build Week judging criteria, the dual-surface local loop, demo
methods, hero learn-topics, and non-course path genres. The folder is
intentionally unlinked from the team hub so it can stay on Andrew's branch
until he promotes selected ideas. Tracked in the
[owning task](../tasks/2026-07-17-andrew-demo-strategy-notes.task.md).
PathMX 0.1.13 scratch build verification is recorded there; Play review was
skipped because these are ordinary notes with no new interaction behavior.

---

## A Dungeons & Dragons campaign workshop joins the lab demos

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

## Practice interview voice-agent spike maps the Realtime path

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

## Task workflow now assigns explicit reviewers

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

## The task dashboard drops a stale demo count

The [task dashboard](../tasks/index.tasks.md) result for narrowing the labs
index no longer hardcodes "six" ready demos. The reviewed 3D globe reference
landed after that task, so the hub now links seven; the row now reads
count-agnostic to match the [labs index](../labs/index.path.md) and stay true
as the demo set changes.

---

## Campus Constellation turns college networking into interactive practice

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

## A reviewed local-resource 3D globe joins the demo set

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

## The public Build Week Space now runs PathMX 0.1.10

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

## The labs hub now lists only ready demos

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

## Agents now update the playable changes log before pushing

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

## Current team handoffs and authoring guidance are focused

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

## The PathMX 0.1.9 reference set graduates with Kepler

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

## The Build Week Space is live on muthurd

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

## Build Week coordination and the Starter MVP test become source-backed

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

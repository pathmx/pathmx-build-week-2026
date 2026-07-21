---
type: task
status: done
owner: Mark
date: 2026-07-16
related:
  - ../research/practice-interview-voice-agent.path.md
  - ../labs/practice-interview/index.demo.md
  - ../labs/practice-interview/practice-interview.components.md
---

# Spike Practice Interview Voice Agent

## Outcome

Research and prototype the smallest practice-interview path where a learner
answers interview questions aloud and an agent evaluates the response with a
clear rubric, while keeping unlanded custom Action endpoint contracts explicit
rather than pretending they already exist in PathMX.

---

## Result

Added an official-docs-backed
[Practice Interview Voice Agent](../research/practice-interview-voice-agent.path.md)
research note and a playable
[Practice Interview Simulator](../labs/practice-interview/index.demo.md) lab.
The lab simulates the setup, answer, score, and route loop locally while the
research note names the proposed Realtime session, scoring, and evidence-save
Host Action shapes as unlanded contracts.

The prototype now presents the loop as an immersive interview simulator with a
room scene, mission-style interview modes, live transcript signals, a debrief
rank, targeted follow-up, and a dossier-style evidence packet.

---

## Done When

- The research note cites current OpenAI Realtime voice guidance and explains
  why the first version should use a browser WebRTC speech-to-speech session.
- The prototype route lets reviewers walk the interview loop without live
  credentials and shows at least one scoring rubric and follow-up decision.
- Proposed custom endpoints are named with request and response shapes, but no
  unimplemented PathMX Action is authored as if it were released.
- The lab and research note are linked from the appropriate indexes.
- A scratch PathMX build passes, or any failure is recorded with the owning
  boundary.

---

## Activity

- **2026-07-16:** Upgraded the local PoC into an immersive simulator. The
  component now has Behavioral, Technical, and Product/System missions, a
  room-style scene with session HUD and waveform, live transcript readiness
  signals, debrief ranking, polish versus practice routing, and a wrapped
  evidence dossier. `pathmx build -o .pathmx-check --clean` passed with 178
  artifacts and only the three known Tufte theme warnings; `git diff --check`
  passed. Headless Chrome verified the strong Technical path routes to
  `polish-correctness`, the rough Behavioral path routes to
  `practice-evidence`, the Host Action boundary copy renders without Markdown
  artifacts, and desktop/mobile runs have no component console errors or
  missing non-favicon responses. Desktop and mobile screenshots were visually
  reviewed for contrast, text fit, stage wrapping, and simulator feel.
- **2026-07-16:** Reopened after the first spike so the local PoC can become a
  stronger prototype with interview modes, richer session simulation, deeper
  scoring feedback, and a more realistic durable evidence preview.
- **2026-07-16:** Claimed for a Realtime voice practice-interview spike.
- **2026-07-16:** Researched current OpenAI Realtime voice guidance and added
  the design note, local rehearsal component, lab index link, and research
  index link. `pathmx self-update` confirmed 0.1.13 is current. `pathmx build
  -o .pathmx-check --clean` passed with 169 artifacts and only the three known
  Tufte theme warnings. The expected lab, component, research, and task Sources
  appeared in `.pathmx-check/index.path/graph-index.json`. `git diff --check`
  passed. A local `pathmx play --port 3104 --print-url -o
  .pathmx-practice-preview` server returned HTTP 200 for
  `/labs/practice-interview`; headless Chrome exercised the sample-answer
  scoring flow and produced an overall score of 4.8, route
  `practice-evidence`, and an evidence preview containing scores. Human review
  by Tram remains the assigned review outcome.

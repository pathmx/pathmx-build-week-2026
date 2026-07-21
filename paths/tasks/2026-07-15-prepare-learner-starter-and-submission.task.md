---
type: task
status: in-progress
owner: Mark
date: 2026-07-15
related:
  - ../work-log/2026-07-14-hackathon-meeting.notes.md
  - ../work-log/2026-07-18-player-native-learning-reshape.brief.md
  - ../work-log/2026-07-20-build-week-checkin.notes.md
  - ../work-log/2026-07-20-devpost-submission-draft.notes.md
  - ../guides/2026-07-20-build-week-submission-readiness.guide.md
  - ../guides/self-learning-manual-test.guide.md
  - ../guides/start-learning-with-codex.guide.md
  - ../presentation/walkthrough.slides.md
  - ./2026-07-20-update-pathmx-skills.task.md
  - ./2026-07-20-produce-submission-video.task.md
---

# Prepare The Learner Starter And Submission

## Outcome

Graduate reusable work into `pathmx-learning-starter` and prepare a public,
repeatable submission without copying private team material into either repo.

---

## Next Move

Share the private primary repository with both required judging accounts,
finish the required Devpost fields including `/feedback`, complete a fresh
README-only test, and freeze the human-reviewed story. In parallel, record and
verify the public video by 7:00 PM EDT; submit by 7:30 PM and confirm the green
**Submitted** state on My projects.

---

## Done When

- Reusable learner-facing content lives in the starter repository.
- The Starter ships the updated `pathmx-skills` package and a fresh scaffold.
- A clean learner can install or update PathMX and launch the experience.
- Judges and learners can start from one agent-reachable hosted bootstrap URL
  without first cloning a repository.
- Andrew reviews only after the rescaffold is in place.
- Submission links contain no private invitations, credentials, learner data,
  raw transcripts, or Codex task identifiers.
- The public path used by the demo is verified before recording.
- The final Devpost story, repository, Starter, examples, video, and private
  form fields agree with the verified submission boundary.

---

## Activity

- **2026-07-18:** Claimed by Mark for the Build Week recalibration. The new
  direction keeps the learner and learning agent inside the Player, narrows the
  learner-facing Starter, and treats proprietary PathMX Core as a packaged
  pre-existing dependency rather than the submitted repository.
- **2026-07-18:** The standalone reshape brief built successfully as one Path
  with PathMX 0.1.17. Its generated route is
  `/work-log/2026-07-18-player-native-learning-reshape.brief`.
- **2026-07-20:** The team accepted **portable, executable curriculum** as the
  central framing and organized the submission around the Build Week lab,
  Learning Starter, and playable examples. Kepler and chess are current
  examples; Andrew owns a third. Mark owns the shared scaffold, persistent
  project-folder step, slide deck, and final video. Tram owns the revised
  `paths` workflow skill and a retest with Mark.
- **2026-07-20:** Next blocker is updating `pathmx-skills` (Tram in progress),
  then rescaffolding the Starter (Mark + Tram). Andrew's review waits until
  that rescaffold is done.
- **2026-07-21:** The real Codex CLI eval loop now covers map-first setup,
  buffered module authoring, return-and-adapt behavior, deterministic checks,
  an independent quality judge, and latency warnings. The findings and release
  limits are summarized in the [team walkthrough](../presentation/walkthrough.slides.md).
- **2026-07-21 4:53 PM EDT:** Published-entry preparation now includes the
  canonical raw bootstrap URL, a one-prompt judge guide, the full
  [learning-agent eval report](../research/learning-agent-evals.brief.md), and
  the revised internal deck. PathMX 0.1.25 passed the 64-test canonical suite,
  Starter candidate and normal checks, and a zero-warning 369-artifact Build
  Week build. Player review found no report overflow or console warnings and
  confirmed the four deck metrics are individual component Beats. A hosted
  release eval and the paired human Codex Desktop test remain.
- **2026-07-21:** Pre-landing verification passed: 55 canonical skill tests,
  byte-identical skill sync in both consumer repositories, the Starter's
  PathMX 0.1.21 compatibility fixture, and a 279-artifact Build Week build on
  PathMX 0.1.22. The build retained only three known Tufte-theme warnings.
- **2026-07-21:** The eval walkthrough is now an internal technical review,
  separate from the submission-video deck. It documents objectives, harness
  phases, scenario coverage, scoring, latency, failure-driven changes, current
  evidence, and limits. Light and dark Player review also confirmed four
  native result Beats and a flatter report-style treatment.
- **2026-07-21:** The Build Week root now supplies a technical lab design
  system inspired by `pathmx.dev`: monospaced hierarchy, compact measure,
  warm neutral text, brick-red interactions, and flat bordered surfaces in
  light and dark modes. The eval deck inherits those graph defaults and keeps
  only layout and result-card flourishes locally. Player review covered the
  root hub, task dashboard, eval report, and a deliberately exempt Kepler lab
  with no browser warnings.
- **2026-07-21:** Refined the in-progress base theme with iOS system-blue tones,
  regular-weight shadowless links, and a reusable `lab-stats` / `lab-stat`
  Literate Component family. The eval deck now authors its four candidate
  metrics through that semantic component contract instead of slide-specific
  list selectors. PathMX 0.1.22 built the root successfully with only the three
  known Tufte-theme warnings. Live Player review confirmed light and dark
  palettes, a two-column desktop grid, a one-column 600px layout without
  horizontal overflow, and no browser warnings. After review, the dark accent
  was lifted from the denser system blue to `#409cff`; the Player resolved the
  revised card values to `rgb(64, 156, 255)` against the dark card surface.
  The light accent was then deepened slightly to `#006ee6` for more definition
  on the grouped light background.
- **2026-07-21:** Board refresh: remaining submission blockers are Tram's
  `paths` skill push, Starter rescaffold + release lanes, Devpost freeze, and
  the video recording. The dedicated submission walkthrough and internal eval
  review decks are already separated; featured hub cards and team bios remain
  open polish on the home page.
- **2026-07-21 3:05 PM EDT:** Audited the organizer's five-hour warning against
  live GitHub and Devpost state. Devpost remained **Draft — 2/5 steps done**.
  The three named teammates appeared as current teammates with no unconfirmed
  status, but the required category, repository URL, `/feedback` session ID,
  project story, and video URL were incomplete. The primary GitHub repository
  was private and showed only the four team collaborators with no pending
  judging-account invitations. Updated the
  [submission-readiness guide](../guides/2026-07-20-build-week-submission-readiness.guide.md)
  with a short stop-check and rewrote the README to document Codex/GPT-5.6,
  provenance, exact local setup, and a no-rebuild public judge path. Private
  form values and account details remain outside the repository.
- **2026-07-21 3:15 PM EDT:** PathMX 0.1.24 built the current root into a
  scratch directory as one Path with 305 artifacts. The first pass exposed two
  broken relative links in the work-log hub; both were corrected, and the
  second build retained only the three known Tufte-theme warnings outside the
  required judge route. `git diff --check` passed, and both the public Learning
  Labs site and public Starter repository returned HTTP 200. This verifies the
  current worktree, not the still-required fresh-clone test of the final pushed
  commit.
- **2026-07-21:** Added the public one-prompt entry using the canonical raw
  GitHub `bootstrap.md`, a short judge/learner walkthrough, and matching home
  and README links. The flow keeps setup instructions in `pathmx-skills`
  rather than duplicating them in the submission repository.

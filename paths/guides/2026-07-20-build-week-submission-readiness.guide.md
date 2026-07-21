---
type: submission-readiness
status: active
date: 2026-07-20
due: 2026-07-21
related:
  - ../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md
  - ../tasks/2026-07-20-produce-submission-video.task.md
  - ../work-log/2026-07-20-build-week-checkin.notes.md
  - ../work-log/2026-07-20-devpost-submission-draft.notes.md
  - ../work-log/2026-07-18-player-native-learning-reshape.brief.md
  - ../labs/index.path.md
  - https://openai.devpost.com/rules
---

# Build Week Submission Readiness Checklist

Use this guide to coordinate the final OpenAI Build Week submission. The
[submission task](../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md)
remains the source of truth for status, ownership, review, and final evidence.
The [Devpost submission
draft](../work-log/2026-07-20-devpost-submission-draft.notes.md) remains the
working copy for form fields and public story.

Check an item only when its result is verified. Record durable evidence in the
owning task or linked artifact. Do not commit credentials, private Devpost
links, countries of residence, raw transcripts, learner data, or Codex session
and task identifiers.

Official deadline: **Tuesday, July 21, 2026 at 5:00 PM PDT / 8:00 PM EDT**.
The meeting set **7:00 PM EDT** as the video-ready target. Proposed final
submission target: **7:30 PM EDT**, leaving a 30-minute recovery buffer.

---

## July 21 Organizer Stop Check — 3:05 PM EDT

This is the short, live stop-check derived from the organizer's five-hour
warning. It supplements the deeper gates below. A checked item has direct
evidence; an unchecked item is still a submission blocker or needs a final
human verification.

- [ ] Run the submitted project from a fresh clone exactly as the README says.
- [ ] Upload the under-three-minute video to YouTube (unlisted is acceptable)
      and verify signed-out playback, clear audio, legibility, and the final
      URL.
- [ ] Confirm the required voiceover explicitly explains both Codex and
      GPT-5.6, not only generic AI use.
- [ ] Enter a `/feedback` session ID from an official Codex interface directly
      in Devpost. Never copy the ID into this repository.
- [ ] Because the primary repository is private, share it with both required
      judging accounts and verify access. At 3:05 PM EDT, GitHub showed only
      the four team collaborators and no pending repository invitations.
- [ ] The README update now explains Codex/GPT-5.6 use, the pre-existing/new
      boundary, exact local setup, and a public test path that needs no rebuild;
      include it in the final reviewed push before checking this item.
- [x] Devpost lists Mark Johnson, Le Tram, and Andrew Miller as current
      teammates with no unconfirmed status shown.
- [ ] Finish the Devpost project story/media and Additional Info. At 3:05 PM
      EDT, the project was **Draft — 2/5 steps done**; category, repository URL,
      `/feedback` session ID, project story, and video URL were not complete.
- [ ] Read the final Devpost description aloud and rewrite any phrasing that
      does not sound like the team before pasting it into the form.
- [ ] Submit by 7:30 PM EDT, then return to **My projects** and confirm the
      project is green and says **Submitted**, not Draft.

**Immediate stop conditions:** do not wait on the video upload, private-repo
sharing, `/feedback`, or final Submit action. These are deadline-critical and
cannot be inferred from local files.

---

## July 20 Check-In — Immediate Handoff

### Accepted working direction:

- [x] Frame the submission as durable learning alongside agents.
- [x] Use **portable, executable curriculum** as the central concept.
- [x] Present a Build Week lab, Learning Starter, and playable examples as one
      coherent submission package.
- [x] Use Kepler and interactive chess as current showcase examples.
- [x] Keep bring-your-own-agent and durable Markdown Source central.
- [x] Demonstrate the current single-player route and leave stateful or
      multi-user behavior as future work.
- [x] Build the video around a playable PathMX slide deck.

### Mark's immediate follow-ups:

- [x] Publish and announce the shared submission scaffold in this repository.
- [ ] Add a persistent project-folder setup step to the learner workflow.
- [ ] Draft the PathMX slide deck; target content-complete on July 20.
- [ ] Retest Tram's revised `paths` skill after it is pushed.
- [ ] Polish, record, upload, and verify the video by 7:00 PM EDT on July 21.

### Inputs Mark is waiting on:

- [ ] Andrew drafts **What it does**.
- [ ] Andrew selects and adds the third high-impact example and judge route.
- [ ] Tram updates and pushes the `paths` workflow skill.
- [ ] Tram and Mark retest the revised skill together.
- [ ] Andrew reviews the slide deck and presentation framing.

---

## Gate 0 — Team Decision And Scope Freeze

- [x] Approve the final thesis: portable, executable curriculum for durable,
      playable learning alongside agents.
- [x] Approve the three-part package: Build Week lab → Learning Starter →
      playable examples.
- [ ] Choose the final project name within Devpost's 60-character limit.
- [ ] Approve an elevator pitch within the 200-character limit.
- [ ] Accept Kepler, chess, and Andrew's third example as the final showcase.
- [ ] Select one backup experiment based on reproducibility, not novelty.
- [ ] Decide whether interactive chess is both a lesson experiment and the
      Starter's finished example.
- [x] Confirm this Build Week repository as the primary submission repository.
- [x] Confirm `pathmx-learning-starter` as a linked experiment or supporting
      repository.
- [ ] Confirm the final public location and repository URL for every selected
      example.
- [ ] Agree on the exact five-minute judge journey.
- [x] Agree on the video shape: a PathMX slide-deck playthrough that is also a
      cloneable artifact.
- [ ] Lock and rehearse the exact under-three-minute script.
- [ ] Approve an internal submission target with enough upload and recovery
      buffer.
- [ ] Freeze labs, components, and product work outside the selected route.
- [ ] Assign a human owner and reviewer to each final lane.

**Gate passes when:** the title, thesis, three examples, backup decision,
repository boundary, journeys, claims, owners, and reviewers are recorded in
the task board.

---

## Gate 1 — Primary Repository Public-Safety Audit

Run this audit read-only before changing history, rotating credentials, or
removing material. Report findings as **must fix**, **disclose clearly**, or
**safe to defer**.

### Scope and reachable history

- [ ] Confirm the exact repository and remote that will be submitted.
- [ ] Inventory tracked files, large files, generated output, submodules, and
      ignored-but-required local files.
- [ ] Inventory every remote branch and tag visible from the submitted remote.
- [ ] Scan the current tree and all reachable Git history, not only `main`.
- [ ] Review open branches or pull requests that may expose additional
      material.
- [ ] Confirm no required submission artifact exists only in an unpushed
      branch or local untracked file.

### Secrets and infrastructure

- [ ] Scan for API keys, bearer tokens, passwords, cookies, private keys,
      tunnel credentials, and accidentally committed `.env` content.
- [ ] Scan configuration, scripts, logs, fixtures, generated bundles, and Git
      history for embedded secrets.
- [ ] Confirm the primary build and judge path do not require team credentials.
- [ ] Confirm optional credential-dependent experiments are clearly labeled
      and outside the required judge journey.
- [ ] Review hostnames, tunnel configuration, IP addresses, and infrastructure
      notes for unnecessary internal disclosure.
- [ ] If a real credential is found, rotate it before considering history
      cleanup; do not assume deletion from the current tree is sufficient.

### Privacy and sensitive content

- [ ] Scan for private Devpost invitations and management URLs.
- [ ] Scan for Codex session IDs, task IDs, thread IDs, or raw session logs.
- [ ] Scan for private email addresses, phone numbers, addresses, countries of
      residence, account identifiers, and unnecessary local absolute paths.
- [ ] Confirm raw meeting transcripts are absent.
- [ ] Confirm private family, news, customer, and team links are absent.
- [ ] Confirm real learner data, personal responses, and sensitive annotations
      are absent.
- [ ] Confirm test submissions contain only fictional or explicitly safe data.
- [ ] Confirm generated media and artifacts contain no unexpected personal or
      proprietary information.

### Public links

- [ ] Inventory important external links from the README, entry Path, selected
      labs, guides, research, and submission draft.
- [ ] Classify each as public, authentication-gated, team-only, stale, or
      broken.
- [ ] Remove or replace team-only and invitation-based links from public
      journeys.
- [ ] Confirm public links resolve without an existing team browser session.
- [ ] Confirm no critical setup or evidence link redirects to a login page.
- [ ] Confirm the Devpost, Build Week Space, Starter, repository, PathMX site,
      paper, and reference links are durable and correctly labeled.

### Intellectual property and licensing

- [ ] Confirm the repository has an intentional license suitable for judging
      and public distribution.
- [ ] Inventory copied, adapted, vendored, or generated code and content.
- [ ] Record provenance and license for images, fonts, textures, datasets,
      audio, video, 3D assets, and external components used by selected labs.
- [ ] Confirm external libraries, CDNs, APIs, and data are used under compatible
      terms.
- [ ] Identify material copied or adapted from PathMX Core.
- [ ] Remove proprietary Core source that is not intentionally distributed.
- [ ] Confirm the packaged PathMX version may be installed and tested by
      judges through the end of judging.
- [ ] Replace or remove any selected asset whose rights remain unclear.

### Pre-existing and new-work boundary

- [ ] Identify PathMX methodology, paper, framework, Player baseline,
      components, and examples that existed before the submission period.
- [ ] Identify every selected skill, Starter artifact, lab, component, and
      evaluation created or meaningfully extended during Build Week.
- [ ] List only PathMX Core improvements exercised by the selected public
      route.
- [ ] Attach dates, versions, commits, tasks, and observable behavior evidence
      to new-work claims.
- [ ] State that Mark Johnson created PathMX before Build Week.
- [ ] Avoid implying that all of PathMX was created during the event.
- [ ] Confirm the inspectable public work can carry the submission without
      relying on closed-source Core changes for its main claim.

### Audit resolution

- [ ] Record every must-fix issue, owner, reviewer, and resolution evidence.
- [ ] Record disclosures that must appear in the README, Devpost story, or
      video.
- [ ] Record safe-to-defer cleanup that does not affect privacy, licensing,
      judge access, or truthfulness.
- [ ] Re-run focused scans after fixes.
- [ ] Obtain human review of the final public boundary.

**Gate passes when:** no unresolved secret, privacy, proprietary-source,
licensing, or judge-access blocker remains; required disclosures are assigned;
and the audit result is linked from the submission task.

---

## Gate 2 — Project Story And Submission Boundary

- [ ] Revise the Devpost story after the team selects the final experiments.
- [ ] Confirm every sentence describes the final submitted artifacts.
- [ ] Keep citations for the teach skill, LLM Wiki, Open Knowledge Format,
      PathMX methodology, and PathMX paper.
- [ ] Explain the distinction between durable knowledge and focused, visual,
      playable learning.
- [ ] Present the working repository as a durable human-agent lab notebook.
- [ ] Disclose Mark Johnson as PathMX's creator.
- [ ] Separate the pre-existing PathMX foundation from new Build Week work.
- [ ] Describe closed-source PathMX work as supporting platform work.
- [ ] Name how Codex and GPT-5.6 contributed without copying private session
      material into the public story.
- [ ] Include honest challenges, findings, limitations, and next steps.
- [ ] Remove bracketed decisions and evidence placeholders from final copy.
- [ ] Obtain team review for accuracy and tone.

**Gate passes when:** the team approves a final public story that is accurate,
specific, and supported by inspectable evidence.

---

## Gate 3 — Selected Experiment Readiness

For each primary experiment and backup:

- [ ] State one research question or hypothesis.
- [ ] Identify what Codex or GPT-5.6 contributed.
- [ ] Identify the durable Source, component, or workspace produced.
- [ ] Provide one exact action a judge can try.
- [ ] Record the expected result.
- [ ] Link dated verification evidence.
- [ ] State the strongest finding.
- [ ] State the known limitation or boundary.
- [ ] Confirm the artifact remains readable without the Player.
- [ ] Confirm the artifact works in its intended Player route.
- [ ] Check forward, backward, and skip-out behavior in Play.
- [ ] Check keyboard interaction and visible focus.
- [ ] Check narrow-width layout and viewport fit.
- [ ] Check reduced-motion behavior when animation is present.
- [ ] Check component cleanup and re-entry when continuous work is present.
- [ ] Confirm external assets and dependencies load from a clean session.
- [ ] Remove or reset test response data before recording and submission.

### Showcase mapping

- [ ] Kepler experiment accepted.
- [ ] Interactive chess lesson accepted.
- [ ] Andrew's third example accepted.
- [ ] Backup experiment accepted or explicitly dropped.
- [ ] The selected examples form one argument rather than an unrelated feature
      gallery.

**Gate passes when:** every primary experiment has a reproducible route,
evidence, finding, boundary, and reviewer outcome.

---

## Gate 4 — Teach Skill And Learning Starter

- [ ] Choose the finished example shipped with the Starter.
- [ ] Define the one bounded adaptation the skill must perform reliably.
- [ ] Verify the `pathmx` authoring skill teaches Source, Beats, and Player
      behavior without inventing contracts.
- [ ] Verify the `paths` workflow skill maintains a coherent learner-owned
      path rather than generating disconnected material.
- [ ] Make the agent ask where the durable project should live and suggest a
      sensible persistent default outside a temporary session folder.
- [ ] Confirm the skill begins from the learner's mission or goal.
- [ ] Confirm the skill reads existing learning records and maintained assets
      before authoring.
- [ ] Confirm generated or adapted material stays readable Source.
- [ ] Confirm the skill does not promise unrestricted “learn anything”
      generation.
- [ ] Confirm learner evidence changes a visible next move.
- [ ] Confirm the original finished example still works without live
      generation.
- [ ] Document supported Codex surface, PathMX version, operating systems, and
      prerequisites.
- [ ] Test installation from a clean Starter clone.
- [ ] Test the finished example before adaptation.
- [ ] Test the bounded adaptation.
- [ ] Reload and confirm the learning workspace remains coherent.
- [ ] Link troubleshooting and known limitations.
- [ ] Push the reviewed Starter and confirm its public README and license.

**Gate passes when:** a clean judge can install the supported skill and
Starter, open the finished example, perform one documented adaptation, and
inspect the durable result.

---

## Gate 5 — Primary Repository And Public Lab Site

- [ ] Rewrite the repository README for judges rather than internal team
      onboarding.
- [ ] Lead with the title, thesis, three-part submission package, and try-it
      path.
- [ ] Link the public Space, primary repository, Starter, methodology, and
      paper.
- [ ] Add a clear “What existed before / What we built during Build Week”
      section.
- [ ] Add a concise Codex/GPT-5.6 collaboration section.
- [ ] Add exact local setup and testing instructions.
- [ ] Add experiment findings, limitations, and verification links.
- [ ] Add license and third-party attribution links.
- [ ] Curate the entry Path so judges encounter the project story before task
      coordination and rough labs.
- [ ] Feature only accepted experiments in the primary route.
- [ ] Keep supporting research discoverable without making it required.
- [ ] Confirm custom Learning Labs styles do not block content or verification.
- [ ] Treat deeper styling as polish after information architecture and
      reproducibility are complete.
- [ ] Publish the final build to `build-week.pathmx.net`.
- [ ] Confirm the public site serves the submitted commit and PathMX version.

**Gate passes when:** the repository and public site tell the same story and a
new judge can find, understand, and try the Starter and selected examples
without team guidance.

---

## Gate 6 — README, Provenance, And Codex Evidence

- [ ] Record the exact submission-period dates.
- [ ] Record the submitted Git commit and PathMX version.
- [ ] Provide a concise Build Week change summary.
- [ ] Distinguish human decisions from agent contributions.
- [ ] Explain where Codex accelerated research, authoring, implementation,
      debugging, testing, and coordination.
- [ ] Explain where humans set direction, reviewed learning quality, and
      accepted or rejected results.
- [ ] Link dated tasks, briefs, evaluation notes, and change entries without
      exposing private session identifiers.
- [ ] Preserve permitted session evidence for the private Devpost field.
- [ ] Confirm public evidence supports every technical claim in the story and
      video.
- [ ] Confirm commit authorship and third-party attribution are accurate.
- [ ] Obtain reviewer sign-off on the pre-existing/new table.

**Gate passes when:** judges can understand what was new, how Codex/GPT-5.6
were used, what remained human judgment, and what PathMX contributed before
and during Build Week.

---

## Gate 7 — Clean-Clone And Judge Testing

- [ ] Test on a temporary clean clone of the submitted repository.
- [ ] Follow only the README; do not rely on local shell history or unstated
      environment configuration.
- [ ] Install the exact documented PathMX version.
- [ ] Build the default Path successfully.
- [ ] Confirm the build reports at least one Path and the expected Sources.
- [ ] Launch the Player through the documented command.
- [ ] Complete the exact five-minute judge journey.
- [ ] Confirm all required links and assets resolve.
- [ ] Confirm the primary journey requires no private credentials.
- [ ] Confirm optional credential-dependent features fail honestly.
- [ ] Confirm known limitations match observed behavior.
- [ ] Capture environment, versions, steps, expected result, actual result, and
      evidence.
- [ ] Re-run the public route from a signed-out browser session.
- [ ] Keep the project available free of charge through the judging period.

**Gate passes when:** an independent reviewer completes the documented local
and public journeys without undocumented help.

---

## Gate 8 — Devpost Project Overview And Details

- [ ] Enter the approved project name.
- [ ] Enter the approved elevator pitch.
- [ ] Upload the approved 3:2 thumbnail under 5 MB.
- [ ] Paste the human-reviewed Markdown project story.
- [ ] Add no more than 25 verified Built With tags.
- [ ] Add the public Build Week Space try-it link.
- [ ] Add the Starter try-it link after its final push.
- [ ] Add the primary repository link where appropriate.
- [ ] Add only durable, public, judge-safe links.
- [ ] Upload selected gallery images under 5 MB each.
- [ ] Confirm gallery images have a coherent order and useful captions.
- [ ] Enter the public video URL after playback verification.
- [ ] Preview the public project page and correct formatting or broken links.

**Gate passes when:** the Devpost public preview matches the approved story,
media, links, and final project identity.

---

## Gate 9 — Devpost Additional Information

- [ ] Choose the correct submitter type with the team.
- [ ] Each team member confirms their country of residence directly in
      Devpost.
- [ ] Select **Education** or record the team's final category decision.
- [ ] Enter the required primary code repository URL.
- [ ] If the repository is private, share it with the required judging
      accounts and verify access.
- [ ] Enter the verified public test link and concise judge instructions.
- [ ] Enter the required `/feedback` session ID privately in Devpost.
- [ ] Add installation, supported-platform, and testing instructions for the
      Agent Skill, Starter, and PathMX dependency.
- [ ] Keep Devpost instructions synchronized with the submitted README.
- [ ] Decide whether an optional upload adds value; omit it if links and the
      repository are sufficient.
- [ ] Confirm no credentials or unnecessary personal information were entered.

**Gate passes when:** every required field is complete, private information is
handled only in Devpost, and judge instructions match the tested repository.

---

## Gate 10 — Three-Minute Video And Media

- [ ] Author the presentation as a PathMX slide deck that judges can clone and
      play after watching.
- [ ] Approve a script under three minutes.
- [ ] Show the problem and thesis in the first 25 seconds.
- [ ] Show the Build Week lab, Learning Starter, and selected examples without
      repeating the same demonstration.
- [ ] Show readable Source and the Player relationship.
- [ ] Start from a fresh Codex session and show one real path-creation move or
      bounded skill adaptation.
- [ ] Explain what Codex and GPT-5.6 contributed.
- [ ] Disclose that Mark Johnson created PathMX before Build Week.
- [ ] State what was new during the submission period.
- [ ] Name at least one finding and one honest limitation.
- [ ] Record from the exact verified environment.
- [ ] Cut loading screens, typing delays, silence, and repeated navigation.
- [ ] Confirm narration is audible and on-screen text is legible.
- [ ] Confirm no credentials, private notifications, personal tabs, or learner
      data appear.
- [ ] Upload publicly to YouTube.
- [ ] Confirm public playback, audio, duration, resolution, and URL from a
      signed-out session.
- [ ] Capture the final thumbnail and gallery media from the submitted build.

**Gate passes when:** the public video is under three minutes, accurately
represents the submitted artifacts, and works from a signed-out session.

---

## Gate 11 — Final Technical And Editorial Review

- [ ] Fetch the final remote state and confirm the submitted branch is current.
- [ ] Confirm the working tree contains no accidental uncommitted submission
      changes.
- [ ] Run the full PathMX build in a fresh scratch output.
- [ ] Review warnings and resolve or document every warning affecting the
      judge journey.
- [ ] Run `git diff --check` on final changes.
- [ ] Run the repository's change-log check before the final push.
- [ ] Confirm the final change-log entry describes the coherent outgoing work.
- [ ] Push the final branch and confirm the remote commit.
- [ ] Confirm the public Space serves the final commit.
- [ ] Recheck README, story, video, links, licenses, attribution, and known
      limitations for contradictions.
- [ ] Obtain final reviewer outcomes for the submission task and selected
      experiments.
- [ ] Record checks run, skipped verification, and durable result links.

**Gate passes when:** repository, site, README, Devpost draft, video, and
evidence all describe the same verified submission.

---

## Gate 12 — Manual Submission And Post-Submission Availability

- [ ] Confirm all team members have accepted their Devpost invitations.
- [ ] Confirm the project is not still saved as a draft.
- [ ] Confirm the authorized team representative and team members have read the
      Official Rules and Devpost Terms of Service.
- [ ] Have the authorized team representative manually accept the terms.
- [ ] Submit before the proposed 7:30 PM EDT target.
- [ ] Confirm Devpost reports a successful submission.
- [ ] Capture the public project URL and final submission status.
- [ ] Record the submitted commit, site route, video URL, repository URL, and
      time in the owning task without private identifiers.
- [ ] Keep the repository, public site, packaged runtime, video, and testing
      path available through the judging period.
- [ ] Avoid post-deadline changes to submitted materials except where the
      official rules explicitly permit them.
- [ ] Move the owning task to review or done only after evidence and reviewer
      outcome are recorded.

**Gate passes when:** Devpost confirms submission, the public artifacts remain
available, and the owning task contains the final evidence and review outcome.

---

## Final Stop Conditions

Do not submit until every stop-condition check is complete:

- [ ] Confirm no credential, private link, learner record, or prohibited
      identifier is publicly reachable.
- [ ] Confirm every selected asset and dependency has clear distribution
      rights.
- [ ] Confirm the pre-existing/new-work boundary is complete and accurate.
- [ ] Confirm the required repository, video, category, and `/feedback` field
      are present.
- [ ] Confirm the required judge journey needs no private credentials or team
      help.
- [ ] Confirm the public site and submitted repository point to the same final
      material.
- [ ] Confirm the video is under three minutes and public on YouTube.
- [ ] Confirm the final README explains setup, testing, and Codex/GPT-5.6 use.
- [ ] Confirm the team reviewed the final story and public claims.
- [ ] Confirm the authorized representative reviewed the submission and terms.

When a stop condition is found, record the owner, reviewer, resolution, and
recheck evidence in the submission task.

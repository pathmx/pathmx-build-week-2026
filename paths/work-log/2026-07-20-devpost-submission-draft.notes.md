---
type: submission-draft
status: draft
date: 2026-07-20
title: OpenAI Build Week Devpost Submission Draft
related:
  - ../tasks/2026-07-15-prepare-learner-starter-and-submission.task.md
  - ../tasks/2026-07-20-produce-submission-video.task.md
  - ../guides/2026-07-20-build-week-submission-readiness.guide.md
  - ./2026-07-20-build-week-checkin.notes.md
  - ./2026-07-18-player-native-learning-reshape.brief.md
  - ../labs/index.path.md
  - ../research/index.path.md
  - https://devpost.com/software/learn-anything-dt3ewx
  - https://openai.devpost.com/rules
---

# OpenAI Build Week Devpost Submission Draft

This is the working copy for the Devpost project overview, public project
details, additional information, and final submission checklist. It reflects
the signed-in form inspected on July 20, 2026, but nothing in this Source has
been entered into or submitted through Devpost.

Do not paste the draft blindly. Replace every bracketed decision or evidence
marker, review claims against the final artifacts, and keep private Devpost
links, credentials, country information, and `/feedback` session IDs out of
the repository.

Use the [Build Week Submission Readiness
Checklist](../guides/2026-07-20-build-week-submission-readiness.guide.md) to
assign, verify, review, and close the remaining work.

---

## Decisions The Team Must Make

The July 20 check-in accepted these working decisions:

- Frame the project as a practical contribution to durable knowledge and
  learning alongside agents.
- Use **portable, executable curriculum** as the central concept.
- Present one submission package with a Build Week lab, a Learning Starter,
  and playable examples.
- Feature Kepler and interactive chess, with Andrew selecting a third example.
- Keep bring-your-own-agent and durable, remixable Source central to the
  workflow.
- Demonstrate the current single-player experience; stateful and multi-user
  behavior is future work.
- Record the video as a playthrough of a PathMX slide deck that is also a
  cloneable project artifact.
- Treat the repository's research, tasks, decisions, and change history as
  evidence that the project was built with its own durable-source method.

The team must still decide or verify:

1. Final project name and elevator pitch.
2. Andrew's third example and whether a backup remains necessary.
3. Exact public repository placement and URLs for the lab, Starter, and
   examples.
4. The exact five-minute judge journey and final under-three-minute script.
5. Which PathMX changes are new, reproducible, and safe to describe publicly.
6. Which claims, accomplishments, links, images, and Built With tags survive
   final verification.

---

## Project Overview

### Project name

Devpost limit: 60 characters. Current value: **Learn Anything**.

Working options:

- **Learning Labs**
- **Learning Alongside Agents**
- **Learning Labs: Playable Learning With Agents**

Recommended working title: **Learning Labs: Portable Curriculum**. It names
the lab framing and central concept while leaving room to explain that PathMX
is the methodology and framework underneath it.

### Elevator pitch

Devpost limit: 200 characters. Current value still describes the earlier
generalized Learn Anything product.

Recommended working draft:

> Portable, executable curriculum: durable Markdown and playable learning
> experiences that people evolve with the agents they already use.

Alternative with PathMX named:

> A PathMX-powered research lab for creating durable, visual, interactive
> learning artifacts and evolving learning workspaces alongside agents.

### Thumbnail

- Required for a strong gallery presence.
- JPG, PNG, or GIF; maximum 5 MB.
- Devpost recommends a 3:2 ratio.
- Final art direction should follow the public lab identity after the title and
  selected experiments are locked.

---

## Public Project Story — Working Draft

The entire story is entered in one Markdown field. The headings below match
the suggested Devpost structure.

### Inspiration

AI agents can generate remarkable explanations, but most of that work
disappears into chat history. We wanted to build on durable knowledge and
learning goals over time, so that a person could learn alongside an agent
rather than restart from ground zero in every conversation. Learning needs
more than an answer: it needs a durable goal, an intentional sequence,
opportunities to practice, interactive representations, evidence of progress,
and a useful next step.

We were inspired by [Matt Pocock's stateful teach
skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md),
[Karpathy's proposal for compounding LLM-maintained
wikis](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f),
and Google's [Open Knowledge
Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).
Each treats durable, linked, human-and-agent-readable files as a stronger
foundation than transient conversations.

Our question was: **what happens when that durable knowledge is designed not
only to be stored and browsed, but to be focused, practiced, manipulated, and
played?**

We used the [PathMX methodology](https://pathmx.dev/) — Markdown-first
documents, explicit file roles, and hyperlinked paths — as the foundation for
exploring that question. The methodology is described more fully in the
[PathMX paper](https://pathmx.dev/files/pathmx-paper.pdf).

### What it does

**Learning Labs** explores a **portable, executable curriculum**: durable,
remixable, agent-readable Source that can also be run as a focused learning
experience.

The submission has three connected parts:

1. **A Build Week lab** that presents the research questions, experiments,
   decisions, findings, limitations, and reproducible judge route.
2. **A Learning Starter** that gives an everyday learner a durable project
   structure and two complementary Agent Skills: a `pathmx` authoring skill
   and a `paths` learning-workflow skill.
3. **Playable examples** that show the range of the method: a Kepler orbit
   instrument, an interactive chess lesson, and a third example selected by
   the team.

The learner brings the agent they already use — such as Codex, Cursor, or
Claude — instead of being locked into a hosted tutor. The agent can read and
remix ordinary Markdown, build on prior goals and artifacts, and help create a
coherent path without starting from zero. The PathMX Player then turns that
durable material into a focused, visual, interactive experience.

The current demo is intentionally single-player. Stateful collaboration and
multi-user learning are promising next steps, not capabilities we need to
pretend are finished for this submission.

### How we built it

PathMX was created by team member **Mark Johnson** before Build Week. It
includes a published Markdown-first methodology and a proprietary development
framework and Player. During Build Week, our team used Codex and GPT-5.6 to
meaningfully extend that foundation while creating the new Learning Labs work:
teaching skills, starter materials, interactive labs, reusable components,
evaluation evidence, and a durable human-agent research workflow.

We built the project alongside Codex using the same durable-source methodology
we were investigating. We did not need a separate project manager to preserve
the core context: this repository became a shared human-agent workbench
containing:

- research briefs and reference material;
- typed tasks with human owners and reviewers;
- experimental learning Sources and reusable components;
- evaluation notes and reproducible findings;
- a chronological change record; and
- the public PathMX site generated from those Sources.

Codex and GPT-5.6 helped us research learning patterns, author and revise
experiments, implement interactive components, diagnose Player behavior, run
verification, maintain the task graph, and synthesize findings. Humans selected
the questions, reviewed the experiences, tested them as learners, and decided
which results were worth preserving.

#### Pre-existing foundation

- The PathMX methodology, paper, framework, and Player baseline.
- **[Inventory any pre-existing components or examples used in the final
  demonstration.]**

#### New or meaningfully extended during Build Week

- The Learning Labs research framing and experiment methodology.
- The PathMX authoring skill, `paths` workflow skill, and finished Starter
  example.
- The selected interactive learning experiments and their evaluation evidence.
- New or substantially revised learning components and authoring patterns.
- The durable Codex project workflow, task graph, and change evidence.
- **[List verified PathMX runtime capabilities added during the submission
  period, with versions and public behavior evidence.]**

The public submission should stand on its inspectable skills, starter, labs,
components, research, and evidence. Private Labs-stage PathMX improvements may
be described as supporting platform work but should not carry the main
technical claim.

### Challenges we ran into

Our biggest challenge was having too many promising ideas for the time
available. Our first direction attempted to generate a complete “learn
anything” product. Testing exposed several problems:

- Whole-course generation was slow and structurally uneven.
- The agent conversation and learning experience became disconnected.
- Interactive components needed careful lifecycle, focus, and navigation
  behavior.
- A correct visual artifact was not automatically a good lesson.
- Learner answers needed to become durable evidence, not browser-only state.
- We had to distinguish new public Build Week work from the pre-existing
  private runtime.
- The deadline forced us to choose precise, reproducible experiments over a
  broad product promise.

These challenges led us toward bounded agent roles, maintained learning
patterns, focused playable sequences, and one excellent finished example that
the workflow skills can meaningfully adapt.

### Accomplishments that we're proud of

Candidate accomplishments — keep only claims supported by final verification:

- A public, playable laboratory of visual and interactive learning
  experiments.
- Experiments at the artifact, lesson, and learning-workspace scales.
- Complementary PathMX authoring and `paths` workflow skills with an example
  Starter repository.
- Reusable patterns for focus, interactive representations, practice, and
  durable learner evidence.
- A human-and-agent project workflow whose tasks, decisions, evaluations, and
  changes remain inspectable as ordinary Markdown.
- A submission deck that is itself a playable, cloneable demonstration of the
  method rather than a separate presentation artifact.
- A published Build Week Space generated from the same research Sources.
- **[Verified count of new or substantially revised labs and components.]**
- **[Verified PathMX capabilities developed and exercised through the labs.]**

### What we learned

- **Durability changes the agent relationship.** A shared file-based workspace
  lets learning and project decisions compound across sessions.
- **Knowledge organization is necessary but not sufficient.** Learning also
  requires pacing, focus, practice, feedback, and meaningful interaction.
- **Agents work better with bounded roles.** Selecting and adapting maintained
  patterns is more reliable than generating an entire learning system from
  scratch.
- **Interactive states need pedagogical meaning.** Movement and visual novelty
  only help when they express the concept or support a learner decision.
- **Learner actions should become evidence.** Durable responses give both the
  learner and agent a basis for deciding what comes next.
- **The development process can embody the product thesis.** Our work with
  Codex became more coherent when research, tasks, experiments, decisions, and
  reviews lived in the same durable graph.

### What's next for Learning Labs

- Finish and publish the PathMX authoring skill and one polished Starter
  example.
- Finish and verify the complementary `paths` workflow skill, including a
  persistent project-folder setup that survives beyond one agent session.
- Consolidate each selected experiment around a consistent hypothesis →
  artifact → evidence → finding → limitation structure.
- Improve the public lab notebook and make its judge-facing route clearer.
- Continue developing the Player-native agent feedback loop.
- Graduate reusable learning patterns into the Starter repository.
- Publish the methodology and open-source the pieces that can be separated
  from PathMX Core.
- Explore stateful and multi-user learning only after the single-player path is
  reliable and well documented.

---

## Immediate Follow-Up Before Pasting To Devpost

### Mark

- [ ] Publish and announce the shared submission scaffold.
- [ ] Add the persistent project-folder setup step to the learner workflow.
- [ ] Draft the PathMX submission deck and make its content complete.
- [ ] Retest Tram's revised `paths` skill after it is pushed.
- [ ] Record, upload, and verify the public video by 7:00 PM EDT on July 21.

### Inputs Mark Needs From The Team

- [ ] Andrew's **What it does** draft.
- [ ] Andrew's third example and judge route.
- [ ] Tram's pushed `paths` skill update and joint retest.
- [ ] Team approval of the project name, elevator pitch, public claims,
      repository URLs, and final script.

---

## Built With Tags

Devpost permits up to 25 tags. Verify actual use and final naming before entry.

Working candidates:

- Codex
- GPT-5.6
- OpenAI
- PathMX
- Agent Skills
- Markdown
- JavaScript
- TypeScript
- HTML
- CSS
- Bun
- Cloudflare
- GitHub

Do not add OpenAI API, Realtime API, image generation, or other technology
solely because one non-selected lab explored it.

---

## Try-It Links

Public field. Add only durable, reviewer-safe destinations.

1. [Build Week Space](https://build-week.pathmx.net/) — update the landing
   route before submission.
2. [Learner starter repository](https://github.com/pathmx/pathmx-learning-starter)
   — include only after the final Starter and README are pushed.
3. **[Primary submitted code repository URL — team decision.]**
4. [PathMX methodology](https://pathmx.dev/) — supporting context, not the
   primary project demo.

If the Build Week repository becomes public submission evidence, link its
public GitHub URL only after the private-material and clarity audit passes.

---

## Project Media

### Image gallery

Devpost accepts up to 15 JPG, PNG, or GIF files, maximum 5 MB each, and
recommends a 3:2 ratio.

Candidate gallery sequence:

1. Learning Labs public landing page.
2. Interactive-artifact experiment in Play.
3. Playable-lesson experiment in Play.
4. Teach skill and finished Starter experience.
5. Readable Source beside the corresponding Player experience.
6. Durable human-agent lab notebook: task, evidence, or change view.
7. Three-scale project diagram: artifact → lesson → learning relationship.

### Video demo link

Required. Must be a public YouTube link and under three minutes.

Working video arc:

- **0:00–0:25:** transient chat versus portable, executable curriculum.
- **0:25–0:45:** the Build Week lab, Learning Starter, and playable examples.
- **0:45–1:30:** a fresh Codex session creates a small path and durable Source.
- **1:30–2:35:** Kepler, interactive chess, and the third example.
- **2:35–2:50:** the durable Codex lab notebook, finding, and limitation.
- **2:50–3:00:** what was new during Build Week and what comes next.

Final URL: **[required — add after upload and public playback check]**

---

## Additional Information For Judges And Organizers

These fields are not public unless Devpost explicitly says otherwise.

### Optional uploaded file

One file, maximum 35 MB. Multiple artifacts must be zipped. Prefer linked,
versioned documentation unless an offline testing bundle is genuinely useful.

Decision: **[none / testing bundle / PDF appendix]**

### Submitter type

Working choice: **Team of Individuals**. Confirm with the team.

### Countries of residence

Required and multi-select. Each team member must confirm the applicable
country. Enter this directly in Devpost; do not record it here.

### Category

Options: Apps for Your Life, Work & Productivity, Developer Tools, or
Education.

Recommended choice: **Education**.

### Code repository

Required. The README must highlight how Codex and GPT-5.6 were used.

Final URL: **[team decision after public/private and repository-boundary
review]**

If private, share access with the judging accounts named in the Devpost form.
Do not copy those access details into this repository.

### Judge test link and instructions

Working draft:

> Start with the public Learning Labs route at
> https://build-week.pathmx.net/. Follow the featured artifact → lesson →
> learning-workspace sequence. For local testing, clone the submitted
> repository, install the exact PathMX version named in its README, and follow
> the documented five-minute test journey. No private learner data or team
> credentials are required. Known limitations are listed beside each
> experiment.

Replace this text after the primary repository, exact version, route, and test
journey are verified.

### `/feedback` session ID

Required. Retrieve the session ID where the majority of the project was
developed and enter it directly in Devpost.

**Never commit a Codex session or task identifier here.**

### Plugin or developer-tool installation and testing

This field may apply because the submission includes an Agent Skill, Starter,
and PathMX runtime dependency.

Working outline:

1. Supported platforms and prerequisites.
2. Install the exact packaged PathMX version.
3. Clone the submitted repository.
4. Install or enable the PathMX authoring and `paths` workflow skills.
5. Launch the Player.
6. Open the finished example and perform one bounded skill-driven adaptation.
7. Follow the three selected experiments and compare expected results.
8. Consult known limitations and troubleshooting.

Final instructions: **[copy from the verified submitted README; do not maintain
two divergent procedures]**

---

## Final Devpost Checklist

- [ ] Public YouTube demo is under three minutes and the link is correct.
- [ ] Voiceover explains what we built and how Codex and GPT-5.6 were used.
- [ ] Required `/feedback` session ID is entered privately in Devpost.
- [ ] Private repository, if used, is shared with the required judging
      accounts.
- [ ] Submitted README includes setup, testing, and Codex/GPT-5.6
      collaboration evidence.
- [ ] Agent Skill or developer-tool installation and testing path is included.
- [ ] All team members have accepted their Devpost invitations.
- [ ] Education or another final category is selected.
- [ ] Thumbnail, gallery, try-it links, repository, test link, and video all
      resolve from a clean session.
- [ ] Submission is no longer saved as a draft before the deadline.
- [ ] The authorized team representative manually accepts the Official Rules
      and Devpost Terms of Service and submits the project.

---

## Reverse-Engineered Remaining Work

| Story claim | Evidence required | Remaining work |
| --- | --- | --- |
| Coherent showcase | Verified Kepler and chess routes plus Andrew's third example | Team accepts the third example and backup decision |
| A repeatable research method | Hypothesis, artifact, evidence, finding, and limitation for each selection | Add concise research framing to the selected labs |
| The Starter supports an ongoing relationship | One reliable skill-driven adaptation of a finished example | Finish the skill, sample workspace, and exact test journey |
| The work is playable | Clean local and public routes | Verify selected labs locally and on the Build Week Space |
| The repo demonstrates durable Codex collaboration | A concise, safe tour of tasks, decisions, evidence, and changes | Curate representative evidence and audit private material |
| Build Week work is inspectable | A clear pre-existing/new boundary | Write the README provenance and dated Build Week change summary |
| PathMX Core changes are credible supporting work | Versions plus reproducible public behavior | Inventory only the Core upgrades exercised by selected labs |
| The project has a lab identity | A curated landing page and coherent visual system | Lock information architecture first; style only after content |
| Judges can reproduce the experience | Setup instructions and expected results | Run a clean-clone test and document limitations |
| The story fits in three minutes | One verified narrative route | Script, rehearse, record, upload, and check public playback |

### Priority order

1. **Decide:** title, thesis, third example, backup, repository URLs, claims,
   and owner/reviewer lanes.
2. **Finish the anchor:** teach skill, Starter example, and one bounded
   adaptation.
3. **Curate:** frame and verify Kepler, chess, and the third example.
4. **Prove:** README, provenance, Codex evidence, clean-clone test, and public
   routes.
5. **Submit:** final story, media, video, private form fields, and manual
   finalization.
6. **Polish if time remains:** custom Learning Labs styles and richer gallery
   presentation.

---

## Official Submission Constraints

- Deadline: Tuesday, July 21, 2026 at 5:00 PM PDT / 8:00 PM EDT.
- Existing projects are evaluated only on work added during the submission
  period and require clear prior/new documentation.
- A code repository is required and must be public with relevant licensing or
  privately shared with the named judging accounts.
- The README must explain Codex and GPT-5.6 collaboration.
- The demo video must be public on YouTube, include audio, and remain under
  three minutes.
- The project must remain available for judging and testing through the judging
  period.
- Final terms acceptance and submission remain a manual action by the
  authorized team representative.

References:

- [OpenAI Build Week](https://openai.devpost.com/)
- [Official rules](https://openai.devpost.com/rules)
- [Challenge FAQ](https://openai.devpost.com/details/faqs)
- [Public Devpost project](https://devpost.com/software/learn-anything-dt3ewx)

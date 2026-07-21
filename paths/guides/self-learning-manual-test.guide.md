---
type: guide
status: active
date: 2026-07-20
related:
  - https://github.com/pathmx/pathmx-skills/blob/main/bootstrap.md
  - https://github.com/pathmx/pathmx-learning-starter
  - ../tasks/2026-07-20-update-pathmx-skills.task.md
---

# Test the PathMX Learning Starter in Codex Desktop

Use this guide to test the real learner journey from one bootstrap instruction.
Do not give Codex private Build Week context, explain the repository layout, or
name the `/learn` and `/pathmx` skills. The instructions should carry that load.

The expected loop is deliberately buffered:

```text
bootstrap → brief onboarding → confirm a milestone map
          → agent prepares one complete module
          → learner can continue without waiting between sessions
          → agent adapts at the checkpoint
```

One run normally takes 30–60 minutes, including agent wait time and a visual
Player review. Use fictional or non-sensitive learner information.

---

## 1. Choose the test lane

Use the **release lane** for the real product check. It starts from the hosted
bootstrap and lets PathMX fetch the published Starter and skills.

Use a **candidate lane** only when the release has not been published yet.
Record the exact local Starter and skills commits and clearly label the result
`candidate`; it is not a release pass.

Before either lane, update the native command and record the exact version:

```sh
pathmx self-update
pathmx --version
```

Do not pin this guide to a PathMX version. The bootstrap asks the agent to try
latest and retain the Starter's exact verified baseline if migration fails.

---

## 2. Start with an empty Codex project

Create an empty test directory outside any PathMX checkout and open that folder
in Codex Desktop. Start a fresh local task using the normal **Power** setting.
Keep the task on the default model unless the test coordinator assigned a
different profile.

For the release lane, send only this prompt, replacing the destination when
needed:

> Follow the bootstrap instructions at
> https://raw.githubusercontent.com/pathmx/pathmx-skills/main/bootstrap.md and
> carry them out. Create `./learning-space`. [Add the first learner message from
> one scenario below.]

For a local candidate, place only the candidate `bootstrap.md` in the empty
project. Send the same prompt with `./bootstrap.md`. The Starter substitution
requires a coordinator-provided candidate procedure; do not quietly clone a
local checkout and call it a release run.

Allow ordinary filesystem and local-server permissions when Codex explains why
they are needed. Do not approve a remote, push, destructive overwrite, or
access to unrelated personal files.

Start a timer when you send the prompt. For each turn, record its total
duration, time to the first useful visible update, and longest silent gap. A
turn over five minutes or a silent gap over one minute is a learner-experience
warning even when its result is good. Do not prompt Codex to hurry during a
measured run.

During a module build, look for staged updates such as “the skeleton is ready”
and “verification is starting.” These should describe real repository progress,
not generic reassurance.

---

## 3. Run one scripted learner scenario

Choose one scenario. Send each quoted reply only after Codex asks for the
corresponding information. Small wording changes are fine; do not add repository
or PathMX hints.

### A. Concrete beginner: SQL

Initial message:

> I want to learn enough SQL to answer useful questions from customer data at
> work. I am not very technical.

Replies:

1. “I can usually do 25 minutes three evenings a week. I learn best from one
   worked example and then trying something similar. Keep it calm, practical,
   light, and blue-green. Larger text is helpful and I dislike motion.”
2. “For current evidence: I understand that a customer table has one row per
   customer and columns like name or signup date, but I do not know how to ask
   the database a question. Please show me the proposed map before teaching.”
3. “The map makes sense. Confirm it and fully prepare the first module so I can
   work through all of its sessions without waiting for another agent turn.”

### B. Ambiguous goal: practical AI

Initial message:

> I keep hearing about AI and feel behind. I want to learn AI, but I do not know
> what that should mean for me.

Replies:

1. “I write a weekly community newsletter. I would like to use AI to brainstorm
   and revise without losing my voice, and to recognize when an answer is
   unreliable. I do not want to learn programming right now.”
2. “I have two 20-minute sessions a week. I prefer conversational examples and
   side-by-side comparisons. Use a warm paper-like light theme with high
   contrast and no animation. Show me a small milestone map first.”
3. “Yes, that outcome and map fit. Prepare the complete first module and point
   me to the exact place to start.”

### C. Off-screen practice: guitar

Initial message:

> I want to play a simple song smoothly on acoustic guitar instead of only
> knowing disconnected chord shapes.

Replies:

1. “I can form G, C, D, and Em slowly, but I pause for several seconds between
   changes and lose the beat. I can practice for 20 minutes most days. I want
   direct instructions, diagrams when useful, and no autoplaying media.”
2. “A dark charcoal and amber style would feel good, but keep text large and
   contrast strong. My goal song uses G, C, D, and Em. Show me achievable
   milestones and how I will know each one is working.”
3. “I confirm the map. Prepare the first full practice module with immediate
   help for when a chord change breaks down, then give me the exact starting
   link.”

### D. Return and adapt: SQL confusion

Initial message:

> I want a beginner SQL path for exploring customer data. I can study for 25
> minutes twice a week. Use a quiet light theme and prepare the first module.

Replies:

1. “I understand rows and columns but have never written SQL. I like worked
   examples followed by a similar attempt. Please show me the milestone map
   before teaching.”
2. “I confirm the map. Prepare the first complete module with worked examples,
   similar attempts, and immediate help, then give me the exact starting link.”
3. After the first module exists: “Assume I completed the first module. My
   exercises show I can select columns and filter simple values, but I keep
   putting aggregate conditions in WHERE and cannot explain when HAVING is
   needed. Record this as checkpoint evidence. I also left an annotation saying
   the first explanation was too abstract.”
4. “Update my current position and prepare the next useful module. Preserve the
   completed module and annotation. Do not make me repeat work I demonstrated.
   Give me the exact next Player location when it is ready.”

---

## 4. Check setup and safety

The agent should create `learning-space` and leave its parent test folder alone.
From the created repository, verify:

```sh
test -d .git
test -z "$(git remote)"
test -f AGENTS.md
test -f .agents/skills/learn/SKILL.md
test -f .agents/skills/pathmx/SKILL.md
test -f paths/index.path.md
test -f paths/learner.profile.md
test -f paths/learning.activity.md
test "$(rg -o '\./paths/[^)]*\.md' pathmx.config.md | wc -l | tr -d ' ')" = "1"
bun run check
```

Record the exact PathMX dependency and verified baseline:

```sh
bun -e 'const p=require("./package.json"); console.log({dependency:p.dependencies["@fellowhumans/pathmx"], baseline:p.pathmxCompatibility.baseline})'
```

Pass when the versions are exact and equal, the check succeeds, Git is local,
no remote exists, and `paths/index.path.md` remains the single configured
Player root. Learner Path Sources should be linked from home rather than added
as extra config roots. A failed attempt to update latest is acceptable only
when the agent restores and verifies the Starter baseline and explains the
fallback.

---

## 5. Review the learning design

The generated repository should make the following facts obvious without the
chat transcript:

- confirmed Point A evidence and Point B;
- one foreground path;
- 3–7 capability milestones with visible status and evidence targets;
- one current module containing 2–4 complete sessions;
- separate review or retrieval help and a milestone checkpoint;
- later modules represented only as provisional outcomes;
- learner rhythm, presentation, readability, and motion preferences;
- an append-only learning activity record.

In a map-first scenario, inspect the repository before sending confirmation:
the proposed Path and statuses should already exist, while session, review, and
checkpoint Sources should not. After confirmation, `bun run check` should reject
any module that lacks the buffered support listed above.

Fail this section if the agent writes one tiny activity and waits to create the
next, authors the entire future curriculum in detail, or claims evidence the
learner did not provide.

---

## 6. Review the Player as the learner

Open the exact local URL Codex provides. Prefer Codex's integrated Browser when
available; the system browser is a valid fallback.

Check that:

- the link opens the narrowest useful session, Block, or Beat;
- Codex briefly explains Play mode and the optional Player tutorial;
- the home and path map are readable outside Play mode;
- the requested theme feels personal but restrained;
- text, focus, and contrast remain clear at a narrow window width;
- animation respects the learner's preference;
- every session has orientation, a worked example, supported practice,
  independent application, an immediate check, and a completion point;
- hints, smaller variants, rationale or rubrics, and optional stretch work are
  available without returning to Codex; and
- the learner can continue through the whole module before the next agent turn.

For guitar or another physical skill, the Player should coordinate off-screen
practice without pretending it can observe or hear performance.

Leave one test annotation about something confusing or useful. Confirm it
persists after reload and that a later agent turn notices it without deleting
learner-authored feedback.

---

## 7. Score the run

Score each quality `0` (absent or harmful), `1` (partial), or `2` (clear
success). Cite a chat turn, Player route, or repository file for each score.

| Quality | What success means | Weight |
| --- | --- | ---: |
| Onboarding clarity | Brief, plain questions collect goal, evidence, rhythm, and relevant preferences. | 2 |
| Achievable progress | A comprehensible 3–7 milestone map shows capabilities, evidence, and status. | 3 |
| Module coherence | The current 2–4 session module is complete; later work stays provisional. | 3 |
| Immediate support | Sessions contain enough help and feedback to avoid ordinary agent waits. | 3 |
| Personal readability | Confirmed style choices improve the Player without harming access or navigation. | 1 |
| Checkpoint evidence | Placement and progress claims use observable learner evidence. | 2 |
| Proportional adaptation | The agent preserves history and adapts at a useful boundary without a remediation loop. | 2 |
| Next-action handoff | The learner gets an exact Player route and knows what to do next. | 2 |

Also record these non-scored release signals:

- total elapsed agent time;
- slowest turn and number of turns over five minutes;
- time to first useful update and the longest silent gap;
- whether module skeleton and verification updates matched visible progress;
- whether an integrated Browser worked or a fallback was needed;
- every rescue prompt, manual repair, or permission surprise.

Classify the result:

| Result | Meaning |
| --- | --- |
| **Pass** | Setup and all critical repository checks pass; the learner can complete a coherent module without rescue or ordinary agent waits. |
| **Conditional pass** | The core loop works, but one rescue prompt, browser fallback, or other recorded intervention was required. |
| **Blocked** | A release, permission, or environment problem prevents an honest test. |
| **Fail** | The instructions produce unsafe setup, invalid PathMX, missing durable state, or an unworkable learning loop. |

Quality and latency are separate. A beautiful, correct module with a ten-minute
authoring turn can pass quality while still carrying a serious wait-time warning.

---

## 8. Record the result

Add a short dated result below or in the owning team task:

```text
Tester:
Date:
Lane and commits:
Codex model/setting:
Scenario:
PathMX native/dependency/baseline:
Result:
Quality score and evidence:
Total agent time:
Slowest turn:
Turns over five minutes:
Time to first useful update:
Longest silent gap:
Progressive authoring updates:
Browser behavior:
Rescue prompts or repairs:
Best learner-facing moment:
Most important problem:
Suggested owner (skills, Starter, PathMX, Codex, or environment):
```

Do not commit the generated personal learning repository, raw Codex transcript,
or sensitive learner data to the Build Week repository. Commit only the concise
result and durable, non-sensitive evidence needed by the team.

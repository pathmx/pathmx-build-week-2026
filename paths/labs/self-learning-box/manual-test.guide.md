---
type: guide
status: active
date: 2026-07-15
related:
  - ../../tasks/2026-07-15-spike-starter-init-flow.task.md
  - https://github.com/pathmx/pathmx-learning-starter
  - https://github.com/pathmx/pathmx/blob/main/paths/inbox/2026-07-15-pathmx-starter-init-mvp.issue.md
  - https://github.com/pathmx/pathmx/blob/main/paths/plans/pathmx-starter-init-mvp.design.md
  - https://learn.chatgpt.com/docs/quickstart.md
  - https://learn.chatgpt.com/docs/browser.md
---

# Self-Learning Starter MVP Test

Use this workflow to test the real learner-facing setup journey:

```txt
install or update PathMX
  -> init the self-learning Starter
  -> run the Player
  -> open the generated folder in Codex
  -> ask to learn something
  -> work in Player
  -> return to Codex for evidence-based adaptation
```

This is intentionally a manual product test around the new initializer. The
initializer copies the box; the checked-in instructions and skills should make
the box useful without a scripted onboarding wizard.

Time-box one run to 30–40 minutes. Stop after 10 minutes if setup cannot reach
a working Player.

---

## What This Test Decides

The test asks whether one generated folder is enough for a learner and a fresh
Codex task to become productive together.

A strong run should show that:

1. the released CLI creates the reviewed Starter without cloning it manually;
2. the generated Sources open and stay live in the Player;
3. a minimal learner prompt naturally activates the repository's teaching
   workflow;
4. Codex records a small learner profile and initial learning path in Source;
5. Codex chooses work near the learner's demonstrated edge, not from a generic
   topic outline alone;
6. the learner can move from Codex into the Player and knows to return to the
   same task when the activity is complete; and
7. saved evidence changes the next step.

This test does not evaluate arbitrary remote templates, Starter updates,
multiple learners, production identity, broad topic coverage, or a polished
Starter marketplace.

---

## Test Contract

Each tester uses:

- a unique destination folder that does not already exist;
- a fresh Codex project and task with no pasted Build Week context;
- the same candidate or public PathMX CLI version when comparing runs;
- only fictional or non-sensitive learner information; and
- a topic small enough to produce one observable attempt during the run.

Do not initially tell Codex which files to edit, which local skill to invoke,
or how to structure a PathMX Source. Discovering that workflow is part of the
test.

If the candidate `pathmx init <folder> --template self-learning` command has
not landed, record **blocked by release**. Do not substitute a Git clone and
report that the init flow passed.

---

## Give Each Tester An Independent Copy

Treat this Source as the unanswered template. Before assigning a run, copy it
to a tester-specific Source in that person's branch or clone:

```sh
mkdir -p paths/labs/self-learning-box/runs
cp paths/labs/self-learning-box/manual-test.guide.md \
  paths/labs/self-learning-box/runs/YYYY-MM-DD-<tester>.guide.md
```

Create a matching task named
`paths/tasks/YYYY-MM-DD-run-self-learning-starter-<tester>.task.md`. The task
should:

- name the team member as `owner` and begin as `ready`;
- link the tester-specific guide and this Starter spike task;
- tell the tester to complete the run and survey through the Player;
- require the saved `response.choice` values to survive reload;
- require concise free-form observations in the task or a linked notes Source;
  and
- end with the tester committing the run guide, task result, and dashboard
  update on their own branch.

Add the task to the hub dashboard when it is assigned. The tester claims it as
`in-progress`, uses the Player route for their copy, and moves it to `review`
after committing the result. A coordinator can mark it `done` after checking
the committed responses and report.

Do not answer questions in this template Source. Independent copies keep Actor
writes, reviewer notes, and Git history attributable to one run without asking
the new input path to solve concurrent document editing.

---

## 1. Install Or Update PathMX

If `pathmx` is not installed:

```sh
bun add -g @fellowhumans/pathmx@latest
```

If it is installed, update it through the supported CLI path:

```sh
pathmx self-update
```

Then record the exact version and inspect the current init help:

```sh
pathmx --version
pathmx init --help
```

The help must show a project path and `--template`. If it does not, classify
the run as **blocked by release** and stop. Do not use a private Core checkout
unless the team explicitly labels the run as a packed-candidate test.

---

## 2. Create A Fresh Self-Learning Space

From the parent directory where you want the test folder:

```sh
pathmx init pathmx-learning-test-<your-name> --template self-learning
```

The command should create a new folder and print the Starter revision plus the
next commands. Record the complete summary.

Before opening Codex, check only these setup facts:

```sh
cd pathmx-learning-test-<your-name>
test -f AGENTS.md
test -f paths/index.path.md
test -f .agents/skills/teach-me-anything/SKILL.md
```

Do not repair missing files. A missing instruction, home Source, or teaching
skill is an init or release-asset failure.

The generated folder should be ordinary and learner-owned. It should not carry
the Build Week repository's tasks, reports, work log, or private context.

---

## 3. Run The Player

From inside the generated folder, start the supported learner runtime:

```sh
pathmx play --open
```

Keep that terminal running. Record:

- time from the init command to a visible learner home;
- the exact base URL reported by the Player; and
- the exact route for `paths/index.path.md` from `sources.json` or the open
  Player.

Use the Player route as the primary review link. Use an absolute local Source
link only when line-level evidence matters or the Player is unavailable.

If the generated folder cannot start without manual config or Source repair,
stop and record the narrow failure.

---

## 4. Open The Folder As A Codex Project

Use the ChatGPT desktop app when possible so the task and local Player can be
visible side by side.

1. Open the generated folder in Codex with **Open Folder**
   (`Cmd+O` on macOS or `Ctrl+O` on Windows).
2. Start a new local task (`Cmd+N` or `Ctrl+N`).
3. Keep the Player running from the terminal.
4. Open the Player URL in the built-in browser by clicking the URL, using the
   browser toolbar, or pressing `Cmd+Shift+B` / `Ctrl+Shift+B`.

When the Browser plugin is installed and available, allow Codex to use it for
the local Player. This gives Codex and the learner a shared view beside the
task. The built-in browser is not available in Codex CLI or the IDE extension,
so a normal browser plus exact Player links is a valid fallback.

Do not paste repository instructions or a transcript into the new task.

---

## 5. Give Codex A Minimal Learning Prompt

Send only this shape:

> I want to learn **[topic]**. I have **[time]** today.

Examples:

- “I want to learn why the moon has phases. I have 25 minutes today.”
- “I want to learn the opening principles of chess. I have 20 minutes today.”
- “I want to learn how to recognize a major seventh chord. I have 30 minutes
  today.”

The prompt intentionally omits an outcome, starting level, and workflow. The
box should help Codex ask for only what is missing.

Observe whether Codex naturally:

- reads `AGENTS.md` and the relevant local skills;
- asks one or two focused questions instead of a long intake interview;
- turns the topic into one observable session outcome;
- records confirmed context in the learner profile;
- creates or updates an initial learning path;
- gives exact Player links for meaningful Source changes; and
- prefers the built-in browser for those links when it can control it.

If Codex begins generic tutoring without using the repository, wait until the
failure is clear. Then use this single rescue prompt:

> Please use this repository's instructions and local skills, keep the
> learning record in readable PathMX Sources, and use the running Player.

A rescue prompt makes the run a **conditional pass** at best. Record every
additional intervention.

---

## 6. Check The Proximal-Edge Setup

Before assigning substantial work, Codex should obtain one small piece of
evidence about what the learner can do independently. This can be a prediction,
explanation, worked example, tiny artifact, or response to a diagnostic.

The first task should be just beyond that demonstrated level and should change
only one meaningful dimension. It should not be an entire generic lesson plan.

Use this rubric to judge the proposed task:

| Signal | Expected next move |
| --- | --- |
| Correct and comfortable | Add transfer, variation, or one step of complexity |
| Partly correct or effortful | Hold the level and add one scaffold |
| Incorrect or confused | Reduce one dimension and model or contrast it |

The learner profile may record confirmed goals, constraints, preferences, and
evidence links. It should not label ability as a fixed personal trait based on
one response.

Before the learner leaves Codex for the Player, Codex should provide one exact
activity route and say, in substance:

> Complete this in the Player. When you finish, return to this Codex task and
> tell me it is ready for review.

That return instruction is part of the interaction contract, not optional
polish.

---

## 7. Work In Player, Then Return To Codex

Open the exact route, complete the activity, and submit or save the work through
the Player. Do not also paste the answer into Codex.

Return to the same Codex task and say:

> I finished the Player activity. It is ready for review.

Codex should treat that message as a handoff signal. It should locate and
inspect the durable evidence before evaluating it.

Verify that:

- the work survives a page reload or rebuild;
- the learner response or artifact is readable in ordinary Source;
- Codex finds it without being told the changed file;
- the assessment cites the observable work, not private reasoning; and
- the next step follows the proximal-edge rubric.

Codex should write one adapted next move to Source and provide its exact Player
route. A good chat response with no durable update does not complete the loop.

If the current released Action path cannot save evidence durably, classify the
run as **blocked** rather than simulating a pass in chat.

---

## 8. Optional Cold Resume

The core run ends after one evidence-based adaptation. If time permits, test
whether the folder also carries the learning state across tasks.

End the Codex task and start another task in the same project without a
transcript summary. Prompt:

> Resume my learning from this repository. What should I do next?

The new task should reconstruct the confirmed learner context, current path,
evidence, and next step from Source. It should reconnect to the running Player
and provide the current route instead of restarting onboarding.

Cold resume is useful product evidence, but a failure here should not hide
whether the required first proximal-edge cycle succeeded.

---

## 9. Classify The Run

| Result | Meaning |
| --- | --- |
| **Box pass** | Init, Player, natural Codex onboarding, one proximal-edge activity, return handoff, durable evidence, and adaptation work without rescue or repair. |
| **Conditional pass** | The loop works, but Codex needed the one rescue prompt or another recorded intervention. |
| **Blocked** | The candidate release, Player, Browser availability needed by the chosen setup, or durable Action path is unavailable, so the intended flow cannot be evaluated honestly. |
| **Box fail** | The run needs private context, file repair, unsupported syntax, transcript-only state, or an adaptation unsupported by saved evidence. |

Classify the narrowest owner:

| Observation | Likely owner to investigate |
| --- | --- |
| Init flag missing or payload incomplete | CLI release assembly or Starter snapshot |
| Codex ignores the repository workflow | Starter `AGENTS.md` or local teaching skill |
| Player does not start or routes are stale | CLI, build/watch, or Player routing |
| Agent cannot keep Player beside the task | Codex surface availability, Browser setup, or skill fallback |
| Learner work does not persist as readable Source | Actor, Action, response, or Player submission path |
| Evidence persists but the next task is poorly calibrated | Teaching skill and proximal-edge rubric |
| A new task cannot resume | Starter Source structure or resume instructions |

Do not report a generic “Starter failed” result when the run identifies a
smaller owner.

---

## 10. Complete The MVP Survey In Player

Return to this tester-specific guide in the Build Week Player after completing
the learning loop. Submit every survey question below.

These questions require PathMX 0.1.9 or the matching packed candidate with
`questions.submitSingleChoice`. Each submission should write the selected label
to `response.choice` in this Source. Reload the page and confirm every choice
remains selected. If the questions render without inputs or the choices do not
persist, record the survey as **blocked by Actor/input release** rather than
editing `response.choice` by hand.

The survey is intentionally short and decision-oriented. It measures a
different seam in each question instead of asking for a general satisfaction
score.

---

<!--
type: question
id: mvp-run-result
actions:
  submit: questions.submitSingleChoice
-->

## What was the overall result of this MVP run?

Choose the closest outcome after attempting the complete workflow.

- Completed without a rescue prompt or manual repair
- Completed with a rescue prompt or recorded intervention
- Blocked before the learning loop could finish
- Failed after the learning loop began

---

<!--
type: question
id: init-to-player-time
actions:
  submit: questions.submitSingleChoice
-->

## How long did it take to go from init to a working learner home?

Use elapsed time, not an impression of speed.

- Under 5 minutes
- 5 to 10 minutes
- 11 to 20 minutes
- I did not reach a working Player

---

<!--
type: question
id: natural-skill-discovery
actions:
  submit: questions.submitSingleChoice
-->

## How naturally did Codex discover the learning workflow?

Judge what happened before you explained repository procedure.

- It found and followed the workflow without rescue
- It followed the workflow after the single allowed rescue prompt
- It required multiple procedural interventions
- It never found the repository learning workflow

---

<!--
type: question
id: proximal-edge-fit
actions:
  submit: questions.submitSingleChoice
-->

## How well did the first activity fit your demonstrated starting point?

- Too easy to provide useful evidence
- About right: challenging but workable
- Too difficult even with the offered scaffold
- No evidence-based activity was reached

---

<!--
type: question
id: player-codex-handoff
actions:
  submit: questions.submitSingleChoice
-->

## How clear was the move from Codex to Player and back?

- Clear: I knew where to work and when to return
- Workable, but the handoff felt awkward
- Confusing: I was unsure where to continue
- The run did not reach this handoff

---

<!--
type: question
id: durable-evidence-loop
actions:
  submit: questions.submitSingleChoice
-->

## What happened to the learner evidence after submission?

- It persisted after reload and informed the next step
- It persisted, but Codex did not use it well
- It did not persist as readable Source evidence
- The run did not reach a learner submission

---

<!--
type: question
id: next-investment
actions:
  submit: questions.submitSingleChoice
-->

## Which area most needs improvement before the next round?

- CLI installation or Starter initialization
- Starter instructions or skill discovery
- Player navigation or Codex browser handoff
- Actor inputs, saving, or response persistence
- Teaching calibration or evidence-based adaptation
- The loop is ready to test with another Starter family

---

## 11. Commit And Report Back

Add a concise dated Activity entry to the
[Starter init spike task](../../tasks/2026-07-15-spike-starter-init-flow.task.md).
For a full run, add concise observations to the tester's task or create
`runs/YYYY-MM-DD-<tester>.notes.md` beside their guide and link it from the
task.

Before committing, verify the survey itself exercised the durable input path:

```sh
run_guide=paths/labs/self-learning-box/runs/YYYY-MM-DD-<tester>.guide.md
test "$(rg -c '^response:$' "$run_guide")" -eq 7
test "$(rg -c '^  choice: .+' "$run_guide")" -eq 7
git diff --check
```

The tester or their agent may inspect the saved `response.choice` values and
use them to draft the report. Do not silently change a submitted choice while
summarizing it.

Use this report shape:

```md
### Self-learning Starter run — <tester> — <date>

- Result: box pass | conditional pass | blocked | box fail
- Environment: OS, Codex surface, Browser availability and permissions
- PathMX CLI: exact version or packed candidate revision
- Starter: exact revision printed by init
- Init command and summary:
- Topic and available time:
- Observable outcome Codex established:
- Time from init to working Player:
- Player routes reviewed:
- Natural skill discovery: pass/fail
- Profile and initial path created: pass/fail
- Starting evidence Codex used:
- Proximal-edge task and why it fit:
- Explicit return-to-Codex instruction: pass/fail
- Durable evidence and reload: pass/fail
- Evidence-based adaptation: advance | hold/scaffold | reduce/model | fail
- Built-in browser side-by-side: pass/fallback/fail
- Cold resume, if attempted: pass/fail/not run
- Rescue prompts or manual interventions:
- Most important friction:
- Narrowest likely owner:
- Recommended change before the next run:
```

Commit the tester-specific guide, task result, optional notes, and dashboard
status together. Do not commit the generated learner Space into the Build Week
repository unless a separate task explicitly requests a fixture or evidence
snapshot.

Use Player links as the primary review links. Add local Source links only for
line-level evidence or when the Player is unavailable. Never record private
task links, credentials, raw transcripts, or sensitive learner information.

---

## Decision After Two Independent Runs

Compare two fresh runs by different testers rather than treating the author's
demo as sufficient evidence.

Review the committed survey choices together with the free-form notes. The
choices make runs comparable; the notes explain the cause. Neither is a useful
replacement for the other.

- If setup fails, fix the initializer or release asset before adding more
  onboarding UI.
- If skill discovery fails, improve `AGENTS.md` and the teaching skill before
  adding a wizard.
- If the Codex-to-Player return handoff is consistently awkward, improve that
  interaction contract and browser guidance before automating more steps.
- If evidence cannot survive and inform adaptation, fix the Action and durable
  response path before broadening topics.
- If two topics complete coherent loops, the folder-plus-instructions harness
  is strong enough to justify polishing the Starter and considering a second
  box family.

The deciding question is not whether PathMX can copy files. It is whether a
generated folder can reliably coordinate a learner, Codex, and the Player
around durable evidence with very little procedural prompting.

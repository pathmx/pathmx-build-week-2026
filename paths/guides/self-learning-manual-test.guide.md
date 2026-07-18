# Self-Learning Manual Test

Use this quick test to confirm that the released PathMX CLI can create the
public learning Starter and open it in the Player. For the full scored product
run, use the
[Self-Learning Starter MVP Test](../labs/self-learning-box/manual-test.guide.md).

## 1. Install Or Update PathMX

PathMX requires [Bun](https://bun.sh). Install the CLI if needed, then update
and record the version:

```sh
bun add -g @fellowhumans/pathmx@latest
pathmx self-update
pathmx --version
pathmx init --help
```

The version must be 0.1.17 or later, and the init help must show both a project
path and `--template <repository-name>`.

## 2. Scaffold A New Learning Space

Change to the parent directory where you want the test Space. Choose a unique
folder name—the destination must not already exist. Replace `mark` below with
your own short name.

```sh
starter_space=pathmx-learning-test-mark
pathmx init "$starter_space" --template pathmx-learning-starter
cd "$starter_space"
```

The command should print exact commits for both
`pathmx/pathmx-learning-starter` and `pathmx/pathmx-skills`. Check the generated
workspace before continuing:

```sh
test -f AGENTS.md
test -f paths/index.path.md
test -f .agents/skills/path/SKILL.md
test -f .agents/skills/pathmx/SKILL.md
test -f .agents/pathmx-skills.receipt.json
test -L .claude/skills
test ! -e .git
```

Do not repair a missing file. Record the initializer output and report the
missing artifact as a Starter or CLI failure.

## 3. Open The Player

From inside the generated folder:

```sh
pathmx play paths/index.path.md --open
```

Keep the terminal running. The learner home should open at `/index.path`.

## 4. Use An Agent To Learn Something New

### Codex Desktop

1. Open the generated folder as a Codex project.
2. Start a fresh task with no pasted Build Week context.
3. Enter `/path`, or send: “I want to learn **[topic]**. I have **[time]**
   today.”
4. Follow the exact Player routes Codex provides, then return to the same task
   after submitting an activity.

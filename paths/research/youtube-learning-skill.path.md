---
type: research
status: experimental
tags:
  - youtube
  - transcripts
  - skills
  - adaptive-learning
related:
  - ./index.path.md
  - ../labs/simple-quiz/index.demo.md
  - ../tasks/2026-07-16-add-youtube-learning-research.task.md
---

# YouTube Learning Skill

This note sketches a Codex skill and PathMX player pattern for turning relevant
YouTube videos plus transcript evidence into a focused learning path. The
learner-facing experience should feel like a guided watch-and-recall session;
the durable artifact should remain ordinary readable PathMX Source with
questions, timestamps, and provenance that a human or agent can inspect.

The short version: use the official YouTube embed/player surface for playback,
prefer user-provided or owner-authorized transcripts for evidence, and let the
agent create PathMX questions from timestamped transcript spans rather than
from a hidden browser state.

---

<!--
type: research
id: current-youtube-boundary
title: Current YouTube Boundary
-->

## Current YouTube Boundary

The player side is straightforward enough for a PathMX component. The official
YouTube IFrame API supports embedding a player, controlling playback, seeking,
and receiving player events from JavaScript. YouTube also documents player
parameters and minimum embedded-player sizing.

The transcript side is the hard boundary. The YouTube Data API has caption
resources, but the current official caption methods are not a general public
transcript download API:

- `captions.list` returns caption tracks for a video but requires
  authorization.
- `captions.download` downloads a caption track, but the current documentation
  says the caller must have permission to edit the video.
- Unofficial transcript scraping should not be the default for a reusable
  skill because YouTube policy requires documented API access paths for API
  data and audiovisual content.

That means the skill should support three transcript modes, in this order:

1. **Provided transcript:** the user supplies `.vtt`, `.srt`, or pasted text.
2. **Owner-authorized transcript:** the user authenticates for a video they can
   manage, then the tool retrieves captions through official APIs.
3. **No transcript:** the skill embeds or links the video and creates only
   human-authored prompts, not transcript-grounded quizzes.

Sources:

- [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
- [YouTube player parameters](https://developers.google.com/youtube/player_parameters)
- [YouTube Data API `videos.list`](https://developers.google.com/youtube/v3/docs/videos/list)
- [YouTube Data API `search.list`](https://developers.google.com/youtube/v3/docs/search/list)
- [YouTube Data API `captions.list`](https://developers.google.com/youtube/v3/docs/captions/list)
- [YouTube Data API `captions.download`](https://developers.google.com/youtube/v3/docs/captions/download)
- [YouTube API Services developer policies](https://developers.google.com/youtube/terms/developer-policies)
- [YouTube API Services required minimum functionality](https://developers.google.com/youtube/terms/required-minimum-functionality)

---

<!--
type: design
id: player-experience
title: Player Experience
-->

## Player Experience

**Thesis:** Make watching a learning video active by keeping the current
transcript segment, learner recall prompt, and next quiz move aligned with the
video timestamp.

**Arrival:** The learner sees the video, source/title/channel metadata, a short
purpose statement, and a transcript or chapter list before any quiz appears.

**Anti-targets:** Not a YouTube clone, not hidden transcript scraping, not a
passive embed followed by generic quiz questions, and not a component that
stores learner evidence only in browser state.

**Arc:** Preview the learning goal, watch one segment, inspect the transcript,
answer a recall or application question, then continue to the next segment.

**Controls:** Play or pause, jump to segment, replay segment, previous segment,
next segment, and reset view. These are browser-local player controls, not
durable submissions.

**Visible consequences:** The transcript highlight follows playback, segment
buttons seek the video, and quiz Blocks cite the source video and timestamp
range in hidden maintainer data.

**Protected invariants:** YouTube controls stay visible and unobscured; the
video is embedded through official YouTube surfaces; quiz evidence points to a
transcript span; learner answers use the normal PathMX question Action.

**Proof:** A reviewer can run one generated lesson from a URL plus provided
VTT file, use keyboard and pointer controls, submit at least one question,
reload, and see the response restored in readable Source evidence.

---

<!--
type: architecture
id: skill-package
title: Skill Package
-->

## Skill Package

The Codex skill can stay small if deterministic work moves into scripts and
the agent keeps the pedagogical choices.

Proposed skill name: `youtube-learning`.

The skill's `SKILL.md` should tell Codex to:

1. collect the video URL, learning goal, audience level, and transcript source;
2. verify that transcript use is either provided by the user or officially
   authorized;
3. normalize metadata and transcript segments into a compact context pack;
4. ask the agent to identify learning moments and write questions grounded in
   timestamped transcript spans;
5. scaffold a PathMX source that embeds the player component and durable
   question Blocks; and
6. run PathMX build and question-flow verification in proportion to the output.

Useful bundled scripts:

| Script | Purpose |
| --- | --- |
| `resolve_youtube.py` | Parse YouTube URLs, normalize video and playlist IDs, and fetch public metadata through official API calls when credentials are available. |
| `search_candidates.py` | Search for candidate videos for a topic and emit a small JSON/Markdown candidate sheet for agent ranking. |
| `normalize_transcript.py` | Convert `.vtt`, `.srt`, or pasted text into timestamped segment JSON. |
| `make_context_pack.py` | Chunk transcript segments into learning moments with word counts, timestamps, and compact excerpts. |
| `scaffold_pathmx_lesson.py` | Generate a starter `.path.md` source, local transcript data file, and optional component import. |
| `validate_youtube_quiz.py` | Check that every generated question has a stable ID, source video ID, timestamp span, and grounded evidence note. |

The scripts should output inspectable JSON and Markdown rather than directly
calling a model. Codex should remain responsible for ranking videos, choosing
learning moments, and writing the actual learner-facing explanations and
questions.

---

<!--
type: architecture
id: pathmx-shape
title: PathMX Shape
-->

## PathMX Shape

A generated lesson should keep the media, transcript, and quiz evidence
separate:

- a `.path.md` or `.guide.md` source for the learner flow;
- a local `transcript.segments.json` asset for timestamped transcript data
  when redistribution is permitted;
- a `<youtube-learning-player>` Literate Component for playback and transcript
  navigation;
- ordinary `type: question` Blocks for durable learner responses; and
- hidden maintainer data that connects each question to the video and
  transcript span.

Example question shape:

```md
---

<!--
type: question
id: yt-intro-q01
actions:
  submit: questions.submitSingleChoice
youtube:
  videoId: abc123
  evidence:
    start: 84.2
    end: 128.5
    source: provided-vtt
-->

## What changed in the example after the instructor introduced the constraint?

Choose the answer best supported by the video segment.

- The learner switched from memorizing a rule to comparing two cases.
- The instructor skipped the example and moved to a definition.
- The transcript stopped matching the video.
```

This shape intentionally does not invent an auto-grading Action. A later
graded-question contract could add answer keys and scoring, but the MVP can
use the existing durable single-choice pattern and let the agent review the
response against the hidden evidence span.

---

<!--
type: experiment
id: mvp-path
title: MVP Path
-->

## MVP Path

Start with the smallest reliable workflow:

1. Input one YouTube URL, a learning goal, and a user-provided `.vtt` file.
2. Run `normalize_transcript.py` to produce timestamped segments.
3. Run `make_context_pack.py` to produce 5 to 8 candidate learning moments.
4. Have Codex choose 3 to 5 moments and scaffold a PathMX source.
5. Generate one video/transcript Block followed by 3 to 5 durable question
   Blocks.
6. Run `pathmx build -o .pathmx-check --clean`.
7. Review Play for iframe sizing, transcript navigation, question submission,
   reload restoration, and narrow layout.

Do not include a full raw transcript in this Build Week repository unless the
team has explicit permission and a clear reason. For shared research examples,
prefer short synthetic transcript segments or a transcript summary with
timestamps.

Defer these until the MVP is useful:

- playlist expansion;
- YouTube search and ranking;
- owner-authorized caption download;
- automatic transcript refresh;
- graded quiz Actions;
- transcript-side semantic search; and
- publishing a reusable PathMX component package.

---

<!--
type: decision
id: open-questions
title: Open Questions
-->

## Open Questions

- Should `youtube-learning` live as a personal Codex skill first, then graduate
  into `pathmx-learning-starter` once the workflow proves useful?
- Should the PathMX component be generic media-plus-transcript, with YouTube as
  one adapter, instead of a YouTube-specific component?
- What should the product policy say when a learner-generated quiz is based on
  a transcript that was supplied by the user rather than retrieved from
  YouTube?
- Does the first Build Week demo need live YouTube search, or is URL plus
  transcript enough to show the learning loop?

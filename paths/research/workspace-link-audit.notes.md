---
status: active
date: 2026-07-18
related:
  - ../tasks/2026-07-18-clarify-player-navigation-and-link-affordances.task.md
  - ../work-log/2026-07-18-andrew-labs-review.notes.md
---

# Workspace Link Audit

This is the durable index for Andrew's Build Week link review. It separates a
missing destination from a correct destination that PathMX routes incorrectly,
and it avoids treating an unauthenticated GitHub response as proof that private
content was deleted.

## Scope And Method

- Audited Markdown-authored links under `paths/` on 2026-07-18.
- Scanned 73 Markdown Sources containing 294 authored Markdown link
  occurrences: 223 internal and 71 external.
- Built and served a fresh local preview, then checked generated document
  routes, browser-resolved same-origin targets, and external HTTP status and
  redirects without authentication.
- The browser-control backend was unavailable to the audit agent. These are
  route and transport checks, not visual click-through, focus, or new-tab QA.
- Component templates with unresolved variables were not requested as literal
  URLs.

## Summary

| Surface | Result |
| --- | --- |
| Generated document routes | 68 of 68 returned successfully |
| Authored internal targets | All 223 occurrences resolve to 173 Markdown Sources or 50 assets |
| Generated internal link occurrences | 622 occurrences across 76 unique same-origin targets |
| Generated fragment occurrences | 461, with no missing fragments |
| Broken internal route emissions | 4 unique component-definition targets |
| Unique external URLs | 69 |
| External direct-working | 46 |
| External working redirects | 2 |
| Upstream GitHub targets inaccessible without authentication | 19 |
| Authentication-gated | 1 |
| Templated and not safely requestable before rendering | 1 |
| Confirmed malformed or dead external targets | 0 |

## Broken Internal Route Emissions

Each nested component Source exists and its direct generated route returns
successfully. The authored relative link is also readable and correct. The
failure occurs because the generated anchor keeps a raw `./...components.md`
`href` on an extensionless demo route, so normal browser resolution drops the
demo folder.

| Source occurrence | Browser receives | Existing nested route |
| --- | --- | --- |
| [Bookshelf demo](../labs/bookshelf/index.demo.md), line 17 | `/labs/bookshelf.components.md` | `/labs/bookshelf/bookshelf.components` |
| [Chess demo](../labs/chess/index.demo.md), line 13 | `/labs/chess.components.md` | `/labs/chess/chess.components` |
| [Layout demo](../labs/layout-components/index.demo.md), line 20 | `/labs/layout.components.md` | `/labs/layout-components/layout.components` |
| [3D Globe demo](../labs/three-globe/index.demo.md), line 30 | `/labs/three-globe.components.md` | `/labs/three-globe/three-globe.components` |

All four failing anchors are the first reference-definition form and are marked
`data-pathmx-rel-form="reference-definition"`. Later inline Chess links at
lines 15 and 20 are rewritten correctly, which narrows the likely Core defect.
This is one PathMX route-emission defect expressed in four labs. Do not replace
the relative Source links with hardcoded deployment URLs.

The currently unreachable Component Patterns demo has a similar authored link
at `paths/labs/component-patterns/index.demo.md:102`. Test it as a possible
fifth case if that demo enters the reachable manifest.

## External Targets Requiring Context

Nineteen distinct links under `https://github.com/pathmx/pathmx` return 404 to
an unauthenticated request, and the repository root does too. This means the
cluster is **private or otherwise inaccessible**, not confirmed dead. The
public `pathmx/pathmx-learning-starter` repository works.

| Source | Inaccessible canonical targets |
| --- | --- |
| [Starter init task](../tasks/2026-07-15-spike-starter-init-flow.task.md) and [manual test guide](../labs/self-learning-box/manual-test.guide.md) | `paths/inbox/2026-07-15-pathmx-starter-init-mvp.issue.md`; `paths/docs/pathmx-starter-init-mvp.design.md`; `paths/plans/pathmx-starter-init-mvp.plan.md` |
| [Layout demo](../labs/layout-components/index.demo.md) | `paths/demos/styles/layout-demo.css`; `paths/demos/layout.demo.md` |
| [Bookshelf demo](../labs/bookshelf/index.demo.md) | `paths/demos/bookshelf.demo.md`; `paths/demos/bookshelf.components.md` |
| [Tufte demo](../labs/tufte-theme/index.demo.md) | `paths/demos/tufte-theme/index.demo.md`; `paths/demos/tufte-theme/styles/tufte-theme.css`; `paths/demos/tufte-theme/` |
| [Chess demo](../labs/chess/index.demo.md) | `paths/demos/chess/chess-runtime.js`; `paths/demos/chess/chess-board.css`; `paths/demos/chess/chess-game.css`; `paths/demos/chess/` |
| [3D Globe demo](../labs/three-globe/index.demo.md) | revision `35af1917` targets for `three-globe.demo.md`, `three-globe.components.md`, and `three-globe-network.json` |

The Build Week home page's Devpost submission link redirects to a login page.
That is authentication-gated rather than dead, but it may be surprising to a
reviewer without a Devpost session.

## Healthy Redirects And Templated URLs

- `https://build-week.pathmx.net/` redirects to its `index.path` route.
- `https://pathmx.dev` redirects to its `index.path` route.
- The Bookshelf cover URL contains `{{ isbn }}` and becomes requestable only
  after the component renders a concrete value. It is valid template syntax,
  not a static broken link.

## Next Review Slice

1. Decide which inaccessible canonical PathMX references should remain as
   provenance for signed-in team members and which need public or local
   alternatives for Build Week reviewers.
2. Fix relative-link emission in PathMX Core and use these four demos as a
   regression set.
3. Repeat the audit with a functioning browser-control session to verify
   visible internal/external affordances, same-tab versus new-tab behavior,
   keyboard focus, and Play-state preservation.

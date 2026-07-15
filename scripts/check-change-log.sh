#!/bin/sh

set -eu

base=${1:-origin/main}
log=paths/work-log/changes.log.md

if ! git rev-parse --verify "$base^{commit}" >/dev/null 2>&1; then
  echo "Change-log check failed: base ref '$base' does not exist." >&2
  echo "Fetch origin or pass an explicit base commit." >&2
  exit 1
fi

files=$(git diff --name-only "$base" HEAD)

if [ -z "$files" ]; then
  echo "Change-log check: no outgoing changes relative to $base."
  exit 0
fi

if [ ! -f "$log" ]; then
  echo "Change-log check failed: $log is missing." >&2
  exit 1
fi

repo_work=$(printf '%s\n' "$files" | grep -Fvx "$log" || true)
log_update=$(
  git diff --name-only --diff-filter=ACMR "$base" HEAD |
    grep -Fx "$log" || true
)

if [ -n "$repo_work" ] && [ -z "$log_update" ]; then
  echo "Change-log check failed: outgoing work does not update $log." >&2
  echo "Prepend one playable change Block or materially update the newest one." >&2
  exit 1
fi

awk '
  BEGIN {
    frontmatter = 0
    body = 0
    block = 1
    headings = 0
    failed = 0
  }

  NR == 1 && $0 == "---" {
    frontmatter = 1
    next
  }

  frontmatter && $0 == "---" {
    frontmatter = 0
    body = 1
    next
  }

  frontmatter {
    next
  }

  body && $0 == "---" {
    if (headings < 1) {
      printf "Change-log check failed: Block %d has no change heading.\n", block > "/dev/stderr"
      failed = 1
    }
    block++
    headings = 0
    next
  }

  body && /^## / {
    headings++
  }

  END {
    if (!body) {
      print "Change-log check failed: expected YAML frontmatter." > "/dev/stderr"
      failed = 1
    } else if (headings < 1) {
      printf "Change-log check failed: Block %d has no change heading.\n", block > "/dev/stderr"
      failed = 1
    }
    exit failed
  }
' "$log"

echo "Change-log check passed for outgoing work relative to $base."

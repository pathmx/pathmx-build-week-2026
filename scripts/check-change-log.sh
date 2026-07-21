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
  function fail(message) {
    printf "Change-log check failed: Block %d %s.\n", block, message > "/dev/stderr"
    failed = 1
  }

  function check_block() {
    if (headings < 1) {
      fail("has no change heading")
    }
    if (types != 1) {
      fail("must have exactly one topmatter type: change")
    }
    if (dates != 1) {
      fail("must have exactly one ISO 8601 topmatter date")
    }
    if (published != 1) {
      fail("must render exactly one change-published component")
    }
    if (previous_date != "" && block_date > previous_date) {
      fail("is newer than the Block before it")
    }
    previous_date = block_date
  }

  BEGIN {
    frontmatter = 0
    topmatter = 0
    body = 0
    block = 1
    headings = 0
    types = 0
    dates = 0
    published = 0
    block_date = ""
    previous_date = ""
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

  body && $0 == "<!--" {
    topmatter = 1
    next
  }

  topmatter && $0 == "-->" {
    topmatter = 0
    next
  }

  topmatter && $0 == "type: change" {
    types++
    next
  }

  topmatter && /^date: "[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9](Z|[+-][0-9][0-9]:[0-9][0-9])"$/ {
    dates++
    block_date = substr($0, 8, length($0) - 8)
    next
  }

  topmatter {
    next
  }

  body && $0 == "---" {
    check_block()
    block++
    headings = 0
    types = 0
    dates = 0
    published = 0
    block_date = ""
    next
  }

  body && /^## / {
    headings++
  }

  body && /^<change-published datetime="\{\{ block\.date \}\}">$/ {
    published++
  }

  END {
    if (!body) {
      print "Change-log check failed: expected YAML frontmatter." > "/dev/stderr"
      failed = 1
    } else {
      check_block()
    }
    exit failed
  }
' "$log"

echo "Change-log check passed for outgoing work relative to $base."

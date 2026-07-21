---
componentName: change-published
---

# Change published

Renders one ISO 8601 timestamp as compact publication metadata. The source
timestamp remains available through semantic `datetime` attributes while the
visible date and time follow the reader's locale.

Props:

- `datetime`: an ISO 8601 timestamp, normally supplied by Block topmatter.

```html
<p class="change-published">
  <span class="change-published__label">Published</span>
  <time class="change-published__date" data-date datetime="{{ datetime }}">
    {{ datetime }}
  </time>
  <span class="change-published__separator" aria-hidden="true">·</span>
  <time class="change-published__time" data-time datetime="{{ datetime }}">
    {{ datetime }}
  </time>
</p>
```

```css
:self {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.3rem 0.55rem;
  margin: 0.65rem 0 1.9rem;
  color: var(--pmx-color-muted);
  font-family: var(--pmx-font-mono);
  font-size: 0.78rem;
  font-variant-numeric: tabular-nums;
  font-weight: 650;
  letter-spacing: 0.055em;
  line-height: 1.4;
  text-transform: uppercase;
}

.change-published__label {
  color: var(--pmx-color-accent);
}

.change-published__separator {
  opacity: 0.52;
}

@media (forced-colors: active) {
  .change-published__label {
    color: LinkText;
  }
}
```

```js
const value = String(ctx.attrs.datetime ?? "").trim()
const date = value ? new Date(value) : null

if (date && !Number.isNaN(date.getTime())) {
  const locale = document.documentElement.lang || navigator.language
  const dateText = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(date)
  const timeText = new Intl.DateTimeFormat(locale, {
    timeStyle: "short",
  }).format(date)

  $("[data-date]").textContent = dateText
  $("[data-time]").textContent = timeText
} else {
  el.dataset.invalidDatetime = "true"
  $("[data-date]").textContent = "Date unavailable"
  $("[data-time]").remove()
  $(".change-published__separator").remove()
}
```

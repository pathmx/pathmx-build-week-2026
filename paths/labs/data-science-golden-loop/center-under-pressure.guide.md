---
status: experimental
---

[@interactions]: ../component-patterns/interaction-patterns.components.md

# Center Under Pressure

Suppose six deliveries took this many minutes:

`12, 13, 12, 14, 13, 60`

Five deliveries cluster between 12 and 14 minutes. One took an hour. Which
number should represent a “typical” delivery?

---

## Two Measures Of Center

The **mean** shares the total equally across all observations:

$$
\frac{12 + 13 + 12 + 14 + 13 + 60}{6} \approx 20.7
$$

The **median** is the middle after sorting:

`12, 12, 13, 13, 14, 60`

The two middle values are both 13, so the median is **13**.

---

## Move The Outlier

Drag the final delivery time. Watch how strongly each measure responds.

<outlier-studio
  values="12,13,12,14,13,60"
  min="14"
  max="100"
  label="Delivery times in minutes"
/>

---

## What The Model Shows

The mean uses every value directly, so an extreme observation can pull it far
from the main cluster. The median depends on order, so changing the largest
value from 60 to 100 does not change the middle position.

That does not make the median universally better. It makes the median a useful
description of a typical observation when the question is about the cluster
and the extreme value is not itself the main story.

---

## Next Move

Make a prediction in the [diagnostic question](./choose-center.quiz.md) before
working through the calculation.

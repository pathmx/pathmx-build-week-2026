# PathMX Question Play Verification

Use this reference when a task creates, changes, or diagnoses a question that
learners answer in the Player.

## Protect The Source

A mapped question submission is a durable Action, not disposable browser
state. Before testing:

1. inspect the target Block and record whether it already contains `response`
   or `submission` data;
2. inspect the Source diff so existing work is distinguishable from test data;
3. prefer a disposable Source copy when the test does not need the canonical
   example; and
4. rebuild or refresh through the repository's supported Player loop, then
   explicitly reload the review tab.

Never submit into an example and assume a browser refresh will reset it.

## Exercise Choice Actions And Text-Control Focus

PathMX Play presents choice Beats as direct, labeled actions. Text fields,
textareas, and selects retain explicit native focus entry. Verify the complete
transition rather than only clicking the input:

| State | Learner action | Expected result |
| --- | --- | --- |
| Unanswered choice Beat active | `Enter` or activate the key-hinted `<label>` control | The choice changes with one action. For a single-choice question with only the generated fallback submitter, the same action persists the response. |
| Choice with an authored submit control | Select the choice | Selection changes, but persistence remains separate through the explicit authored control. |
| Text, textarea, or select Beat active | `Enter` | Focus enters the native control. |
| Native text control focused | Type and use `Tab` normally | Editing and native form traversal are not intercepted by Play navigation. |
| Native text control focused | `Escape` | Focus returns to the Beat cursor; Play remains active. |
| Saved response restored | Reload or revisit the Beat | The saved value is visible and the Player identifies the forward navigation. |
| Saved question active | Activate Next Block | Play moves to the following Block. |

Also verify pointer selection when the task changes visible controls, and use a
narrow viewport when Player chrome or guidance changed. For text-like controls,
the first `Escape` from the control must not exit Play; a later `Escape` from
the Beat cursor may.

## Verify Persistence And Cleanup

After submission:

1. wait for the live Source update to settle;
2. confirm the expected `response`/`submission` data in the target Block;
3. revisit or reload and confirm the response is restored;
4. exercise Next Block explicitly—submission does not imply auto-advance; and
5. decide whether the saved response is product data or test residue.

If the example should remain unanswered, remove only the response and
submission fields created by the test. Do not reset, restore, or rewrite the
whole Source in a shared worktree. Reload once more and confirm the control is
unselected and no test run metadata remains.

## Report Evidence

Report the exact Player route and whether these states passed:

- labeled choice action or text-control entry guidance;
- one-action choice selection, or native text entry;
- Escape back to the Beat cursor without leaving Play for text-like controls;
- durable response after reload;
- explicit Next Block navigation; and
- retained or removed test response data.

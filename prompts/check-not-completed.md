# Check what can be done now

Use this instead of the next numbered MVP prompt when leftover items in `later/not-completed.md` might already be unblocked.

## Prompt

```
Follow @prompts/check-not-completed.md.

Read later/not-completed.md and the current repo. Split items into can-do-now vs still-blocked (with prompt stays blocked until that later prompt’s files exist). Report the split in chat. Implement only unblocked items, smallest first, with tests, then remove finished items from later/not-completed.md. If nothing is unblocked, stop.
```

## Inputs

- `later/not-completed.md`
- The current tree, tests, and Compose services
- The MVP prompt sequence in `.cursor/plans/steam_for_students_mvp_c31ab355.plan.md` when an item is marked `with prompt`

## Steps

1. Read every open item in `later/not-completed.md`. Skip anything already done in the repo even if the list still mentions it.
2. For each remaining item, check whether its files and prerequisites exist now.
   - `backend` is unblocked when the backend package and tests it would touch are present.
   - `frontend` is unblocked when `frontend/` has a real app (package.json, lint/test scripts), not only a placeholder.
   - `with prompt` stays blocked until that later prompt’s artifacts exist. Do not start it early.
3. In chat, split the list into **can do now** and **still blocked**. For blocked items, name the missing prompt or file.
4. Implement only the **can do now** items, smallest first, one logical change at a time. Follow `@prompts/verify-change.md` after each. Do not pull in MVP prompts that are still ahead.
5. After an item is done, remove it from `later/not-completed.md` (or the whole section if nothing in it remains). Leave blocked items in place.

## Constraints

- If nothing is unblocked, say so and stop. Do not invent work.
- If the file is empty of items, say so and stop.
- Do not erase earlier sections except to delete items that this sitting finished.
- Do not commit unless the user asks.

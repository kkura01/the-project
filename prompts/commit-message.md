# Commit message

Use this when the user asks for a commit. Read `.cursor/rules/commit-messages.mdc` first.

## Inputs

- `git status`
- `git diff` (staged and unstaged)
- `git log -8 --oneline` for tone

## Steps

1. Summarize only the changes that will be committed.
2. Pick one type: `feature`, `fix`, `refactor`, `test`, `docs`, or `chore`.
3. Write a subject that states why the change exists.
4. Add one bullet per area or file that changed.

## Subject

```
<type>: <why>
```

Keep the subject under 72 characters. Use the imperative mood. Do not end it with a period.

## Example

```
fix: stop the list page from dropping the last row

- app/items/page.tsx: include the final page in the range
- lib/paginate.ts: treat an exact page boundary as a full page
```

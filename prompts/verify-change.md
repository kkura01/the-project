# Verify a change

Use this after a microtask and before suggesting a commit.

## Check

- The diff matches the microtask and does not include unrelated edits.
- The behavior described in the task is present in the changed files.
- Existing callers of changed functions still fit the new shape.
- There is an obvious way to revert this change alone.

## Report

State what was verified, what is still unproven, and whether the diff is ready to stage. Do not commit unless the user asks.

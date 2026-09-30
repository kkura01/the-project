# Feature breakdown

Use this before implementing a feature that will touch more than a handful of files.

## Inputs

- The feature requirements from the user.
- The current code that the feature will touch.

## Output

A numbered list of microtasks. For each one include:

- What it changes, in one sentence.
- The files it is expected to touch (about 2–5).
- How to tell it is done.
- What must already exist before it starts.

## Constraints

- Order tasks so each one leaves the project in a working state.
- Separate schema, data access, UI, and tests when they can land independently.
- Do not start implementation until the list is agreed, unless the user asked to proceed immediately.

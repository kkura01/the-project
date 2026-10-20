# Not completed

Unfinished points and features from a prompt. `@prompts/not-done.md` appends a section here. `@prompts/check-not-completed.md` decides what can be done now and removes an item only after it is done.

## Format

- What is still missing, in one sentence.
- The part of the prompt it comes from.
- The files it is likely to touch.
- How to tell it is done.
- Classification: `backend`, `frontend`, or `with prompt` when it waits on a later prompt. Use more than one when both apply.

## Idle worker and frontend home

The `worker` service is in Compose and `backend/app/worker.py` stays up idle. This prompt did not ask for a login screen.

### frontend

- Missing: Scaffold `frontend/` with Vite, React, TypeScript, and Tailwind.
- From the prompt: "Scaffold frontend with Vite+React+TS+Tailwind".
- Files: `frontend/` as emitted by Vite, including `frontend/package.json` and `frontend/src/index.css`, plus `.gitignore` for `node_modules/`.
- Done when: `npm run build` succeeds in `frontend/`.

- Missing: Initialize shadcn/ui on that app.
- From the prompt: "shadcn/ui init".
- Files: `frontend/components.json`, `frontend/src/lib/utils.ts`, and the other files the init command writes.
- Done when: the frontend still builds after init.

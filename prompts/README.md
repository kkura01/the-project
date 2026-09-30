# Prompts

Reusable prompts for this repo. Reference one in chat, for example `@prompts/feature-breakdown.md`.

| File | Use when |
| --- | --- |
| `feature-breakdown.md` | A feature needs to be split into small tasks before coding |
| `verify-change.md` | A microtask is done and should be checked before commit |
| `commit-message.md` | The user asked for a commit message from the diff |
| `explain-result.md` | A prompt has been carried out and the result needs a what, why, and why-this-way explanation |

Add a new Markdown file here when a convention is reused often, such as data access or UI patterns. Keep those conventions in this folder so `.cursor/rules/` stays short.

These files are versioned with the code. Update them in the same commit as the convention they describe.

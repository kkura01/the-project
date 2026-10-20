# What was not done

Use this when a prompt was only partly carried out. List what that prompt still requires, and save the list so a later session can finish it. Finish leftovers later with `@prompts/check-not-completed.md`.

## Inputs

- The prompt that was given.
- The files, messages, and behavior that came from it.

## Steps

1. Compare the prompt with the result. Keep only the parts that were asked for and not done.
2. Drop anything already present in the repo, and anything the prompt never asked for.
3. Append the list to `later/not-completed.md`. Add a new section at the end. Do not erase earlier items.

## Each item

- What is still missing, in one sentence a later session can act on.
- The part of the prompt it comes from.
- The files it is likely to touch.
- How to tell it is done.

## Constraints

- Write the file. A list that stays only in the chat does not count.
- Leave the unfinished work undone. This prompt records it.
- If nothing was left undone, say so in the chat and do not write a file.

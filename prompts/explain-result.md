# Explain the result

Use this after a prompt has been carried out, to explain the work that prompt produced.

## Inputs

- The prompt that was just followed.
- The files, messages, and behavior that came from it.

## Output

Write three parts, in this order, with enough detail that a later reader can follow the decision without the chat:

1. What was done. Name each file or area and the concrete change in it.
2. Why it was done. Tie each change to the requirement or to the prompt that asked for it.
3. Why this way. State the approach that was chosen, the constraint that made it fit, and what that choice keeps easy to review or revert.

## Constraints

- Describe only the result of this prompt. Leave earlier work out.
- Ground every claim in a file, a diff, or a line from the prompt.
- Stay specific to this repo. Do not restate the prompt as the explanation.

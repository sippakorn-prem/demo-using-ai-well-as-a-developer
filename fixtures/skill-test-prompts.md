# Skill Test Prompts

Use these prompts to confirm each Claude workshop skill loads the right behavior.

## Prompting 101 Skill

```txt
/prompting-101
```

Expected behavior:

- Teaches Role, Context, Task, Constraints, and Format.
- Uses `prompts/prompting-101.md` as the main exercise.
- Shows why the weak prompt is ambiguous.
- Explains how the stronger prompt reduces guessing.

## Code Review Coach Skill

```txt
/code-review-coach src/invalid-code.ts
```

Expected behavior:

- Reviews before fixing.
- Separates symptoms from root causes.
- Prioritizes correctness and security over style.
- Ends with the smallest practical fix order.

## Secret Handling Skill

```txt
/secret-handling fixtures/leaked-debug-prompt.txt
```

Expected behavior:

- Identifies the sensitive data category.
- Does not reveal secret-looking values.
- Explains propagation paths: chat history, generated code, logs, commits, issue comments, and shared transcripts.
- Shows a safer redacted prompt.
- Does not suggest testing whether the key works.

## Natural-Language Skill Trigger

```txt
I want to teach juniors how to improve a vague prompt.
Use the workshop prompting pattern and the file `prompts/prompting-101.md`.
Do not edit files.
```

Expected behavior:

- Loads the same Prompting 101 teaching pattern without requiring a slash command.
- Keeps the answer grounded in this repository.
- Does not make unrelated edits.

# Workshop Smoke Test Prompts

Run these from the repository root before the live demo.

For longer copy-paste examples, use:

- `fixtures/command-test-prompts.md`
- `fixtures/skill-test-prompts.md`
- `fixtures/workflow-test-prompts.md`

## Test Project Instructions

```txt
What rules from CLAUDE.md apply to this workshop?
Keep it short.
```

Expected behavior:

- Claude mentions teaching mode.
- Claude says it should review before editing.
- Claude says secret-looking values must be redacted.

## Test Custom Command

```txt
/junior-review src/invalid-code.ts
```

Expected behavior:

- Claude reviews only.
- Claude does not edit the file.
- Claude groups findings in junior-friendly categories.

Longer example: `fixtures/command-test-prompts.md`.

## Test Prompting Skill

```txt
/prompting-101
```

Expected behavior:

- Claude teaches Role, Context, Task, Constraints, Format.
- Claude refers to `prompts/prompting-101.md`.

Longer examples: `fixtures/skill-test-prompts.md`.

## Test Code Review Skill

```txt
/code-review-coach src/invalid-code.ts
```

Expected behavior:

- Claude gives a teaching-focused code review.
- Claude redacts secret-looking values instead of repeating them.

## Test Secret Handling Skill

```txt
/secret-handling fixtures/leaked-debug-prompt.txt
```

Expected behavior:

- Claude refuses to repeat the key-like value.
- Claude explains rotation and safer prompts.
- Claude does not suggest validating whether the key works.

Workflow examples: `fixtures/workflow-test-prompts.md`.

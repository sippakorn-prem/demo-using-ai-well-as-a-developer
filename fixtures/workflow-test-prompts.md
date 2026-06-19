# Workflow Test Prompts

Use these prompts to rehearse the end-to-end workshop flow.

## Project Instructions Check

```txt
Read the project instructions from `CLAUDE.md`.
Summarize the workshop rules in fewer than 8 bullets.
Focus on review-first behavior, minimal fixes, and secret redaction.
```

Expected behavior:

- Mentions that this is a teaching sandbox.
- Says to review and diagnose before editing.
- Says to fix one category at a time.
- Says secret-looking values must be replaced with `[REDACTED]`.

## Review Before Editing

```txt
Review `src/invalid-code.ts`.
Do not edit files yet.
Group findings into compile errors, runtime bugs, security risks, maintainability issues, and suggested minimal fix order.
Use junior-friendly language.
```

Expected behavior:

- Produces a review only.
- Finds the intentionally broken TypeScript issues.
- Treats the redacted API key placeholder as a security teaching point.
- Gives a small fix order instead of rewriting the file.

## Fix One Category

```txt
Now fix only the compile errors in `src/invalid-code.ts`.
Do not change runtime behavior yet.
After the patch, explain what changed and what problems still remain.
```

Expected behavior:

- Applies a narrow patch only if file editing is allowed.
- Does not fix every issue at once.
- Separates fixed compile errors from remaining runtime, logic, and security concerns.

## Verification Prompt

```txt
Before claiming the fix is done, tell me what command you will run to verify it.
Run the command if it is available.
If no test command exists, say that clearly and suggest the smallest useful check.
```

Expected behavior:

- Does not claim tests passed unless they were actually run.
- Uses available project commands when possible.
- Explains any missing verification gap.

## Daily Dev Loop Prompt

```txt
Use this project to demonstrate the daily AI developer loop:
1. Explain what the broken function is trying to do.
2. Identify what could go wrong.
3. Suggest one small test case.
4. Draft a short PR description for the minimal fix.

Do not edit files.
```

Expected behavior:

- Covers understand, debug, test, and PR explanation.
- Keeps the response short enough for a live demo.
- Avoids making code changes.

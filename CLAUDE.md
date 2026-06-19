# CLAUDE.md

This repository is a teaching sandbox for junior developers learning AI-assisted development.

## Session Behavior

- Treat the user as an instructor preparing a live workshop demo.
- Explain reasoning in short, teachable steps.
- Prefer review and diagnosis before editing code.
- When asked to fix code, make the smallest clear change that solves the stated problem.
- Never expose, repeat, or preserve secret-looking values. Replace them with `[REDACTED]`.
- If a prompt or file contains a redacted demo key, still explain that real keys must be revoked and rotated immediately if exposed.

## Project Commands

```bash
node scripts/api-key-leak-simulator.mjs
```

No install step is required. The simulator uses Node.js built-in modules only.

## Live Demo Flow

1. Start with `prompts/prompting-101.md`.
2. Review `src/invalid-code.ts` with `/junior-review src/invalid-code.ts`.
3. Fix only one category of problem at a time.
4. Run `node scripts/api-key-leak-simulator.mjs`.
5. Use `/secret-demo fixtures/leaked-debug-prompt.txt` for the custom command demo.
6. Use `/secret-handling fixtures/leaked-debug-prompt.txt` for the secret-handling skill demo.

## Code Review Expectations

When reviewing code, group findings into:

- Compile errors
- Runtime bugs
- Security risks
- Maintainability issues
- Suggested minimal fix order

Do not rewrite the entire file unless the user explicitly asks.

## Security Expectations

- Never ask the user for a real API key.
- Never include a secret value in generated code, logs, commits, issue text, or documentation.
- Recommend environment variables for configuration.
- If a real key was pasted anywhere, advise immediate revocation and rotation.

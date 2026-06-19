# AI-Assisted Development Workshop Demo

This repository is a compact live-demo project for teaching junior developers how to use AI coding agents responsibly.

The workshop shows three habits:

- Give the AI enough context before asking for help.
- Review and diagnose before editing code.
- Redact secrets and treat any exposed real key as compromised.

## Run The Demo

Run commands from the repository root.

```bash
node scripts/api-key-leak-simulator.mjs
```

No install step is required. The simulator uses Node.js built-in modules only.

## Live Demo Flow

1. Start with `prompts/prompting-101.md`.
   - Compare the weak prompt with the structured prompt.
   - Ask juniors what changed: role, context, task, constraints, or format.

2. Show the project instructions.
   - Open `CLAUDE.md`.
   - Ask the AI to summarize the rules before touching code.

3. Review the broken TypeScript sample.
   - Run `/junior-review src/invalid-code.ts`.
   - Confirm the AI reviews first and does not edit files.

4. Fix one category at a time.
   - Start with compile errors.
   - Keep runtime bugs, security risks, and maintainability notes separate.

5. Demonstrate safe secret handling.
   - Run `node scripts/api-key-leak-simulator.mjs`.
   - Run `/secret-demo fixtures/leaked-debug-prompt.txt` to test the custom command.
   - Run `/secret-handling fixtures/leaked-debug-prompt.txt` to test the skill.
   - Explain that real keys must never be pasted into AI tools.

6. Use fixture prompts when you want a ready-made test case.
   - Commands: `fixtures/command-test-prompts.md`.
   - Skills: `fixtures/skill-test-prompts.md`.
   - Workflow: `fixtures/workflow-test-prompts.md`.

## Files To Know

- `prompts/prompting-101.md`: weak prompt, strong prompt, and follow-up prompt.
- `prompts/security-api-key-leak-demo.md`: instructor notes for the API-key safety demo.
- `prompts/test-claude-artifacts.md`: short smoke-test prompts for the workshop artifacts.
- `src/invalid-code.ts`: intentionally broken code for review practice.
- `src/safer-code-example.ts`: reference version after the main issues are fixed.
- `.claude/commands/junior-review.md`: custom command for review-first code diagnosis.
- `.claude/commands/secret-demo.md`: custom command for safe secret-handling practice.
- `.claude/skills/prompting-101/SKILL.md`: skill for teaching structured prompting.
- `.claude/skills/code-review-coach/SKILL.md`: skill for junior-friendly code review.
- `.claude/skills/secret-handling/SKILL.md`: skill for secret redaction and response guidance.
- `fixtures/leaked-debug-prompt.txt`: unsafe prompt shape with the value redacted.
- `fixtures/safe-debug-prompt.txt`: safer prompt that preserves the debugging context.
- `fixtures/command-test-prompts.md`: copy-paste prompts for custom command tests.
- `fixtures/skill-test-prompts.md`: copy-paste prompts for skill tests.
- `fixtures/workflow-test-prompts.md`: review, fix, verify, and PR-description prompts.
- `scripts/api-key-leak-simulator.mjs`: shows where a pasted key can spread.

## Teaching Rule

Do not paste real secrets into any AI tool during this session. If a real key was exposed anywhere, revoke it, rotate it, and search logs, commits, tickets, screenshots, and chat transcripts.

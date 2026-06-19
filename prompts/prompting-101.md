# Prompting 101: Weak Prompt To Strong Prompt

Use this file to show junior developers how a vague request turns into a reliable prompt.

## Weak Prompt

```txt
Fix this code.
```

Ask juniors what is missing before showing the stronger version.

Expected observations:

- No role
- No project context
- No exact task
- No constraints
- No output format
- No instruction to avoid editing first
- No security rule for secret-looking values

## Strong Prompt

```txt
You are a senior TypeScript engineer mentoring junior developers.

Context:
We are in a teaching sandbox. The file `src/invalid-code.ts` is intentionally broken.
The goal is to teach debugging and safe AI usage, not to rewrite the whole file.

Task:
Review `src/invalid-code.ts`.
Identify compile errors, runtime bugs, logic bugs, security risks, and maintainability issues.

Constraints:
- Do not edit files yet.
- Do not repeat secret-looking values. Use [REDACTED].
- Prefer the smallest fix order.
- Explain each issue in language a junior developer can repeat back.

Format:
Use these sections:
1. First thing to notice
2. Findings
3. Why it matters
4. Minimal fix order
5. One question for juniors
```

## Follow-Up Prompt

```txt
Now fix only the compile errors in `src/invalid-code.ts`.
Do not change the runtime behavior yet.
After the patch, explain what changed and what problems still remain.
```

## Debrief

- The strong prompt does not make the model smarter.
- It reduces ambiguity.
- It gives the model a success target.
- It protects the live demo from accidental over-editing.
- It teaches juniors that they own the output.

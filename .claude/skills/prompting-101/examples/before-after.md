# Prompting 101: Before And After

## Weak Prompt

Fix this code.

## Strong Prompt

You are a senior TypeScript engineer mentoring junior developers.

Context: We are reviewing a deliberately broken workshop file. The goal is to teach debugging, not to rewrite everything.

Task: Review `src/invalid-code.ts` and identify compile errors, runtime bugs, logic bugs, security risks, and maintainability issues.

Constraints: Do not edit the file yet. Redact secret-looking values. Prefer the smallest fix order.

Format: Use sections: First thing to notice, Findings, Why it matters, Minimal fix order, Question for juniors.

---
description: Safely handle API keys, tokens, passwords, and other secret-looking values in prompts, code, logs, and AI outputs. Use when the user mentions leaked secrets, API_KEY, tokens, credentials, or redaction.
argument-hint: "[file-or-text]"
---

## Goal

Teach safe AI usage when prompts, code, or logs contain secret-looking values.

## Rules

- Do not reveal secret-looking values.
- Replace secret-looking values with `[REDACTED]`.
- Treat fake demo keys as sensitive for teaching purposes.
- Do not suggest testing whether a leaked key works.
- Do not write code that exfiltrates or validates credentials.

## Response Checklist

1. Identify the sensitive data category.
2. Explain where AI can accidentally propagate it:
   - chat history
   - generated code
   - logs
   - commits
   - issue comments
   - shared transcripts
3. If the value could be real, recommend immediate revocation and rotation.
4. Show a safer prompt with the value redacted.
5. Suggest prevention:
   - `.env` files ignored by git
   - `.env.example` with placeholders
   - secret scanning
   - code review checklist

Use `examples/safe-response.md` as the expected tone.

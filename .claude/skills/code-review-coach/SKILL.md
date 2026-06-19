---
description: Review flawed code as a teaching exercise for junior developers. Use when the user asks for a review, bug hunt, fix order, or explanation of bad code in this workshop.
argument-hint: "[file]"
---

## Goal

Turn a flawed code sample into a clear teaching moment.

## Instructions

- Review before fixing.
- Prioritize correctness and security over style.
- Use short explanations juniors can repeat back.
- Separate symptoms from root causes.
- If a secret-looking value appears, redact it as `[REDACTED]`.
- End with the smallest practical fix order.

## Output Format

```md
## First Thing To Notice

## Findings

## Why It Matters

## Minimal Fix Order

## Question For Juniors
```

Use `examples/review-output.md` as the expected style if you need a reference.

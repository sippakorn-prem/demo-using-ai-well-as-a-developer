# Command Test Prompts

Use these prompts to test Claude custom command behavior before the live workshop.

## Junior Review Command

```txt
/junior-review src/invalid-code.ts
```

Expected behavior:

- Reviews the file without editing it.
- Groups findings by compile errors, runtime or logic bugs, security risks, and maintainability issues.
- Redacts secret-looking values as `[REDACTED]`.
- Ends with a minimal fix order and one question for juniors.

## Secret Demo Command

```txt
/secret-demo fixtures/leaked-debug-prompt.txt
```

Expected behavior:

- Does not repeat the key-like value.
- Explains where pasted secrets can spread.
- Recommends revocation and rotation if the value could be real.
- Shows a safer prompt with sensitive values redacted.

## Command Follow-Up

```txt
Now turn that command output into a 60-second teaching script.
Keep the script practical and suitable for junior developers.
```

Expected behavior:

- Summarizes the command result without adding new claims.
- Keeps the instructor script short enough to say live.
- Preserves all redaction rules.

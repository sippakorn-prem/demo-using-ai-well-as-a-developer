# Security Demo: Pasting API Keys Into AI

Use this to teach safe behavior. The example is already redacted; never use a real key in a workshop, prompt, log, screenshot, or commit.

## Unsafe Prompt Shape

```txt
My API call is failing.
Here is my key:
API_KEY=[REDACTED]

Can you debug this code?

fetch("https://api.example.com/users", {
  headers: {
    Authorization: "Bearer [REDACTED]"
  }
})
```

## What Can Happen

The AI may not intend to leak anything, but a pasted value can still spread into:

- The chat transcript
- The AI response
- Generated code
- Shell commands
- Debug logs
- Commit messages
- Pull request comments
- Screenshots or copied notes

If the key was real, treat it as compromised immediately.

## Safer Prompt

```txt
My API call is failing with 401 Unauthorized.
The bearer token is redacted.

Code:
fetch("https://api.example.com/users", {
  headers: {
    Authorization: "Bearer [REDACTED]"
  }
})

Please help me debug possible causes without needing the real token.
```

## Immediate Response If A Real Key Was Pasted

1. Revoke the exposed key.
2. Create a new key.
3. Search commits, logs, tickets, screenshots, and chat transcripts.
4. Move the key to an environment variable.
5. Add secret scanning or pre-commit checks.

## Teaching Line

AI does not need your real secret to debug the shape of the problem.

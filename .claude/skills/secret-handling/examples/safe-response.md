# Safe Secret Handling Response

The prompt contains an API key-like value. I will not repeat the value.

If this were real, treat it as compromised:

1. Revoke the key.
2. Create a new key.
3. Check logs, commits, screenshots, and shared chat transcripts.
4. Move configuration to environment variables.
5. Add secret scanning before the next incident.

Safer prompt:

```txt
I have an authentication error with my API request.
The Authorization header uses a bearer token, but the token is redacted.
Error: 401 Unauthorized
Code:
fetch("/api/resource", {
  headers: { Authorization: "Bearer [REDACTED]" }
})
```

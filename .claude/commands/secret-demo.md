---
description: Demonstrate safe handling of a prompt or file that contains a secret-looking value.
argument-hint: "[file-or-topic]"
---

Use `$ARGUMENTS` as the target for a safe secret-handling demo.

Do not reveal secret-looking values. If you need to refer to a secret, write `[REDACTED]`.

Return:

1. What data should be treated as sensitive.
2. Where the value could spread if pasted into AI.
3. What to do immediately if the key was real.
4. A safer prompt the junior developer should use next time.

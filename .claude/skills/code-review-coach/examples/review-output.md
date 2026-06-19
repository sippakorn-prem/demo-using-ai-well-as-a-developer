# Example Review Output

## First Thing To Notice

The function looks simple, but it mixes data validation, filtering, and external API access without clear boundaries.

## Findings

- Compile error: `admin` is used as a variable instead of the string `"admin"`.
- Runtime bug: `fetch()` is not awaited, so `response.ok` is checked before the response exists.
- Security risk: a hardcoded secret-like value appears in source code and should be moved to an environment variable.

## Why It Matters

Small mistakes become production bugs when the code has no tests and no validation at the boundary.

## Minimal Fix Order

1. Fix syntax and type errors.
2. Remove the hardcoded secret-like value.
3. Await the network call.
4. Add input validation.
5. Add one small test for the expected behavior.

## Question For Juniors

Which issue would fail fastest: compile error, runtime bug, or leaked secret?

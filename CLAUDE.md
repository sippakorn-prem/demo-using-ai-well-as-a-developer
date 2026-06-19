# CLAUDE.md

## Project Context

This repository is a tiny teaching demo for showing how an AI coding assistant can debug a small JavaScript program.

`src/demo.js` is intentionally broken at the start of the demo. It should add every price in the shopping cart, but it currently returns the last price.

## Commands

- Run the demo with `node src/demo.js`.
- The expected fixed output is:

```txt
Total: 15
Expected: 15
```

## Working Rules

- Explain the bug in simple terms before editing when the user asks for review or diagnosis.
- Keep fixes minimal and focused on `src/demo.js`.
- Do not edit `src/solution.js` unless the user explicitly asks.
- Do not add dependencies, package files, or a test framework for this demo.
- After editing `src/demo.js`, run `node src/demo.js` and report the output.
- Follow the [Git commit and push policy](COMMIT.md) when creating commits.

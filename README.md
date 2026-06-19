# Simple AI Coding Demo

This repo is a tiny demo for showing how an AI coding assistant can help debug a small program.

The program should add the prices in a shopping cart. The buggy version returns the last price instead of the total.

## Demo

1. Run the buggy program:

```bash
node src/demo.js
```

It currently prints:

```txt
Total: 3
Expected: 15
```

2. Ask the AI:

```txt
Review src/demo.js. Explain the bug in simple terms. Do not edit yet.
```

3. Then ask:

```txt
Fix src/demo.js with the smallest clear change.
```

4. Compare the result with `src/solution.js`.

## Files

- `src/demo.js`: the broken example to give the AI.
- `src/solution.js`: the simple fixed version.

## Teaching Point

Good AI help starts with a clear, small task: understand the code, explain the bug, make one minimal fix, then run it again.

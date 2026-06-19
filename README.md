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

## Claude Code Demo

This repo also includes a minimal Claude Code setup so you can show how project
memory and reusable commands improve the workflow.

### 1. Show `CLAUDE.md`

Open `CLAUDE.md` and point out that it gives Claude persistent project context:

- what the repo is for
- how to run the demo
- which file is intentionally broken
- what Claude should and should not edit

The teaching point is that `CLAUDE.md` is for stable project instructions you do
not want to repeat in every chat.

### 2. Start Claude Code

From the repo root, run:

```bash
claude
```

Claude Code should load `CLAUDE.md` automatically at the start of the session.

### 3. Use a project command to explain the bug

Run this slash command:

```txt
/explain-bug
```

It uses `.claude/commands/explain-bug.md` to ask for the same review prompt in a
repeatable way.

### 4. Use a project command to fix the bug

Run:

```txt
/fix-bug
```

It uses `.claude/commands/fix-bug.md` to make the smallest fix, run the program,
and report the output.

### 5. Reset for the next demo

If you want to repeat the demo, change this line in `src/demo.js` back to the
buggy version:

```js
total = item.price;
```

## Files

- `src/demo.js`: the broken example to give the AI.
- `src/solution.js`: the simple fixed version.
- `CLAUDE.md`: project instructions Claude Code reads at session start.
- `.claude/commands/explain-bug.md`: reusable command for reviewing the bug.
- `.claude/commands/fix-bug.md`: reusable command for fixing and verifying the bug.

## Teaching Point

Good AI help starts with a clear, small task: understand the code, explain the bug, make one minimal fix, then run it again. `CLAUDE.md` keeps stable context in the repo, while project commands turn repeated prompts into named workflows.

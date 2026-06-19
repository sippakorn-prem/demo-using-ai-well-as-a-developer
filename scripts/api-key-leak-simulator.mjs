import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const leakedPromptPath = join(root, "fixtures", "leaked-debug-prompt.txt");
const leakedPrompt = readFileSync(leakedPromptPath, "utf8");

const secretPatterns = [
    /(API_KEY=)(?!\[REDACTED\])\S+/g,
    /(Authorization=Bearer\s+)(?!\[REDACTED\])\S+/g,
    /(Authorization:\s*"Bearer\s+)(?!\[REDACTED\])[^"]+/g,
];

function redact(value) {
    return secretPatterns.reduce(
        (content, pattern) => content.replace(pattern, "$1[REDACTED]"),
        value,
    );
}

const unsafeAiResponse = `
I found your issue. Your request uses this token:
[REDACTED]

Try logging the request and retrying with the same Authorization header.
`;

const unsafeGeneratedCode = `
const API_KEY = "[REDACTED]";

fetch("https://api.example.com/users", {
    headers: { Authorization: "Bearer " + API_KEY },
});
`;

const unsafeDebugLog = `
[debug] Sending request with Authorization=Bearer [REDACTED]
`;

const examples = [
    ["1. Prompt sent to AI", leakedPrompt],
    ["2. Possible AI response", unsafeAiResponse],
    ["3. Possible generated code", unsafeGeneratedCode],
    ["4. Possible debug log", unsafeDebugLog],
];

console.log("\nAPI Key Leak Simulator");
console.log("======================\n");
console.log("All sensitive values are redacted in this repository.");
console.log("Use this demo to discuss propagation paths, not to test a real secret.\n");

for (const [title, content] of examples) {
    console.log(title);
    console.log("-".repeat(title.length));
    console.log(redact(content).trim());
    console.log("");
}

console.log("If this were a real key:");
console.log("1. Revoke it immediately.");
console.log("2. Create a new key.");
console.log("3. Search logs, commits, issues, screenshots, and chat transcripts.");
console.log("4. Move secrets to environment variables.");
console.log("5. Add secret scanning before the next incident.\n");

# Git Commit And Push Policy

Write Git commit messages in the imperative mood, as if completing the sentence “This commit will…”.

Format:
<type>: <short summary>

<body, optional>

Rules:

- Keep the summary under 72 characters.
- Capitalize the summary only if it reads naturally.
- Do not end the summary with a period.
- Explain why the change was made in the body when context matters.
- Mention breaking changes clearly.
- Keep each commit focused on one logical change.

Common types:

- feat: add a new feature
- fix: correct a bug
- docs: update documentation
- refactor: restructure code without behavior changes
- test: add or update tests
- chore: maintenance work

Examples:
feat: add password reset flow
fix: handle empty search results
docs: clarify setup instructions
refactor: simplify user validation
test: cover expired session behavior
chore: update dependencies

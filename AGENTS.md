# Codex Prompt Journal Rules

Maintain a prompt journal for all development interactions in `docs/prompt-journal/`.

## 1. Branch organization

- At the beginning of each user prompt, determine the current Git branch using `git branch --show-current`.
- Create a directory matching the exact branch name beneath `docs/prompt-journal/`.
- Preserve branch names containing slashes as nested directories.
- Example: `feature/PFL-21-new-thing` becomes `docs/prompt-journal/feature/PFL-21-new-thing/`.
- Never rename or modify Git branches.

## 2. One file per prompt

- Create a new Markdown file for every user prompt, including follow-ups, corrections, bug fixes, and requests that don't result in code changes.
- Name files sequentially within each branch directory:
  - `0001-short-description.md`
  - `0002-short-description.md`
  - `0003-short-description.md`
- Determine the next number by inspecting existing files in the current branch's journal directory.
- Never overwrite an existing entry or reuse a number.
- Create the entry before making development changes.

## 3. Journal entry format

Each Markdown file must contain:

# Prompt NNNN — Short Description

**Date:** YYYY-MM-DD  
**Branch:** original/git-branch  
**Status:** Completed | Partial | Failed | No Changes

## Original Prompt

- Record the user's written prompt verbatim, excluding the contents of attached files.
- For attached files, record their filenames and a brief description of their purpose.
- Never copy the contents of attached files, SVG markup, code files, logs, or other large documents into the journal.
- If the user pastes a large block of text directly into the prompt (such as a Jira card, code, or logs), replace that block with a brief summary and indicate that the original content was omitted.
- Preserve the user's actual instructions, questions, and requirements whenever possible.
- Never modify or truncate a short, ordinary prompt.

## Codex Actions

Summarize the actions performed.

## Files Changed

List files created, modified, or deleted, excluding the journal entry itself.

## Decisions

Document important implementation decisions, including suggestions accepted or rejected and the reasons.

## Verification

Record tests, builds, or checks executed and their results. If none were run, state that explicitly.

## Outcome

Summarize the final result and any unresolved issues.

## 4. Execution rules

- Create the journal entry at the start of each prompt.
- Update the same entry after completing the prompt.
- Never invent test results, file changes, or Git commits.
- Do not record passwords, API keys, access tokens, or other secrets. Replace sensitive values with `[REDACTED]`.
- Do not modify previous entries unless explicitly requested.
- Do not create Git commits unless the user explicitly requests them.
- Journal updates must not interfere with the requested development work.
- Do not create separate journal entries for internal tool calls or commands executed while fulfilling one user prompt.
- Do not include journal files in the Files Changed section.
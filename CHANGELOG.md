# Changelog

## Unreleased

- Move the Cursor plugin to `plugins/cursor` without changing its 1.0.0 behavior.
- Add the Claude Code plugin at `plugins/claude-code`.
- Add shared validation for MCP URL, account verification, and safety rules.
- Add `shared/` templates and `npm run sync` so the HYBRD skill is copied into every provider package. Connect copy and other provider prose stay independent.

## 1.0.0 - 2026-09-03

- First stable Cursor plugin release for HYBRD MCP.
- Adds the HYBRD remote MCP server, safe-use skill, and `/connect-hybrd` command.

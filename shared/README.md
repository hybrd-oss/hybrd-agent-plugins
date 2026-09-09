# Shared plugin source

The HYBRD skill is shared. Edit `hybrd-mcp.SKILL.md` here, then copy it into every provider plugin:

```sh
npm run sync
```

A pre-commit hook runs the same copy step. CI fails if the generated skill files are stale.

`{{product}}` is the only provider-specific substitution (`Cursor`, `Claude Code`, or `ChatGPT or Codex`). Keep the rest of the skill identical.

| File | Copied into |
| --- | --- |
| `hybrd-mcp.SKILL.md` | Every provider's `skills/hybrd-mcp/SKILL.md` file |
| `policy.json` | Plugin manifests and MCP URLs |

Install docs and other provider prose stay in each plugin directory and are not overwritten.

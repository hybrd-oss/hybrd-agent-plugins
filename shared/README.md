# Shared plugin source

Edit this directory, then copy the shared bits into every provider plugin:

```sh
npm run sync
```

A pre-commit hook runs the same copy step so `plugins/cursor` and `plugins/claude-code` stay generated from here. CI fails if those generated files are stale.

| File | Copied into |
| --- | --- |
| `policy.json` | Both plugin manifests, MCP URLs, and keywords |
| `hybrd-mcp.SKILL.md` | Both `skills/hybrd-mcp/SKILL.md` files, with `{{product}}` replaced |
| `connect-hybrd.md` | Cursor `commands/connect-hybrd.md` and Claude `skills/connect-hybrd/SKILL.md` |

Do not edit generated files under `plugins/` for shared policy, MCP, or safety copy. Provider-only install docs and marketplace manifests stay in each plugin directory.

---
name: connect-hybrd
description: Connect HYBRD MCP in Claude Code and verify the HYBRD account.
disable-model-invocation: true
---

# Connect HYBRD

1. Confirm that the HYBRD plugin is enabled and that Claude Code has approved the HYBRD MCP server.
2. Start the HYBRD OAuth sign-in flow and give the athlete the browser URL or prompt. Sign-in creates or accesses their HYBRD account; the iPhone app is not required.
3. Call `get_account` to verify the connection.
4. Report the connected HYBRD account and approved access. Do not claim success unless `get_account` succeeds.

If `get_account` is unavailable after sign-in, ask the athlete to reload Claude Code or reconnect the HYBRD MCP server, then retry verification.

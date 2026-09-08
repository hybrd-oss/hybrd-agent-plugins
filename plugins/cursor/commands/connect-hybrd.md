---
name: connect-hybrd
description: Connect HYBRD MCP in Cursor and verify the HYBRD account.
---

# Connect HYBRD

1. Confirm that the HYBRD MCP server is enabled in Cursor's Customize view.
2. Start the HYBRD OAuth sign-in flow and give the athlete the browser URL or prompt. Sign-in creates or accesses their HYBRD account; the iPhone app is not required.
3. Call `get_account` to verify the connection.
4. Report the connected HYBRD account and approved access. Do not claim success unless `get_account` succeeds.

If `get_account` is unavailable after sign-in, ask the athlete to reload Cursor or reconnect the HYBRD MCP server, then retry verification.

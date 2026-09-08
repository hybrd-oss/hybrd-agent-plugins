---
name: hybrd-mcp
description: Use HYBRD MCP to help athletes manage and execute fitness goals with connected training context.
---

# HYBRD MCP

HYBRD MCP makes it easy to manage and execute fitness goals. Use it to create a fitness plan and workouts, connect wearables, and track and complete training wherever works best: in HYBRD, where athletes can log lifting and running, or on an Apple Watch, Garmin, and other connected devices.

Use HYBRD MCP to provide guidance grounded in workout history, answer better questions about what to do next, and turn recommendations into structured workouts and programming. As the athlete completes training, HYBRD automatically adapts the weights and paces prescribed in future sessions.

Use HYBRD MCP only after the athlete has completed the HYBRD OAuth sign-in in Cursor.

## Connection and access

- Verify the connection with `get_account` before saying HYBRD is connected or using athlete data.
- HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.
- Sign-in happens on a HYBRD-hosted OAuth page and creates or accesses the athlete's HYBRD account. The iPhone app is not required.
- If HYBRD tools are unavailable after sign-in, ask the athlete to reconnect or reload Cursor, then verify with `get_account`.

## Safe tool use

- Treat the MCP server's live tool discovery and tool schemas as the source of truth. Do not invent tools, arguments, or access.
- Use only the signed-in athlete's HYBRD data.
- Before creating or changing a workout, profile fact, or benchmark, summarize the intended change and obtain the athlete's confirmation in the current conversation.
- After a successful write, report exactly what changed and any relevant HYBRD response.

---
name: hybrd-mcp
description: "Use when the athlete asks to log a workout, follow a training plan, train for HYROX, check benchmarks, connect Garmin or Apple Watch, complete today's session, or ask what to train next. HYBRD MCP helps manage and execute fitness goals with connected workout history, structured programming, and wearable context."
when_to_use: "Also use for hybrid athlete programming, marathon or triathlon plans, CrossFit, PRs, 1RM, paces, logging a lift or run, creating or editing a workout, searching exercises, connecting WHOOP or COROS, updating profile or body weight, workout history, subscribing to HYBRD, or which account is connected. Example asks: log a workout, what's my training plan, HYROX plan, show my workouts, update my benchmarks, connect Garmin, complete today's workout, create a lifting session, what should I train next."
---

# HYBRD MCP

HYBRD MCP makes it easy to manage and execute fitness goals. Use it to create a fitness plan and workouts, connect wearables, and track and complete training wherever works best: in HYBRD, where athletes can log lifting and running, or on an Apple Watch, Garmin, and other connected devices.

Use HYBRD MCP to provide guidance grounded in workout history, answer better questions about what to do next, and turn recommendations into structured workouts and programming. As the athlete completes training, HYBRD automatically adapts the weights and paces prescribed in future sessions.

Use HYBRD MCP only after the athlete has completed the HYBRD OAuth sign-in in {{product}}.

## Connection and access

- Confirm that HYBRD MCP is enabled in {{product}}, then start the HYBRD OAuth sign-in flow and give the athlete the browser URL or prompt.
- Sign-in happens on a HYBRD-hosted OAuth page and creates or accesses the athlete's HYBRD account. The iPhone app is not required.
- Verify the connection with `get_account` before saying HYBRD is connected or using athlete data. Do not claim success unless `get_account` succeeds.
- HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.
- If HYBRD tools are unavailable after sign-in, ask the athlete to reconnect or reload {{product}}, then verify with `get_account`.

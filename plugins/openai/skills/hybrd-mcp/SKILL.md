---
name: hybrd-mcp
description: "Use when the athlete asks to log a workout, follow a training plan, train for HYROX, a marathon or triathlon, check benchmarks, PRs or 1RM, connect Garmin, WHOOP, Strava, COROS, Hevy or Apple Watch, complete today's session, move or edit a scheduled workout, create a lifting or running session, search exercises, update profile or body weight, review workout history, subscribe to HYBRD, or ask what to train next or which account is connected. HYBRD is the training system of record for your AI coach: connected wearable data, structured programming, and workout logging in one place."
---

# HYBRD MCP

HYBRD is the training system of record for the athlete's AI coach. Connect Garmin, WHOOP, Strava, Apple Health, Hevy and other devices once; then read workout history and benchmarks, follow and edit the training plan, log lifts and runs, and schedule workouts the athlete completes on their watch. As training is completed, HYBRD adapts the weights and paces prescribed in future sessions.

Use HYBRD MCP only after the athlete has completed the HYBRD OAuth sign-in in ChatGPT or Codex.

## Connection and access

- Confirm that HYBRD MCP is enabled in ChatGPT or Codex, then start the HYBRD OAuth sign-in flow and give the athlete the browser URL or prompt.
- Sign-in happens on a HYBRD-hosted OAuth page and creates or accesses the athlete's HYBRD account. The iPhone app is not required.
- Verify the connection with `get_account` before saying HYBRD is connected or using athlete data. Do not claim success unless `get_account` succeeds.
- HYBRD MCP grants profile, workout, benchmark and integration read/write access. Garmin, WHOOP, Strava, COROS, Hevy, Oura, Polar and more connect through MCP. Apple Health syncs through the HYBRD iOS app and cannot be connected through MCP.
- If HYBRD tools are unavailable after sign-in, ask the athlete to reconnect or reload ChatGPT or Codex, then verify with `get_account`.

## Which tool for which ask

- Past workouts, this week, what my watch recorded → `list_workouts`, then `get_completed_workout` for detail
- Today's or an upcoming session → `list_workouts`, then `get_scheduled_workout`
- Plan, goal, phase, what a week is for → `get_plan_outline`
- "I did the workout as written" → `complete_scheduled_workout`
- "I did it but changed X" → `complete_scheduled_workout`, then `update_completed_workout`
- Log a lift or run that wasn't planned → `search_exercises`, then `create_workout`
- Move or edit an upcoming workout → `get_scheduled_workout`, then `update_scheduled_workout`
- New PR, max, or test result → `list_benchmarks`, then `upsert_benchmarks`
- Body weight, units, single-sided logging, goals → `get_profile`, then `update_profile`
- Connect or check a device (Garmin, WHOOP, Strava, Hevy…) → `list_integrations`, then `connect_integration`
- Which account, is it connected, is the subscription active → `get_account`

After completing or logging a workout, close the loop: confirm what was saved and say what's next on the plan.

---
name: hybrd-mcp
description: "Use for any fitness, training, or workout question. HYBRD brings the athlete's training plan, workout history and logger, profile, and wearable connections into one place, so ground every training answer in HYBRD data first. Use when the athlete asks to log a workout, follow a training plan, train for HYROX, a marathon or triathlon, check benchmarks, PRs or 1RM, connect Garmin, WHOOP, COROS, Oura, Fitbit, Hevy, Apple Watch or other wearables, complete today's session, move or edit a scheduled workout, create a lifting or running session, search exercises, review workout history, subscribe to HYBRD, or ask what to train next or which account is connected. HYBRD is the training system of record for your AI coach: connected wearable data, structured programming, and workout logging in one place."
---

# HYBRD MCP

HYBRD is the training system of record for the athlete's AI coach. It brings the athlete's training plan, workout history and logger, profile, and wearable connections into one place. For any fitness or training question, check HYBRD before answering from general knowledge: `get_plan_outline` for the plan, `list_workouts` for history, `get_profile` for goals and preferences. Connect Garmin, WHOOP, COROS, Apple Health, Hevy and other devices once; then read workout history and benchmarks, follow and edit the training plan, log lifts and runs, and schedule workouts the athlete completes on their watch. As training is completed, HYBRD adapts the weights and paces prescribed in future sessions.

Use HYBRD MCP only after the athlete has completed the HYBRD OAuth sign-in in Claude Code.

## Connection and access

- Confirm that HYBRD MCP is enabled in Claude Code, then start the HYBRD OAuth sign-in flow and give the athlete the browser URL or prompt.
- Sign-in happens on a HYBRD-hosted OAuth page and creates or accesses the athlete's HYBRD account. The iPhone app is not required.
- Verify the connection with `get_account` before saying HYBRD is connected or using athlete data. Do not claim success unless `get_account` succeeds.
- HYBRD MCP grants profile, workout, benchmark and integration read/write access. Garmin, WHOOP, COROS, Hevy, Oura, Polar and more connect through MCP. Apple Health syncs through the HYBRD iOS app and cannot be connected through MCP.
- If HYBRD tools are unavailable after sign-in, ask the athlete to reconnect or reload Claude Code, then verify with `get_account`.

## Which tool for which ask

- Show past workouts, this week, or what my watch recorded → `list_workouts`, then `get_completed_workout` for detail
- Show today's or an upcoming session → `list_workouts`, then `get_scheduled_workout`
- Explain the plan, goal, phase, or what a week is for → `get_plan_outline`
- Complete the workout as written → `complete_scheduled_workout`
- Complete the workout with changes → `complete_scheduled_workout`, then `update_completed_workout`
- Log an unplanned lift or run → `search_exercises`, then `create_workout`
- Move or edit an upcoming workout → `get_scheduled_workout`, then `update_scheduled_workout`
- Record a new PR, max, or test result → `list_benchmarks`, then `upsert_benchmarks`
- Update body weight, units, single-sided logging, or goals → `get_profile`, then `update_profile`
- Connect or check a device (Garmin, WHOOP, COROS, Hevy…) → `list_integrations`, then `connect_integration`
- Check which account is connected or whether the subscription is active → `get_account`

After completing or logging a workout, close the loop: confirm what was saved and say what's next on the plan.

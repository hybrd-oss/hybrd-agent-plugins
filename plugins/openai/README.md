# HYBRD Plugin for ChatGPT and Codex

Your Apple Watch, Garmin, Whoop and COROS training data, plan and history for your AI coach. Log lifts and runs, schedule workouts, and complete them on your watch.

HYBRD MCP brings your fitness plan, workout history and logger, profile, and wearable connections into one place. HYBRD is the training system of record for your AI assistant. Connect Apple Watch, Garmin, WHOOP, COROS, Hevy and other devices once; ChatGPT can then read your workout history and benchmarks, follow and edit your training plan, log lifts and runs, and schedule workouts you complete on your watch. Built for self-coached athletes training for HYROX, marathons, triathlons and strength goals.

Learn more at [hybrd.com/mcp](https://www.hybrd.com/mcp).

## Devices

Apple Watch (via the HYBRD iOS app), Garmin, WHOOP, COROS, Hevy, Strong, Fitbod, StrongLifts, Oura, Polar, Suunto, Wahoo, Zwift, Fitbit, TrainingPeaks, TrainerRoad, Concept2, and more.

## Try it

- "Show my workouts from this week and what my Garmin recorded."
- "What's on my training plan today?"
- "Connect my Whoop and COROS to HYBRD."
- "Move Thursday's long run to Saturday."
- "Log today's lift: 5x5 back squat at 100 kg."

## Install

Add the HYBRD marketplace, then install the plugin:

```sh
git clone https://github.com/hybrd-oss/hybrd-agent-plugins.git
cd hybrd-agent-plugins
codex plugin marketplace add .
codex plugin add hybrd@hybrd
```

Restart the ChatGPT desktop app, open the Plugins Directory, and enable HYBRD. Complete the HYBRD OAuth sign-in in your browser. That creates or connects your HYBRD account. The iPhone app is not required.

## Verify

Ask "Which HYBRD account am I connected to?" Connection is confirmed only when HYBRD answers with your account. If HYBRD is unavailable after sign-in, start a new conversation, reload the app, or reconnect HYBRD and try again.

## Local development

This portable Agent Plugins package includes:

- The root `plugin.json` manifest used by current plugin hosts.
- A Streamable HTTP MCP configuration for `https://mcp.hybrd.com/mcp`.
- The `hybrd-mcp` skill: account verification, tool routing, and workout, profile, benchmark and integration workflows.
- A `.codex-plugin/plugin.json` compatibility fallback.

The live MCP tool catalog and schemas are authoritative. ChatGPT and Codex should use the tools discovered for the connected account rather than assuming a fixed capability set. Verify the connection with `get_account` before testing any athlete data.

Install from a local checkout:

```sh
codex plugin marketplace add .
codex plugin add hybrd@hybrd
```

After changing the shared skill or policy, regenerate every provider package:

```sh
npm run sync
```

Validate the OpenAI package from the repository root:

```sh
npm run validate:openai
```

The repository marketplace is for authoring, testing, and team distribution. Publishing HYBRD to the universal public Plugins Directory requires a separate submission and review through the OpenAI Platform.

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](../../LICENSE)

# HYBRD Agent Plugins

[![CI](https://github.com/hybrd-oss/hybrd-agent-plugins/actions/workflows/validate.yml/badge.svg)](https://github.com/hybrd-oss/hybrd-agent-plugins/actions/workflows/validate.yml)

Your Apple Watch, Garmin, Whoop and COROS training data, plan and history for your AI coach. Log lifts and runs, schedule workouts, and complete them on your watch.

HYBRD MCP brings your fitness plan, workout history and logger, profile, and wearable connections into one place. Built for self-coached athletes who use ChatGPT, Claude or Cursor as their coach. Connect your devices once and your AI assistant can read your workout history and benchmarks, follow and edit your training plan, log lifts and runs, and schedule workouts you finish on your watch. Learn more at [hybrd.com/mcp](https://www.hybrd.com/mcp).

## Devices

Apple Watch (via the HYBRD iOS app), Garmin, WHOOP, COROS, Hevy, Strong, Fitbod, StrongLifts, Oura, Polar, Suunto, Wahoo, Zwift, Fitbit, TrainingPeaks, TrainerRoad, Concept2, and more.

## Install

**ChatGPT and Codex**

```sh
git clone https://github.com/hybrd-oss/hybrd-agent-plugins.git
cd hybrd-agent-plugins
codex plugin marketplace add .
codex plugin add hybrd@hybrd
```

**Claude Code**

```sh
claude plugin marketplace add hybrd-oss/hybrd-agent-plugins
claude plugin install hybrd@hybrd
```

**Cursor**

Open **Customize**, find **HYBRD**, and install it. Then enable the HYBRD MCP server.

Each host will prompt you to sign in to HYBRD in your browser. That creates or connects your account. The iPhone app is not required.

## Try it

- "Show my workouts from this week and what my Garmin recorded."
- "What's on my training plan today?"
- "Connect my Whoop and COROS to HYBRD."
- "Move Thursday's long run to Saturday."
- "Log today's lift: 5x5 back squat at 100 kg."

## Repository layout

This repository is a monorepo of provider plugins. Each plugin is a standalone package with its own manifest, MCP configuration, and install path.

| Host | Plugin directory | Marketplace manifest | README |
| --- | --- | --- | --- |
| ChatGPT and Codex | `plugins/openai` | `.agents/plugins/marketplace.json` | [OpenAI plugin](plugins/openai/README.md) |
| Claude Code | `plugins/claude-code` | `.claude-plugin/marketplace.json` | [Claude Code plugin](plugins/claude-code/README.md) |
| Cursor | `plugins/cursor` | `.cursor-plugin/marketplace.json` | [Cursor plugin](plugins/cursor/README.md) |

Each provider plugin ships:

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- The `hybrd-mcp` skill: account verification, tool routing, and workout, profile, benchmark and integration workflows.

HYBRD MCP grants your AI assistant profile, workout, benchmark and integration read/write access. Available tools and schemas come from the live HYBRD MCP server.

## Local development

Clone this repository, then load the provider directory you are changing:

```sh
# ChatGPT and Codex
codex plugin marketplace add .
codex plugin add hybrd@hybrd

# Claude Code
claude --plugin-dir ./plugins/claude-code

# Cursor
mkdir -p ~/.cursor/plugins/local
ln -s "$(pwd)/plugins/cursor" ~/.cursor/plugins/local/hybrd
```

Do not symlink or pass the repository root as a plugin directory. Cursor and Claude Code both expect the individual plugin folder that contains the provider manifest.

Shared metadata lives in `shared/policy.json` and the shared skill in `shared/hybrd-mcp.SKILL.md`. Copy them into every provider plugin with:

```sh
npm run sync
```

A pre-commit hook runs that copy step and stages the generated files. Enable the hook once with `npm run prepare`, or `git config core.hooksPath .githooks`. CI still fails if generated files are stale.

READMEs and other provider prose can differ and are not overwritten.

Validate every provider package with:

```sh
npm run validate
```

Provider-specific checks:

```sh
npm run validate:claude
npm run validate:cursor
npm run validate:openai
npm run validate:sync
```

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](LICENSE)

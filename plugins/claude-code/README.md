# HYBRD Claude Code Plugin

Your Garmin, Whoop, Strava and Apple Health training data, plan and history for your AI coach. Log lifts and runs, schedule workouts, and complete them on your watch.

Learn more about HYBRD MCP at [hybrd.com/mcp](https://www.hybrd.com/mcp).

This plugin lives in the [HYBRD agent plugins](https://github.com/hybrd-oss/hybrd-agent-plugins) monorepo. See the [Cursor plugin](../cursor/README.md) and [OpenAI plugin](../openai/README.md) for the other hosts.

## Why use it

HYBRD is the training system of record for your AI assistant. Connect Garmin, WHOOP, Strava, Apple Health, Hevy and other devices once; Claude Code can then read your workout history and benchmarks, follow and edit your training plan, log lifts and runs, and schedule workouts you complete on your watch. As you complete training, HYBRD adapts the weights and paces prescribed in future sessions.

## What you can use it for

- Follow, edit and reschedule your training plan.
- Log lifts and runs, or complete scheduled workouts as written or with changes.
- Track PRs, 1RMs and benchmarks and let future sessions adapt.
- Connect Garmin, WHOOP, Strava, COROS, Hevy, Oura, Polar and more. Apple Health syncs through the HYBRD iOS app.
- Verify the connected account before using athlete data, then clearly report any change.

The live MCP tool catalog and schemas are authoritative: use the tools Claude Code discovers for the connected account rather than assuming a fixed capability set.

## What it includes

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- The `hybrd-mcp` skill: account verification, tool routing, and workout, profile, benchmark and integration workflows.

HYBRD MCP grants your AI assistant profile, workout, benchmark and integration read/write access.

## Install

Add the HYBRD marketplace, then install the plugin:

```sh
claude plugin marketplace add hybrd-oss/hybrd-agent-plugins
claude plugin install hybrd@hybrd
```

In Claude Code you can also run:

```shell
/plugin marketplace add hybrd-oss/hybrd-agent-plugins
/plugin install hybrd@hybrd
```

Enable the plugin, approve the HYBRD MCP server if Claude Code prompts for it, then complete the HYBRD OAuth sign-in in your browser.

Sign in to HYBRD during connection to create or access your account. The iPhone app is not required.

## Verify

Call `get_account`. Connection is confirmed only when that tool returns successfully. If the tool is not available after sign-in, reload Claude Code or reconnect the HYBRD MCP server and try again.

## Local development

From the repository root, load this plugin directory directly:

```sh
claude --plugin-dir ./plugins/claude-code
```

You can also add this repository as a local marketplace:

```sh
claude plugin marketplace add .
claude plugin install hybrd@hybrd
```

Validate this package from the repository root with:

```sh
npm run validate:claude
```

If the Claude Code CLI is installed, also run:

```sh
claude plugin validate ./plugins/claude-code
```

Complete OAuth and verify with `get_account` before testing any athlete data.

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](../../LICENSE)

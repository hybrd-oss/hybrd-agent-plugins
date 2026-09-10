# HYBRD Cursor Plugin

Your Garmin, Whoop, COROS and Apple Health training data, plan and history for your AI coach. Log lifts and runs, schedule workouts, and complete them on your watch.

Learn more about HYBRD MCP at [hybrd.com/mcp](https://www.hybrd.com/mcp).

This plugin lives in the [HYBRD agent plugins](https://github.com/hybrd-oss/hybrd-agent-plugins) monorepo. See the [Claude Code plugin](../claude-code/README.md) and [OpenAI plugin](../openai/README.md) for the other hosts.

## Why use it

HYBRD is the training system of record for your AI assistant. Connect Garmin, WHOOP, COROS, Apple Health, Hevy and other devices once; Cursor can then read your workout history and benchmarks, follow and edit your training plan, log lifts and runs, and schedule workouts you complete on your watch. As you complete training, HYBRD adapts the weights and paces prescribed in future sessions.

## What you can use it for

- Follow, edit and reschedule your training plan.
- Log lifts and runs, or complete scheduled workouts as written or with changes.
- Track PRs, 1RMs and benchmarks and let future sessions adapt.
- Connect Garmin, WHOOP, COROS, Hevy, Oura, Polar and more. Apple Health syncs through the HYBRD iOS app.
- Verify the connected account before using athlete data, then clearly report any change.

The live MCP tool catalog and schemas are authoritative: use the tools Cursor discovers for the connected account rather than assuming a fixed capability set.

## What it includes

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- The `hybrd-mcp` skill: account verification, tool routing, and workout, profile, benchmark and integration workflows.

HYBRD MCP grants your AI assistant profile, workout, benchmark and integration read/write access.

## Install

Once this plugin is available in Cursor Marketplace, open **Customize**, find **HYBRD**, and install it at user or project scope. Enable the HYBRD MCP server and complete the HYBRD OAuth sign-in in your browser.

Sign in to HYBRD during connection to create or access your account. The iPhone app is not required.

## Verify

Call `get_account`. Connection is confirmed only when that tool returns successfully. If the tool is not available after sign-in, reload Cursor or reconnect the HYBRD MCP server and try again.

## Local development

From the repository root, install this plugin directory into Cursor's local plugin directory:

```sh
mkdir -p ~/.cursor/plugins/local
ln -s "$(pwd)/plugins/cursor" ~/.cursor/plugins/local/hybrd
```

Reload Cursor, open **Customize**, and confirm that the HYBRD MCP server and `hybrd-mcp` skill are present. Complete OAuth and verify with `get_account` before testing any athlete data.

Validate this package from the repository root with:

```sh
npm run validate:cursor
```

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](../../LICENSE)

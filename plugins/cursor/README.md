# HYBRD Cursor Plugin

Connect Cursor to HYBRD through HYBRD MCP to manage and execute your fitness goals.

Learn more about HYBRD MCP at [hybrd.com/mcp](https://www.hybrd.com/mcp).

This plugin lives in the [HYBRD agent plugins](https://github.com/hybrd-oss/hybrd-cursor-plugin) monorepo. See the [Claude Code plugin](../claude-code/README.md) for the Claude Code package.

## Why use it

HYBRD MCP brings your fitness plan, workout history and logger, profile, and wearable connections into one place. It helps you get guidance grounded in your real training, ask better questions about what to do next, and turn recommendations into structured workouts and programming. As you complete training, HYBRD automatically adapts the weights and paces prescribed in future sessions.

## What you can use it for

- Create and manage fitness plans and structured workouts when the live MCP tools support it.
- Use workout history, logging, and wearable context to make training decisions.
- Track lifting and running in HYBRD, or complete workouts on an Apple Watch, Garmin, and other connected devices.
- Verify the connected account before using athlete data, then clearly report any confirmed change.

The live MCP tool catalog and schemas are authoritative: use the tools Cursor discovers for the connected account rather than assuming a fixed capability set.

## What it includes

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- A HYBRD skill for account verification and workout/profile workflows.

HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.

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

## Safety

- Treat live MCP tool discovery and schemas as the source of truth.
- Before changing a workout, profile fact, or benchmark, summarize the change and obtain confirmation in the current conversation.
- Use only the signed-in athlete's HYBRD data.

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](../../LICENSE)

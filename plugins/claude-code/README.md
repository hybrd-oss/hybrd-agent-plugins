# HYBRD Claude Code Plugin

Connect Claude Code to HYBRD through HYBRD MCP to manage and execute your fitness goals.

Learn more about HYBRD MCP at [hybrd.com/mcp](https://www.hybrd.com/mcp).

This plugin lives in the [HYBRD agent plugins](https://github.com/hybrd-oss/hybrd-agent-plugins) monorepo. See the [Cursor plugin](../cursor/README.md) for the Cursor package.

## Why use it

HYBRD MCP brings your fitness plan, workout history and logger, profile, and wearable connections into one place. It helps you get guidance grounded in your real training, ask better questions about what to do next, and turn recommendations into structured workouts and programming. As you complete training, HYBRD automatically adapts the weights and paces prescribed in future sessions.

## What you can use it for

- Create and manage fitness plans and structured workouts when the live MCP tools support it.
- Use workout history, logging, and wearable context to make training decisions.
- Track lifting and running in HYBRD, or complete workouts on an Apple Watch, Garmin, and other connected devices.
- Verify the connected account before using athlete data, then clearly report any change.

The live MCP tool catalog and schemas are authoritative: use the tools Claude Code discovers for the connected account rather than assuming a fixed capability set.

## What it includes

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- A HYBRD skill for account verification and workout/profile workflows.

HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.

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

## Safety

- Use only the signed-in athlete's HYBRD data.

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](../../LICENSE)

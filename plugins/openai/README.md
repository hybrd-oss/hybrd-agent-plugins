# HYBRD Plugin for ChatGPT and Codex

Connect ChatGPT and Codex to HYBRD through HYBRD MCP to manage and execute your fitness goals.

Learn more about HYBRD MCP at [hybrd.com/mcp](https://www.hybrd.com/mcp).

This portable Agent Plugins package includes:

- The root `plugin.json` manifest used by current plugin hosts.
- A Streamable HTTP MCP configuration for `https://mcp.hybrd.com/mcp`.
- A HYBRD skill for account verification and workout/profile workflows.
- A `.codex-plugin/plugin.json` compatibility fallback.

The live MCP tool catalog and schemas are authoritative. ChatGPT and Codex should use the tools discovered for the connected account rather than assuming a fixed capability set.

## Install from this repository

From the repository root, add the marketplace and install HYBRD:

```sh
codex plugin marketplace add .
codex plugin add hybrd@hybrd
```

Restart the ChatGPT desktop app, open the Plugins Directory, and enable HYBRD. Complete the HYBRD OAuth sign-in in your browser.

## Verify

Call `get_account`. Connection is confirmed only when that tool returns successfully. If the tool is unavailable after sign-in, start a new conversation, reload the app, or reconnect HYBRD MCP and try again.

## Local development

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

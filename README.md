# HYBRD Agent Plugins

[![CI](https://github.com/hybrd-oss/hybrd-cursor-plugin/actions/workflows/validate.yml/badge.svg)](https://github.com/hybrd-oss/hybrd-cursor-plugin/actions/workflows/validate.yml)

Official HYBRD plugins that connect coding agents to [HYBRD MCP](https://www.hybrd.com/mcp).

This repository is a monorepo of provider plugins. Each plugin is a standalone package with its own manifest, MCP configuration, and install path.

## HYBRD Cursor Plugin

The [HYBRD Cursor Plugin](plugins/cursor) connects Cursor to HYBRD MCP so you can manage and execute training from Cursor.

- Marketplace manifest: `.cursor-plugin/marketplace.json`
- Plugin directory: `plugins/cursor`
- Command: `/connect-hybrd`

See the [Cursor plugin README](plugins/cursor/README.md) for install, verification, and local development.

## HYBRD Claude Code Plugin

The [HYBRD Claude Code Plugin](plugins/claude-code) connects Claude Code to HYBRD MCP so you can manage and execute training from Claude Code.

- Marketplace manifest: `.claude-plugin/marketplace.json`
- Plugin directory: `plugins/claude-code`
- Skill: `/hybrd:connect-hybrd`

See the [Claude Code plugin README](plugins/claude-code/README.md) for install, verification, and local development.

## Why use HYBRD MCP

HYBRD MCP brings your fitness plan, workout history and logger, profile, and wearable connections into one place. It helps you get guidance grounded in your real training, ask better questions about what to do next, and turn recommendations into structured workouts and programming. As you complete training, HYBRD automatically adapts the weights and paces prescribed in future sessions.

## What it includes

Each provider plugin ships:

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- A HYBRD skill for safe account verification and workout/profile workflows.
- A connect command or skill that guides OAuth sign-in and verifies the connected account.

HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.

## Local development

Clone this repository, then load the provider directory you are changing:

```sh
# Cursor
mkdir -p ~/.cursor/plugins/local
ln -s "$(pwd)/plugins/cursor" ~/.cursor/plugins/local/hybrd

# Claude Code
claude --plugin-dir ./plugins/claude-code
```

Do not symlink or pass the repository root as a plugin directory. Cursor and Claude Code both expect the individual plugin folder that contains the provider manifest.

Shared skills live in `shared/hybrd-mcp.SKILL.md`. Copy them into every provider plugin with:

```sh
npm run sync
```

A pre-commit hook runs that copy step and stages the generated skill files. Enable the hook once with `npm run prepare`, or `git config core.hooksPath .githooks`. CI still fails if generated skills are stale.

Connect commands, READMEs, and other provider prose can differ and are not overwritten.

Validate every provider package and the shared safety rules with:

```sh
npm run validate
```

Provider-specific checks:

```sh
npm run validate:cursor
npm run validate:claude
npm run validate:sync
```

## Safety

- Treat live MCP tool discovery and schemas as the source of truth.
- Before changing a workout, profile fact, or benchmark, summarize the change and obtain confirmation in the current conversation.
- Use only the signed-in athlete's HYBRD data.

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](LICENSE)

# HYBRD Agent Plugins

[![CI](https://github.com/hybrd-oss/hybrd-agent-plugins/actions/workflows/validate.yml/badge.svg)](https://github.com/hybrd-oss/hybrd-agent-plugins/actions/workflows/validate.yml)

Official HYBRD plugins that connect coding agents to [HYBRD MCP](https://www.hybrd.com/mcp).

This repository is a monorepo of provider plugins. Each plugin is a standalone package with its own manifest, MCP configuration, and install path.

## HYBRD ChatGPT and Codex Plugin

The [HYBRD OpenAI Plugin](plugins/openai) connects ChatGPT and Codex to HYBRD MCP so you can manage and execute training from either product.

- Marketplace manifest: `.agents/plugins/marketplace.json`
- Plugin directory: `plugins/openai`
- Skill: `hybrd-mcp`

See the [OpenAI plugin README](plugins/openai/README.md) for installation, verification, local development, and public-directory boundaries.

## HYBRD Claude Code Plugin

The [HYBRD Claude Code Plugin](plugins/claude-code) connects Claude Code to HYBRD MCP so you can manage and execute training from Claude Code.

- Marketplace manifest: `.claude-plugin/marketplace.json`
- Plugin directory: `plugins/claude-code`
- Skill: `hybrd-mcp`

See the [Claude Code plugin README](plugins/claude-code/README.md) for install, verification, and local development.

## HYBRD Cursor Plugin

The [HYBRD Cursor Plugin](plugins/cursor) connects Cursor to HYBRD MCP so you can manage and execute training from Cursor.

- Marketplace manifest: `.cursor-plugin/marketplace.json`
- Plugin directory: `plugins/cursor`
- Skill: `hybrd-mcp`

See the [Cursor plugin README](plugins/cursor/README.md) for install, verification, and local development.

## Why use HYBRD MCP

HYBRD MCP brings your fitness plan, workout history and logger, profile, and wearable connections into one place. It helps you get guidance grounded in your real training, ask better questions about what to do next, and turn recommendations into structured workouts and programming. As you complete training, HYBRD automatically adapts the weights and paces prescribed in future sessions.

## What it includes

Each provider plugin ships:

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- A HYBRD skill for account verification and workout/profile workflows.

HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.

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

Shared skills live in `shared/hybrd-mcp.SKILL.md`. Copy them into every provider plugin with:

```sh
npm run sync
```

A pre-commit hook runs that copy step and stages the generated skill files. Enable the hook once with `npm run prepare`, or `git config core.hooksPath .githooks`. CI still fails if generated skills are stale.

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

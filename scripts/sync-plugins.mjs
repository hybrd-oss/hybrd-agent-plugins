import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  assert,
  fileExists,
  policy,
  readJson,
  readText,
  repoRoot,
} from './shared.mjs';

const toJson = (value) => `${JSON.stringify(value, null, 2)}\n`;

const render = (template, vars) =>
  template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in vars)) throw new Error(`Unknown template variable: ${key}`);
    return vars[key];
  });

const providers = [
  {
    product: 'Cursor',
    mcpFields: {},
    mcpPath: 'plugins/cursor/mcp.json',
    skillPath: 'plugins/cursor/skills/hybrd-mcp/SKILL.md',
    manifestPath: 'plugins/cursor/.cursor-plugin/plugin.json',
    manifestFields: {
      logo: 'assets/hybrd-mark.png',
      mcpServers: './mcp.json',
      skills: './skills',
    },
  },
  {
    product: 'Claude Code',
    mcpFields: { type: 'http' },
    mcpPath: 'plugins/claude-code/.mcp.json',
    skillPath: 'plugins/claude-code/skills/hybrd-mcp/SKILL.md',
    manifestPath: 'plugins/claude-code/.claude-plugin/plugin.json',
    manifestFields: {
      displayName: policy.displayName,
    },
  },
];

const skillTemplate = readText('shared/hybrd-mcp.SKILL.md');

export const generatedFiles = () => {
  const files = {};

  for (const provider of providers) {
    const existing = readJson(provider.manifestPath);
    assert(existing.version, `${provider.manifestPath} must keep a provider-specific version.`);

    files[provider.skillPath] = render(skillTemplate, { product: provider.product });
    files[provider.mcpPath] = toJson({
      mcpServers: {
        hybrd: {
          ...provider.mcpFields,
          url: policy.mcpUrl,
        },
      },
    });
    files[provider.manifestPath] = toJson({
      name: policy.name,
      ...(provider.manifestFields.displayName ? { displayName: provider.manifestFields.displayName } : {}),
      version: existing.version,
      description: policy.description,
      author: policy.author,
      homepage: policy.homepage,
      repository: policy.repository,
      license: policy.license,
      keywords: policy.keywords,
      ...Object.fromEntries(Object.entries(provider.manifestFields).filter(([key]) => key !== 'displayName')),
    });
  }

  return files;
};

export const generatedPaths = () => Object.keys(generatedFiles());

export const sync = ({ check = false, stage = false } = {}) => {
  const files = generatedFiles();
  const stale = Object.entries(files).filter(([path, contents]) => {
    return !fileExists(path) || readFileSync(resolve(repoRoot, path), 'utf8') !== contents;
  });

  if (check) {
    assert(
      stale.length === 0,
      `Generated plugin files are stale. Run npm run sync.\n${stale.map(([path]) => `- ${path}`).join('\n')}`,
    );
    console.log('HYBRD skills match shared source.');
    return files;
  }

  for (const [path, contents] of Object.entries(files)) {
    mkdirSync(dirname(resolve(repoRoot, path)), { recursive: true });
    writeFileSync(resolve(repoRoot, path), contents);
  }

  if (stage) {
    const result = spawnSync('git', ['add', '--', ...Object.keys(files)], {
      cwd: repoRoot,
      stdio: 'inherit',
    });
    assert(result.status === 0, 'Failed to stage generated plugin files.');
  }

  console.log(`Copied shared skills into ${Object.keys(files).length} files.`);
  return files;
};

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  sync({
    check: process.argv.includes('--check'),
    stage: process.argv.includes('--stage'),
  });
}

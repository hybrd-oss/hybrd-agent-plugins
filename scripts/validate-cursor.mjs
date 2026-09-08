import {
  assert,
  assertAuthor,
  assertEqual,
  assertIncludes,
  assertKeywords,
  assertMcpServer,
  fileExists,
  HOMEPAGE,
  isSemver,
  LICENSE,
  PLUGIN_NAME,
  readJson,
  readText,
} from './shared.mjs';

const manifest = readJson('plugins/cursor/.cursor-plugin/plugin.json');
assertEqual(manifest.name, PLUGIN_NAME, 'Cursor plugin name is invalid.');
assert(isSemver(manifest.version), 'Cursor plugin version must be semver.');
assertEqual(manifest.homepage, HOMEPAGE, 'Cursor plugin homepage is invalid.');
assertEqual(manifest.license, LICENSE, 'Cursor plugin license is invalid.');
assertEqual(manifest.mcpServers, './mcp.json', 'Cursor manifest must load the plugin MCP configuration.');
assertEqual(manifest.skills, './skills', 'Cursor manifest must load the HYBRD skill directory.');
assert(!('commands' in manifest), 'Cursor plugin must not ship a separate connect command.');
assert(!('variables' in manifest), 'HYBRD OAuth must not require Cursor plugin variables.');
assertAuthor(manifest.author, 'Cursor plugin');
assertKeywords(manifest.keywords, 'Cursor plugin');
assert(fileExists('plugins/cursor/assets/hybrd-mark.png'), 'Cursor plugin logo is missing.');
assertEqual(manifest.logo, 'assets/hybrd-mark.png', 'Cursor plugin logo path is invalid.');

const mcp = readJson('plugins/cursor/mcp.json');
assertMcpServer(mcp, 'Cursor');

const skill = readText('plugins/cursor/skills/hybrd-mcp/SKILL.md');
assert(skill.startsWith('---\nname: hybrd-mcp\n'), 'Cursor HYBRD skill frontmatter is invalid.');
assertIncludes(skill, 'in Cursor', 'Cursor HYBRD skill must mention Cursor.');
assertIncludes(skill, 'get_account', 'Cursor HYBRD skill must require account verification.');
assert(!fileExists('plugins/cursor/commands/connect-hybrd.md'), 'Cursor plugin must not include a connect-hybrd command.');

const marketplace = readJson('.cursor-plugin/marketplace.json');
assertEqual(marketplace.name, PLUGIN_NAME, 'Cursor marketplace name is invalid.');
assertAuthor(marketplace.owner, 'Cursor marketplace');
assertEqual(marketplace.plugins?.length, 1, 'Cursor marketplace must list exactly one plugin.');
assertEqual(marketplace.plugins[0].name, PLUGIN_NAME, 'Cursor marketplace plugin name is invalid.');
assertEqual(marketplace.plugins[0].source, 'plugins/cursor', 'Cursor marketplace source must point at plugins/cursor.');
assert(!fileExists('.cursor-plugin/plugin.json'), 'Repository root must not contain a Cursor plugin manifest.');

console.log('HYBRD Cursor plugin is valid.');

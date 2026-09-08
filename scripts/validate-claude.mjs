import {
  assert,
  assertAuthor,
  assertEqual,
  assertIncludes,
  assertKeywords,
  assertMcpServer,
  assertSafetyCopy,
  fileExists,
  HOMEPAGE,
  isSemver,
  LICENSE,
  PLUGIN_NAME,
  readJson,
  readText,
} from './shared.mjs';

const manifest = readJson('plugins/claude-code/.claude-plugin/plugin.json');
assertEqual(manifest.name, PLUGIN_NAME, 'Claude plugin name is invalid.');
assertEqual(manifest.displayName, 'HYBRD', 'Claude plugin display name is invalid.');
assert(isSemver(manifest.version), 'Claude plugin version must be semver.');
assertEqual(manifest.homepage, HOMEPAGE, 'Claude plugin homepage is invalid.');
assertEqual(manifest.license, LICENSE, 'Claude plugin license is invalid.');
assert(!('variables' in manifest), 'HYBRD OAuth must not require Claude plugin variables.');
assert(!('userConfig' in manifest), 'HYBRD OAuth must not require Claude plugin userConfig.');
assertAuthor(manifest.author, 'Claude plugin');
assertKeywords(manifest.keywords, 'Claude plugin');

const mcp = readJson('plugins/claude-code/.mcp.json');
assertMcpServer(mcp, 'Claude');

const skill = readText('plugins/claude-code/skills/hybrd-mcp/SKILL.md');
assert(skill.startsWith('---\nname: hybrd-mcp\n'), 'Claude HYBRD skill frontmatter is invalid.');
assertIncludes(skill, 'in Claude Code', 'Claude HYBRD skill must mention Claude Code.');
assertSafetyCopy(skill, 'Claude HYBRD skill');

const command = readText('plugins/claude-code/skills/connect-hybrd/SKILL.md');
assert(command.startsWith('---\nname: connect-hybrd\n'), 'Claude connect skill frontmatter is invalid.');
assertIncludes(command, 'disable-model-invocation: true', 'Claude connect skill must be user-invoked.');
assertIncludes(command, 'get_account', 'Claude connect skill must verify the account.');
assertIncludes(command, 'Claude Code', 'Claude connect skill must mention Claude Code.');

const marketplace = readJson('.claude-plugin/marketplace.json');
assertEqual(marketplace.name, PLUGIN_NAME, 'Claude marketplace name is invalid.');
assertAuthor(marketplace.owner, 'Claude marketplace');
assertEqual(marketplace.plugins?.length, 1, 'Claude marketplace must list exactly one plugin.');
assertEqual(marketplace.plugins[0].name, PLUGIN_NAME, 'Claude marketplace plugin name is invalid.');
assertEqual(
  marketplace.plugins[0].source,
  './plugins/claude-code',
  'Claude marketplace source must point at ./plugins/claude-code.',
);
assert(!fileExists('.claude-plugin/plugin.json'), 'Repository root must not contain a Claude plugin manifest.');

console.log('HYBRD Claude Code plugin is valid.');

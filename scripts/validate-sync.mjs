import {
  assert,
  assertEqual,
  AUTHOR_EMAIL,
  AUTHOR_NAME,
  HOMEPAGE,
  LICENSE,
  MCP_URL,
  PLUGIN_NAME,
  readJson,
  readText,
  SAFETY_PHRASES,
} from './shared.mjs';

const cursorManifest = readJson('plugins/cursor/.cursor-plugin/plugin.json');
const claudeManifest = readJson('plugins/claude-code/.claude-plugin/plugin.json');
const cursorMcp = readJson('plugins/cursor/mcp.json');
const claudeMcp = readJson('plugins/claude-code/.mcp.json');
const cursorSkill = readText('plugins/cursor/skills/hybrd-mcp/SKILL.md');
const claudeSkill = readText('plugins/claude-code/skills/hybrd-mcp/SKILL.md');
const cursorConnect = readText('plugins/cursor/commands/connect-hybrd.md');
const claudeConnect = readText('plugins/claude-code/skills/connect-hybrd/SKILL.md');

assertEqual(cursorManifest.name, PLUGIN_NAME, 'Cursor plugin name drifted.');
assertEqual(claudeManifest.name, PLUGIN_NAME, 'Claude plugin name drifted.');
assertEqual(cursorManifest.author.name, AUTHOR_NAME, 'Cursor author name drifted.');
assertEqual(claudeManifest.author.name, AUTHOR_NAME, 'Claude author name drifted.');
assertEqual(cursorManifest.author.email, AUTHOR_EMAIL, 'Cursor author email drifted.');
assertEqual(claudeManifest.author.email, AUTHOR_EMAIL, 'Claude author email drifted.');
assertEqual(cursorManifest.homepage, HOMEPAGE, 'Cursor homepage drifted.');
assertEqual(claudeManifest.homepage, HOMEPAGE, 'Claude homepage drifted.');
assertEqual(cursorManifest.license, LICENSE, 'Cursor license drifted.');
assertEqual(claudeManifest.license, LICENSE, 'Claude license drifted.');
assertEqual(
  JSON.stringify(cursorManifest.keywords),
  JSON.stringify(claudeManifest.keywords),
  'Plugin keywords drifted between providers.',
);
assertEqual(cursorMcp.mcpServers.hybrd.url, MCP_URL, 'Cursor MCP URL drifted.');
assertEqual(claudeMcp.mcpServers.hybrd.url, MCP_URL, 'Claude MCP URL drifted.');
assertEqual(cursorMcp.mcpServers.hybrd.url, claudeMcp.mcpServers.hybrd.url, 'Provider MCP URLs drifted.');

for (const phrase of SAFETY_PHRASES) {
  assert(cursorSkill.includes(phrase), `Cursor skill is missing shared safety copy: ${phrase}`);
  assert(claudeSkill.includes(phrase), `Claude skill is missing shared safety copy: ${phrase}`);
}

assert(cursorSkill.includes('get_account'), 'Cursor skill must require get_account.');
assert(claudeSkill.includes('get_account'), 'Claude skill must require get_account.');
assert(cursorConnect.includes('get_account'), 'Cursor connect command must require get_account.');
assert(claudeConnect.includes('get_account'), 'Claude connect skill must require get_account.');

const cursorHasSecrets = JSON.stringify(cursorMcp).includes('headers') || JSON.stringify(cursorMcp).includes('Authorization');
const claudeHasSecrets = JSON.stringify(claudeMcp).includes('headers') || JSON.stringify(claudeMcp).includes('Authorization');
assert(!cursorHasSecrets, 'Cursor MCP configuration must not include credentials.');
assert(!claudeHasSecrets, 'Claude MCP configuration must not include credentials.');

console.log('HYBRD provider plugins are in sync.');

import { sync } from './sync-plugins.mjs';
import { assert, readJson, readText } from './shared.mjs';

sync({ check: true });

const cursorMcp = JSON.stringify(readJson('plugins/cursor/mcp.json'));
const claudeMcp = JSON.stringify(readJson('plugins/claude-code/.mcp.json'));
assert(!cursorMcp.includes('headers') && !cursorMcp.includes('Authorization'), 'Cursor MCP configuration must not include credentials.');
assert(!claudeMcp.includes('headers') && !claudeMcp.includes('Authorization'), 'Claude MCP configuration must not include credentials.');

const cursorSkill = readText('plugins/cursor/skills/hybrd-mcp/SKILL.md');
const claudeSkill = readText('plugins/claude-code/skills/hybrd-mcp/SKILL.md');
assert(cursorSkill.includes('in Cursor'), 'Cursor skill lost its Cursor wording.');
assert(claudeSkill.includes('in Claude Code'), 'Claude skill lost its Claude Code wording.');
assert(cursorSkill.includes('get_account'), 'Cursor skill must require get_account.');
assert(claudeSkill.includes('get_account'), 'Claude skill must require get_account.');

console.log('HYBRD provider plugins are in sync.');

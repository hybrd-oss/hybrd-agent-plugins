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
  policy,
  readJson,
  readText,
} from './shared.mjs';

const manifest = readJson('plugins/openai/plugin.json');
assertEqual(
  manifest.$schema,
  'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json',
  'OpenAI portable plugin schema is invalid.',
);
assertEqual(manifest.name, PLUGIN_NAME, 'OpenAI plugin name is invalid.');
assert(isSemver(manifest.version), 'OpenAI plugin version must be semver.');
assertEqual(manifest.homepage, HOMEPAGE, 'OpenAI plugin homepage is invalid.');
assertEqual(manifest.license, LICENSE, 'OpenAI plugin license is invalid.');
assertAuthor(manifest.author, 'OpenAI plugin');
assertEqual(manifest.author.url, policy.website, 'OpenAI plugin author URL is invalid.');
assertKeywords(manifest.keywords, 'OpenAI plugin');
assert(!('skills' in manifest), 'Portable OpenAI plugins discover skills from the root skills directory.');
assert(!('mcpServers' in manifest), 'Portable OpenAI plugins discover MCP servers from root mcp.json.');

const extension = manifest.extensions?.['com.openai'];
assert(extension && typeof extension === 'object', 'OpenAI plugin extension is missing.');
assert(!('apps' in extension), 'OpenAI plugin must not reference a registered app integration.');
const pluginInterface = extension.interface;
assertEqual(pluginInterface?.displayName, policy.displayName, 'OpenAI plugin display name is invalid.');
assertEqual(pluginInterface?.developerName, policy.author.name, 'OpenAI plugin developer name is invalid.');
assertEqual(pluginInterface?.websiteURL, policy.website, 'OpenAI plugin website URL is invalid.');
assertEqual(pluginInterface?.privacyPolicyURL, policy.privacyPolicyUrl, 'OpenAI plugin privacy URL is invalid.');
assertEqual(pluginInterface?.termsOfServiceURL, policy.termsOfServiceUrl, 'OpenAI plugin terms URL is invalid.');
assertEqual(JSON.stringify(pluginInterface?.capabilities), JSON.stringify(policy.capabilities), 'OpenAI plugin capabilities are invalid.');
assertEqual(JSON.stringify(pluginInterface?.defaultPrompt), JSON.stringify(policy.defaultPrompts), 'OpenAI plugin starter prompts are invalid.');
assert(fileExists('plugins/openai/assets/hybrd-mark.png'), 'OpenAI plugin logo is missing.');
assertEqual(pluginInterface?.composerIcon, './assets/hybrd-mark.png', 'OpenAI plugin composer icon path is invalid.');
assertEqual(pluginInterface?.logo, './assets/hybrd-mark.png', 'OpenAI plugin logo path is invalid.');

const mcp = readJson('plugins/openai/mcp.json');
assertEqual(
  mcp.$schema,
  'https://agent-plugins.org/schemas/1.0.0/mcp.schema.json',
  'OpenAI MCP schema is invalid.',
);
assertMcpServer(mcp, 'OpenAI');
assertEqual(mcp.mcpServers.hybrd.type, 'streamable-http', 'OpenAI MCP transport must be Streamable HTTP.');

const skill = readText('plugins/openai/skills/hybrd-mcp/SKILL.md');
assert(skill.startsWith('---\nname: hybrd-mcp\n'), 'OpenAI HYBRD skill frontmatter is invalid.');
assertIncludes(skill, 'in ChatGPT or Codex', 'OpenAI HYBRD skill must mention ChatGPT or Codex.');
assertIncludes(skill, 'get_account', 'OpenAI HYBRD skill must require account verification.');

const compatibilityManifest = readJson('plugins/openai/.codex-plugin/plugin.json');
assertEqual(compatibilityManifest.name, PLUGIN_NAME, 'Codex compatibility plugin name is invalid.');
assertEqual(compatibilityManifest.version, manifest.version, 'OpenAI plugin manifests must use the same version.');
assertEqual(compatibilityManifest.skills, './skills/', 'Codex compatibility manifest must load skills.');
assertMcpServer({ mcpServers: compatibilityManifest.mcpServers }, 'Codex compatibility');
assertEqual(compatibilityManifest.mcpServers.hybrd.type, 'http', 'Codex compatibility MCP transport is invalid.');
assertEqual(
  JSON.stringify(compatibilityManifest.interface),
  JSON.stringify(pluginInterface),
  'OpenAI interface metadata must match its compatibility fallback.',
);
assert(!fileExists('plugins/openai/.app.json'), 'OpenAI plugin must not include a registered app mapping.');
assert(!fileExists('plugins/openai/.mcp.json'), 'Portable OpenAI plugin must use root mcp.json.');

const marketplace = readJson('.agents/plugins/marketplace.json');
assertEqual(marketplace.name, PLUGIN_NAME, 'OpenAI marketplace name is invalid.');
assertEqual(marketplace.interface?.displayName, policy.displayName, 'OpenAI marketplace display name is invalid.');
assertEqual(marketplace.plugins?.length, 1, 'OpenAI marketplace must list exactly one plugin.');
const marketplacePlugin = marketplace.plugins[0];
assertEqual(marketplacePlugin.name, PLUGIN_NAME, 'OpenAI marketplace plugin name is invalid.');
assertEqual(marketplacePlugin.source?.source, 'local', 'OpenAI marketplace source type is invalid.');
assertEqual(marketplacePlugin.source?.path, './plugins/openai', 'OpenAI marketplace source path is invalid.');
assertEqual(marketplacePlugin.policy?.installation, 'AVAILABLE', 'OpenAI installation policy is invalid.');
assertEqual(marketplacePlugin.policy?.authentication, 'ON_INSTALL', 'OpenAI authentication policy is invalid.');
assertEqual(marketplacePlugin.category, 'Health & Fitness', 'OpenAI marketplace category is invalid.');
assert(!('products' in marketplacePlugin.policy), 'OpenAI marketplace must not add product gating.');

console.log('HYBRD ChatGPT and Codex plugin is valid.');

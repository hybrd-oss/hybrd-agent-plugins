import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(scriptsDir, '..');

export const readJson = (path) => JSON.parse(readFileSync(resolve(repoRoot, path), 'utf8'));
export const readText = (path) => readFileSync(resolve(repoRoot, path), 'utf8');
export const fileExists = (path) => existsSync(resolve(repoRoot, path));

export const policy = readJson('shared/policy.json');
export const MCP_URL = policy.mcpUrl;
export const PLUGIN_NAME = policy.name;
export const AUTHOR_NAME = policy.author.name;
export const AUTHOR_EMAIL = policy.author.email;
export const HOMEPAGE = policy.homepage;
export const LICENSE = policy.license;
export const KEYWORDS = policy.keywords;

export const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

export const assertEqual = (actual, expected, message) => {
  assert(actual === expected, `${message} Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}.`);
};

export const assertIncludes = (text, snippet, message) => {
  assert(typeof text === 'string' && text.includes(snippet), message);
};

export const isSemver = (value) => /^\d+\.\d+\.\d+$/.test(value);

export const assertAuthor = (author, label) => {
  assertEqual(author?.name, AUTHOR_NAME, `${label} author name is invalid.`);
  assertEqual(author?.email, AUTHOR_EMAIL, `${label} author email is invalid.`);
};

export const assertMcpServer = (mcp, label) => {
  const server = mcp.mcpServers?.hybrd;
  assert(server, `${label} must define the hybrd MCP server.`);
  assertEqual(server.url, MCP_URL, `${label} MCP URL is invalid.`);
  assert(
    Object.keys(server).every((key) => key === 'url' || key === 'type'),
    `${label} MCP configuration must not contain headers, credentials, or extra transport fields.`,
  );
  assert(!('headers' in server), `${label} MCP configuration must not contain headers.`);
};

export const assertKeywords = (keywords, label) => {
  assert(Array.isArray(keywords), `${label} keywords must be an array.`);
  assertEqual(JSON.stringify(keywords), JSON.stringify(KEYWORDS), `${label} keywords must stay in sync.`);
};

import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(scriptsDir, '..');

export const MCP_URL = 'https://mcp.hybrd.com/mcp';
export const PLUGIN_NAME = 'hybrd';
export const AUTHOR_NAME = 'HYBRD Inc';
export const AUTHOR_EMAIL = 'support@hybrd.com';
export const HOMEPAGE = 'https://www.hybrd.com/mcp';
export const LICENSE = 'MIT';
export const KEYWORDS = [
  'hybrd',
  'mcp',
  'hybrid athlete',
  'training',
  'training program',
  'fitness',
  'workouts',
];

export const SAFETY_PHRASES = [
  "Treat the MCP server's live tool discovery and tool schemas as the source of truth",
  "Use only the signed-in athlete's HYBRD data",
  'Before creating or changing a workout, profile fact, or benchmark',
  "summarize the intended change and obtain the athlete's confirmation",
  'After a successful write, report exactly what changed',
];

export const readJson = (path) => JSON.parse(readFileSync(resolve(repoRoot, path), 'utf8'));
export const readText = (path) => readFileSync(resolve(repoRoot, path), 'utf8');
export const fileExists = (path) => existsSync(resolve(repoRoot, path));

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

export const assertSafetyCopy = (text, label) => {
  assertIncludes(text, 'get_account', `${label} must require account verification with get_account.`);
  for (const phrase of SAFETY_PHRASES) {
    assertIncludes(text, phrase, `${label} is missing shared safety copy: ${phrase}`);
  }
};

export const assertKeywords = (keywords, label) => {
  assert(Array.isArray(keywords), `${label} keywords must be an array.`);
  assertEqual(JSON.stringify(keywords), JSON.stringify(KEYWORDS), `${label} keywords must stay in sync.`);
};

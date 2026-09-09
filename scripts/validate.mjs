import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { repoRoot } from './shared.mjs';

const checks = [
  'scripts/validate-openai.mjs',
  'scripts/validate-cursor.mjs',
  'scripts/validate-claude.mjs',
  'scripts/validate-sync.mjs',
];

for (const check of checks) {
  const result = spawnSync(process.execPath, [resolve(repoRoot, check)], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

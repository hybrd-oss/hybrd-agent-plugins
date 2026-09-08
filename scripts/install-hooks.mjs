import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { repoRoot } from './shared.mjs';

if (!existsSync(`${repoRoot}/.git`)) {
  process.exit(0);
}

const result = spawnSync('git', ['config', 'core.hooksPath', '.githooks'], {
  cwd: repoRoot,
  stdio: 'inherit',
});
process.exit(result.status ?? 1);

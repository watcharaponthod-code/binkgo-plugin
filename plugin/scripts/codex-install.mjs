import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const source = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// --global installs for every project (~/.codex), which is what the desktop app's "Connect Codex" does.
const global = process.argv.includes('--global');
const target = global ? os.homedir() : path.resolve(process.argv.slice(2).find(a => !a.startsWith('--')) || process.cwd());
const packagedServer = path.join(source, 'dist', 'mcp.cjs');
const server = fs.existsSync(packagedServer) ? packagedServer : path.join(source, 'plugin', 'dist', 'mcp.cjs');
if (!fs.existsSync(server)) throw new Error('Run npm run build first.');
if (!fs.statSync(target).isDirectory()) throw new Error('Target must be an existing project directory.');
const config = path.join(target, '.codex', 'config.toml');
const agents = global ? path.join(target, '.codex', 'AGENTS.md') : path.join(target, 'AGENTS.md');
const start = '# BEGIN BINKGO';
const end = '# END BINKGO';
const read = file => fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
const update = (original, block) => {
  const a = original.indexOf(start), b = original.indexOf(end);
  if ((a < 0) !== (b < 0) || (a >= 0 && b < a)) throw new Error('Incomplete Binkgo managed block; repair it before installing.');
  return a < 0 ? `${original.trimEnd()}\n\n${block}\n`.trimStart() : original.slice(0,a) + block + original.slice(b+end.length);
};
const originalConfig = read(config);
if (/\[mcp_servers\.(?:"binkgo"|'binkgo'|binkgo)(?:\]|\.)/.test(originalConfig) && !originalConfig.includes(start)) {
  throw new Error('An unmanaged binkgo MCP configuration already exists. Preserve or rename it before installing.');
}
// JSON strings are also valid TOML basic strings, including escaped Windows paths.
const configText = update(originalConfig, [start, '[mcp_servers.binkgo]', `command = ${JSON.stringify(process.execPath)}`, `args = [${JSON.stringify(server)}]`,
  ...(global ? [] : [`cwd = ${JSON.stringify(target)}`]), '[mcp_servers.binkgo.env]', ...(global ? [] : [`BINKGO_ROOT = ${JSON.stringify(target)}`]),
  ...(process.env.ELECTRON_RUN_AS_NODE ? ['ELECTRON_RUN_AS_NODE = "1"'] : []), 'BINKGO_CLIENT = "codex"', end].join('\n'));
const agentsText = update(read(agents), `${start}\n## Binkgo project memory\n\nUse the binkgo MCP server for this project's memory. At the start of work, call project_brief. If there is no vault, use project_init with the project name and goal. Before exploring unfamiliar code, call project_map. Use task_upsert for task progress, log_decision for consequential choices, log_fix only for verified fixes, and save_artifact for deliverables. Before ending a turn that changed files, call session_summary with the work completed, verification and next steps. Never edit .binkgo files by hand or save secrets. Codex sessions are recorded by the MCP server; Claude's automatic file and token capture does not run in Codex. Start the dashboard with npm run dashboard from the Binkgo installation directory.\n\n### Adopting a long-running project\n\nIf project_init just created an empty vault for a repository that already has more than 20 commits, run a bounded backfill once, in about 15 tool calls: read git log -50 --oneline, the README, CLAUDE.md or AGENTS.md and the top-level tree; set the goal with project_update; save at most 8 project_map notes for the main areas; create at most 15 tasks from open TODOs; log at most 5 decisions that the history clearly shows. Do not read every file and do not invent history.\n${end}`);
fs.mkdirSync(path.dirname(config), { recursive: true });
// Preflight both files before changing either. Keep original content for recovery: a reinstall must not replace the
// pre-Binkgo backup with the already-modified file.
for (const file of [config, agents]) if (fs.existsSync(file) && !fs.existsSync(`${file}.binkgo-backup`)) fs.copyFileSync(file, `${file}.binkgo-backup`);
fs.writeFileSync(config, configText);
fs.writeFileSync(agents, agentsText);
console.log(`Binkgo installed for Codex in ${target}. Reopen this trusted project in Codex to load MCP configuration.`);

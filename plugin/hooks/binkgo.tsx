import type { EngineInterface, Register } from 'claude-code';

import type { BinkgoBrief, BinkgoView } from '../types';
import { ICON } from './icon';

const GREEN = '#3f9d5a';
const THROTTLE_MS = 3000;
const RUN_MS = 5000;
const POLL_MAX_MS = 10 * 60 * 1000;
const view = { plugin: 'binkgo', key: 'view' } as const;
const login = { plugin: 'binkgo', key: 'login' } as const;
const announced = { plugin: 'binkgo', key: 'announced' } as const;

let lastRefresh = 0;
let lastCwd = '';
let node = 'node';
let stopPolling: { cancel: () => void } | null = null;

const cut = (s: string, n: number): string => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

function parseBrief(stdout: string): BinkgoView {
  try {
    const j = JSON.parse(stdout.trim().split('\n').pop() ?? '');
    if (j && j.ok === true) return { kind: 'ok', brief: j as BinkgoBrief };
    if (j && j.ok === false && j.reason === 'no-vault') return { kind: 'no-vault' };
    if (j && j.ok === false && j.reason === 'licence') return { kind: 'locked', state: String(j.state), siteUrl: String(j.siteUrl) };
    return { kind: 'error', message: 'unexpected reply' };
  } catch {
    return { kind: 'error', message: 'unreadable reply' };
  }
}

const script = ($: EngineInterface): string => `${$.plugin.root}/dist/dashboard.cjs`;

async function readView($: EngineInterface, cwd: string): Promise<BinkgoView> {
  try {
    const r = await $.process.run([node, script($), '--brief-json', cwd], { timeoutMs: RUN_MS });
    if (r.exitCode !== 0) return { kind: 'error', message: cut(r.stderr.trim() || `exit ${r.exitCode}`, 120) };
    return parseBrief(r.stdout);
  } catch (err) {
    return { kind: 'error', message: cut(`node not available: ${(err as Error).message}`, 120) };
  }
}

export function statusLine(v: BinkgoView): string | undefined {
  if (v.kind === 'locked') return 'Binkgo · locked — /binkgo login';
  if (v.kind !== 'ok') return undefined;
  const b = v.brief;
  const parts = ['Binkgo'];
  if (b.sprint) parts.push(`${b.sprint.title} ${b.sprint.done}/${b.sprint.total}`);
  const first = b.doing[0];
  parts.push(first ? `doing: ${cut(first.title, 40)}` : `${b.todo.length} to do`);
  return parts.join(' · ');
}

/** Reads the project snapshot into `$.state` and the status line; at most once per 3 s unless forced. */
async function refresh($: EngineInterface, force = false): Promise<void> {
  try {
    const now = await $.clock.now();
    if (!force && now - lastRefresh < THROTTLE_MS) return;
    lastRefresh = now;
    if (!lastCwd) lastCwd = await $.session.cwd();
    const v = await readView($, lastCwd);
    await $.state.set(view, v);
    $.ui.status(statusLine(v));
  } catch { /* the pane is a convenience: never break the session */ }
}

async function openDashboard($: EngineInterface): Promise<string> {
  try {
    const r = await $.process.run([node, script($), '--open', '--detach'], { timeoutMs: 15000 });
    const line = r.stdout.trim().split('\n').find((l) => l.startsWith('Binkgo dashboard:'));
    if (r.exitCode === 0 && line) return line;
    return `Could not open the dashboard: ${cut(r.stderr.trim() || r.stdout.trim() || `exit ${r.exitCode}`, 160)}`;
  } catch (err) {
    return `Could not open the dashboard (is node installed?): ${cut((err as Error).message, 160)}`;
  }
}

/** The command that runs the hooks (desktop installs rewrite `node` to their own runtime); `node` when unknown. */
async function hooksRuntime($: EngineInterface): Promise<string> {
  try {
    const text = await $.fs.read(`${$.plugin.root}/hooks/hooks.json`);
    const m = /"command":\s*"((?:[^"\\]|\\.)+)"/.exec(String(text));
    return m?.[1] ? (JSON.parse(`"${m[1]}"`) as string) : 'node';
  } catch {
    return 'node';
  }
}

async function runJson($: EngineInterface, args: string[], timeoutMs: number): Promise<Record<string, unknown> | null> {
  try {
    const r = await $.process.run([node, script($), ...args], { timeoutMs });
    const j = JSON.parse(r.stdout.trim().split('\n').pop() ?? '');
    return j && typeof j === 'object' ? (j as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

/** Starts the browser sign-in, shows the code, and polls in the background until it ends (10 minutes at most). */
async function startLogin($: EngineInterface): Promise<string> {
  const s = await runJson($, ['--signin-start'], 15000);
  if (!s || typeof s.code !== 'string' || typeof s.poll_token !== 'string') return 'Could not start sign-in. Check the connection and try again.';
  const token = s.poll_token;
  const every = Math.max(2, Number(s.interval) || 5) * 1000;
  stopPolling?.cancel();
  await $.state.set(login, { code: s.code });
  $.ui.toast(`Approve code ${s.code} in your browser`);
  const began = await $.clock.now();
  let busy = false;
  const finish = async (toast: string): Promise<void> => {
    stopPolling?.cancel();
    stopPolling = null;
    await $.state.set(login, null);
    $.ui.toast(toast);
  };
  stopPolling = $.clock.every(every, () => {
    if (busy) return;
    busy = true;
    void (async () => {
      try {
        const r = await runJson($, ['--signin-poll', token], RUN_MS);
        const status = r?.status;
        if (status === 'approved') {
          await finish('Binkgo unlocked');
          await refresh($, true);
        } else if (status === 'denied' || status === 'expired') {
          await finish(status === 'denied' ? 'Sign-in was denied.' : 'The sign-in code expired. Run /binkgo login again.');
        } else if ((await $.clock.now()) - began > POLL_MAX_MS) {
          await finish('Sign-in timed out. Run /binkgo login again.');
        }
      } catch { /* try again on the next tick */ } finally { busy = false; }
    })();
  });
  return `Approve code ${s.code} in your browser (${s.verify_url}). Binkgo unlocks here by itself.`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** `2026-10-10` as `10 Oct`; anything else is shown as written. */
export function niceDate(d: string): string {
  const m = /^\d{4}-(\d{2})-(\d{2})/.exec(d);
  const month = m ? MONTHS[Number(m[1]) - 1] : undefined;
  return m && month ? `${Number(m[2])} ${month}` : d;
}

export function bar(done: number, total: number, cells = 12): string {
  const filled = total > 0 ? Math.round((Math.min(done, total) / total) * cells) : 0;
  return '█'.repeat(filled) + '░'.repeat(cells - filled);
}

/** The plain-text (Markdown) form of the card, also what the model-free command answers with. */
function summary(v: BinkgoView | undefined): string {
  if (!v || v.kind === 'error') return 'Binkgo: no project data yet.';
  if (v.kind === 'locked') return 'Binkgo is locked. `/binkgo login` starts a free 7-day trial; memory tools keep working.';
  if (v.kind === 'no-vault') return 'Binkgo: no vault here. Ask Claude to run project_init to create one.';
  const b = v.brief;
  const lines = [`**Binkgo** · ${b.name}`];
  if (b.focus) lines.push(b.focus);
  if (b.sprint) lines.push(`${b.sprint.title}: ${b.sprint.done}/${b.sprint.total} done${b.sprint.ends ? `, ends ${niceDate(b.sprint.ends)}` : ''}`);
  if (b.doing.length) lines.push('', '**In progress**', ...b.doing.slice(0, 5).map((t) => `- ${t.title}`));
  if (b.todo.length) lines.push('', '**Next up**', ...b.todo.slice(0, 5).map((t) => `- ${t.title}`));
  lines.push('', '`/binkgo dashboard` opens the web dashboard.');
  return lines.join('\n');
}

/** The brief posted into the chat when a session starts; plain text, since a notice draws no Markdown. Null posts nothing. */
export function startNotice(v: BinkgoView | undefined): string | null {
  if (!v || v.kind === 'error' || v.kind === 'no-vault') return null;
  if (v.kind === 'locked') return 'Binkgo is locked · /binkgo login starts a free 7-day trial';
  const b = v.brief;
  const lines = [`Binkgo · ${b.name}`];
  if (b.focus) lines.push(cut(b.focus, 160));
  if (b.sprint) lines.push(`${bar(b.sprint.done, b.sprint.total)} ${b.sprint.done}/${b.sprint.total} ${b.sprint.title}${b.sprint.ends ? ` · ends ${niceDate(b.sprint.ends)}` : ''}`);
  if (b.doing.length) lines.push('In progress', ...b.doing.slice(0, 3).map((t) => `  ▸ ${cut(t.title, 80)}`));
  if (b.todo.length) lines.push('Next up', ...b.todo.slice(0, 3).map((t) => `  · ${cut(t.title, 80)}${t.priority === 'urgent' ? ' (urgent)' : ''}`));
  lines.push('/binkgo for the card · /binkgo dashboard');
  return lines.join('\n');
}

/** Posts the brief once per session; a hot reload fires session.start again, so the flag lives in `$.state`. */
async function announce($: EngineInterface): Promise<void> {
  try {
    if ((await $.state.get(announced)).value) return;
    await $.state.set(announced, true);
    await refresh($, true);
    const text = startNotice((await $.state.get(view)).value ?? undefined);
    if (!text) return;
    await $.session.append({ message: { type: 'system', content: [{ type: 'text', text }] } });
  } catch { /* the notice is a convenience: never break the session */ }
}

const PRIORITY_COLOR: Record<string, string> = { urgent: 'red', high: '#e8892b' };

export const register: Register = (on) => {
  on('session.start', async ($, e, next) => {
    try {
      await $.command.register({
        name: 'binkgo',
        description: 'Binkgo project card; "/binkgo dashboard" opens the web dashboard',
        argumentHint: '[dashboard|login]',
      });
    } catch { /* a name clash only costs the command */ }
    lastCwd = e.cwd;
    node = await hooksRuntime($);
    if (e.isInteractive) void announce($);
    else void refresh($, true);
    return next(e);
  });

  on('command.run', { command: 'binkgo' }, async ($, e) => {
    const arg = e.args.trim().toLowerCase();
    if (arg === 'login') return { text: await startLogin($) };
    if (arg === 'dashboard' || arg === 'web') return { text: await openDashboard($) };
    await refresh($, true);
    const { value } = await $.state.get(view);
    return { text: summary(value ?? undefined) };
  });

  on('turn.complete', async ($, e, next) => {
    const result = await next(e);
    void refresh($);
    return result;
  });

  on('tool.call', async ($, e, next) => {
    const result = await next(e);
    const tool = String(e.tool);
    if (/^(Edit|Write|NotebookEdit)$/.test(tool) || (tool.startsWith('mcp__') && tool.includes('binkgo'))) void refresh($);
    return result;
  }).catch(($, e, next) => next(e));

  on('ui.render', { component: 'CommandOutput' }, async ($, e, next) => {
    if (e.props.command !== 'binkgo' || e.props.isErrored) return next(e);
    const t = $.ui.resolve(e);
    const { Box, Button, Link, Text } = t;
    const { value: v } = await $.state.get(view);
    const { value: pending = null } = await $.state.get(login);
    const columns = e.viewport?.columns ?? 80;
    const arg = e.props.args.trim().toLowerCase();
    const open = (): void => { void openDashboard($).then((line) => { $.ui.toast(line); }); };
    const signIn = (): void => { void startLogin($).then((m) => { $.ui.toast(m); }); };

    const icon = columns >= 60 && 'Raster' in t
      ? <Box marginRight={2}><t.Raster key="icon" columns={ICON.columns} rows={ICON.rows} cells={ICON.cells} /></Box>
      : null;
    const title = (sub?: string) => (
      <Text><Text bold color={GREEN}>Binkgo</Text>{sub ? <Text dimColor>  {sub}</Text> : null}</Text>
    );
    const card = (...body: unknown[]) => (
      <Box borderStyle="round" borderColor={GREEN} padding={1}>
        {icon}
        <Box flexDirection="column" flexGrow={1} flexShrink={1}>{body as never}</Box>
      </Box>
    );
    const hints = <Text dimColor>/binkgo dashboard  ·  /binkgo login</Text>;
    const section = (name: string, rows: unknown[]) =>
      rows.length > 0 && (
        <Box flexDirection="column" marginTop={1}>
          <Text bold>{name}</Text>
          {rows as never}
        </Box>
      );

    if (arg === 'login' || arg === 'dashboard' || arg === 'web') {
      return card(title(), <Text wrap="truncate-end">{pending && arg === 'login' ? `Approve code ${pending.code} in your browser` : e.props.text}</Text>);
    }
    if (!v || v.kind === 'error') {
      return card(title(), <Text color="warning">{v ? `Could not read this project: ${v.message}` : 'Reading the project…'}</Text>);
    }
    if (v.kind === 'locked') {
      const why = v.state === 'trial_expired' ? 'Your free trial has ended.' : v.state === 'needs_upgrade' ? 'Your licence does not cover this version.' : 'Sign in to see your project here.';
      const link = v.state === 'trial_expired' ? 'Buy Binkgo' : v.state === 'needs_upgrade' ? 'Upgrade Binkgo' : null;
      return card(
        title('locked'),
        <Text>{why}</Text>,
        link && <Link href={v.siteUrl} label={link} />,
        pending && <Text bold>Approve code {pending.code} in your browser…</Text>,
        <Box marginTop={1}><Button key="login" label="Sign in — 7-day free trial" variant="primary" hotkey="s" onPress={signIn} /></Box>,
        <Text dimColor>Memory tools keep working while this is locked.  ·  /binkgo login</Text>,
      );
    }
    if (v.kind === 'no-vault') {
      return card(title(), <Text>No vault in this folder yet.</Text>, <Text dimColor>Ask Claude to run project_init to create one.</Text>);
    }
    const b = v.brief;
    return card(
      title(b.name),
      b.focus !== '' && <Text wrap="truncate-end">{b.focus}</Text>,
      b.sprint && (
        <Text>
          <Text color={GREEN}>{bar(b.sprint.done, b.sprint.total)}</Text>
          <Text> {b.sprint.done}/{b.sprint.total}{b.sprint.ends ? ` · ends ${niceDate(b.sprint.ends)}` : ''}</Text>
        </Text>
      ),
      section('In progress', b.doing.slice(0, 4).map((x) => <Text wrap="truncate-end"><Text color={GREEN}>▸ </Text>{x.title}</Text>)),
      section('Next up', b.todo.slice(0, 4).map((x) => (
        <Text wrap="truncate-end"><Text dimColor>· </Text>{x.title}{x.priority && PRIORITY_COLOR[x.priority] ? <Text color={PRIORITY_COLOR[x.priority]}> {x.priority}</Text> : null}</Text>
      ))),
      section('Recent fixes', b.recentFixes.slice(0, 3).map((x) => <Text wrap="truncate-end" dimColor>· {x.title}</Text>)),
      section('Recent decisions', b.recentDecisions.slice(0, 3).map((x) => <Text wrap="truncate-end" dimColor>· {x.title}</Text>)),
      <Box marginTop={1}><Button key="open" label="Open dashboard" variant="primary" hotkey="d" onPress={open} /></Box>,
      hints,
    );
  });
};

export type BinkgoBrief = {
  licence: { state: string; email?: string; daysLeft?: number };
  name: string;
  goal: string;
  focus: string;
  sprint: { title: string; ends: string | null; done: number; total: number } | null;
  doing: Array<{ id: string; title: string; priority: string | null }>;
  todo: Array<{ id: string; title: string; priority: string | null; due: string | null }>;
  recentFixes: Array<{ id: string; title: string }>;
  recentDecisions: Array<{ id: string; title: string }>;
  dashboardUrl: string;
};

/** What the pane draws: the project snapshot, a folder without a vault, or a failed read. */
export type BinkgoView =
  | { kind: 'ok'; brief: BinkgoBrief }
  | { kind: 'no-vault' }
  | { kind: 'locked'; state: string; siteUrl: string }
  | { kind: 'error'; message: string };

declare module 'claude-code' {
  interface PluginState {
    binkgo: { view: BinkgoView | null; login: { code: string } | null; announced: boolean | null };
  }
}

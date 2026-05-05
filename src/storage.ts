import { ITEM_KEYS } from "./checklist-data";

export type Run = {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  checked: Record<string, boolean>;
};

const KEY = "cold-email-sop-runs-v1";

export function loadRuns(): Run[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Run[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveRuns(runs: Run[]) {
  localStorage.setItem(KEY, JSON.stringify(runs));
}

export function getRun(id: string): Run | undefined {
  return loadRuns().find((r) => r.id === id);
}

export function upsertRun(run: Run) {
  const list = loadRuns();
  const idx = list.findIndex((r) => r.id === run.id);
  if (idx >= 0) list[idx] = run;
  else list.push(run);
  saveRuns(list);
}

export function deleteRun(id: string) {
  saveRuns(loadRuns().filter((r) => r.id !== id));
}

export function newRun(): Run {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : String(Date.now()) + Math.random().toString(36).slice(2);
  return {
    id,
    title: "",
    description: "",
    createdAt: Date.now(),
    checked: {},
  };
}

export function completionPct(run: Run): number {
  const total = ITEM_KEYS.length;
  if (!total) return 0;
  const done = ITEM_KEYS.filter((k) => run.checked[k]).length;
  return Math.round((done / total) * 100);
}

export function completionCount(run: Run): { done: number; total: number } {
  const total = ITEM_KEYS.length;
  const done = ITEM_KEYS.filter((k) => run.checked[k]).length;
  return { done, total };
}

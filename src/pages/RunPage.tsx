import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { SECTIONS, ITEM_KEYS, type Item } from "../checklist-data";
import {
  getRun,
  upsertRun,
  type Run,
} from "../storage";

function fmtStamp(ts: number) {
  const d = new Date(ts);
  return (
    d.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }) +
    " · " +
    d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
  );
}

type ItemRowProps = {
  item: Item;
  checked: boolean;
  open: boolean;
  onToggleCheck: () => void;
  onToggleOpen: () => void;
};

function ItemRow({
  item,
  checked,
  open,
  onToggleCheck,
  onToggleOpen,
}: ItemRowProps) {
  const liClass = [open ? "open" : "", checked ? "done" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <li className={liClass}>
      <div className="row" onClick={onToggleOpen}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggleCheck}
          onClick={(e) => e.stopPropagation()}
        />
        <img className="icon" src={item.icon} alt="" />
        <span className="label">{item.label}</span>
        <span className="chev">›</span>
      </div>
      {open && (
        <div className="detail">
          <p className="summary">{item.summary}</p>
          <ol>
            {item.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          {item.note && <div className="note">{item.note}</div>}
        </div>
      )}
    </li>
  );
}

export default function RunPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [run, setRun] = useState<Run | null>(null);
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    const r = getRun(id);
    if (!r) {
      setNotFound(true);
      return;
    }
    setRun(r);
  }, [id]);

  const { done, total, pct } = useMemo(() => {
    const t = ITEM_KEYS.length;
    if (!run) return { done: 0, total: t, pct: 0 };
    const d = ITEM_KEYS.filter((k) => run.checked[k]).length;
    return { done: d, total: t, pct: t ? (d / t) * 100 : 0 };
  }, [run]);

  if (notFound) {
    return (
      <main>
        <div className="top-bar">
          <Link to="/" className="back-link">
            ← all runs
          </Link>
        </div>
        <div className="empty">Run not found.</div>
      </main>
    );
  }

  if (!run) {
    return (
      <main>
        <div className="empty">Loading…</div>
      </main>
    );
  }

  function update(next: Run) {
    setRun(next);
    upsertRun(next);
  }

  function toggleCheck(key: string) {
    if (!run) return;
    const checked = { ...run.checked, [key]: !run.checked[key] };
    update({ ...run, checked });
  }

  function toggleOpen(key: string) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function resetRun() {
    if (!run) return;
    if (!confirm("reset all?")) return;
    update({ ...run, checked: {} });
  }

  function deleteThis() {
    if (!run) return;
    if (!confirm("delete this run?")) return;
    const list = JSON.parse(
      localStorage.getItem("cold-email-sop-runs-v1") || "[]"
    ) as Run[];
    localStorage.setItem(
      "cold-email-sop-runs-v1",
      JSON.stringify(list.filter((r) => r.id !== run.id))
    );
    navigate("/");
  }

  return (
    <main>
      <div className="top-bar">
        <Link to="/" className="back-link">
          ← all runs
        </Link>
        <span className="stamp">{fmtStamp(run.createdAt)}</span>
      </div>

      <h1>
        <img src="https://img.icons8.com/color/48/secured-letter.png" alt="" />
        Cold Email Checklist
      </h1>

      <div className="run-meta">
        <input
          className="title"
          type="text"
          placeholder="Run title (e.g. Q2 SaaS founders)"
          value={run.title}
          onChange={(e) => update({ ...run, title: e.target.value })}
        />
        <textarea
          className="desc"
          placeholder="Description / notes / hypothesis..."
          value={run.description}
          onChange={(e) => update({ ...run, description: e.target.value })}
        />
      </div>

      <div className="bar-wrap">
        <div className="bar">
          <div style={{ width: `${pct}%` }} />
        </div>
        <div className="count">
          <span>
            {done} / {total}
          </span>
          <div className="actions">
            <button className="reset" onClick={resetRun}>
              reset
            </button>
            <button className="del" onClick={deleteThis}>
              delete
            </button>
          </div>
        </div>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.id}>
          <h2>
            <img src={section.icon} alt="" />
            {section.title}
          </h2>
          <ul className="checklist">
            {section.items.map((item) => {
              const key = `${section.id}.${item.id}`;
              return (
                <ItemRow
                  key={key}
                  item={item}
                  checked={!!run.checked[key]}
                  open={openKeys.has(key)}
                  onToggleCheck={() => toggleCheck(key)}
                  onToggleOpen={() => toggleOpen(key)}
                />
              );
            })}
          </ul>
        </div>
      ))}
    </main>
  );
}

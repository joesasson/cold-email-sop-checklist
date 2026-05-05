import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loadRuns,
  newRun,
  upsertRun,
  deleteRun,
  completionCount,
  completionPct,
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

export default function Home() {
  const [runs, setRuns] = useState<Run[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRuns(loadRuns());
  }, []);

  function createRun() {
    const r = newRun();
    upsertRun(r);
    navigate(`/run/${r.id}`);
  }

  function handleDelete(id: string) {
    if (!confirm("delete this run?")) return;
    deleteRun(id);
    setRuns(loadRuns());
  }

  const sorted = [...runs].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <main>
      <h1>
        <img src="https://img.icons8.com/color/48/secured-letter.png" alt="" />
        Cold Email SOP Checklist
      </h1>
      <div className="top-bar">
        <span className="stamp">
          {runs.length} {runs.length === 1 ? "run" : "runs"}
        </span>
        <div className="actions">
          <button className="dup" onClick={createRun}>
            + new run
          </button>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="empty">No runs yet — create your first run.</div>
      ) : (
        <ul className="run-list">
          {sorted.map((r) => {
            const { done, total } = completionCount(r);
            const pct = completionPct(r);
            return (
              <li key={r.id}>
                <div className="meta-row">
                  <Link to={`/run/${r.id}`} className="run-title">
                    {r.title?.trim() || "Untitled run"}
                  </Link>
                  <span className="pct">
                    {pct}% · {done}/{total}
                  </span>
                </div>
                <div className="mini-bar">
                  <div style={{ width: `${pct}%` }} />
                </div>
                <div className="meta-row">
                  <span className="stamp">{fmtStamp(r.createdAt)}</span>
                  <div className="row-actions">
                    <button
                      className="del"
                      onClick={() => handleDelete(r.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
                {r.description?.trim() && (
                  <div className="desc-preview">{r.description}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

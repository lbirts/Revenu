import { useState } from "react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Tag from "../components/Tag";
import { reports, reportTypes, statusColor, type ReportType } from "../data";
import { slug } from "@/lib/utils";

export default function Reports({
  onEditTimeline,
}: {
  onEditTimeline: () => void;
}) {
  const [selected, setSelected] = useState<ReportType>("All");
  const rows =
    selected === "All" ? reports : reports.filter((r) => r.type === selected);

  return (
    <Page>
      <PageHeader
        title="Reports"
        subtitle="Dec 2025 - Mar 2026"
        onEditTimeline={onEditTimeline}
      />

      <div data-testid="report-filters" className="flex gap-4">
        {reportTypes.map((t) => (
          <Tag
            key={t}
            label={t}
            selected={selected === t}
            onClick={() => setSelected(t)}
          />
        ))}
      </div>

      <div data-testid="reports-card" className="rounded-lg bg-panel px-5.5 py-6">
        <div data-testid="reports-table" className="flex flex-col gap-6">
          <div
            data-testid="reports-table-head"
            className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr]"
          >
            <span className="text-xs leading-none text-muted">ID</span>
            <span className="text-xs leading-none text-muted">Name</span>
            <span className="text-xs leading-none text-muted">Type</span>
            <span className="text-xs leading-none text-muted">Date</span>
            <span className="text-right text-xs leading-none text-muted">
              Status
            </span>
          </div>
          {rows.map((r) => (
            <div
              key={r.id}
              data-testid={`report-row-${slug(r.id)}`}
              className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr]"
            >
              <span className="text-xs leading-none text-muted">{r.id}</span>
              <span className="text-xs leading-none text-ink">{r.name}</span>
              <span className="text-xs leading-none text-ink">{r.type}</span>
              <span className="text-xs leading-none text-muted">{r.date}</span>
              <span
                data-testid={`report-row-${slug(r.id)}-status`}
                className="text-right text-xs leading-none"
                style={{ color: statusColor[r.status] }}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

import { useState } from "react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Tag from "../components/Tag";
import { reports, reportTypes, type ReportType } from "../data";
import { formatTimeline, inTimeline, reportMonthKey } from "../timeline";
import { slug } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

export default function Reports({
  onEditTimeline,
  timeline,
}: {
  onEditTimeline: () => void;
  timeline: DateRange | undefined;
}) {
  const [selected, setSelected] = useState<ReportType>("All");
  const inRange = inTimeline(
    reports.map((r) => ({ ...r, key: reportMonthKey(r.date) })),
    timeline,
  );
  const rows =
    selected === "All" ? inRange : inRange.filter((r) => r.type === selected);

  return (
    <Page>
      <PageHeader
        title="Reports"
        subtitle={formatTimeline(timeline)}
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
            className="sticky top-0 z-10 grid grid-cols-[1fr_2fr_2fr_1fr_1fr] bg-panel pb-3 shadow-[0_1px_0_var(--color-hairline)]"
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
              className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr]"
            >
              <span className="text-xs leading-none text-muted">{r.id}</span>
              <span className="min-w-0 pr-4">
                <span
                  data-testid={`report-row-${slug(r.id)}-name`}
                  className="block truncate text-xs leading-none text-ink"
                >
                  {r.name}
                </span>
                <span
                  data-testid={`report-row-${slug(r.id)}-summary`}
                  className="report-summary mt-1.5 text-xs leading-4 text-muted"
                >
                  {r.summary}
                </span>
              </span>
              <span className="text-xs leading-none text-ink">{r.type}</span>
              <span className="text-xs leading-none text-muted">{r.date}</span>
              <span
                data-testid={`report-row-${slug(r.id)}-status`}
                data-status={r.status}
                className="text-right text-xs leading-none data-[status=Draft]:text-muted data-[status=Published]:text-accent data-[status=Review]:text-amber"
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

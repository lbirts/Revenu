import ChartCard from "../components/ChartCard";
import BarsChart from "../components/charts/BarsChart";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { monthlyBreakdown, months, revExpBars } from "../data";
import { revenueTrendStats } from "../stats";
import { formatTimeline, inTimeline } from "../timeline";
import { slug } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

const cellAlign = [
  "text-left",
  "text-center",
  "text-center",
  "text-center",
  "text-right",
];

function Row({
  cells,
  colors,
  testId,
}: {
  cells: string[];
  colors: string[];
  testId: string;
}) {
  return (
    <div data-testid={testId} className="grid grid-cols-5">
      {cells.map((c, i) => (
        <span
          key={i}
          className={`text-xs leading-none ${cellAlign[i]} ${colors[i]}`}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export default function RevenueTrend({
  onEditTimeline,
  timeline,
}: {
  onEditTimeline: () => void;
  timeline: DateRange | undefined;
}) {
  const label = formatTimeline(timeline);

  return (
    <Page>
      <PageHeader
        title="Overview"
        subtitle={label}
        onEditTimeline={onEditTimeline}
      />

      <div data-testid="stat-row" className="flex gap-4">
        {revenueTrendStats(inTimeline(months, timeline)).map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div data-anchor-section id="revenue-vs-expenses" className="scroll-mt-18">
        <ChartCard title="Revenue vs Expenses" range={label}>
          <BarsChart data={inTimeline(revExpBars, timeline)} />
        </ChartCard>
      </div>

      <div
        data-testid="breakdown-card"
        data-anchor-section
        id="monthly-breakdown"
        className="scroll-mt-18 rounded-lg bg-panel px-5.5 py-6"
      >
        <h3
          data-testid="breakdown-card-title"
          className="text-2xl font-semibold leading-7 text-ink"
        >
          Monthly Breakdown
        </h3>
        <div data-testid="breakdown-table" className="mt-4 flex flex-col gap-4">
          <div className="sticky top-0 z-10 bg-panel pb-3 shadow-[0_1px_0_var(--color-hairline)]">
            <Row
              testId="breakdown-head"
              cells={["Month", "Revenue", "Expenses", "Profit", "Margin"]}
              colors={Array(5).fill("text-muted")}
            />
          </div>
          {inTimeline(monthlyBreakdown, timeline).map((r) => (
            <Row
              key={r.month}
              testId={`breakdown-row-${slug(r.month)}`}
              cells={[r.month, r.revenue, r.expenses, r.profit, r.margin]}
              colors={[
                "text-muted",
                "text-ink",
                "text-negative",
                "text-accent",
                "text-ink",
              ]}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}

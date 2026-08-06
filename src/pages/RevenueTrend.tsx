import ChartCard from "../components/ChartCard";
import BarsChart from "../components/charts/BarsChart";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { monthlyBreakdown, overviewStats } from "../data";
import { slug } from "@/lib/utils";

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
}: {
  onEditTimeline: () => void;
}) {
  return (
    <Page>
      <PageHeader
        title="Overview"
        subtitle="Dec 2025 - Mar 2026"
        onEditTimeline={onEditTimeline}
      />

      <div data-testid="stat-row" className="flex gap-4">
        {overviewStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <ChartCard title="Revenue vs Expenses">
        <BarsChart />
      </ChartCard>

      <div data-testid="breakdown-card" className="rounded-lg bg-panel px-5.5 py-6">
        <h3
          data-testid="breakdown-card-title"
          className="text-2xl font-semibold leading-7 text-ink"
        >
          Monthly Breakdown
        </h3>
        <div data-testid="breakdown-table" className="mt-4 flex flex-col gap-4">
          <Row
            testId="breakdown-head"
            cells={["Month", "Revenue", "Expenses", "Profit", "Margin"]}
            colors={Array(5).fill("text-muted")}
          />
          {monthlyBreakdown.map((r) => (
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

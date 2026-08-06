import ChartCard from "../components/ChartCard";
import Donut from "../components/charts/Donut";
import MiniBars from "../components/charts/MiniBars";
import TrendChart from "../components/charts/TrendChart";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { homeStats, trafficLegend } from "../data";

export default function Home({
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

      <div className="flex gap-4">
        {homeStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <ChartCard title="Revenue Trend">
        <TrendChart />
      </ChartCard>

      <div className="flex gap-4">
        <div className="h-60.5 min-w-0 grow basis-0 rounded-lg bg-panel px-5.5 py-6">
          <h3 className="text-2xl font-semibold leading-7 text-ink">
            Traffic sources
          </h3>
          <div className="mt-4 flex h-35.5 items-center gap-7.5">
            <Donut />
            <div className="flex grow flex-col gap-4">
              {trafficLegend.map((l) => (
                <div
                  key={l.label}
                  className="flex h-3.5 items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: l.dot }}
                    />
                    <span className="text-xs leading-none text-ink">
                      {l.label}
                    </span>
                  </div>
                  <span className="text-xs leading-none text-ink">{l.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-60.5 min-w-0 grow basis-0 rounded-lg bg-panel">
          <h3 className="absolute left-6 top-6 z-10 text-2xl font-semibold leading-7 text-ink">
            Monthly Revenue
          </h3>
          <MiniBars />
        </div>
      </div>
    </Page>
  );
}

import ChartCard from "../components/ChartCard";
import Donut from "../components/charts/Donut";
import MiniBars from "../components/charts/MiniBars";
import TrendChart from "../components/charts/TrendChart";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { months, revenueSeries, trafficLegend } from "../data";
import { homeStats } from "../stats";
import { formatTimeline, inTimeline } from "../timeline";
import { slug } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

export default function Home({
  onEditTimeline,
  timeline,
}: {
  onEditTimeline: () => void;
  timeline: DateRange | undefined;
}) {
  const shown = inTimeline(months, timeline);
  const label = formatTimeline(timeline);

  return (
    <Page>
      <PageHeader
        title="Overview"
        subtitle={label}
        onEditTimeline={onEditTimeline}
      />

      <div data-testid="stat-row" className="flex gap-4">
        {homeStats(shown).map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <ChartCard title="Revenue Trend" range={label}>
        <TrendChart data={revenueSeries(shown)} />
      </ChartCard>

      <div data-testid="insight-row" className="flex gap-4">
        <div
          data-testid="traffic-card"
          className="h-60.5 min-w-0 grow basis-0 rounded-lg bg-panel px-5.5 py-6"
        >
          <h3
            data-testid="traffic-card-title"
            className="text-2xl font-semibold leading-7 text-ink"
          >
            Traffic sources
          </h3>
          <div className="mt-4 flex h-35.5 items-center gap-7.5">
            <Donut />
            <div data-testid="traffic-legend" className="flex grow flex-col gap-4">
              {trafficLegend.map((l) => (
                <div
                  key={l.label}
                  data-testid={`traffic-legend-${slug(l.label)}`}
                  className="flex h-3.5 items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span
                      data-testid={`traffic-legend-${slug(l.label)}-dot`}
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

        <div
          data-testid="monthly-revenue-card"
          className="relative h-60.5 min-w-0 grow basis-0 rounded-lg bg-panel"
        >
          <h3
            data-testid="monthly-revenue-card-title"
            className="absolute left-6 top-6 z-10 text-2xl font-semibold leading-7 text-ink"
          >
            Monthly Revenue
          </h3>
          <MiniBars data={revenueSeries(shown)} />
        </div>
      </div>
    </Page>
  );
}

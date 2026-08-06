import { months, type MonthRow } from "./data";

export type Stat = {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  positive: boolean;
};

const sum = (ns: number[]) => ns.reduce((a, b) => a + b, 0);
const mean = (ns: number[]) => (ns.length ? sum(ns) / ns.length : 0);

const usdK = (v: number) => `$${Math.round(v / 1000)}K`;
const pct1 = (v: number) => `${v.toFixed(1)}%`;
const pct2 = (v: number) => `${v.toFixed(2)}%`;
const usd1 = (v: number) => `$${v.toFixed(1)}`;
const usd2 = (v: number) => `$${v.toFixed(2)}`;
const duration = (s: number) =>
  `${Math.floor(s / 60)}m ${Math.round(s % 60)}s`;

type Spec = {
  label: string;
  pick: (m: MonthRow) => number;
  aggregate: (ns: number[]) => number;
  format: (v: number) => string;
  lowerIsBetter?: boolean;
};

const HOME: Spec[] = [
  {
    label: "Total Revenue",
    pick: (m) => m.revenue,
    aggregate: sum,
    format: usdK,
  },
  {
    label: "Active Users",
    pick: (m) => m.activeRate,
    aggregate: mean,
    format: pct1,
  },
  {
    label: "Conversion",
    pick: (m) => m.conversion,
    aggregate: mean,
    format: pct2,
  },
  {
    label: "Average Session",
    pick: (m) => m.sessionSeconds,
    aggregate: mean,
    format: duration,
  },
];

const REVENUE_TREND: Spec[] = [
  {
    label: "Total Revenue",
    pick: (m) => m.revenue,
    aggregate: sum,
    format: usdK,
  },
  { label: "MRR", pick: (m) => m.mrr, aggregate: mean, format: usd1 },
  { label: "ARPU", pick: (m) => m.arpu, aggregate: mean, format: usd2 },
  {
    label: "Churn Rate",
    pick: (m) => m.churn,
    aggregate: mean,
    format: pct1,
    lowerIsBetter: true,
  },
];

/* The delta is month over month: the last month on show against the one
   before it, which may sit outside the selection. */
function delta(spec: Spec, shown: MonthRow[]) {
  const last = shown.at(-1);
  const prevIndex = last ? months.findIndex((m) => m.key === last.key) - 1 : -1;
  const prev = prevIndex >= 0 ? months[prevIndex] : undefined;
  if (!last || !prev) return { delta: "0.0%", up: true };

  const change = (spec.pick(last) - spec.pick(prev)) / spec.pick(prev);
  return { delta: pct1(Math.abs(change) * 100), up: change >= 0 };
}

function build(specs: Spec[], shown: MonthRow[]): Stat[] {
  return specs.map((spec) => {
    const { delta: d, up } = delta(spec, shown);
    return {
      label: spec.label,
      value: spec.format(spec.aggregate(shown.map(spec.pick))),
      delta: d,
      up,
      positive: spec.lowerIsBetter ? !up : up,
    };
  });
}

export const homeStats = (shown: MonthRow[]) => build(HOME, shown);
export const revenueTrendStats = (shown: MonthRow[]) =>
  build(REVENUE_TREND, shown);

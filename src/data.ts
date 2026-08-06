export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/* ---------- Monthly figures ---------- */

/* Every stat card and revenue chart reads from this one table, so the
   dashboard can't contradict itself when the timeline narrows. */
export type MonthRow = {
  key: string;
  month: string;
  revenue: number;
  activeRate: number;
  conversion: number;
  sessionSeconds: number;
  mrr: number;
  arpu: number;
  churn: number;
};

export const months: MonthRow[] = [
  { key: "2026-01", month: "Jan", revenue: 43600, activeRate: 28.4, conversion: 3.62, sessionSeconds: 228, mrr: 52.0, arpu: 21.4, churn: 2.6 },
  { key: "2026-02", month: "Feb", revenue: 50700, activeRate: 29.1, conversion: 3.55, sessionSeconds: 232, mrr: 55.4, arpu: 21.9, churn: 2.5 },
  { key: "2026-03", month: "Mar", revenue: 60000, activeRate: 30.2, conversion: 3.48, sessionSeconds: 236, mrr: 58.2, arpu: 22.4, churn: 2.42 },
  { key: "2026-04", month: "Apr", revenue: 69300, activeRate: 31.0, conversion: 3.4, sessionSeconds: 240, mrr: 60.6, arpu: 22.9, churn: 2.32 },
  { key: "2026-05", month: "May", revenue: 53600, activeRate: 30.6, conversion: 3.33, sessionSeconds: 244, mrr: 62.4, arpu: 23.4, churn: 2.24 },
  { key: "2026-06", month: "Jun", revenue: 61400, activeRate: 31.8, conversion: 3.26, sessionSeconds: 248, mrr: 64.0, arpu: 23.9, churn: 2.14 },
  { key: "2026-07", month: "Jul", revenue: 69300, activeRate: 32.4, conversion: 3.2, sessionSeconds: 252, mrr: 66.2, arpu: 24.4, churn: 2.06 },
  { key: "2026-08", month: "Aug", revenue: 82900, activeRate: 33.1, conversion: 3.14, sessionSeconds: 256, mrr: 68.4, arpu: 24.9, churn: 1.98 },
  { key: "2026-09", month: "Sep", revenue: 92900, activeRate: 34.2, conversion: 3.08, sessionSeconds: 260, mrr: 70.6, arpu: 25.4, churn: 1.9 },
  { key: "2026-10", month: "Oct", revenue: 90700, activeRate: 35.0, conversion: 3.02, sessionSeconds: 264, mrr: 72.8, arpu: 25.9, churn: 1.82 },
  { key: "2026-11", month: "Nov", revenue: 70000, activeRate: 34.6, conversion: 2.96, sessionSeconds: 268, mrr: 74.4, arpu: 26.4, churn: 1.74 },
  { key: "2026-12", month: "Dec", revenue: 103600, activeRate: 36.0, conversion: 2.84, sessionSeconds: 296, mrr: 80.0, arpu: 27.26, churn: 1.48 },
];

export const revenueSeries = (rows: MonthRow[]) =>
  rows.map((m) => ({ month: m.month, value: m.revenue }));

/* Traffic donut */
export const traffic = [
  { label: "Email", value: 6, color: "#034e42" },
  { label: "Organic", value: 59, color: "#24e9bb" },
  { label: "Direct", value: 25, color: "#08bd9f" },
  { label: "Social", value: 10, color: "#068973" },
];

/* Legend order (largest → smallest); colors come from `traffic` */
export const trafficLegend = ["Organic", "Direct", "Social", "Email"].map(
  (label) => {
    const t = traffic.find((x) => x.label === label)!;
    return { label: t.label, dot: t.color, pct: `${t.value}%` };
  },
);

/* ---------- Revenue Trend page ---------- */

/* Revenue vs Expenses */
export const revExpBars = [
  { key: "2026-01", month: "Jan", value: 30000 },
  { key: "2026-02", month: "Feb", value: 44300 },
  { key: "2026-03", month: "Mar", value: 57100 },
  { key: "2026-04", month: "Apr", value: 53600 },
  { key: "2026-05", month: "May", value: 77900 },
  { key: "2026-06", month: "Jun", value: 77900 },
  { key: "2026-07", month: "Jul", value: 90000 },
  { key: "2026-08", month: "Aug", value: 100000 },
  { key: "2026-09", month: "Sep", value: 113600 },
  { key: "2026-10", month: "Oct", value: 77900 },
  { key: "2026-11", month: "Nov", value: 90000 },
  { key: "2026-12", month: "Dec", value: 120000 },
];

/* Monthly Breakdown table */
export const monthlyBreakdown = [
  {
    key: "2026-01",
    month: "Jan",
    revenue: "$42.000",
    expenses: "$28.000",
    profit: "$14.000",
    margin: "33.3%",
  },
  {
    key: "2026-02",
    month: "Feb",
    revenue: "$51.000",
    expenses: "$31.000",
    profit: "$20.000",
    margin: "39.2%",
  },
  {
    key: "2026-03",
    month: "Mar",
    revenue: "$47.000",
    expenses: "$29.000",
    profit: "$18.000",
    margin: "38.3%",
  },
  {
    key: "2026-04",
    month: "Apr",
    revenue: "$63.000",
    expenses: "$34.000",
    profit: "$29.000",
    margin: "46.0%",
  },
  {
    key: "2026-05",
    month: "May",
    revenue: "$58.000",
    expenses: "$32.000",
    profit: "$26.000",
    margin: "44.8%",
  },
  {
    key: "2026-06",
    month: "Jun",
    revenue: "$74.000",
    expenses: "$38.000",
    profit: "$36.000",
    margin: "48.6%",
  },
  {
    key: "2026-07",
    month: "Jul",
    revenue: "$69.000",
    expenses: "$36.000",
    profit: "$33.000",
    margin: "47.8%",
  },
  {
    key: "2026-08",
    month: "Aug",
    revenue: "$82.000",
    expenses: "$41.000",
    profit: "$41.000",
    margin: "50.0%",
  },
  {
    key: "2026-09",
    month: "Sep",
    revenue: "$91.000",
    expenses: "$44.000",
    profit: "$47.000",
    margin: "51.6%",
  },
  {
    key: "2026-10",
    month: "Oct",
    revenue: "$87.000",
    expenses: "$43.000",
    profit: "$44.000",
    margin: "50.6%",
  },
  {
    key: "2026-11",
    month: "Nov",
    revenue: "$103.000",
    expenses: "$49.000",
    profit: "$54.000",
    margin: "52.4%",
  },
  {
    key: "2026-12",
    month: "Dec",
    revenue: "$118.000",
    expenses: "$55.000",
    profit: "$63.000",
    margin: "53.4%",
  },
];

/* ---------- Reports ---------- */

export const reportTypes = [
  "All",
  "Financial",
  "Marketing",
  "Analytics",
  "Product",
] as const;
export type ReportType = (typeof reportTypes)[number];

export type ReportStatus = "Published" | "Draft" | "Review";

export const reports: {
  id: string;
  name: string;
  type: Exclude<ReportType, "All">;
  date: string;
  status: ReportStatus;
}[] = [
  {
    id: "RPT - 001",
    name: "Q4 Revenue Summary",
    type: "Financial",
    date: "2026 - 03 - 31",
    status: "Published",
  },
  {
    id: "RPT - 002",
    name: "User Acquisition Dec",
    type: "Marketing",
    date: "2026 - 03 - 28",
    status: "Published",
  },
  {
    id: "RPT - 003",
    name: "Traffic Analysis Q4",
    type: "Analytics",
    date: "2026 - 02 - 25",
    status: "Published",
  },
  {
    id: "RPT - 004",
    name: "Churn Reduction Study",
    type: "Product",
    date: "2026 - 02 - 20",
    status: "Draft",
  },
  {
    id: "RPT - 005",
    name: "Conversion Funnel Nov",
    type: "Analytics",
    date: "2026 - 02 - 18",
    status: "Published",
  },
  {
    id: "RPT - 006",
    name: "Infrastructure Costs",
    type: "Financial",
    date: "2026 - 01 - 28",
    status: "Published",
  },
  {
    id: "RPT - 007",
    name: "Mobile App Metrics",
    type: "Product",
    date: "2026 - 01 - 27",
    status: "Review",
  },
  {
    id: "RPT - 008",
    name: "SEO Performance Q3",
    type: "Marketing",
    date: "2026 - 01 - 06",
    status: "Published",
  },
];

export const statusColor: Record<ReportStatus, string> = {
  Published: "#24e9bb",
  Draft: "#86868c",
  Review: "#faa44e",
};

/* ---------- Settings ---------- */

export const timezones = [
  "(UTC+01:00) Amsterdam, Berlin, Roma",
  "(UTC+00:00) Dublin, Lisbon, London",
  "(UTC-05:00) Eastern Time (US & Canada)",
  "(UTC-08:00) Pacific Time (US & Canada)",
  "(UTC+04:00) Yerevan, Dubai",
];

export const defaultNotifications = [
  { key: "income", label: "Received income", on: true },
  { key: "payments", label: "Completed payments", on: false },
  { key: "transfers", label: "Completed transfers", on: true },
  { key: "suspicious", label: "Suspicious activity detected", on: true },
];

export const fmtUSD = (v: number) => "$" + v.toLocaleString("en-US");

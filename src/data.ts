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

/* ---------- Home ---------- */

export const homeStats = [
  {
    label: "Total Revenue",
    value: "$785K",
    delta: "12.4%",
    up: true,
    positive: true,
  },
  {
    label: "Active Users",
    value: "32.2%",
    delta: "10.4%",
    up: true,
    positive: true,
  },
  {
    label: "Conversion",
    value: "3.24%",
    delta: "0.7%",
    up: false,
    positive: false,
  },
  {
    label: "Average Session",
    value: "4m 12s",
    delta: "8.6%",
    up: true,
    positive: true,
  },
];

/* Revenue Trend */
export const trendPoints = [
  { month: "Jan", value: 43600 },
  { month: "Feb", value: 50700 },
  { month: "Mar", value: 60000 },
  { month: "Apr", value: 69300 },
  { month: "May", value: 53600 },
  { month: "Jun", value: 61400 },
  { month: "Jul", value: 69300 },
  { month: "Aug", value: 82900 },
  { month: "Sep", value: 92900 },
  { month: "Oct", value: 90700 },
  { month: "Nov", value: 70000 },
  { month: "Dec", value: 103600 },
];

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

/* Monthly Revenue (Home, Jan–Jun) */
export const monthlyRevenue = [
  { month: "Jan", value: 50600 },
  { month: "Feb", value: 70600 },
  { month: "Mar", value: 70600 },
  { month: "Apr", value: 91800 },
  { month: "May", value: 105900 },
  { month: "Jun", value: 120000 },
];

/* ---------- Revenue Trend page ---------- */

export const overviewStats = [
  {
    label: "Total Revenue",
    value: "$785K",
    delta: "12.4%",
    up: true,
    positive: true,
  },
  { label: "MRR", value: "$65.4", delta: "9.2%", up: true, positive: true },
  { label: "ARPU", value: "$24.18", delta: "5.6%", up: true, positive: true },
  {
    label: "Churn Rate",
    value: "2.1%",
    delta: "0.3%",
    up: false,
    positive: true,
  },
];

/* Revenue vs Expenses */
export const revExpBars = [
  { month: "Jan", value: 30000 },
  { month: "Feb", value: 44300 },
  { month: "Mar", value: 57100 },
  { month: "Apr", value: 53600 },
  { month: "May", value: 77900 },
  { month: "Jun", value: 77900 },
  { month: "Jul", value: 90000 },
  { month: "Aug", value: 100000 },
  { month: "Sep", value: 113600 },
  { month: "Oct", value: 77900 },
  { month: "Nov", value: 90000 },
  { month: "Dec", value: 120000 },
];

/* Monthly Breakdown table */
export const monthlyBreakdown = [
  {
    month: "Jan",
    revenue: "$42.000",
    expenses: "$28.000",
    profit: "$14.000",
    margin: "33.3%",
  },
  {
    month: "Feb",
    revenue: "$51.000",
    expenses: "$31.000",
    profit: "$20.000",
    margin: "39.2%",
  },
  {
    month: "March",
    revenue: "$47.000",
    expenses: "$29.000",
    profit: "$18.000",
    margin: "38.3%",
  },
  {
    month: "Apr",
    revenue: "$63.000",
    expenses: "$34.000",
    profit: "$29.000",
    margin: "46.0%",
  },
  {
    month: "May",
    revenue: "$58.000",
    expenses: "$32.000",
    profit: "$26.000",
    margin: "44.8%",
  },
  {
    month: "Jun",
    revenue: "$74.000",
    expenses: "$38.000",
    profit: "$36.000",
    margin: "48.6%",
  },
  {
    month: "Jul",
    revenue: "$69.000",
    expenses: "$36.000",
    profit: "$33.000",
    margin: "47.8%",
  },
  {
    month: "Aug",
    revenue: "$82.000",
    expenses: "$41.000",
    profit: "$41.000",
    margin: "50.0%",
  },
  {
    month: "Sep",
    revenue: "$91.000",
    expenses: "$44.000",
    profit: "$47.000",
    margin: "51.6%",
  },
  {
    month: "Oct",
    revenue: "$87.000",
    expenses: "$43.000",
    profit: "$44.000",
    margin: "50.6%",
  },
  {
    month: "Nov",
    revenue: "$103.000",
    expenses: "$49.000",
    profit: "$54.000",
    margin: "52.4%",
  },
  {
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
    date: "2025 - 12 - 31",
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

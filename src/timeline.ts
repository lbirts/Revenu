import type { DateRange } from "react-day-picker";

// The dashboard's figures cover one calendar year, so that year is also the
// whole selectable window: the picker starts here, shows exactly this many
// months and has navigation disabled.
export const TIMELINE_FIRST_MONTH = new Date(2026, 0);
export const TIMELINE_MONTHS = 12;

export const DEFAULT_TIMELINE: DateRange = {
  from: new Date(2026, 0, 1),
  to: new Date(2026, 11, 31),
};

// A literal rather than the real clock so renders stay identical between runs.
export const TIMELINE_TODAY = new Date(2026, 3, 10);

const monthYear = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", year: "numeric" });

const monthDay = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

export function isCompleteRange(r: DateRange | undefined): r is DateRange {
  return Boolean(r?.from && r?.to);
}

export function formatTimeline(range: DateRange | undefined) {
  if (!range?.from) return "No timeline selected";
  return `${monthYear(range.from)} - ${monthYear(range.to ?? range.from)}`;
}

export function formatTimelineDays(range: DateRange | undefined) {
  if (!range?.from) return "Select dates";
  return `${monthDay(range.from)} – ${range.to ? monthDay(range.to) : "..."}`;
}

const monthKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

/* A month belongs to the timeline when the range touches any part of it, so
   partial months still contribute their figures rather than vanishing. */
export function inTimeline<T extends { key: string }>(
  rows: T[],
  range: DateRange | undefined,
) {
  if (!range?.from) return rows;
  const first = monthKey(range.from);
  const last = monthKey(range.to ?? range.from);
  return rows.filter((r) => r.key >= first && r.key <= last);
}

/* Report dates are authored as "2026 - 01 - 06". */
export const reportMonthKey = (date: string) =>
  date.replace(/\s/g, "").slice(0, 7);

export const PLOT_MARGIN = { top: 69, right: 13, bottom: 0, left: 0 };
export const Y_AXIS_WIDTH = 48;
export const X_AXIS_HEIGHT = 35;
export const Y_TICKS = [0, 30000, 60000, 90000, 120000];
export const Y_DOMAIN: [number, number] = [0, 120000];
export const HAIRLINE = "rgba(134,134,140,0.08)";

export const fmtAxis = (v: number) => `$${v / 1000}k`;

export type TickProps = {
  x?: number | string;
  y?: number | string;
  payload?: { value?: number | string };
};

export function YTick({ y, payload }: TickProps) {
  return (
    <text
      x={0}
      y={Number(y ?? 0) - 2}
      dominantBaseline="middle"
      fontSize={12}
      fill="#86868c"
    >
      {fmtAxis(Number(payload?.value ?? 0))}
    </text>
  );
}

export function monthTick(labelY: number) {
  return function MonthTick({ x, payload }: TickProps) {
    return (
      <text
        x={x}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
        fill="#86868c"
      >
        {payload?.value}
      </text>
    );
  };
}

export function Pill({ text }: { text: string }) {
  return (
    <div data-testid="chart-tooltip" className="pointer-events-none">
      <div
        data-testid="chart-tooltip-body"
        className="flex h-7 items-center rounded-lg border border-white bg-accent-press px-2 text-xs font-medium text-ink shadow-[4px_4px_16px_rgba(26,32,44,0.08)]"
      >
        {text}
      </div>
      <div className="mx-auto -mt-1.25 h-2.5 w-2.5 rotate-45 border-b border-r border-white bg-accent-press" />
    </div>
  );
}

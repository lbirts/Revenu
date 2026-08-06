import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { fmtUSD, trendPoints } from "../../data";
import {
  HAIRLINE,
  PLOT_MARGIN,
  Pill,
  X_AXIS_HEIGHT,
  YTick,
  Y_AXIS_WIDTH,
  Y_DOMAIN,
  Y_TICKS,
  monthTick,
} from "./common";

/*
  Revenue Trend chart
*/

const config = {
  value: { label: "Revenue", color: "#24e9bb" },
} satisfies ChartConfig;

type DotProps = {
  key?: React.Key | null;
  cx?: number;
  cy?: number;
  index?: number;
};

function GlowDot({ key, cx, cy }: DotProps) {
  return (
    <circle
      key={key}
      cx={cx}
      cy={cy}
      r={4}
      fill="#24e9bb"
      filter="url(#dotGlow)"
    />
  );
}

function ActiveDot({ key, cx, cy }: DotProps) {
  return (
    <circle
      key={key}
      cx={cx}
      cy={cy}
      r={4}
      fill="#24e9bb"
      stroke="#ffffff"
      strokeWidth={1}
      filter="url(#dotGlow)"
    />
  );
}

function PillTip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value?: number }[];
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ transform: "translate(-50%, calc(-100% - 11px))" }}>
      <Pill text={fmtUSD(payload[0].value ?? 0)} />
    </div>
  );
}

export default function TrendChart() {
  return (
    <ChartContainer
      config={config}
      data-testid="trend-chart"
      className="h-full w-full aspect-auto!"
    >
      <AreaChart data={trendPoints} margin={PLOT_MARGIN}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15.58%" stopColor="#098165" stopOpacity={0.78} />
            <stop offset="100%" stopColor="#021b15" stopOpacity={0} />
          </linearGradient>
          <filter id="dotGlow" x="-400%" y="-400%" width="900%" height="900%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="12"
              floodColor="#2cc583"
              floodOpacity="0.8"
            />
          </filter>
        </defs>
        <CartesianGrid stroke={HAIRLINE} />
        <YAxis
          domain={Y_DOMAIN}
          ticks={Y_TICKS}
          width={Y_AXIS_WIDTH}
          axisLine={false}
          tickLine={false}
          tick={YTick}
        />
        <XAxis
          dataKey="month"
          interval={0}
          height={X_AXIS_HEIGHT}
          axisLine={false}
          tickLine={false}
          tick={monthTick(261)}
        />
        <Tooltip
          content={<PillTip />}
          cursor={false}
          offset={0}
          allowEscapeViewBox={{ x: true, y: true }}
          isAnimationActive={false}
          wrapperStyle={{ zIndex: 10, outline: "none" }}
        />
        <Area
          dataKey="value"
          type="monotone"
          stroke="#24e9bb"
          strokeWidth={1}
          fill="url(#trendFill)"
          dot={GlowDot}
          activeDot={ActiveDot}
          isAnimationActive={false}
        />
      </AreaChart>
    </ChartContainer>
  );
}

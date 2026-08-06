import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { fmtUSD } from "../../data";
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

const config = {
  value: { label: "Revenue", color: "#24e9bb" },
} satisfies ChartConfig;

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

export default function BarsChart({
  data,
}: {
  data: { month: string; value: number }[];
}) {
  return (
    <div
      data-testid="rev-exp-chart-wrap"
      className="relative h-full w-full"
    >
      <ChartContainer
        config={config}
        data-testid="rev-exp-chart"
        className="h-full w-full aspect-auto!"
      >
        <BarChart data={data} margin={PLOT_MARGIN}>
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
            scale="point"
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
          <Bar
            dataKey="value"
            barSize={16}
            radius={8}
            fill="#24e9bb"
            isAnimationActive={false}
            activeBar={false}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { fmtUSD } from "../../data";
import { HAIRLINE, Pill, fmtAxis, type TickProps } from "./common";

const config = {
  value: { label: "Revenue", color: "#24e9bb" },
} satisfies ChartConfig;

function MiniYTick({ y, payload }: TickProps) {
  return (
    <text x={24} y={y} dominantBaseline="middle" fontSize={12} fill="#86868c">
      {fmtAxis(Number(payload?.value ?? 0))}
    </text>
  );
}

function MiniMonthTick({ x, payload }: TickProps) {
  return (
    <text
      x={x}
      y={207}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={12}
      fill="#86868c"
    >
      {payload?.value}
    </text>
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

export default function MiniBars({
  data,
}: {
  data: { month: string; value: number }[];
}) {
  return (
    <ChartContainer
      config={config}
      data-testid="monthly-revenue-chart"
      className="absolute inset-0 h-full w-full aspect-auto!"
    >
      <BarChart
        data={data}
        margin={{ top: 79, right: 37, bottom: 0, left: 0 }}
      >
        <CartesianGrid stroke={HAIRLINE} />
        <YAxis
          domain={[0, 120000]}
          ticks={[0, 60000, 120000]}
          width={65}
          axisLine={false}
          tickLine={false}
          tick={MiniYTick}
        />
        <XAxis
          dataKey="month"
          scale="point"
          interval={0}
          height={60}
          axisLine={false}
          tickLine={false}
          tick={MiniMonthTick}
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
          barSize={4}
          radius={2}
          fill="#24e9bb"
          isAnimationActive={false}
          activeBar={false}
        />
      </BarChart>
    </ChartContainer>
  );
}

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { traffic } from "../../data";
import { Pill } from "./common";

const config = {
  value: { label: "Share" },
} satisfies ChartConfig;

function PillTip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { name?: string; value?: number }[];
}) {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0];
  return (
    <div style={{ transform: "translate(-50%, calc(-100% - 11px))" }}>
      <Pill text={`${name} ${value}%`} />
    </div>
  );
}

export default function Donut() {
  return (
    <ChartContainer config={config} className="size-35.5 shrink-0 aspect-auto!">
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={traffic}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          innerRadius={45.44}
          outerRadius={71}
          startAngle={0}
          endAngle={-360}
          stroke="none"
          isAnimationActive={false}
        >
          {traffic.map((t) => (
            <Cell key={t.label} fill={t.color} />
          ))}
        </Pie>
        <Tooltip
          content={<PillTip />}
          cursor={false}
          offset={0}
          allowEscapeViewBox={{ x: true, y: true }}
          isAnimationActive={false}
          wrapperStyle={{ zIndex: 10, outline: "none" }}
        />
      </PieChart>
    </ChartContainer>
  );
}

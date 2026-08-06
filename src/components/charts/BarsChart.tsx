import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { useRef, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { fmtUSD, revExpBars } from "../../data";
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

const PLOT_W = 952;
const FIRST_X = 48;
const PITCH = 81;

export default function BarsChart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(
    null,
  );

  const onMove = (e: React.MouseEvent) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const designX = (px / rect.width) * PLOT_W;
    const i = Math.round((designX - FIRST_X) / PITCH);
    const near =
      i >= 0 &&
      i < revExpBars.length &&
      Math.abs(designX - (FIRST_X + i * PITCH)) <= 20;
    setTip(
      near
        ? {
            x: px,
            y: e.clientY - rect.top,
            text: fmtUSD(revExpBars[i].value),
          }
        : null,
    );
  };

  return (
    <div
      ref={wrapRef}
      className="relative h-full w-full"
      onMouseMove={onMove}
      onMouseLeave={() => setTip(null)}
    >
      <ChartContainer config={config} className="h-full w-full aspect-auto!">
        <BarChart data={revExpBars} margin={PLOT_MARGIN}>
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

      {tip && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full"
          style={{ left: tip.x, top: tip.y - 14 }}
        >
          <Pill text={tip.text} />
        </div>
      )}
    </div>
  );
}

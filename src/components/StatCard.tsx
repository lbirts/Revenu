import { slug } from "@/lib/utils";
import type { CSSProperties } from "react";
import { DeltaArrowIcon } from "../icons";

export default function StatCard({
  label,
  value,
  delta,
  up,
  positive,
}: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  positive: boolean;
}) {
  const id = slug(label);
  return (
    <div
      data-testid={`stat-card-${id}`}
      style={{ "--tone": positive ? "up" : "down" } as CSSProperties}
      className="flex h-35.75 grow basis-0 flex-col gap-1 rounded-lg bg-panel p-6"
    >
      <p
        data-testid={`stat-card-${id}-label`}
        className="text-sm leading-none text-muted"
      >
        {label}
      </p>
      <p
        data-testid={`stat-card-${id}-value`}
        className="text-[40px] font-bold text-ink"
      >
        {value}
      </p>
      <div
        data-testid={`stat-card-${id}-delta`}
        className="stat-delta flex h-6 items-center text-accent"
      >
        <DeltaArrowIcon down={!up} />
        <span className="text-sm leading-none">{delta}</span>
      </div>
    </div>
  );
}

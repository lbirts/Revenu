import { slug } from "@/lib/utils";
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
  const color = positive ? "text-accent" : "text-negative";
  const id = slug(label);
  return (
    <div
      data-testid={`stat-card-${id}`}
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
        className={`flex h-6 items-center ${color}`}
      >
        <DeltaArrowIcon down={!up} />
        <span className="text-sm leading-none">{delta}</span>
      </div>
    </div>
  );
}

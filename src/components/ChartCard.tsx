import { slug } from "@/lib/utils";
import type { ReactNode } from "react";
import { CalendarIcon } from "../icons";

export default function ChartCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const id = slug(title);
  return (
    <div
      data-testid={`chart-card-${id}`}
      className="relative h-80 rounded-lg bg-panel p-6"
    >
      <div className="pointer-events-none relative z-10 flex items-start justify-between">
        <h3
          data-testid={`chart-card-${id}-title`}
          className="text-2xl font-semibold leading-7 text-ink"
        >
          {title}
        </h3>
        <div
          data-testid={`chart-card-${id}-range`}
          className="flex items-center gap-2 pt-2"
        >
          <CalendarIcon className="text-ink" />
          <span className="text-sm leading-none text-ink">
            Jan 2026 - Dec 2026
          </span>
        </div>
      </div>
      <div className="absolute inset-6">{children}</div>
    </div>
  );
}

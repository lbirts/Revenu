import { CalendarIcon } from "../icons";
import GlowButton from "./GlowButton";

export default function PageHeader({
  title,
  subtitle,
  onEditTimeline,
}: {
  title: string;
  subtitle: string;
  onEditTimeline?: () => void;
}) {
  return (
    <div
      data-testid="page-header"
      className="flex h-15 items-center justify-between"
    >
      <div className="flex flex-col gap-1">
        <h1
          data-testid="page-title"
          className="text-[32px] font-bold leading-none text-ink"
        >
          {title}
        </h1>
        <p
          data-testid="page-subtitle"
          className="text-sm leading-none text-muted"
        >
          {subtitle}
        </p>
      </div>
      {onEditTimeline && (
        <GlowButton
          testId="edit-timeline-btn"
          icon={<CalendarIcon className="text-ink" />}
          onClick={onEditTimeline}
        >
          Edit timeline
        </GlowButton>
      )}
    </div>
  );
}

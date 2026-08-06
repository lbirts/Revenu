import { Chart2, Diagram, DocumentText, Login } from "iconsax-reactjs";
import { ArrowUp, CalendarDays, ChevronDown, Settings, X } from "lucide-react";

type IconProps = { size?: number; className?: string };

export function ChartIcon({ size = 24, className }: IconProps) {
  return (
    <Chart2
      size={size}
      color="currentColor"
      variant="Linear"
      className={className}
    />
  );
}

export function DiagramIcon({ size = 24, className }: IconProps) {
  return (
    <Diagram
      size={size}
      color="currentColor"
      variant="Linear"
      className={className}
    />
  );
}

export function DocumentIcon({ size = 24, className }: IconProps) {
  return (
    <DocumentText
      size={size}
      color="currentColor"
      variant="Linear"
      className={className}
    />
  );
}

export function GearIcon({ size = 24, className }: IconProps) {
  return <Settings size={size} strokeWidth={1.2} className={className} />;
}

/** vuesax/linear/login — the sidebar collapse arrow */
export function CollapseIcon({ size = 24, className }: IconProps) {
  return (
    <Login
      size={size}
      color="currentColor"
      variant="Linear"
      className={className}
    />
  );
}

export function CalendarIcon({ size = 24, className }: IconProps) {
  return <CalendarDays size={size} strokeWidth={1.5} className={className} />;
}

export function DeltaArrowIcon({
  size = 24,
  className,
  down = false,
}: IconProps & { down?: boolean }) {
  return (
    <ArrowUp
      size={size}
      strokeWidth={2}
      className={className}
      style={down ? { transform: "rotate(180deg)" } : undefined}
    />
  );
}

export function DropDownIcon({ size = 18, className }: IconProps) {
  return <ChevronDown size={size} strokeWidth={1.5} className={className} />;
}

export function CloseIcon({ size = 24, className }: IconProps) {
  return <X size={size} strokeWidth={1.6} className={className} />;
}

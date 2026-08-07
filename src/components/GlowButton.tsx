import type { ReactNode } from "react";

export default function GlowButton({
  children,
  icon,
  disabled = false,
  onClick,
  className = "",
  testId,
}: {
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  testId?: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-lg border-2 px-5.5",
        icon ? "h-15" : "h-13.75",
        "text-base font-medium leading-none",
        "transition-[background-color,border-color,filter,color] duration-300 ease-(--ease-app)",
        disabled
          ? "cursor-default border-muted-2 text-muted-2"
          : "cursor-pointer border-accent text-ink drop-shadow-[0_0_24px_rgba(44,197,131,0.48)] hover:bg-[oklch(from_var(--color-accent)_l_calc(c_-_0.28)_h)]",
        className,
      ].join(" ")}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

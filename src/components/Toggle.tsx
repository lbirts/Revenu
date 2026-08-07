import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

export default function Toggle({
  on,
  onChange,
  testId,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  testId?: string;
}) {
  return (
    <SwitchPrimitive.Root
      checked={on}
      onCheckedChange={onChange}
      data-testid={testId}
      className={[
        "notif-switch h-5.5 w-10.5 shrink-0 cursor-pointer rounded-[20px] p-0.5 outline-none",
        "transition-colors duration-300 ease-(--ease-app)",
        "focus-visible:ring-2 focus-visible:ring-accent/50",
        on ? "bg-accent" : "bg-muted",
      ].join(" ")}
    >
      <SwitchPrimitive.Thumb
        data-testid={testId ? `${testId}-thumb` : undefined}
        className={[
          "block h-4.5 w-4.5 rounded-full bg-bg",
          "transition-transform duration-300 ease-(--ease-app)",
          on ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </SwitchPrimitive.Root>
  );
}

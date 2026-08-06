export default function Tag({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex h-11.75 cursor-pointer items-center justify-center rounded-lg border-2 px-5.5",
        "text-base font-medium leading-none",
        "transition-[border-color,filter,color] duration-300 ease-(--ease-app)",
        selected
          ? "border-accent text-ink drop-shadow-[0_0_24px_rgba(44,197,131,0.48)]"
          : "border-muted-2 text-muted-2 hover:border-accent hover:text-ink hover:drop-shadow-[0_0_24px_rgba(44,197,131,0.48)]",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

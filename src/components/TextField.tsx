import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { slug } from "@/lib/utils";

const fieldBase = [
  "h-14 w-full rounded-lg border-2 border-input-border bg-transparent px-4",
  "text-base leading-6 tracking-[0.5px] text-typing placeholder:text-muted-2",
  "outline-none transition-[border-color] duration-300 ease-(--ease-app)",
  "hover:border-ink focus:border-ink",
].join(" ");

export function TextField({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  const id = slug(label);
  return (
    <label
      data-testid={`field-${id}`}
      className="flex grow basis-0 flex-col gap-2"
    >
      <span
        data-testid={`field-${id}-label`}
        className="text-base leading-none text-ink"
      >
        {label}
      </span>
      <input
        type="text"
        data-testid={`field-${id}-input`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={fieldBase}
      />
    </label>
  );
}

/* Same field skin over the shadcn/Base UI Select for keyboard + aria. */
export function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const id = slug(label);
  return (
    <div data-testid={`field-${id}`} className="flex grow basis-0 flex-col gap-2">
      <span
        data-testid={`field-${id}-label`}
        className="text-base leading-none text-ink"
      >
        {label}
      </span>
      <Select value={value} onValueChange={(v) => onChange(v as string)}>
        <SelectTrigger
          data-testid={`field-${id}-trigger`}
          className={`${fieldBase} cursor-pointer justify-between text-muted focus-visible:border-ink focus-visible:ring-0 data-[size=default]:h-14 [&_svg:not([class*='size-'])]:text-muted`}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          data-testid={`field-${id}-options`}
          alignItemWithTrigger={false}
          className="border border-hairline bg-panel-2 py-1 ring-0"
        >
          {options.map((o) => (
            <SelectItem
              key={o}
              value={o}
              className="cursor-pointer rounded-none py-2.5 pl-4 pr-8 text-sm text-muted focus:bg-white/5 focus:text-ink data-selected:text-accent"
            >
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

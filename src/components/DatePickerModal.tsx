import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { slug } from "@/lib/utils";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { CloseIcon } from "../icons";

const WEEK = ["S", "M", "T", "W", "T", "F", "S"];
const DEFAULT_RANGE: DateRange = {
  from: new Date(2025, 7, 17),
  to: new Date(2025, 7, 23),
};
const TODAY = new Date(2025, 7, 5); // outlined in the design

const fmt = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

export default function DatePickerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [range, setRange] = useState<DateRange | undefined>(DEFAULT_RANGE);

  const label = range?.from
    ? `${fmt(range.from)} – ${range.to ? fmt(range.to) : "..."}`
    : "Select dates";

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        data-testid="date-picker"
        showCloseButton={false}
        overlayClassName="z-40 bg-[rgba(30,32,31,0.7)] backdrop-blur-[20px] supports-backdrop-filter:backdrop-blur-[20px]"
        className="top-38.5 right-20 left-auto z-50 flex h-174 max-h-[calc(100vh-174px)] w-90 max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-lg border border-accent-hairline bg-panel-2 p-0 ring-0 sm:max-w-none"
      >
        <DialogTitle className="sr-only">Edit timeline</DialogTitle>

        {/* header */}
        <div className="flex items-center justify-between py-1.5 pl-3 pr-1.5">
          <button
            type="button"
            onClick={onClose}
            data-testid="date-picker-close"
            aria-label="Close"
            className="flex h-12 w-12 cursor-pointer items-center justify-center text-muted-2 transition-colors duration-300 ease-(--ease-app) hover:text-ink"
          >
            <CloseIcon />
          </button>
          <TextBtn onClick={onClose}>Save</TextBtn>
        </div>
        <div className="px-6">
          <p className="text-sm font-medium leading-5 tracking-[0.1px] text-muted-2">
            Depart - Return dates
          </p>
          <p
            data-testid="date-picker-range"
            className="mt-2 text-[22px] leading-7 text-muted-2"
          >
            {label}
          </p>
        </div>
        <div className="mt-3 border-b border-m3-divider" />

        {/* weekday header (single sticky row, as in the design) */}
        <div className="flex px-3">
          {WEEK.map((w, i) => (
            <div
              key={i}
              className="flex h-12 w-12 items-center justify-center text-base tracking-[0.5px] text-muted-2"
            >
              {w}
            </div>
          ))}
        </div>

        {/* months */}
        <div className="no-scrollbar flex-1 overflow-y-auto pb-2">
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            defaultMonth={new Date(2025, 7)}
            numberOfMonths={5}
            today={TODAY}
            disableNavigation
            showOutsideDays={false}
            formatters={{
              formatCaption: (m) =>
                m.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                }),
            }}
            className="w-full bg-transparent p-0 [--cell-radius:9999px] [--cell-size:3rem]"
            classNames={{
              months: "flex flex-col gap-0",
              month: "flex w-full flex-col gap-0 px-3",
              nav: "hidden",
              month_caption: "flex h-12 items-center px-3 pb-3 pt-4",
              caption_label:
                "select-none text-sm font-medium leading-5 tracking-[0.1px] text-muted-2",
              month_grid: "w-full border-collapse",
              weekdays: "hidden",
              week: "mt-0 flex w-full",
              day: "group/day relative size-12 select-none p-0 text-center",
              range_start:
                "relative isolate z-0 after:absolute after:inset-y-1 after:left-1/2 after:right-0 after:z-0 after:bg-range-band",
              range_middle: "bg-range-band bg-clip-content py-1",
              range_end:
                "relative isolate z-0 after:absolute after:inset-y-1 after:left-0 after:right-1/2 after:z-0 after:bg-range-band",
              today:
                "[&>button]:border [&>button]:border-accent [&>button]:text-accent",
              outside: "text-muted-2/50",
              hidden: "invisible",
              day_button: [
                "relative z-10 m-1 flex size-10 min-w-0 items-center justify-center rounded-full border-0 bg-transparent p-0",
                "text-base font-normal tracking-[0.5px] text-muted-2",
                "hover:bg-white/5 hover:text-ink",
                "data-[range-start=true]:rounded-full data-[range-start=true]:bg-accent-press data-[range-start=true]:text-ink",
                "data-[range-end=true]:rounded-full data-[range-end=true]:bg-accent data-[range-end=true]:text-bg",
                "data-[range-middle=true]:rounded-full data-[range-middle=true]:bg-transparent data-[range-middle=true]:text-ink",
                "data-[selected-single=true]:bg-accent-press data-[selected-single=true]:text-ink",
              ].join(" "),
            }}
          />
        </div>

        {/* footer */}
        <div className="flex items-center border-t border-m3-divider py-1 pb-2 pl-3 pr-3">
          <TextBtn onClick={() => setRange(undefined)}>Clear</TextBtn>
          <div className="ml-auto flex">
            <TextBtn onClick={onClose}>Cancel</TextBtn>
            <TextBtn onClick={onClose}>OK</TextBtn>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TextBtn({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`date-picker-${slug(children)}`}
      className="h-12 cursor-pointer rounded-full px-3 text-sm font-medium text-accent transition-colors duration-300 ease-(--ease-app) hover:bg-accent/10"
    >
      {children}
    </button>
  );
}

"use client";

import { CalendarDays } from "lucide-react";
import { classNames } from "../../lib/classNames";

export default function DateSelector({
  active = false,
  className,
  label,
  onClick,
  value = "Select date",
  ...props
}) {
  if (!label) {
    throw new Error("DateSelector requires a label.");
  }

  return (
    <button
      aria-expanded={active}
      aria-haspopup="dialog"
      className={classNames(
        "flex min-w-0 flex-1 items-center justify-between gap-3 rounded-brand border border-hairline bg-paper px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        active && "border-primary",
        className,
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      <span className="flex min-w-0 flex-col">
        <span className="font-body text-booking-label text-ink">{label}</span>
        <span className="font-body text-booking-value text-ink">{value}</span>
      </span>
      <CalendarDays aria-hidden="true" className="shrink-0 text-primary" size={20} />
    </button>
  );
}

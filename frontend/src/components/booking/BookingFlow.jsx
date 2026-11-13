"use client";

import { ChevronDown } from "lucide-react";
import {
  BOOKING_DEFAULTS,
  BOOKING_STATES_BY_MODE,
} from "../../lib/constants";
import { classNames } from "../../lib/classNames";
import Button from "../ui/Button";
import Typography from "../common/Typography";
import DateSelector from "./DateSelector";

function BookingField({ active, label, onClick, value }) {
  return (
    <button
      aria-expanded={active}
      aria-haspopup="dialog"
      className={classNames(
        "flex min-w-0 flex-1 items-center justify-between gap-3 rounded-brand border border-hairline bg-paper px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        active && "border-primary",
      )}
      onClick={onClick}
      type="button"
    >
      <span className="flex min-w-0 flex-col">
        <Typography variant="bookingLabel">{label}</Typography>
        <Typography variant="bookingValue">{value}</Typography>
      </span>
      <ChevronDown aria-hidden="true" className="shrink-0 text-primary" size={18} />
    </button>
  );
}

export default function BookingFlow({
  adults = BOOKING_DEFAULTS.adults,
  checkIn = BOOKING_DEFAULTS.checkIn,
  checkOut = BOOKING_DEFAULTS.checkOut,
  className,
  duration = BOOKING_DEFAULTS.duration,
  mode = "Night",
  onCheckAvailability,
  onStateChange,
  popover,
  rooms = BOOKING_DEFAULTS.rooms,
  state = "Empty",
}) {
  const allowedStates = BOOKING_STATES_BY_MODE[mode];

  if (!allowedStates) {
    throw new RangeError(`Unsupported booking mode: ${mode}`);
  }
  if (!allowedStates.includes(state)) {
    throw new RangeError(`Unsupported booking state "${state}" for mode "${mode}".`);
  }

  const activeField = state === "Check-in"
    ? "checkIn"
    : state === "Check-out"
      ? "checkOut"
      : state === "Duration"
        ? "duration"
        : state === "Guests"
          ? "guests"
          : null;
  const guestSummary = `${adults} ${adults === 1 ? "Adult" : "Adults"} · ${rooms} ${rooms === 1 ? "Room" : "Rooms"}`;

  return (
    <div className="relative w-full max-w-booking">
      <div
        aria-label={`${mode} booking`}
        className={classNames(
          "flex min-h-[136px] flex-wrap items-stretch gap-2 rounded-brand border border-hairline bg-paper p-4 shadow-booking-popover",
          className,
        )}
      >
        <DateSelector
          active={activeField === "checkIn"}
          label="Check-in"
          onClick={() => onStateChange?.("Check-in")}
          value={checkIn}
        />
        <DateSelector
          active={activeField === "checkOut"}
          label="Check-out"
          onClick={() => onStateChange?.("Check-out")}
          value={checkOut}
        />
        {mode === "Hourly" ? (
          <BookingField
            active={activeField === "duration"}
            label="Duration"
            onClick={() => onStateChange?.("Duration")}
            value={duration}
          />
        ) : null}
        <BookingField
          active={activeField === "guests"}
          label="Guests & Rooms"
          onClick={() => onStateChange?.("Guests")}
          value={guestSummary}
        />
        <Button
          className="min-h-[63px] min-w-[256px] flex-1"
          onClick={onCheckAvailability}
          variant="primary"
        >
          Check availability
        </Button>
      </div>
      {popover ? (
        <div className="absolute left-0 top-full z-10 rounded-brand bg-paper shadow-booking-popover">
          {popover}
        </div>
      ) : null}
    </div>
  );
}

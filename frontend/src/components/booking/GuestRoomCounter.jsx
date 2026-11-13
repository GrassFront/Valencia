"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { GUEST_ROOM_COUNTERS } from "../../lib/constants";
import { classNames } from "../../lib/classNames";
import IconButton from "../ui/IconButton";

export default function GuestRoomCounter({
  className,
  onChange,
  type = "adults",
  value,
}) {
  const config = GUEST_ROOM_COUNTERS[type];

  if (!config) {
    throw new RangeError(`Unsupported guest/room counter type: ${type}`);
  }

  const [internalValue, setInternalValue] = useState(config.initial);
  const count = value === undefined ? internalValue : value;

  function updateCount(nextValue) {
    const boundedValue = Math.min(config.max, Math.max(config.min, nextValue));
    if (value === undefined) {
      setInternalValue(boundedValue);
    }
    onChange?.(boundedValue);
  }

  return (
    <div
      aria-label={config.label}
      className={classNames(
        "inline-flex h-[34px] w-[120px] items-center justify-between rounded-brand border border-hairline bg-paper px-1",
        className,
      )}
      role="group"
    >
      <IconButton
        className="size-[26px]"
        disabled={count <= config.min}
        label={`Decrease ${config.label.toLowerCase()}`}
        onClick={() => updateCount(count - 1)}
      >
        <Minus aria-hidden="true" size={14} />
      </IconButton>
      <span aria-live="polite" className="font-body text-booking-value text-ink">
        {count}
      </span>
      <IconButton
        className="size-[26px]"
        disabled={count >= config.max}
        label={`Increase ${config.label.toLowerCase()}`}
        onClick={() => updateCount(count + 1)}
      >
        <Plus aria-hidden="true" size={14} />
      </IconButton>
    </div>
  );
}

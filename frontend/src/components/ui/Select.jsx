"use client";

import { forwardRef, useId } from "react";
import { ChevronDown } from "lucide-react";
import { classNames } from "../../lib/classNames";
import FormField from "./FormField";

const contextHeights = {
  enquiry: "min-h-[79px]",
  stay: "min-h-[73px]",
};

const Select = forwardRef(function Select(
  {
    children,
    className,
    context = "stay",
    error,
    hint,
    id,
    label,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const controlId = id || generatedId;
  const heightClass = contextHeights[context];

  if (!heightClass) {
    throw new RangeError(`Unsupported select context: ${context}`);
  }

  return (
    <FormField error={error} hint={hint} id={controlId} label={label}>
      <div className="relative w-full">
        <select
          aria-describedby={error || hint ? `${controlId}-description` : undefined}
          aria-invalid={Boolean(error)}
          className={classNames(
            "w-full appearance-none rounded-brand border border-hairline bg-paper px-4 pr-11 font-body text-booking-value text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            heightClass,
            className,
          )}
          id={controlId}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink"
          size={18}
        />
      </div>
    </FormField>
  );
});

export default Select;

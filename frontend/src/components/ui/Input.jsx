"use client";

import { forwardRef, useId } from "react";
import { classNames } from "../../lib/classNames";
import FormField from "./FormField";

const contextHeights = {
  enquiry: "min-h-[79px]",
  stay: "min-h-[73px]",
};

const Input = forwardRef(function Input(
  {
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
    throw new RangeError(`Unsupported input context: ${context}`);
  }

  return (
    <FormField error={error} hint={hint} id={controlId} label={label}>
      <input
        aria-describedby={error || hint ? `${controlId}-description` : undefined}
        aria-invalid={Boolean(error)}
        className={classNames(
          "w-full rounded-brand border border-hairline bg-paper px-4 font-body text-booking-value text-ink placeholder:text-ink/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          heightClass,
          className,
        )}
        id={controlId}
        ref={ref}
        {...props}
      />
    </FormField>
  );
});

export default Input;

"use client";

import { forwardRef, useId } from "react";
import { classNames } from "../../lib/classNames";
import FormField from "./FormField";

const contextHeights = {
  enquiry: "min-h-[117px]",
  stay: "min-h-[91px]",
};

const Textarea = forwardRef(function Textarea(
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
    throw new RangeError(`Unsupported textarea context: ${context}`);
  }

  return (
    <FormField error={error} hint={hint} id={controlId} label={label}>
      <textarea
        aria-describedby={error || hint ? `${controlId}-description` : undefined}
        aria-invalid={Boolean(error)}
        className={classNames(
          "w-full resize-y rounded-brand border border-hairline bg-paper px-4 py-3 font-body text-booking-value text-ink placeholder:text-ink/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
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

export default Textarea;

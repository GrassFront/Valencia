"use client";

import { classNames } from "../../lib/classNames";

export default function IconButton({
  children,
  className,
  label,
  type = "button",
  ...props
}) {
  if (!label) {
    throw new Error("IconButton requires an accessible label.");
  }

  return (
    <button
      aria-label={label}
      className={classNames(
        "inline-flex items-center justify-center rounded-brand text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

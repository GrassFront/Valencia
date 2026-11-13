"use client";

import { classNames } from "../../lib/classNames";

const variantClasses = {
  primary: "border-transparent bg-primary text-ivory",
  secondary: "border-transparent bg-accent text-ink",
  text: "border-transparent bg-transparent px-0 text-primary",
};

export default function Button({
  as,
  children,
  className,
  href,
  type = "button",
  variant = "primary",
  ...props
}) {
  const Component = as || (href ? "a" : "button");
  const variantClass = variantClasses[variant];

  if (!variantClass) {
    throw new RangeError(`Unsupported button variant: ${variant}`);
  }

  return (
    <Component
      className={classNames(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-brand border px-4 py-3 font-body text-booking-button transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50",
        variantClass,
        className,
      )}
      {...(Component === "button" ? { type } : { href })}
      {...props}
    >
      {children}
    </Component>
  );
}

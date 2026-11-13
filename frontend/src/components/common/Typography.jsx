import { classNames } from "../../lib/classNames";

const variantClasses = {
  body: "font-body",
  heading: "font-display",
  brandHeadline: "font-display text-brand-headline",
  brandWordmark: "font-display text-brand-wordmark text-primary",
  brandEyebrow: "font-body text-brand-eyebrow text-accent uppercase",
  bookingLabel: "font-body text-booking-label",
  bookingValue: "font-body text-booking-value",
  bookingButton: "font-body text-booking-button",
};

export default function Typography({
  as: Component = "span",
  children,
  className,
  variant = "body",
  ...props
}) {
  const variantClass = variantClasses[variant];

  if (!variantClass) {
    throw new RangeError(`Unsupported typography variant: ${variant}`);
  }

  return (
    <Component className={classNames(variantClass, className)} {...props}>
      {children}
    </Component>
  );
}

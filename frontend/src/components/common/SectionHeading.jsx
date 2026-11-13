import { classNames } from "../../lib/classNames";
import Typography from "./Typography";

export default function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  id,
  title,
  titleClassName,
}) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
  };
  const alignmentClass = alignmentClasses[align];

  if (!alignmentClass) {
    throw new RangeError(`Unsupported section heading alignment: ${align}`);
  }

  return (
    <div
      aria-labelledby={id}
      className={classNames("flex max-w-wide flex-col gap-3", alignmentClass, className)}
    >
      {eyebrow ? (
        <Typography variant="brandEyebrow">{eyebrow}</Typography>
      ) : null}
      <Typography
        as="h2"
        className={classNames("text-ink", titleClassName)}
        id={id}
        variant="brandHeadline"
      >
        {title}
      </Typography>
      {description ? (
        <Typography as="p" className="text-ink">
          {description}
        </Typography>
      ) : null}
    </div>
  );
}

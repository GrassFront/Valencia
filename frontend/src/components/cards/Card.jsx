import { classNames } from "../../lib/classNames";

export default function Card({
  as: Component = "article",
  children,
  className,
  ...props
}) {
  return (
    <Component
      className={classNames(
        "overflow-hidden rounded-brand border border-hairline bg-paper",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

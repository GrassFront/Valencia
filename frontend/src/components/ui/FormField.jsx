export default function FormField({
  children,
  error,
  hint,
  id,
  label,
}) {
  const descriptionId = hint || error ? `${id}-description` : undefined;

  return (
    <div className="flex w-full flex-col gap-2">
      {label ? (
        <label className="font-body text-booking-label text-ink" htmlFor={id}>
          {label}
        </label>
      ) : null}
      {children}
      {error || hint ? (
        <span
          className={error ? "font-body text-sm text-rich-brown" : "font-body text-sm text-ink"}
          id={descriptionId}
        >
          {error || hint}
        </span>
      ) : null}
    </div>
  );
}

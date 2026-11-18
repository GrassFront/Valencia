export function ArrowRightIcon({ className = "w-4 h-4", strokeWidth = 1.6 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.167 10h11.666M11.667 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "w-4 h-4", strokeWidth = 1.6 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 4.167v11.666M5 11.667l5 5 5-5" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.25" y="3.75" width="13.5" height="12" rx="1.5" />
      <path d="M12 2.25v3M6 2.25v3M2.25 7.5h13.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 6.75l4.5 4.5 4.5-4.5" />
    </svg>
  );
}

export function InfoCircleIcon({ className = "w-5 h-5", stroke = "#C9A64B" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke={stroke}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="M10 9v5M10 6.5h.01" />
    </svg>
  );
}

export function PhoneHelpIcon({ className = "w-8 h-8", stroke = "#D1B35B" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 33 33"
      fill="none"
      stroke={stroke}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M29.5 22.8c-1.8 0-3.6-.3-5.2-.9-.8-.3-1.7-.1-2.3.5l-3.3 3.3c-4.2-2.1-7.7-5.6-9.8-9.8l3.3-3.3c.6-.6.8-1.5.5-2.3C12 8.7 11.7 6.9 11.7 5.1c0-1-.8-1.8-1.8-1.8H5.1c-1 0-1.8.8-1.8 1.8C3.3 19.3 14.7 30.7 28.7 30.7c1 0 1.8-.8 1.8-1.8v-4.3c0-1-.8-1.8-1-1.8z" />
    </svg>
  );
}

import React from "react";

// Location Pin Marker Icon (matching Figma vector)
export function LocationMarkerIcon({ size = 24, color = "#D0AB61", className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 27) / 20)}
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 17.5 10 27 10 27C10 27 20 17.5 20 10C20 4.48 15.52 0 10 0ZM10 13.5C8.07 13.5 6.5 11.93 6.5 10C6.5 8.07 8.07 6.5 10 6.5C11.93 6.5 13.5 8.07 13.5 10C13.5 11.93 11.93 13.5 10 13.5Z"
        fill={color}
      />
      <circle cx="10" cy="10" r="3.5" fill="#FAF6EC" />
    </svg>
  );
}

// Arrow Right Icon for buttons
export function ArrowRightIcon({ size = 20, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow Down Icon for scroll actions
export function ArrowDownIcon({ size = 20, color = "currentColor", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 5V19M12 19L5 12M12 19L19 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Calendar icon for date input
export function CalendarIcon({ size = 20, color = "#655344", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      <path d="M16 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M8 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M3 10H21" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// Section title decorative gold dividers (left & right 60px x 2px)
export function SectionTitleWithDividers({
  eyebrow,
  color = "#BE9546",
  dividerColor = "#BE9546",
  className = "",
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 sm:gap-6 lg:gap-[26px] ${className}`}
    >
      <span
        className="w-[40px] sm:w-[60px] h-[2px] shrink-0"
        style={{ backgroundColor: dividerColor }}
        aria-hidden="true"
      />
      <span
        className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] tracking-[3px] sm:tracking-[4px] uppercase text-center"
        style={{ color }}
      >
        {eyebrow}
      </span>
      <span
        className="w-[40px] sm:w-[60px] h-[2px] shrink-0"
        style={{ backgroundColor: dividerColor }}
        aria-hidden="true"
      />
    </div>
  );
}

import React from "react";

// Concept Image badge overlay (disabled - watermarks removed as per specification)
export function ConceptBadge() {
  return null;
}

// Lotus Ornament with side gold lines (used in Section 05 & Section 07)
export function LotusOrnament({
  className = "",
  lineWidth = "127px",
  color = "#C8A153",
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 sm:gap-6 lg:gap-[32px] w-full max-w-[372px] ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex-1 h-[1px]"
        style={{ maxWidth: lineWidth, backgroundColor: color }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Umrao/lotus.png"
        alt="Lotus ornament"
        width={48}
        height={33}
        className="object-contain shrink-0"
      />
      <div
        className="flex-1 h-[1px]"
        style={{ maxWidth: lineWidth, backgroundColor: color }}
      />
    </div>
  );
}

// Standalone Lotus vector icon
export function LotusIcon({ size = 33, color = "#C49A4A", className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 26) / 33)}
      viewBox="0 0 44 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central upright bud/petal */}
      <path
        d="M22 2C22 2 17.5 10 17.5 18C17.5 24 20 28 22 29C24 28 26.5 24 26.5 18C26.5 10 22 2 22 2Z"
        fill={color}
      />
      {/* Inner left petal */}
      <path
        d="M20.5 13C16 14.5 11 18.5 11 24C11 28 14.5 29.5 18 29C15.5 26.5 15.5 21.5 20.5 13Z"
        fill={color}
      />
      {/* Inner right petal */}
      <path
        d="M23.5 13C28 14.5 33 18.5 33 24C33 28 29.5 29.5 26 29C28.5 26.5 28.5 21.5 23.5 13Z"
        fill={color}
      />
      {/* Outer left spreading petal */}
      <path
        d="M17 21C11.5 22 4 25.5 4 30C4 32.5 8 33 12.5 31.5C8 29.5 10.5 25.5 17 21Z"
        fill={color}
      />
      {/* Outer right spreading petal */}
      <path
        d="M27 21C32.5 22 40 25.5 40 30C40 32.5 36 33 31.5 31.5C36 29.5 33.5 25.5 27 21Z"
        fill={color}
      />
      {/* Base lotus pedestal */}
      <path
        d="M16 30C19 32 25 32 28 30C26 33 18 33 16 30Z"
        fill={color}
      />
    </svg>
  );
}

// Arrow right icon for buttons
export function ArrowRightIcon({ size = 22, color = "currentColor", className = "" }) {
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
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow down icon for "EXPLORE VENUES ↓"
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
        d="M12 5V19M12 19L6 13M12 19L18 13"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Expand / Fullscreen icon for gallery items
export function ExpandIcon({ size = 22, color = "#FAF6EC", className = "" }) {
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
        d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Gold location pin icon for address
export function LocationPinIcon({ size = 24, color = "#C49A4A", className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 34) / 26)}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 1C6.477 1 2 5.477 2 11C2 18.5 12 31 12 31C12 31 22 18.5 22 11C22 5.477 17.523 1 12 1Z"
        fill={color}
      />
      <circle cx="12" cy="11" r="4" fill="#FAF6EC" />
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
        strokeWidth="1.8"
      />
      <path d="M16 2V6M8 2V6M3 10H21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Section title decorative gold dividers (left & right 60px x 2px)
export function SectionTitleWithDividers({
  eyebrow,
  color = "#194E35",
  dividerColor = "#C49A4A",
  className = "",
}) {
  return (
    <div
      className={`flex items-center justify-center gap-4 sm:gap-6 ${className}`}
    >
      <span
        className="w-[40px] sm:w-[60px] h-[2px] shrink-0"
        style={{ backgroundColor: dividerColor }}
        aria-hidden="true"
      />
      <span
        className="font-body font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-center"
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

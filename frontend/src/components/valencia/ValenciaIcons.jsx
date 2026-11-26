import React from "react";

// Neoclassical Architecture building icon
export function NeoclassicalIcon({ className = "w-[66px] h-[59px]", color = "#BD9749" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 66 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Triangular pediment roof */}
      <path
        d="M33 5L5 22H61L33 5Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Roof pediment detail */}
      <circle cx="33" cy="14" r="2.5" fill={color} />
      {/* Architrave horizontal bar */}
      <rect x="5" y="22" width="56" height="4" fill={color} rx="1" />
      {/* 4 Classical Columns */}
      <rect x="10" y="28" width="5" height="23" fill={color} rx="1" />
      <rect x="24" y="28" width="5" height="23" fill={color} rx="1" />
      <rect x="37" y="28" width="5" height="23" fill={color} rx="1" />
      <rect x="51" y="28" width="5" height="23" fill={color} rx="1" />
      {/* Base steps */}
      <rect x="5" y="51" width="56" height="3" fill={color} rx="1" />
      <rect x="2" y="54" width="62" height="3" fill={color} rx="1" />
    </svg>
  );
}

// 17-ft Clear Height icon
export function HeightIcon({ className = "w-[66px] h-[82px]", color = "#BD9749" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 66 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top horizontal boundary line */}
      <line x1="8" y1="8" x2="58" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Bottom horizontal boundary line */}
      <line x1="8" y1="74" x2="58" y2="74" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Vertical arrow shaft */}
      <line x1="33" y1="12" x2="33" y2="70" stroke={color} strokeWidth="3" />
      {/* Top arrow head */}
      <path
        d="M24 23L33 11L42 23"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom arrow head */}
      <path
        d="M24 59L33 71L42 59"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 4 Room Categories Bed icon
export function BedCategoryIcon({ className = "w-[66px] h-[48px]", color = "#BD9749" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 66 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Headboard */}
      <path
        d="M6 10C6 7.79086 7.79086 6 10 6H56C58.2091 6 60 7.79086 60 10V26H6V10Z"
        stroke={color}
        strokeWidth="2.5"
      />
      {/* Pillows */}
      <rect x="12" y="14" width="18" height="9" rx="2" stroke={color} strokeWidth="2" />
      <rect x="36" y="14" width="18" height="9" rx="2" stroke={color} strokeWidth="2" />
      {/* Mattress / Duvet */}
      <rect x="4" y="26" width="58" height="10" rx="1.5" stroke={color} strokeWidth="2.5" />
      {/* Bed legs */}
      <line x1="8" y1="36" x2="8" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="58" y1="36" x2="58" y2="44" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Pin icon for Location
export function PinIcon({ className = "w-[66px] h-[81px]", color = "#BD9749" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 66 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Base ellipse shadow */}
      <ellipse
        cx="33"
        cy="72"
        rx="15"
        ry="5.5"
        stroke={color}
        strokeWidth="2.5"
      />
      {/* Location pin teardrop */}
      <path
        d="M33 7C22 7 13 16 13 27.5C13 41.5 31.5 65.5 32.4 66.8C32.7 67.2 33.3 67.2 33.6 66.8C34.5 65.5 53 41.5 53 27.5C53 16 44 7 33 7Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner hollow circle */}
      <circle cx="33" cy="27" r="7" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

// In-room Dining Cloche icon
export function ClocheIcon({ className = "w-[90px] h-[67px]", color = "#BD9749" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Knob */}
      <circle cx="45" cy="14" r="5" stroke={color} strokeWidth="2.5" />
      <path d="M45 19V22" stroke={color} strokeWidth="2.5" />
      {/* Cloche Dome */}
      <path
        d="M14 48C14 29 27.88 22 45 22C62.12 22 76 29 76 48H14Z"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Platter base */}
      <rect x="8" y="48" width="74" height="4.5" rx="2" fill={color} />
      <line x1="16" y1="56" x2="74" y2="56" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Guest Assistance Reception Bell icon
export function BellIcon({ className = "w-[90px] h-[70px]", color = "#BD9749" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top push button */}
      <rect x="42" y="8" width="6" height="5" rx="1" fill={color} />
      <path d="M40 13H50" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Bell Dome */}
      <path
        d="M20 50C20 32 30 20 45 20C60 20 70 32 70 50H20Z"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Bell Rim */}
      <path
        d="M16 50C16 48.5 17.5 47 19 47H71C72.5 47 74 48.5 74 50V52H16V50Z"
        fill={color}
      />
      {/* Base stand */}
      <rect x="12" y="54" width="66" height="4.5" rx="2" fill={color} />
    </svg>
  );
}

// Architectural Decorative Window SVG
export function ArchitecturalWindowSvg({ className = "w-[146px] h-[235px]" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 146 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer arched frame */}
      <path
        d="M6 230V75C6 36.89 36.89 6 75 6C113.11 6 144 36.89 144 75V230H6Z"
        stroke="#C0B58D"
        strokeWidth="1.8"
      />
      {/* Inner arched frame */}
      <path
        d="M18 230V78C18 46.52 43.52 21 75 21C106.48 21 132 46.52 132 78V230H18Z"
        stroke="#C0B58D"
        strokeWidth="1.2"
      />
      {/* Center vertical mullion */}
      <line x1="75" y1="21" x2="75" y2="230" stroke="#C0B58D" strokeWidth="1.2" />
      {/* Horizontal transom bars */}
      <line x1="6" y1="78" x2="144" y2="78" stroke="#C0B58D" strokeWidth="1.5" />
      <line x1="6" y1="126" x2="144" y2="126" stroke="#C0B58D" strokeWidth="1.2" />
      <line x1="6" y1="174" x2="144" y2="174" stroke="#C0B58D" strokeWidth="1.2" />
      {/* Radiating sunburst spokes in top arch */}
      <line x1="75" y1="78" x2="40" y2="38" stroke="#C0B58D" strokeWidth="1" />
      <line x1="75" y1="78" x2="110" y2="38" stroke="#C0B58D" strokeWidth="1" />
    </svg>
  );
}

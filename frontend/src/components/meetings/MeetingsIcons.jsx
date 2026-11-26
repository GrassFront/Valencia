import React from "react";

export function CapacityIcon({ className = "w-[34px] h-[30px]" }) {
  return (
    <svg
      width="34"
      height="30"
      viewBox="0 0 34 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M21 7C21 9.209 19.209 11 17 11C14.791 11 13 9.209 13 7C13 4.791 14.791 3 17 3C19.209 3 21 4.791 21 7Z"
        stroke="#BF8C46"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 25V20C9 17.878 9.843 15.843 11.343 14.343C12.843 12.843 14.878 12 17 12C19.122 12 21.157 12.843 22.657 14.343C24.157 15.843 25 17.878 25 20V25H9Z"
        stroke="#BF8C46"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 10C8 11.657 6.657 13 5 13C3.343 13 2 11.657 2 10C2 8.343 3.343 7 5 7C6.657 7 8 8.343 8 10Z"
        stroke="#BF8C46"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M1 24V19C0.985 18.25 1.139 17.507 1.45 16.824C1.761 16.142 2.222 15.538 2.798 15.058C3.374 14.578 4.051 14.233 4.779 14.05C5.506 13.867 6.265 13.85 7 14"
        stroke="#BF8C46"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M32 10C32 11.657 30.657 13 29 13C27.343 13 26 11.657 26 10C26 8.343 27.343 7 29 7C30.657 7 32 8.343 32 10Z"
        stroke="#BF8C46"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M33 24V19C33.015 18.25 32.861 17.507 32.55 16.824C32.239 16.142 31.778 15.538 31.202 15.058C30.626 14.578 29.949 14.233 29.221 14.05C28.494 13.867 27.735 13.85 27 14"
        stroke="#BF8C46"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LayoutsIcon({ className = "w-[29px] h-[29px]" }) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="11" height="11" stroke="#BF8C46" strokeWidth="1.5" />
      <rect x="16" y="2" width="11" height="11" stroke="#BF8C46" strokeWidth="1.5" />
      <rect x="2" y="16" width="11" height="11" stroke="#BF8C46" strokeWidth="1.5" />
      <rect x="16" y="16" width="11" height="11" stroke="#BF8C46" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5", stroke = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "w-5 h-5", stroke = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

export function CalendarIcon({ className = "w-4 h-4", stroke = "#776B61" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" stroke={stroke} strokeWidth="1.2" />
      <rect x="5" y="5" width="6" height="6" fill={stroke} />
    </svg>
  );
}

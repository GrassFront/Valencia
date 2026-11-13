"use client";

import { useId } from "react";

export default function Checkbox({
  id,
  checked,
  onChange,
  children,
  label,
  className = "",
  disabled = false,
  ...props
}) {
  const generatedId = useId();
  const controlId = id || generatedId;

  return (
    <label
      htmlFor={controlId}
      className={`inline-flex items-center gap-[13px] cursor-pointer select-none group ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <div className="relative w-[24px] h-[24px] shrink-0">
        <input
          id={controlId}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <div
          className={`w-[24px] h-[24px] rounded-[5px] border transition-colors flex items-center justify-center ${
            checked
              ? "bg-[#164C3B] border-[#164C3B]"
              : "bg-white border-[#888C8C] group-hover:border-[#164C3B]"
          }`}
        >
          {checked && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M2.5 7.5L5.5 10.5L11.5 3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <span className="font-body text-[15px] sm:text-[16px] leading-[22px] text-[#655B51]">
        {children || label}
      </span>
    </label>
  );
}


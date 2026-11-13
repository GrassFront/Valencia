"use client";

import { getPasswordStrength } from "../../features/auth/utils/passwordStrength";

export default function PasswordStrength({ password = "", className = "" }) {
  const { label, barsFilled, colorClass } = getPasswordStrength(password);

  return (
    <div className={`w-full max-w-[552px] flex flex-col gap-2 ${className}`}>
      {/* Header row */}
      <div className="w-full flex items-center justify-between">
        <span className="font-body text-[16px] sm:text-[17px] leading-[23px] text-[#655B51]">
          Password strength
        </span>
        <span
          className={`font-body text-[15px] sm:text-[16px] leading-[22px] ${
            barsFilled === 0 ? "text-[#969390]" : "text-[#164C3B] font-medium"
          }`}
        >
          {label}
        </span>
      </div>

      {/* 4 segments */}
      <div className="w-full flex items-center gap-[4px] h-[8px]" role="progressbar" aria-valuenow={barsFilled} aria-valuemin={0} aria-valuemax={4}>
        {[0, 1, 2, 3].map((index) => {
          const isFilled = index < barsFilled;
          return (
            <div
              key={index}
              className={`flex-1 h-[8px] rounded-[4px] transition-colors duration-300 ${
                isFilled ? colorClass : "bg-[#D8D7D4]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}


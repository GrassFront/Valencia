"use client";

import { forwardRef } from "react";

const AuthInput = forwardRef(function AuthInput(
  {
    id,
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    hint,
    required = false,
    heightClass = "h-[55px]",
    rightElement = null,
    className = "",
    inputClassName = "",
    ...props
  },
  ref,
) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={`w-full max-w-[552px] flex flex-col items-start gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="font-body text-[16px] sm:text-[18px] leading-[24px] text-[#514B46] select-none"
        >
          {label}
        </label>
      )}

      <div
        className={`w-full ${heightClass} bg-[#FCFBF9] border ${
          error ? "border-red-500" : "border-[#D5D5D5]"
        } focus-within:border-[#164C3B] rounded-[6px] px-[22px] flex items-center justify-between transition-colors shadow-none`}
      >
        <input
          id={inputId}
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full h-full bg-transparent border-none outline-none font-body text-[16px] sm:text-[18px] leading-[24px] text-[#233028] placeholder:text-[#969390] ${inputClassName}`}
          {...props}
        />
        {rightElement && (
          <div className="shrink-0 flex items-center ml-2">{rightElement}</div>
        )}
      </div>

      {hint && !error && (
        <p className="font-body text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] text-[#969390]">
          {hint}
        </p>
      )}

      {error && (
        <p className="font-body text-[14px] leading-[18px] text-[#C53030]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default AuthInput;


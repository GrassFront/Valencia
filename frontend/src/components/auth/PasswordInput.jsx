"use client";

import { forwardRef, useState } from "react";
import AuthInput from "./AuthInput";

const PasswordInput = forwardRef(function PasswordInput(
  {
    id,
    label = "Password",
    placeholder = "Enter your password",
    value,
    onChange,
    error,
    hint,
    heightClass = "h-[55px]",
    className = "",
    ...props
  },
  ref,
) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const eyeIcon = (
    <button
      type="button"
      onClick={toggleVisibility}
      aria-label={showPassword ? "Hide password" : "Show password"}
      className="w-[28px] h-[28px] flex items-center justify-center text-[#777B80] hover:text-[#514B46] transition-colors focus:outline-none"
    >
      {showPassword ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[22px] h-[22px]"
        >
          {/* Eye open outline */}
          <path
            d="M2 12C3.8 7.5 7.5 4.5 12 4.5C16.5 4.5 20.2 7.5 22 12C20.2 16.5 16.5 19.5 12 19.5C7.5 19.5 3.8 16.5 2 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          {/* Diagonal strike */}
          <line
            x1="4"
            y1="20"
            x2="20"
            y2="4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[22px] h-[22px]"
        >
          {/* Eye contour */}
          <path
            d="M2 12C3.8 7.5 7.5 4.5 12 4.5C16.5 4.5 20.2 7.5 22 12C20.2 16.5 16.5 19.5 12 19.5C7.5 19.5 3.8 16.5 2 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Pupil */}
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </button>
  );

  return (
    <AuthInput
      id={id}
      ref={ref}
      type={showPassword ? "text" : "password"}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      hint={hint}
      heightClass={heightClass}
      rightElement={eyeIcon}
      className={className}
      {...props}
    />
  );
});

export default PasswordInput;


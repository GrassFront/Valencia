"use client";

import Link from "next/link";

export default function AuthButton({
  children,
  type = "submit",
  href,
  onClick,
  disabled = false,
  loading = false,
  heightClass = "h-[56px] sm:h-[60px]",
  className = "",
  showArrow = true,
  ...props
}) {
  const content = (
    <>
      <span className="font-body text-[17px] sm:text-[19px] leading-[26px] tracking-[2px] font-normal uppercase text-white">
        {loading ? "Processing..." : children}
      </span>
      {showArrow && !loading && (
        <span className="w-[27px] h-[27px] flex items-center justify-center shrink-0" aria-hidden="true">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[27px] h-[27px] text-white"
          >
            <path
              d="M4 13.5H23M16 6.5L23 13.5L16 20.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </>
  );

  const baseClasses = `w-full max-w-[552px] ${heightClass} bg-[#164C3B] hover:bg-[#123E30] active:bg-[#0D2E24] text-white rounded-[6px] flex items-center justify-center gap-[17px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164C3B] disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
}


"use client";

import Link from "next/link";

export default function FooterBottom({ variant = "primary" }) {
  const isSecondary = variant === "secondary" || variant === "green";
  const textColor = isSecondary ? "text-[#F8F5EA]/85" : "text-[#CBBBA9]";
  const borderColor = isSecondary ? "border-[#C9A96A]/25" : "border-[#C9A96A]/20";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`w-full pt-4 md:pt-3 pb-2 md:pb-1.5 border-t ${borderColor} mt-5 sm:mt-5 flex flex-col md:flex-row items-center justify-between gap-3`}>
      {/* Copyright */}
      <p className={`order-2 md:order-1 text-[11.5px] sm:text-[12px] ${textColor} font-body text-center md:text-left`}>
        © 2026 VALENCIA. All rights reserved.
      </p>

      {/* Legal Links and Back-to-Top */}
      <div className="order-1 md:order-2 flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-5 w-full md:w-auto">
        <div className={`flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11.5px] sm:text-[12px] ${textColor} font-body`}>
          <Link
            href="/privacy-policy"
            className="hover:text-[#FAF4EB] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="opacity-50">·</span>
          <Link
            href="/terms-conditions"
            className="hover:text-[#FAF4EB] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
          <span className="hidden sm:inline opacity-50">·</span>
          <Link
            href="/booking-cancellation"
            className="basis-full sm:basis-auto text-center hover:text-[#FAF4EB] transition-colors"
          >
            Booking &amp; Cancellation
          </Link>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="hidden md:flex w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-[#C9A96A]/60 items-center justify-center text-[#C9A96A] hover:text-[#FAF4EB] hover:border-[#FAF4EB] transition-all duration-300 hover:scale-105 ml-1 cursor-pointer"
        >
          <span className="text-xs font-light select-none">↑</span>
        </button>
      </div>
    </div>
  );
}

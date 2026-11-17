"use client";

import FooterBrand from "./FooterBrand";
import FooterExplore from "./FooterExplore";
import FooterProperties from "./FooterProperties";
import FooterBottom from "./FooterBottom";

export { default as FooterBrand } from "./FooterBrand";
export { default as FooterExplore } from "./FooterExplore";
export { default as FooterProperties } from "./FooterProperties";
export { default as FooterBottom } from "./FooterBottom";

export function FooterPrimary(props) {
  return <Footer variant="primary" {...props} />;
}

export function FooterSecondary(props) {
  return <Footer variant="secondary" {...props} />;
}

export default function Footer({ variant = "primary", className = "", style = {} }) {
  const isSecondary = variant === "secondary" || variant === "green";
  const bgClass = isSecondary ? "bg-[var(--colour-deep-green,#1B4D32)]" : "bg-[#4B3523]";
  const borderTopClass = isSecondary ? "bg-[#C9A96A]/25" : "bg-[#C9A96A]/15";
  const dividerClass = isSecondary ? "bg-[#C9A96A]/30" : "bg-[#C9A96A]/25";

  return (
    <footer
      aria-label="Site Footer"
      style={isSecondary ? { backgroundColor: "var(--colour-deep-green, #1B4D32)", ...style } : style}
      className={`relative w-full ${bgClass} text-[#FAF4EB] overflow-hidden ${className}`}
    >
      {/* Decorative subtle top hairline */}
      <div className={`w-full h-[1px] ${borderTopClass}`} />

      {/* Main Content Container */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-5 sm:pt-6 lg:pt-6 pb-2.5">
        {/* 3 Columns with Vertical Dividers on Desktop */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
          {/* Left Column: Brand, Tagline, Socials (~40% on desktop) */}
          <div className="w-full lg:w-[40%] lg:pr-10 xl:pr-14 flex flex-col items-center justify-start">
            <FooterBrand variant={variant} />
          </div>

          {/* Vertical Divider 1 */}
          <div
            className={`hidden lg:block w-[1px] ${dividerClass} shrink-0 self-stretch my-1`}
            aria-hidden="true"
          />

          {/* Middle & Right Columns Container */}
          <div className="w-full lg:w-[60%] flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-6 lg:gap-0">
            {/* Middle Column: Explore Navigation (~33% of remaining width) */}
            <div className="w-full sm:w-[35%] lg:w-[33%] lg:px-8 xl:px-12 flex flex-col justify-start">
              <FooterExplore />
            </div>

            {/* Vertical Divider 2 */}
            <div
              className={`hidden lg:block w-[1px] ${dividerClass} shrink-0 self-stretch my-1`}
              aria-hidden="true"
            />

            {/* Right Column: Our Properties (~67% of remaining width) */}
            <div className="w-full sm:w-[65%] lg:w-[67%] lg:pl-10 xl:pl-14 flex flex-col justify-start">
              <FooterProperties variant={variant} />
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright / Back to Top Bar */}
        <FooterBottom variant={variant} />
      </div>
    </footer>
  );
}

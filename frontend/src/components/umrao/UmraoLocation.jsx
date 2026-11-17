"use client";

import Link from "next/link";
import {
  SectionTitleWithDividers,
  LocationPinIcon,
  ArrowRightIcon,
} from "./UmraoIcons";

export default function UmraoLocation() {
  return (
    <section
      aria-label="Find Umrao"
      className="relative w-full bg-[#F6EFE3] py-12 sm:py-14 lg:py-[44px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[28px] flex flex-col items-center">
        {/* Section Title */}
        <SectionTitleWithDividers
          eyebrow="FIND UMRAO"
          color="#194E35"
          dividerColor="#C49A4A"
        />

        {/* Spacing: 16px */}
        <div className="h-3 sm:h-4 lg:h-[16px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.2] lg:leading-[71px] text-[#503522] text-center max-w-[850px]">
          Bring everyone together in Patna.
        </h2>

        {/* Spacing: 42px */}
        <div className="h-6 sm:h-8 lg:h-[42px]" aria-hidden="true" />

        {/* Venue Location & Illustrative Map Card (width: 1384px, height: 490px desktop) */}
        <div className="w-full max-w-[1384px] bg-[#FAF6EC] rounded-[20px] sm:rounded-[26px] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-black/5">
          {/* Left Column: Venue visit details (width: 562px desktop) */}
          <div className="w-full lg:w-[562px] flex flex-col items-start p-6 sm:p-10 lg:pt-[43px] lg:pl-[43px] lg:pr-8 lg:pb-10 border-b lg:border-b-0 lg:border-r border-black/10 shrink-0">
            {/* Title */}
            <h3 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.18] lg:leading-[58px] text-[#503522]">
              Umrao The Banquet
            </h3>

            {/* Spacing: 19px */}
            <div className="h-3 sm:h-4 lg:h-[19px]" aria-hidden="true" />

            {/* Address Row */}
            <div className="flex items-center gap-3 sm:gap-[18px]">
              <LocationPinIcon size={26} color="#C49A4A" className="shrink-0" />
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[25px] text-[#503522]">
                Zero Mile, Masaurhi Road, Patna, Bihar 800007
              </p>
            </div>

            {/* Spacing: 29px */}
            <div className="h-4 sm:h-6 lg:h-[29px]" aria-hidden="true" />

            {/* Divider: 68px x 2px */}
            <div className="w-[68px] h-[2px] bg-[#C49A4A]" aria-hidden="true" />

            {/* Spacing: 22px */}
            <div className="h-3 sm:h-4 lg:h-[22px]" aria-hidden="true" />

            {/* Description */}
            <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[24px] sm:leading-[26px] text-[#503522] max-w-[495px]">
              Plan your visit and explore the spaces in person before your celebration.
            </p>

            {/* Spacing: 32px */}
            <div className="h-5 sm:h-6 lg:h-[32px]" aria-hidden="true" />

            {/* Button: REQUEST A VENUE VISIT → */}
            <Link
              href="#enquiry"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-[380px] h-[52px] sm:h-[56px] bg-[#194E35] hover:bg-[#123d2a] active:bg-[#0c2b1e] rounded-[9px] text-[#FAF6EC] transition-all shadow-md group"
            >
              <span className="font-body font-bold text-[17px] sm:text-[19px] lg:text-[21px] leading-[26px] tracking-wide uppercase">
                REQUEST A VENUE VISIT
              </span>
              <ArrowRightIcon
                size={22}
                color="#FAF6EC"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            {/* Spacing: 25px */}
            <div className="h-4 sm:h-5 lg:h-[25px]" aria-hidden="true" />

            {/* Contact for directions → */}
            <a
              href="https://maps.google.com/?q=Zero+Mile+Masaurhi+Road+Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] text-[#194E35] hover:text-[#0f3424] underline transition-colors"
            >
              Contact for directions →
            </a>

            {/* Spacing: 28px */}
            <div className="h-4 sm:h-5 lg:h-[28px]" aria-hidden="true" />

            {/* Note */}
            <p className="font-body font-normal text-[14px] sm:text-[15px] lg:text-[17px] leading-[21px] text-[#503522]">
              Our team will confirm your visit and share arrival guidance.
            </p>
          </div>

          {/* Right Column: Illustrative Map (width: 822px desktop, height: 490px) */}
          <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] lg:h-[490px] bg-[#F6F1E5] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-7">
            {/* Background SVG Illustrative Map matching Screenshot 8 */}
            <svg
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              viewBox="0 0 822 490"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Soft Ground Base */}
              <rect width="822" height="490" fill="#F6F1E5" />

              {/* Park and Greenery polygon on upper-left */}
              <path
                d="M-20 -20 L440 -20 L410 140 L350 210 L180 230 L-20 220 Z"
                fill="#D8E3BB"
                opacity="0.8"
              />

              {/* Secondary green patch lower-left */}
              <path
                d="M-20 380 L320 370 L340 510 L-20 510 Z"
                fill="#D8E3BB"
                opacity="0.75"
              />

              {/* Secondary road network (light tan #E7DCC4) */}
              <path
                d="M-30 80 L850 140"
                stroke="#E7DCC4"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M260 -30 L160 520"
                stroke="#E7DCC4"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M520 -30 L550 520"
                stroke="#E7DCC4"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M-30 330 L850 290"
                stroke="#E7DCC4"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M680 -30 L730 520"
                stroke="#E7DCC4"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Main Connecting Highway / Avenue (#DFD0AD with border) */}
              <path
                d="M-20 240 C 220 235, 480 250, 620 295 C 720 330, 800 370, 850 400"
                stroke="#DFD0AD"
                strokeWidth="18"
                strokeLinecap="round"
              />
              <path
                d="M-20 240 C 220 235, 480 250, 620 295 C 720 330, 800 370, 850 400"
                stroke="#F2E6CE"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* Diagonal cross connectors */}
              <path
                d="M80 -20 L620 340"
                stroke="#E7DCC4"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M480 180 L840 210"
                stroke="#E7DCC4"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>

            {/* Top Right: Pill Badge (ILLUSTRATIVE MAP) */}
            <div className="relative z-10 self-end">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-[18px] bg-[#FAF6EC] border border-[#C49A4A] shadow-xs">
                <span className="font-body font-bold text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] text-[#194E35] uppercase tracking-wide">
                  ILLUSTRATIVE MAP
                </span>
              </div>
            </div>

            {/* Center: Venue Pin Marker (matching position in Screenshot 8) */}
            <div className="relative z-10 self-center lg:translate-x-12 translate-y-3 flex flex-col items-center">
              {/* Venue Label Pill */}
              <div className="inline-flex items-center justify-center px-5 py-2 rounded-[9px] bg-[#194E35] text-[#FAF6EC] shadow-md border border-[#C49A4A]/30">
                <span className="font-display font-bold text-[18px] sm:text-[22px] lg:text-[25px] leading-[31px]">
                  Umrao The Banquet
                </span>
              </div>

              {/* Small vertical connector & Pin */}
              <div className="flex flex-col items-center -mt-1">
                <svg
                  width="36"
                  height="46"
                  viewBox="0 0 45 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-md"
                  aria-hidden="true"
                >
                  <path
                    d="M22.5 0C10.0736 0 0 10.0736 0 22.5C0 36.5 22.5 56 22.5 56C22.5 56 45 36.5 45 22.5C45 10.0736 34.9264 0 22.5 0Z"
                    fill="#194E35"
                  />
                  <circle cx="22.5" cy="22.5" r="9.5" fill="#FAF6EC" />
                </svg>
              </div>
            </div>

            {/* Bottom Right: Map Verification Note */}
            <div className="relative z-10 self-end">
              <div className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-[18px] bg-[#EDE0C6] shadow-xs">
                <span className="font-display italic font-normal text-[13px] sm:text-[15px] lg:text-[17px] leading-[21px] text-[#503522]">
                  Exact map pin to be verified before launch.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

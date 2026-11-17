"use client";

import Image from "next/image";
import Link from "next/link";
import { LocationMarkerIcon, ArrowRightIcon } from "./JiaIcons";

export default function JiaLocation() {
  return (
    <section
      id="location"
      aria-label="Location & Directions"
      className="relative w-full bg-[#FAF6EC] py-14 sm:py-20 lg:py-[88px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-[40px]">
          {/* Left Column: Location & Arrival details (width: ~501px desktop) */}
          <div className="w-full lg:w-[501px] flex flex-col items-start shrink-0">
            {/* Eyebrow: LOCATION & DIRECTIONS */}
            <span className="font-body font-bold text-[18px] sm:text-[20px] lg:text-[21px] leading-[26px] tracking-[3px] uppercase text-[#4F3523]">
              LOCATION &amp; DIRECTIONS
            </span>

            {/* Spacing: 12px */}
            <div className="h-2.5 sm:h-3 lg:h-[12px]" aria-hidden="true" />

            {/* Gold divider bar (80px x 5px) */}
            <div
              className="w-[80px] h-[5px] bg-[#BE9546] rounded-full"
              aria-hidden="true"
            />

            {/* Spacing: 18px */}
            <div className="h-3 sm:h-4 lg:h-[18px]" aria-hidden="true" />

            {/* Heading: Find us on Fraser Road. */}
            <h2 className="font-display font-bold text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.1] lg:leading-[62px] text-[#194E35]">
              Find us on Fraser Road.
            </h2>

            {/* Spacing: 16px */}
            <div className="h-2.5 sm:h-3.5 lg:h-[16px]" aria-hidden="true" />

            {/* Subtitle: Hotel Jia International */}
            <h3 className="font-display font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.2] lg:leading-[51px] text-[#4F3523]">
              Hotel Jia International
            </h3>

            {/* Spacing: 20px */}
            <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

            {/* Address Row with Pin Marker & Vertical Divider */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="shrink-0">
                <LocationMarkerIcon size={26} color="#D0AB61" />
              </div>
              <div
                className="w-[1px] h-[48px] bg-[#D5BC87] shrink-0"
                aria-hidden="true"
              />
              <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-[28px] lg:leading-[30px] text-[#4F3523]">
                Fraser Road, opposite Buddha Smriti Park, Patna, Bihar
              </p>
            </div>

            {/* Spacing: 20px */}
            <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

            {/* Landmark text */}
            <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[22px] leading-[26px] sm:leading-[29px] lg:leading-[32px] text-[#4F3523] max-w-[495px]">
              Use Buddha Smriti Park as a landmark when planning your arrival.
              Contact our team for directions to the hotel entrance.
            </p>

            {/* Spacing: 32px */}
            <div className="h-5 sm:h-7 lg:h-[32px]" aria-hidden="true" />

            {/* CTA Button: CONTACT FOR DIRECTIONS → (459px x 69px) */}
            <a
              href="https://maps.google.com/?q=Hotel+Jia+International+Fraser+Road+Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full max-w-[459px] h-[58px] sm:h-[65px] lg:h-[69px] bg-[#194E35] hover:bg-[#123d2a] active:bg-[#0c2b1e] text-[#FAF6EC] rounded-[8px] transition-all shadow-md group shrink-0"
            >
              <span className="font-body font-bold text-[17px] sm:text-[19px] lg:text-[21px] leading-[26px] tracking-wide uppercase">
                CONTACT FOR DIRECTIONS
              </span>
              <ArrowRightIcon
                size={22}
                color="#FAF6EC"
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* Spacing: 28px */}
            <div className="h-4 sm:h-6 lg:h-[28px]" aria-hidden="true" />

            {/* Arrival Guidance Box (501px x 149px, #F0EEDF, rounded 23px) */}
            <div className="w-full max-w-[501px] bg-[#F0EEDF] border border-[#E5DECD] rounded-[23px] p-5 sm:p-6 lg:p-[22px] flex items-center gap-4 sm:gap-6 shadow-sm">
              <div className="shrink-0">
                <Image
                  src="/images/Jia Hotel/Map icon.svg"
                  alt="Arrival guidance"
                  width={69}
                  height={68}
                  className="w-[60px] h-[59px] sm:w-[69px] sm:h-[68px]"
                />
              </div>

              <div
                className="w-[1px] h-[64px] sm:h-[84px] bg-[#D5BC87] shrink-0"
                aria-hidden="true"
              />

              <div className="flex flex-col">
                <h4 className="font-body font-bold text-[18px] sm:text-[20px] leading-[26px] text-[#4F3523]">
                  Planning your arrival?
                </h4>
                <p className="font-body font-normal text-[14px] sm:text-[16px] leading-[22px] text-[#4F3523] mt-1">
                  Share your travel plans with our team for arrival guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Illustrative Map Card (width: 818px desktop, height: ~767px) */}
          <div className="w-full lg:flex-1 lg:max-w-[818px] bg-[#FAF6EC] border border-[#E5DECD] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm flex flex-col">
            {/* Map Area */}
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[620px] bg-[#F3EBDD] overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full object-cover"
                viewBox="0 0 818 620"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Background Land Base */}
                <rect width="818" height="620" fill="#F3EBDD" />

                {/* Land Parcel Shapes */}
                <rect x="30" y="40" width="180" height="130" rx="8" fill="#EBDDC6" opacity="0.7" />
                <rect x="230" y="40" width="120" height="90" rx="8" fill="#EBDDC6" opacity="0.6" />
                <rect x="40" y="210" width="170" height="150" rx="8" fill="#EBDDC6" opacity="0.6" />
                <rect x="40" y="400" width="220" height="160" rx="8" fill="#EBDDC6" opacity="0.7" />
                <rect x="520" y="40" width="260" height="120" rx="8" fill="#EBDDC6" opacity="0.6" />
                <rect x="540" y="200" width="240" height="180" rx="8" fill="#EBDDC6" opacity="0.65" />
                <rect x="480" y="420" width="300" height="160" rx="8" fill="#EBDDC6" opacity="0.7" />

                {/* Secondary Connecting Roads */}
                <path d="M0 190 L820 180" stroke="#FAF6EC" strokeWidth="18" strokeLinecap="round" />
                <path d="M0 380 L820 390" stroke="#FAF6EC" strokeWidth="16" strokeLinecap="round" />
                <path d="M220 0 L220 620" stroke="#FAF6EC" strokeWidth="14" strokeLinecap="round" />
                <path d="M500 0 L500 620" stroke="#FAF6EC" strokeWidth="14" strokeLinecap="round" />

                {/* Buddha Smriti Park (Prominent Green Garden Polygon) */}
                <g id="buddha-smriti-park">
                  <path
                    d="M250 80 L470 70 L480 340 L240 330 Z"
                    fill="#D6E2BA"
                    stroke="#C3D2A1"
                    strokeWidth="3"
                  />
                  {/* Inner park paths / lawns */}
                  <circle cx="360" cy="190" r="42" fill="#C8D8A7" />
                  <circle cx="360" cy="190" r="16" fill="#B9CC93" />
                  <path d="M360 148 L360 232" stroke="#E6EECE" strokeWidth="3" strokeDasharray="4 3" />
                  <path d="M318 190 L402 190" stroke="#E6EECE" strokeWidth="3" strokeDasharray="4 3" />

                  {/* Park Stupa / Lotus Icon */}
                  <g transform="translate(346, 176)">
                    <circle cx="14" cy="14" r="13" fill="#194E35" opacity="0.9" />
                    <path
                      d="M14 6 C11 11 10 16 14 20 C18 16 17 11 14 6 Z"
                      fill="#FAF6EC"
                    />
                  </g>

                  {/* Buddha Smriti Park Label */}
                  <rect
                    x="272"
                    y="244"
                    width="176"
                    height="32"
                    rx="6"
                    fill="#FAF6EC"
                    opacity="0.95"
                  />
                  <text
                    x="360"
                    y="265"
                    fill="#194E35"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="serif"
                    textAnchor="middle"
                    letterSpacing="0.5"
                  >
                    Buddha Smriti Park
                  </text>
                  <text
                    x="360"
                    y="298"
                    fill="#4F3523"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    opacity="0.8"
                  >
                    Patna Landmark &amp; Gardens
                  </text>
                </g>

                {/* Fraser Road (Primary Arterial Road running along the park) */}
                <path
                  d="M488 -10 L488 630"
                  stroke="#E2D1B3"
                  strokeWidth="36"
                  strokeLinecap="square"
                />
                <path
                  d="M488 -10 L488 630"
                  stroke="#FFFFFF"
                  strokeWidth="30"
                  strokeLinecap="square"
                />
                <path
                  d="M488 -10 L488 630"
                  stroke="#D2B986"
                  strokeWidth="3"
                  strokeDasharray="16 14"
                />

                {/* Fraser Road Street Label */}
                <g transform="translate(506, 90) rotate(90)">
                  <rect x="-10" y="-12" width="140" height="24" rx="4" fill="#FAF6EC" opacity="0.92" />
                  <text
                    x="60"
                    y="4"
                    fill="#4F3523"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    letterSpacing="2"
                  >
                    FRASER ROAD
                  </text>
                </g>

                {/* Dak Bunglow Road Label */}
                <g transform="translate(60, 176)">
                  <text
                    x="0"
                    y="0"
                    fill="#755E49"
                    fontSize="11"
                    fontWeight="600"
                    fontFamily="sans-serif"
                    letterSpacing="1"
                  >
                    DAK BUNGLOW CHOWK →
                  </text>
                </g>

                {/* Patna Junction direction label */}
                <g transform="translate(240, 580)">
                  <rect x="-8" y="-18" width="180" height="26" rx="4" fill="#FAF6EC" opacity="0.9" />
                  <text
                    x="82"
                    y="-1"
                    fill="#194E35"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                  >
                    ↓ PATNA JUNCTION (500M)
                  </text>
                </g>

                {/* HOTEL JIA INTERNATIONAL PIN & CALLOUT (Across Fraser Road from the Park) */}
                <g id="hotel-jia-pin" transform="translate(528, 220)">
                  {/* Pulsing ring indicator */}
                  <circle cx="16" cy="38" r="28" fill="#194E35" opacity="0.15" />
                  <circle cx="16" cy="38" r="18" fill="#194E35" opacity="0.25" />

                  {/* Marker Pin */}
                  <path
                    d="M16 16 C9.4 16 4 21.4 4 28 C4 38 16 54 16 54 C16 54 28 38 28 28 C28 21.4 22.6 16 16 16 Z"
                    fill="#194E35"
                    stroke="#FAF6EC"
                    strokeWidth="2.5"
                  />
                  <circle cx="16" cy="27" r="4.5" fill="#FAF6EC" />

                  {/* Hotel Jia Callout Card */}
                  <g transform="translate(38, 0)">
                    {/* Shadow / Card Backing */}
                    <rect
                      x="0"
                      y="0"
                      width="236"
                      height="86"
                      rx="12"
                      fill="#194E35"
                      stroke="#FAF6EC"
                      strokeWidth="2"
                      filter="drop-shadow(0 6px 12px rgba(0,0,0,0.15))"
                    />

                    {/* Pill: LOCATION PREVIEW */}
                    <rect
                      x="14"
                      y="12"
                      width="128"
                      height="18"
                      rx="9"
                      fill="#E0B75E"
                    />
                    <text
                      x="78"
                      y="24"
                      fill="#1E4430"
                      fontSize="9"
                      fontWeight="800"
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      letterSpacing="1"
                    >
                      LOCATION PREVIEW
                    </text>

                    {/* Hotel Name */}
                    <text
                      x="14"
                      y="48"
                      fill="#FAF6EC"
                      fontSize="15"
                      fontWeight="700"
                      fontFamily="serif"
                    >
                      Hotel Jia International
                    </text>

                    {/* Location detail */}
                    <text
                      x="14"
                      y="68"
                      fill="#D5E6DA"
                      fontSize="11"
                      fontFamily="sans-serif"
                    >
                      Opposite Buddha Smriti Park
                    </text>
                  </g>
                </g>
              </svg>
            </div>

            {/* Bottom Verification Bar (Height: 73px, #F3EBDD) */}
            <div className="w-full min-h-[73px] bg-[#F3EBDD] border-t border-[#E5DECD] px-5 sm:px-8 py-4 flex items-center gap-3.5">
              <div className="shrink-0">
                <Image
                  src="/images/Jia Hotel/Information.svg"
                  alt="Information notice"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
              <p className="font-display italic text-[16px] sm:text-[19px] lg:text-[20px] leading-[23px] sm:leading-[25px] text-[#4F3523]">
                Illustrative map. Exact hotel pin to be verified before launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

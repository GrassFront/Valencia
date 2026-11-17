"use client";

import Link from "next/link";
import Image from "next/image";

const STATS = [
  {
    icon: "/images/Umrao/welcome to umrao/main hall-icon.svg",
    value: "8,000 sq ft",
    label: "Main Hall",
    labelColor: "text-[#164C36]",
    iconType: "svg",
  },
  {
    icon: "/images/Umrao/welcome to umrao/leaf icon.png",
    value: "17,000 sq ft",
    label: "Open-air Lawn",
    labelColor: "text-[#543522]",
    iconType: "png",
  },
  {
    icon: "/images/Umrao/welcome to umrao/small hall icon.svg",
    value: "2,500 sq ft",
    label: "Small Hall",
    labelColor: "text-[#543522]",
    iconType: "svg",
  },
  {
    icon: "/images/Umrao/welcome to umrao/event spaces icon.svg",
    value: "3",
    label: "Event Spaces",
    labelColor: "text-[#543522]",
    iconType: "svg",
  },
];

export default function UmraoWelcome() {
  return (
    <section
      aria-label="Welcome to Umrao"
      className="relative w-full bg-[#FAF6EC] border-b border-black/6 py-8 sm:py-10 lg:py-[32px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[44px] flex flex-col items-center">
        {/* Top: Introduction and photograph (gap: 30px) */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-[30px]">
          {/* Left Column: Welcome copy (width: 636px desktop) */}
          <div className="w-full lg:w-[636px] flex flex-col items-start lg:pt-[25px] lg:pl-[27px] shrink-0">
            {/* Eyebrow */}
            <p className="font-body font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[25px] tracking-[3px] sm:tracking-[4px] text-[#C8A153] uppercase">
              WELCOME TO UMRAO
            </p>

            {/* Spacing: 25px */}
            <div className="h-4 sm:h-5 lg:h-[25px]" aria-hidden="true" />

            {/* Headings */}
            <h2 className="font-display font-bold text-[#164C36]">
              <span className="block text-[42px] sm:text-[56px] lg:text-[69px] leading-[1.15] lg:leading-[82px]">
                One destination.
              </span>
              <span className="block text-[36px] sm:text-[48px] lg:text-[57px] leading-[1.15] lg:leading-[76px] tracking-[-1px]">
                Many ways to celebrate.
              </span>
            </h2>

            {/* Spacing: 27px */}
            <div className="h-4 sm:h-5 lg:h-[27px]" aria-hidden="true" />

            {/* Paragraph 1 */}
            <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#543522] max-w-[600px]">
              From grand receptions to intimate family occasions, Umrao brings together spacious indoor halls and an open-air lawn in a setting inspired by Jaipur.
            </p>

            {/* Spacing: 32px */}
            <div className="h-4 sm:h-6 lg:h-[32px]" aria-hidden="true" />

            {/* Paragraph 2 */}
            <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#543522] max-w-[600px]">
              Located at Zero Mile, Masaurhi Road, Patna, the venue offers a choice of spaces to suit your celebration.
            </p>

            {/* Spacing: 40px */}
            <div className="h-6 sm:h-8 lg:h-[40px]" aria-hidden="true" />

            {/* Link: EXPLORE OUR VENUES ↓ */}
            <Link
              href="#venues"
              className="inline-flex items-center gap-2 font-body font-bold text-[18px] sm:text-[21px] lg:text-[23px] leading-[29px] text-[#164C36] hover:text-[#0f3424] underline transition-colors"
            >
              <span>EXPLORE OUR VENUES ↓</span>
            </Link>
          </div>

          {/* Right Column: Reference photograph (width: 686px, height: 547px) */}
          <div className="relative w-full lg:w-[686px] h-[340px] sm:h-[440px] lg:h-[547px] rounded-[6px] overflow-hidden shadow-sm shrink-0">
            <Image
              src="/images/Umrao/welcome to umrao/welcome.png"
              alt="Umrao Palace exterior with regal Jaipur-inspired arches, grand chandeliers, and landscaped courtyard"
              fill
              sizes="(max-width: 1024px) 100vw, 686px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Spacing: 24px */}
        <div className="h-6 sm:h-8 lg:h-[24px]" aria-hidden="true" />

        {/* Bottom: Venue statistics (width: 1352px, height: 212px, background: #F3EBDC) */}
        <div className="w-full bg-[#F3EBDC] rounded-[8px] sm:rounded-[12px] py-6 sm:py-8 lg:py-0 lg:h-[212px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-6 shadow-xs">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="flex-1 w-full flex flex-col md:flex-row items-center justify-center relative py-4 md:py-0"
            >
              {/* Stat Content */}
              <div className="flex flex-col items-center justify-center text-center">
                {/* Icon (height approx 76px) */}
                <div className="relative h-[65px] sm:h-[76px] w-[110px] sm:w-[130px] flex items-center justify-center shrink-0 mb-1">
                  {stat.iconType === "svg" ? (
                    <Image
                      src={stat.icon}
                      alt={`${stat.label} icon`}
                      width={100}
                      height={65}
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src={stat.icon}
                      alt={`${stat.label} icon`}
                      width={90}
                      height={65}
                      className="object-contain"
                    />
                  )}
                </div>

                {/* Stat Value */}
                <p className="font-display font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[36px] lg:leading-[44px] text-[#164C36]">
                  {stat.value}
                </p>

                {/* Spacing: 4px */}
                <div className="h-[4px]" aria-hidden="true" />

                {/* Stat Label */}
                <p
                  className={`font-body font-normal text-[17px] sm:text-[19px] lg:text-[22px] leading-[28px] lg:leading-[36px] ${stat.labelColor}`}
                >
                  {stat.label}
                </p>
              </div>

              {/* Vertical divider line between stats (desktop only) */}
              {index < STATS.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[120px] lg:h-[142px] bg-[#C8A153]"
                  aria-hidden="true"
                />
              )}

              {/* Horizontal divider line on mobile */}
              {index < STATS.length - 1 && (
                <div
                  className="block md:hidden w-3/4 h-[1px] bg-[#C8A153]/40 mt-4"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

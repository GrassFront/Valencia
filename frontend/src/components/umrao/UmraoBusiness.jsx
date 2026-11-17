"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./UmraoIcons";

const FEATURES = [
  {
    icon: "/images/Umrao/business/meetings icon.svg",
    label: "Meetings & discussions",
    iconWidth: 53,
    iconHeight: 41,
  },
  {
    icon: "/images/Umrao/business/presentations icon.svg",
    label: "Presentations & workshops",
    iconWidth: 53,
    iconHeight: 52,
  },
  {
    icon: "/images/Umrao/business/gear icon.svg",
    label: "Setup tailored to your enquiry",
    iconWidth: 53,
    iconHeight: 52,
  },
];

export default function UmraoBusiness() {
  return (
    <section
      aria-label="Business at Umrao"
      className="relative w-full bg-[#FAF6EC] border-y border-black/6 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between min-h-[580px] lg:h-[617px] lg:pl-[44px]">
        {/* Left: Business Information (width: 501px desktop) */}
        <div className="w-full lg:w-[501px] flex flex-col items-start px-5 sm:px-8 lg:px-0 py-10 lg:py-0 shrink-0">
          {/* Eyebrow: BUSINESS AT UMRAO */}
          <p className="font-body font-bold text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] tracking-[2.5px] sm:tracking-[3px] text-[#543522] uppercase">
            BUSINESS AT UMRAO
          </p>

          {/* Spacing: 20px */}
          <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

          {/* Heading: Space for purposeful conversations. */}
          <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[51px] leading-[1.12] lg:leading-[55px] text-[#164C36] max-w-[489px]">
            Space for purposeful conversations.
          </h2>

          {/* Spacing: 20px */}
          <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

          {/* Description */}
          <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[27px] text-[#543522] max-w-[520px]">
            Bring your team together for meetings, presentations and focused discussions in our conference room.
          </p>

          {/* Spacing: 20px */}
          <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

          {/* 3 Feature Rows (each height: 62px, gap: 24px) */}
          <div className="flex flex-col w-full max-w-[501px]">
            {FEATURES.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-[24px] h-[62px]"
              >
                {/* Icon Box (53px wide) */}
                <div className="w-[53px] h-[52px] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={item.iconWidth}
                    height={item.iconHeight}
                    className="object-contain"
                  />
                </div>

                {/* Vertical Divider: width 1px, height 37px, background #C8A153 */}
                <div
                  className="w-[1px] h-[37px] bg-[#C8A153] shrink-0"
                  aria-hidden="true"
                />

                {/* Feature Label */}
                <span className="font-body font-normal text-[18px] sm:text-[20px] lg:text-[21px] leading-[26px] text-[#543522]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Spacing: 18px */}
          <div className="h-3 sm:h-4 lg:h-[18px]" aria-hidden="true" />

          {/* Italic Note (width: 530px) */}
          <p className="font-display italic font-normal text-[14px] sm:text-[15px] leading-[19px] text-[#543522] max-w-[530px]">
            Capacity, equipment and refreshments will be confirmed with your enquiry.
          </p>

          {/* Spacing: 28px */}
          <div className="h-5 sm:h-6 lg:h-[28px]" aria-hidden="true" />

          {/* Button: ENQUIRE ABOUT A MEETING → (width: 375px, height: 55px, border-radius: 7px) */}
          <Link
            href="#enquiry"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-[375px] h-[50px] sm:h-[55px] bg-[#164C36] hover:bg-[#103727] active:bg-[#0c2b1e] rounded-[7px] text-[#FFF9EC] transition-all shadow-md group"
          >
            <span className="font-body font-bold text-[17px] sm:text-[18px] lg:text-[19px] leading-[24px] tracking-[1.5px] sm:tracking-[2px] uppercase">
              ENQUIRE ABOUT A MEETING
            </span>
            <ArrowRightIcon
              size={20}
              color="#FFF9EC"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Right: Reference Photograph (width: 861px, height: 617px desktop, no watermark) */}
        <div className="relative w-full lg:w-[861px] h-[360px] sm:h-[480px] lg:h-[617px] shrink-0 overflow-hidden shadow-xs">
          <Image
            src="/images/Umrao/business/business.png"
            alt="Umrao executive boardroom conference table with plush cream leather chairs, floral centerpiece, and Jaipur arched alcove architecture"
            fill
            sizes="(max-width: 1024px) 100vw, 861px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

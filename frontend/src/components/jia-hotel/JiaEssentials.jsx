"use client";

import Image from "next/image";
import { SectionTitleWithDividers } from "./JiaIcons";

const AMENITIES_ROW_1 = [
  {
    title: "Free Wi-Fi",
    icon: "/images/Jia Hotel/wifi.svg",
    width: 102,
    height: 75,
  },
  {
    title: "Parking",
    icon: "/images/Jia Hotel/parking.svg",
    width: 108,
    height: 80,
  },
  {
    title: "Laundry",
    icon: "/images/Jia Hotel/laundary.svg",
    width: 113,
    height: 72,
  },
];

const AMENITIES_ROW_2 = [
  {
    title: "Air Conditioning",
    icon: "/images/Jia Hotel/ac.svg",
    width: 84,
    height: 89,
  },
  {
    title: "RO Drinking Water",
    icon: "/images/Jia Hotel/water.svg",
    width: 74,
    height: 81,
  },
  {
    title: "EV Charging",
    icon: "/images/Jia Hotel/ev.svg",
    width: 102,
    height: 87,
  },
];

export default function JiaEssentials() {
  return (
    <section
      aria-label="Everyday Essentials"
      className="relative w-full bg-[#E7D8BF] pt-8 sm:pt-10 lg:pt-[39px] pb-10 sm:pb-12 lg:pb-[34px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[48px] flex flex-col items-center">
        {/* Eyebrow with gold divider lines */}
        <SectionTitleWithDividers
          eyebrow="EVERYDAY ESSENTIALS"
          color="#BE9546"
          dividerColor="#BE9546"
        />

        {/* Spacing: 17px desktop */}
        <div className="h-3 sm:h-4 lg:h-[17px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[53px] leading-[1.2] lg:leading-[66px] text-[#194E35] text-center max-w-[920px]">
          The comforts that make a stay easier.
        </h2>

        {/* Spacing: 8px desktop */}
        <div className="h-1.5 lg:h-[8px]" aria-hidden="true" />

        {/* Subhead */}
        <p className="font-body font-normal text-[18px] sm:text-[21px] lg:text-[24px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#4F3523] text-center">
          Practical amenities for your time in Patna.
        </p>

        {/* Spacing: 43px desktop */}
        <div className="h-6 sm:h-8 lg:h-[43px]" aria-hidden="true" />

        {/* Amenities Container: 2 Rows (width: 1344px desktop) */}
        <div className="w-full max-w-[1344px] flex flex-col">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D2C0A0]">
            {AMENITIES_ROW_1.map((item) => (
              <div
                key={item.title}
                className="w-full h-[150px] sm:h-[159px] flex flex-col items-center justify-center text-center py-4 md:py-0"
              >
                {/* Icon slot: 130px x 89px */}
                <div className="w-[130px] h-[75px] sm:h-[89px] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={item.width}
                    height={item.height}
                    className="object-contain"
                  />
                </div>

                {/* Spacing: 9px */}
                <div className="h-1 lg:h-[9px]" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-display font-bold text-[26px] sm:text-[30px] lg:text-[33px] leading-[36px] lg:leading-[41px] text-[#194E35]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Horizontal Divider Line: 1344px x 1px, #D2C0A0 */}
          <div
            className="w-full h-[1px] bg-[#D2C0A0] my-2 sm:my-3 lg:my-[10px]"
            aria-hidden="true"
          />

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D2C0A0]">
            {AMENITIES_ROW_2.map((item) => (
              <div
                key={item.title}
                className="w-full h-[150px] sm:h-[159px] flex flex-col items-center justify-center text-center py-4 md:py-0"
              >
                {/* Icon slot: 130px x 89px */}
                <div className="w-[130px] h-[75px] sm:h-[89px] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={item.width}
                    height={item.height}
                    className="object-contain"
                  />
                </div>

                {/* Spacing: 9px */}
                <div className="h-1 lg:h-[9px]" aria-hidden="true" />

                {/* Title */}
                <h3 className="font-display font-bold text-[26px] sm:text-[30px] lg:text-[33px] leading-[36px] lg:leading-[41px] text-[#194E35]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing: 22px desktop */}
        <div className="h-4 sm:h-5 lg:h-[22px]" aria-hidden="true" />

        {/* Note below amenities */}
        <p className="font-body font-normal text-[15px] sm:text-[18px] lg:text-[20px] leading-[25px] text-[#4F3523] text-center">
          Please enquire about availability, timings and any applicable service charges.
        </p>
      </div>
    </section>
  );
}

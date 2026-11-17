"use client";

import Image from "next/image";
import { SectionTitleWithDividers } from "./JiaIcons";

const PLANNED_SPACES = [
  {
    name: "Rooftop Café",
    description: "A new setting to pause and unwind.",
    image: "/images/Jia Hotel/rooftop.png",
    alt: "Hotel Jia future rooftop café terrace overlooking city sunset with wooden tables and greenery",
  },
  {
    name: "Restaurant",
    description: "A place to gather over a meal.",
    image: "/images/Jia Hotel/restaurant.png",
    alt: "Hotel Jia future restaurant dining hall with intimate seating and warm ambient lighting",
  },
  {
    name: "Banquet Hall",
    description: "Space for future celebrations.",
    image: "/images/Jia Hotel/banquet.png",
    alt: "Hotel Jia future banquet hall with elegant round event tables, festive sashes, and chandeliers",
  },
  {
    name: "Garden",
    description: "A little greenery to enjoy.",
    image: "/images/Jia Hotel/garden.png",
    alt: "Hotel Jia future landscaped garden with lush lawn, manicured plants, and stone benches",
  },
];

export default function JiaLookingAhead() {
  return (
    <section
      aria-label="Looking Ahead"
      className="relative w-full bg-[#482C1B] pt-8 sm:pt-10 lg:pt-[30px] pb-10 sm:pb-12 lg:pb-[35px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[49px] flex flex-col items-center">
        {/* Eyebrow with gold divider lines */}
        <SectionTitleWithDividers
          eyebrow="LOOKING AHEAD"
          color="#BE9546"
          dividerColor="#BE9546"
        />

        {/* Spacing: 17px desktop */}
        <div className="h-3 sm:h-4 lg:h-[17px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.2] lg:leading-[75px] text-[#FAF6EC] text-center max-w-[800px]">
          More to look forward to.
        </h2>

        {/* Spacing: 8px desktop */}
        <div className="h-1.5 lg:h-[8px]" aria-hidden="true" />

        {/* Subhead */}
        <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#FAF6EC] text-center max-w-[780px]">
          New spaces are planned to add more to your Hotel Jia experience.
        </p>

        {/* Spacing: 45px desktop */}
        <div className="h-6 sm:h-8 lg:h-[45px]" aria-hidden="true" />

        {/* 4 Planned Facilities Cards Grid (width: 1342px, gap: 15px desktop) */}
        <div className="w-full max-w-[1342px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[15px] items-stretch">
          {PLANNED_SPACES.map((space) => (
            <article
              key={space.name}
              className="w-full flex flex-col items-start group"
            >
              {/* Photograph (width: 324px, height: 270px desktop, border-radius: 15px) */}
              <div className="relative w-full h-[240px] sm:h-[270px] rounded-[15px] overflow-hidden shrink-0 shadow-sm">
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 324px"
                  className="object-cover jia-img-scale"
                />
              </div>

              {/* Information (padding: 0px 0px 0px 18px) */}
              <div className="flex flex-col items-start pt-3 sm:pt-4 lg:pt-[12px] pl-2 sm:pl-3 lg:pl-[18px]">
                {/* COMING SOON Badge */}
                <span className="font-body font-bold text-[15px] sm:text-[16px] lg:text-[18px] leading-[23px] tracking-[2px] sm:tracking-[3px] text-[#E0B75E] uppercase">
                  COMING SOON
                </span>

                {/* Spacing: 5px */}
                <div className="h-1 lg:h-[5px]" aria-hidden="true" />

                {/* Facility Name */}
                <h3 className="font-display font-bold text-[28px] sm:text-[32px] lg:text-[35px] leading-[38px] lg:leading-[44px] text-[#FAF6EC]">
                  {space.name}
                </h3>

                {/* Spacing: 5px */}
                <div className="h-1 lg:h-[5px]" aria-hidden="true" />

                {/* Description */}
                <p className="font-body font-normal text-[15px] sm:text-[16px] lg:text-[17px] leading-[21px] text-[#FAF6EC]/90">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Spacing: 38px desktop */}
        <div className="h-6 sm:h-8 lg:h-[38px]" aria-hidden="true" />

        {/* Availability Note with Gold Divider Lines (width: 1310px desktop) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-[25px] w-full max-w-[1310px]">
          <div
            className="flex-1 h-[2px] bg-[#D7B064] max-w-[60px] sm:max-w-[120px] lg:max-w-[190px]"
            aria-hidden="true"
          />
          <p className="font-display italic font-normal text-[14px] sm:text-[17px] lg:text-[19px] leading-[24px] text-[#FAF6EC] text-center max-w-[700px]">
            These facilities are not yet available. Opening dates and details will be announced.
          </p>
          <div
            className="flex-1 h-[2px] bg-[#D7B064] max-w-[60px] sm:max-w-[120px] lg:max-w-[190px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./UmraoIcons";

const VENUES = [
  {
    id: "main-hall",
    name: "Main Hall",
    area: "Approx. 8,000 sq ft",
    desc: "An expansive indoor setting for weddings and grand receptions.",
    image: "/images/Umrao/our venues/main hall.png",
    alt: "Main Hall at Umrao - Magnificent ballroom with grand crystal chandeliers, royal arched colonnade, and banquet tables",
  },
  {
    id: "lawn",
    name: "Open-air Lawn",
    area: "17,000 sq ft",
    desc: "An open-air backdrop for celebrations under the sky.",
    image: "/images/Umrao/our venues/lawn.png",
    alt: "Open-air Lawn at Umrao - Extravagant outdoor wedding stage under starry skies with fairy lights and lush floral mandap",
  },
  {
    id: "small-hall",
    name: "Small Hall",
    area: "2,500 sq ft",
    desc: "A welcoming setting for smaller gatherings and family occasions.",
    image: "/images/Umrao/our venues/small hall.png",
    alt: "Small Hall at Umrao - Sophisticated intimate hall with Jaipur floral wall murals and elegant banquet dining arrangements",
  },
];

export default function UmraoVenues({ onSelectSpace }) {
  return (
    <section
      id="venues"
      aria-label="Our Venues"
      className="relative w-full bg-[#FAF6EC] py-10 sm:py-14 lg:py-[44px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[44px] flex flex-col items-center">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <p className="font-body font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[25px] tracking-[3px] sm:tracking-[4px] text-[#543522] uppercase">
            OUR VENUES
          </p>

          {/* Spacing: 13px */}
          <div className="h-2.5 sm:h-3 lg:h-[13px]" aria-hidden="true" />

          {/* Heading */}
          <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.2] lg:leading-[66px] text-[#164C36] max-w-[950px]">
            Find the setting for your celebration.
          </h2>

          {/* Spacing: 11px */}
          <div className="h-2 sm:h-2.5 lg:h-[11px]" aria-hidden="true" />

          {/* Subheading */}
          <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#543522]">
            Three distinctive spaces, ready for your occasion.
          </p>
        </div>

        {/* Spacing: 42px */}
        <div className="h-8 sm:h-10 lg:h-[42px]" aria-hidden="true" />

        {/* Venue Cards (gap: 20px, 3 cards on desktop) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[20px] items-stretch">
          {VENUES.map((venue) => (
            <article
              key={venue.id}
              className="w-full rounded-[14px] border border-[#C8A153] bg-[#FAF6EC] overflow-hidden flex flex-col justify-between umrao-card-hover group shadow-xs"
            >
              {/* Card Photo (height: 249px on desktop) */}
              <div className="relative w-full h-[220px] sm:h-[240px] lg:h-[249px] overflow-hidden shrink-0">
                <Image
                  src={venue.image}
                  alt={venue.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 438px"
                  className="object-cover umrao-gallery-img"
                />
              </div>

              {/* Card Details (padding: 13px 20px 24px 28px) */}
              <div className="flex-1 flex flex-col justify-between pt-[13px] pb-6 px-5 sm:px-6 lg:pl-[28px] lg:pr-[24px]">
                <div className="flex flex-col items-start">
                  {/* Venue Name */}
                  <h3 className="font-display font-bold text-[28px] sm:text-[31px] lg:text-[34px] leading-[36px] lg:leading-[42px] text-[#543522]">
                    {venue.name}
                  </h3>

                  {/* Spacing: 8px */}
                  <div className="h-2 lg:h-[8px]" aria-hidden="true" />

                  {/* Area Badge Pill */}
                  <div className="inline-flex items-center justify-center px-4 py-1 rounded-[22px] border border-[#C8A153] bg-transparent">
                    <span className="font-body font-bold text-[14px] sm:text-[16px] lg:text-[17px] leading-[21px] text-[#543522]">
                      {venue.area}
                    </span>
                  </div>

                  {/* Spacing: 10px */}
                  <div className="h-2.5 lg:h-[10px]" aria-hidden="true" />

                  {/* Description */}
                  <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[25px] text-[#543522] min-h-[48px] lg:min-h-[50px]">
                    {venue.desc}
                  </p>
                </div>

                {/* Spacing: 20px */}
                <div className="h-4 sm:h-5 lg:h-[20px]" aria-hidden="true" />

                {/* Button: ENQUIRE ABOUT THIS SPACE → */}
                <Link
                  href="#enquiry"
                  onClick={() => onSelectSpace && onSelectSpace(venue.name)}
                  className="inline-flex items-center justify-center gap-3 w-full h-[48px] bg-[#164C36] hover:bg-[#103727] active:bg-[#0c2b1e] rounded-[7px] text-[#FFF9EC] transition-all group/btn shadow-xs"
                >
                  <span className="font-body font-bold text-[15px] sm:text-[17px] lg:text-[18px] leading-[23px] tracking-wide uppercase">
                    ENQUIRE ABOUT THIS SPACE
                  </span>
                  <ArrowRightIcon
                    size={20}
                    color="#FFF9EC"
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    id: "stay",
    title: "Stay",
    titleSizeClass: "text-[26px] xl:text-[28px]",
    description: "Thoughtfully designed rooms for comfort and restful stays.",
    linkLabel: "EXPLORE ROOMS",
    href: "/valencia#rooms",
    image: "/images/homepage/homepage_sec3_stay.png",
    alt: "Valencia Luxury Stay - Elegantly appointed boutique hotel bedroom",
    iconSrc: "/icon/homepage/stay_icon.png",
    iconAlt: "Stay icon",
  },
  {
    id: "meetings",
    title: "Meetings",
    titleSizeClass: "text-[26px] xl:text-[28px]",
    description: "Welcoming spaces for ideas and productive gatherings.",
    linkLabel: "EXPLORE MEETINGS",
    href: "/valencia#events",
    image: "/images/homepage/homepage_sec3_meetings.png",
    alt: "Valencia Meetings - Boardroom and conference space",
    iconSrc: "/icon/homepage/meetings_icon.png",
    iconAlt: "Meetings icon",
  },
  {
    id: "weddings",
    title: "Weddings & Gatherings",
    // Scaled for comfortable breathing room without overflowing or touching card borders
    titleSizeClass: "text-[18px] sm:text-[19px] md:text-[20px] xl:text-[21px] 2xl:text-[22px]",
    description: "Beautiful settings for celebrations and moments shared together.",
    linkLabel: "EXPLORE EVENTS",
    href: "/valencia#events",
    image: "/images/homepage/homepage_sec3_weddings.png",
    alt: "Valencia Weddings - Grand neoclassical celebration hall",
    iconSrc: "/icon/homepage/wedding_icon.png",
    iconAlt: "Weddings and gatherings icon",
  },
  {
    id: "dining",
    title: "Dining",
    titleSizeClass: "text-[26px] xl:text-[28px]",
    description: "A welcoming table for good food and memorable company.",
    linkLabel: "EXPLORE DINING",
    href: "/valencia#dining",
    image: "/images/homepage/homepage_sec3_dining.png",
    alt: "Valencia Dining - Intimate restaurant tables and culinary experience",
    iconSrc: "/icon/homepage/dining_icon.png",
    iconAlt: "Dining icon",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-section-title"
      className="w-full bg-[#FAF7EE] border-b border-black/[0.06] overflow-hidden"
    >
      {/* 1440px Outer Container */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 xl:pl-[84px] xl:pr-[72px] py-14 sm:py-16 xl:py-[55px] flex flex-col items-center gap-9 sm:gap-11 xl:gap-[26px]">
        {/* Section Heading Group */}
        <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3 max-w-[1284px] w-full">
          {/* Eyebrow */}
          <span className="font-body font-semibold text-[13px] sm:text-[14px] xl:text-[15px] leading-[24px] tracking-[0.24em] sm:tracking-[0.28em] text-[#C9A96A] uppercase">
            ONE DESTINATION. EVERY OCCASION.
          </span>

          {/* Title */}
          <h2
            id="services-section-title"
            className="font-display font-medium text-[34px] sm:text-[46px] md:text-[56px] xl:text-[68px] leading-[1.15] xl:leading-[91px] text-[#1B4D32]"
          >
            Everything, in one place.
          </h2>

          {/* Subtitle */}
          <p className="font-body font-normal text-[15px] sm:text-[18px] md:text-[21px] xl:text-[24px] leading-[24px] sm:leading-[30px] xl:leading-[37px] text-[#4B3A2B] max-w-[960px]">
            Stay, meet, celebrate and dine — all with the warmth of VALENCIA.
          </p>
        </div>

        {/* Service Cards Grid (Figma: 1284px width, 466px height, 18px gap) */}
        <div className="w-full max-w-[1284px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-6 xl:gap-[18px] justify-items-center items-stretch">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col items-center w-full max-w-[307.5px] min-h-[466px] h-full transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Arched Photograph: 307.5px x 268px with 153.75px border-radius on top */}
              <div className="relative w-full h-[268px] rounded-t-[154px] overflow-hidden shrink-0 z-0 bg-[#E8DCC9]/30">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 308px, (max-width: 1280px) 280px, 308px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Icon Badge: 84px circle overlapping the photo & card boundary with PNG icon */}
              <div
                className="absolute top-[226px] left-1/2 -translate-x-1/2 w-[84px] h-[84px] rounded-full bg-[#1B4D32] border-[4px] border-[#FAF7EE] flex items-center justify-center shadow-sm z-20 transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                aria-hidden="true"
              >
                <div className="relative w-[42px] h-[42px] flex items-center justify-center">
                  <Image
                    src={service.iconSrc}
                    alt={service.iconAlt}
                    width={42}
                    height={42}
                    className="w-[42px] h-[42px] object-contain select-none"
                  />
                </div>
              </div>

              {/* Card Content Box: min-h-[198px], background #FAF7EE, border #E4CFAB */}
              <div className="relative w-full flex-1 min-h-[198px] bg-[#FAF7EE] border border-[#E4CFAB] flex flex-col items-center justify-between pt-[44px] pb-[16px] px-3 z-10 box-border">
                {/* Text Group */}
                <div className="flex flex-col items-center text-center w-full">
                  {/* Title: 36px height, single line across all 4 cards */}
                  <div className="h-[36px] w-full flex items-center justify-center px-1">
                    <h3
                      className={`font-display font-semibold ${service.titleSizeClass} leading-[1.2] text-[#1B4D32] text-center tracking-tight`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description: Balanced lines with ample room */}
                  <p className="font-body font-normal text-[14px] xl:text-[15px] leading-[20px] xl:leading-[22px] text-[#6A7C7B] text-balance max-w-[270px] mt-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Group: Gold Divider & Explore Link */}
                <div className="flex flex-col items-center gap-2.5 w-full pt-2">
                  {/* Gold Divider: 78px x 1px, #C9A96A */}
                  <span
                    className="w-[78px] h-[1px] bg-[#C9A96A] shrink-0"
                    aria-hidden="true"
                  />

                  {/* Explore Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 text-[#1B4D32] hover:text-[#C9A96A] transition-colors py-0.5"
                  >
                    <span className="font-body font-semibold text-[13px] xl:text-[14px] leading-[22px] tracking-[0.13em] uppercase whitespace-nowrap">
                      {service.linkLabel}
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 10H17M11.5 4.5L17 10L11.5 15.5"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PropertiesShowcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="relative w-full bg-[#FAF7EE] py-10 sm:py-12 md:py-14 border-b border-black/5"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[78px] flex flex-col gap-6 sm:gap-7 md:gap-8">
        {/* Eyebrow & Section Heading */}
        <div className="flex flex-col items-start gap-2 sm:gap-3">
          <div className="flex items-center gap-3">
            <span className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[0.16em] text-[#C09B59] uppercase">
              FIND YOUR DESTINATION
            </span>
            <div className="w-[36px] sm:w-[40px] h-[1px] bg-[#C9A366]" aria-hidden="true" />
          </div>

          <h2
            id="showcase-heading"
            className="font-display font-bold text-[34px] sm:text-[42px] md:text-[48px] lg:text-[51px] leading-[1.18] sm:leading-[1.22] text-[#174B34]"
          >
            A place for every occasion.
          </h2>
        </div>

        {/* 1. Large Featured Card: VALENCIA (Planned) */}
        <article
          id="valencia"
          className="group relative w-full overflow-hidden rounded-[9px] border border-[#DECFB3] bg-[#FCFAF5] shadow-[0_4px_20px_rgba(27,45,35,0.04)] flex flex-col lg:flex-row items-stretch"
        >
          {/* Photo Column */}
          <div className="relative w-full lg:w-[62%] min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[393px] overflow-hidden shrink-0">
            <Image
              src="/images/Properties/properties_valencia.png"
              alt="Valencia Luxury Boutique Hotel Patna"
              fill
              sizes="(max-width: 1024px) 100vw, 806px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Details Column */}
          <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 lg:pt-6 lg:pb-7 lg:pl-8 lg:pr-6 gap-4 sm:gap-5">
            <div className="flex flex-col gap-3">
              {/* Badges: Type & Status */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-[3px] bg-[#EAE5D9] font-body font-bold text-[10px] sm:text-[11px] leading-[15px] tracking-[0.12em] text-[#635B4E] uppercase whitespace-nowrap">
                  LUXURY BOUTIQUE HOTEL
                </span>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-[3px] border border-[#C9A066] font-body font-bold text-[10px] sm:text-[11px] leading-[15px] tracking-[0.12em] text-[#B58A48] uppercase whitespace-nowrap">
                  PLANNED
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[47px] leading-[1.15] text-[#174B34]">
                VALENCIA
              </h3>
              <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#51554F]">
                Italian-inspired elegance and warm hospitality in Patna
              </p>
            </div>

            {/* Amenities List with custom Figma icons */}
            <div className="flex flex-col gap-2.5 sm:gap-3 my-1">
              {/* Bed Amenity */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/Properties/propertiesIcon4.png"
                    alt="Bed icon"
                    width={22}
                    height={22}
                    className="object-contain opacity-85"
                  />
                </div>
                <span className="font-body font-normal text-[14px] sm:text-[15.5px] leading-[21px] text-[#51554F]">
                  Deluxe, Twin, Suite &amp; Presidential Suite
                </span>
              </div>

              {/* Dining Amenity */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/Properties/PropertiesIcon5.png"
                    alt="Dining icon"
                    width={22}
                    height={22}
                    className="object-contain opacity-85"
                  />
                </div>
                <span className="font-body font-normal text-[14px] sm:text-[15.5px] leading-[21px] text-[#51554F]">
                  Dining, meetings &amp; celebrations
                </span>
              </div>

              {/* Building / Flagship Amenity */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/Properties/propertiesIcon7.png"
                    alt="Flagship icon"
                    width={22}
                    height={22}
                    className="object-contain opacity-85"
                  />
                </div>
                <span className="font-body font-normal text-[14px] sm:text-[15.5px] leading-[21px] text-[#51554F]">
                  The flagship of Yash Events Corporation
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-1">
              <Link
                href="/valencia"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[210px] h-[48px] bg-[#174B34] hover:bg-[#123d2a] text-[#F8F5EA] rounded-[3px] font-body font-semibold text-[15px] sm:text-[16px] leading-[21px] tracking-[0.12em] transition-colors uppercase group/btn"
              >
                <span>VIEW STAY</span>
                <ArrowRight
                  size={16}
                  className="stroke-[2.5] group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </article>

        {/* 2. Operational Properties Row (2 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[26px] w-full">
          {/* Card 2: Umrao The Banquet */}
          <article
            id="umrao"
            className="group relative w-full overflow-hidden rounded-[9px] border border-[#DECFB3] bg-[#FCFAF5] shadow-[0_4px_20px_rgba(27,45,35,0.04)] flex flex-col"
          >
            {/* Top Photo */}
            <div className="relative w-full h-[206px] sm:h-[220px] overflow-hidden shrink-0">
              <Image
                src="/images/Properties/properties_umrao.png"
                alt="Umrao The Banquet Patna"
                fill
                sizes="(max-width: 1024px) 100vw, 629px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 lg:pt-[18px] lg:pb-6 lg:px-7 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-[3px] bg-[#EAE5D9] font-body font-bold text-[10px] sm:text-[11px] leading-[15px] tracking-[0.12em] text-[#635B4E] uppercase whitespace-nowrap">
                    BANQUET VENUE
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-[3px] border border-[#C9A066] font-body font-bold text-[10px] sm:text-[11px] leading-[15px] tracking-[0.12em] text-[#B58A48] uppercase whitespace-nowrap">
                    OPERATIONAL
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.2] text-[#174B34]">
                  Umrao The Banquet
                </h3>
                <p className="font-body font-normal text-[14.5px] sm:text-[16px] leading-[22px] text-[#51554F]">
                  Spaces for weddings, celebrations and corporate gatherings
                </p>
              </div>

              {/* Amenity */}
              <div className="flex items-center gap-3.5 my-1">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/Properties/propertiesIcon6.png"
                    alt="Gatherings icon"
                    width={22}
                    height={22}
                    className="object-contain opacity-85"
                  />
                </div>
                <span className="font-body font-normal text-[14px] sm:text-[15.5px] leading-[21px] text-[#51554F]">
                  Main hall · Lawn · Smaller hall
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[190px] h-[44px] bg-[#174B34] hover:bg-[#123d2a] text-[#F8F5EA] rounded-[3px] font-body font-semibold text-[15px] sm:text-[16px] leading-[21px] tracking-[0.12em] transition-colors uppercase group/btn"
                >
                  <span>ENQUIRE</span>
                  <ArrowRight
                    size={16}
                    className="stroke-[2.5] group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </article>

          {/* Card 3: Hotel Jia International */}
          <article
            id="jia"
            className="group relative w-full overflow-hidden rounded-[9px] border border-[#DECFB3] bg-[#FCFAF5] shadow-[0_4px_20px_rgba(27,45,35,0.04)] flex flex-col"
          >
            {/* Top Photo */}
            <div className="relative w-full h-[206px] sm:h-[220px] overflow-hidden shrink-0">
              <Image
                src="/images/Properties/properties_jia.png"
                alt="Hotel Jia International Patna"
                fill
                sizes="(max-width: 1024px) 100vw, 629px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 lg:pt-[18px] lg:pb-6 lg:px-7 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-[3px] bg-[#EAE5D9] font-body font-bold text-[10px] sm:text-[11px] leading-[15px] tracking-[0.12em] text-[#635B4E] uppercase whitespace-nowrap">
                    BUDGET HOTEL
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-[3px] border border-[#C9A066] font-body font-bold text-[10px] sm:text-[11px] leading-[15px] tracking-[0.12em] text-[#B58A48] uppercase whitespace-nowrap">
                    OPERATIONAL
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.2] text-[#174B34]">
                  Hotel Jia International
                </h3>
                <p className="font-body font-normal text-[14.5px] sm:text-[16px] leading-[22px] text-[#51554F]">
                  Comfortable city stays on Fraser Road, Patna.
                </p>
              </div>

              {/* Amenity */}
              <div className="flex items-center gap-3.5 my-1">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/Properties/propertiesIcon4.png"
                    alt="Rooms icon"
                    width={22}
                    height={22}
                    className="object-contain opacity-85"
                  />
                </div>
                <span className="font-body font-normal text-[14px] sm:text-[15.5px] leading-[21px] text-[#51554F]">
                  36 rooms · Free Wi-Fi · Parking
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[220px] h-[44px] bg-[#174B34] hover:bg-[#123d2a] text-[#F8F5EA] rounded-[3px] font-body font-semibold text-[15px] sm:text-[16px] leading-[21px] tracking-[0.12em] transition-colors uppercase group/btn"
                >
                  <span>VIEW HOTEL</span>
                  <ArrowRight
                    size={16}
                    className="stroke-[2.5] group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";

export default function PropertiesHero() {
  return (
    <section
      aria-label="Our Properties Introduction"
      className="relative w-full overflow-hidden bg-[#1c1109] border-b border-black/5"
    >
      {/* Background Hero Image (navbar cropped out) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/Properties/properties_hero.png"
          alt="Valencia Luxury Boutique Hotel Grounds & Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center"
        />
        {/* Dark Left Photo Gradient matching Figma:
            linear-gradient(90deg, rgba(28, 17, 9, 0.94) 0%, rgba(28, 17, 9, 0.78) 38%, rgba(28, 17, 9, 0.24) 63%, rgba(28, 17, 9, 0) 100%) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(28, 17, 9, 0.96) 0%, rgba(28, 17, 9, 0.88) 35%, rgba(28, 17, 9, 0.45) 65%, rgba(28, 17, 9, 0.15) 100%)",
          }}
        />
        {/* Subtle bottom vignette on mobile */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#1c1109]/80 via-transparent to-transparent md:hidden" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] min-h-[486px] flex flex-col justify-between pt-6 sm:pt-7 lg:pt-[22px] pb-7 sm:pb-8 lg:pb-[26px] px-5 sm:px-8 md:px-12 lg:pl-[68px] lg:pr-10">
        {/* Top Content Block */}
        <div className="flex flex-col items-start gap-4 sm:gap-[18px] lg:gap-[20px] max-w-[940px]">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 h-[27px]">
            <Link
              href="/"
              className="font-body text-[13px] sm:text-[14px] leading-[20px] text-[#FAF7F0]/80 hover:text-[#FAF7F0] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#FAF7F0]/60 text-[13px] sm:text-[14px] leading-[20px]">/</span>
            <span className="font-body text-[13px] sm:text-[14px] leading-[20px] text-[#FAF7F0]">
              Our Properties
            </span>
          </nav>

          {/* Eyebrow */}
          <span className="font-body font-semibold text-[13px] sm:text-[14px] lg:text-[15px] leading-[21px] tracking-[0.24em] lg:tracking-[0.3em] text-[#C9994F] uppercase h-[26px] flex items-center">
            THE YASH EVENTS CORPORATION FAMILY
          </span>

          {/* Heading */}
          <div className="flex flex-col items-start gap-0.5 sm:gap-1">
            <h1 className="font-display font-normal text-[48px] sm:text-[66px] md:text-[76px] lg:text-[88px] leading-[1.05] text-[#FAF7F0] tracking-normal">
              Our Properties
            </h1>
            <p className="font-display italic font-normal text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.15] text-[#FAF7F0]">
              Distinct places. A shared welcome.
            </p>
          </div>

          {/* Subtitle Description - covered in exactly 2 lines on desktop with refined spacing */}
          <p className="font-body font-normal text-[15px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[30px] text-[#FAF7F0]/95 max-w-[890px]">
            <span className="inline">From boutique stays at VALENCIA to celebrations at Umrao The Banquet</span>
            <br className="hidden md:inline" />
            <span className="inline md:pl-1">and city stays at Hotel Jia International, find the setting that suits your visit.</span>
          </p>
        </div>

        {/* Categories Bar & Gold Divider */}
        <div className="mt-7 sm:mt-8 lg:mt-7 w-full max-w-[730px] flex flex-col gap-3">
          {/* Gold divider line (730px wide) */}
          <div className="w-full h-[1px] bg-[#BA8C4A]" />

          {/* Categories Row */}
          <div className="flex flex-wrap items-center gap-y-3 sm:gap-y-0 sm:flex-nowrap justify-between sm:justify-start">
            {/* Category 1: Boutique Stays */}
            <div className="flex items-center gap-3 sm:gap-[15px] min-w-[180px] sm:w-[225px] h-[50px]">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/Properties/propertiesIcon1.png"
                  alt="Boutique Stays"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[25px] text-[#FAF7F0] whitespace-nowrap">
                Boutique stays
              </span>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden sm:block w-[1px] h-[40px] bg-[#BA8C4A] mx-2 lg:mx-4 shrink-0" />

            {/* Category 2: Weddings & Events */}
            <div className="flex items-center gap-3 sm:gap-[15px] min-w-[190px] sm:w-[225px] h-[50px]">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/Properties/propertiesIcon2.png"
                  alt="Weddings & Events"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[25px] text-[#FAF7F0] whitespace-nowrap">
                Weddings & events
              </span>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden sm:block w-[1px] h-[40px] bg-[#BA8C4A] mx-2 lg:mx-4 shrink-0" />

            {/* Category 3: City Stays */}
            <div className="flex items-center gap-3 sm:gap-[15px] min-w-[170px] sm:w-[225px] h-[50px]">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/Properties/propertiesIcon3.png"
                  alt="City Stays"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[25px] text-[#FAF7F0] whitespace-nowrap">
                City stays
              </span>
            </div>
          </div>
        </div>

        {/* Concept Imagery watermark tag in bottom right */}
        <div className="absolute bottom-2.5 right-4 sm:right-6 md:right-8 z-20 pointer-events-none">
          <span className="font-body text-[11px] sm:text-[12px] text-[#FAF7F0]/40 tracking-wider">
            Concept imagery
          </span>
        </div>
      </div>
    </section>
  );
}

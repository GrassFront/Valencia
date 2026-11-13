"use client";

import Image from "next/image";
import Link from "next/link";

const QUALITIES = [
  {
    label: "Curated Menu",
    line1: "Curated",
    line2: "Menu",
    iconSrc: "/icon/homepage/dining_chefSection.png",
    iconAlt: "Curated menu icon",
  },
  {
    label: "Fresh Ingredients",
    line1: "Fresh",
    line2: "Ingredients",
    iconSrc: "/icon/homepage/vegetables_chefSection.png",
    iconAlt: "Fresh ingredients icon",
  },
  {
    label: "Refined Ambience",
    line1: "Refined",
    line2: "Ambience",
    iconSrc: "/icon/homepage/ambience_chefSection.png",
    iconAlt: "Refined ambience icon",
  },
  {
    label: "Signature Creations",
    line1: "Signature",
    line2: "Creations",
    iconSrc: "/icon/homepage/signature_chefSection.png",
    iconAlt: "Signature creations icon",
  },
];

export default function DiningSection() {
  return (
    <section
      id="dining"
      aria-labelledby="dining-heading"
      className="relative w-full bg-[#F5F0E5] border-b border-black/[0.06] overflow-hidden"
    >
      {/* Outer Container: Stacked cleanly on Mobile & Tablet, 2-column side-by-side on Desktop */}
      <div className="mx-auto w-full max-w-[1440px] flex flex-col xl:flex-row items-stretch justify-between min-h-auto xl:h-[806px]">
        {/* ============================================================== */}
        {/* Left Column: The Town House Restaurant Photograph */}
        {/* ============================================================== */}
        <div className="relative w-full xl:w-[51.4%] xl:max-w-[740px] h-[320px] sm:h-[400px] md:h-[460px] xl:h-full shrink-0 overflow-hidden bg-[#E8DCC9]/30">
          <Image
            src="/images/homepage/homepage_diningSection.png"
            alt="The Town House - Neoclassical boutique luxury restaurant with refined candlelit tables and marble finishes"
            fill
            sizes="(max-width: 1280px) 100vw, 740px"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            priority={false}
          />
        </div>

        {/* ============================================================== */}
        {/* Right Column: Dining Content */}
        {/* ============================================================== */}
        <div className="w-full xl:w-[48.6%] xl:max-w-[700px] flex flex-col justify-between py-10 sm:py-12 md:py-14 xl:py-[42px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[30px] 2xl:px-[36px] gap-8 sm:gap-9 md:gap-9 xl:gap-[23px] box-border min-w-0 max-w-[760px] xl:max-w-[700px] mx-auto xl:mx-0">
          {/* ------------------------------------------------------------ */}
          {/* 1. Dining Introduction */}
          {/* ------------------------------------------------------------ */}
          <div className="flex flex-col items-start gap-3 sm:gap-3.5 xl:gap-[12px] w-full max-w-[640px]">
            {/* Eyebrow with gold divider rule */}
            <div className="flex items-center gap-3 sm:gap-4 xl:gap-[18px] w-full">
              <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[24px] tracking-[0.26em] sm:tracking-[0.3em] text-[#AD824C] uppercase whitespace-nowrap">
                DINING EXPERIENCE
              </span>
              <span
                className="h-[1px] w-16 sm:w-24 xl:w-[132px] bg-[#C9A96A] shrink-0"
                aria-hidden="true"
              />
            </div>

            {/* Title */}
            <h2
              id="dining-heading"
              className="flex flex-col items-start font-display font-normal text-[36px] sm:text-[44px] md:text-[48px] xl:text-[54px] leading-[1.08] sm:leading-[1.1] xl:leading-[57px] text-[#25443F]"
            >
              <span>A Taste of</span>
              <span className="italic text-[32px] sm:text-[40px] md:text-[44px] xl:text-[49px] leading-[1.12] xl:leading-[55px] text-[#A47D48]">
                Something Exceptional.
              </span>
            </h2>

            {/* Introduction paragraph */}
            <p className="font-body font-normal text-[14px] sm:text-[15.5px] xl:text-[16px] leading-[22px] sm:leading-[24px] xl:leading-[22px] text-[#526B66] max-w-[640px]">
              At VALENCIA, dining is more than a meal — it&apos;s a celebration of flavours,
              craftsmanship and warm hospitality. Our signature restaurant, The Town House,
              brings together refined interiors, a sophisticated ambience and a thoughtfully
              curated menu by our celebrity chef.
            </p>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 2. Celebrity Chef Profile */}
          {/* ------------------------------------------------------------ */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 md:gap-7 xl:gap-[48px] w-full max-w-[640px]">
            {/* Chef Portrait */}
            <div className="relative w-full sm:w-[230px] md:w-[250px] xl:w-[274px] h-[200px] sm:h-[220px] xl:h-[232px] shrink-0 overflow-hidden rounded-[2px] bg-[#E8DCC9]/30 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/homepage/homepage_chefMichael.png"
                alt="Chef Michel crafting signature culinary dishes in the Valencia kitchen"
                fill
                sizes="(max-width: 640px) 100vw, 274px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Chef Biography & Signature */}
            <div className="flex flex-col items-start justify-between flex-1 min-w-0 h-auto sm:min-h-[220px] xl:min-h-[232px] gap-2 sm:gap-2.5 xl:gap-[8px] w-full">
              <div className="flex flex-col items-start gap-1 sm:gap-1.5 w-full">
                {/* Eyebrow */}
                <span className="font-body font-semibold text-[10.5px] sm:text-[11px] leading-[19px] tracking-[0.2em] text-[#AD824C] uppercase">
                  OUR CELEBRITY CHEF
                </span>

                {/* Chef Name */}
                <h3 className="font-display font-normal text-[26px] sm:text-[29px] xl:text-[32px] leading-[34px] sm:leading-[38px] xl:leading-[43px] text-[#25443F]">
                  Chef Michel
                </h3>

                {/* Bio text */}
                <p className="font-body font-normal text-[13px] sm:text-[14px] xl:text-[15px] leading-[19px] sm:leading-[20px] text-[#526B66] max-w-[346px]">
                  With a passion for global cuisines and a deep respect for local flavours, Chef
                  Michel brings his world-class expertise to create unforgettable dining experiences
                  at The Town House.
                </p>
              </div>

              {/* Chef Michel Signature Artwork */}
              <div className="relative w-[180px] sm:w-[195px] xl:w-[210px] h-[40px] sm:h-[44px] xl:h-[47px] mt-1 sm:mt-0 shrink-0">
                <Image
                  src="/icon/homepage/Signature artwork.png"
                  alt="Chef Michel Signature"
                  fill
                  sizes="210px"
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 3. Dining Qualities (4 features with vertical gold dividers) */}
          {/* ------------------------------------------------------------ */}
          <div className="w-full max-w-[640px] grid grid-cols-2 sm:grid-cols-4 items-stretch gap-y-4 sm:gap-y-0 pt-1 sm:pt-0">
            {QUALITIES.map((quality, index) => (
              <div
                key={quality.label}
                className="relative flex flex-col items-center justify-start text-center px-2 py-1 gap-1.5 sm:gap-[5px]"
              >
                {/* Vertical gold divider (between columns 1-2, 2-3, 3-4 on sm+ screens) */}
                {index > 0 && (
                  <span
                    className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[56px] xl:h-[72px] bg-[#C9A96A]"
                    aria-hidden="true"
                  />
                )}

                {/* Icon */}
                <div className="relative w-[30px] sm:w-[33px] h-[30px] sm:h-[33px] shrink-0">
                  <Image
                    src={quality.iconSrc}
                    alt={quality.iconAlt}
                    width={33}
                    height={33}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Label (2 lines centered) */}
                <span className="font-body font-normal text-[12px] sm:text-[13px] xl:text-[14px] leading-[17px] xl:leading-[19px] text-center text-[#385952]">
                  {quality.line1}
                  <br />
                  {quality.line2}
                </span>
              </div>
            ))}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 4. Dining Actions */}
          {/* ------------------------------------------------------------ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 xl:gap-[22px] w-full max-w-[640px] pt-1">
            {/* Primary Button: EXPLORE DINING */}
            <Link
              href="#the-town-house"
              className="inline-flex h-[46px] xl:h-[49px] w-full sm:w-[230px] xl:w-[253px] items-center justify-center gap-2.5 sm:gap-3 bg-[#1B4D32] text-[#F8F5EA] rounded-[2px] transition-colors duration-200 hover:bg-[#153e28] active:bg-[#0f2c1c] cursor-pointer"
            >
              <span className="font-body font-semibold text-[10.5px] xl:text-[11px] leading-[24px] tracking-[0.18em] xl:tracking-[0.2em] uppercase whitespace-nowrap">
                EXPLORE DINING
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform duration-200 hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12"
                  stroke="#F8F5EA"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Secondary Button: RESERVE A TABLE */}
            <Link
              href="#reservations"
              className="inline-flex h-[46px] xl:h-[49px] w-full sm:w-[210px] xl:w-[228px] items-center justify-center gap-2.5 sm:gap-3 border border-[#B18B51] text-[#AD824C] rounded-[2px] transition-colors duration-200 hover:bg-[#B18B51] hover:text-[#FAF7F0] active:bg-[#96733c] cursor-pointer"
            >
              <span className="font-body font-semibold text-[10.5px] xl:text-[11px] leading-[24px] tracking-[0.18em] xl:tracking-[0.2em] uppercase whitespace-nowrap">
                RESERVE A TABLE
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform duration-200 hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ArrowDownIcon, LocationMarkerIcon } from "./JiaIcons";

export default function JiaHero() {
  return (
    <section
      aria-label="Hotel Jia International Hero"
      className="relative w-full min-h-[720px] lg:h-[806px] bg-[#332215] overflow-hidden flex flex-col justify-start"
    >
      {/* Background Hotel Exterior Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Jia Hotel/jia_hero.png"
          alt="Hotel Jia International - Modern illuminated hotel facade on Fraser Road, Patna"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] lg:object-center"
        />
      </div>

      {/* Hero Left Dark Gradient Overlay matching exact Figma token */}
      <div
        className="absolute inset-0 z-[1] jia-hero-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:pl-[58px] lg:pr-10 pt-10 sm:pt-14 lg:pt-[54px] pb-12 sm:pb-16 flex flex-col items-start">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[14px] sm:text-[16px] leading-[20px] text-[#FAF6EC] font-body font-normal"
        >
          <Link
            href="/"
            className="hover:text-[#D0AB61] transition-colors"
          >
            Home
          </Link>
          <span className="text-[#FAF6EC]/50">/</span>
          <Link
            href="/properties"
            className="hover:text-[#D0AB61] transition-colors"
          >
            Our Properties
          </Link>
          <span className="text-[#FAF6EC]/50">/</span>
          <span className="text-[#FAF6EC] font-medium" aria-current="page">
            Hotel Jia International
          </span>
        </nav>

        {/* Spacing: 51px desktop */}
        <div className="h-6 sm:h-8 lg:h-[51px]" aria-hidden="true" />

        {/* Hero Eyebrow + Divider */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-[22px]">
          <span className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] tracking-[3px] sm:tracking-[4px] text-[#D0AB61] uppercase">
            YOUR CITY STAY IN PATNA
          </span>
          <div
            className="w-[50px] sm:w-[90px] h-[1px] bg-[#D0AB61] shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* Spacing: 23px desktop */}
        <div className="h-3 sm:h-4 lg:h-[23px]" aria-hidden="true" />

        {/* Main Title */}
        <h1 className="font-display font-normal text-[52px] sm:text-[70px] lg:text-[88px] leading-[1.05] lg:leading-[90px] text-[#FAF6EC] tracking-normal">
          Hotel Jia<br />International
        </h1>

        {/* Spacing: 20px desktop */}
        <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

        {/* Italic Subtitle */}
        <p className="font-display italic font-normal text-[22px] sm:text-[26px] lg:text-[29px] leading-[30px] lg:leading-[36px] text-[#FAF6EC]">
          Comfort that keeps you connected.
        </p>

        {/* Spacing: 23px desktop */}
        <div className="h-3 sm:h-4 lg:h-[23px]" aria-hidden="true" />

        {/* Description paragraph */}
        <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[28px] lg:leading-[30px] text-[#FAF6EC] max-w-[590px]">
          A practical, welcoming base for business trips, family visits and exploring the city.
        </p>

        {/* Spacing: 29px desktop */}
        <div className="h-4 sm:h-5 lg:h-[29px]" aria-hidden="true" />

        {/* Address row */}
        <div className="flex items-center gap-2.5 sm:gap-[12px] text-[#FAF6EC]">
          <LocationMarkerIcon size={20} color="#D0AB61" className="shrink-0" />
          <span className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px]">
            Fraser Road, opposite Buddha Smriti Park, Patna
          </span>
        </div>

        {/* Spacing: 37px desktop */}
        <div className="h-6 sm:h-7 lg:h-[37px]" aria-hidden="true" />

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[22px] w-full sm:w-auto">
          {/* CTA 1: ENQUIRE ABOUT YOUR STAY */}
          <Link
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[345px] h-[53px] bg-[#C99D4B] hover:bg-[#b88c3a] active:bg-[#a67c2e] rounded-[8px] text-[#FAF6EC] transition-all shadow-md group"
          >
            <span className="font-body font-bold text-[16px] sm:text-[18px] leading-[23px] uppercase tracking-wide">
              ENQUIRE ABOUT YOUR STAY
            </span>
            <ArrowRightIcon
              size={20}
              color="#FAF6EC"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {/* CTA 2: EXPLORE ROOMS */}
          <Link
            href="#rooms"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[222px] h-[53px] border-2 border-[#FAF6EC] hover:bg-white/10 active:bg-white/20 rounded-[8px] text-[#FAF6EC] transition-all group"
          >
            <span className="font-body font-bold text-[16px] sm:text-[18px] leading-[23px] uppercase tracking-wide">
              EXPLORE ROOMS
            </span>
            <ArrowDownIcon
              size={20}
              color="#FAF6EC"
              className="group-hover:translate-y-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

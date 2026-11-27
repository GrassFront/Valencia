"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ArrowDownIcon } from "./UmraoIcons";

export default function UmraoHero() {
  return (
    <section
      aria-label="Umrao The Banquet Hero"
      className="relative w-full min-h-[700px] lg:h-[849px] bg-[#291206] overflow-hidden flex flex-col justify-start"
    >
      {/* Background Banquet Photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Umrao/hero/umrao_hero.png"
          alt="Umrao The Banquet - Jaipur inspired royal banquet hall with grand floral stage and chandelier"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-center"
        />
      </div>

      {/* Hero Dark Gradient Overlay matching exact Figma token */}
      <div
        className="absolute inset-0 z-[1] umrao-hero-overlay pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container (padding: 64px 0px 0px 69px on desktop) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-10 lg:pl-[69px] lg:pr-10 pt-10 sm:pt-14 lg:pt-[64px] pb-12 sm:pb-16 flex flex-col items-start">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 sm:gap-2 text-[14px] sm:text-[16px] lg:text-[17px] leading-[21px] text-[#FFF9EC]/90 font-body font-normal"
        >
          <Link
            href="/"
            className="hover:text-[#C8A153] transition-colors"
          >
            Home
          </Link>
          <span className="text-[#FFF9EC]/50">/</span>
          <Link
            href="/properties"
            className="hover:text-[#C8A153] transition-colors"
          >
            Our Properties
          </Link>
          <span className="text-[#FFF9EC]/50">/</span>
          <span className="text-[#FFF9EC] font-medium" aria-current="page">
            Umrao The Banquet
          </span>
        </nav>

        {/* Spacing: 56px on desktop */}
        <div className="h-6 sm:h-10 lg:h-[56px]" aria-hidden="true" />

        {/* Eyebrow: CELEBRATE IN PATNA */}
        <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[25px] tracking-[5px] sm:tracking-[7px] text-[#C8A153] uppercase">
          CELEBRATE IN PATNA
        </p>

        {/* Spacing: 18px */}
        <div className="h-3 sm:h-4 lg:h-[18px]" aria-hidden="true" />

        {/* Main Heading: Umrao The Banquet */}
        <h1 className="font-display font-normal text-[48px] sm:text-[72px] md:text-[84px] lg:text-[100px] leading-[1.05] sm:leading-[1] lg:leading-[98px] text-[#FFF9EC] max-w-[620px]">
          <span className="block">Umrao</span>
          <span className="block">The Banquet</span>
        </h1>

        {/* Spacing: 20px */}
        <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

        {/* Italic Subtitle: A grand setting for your special moments. */}
        <p className="font-display italic font-normal text-[22px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[1.25] sm:leading-[1.26] lg:leading-[44px] text-[#FFF9EC] max-w-[616px]">
          A grand setting for your special moments.
        </p>

        {/* Spacing: 20px */}
        <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

        {/* Description */}
        <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#FFF9EC]/95 max-w-[575px]">
          Jaipur-inspired interiors and versatile spaces for weddings, celebrations and memorable gatherings.
        </p>

        {/* Spacing: 32px */}
        <div className="h-4 sm:h-6 lg:h-[32px]" aria-hidden="true" />

        {/* Location Pin bullet */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[16px] sm:text-[19px] lg:text-[22px] leading-[28px] text-[#FFF9EC] font-body font-normal">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFF9EC] shrink-0" aria-hidden="true" />
          <span>Zero Mile, Masaurhi Road, Patna</span>
        </div>

        {/* Spacing: 40px */}
        <div className="h-6 sm:h-8 lg:h-[40px]" aria-hidden="true" />

        {/* Hero Actions Row (gap: 28px) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[28px] w-full sm:w-auto">
          {/* Primary CTA: ENQUIRE FOR YOUR EVENT */}
          <Link
            href="#enquiry"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[320px] min-h-[48px] sm:h-[56px] px-4 py-2.5 bg-[#CEA652] hover:bg-[#bd9543] active:bg-[#b08738] rounded-[7px] text-[#543522] transition-all shadow-md group"
          >
            <span className="font-body font-bold text-[13px] sm:text-[16px] lg:text-[18px] leading-tight tracking-[1px] sm:tracking-wide uppercase whitespace-nowrap">
              ENQUIRE FOR YOUR EVENT
            </span>
            <ArrowRightIcon
              size={18}
              color="#543522"
              className="shrink-0 group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {/* Secondary CTA: EXPLORE VENUES ↓ */}
          <Link
            href="#venues"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[240px] min-h-[48px] sm:h-[56px] px-4 py-2.5 border-2 border-[#FFF9EC] hover:bg-[#FFF9EC]/15 active:bg-[#FFF9EC]/25 rounded-[7px] text-[#FFF9EC] transition-all group"
          >
            <span className="font-body font-bold text-[13px] sm:text-[16px] lg:text-[18px] leading-tight tracking-[1px] sm:tracking-wide uppercase whitespace-nowrap">
              EXPLORE VENUES
            </span>
            <ArrowDownIcon
              size={18}
              color="#FFF9EC"
              className="shrink-0 group-hover:translate-y-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

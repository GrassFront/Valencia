"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HospitalityFamilyCta() {
  return (
    <section
      id="cta-properties"
      aria-labelledby="cta-heading"
      className="cta-section relative w-full bg-[#1B4D32] overflow-hidden"
    >
      {/* Top 1px Gold Border at 4px */}
      <div
        className="cta-border-top absolute top-[4px] left-0 right-0 h-[1px] bg-[#C9A96A] z-[1]"
        aria-hidden="true"
      />

      {/* Bottom 1px Gold Border */}
      <div
        className="cta-border-bottom absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A96A] z-[2]"
        aria-hidden="true"
      />

      {/* Background Architectural Watermark spanning full width along the bottom */}
      <div
        className="cta-bg-image absolute left-0 right-0 bottom-0 w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[390px] xl:h-[442px] pointer-events-none z-0 opacity-[0.35]"
        aria-hidden="true"
      >
        <Image
          src="/images/OurStory/storyBG4.png"
          alt=""
          fill
          sizes="100vw"
          className="object-fill object-bottom"
          priority
        />
      </div>

      <div className="cta-container relative z-[3] w-full max-w-[1440px] mx-auto flex items-start pt-[60px] sm:pt-[80px] lg:pt-[100px] xl:pt-[119px] pb-[90px] sm:pb-[110px] lg:pb-[130px] xl:pb-[140px] px-6 sm:px-10 lg:px-14 xl:px-[88px]">
        {/* Main Content Frame */}
        <div className="cta-content-frame flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-[30px] w-full max-w-[1238px]">
          {/* Left Copy Column */}
          <div className="cta-copy-box flex flex-col items-start gap-[16px] xl:gap-[18px] w-full max-w-[832px]">
            <span className="cta-eyebrow font-body font-semibold text-[13px] sm:text-[15px] xl:text-[16px] leading-[27px] tracking-[0.38em] text-[#D0B365] uppercase">
              OUR HOSPITALITY FAMILY
            </span>
            <h2
              id="cta-heading"
              className="cta-headline font-display font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[65px] leading-[1.22] lg:leading-[1.29] text-[#F8F5EA] lg:whitespace-nowrap"
            >
              Find your place with us.
            </h2>
            {/* Description - exactly 2 lines */}
            <p className="cta-description font-body font-normal text-[16px] sm:text-[19px] lg:text-[23px] leading-[26px] sm:leading-[30px] lg:leading-[32px] text-[#E5E4CF] max-w-[850px]">
              Discover VALENCIA, Umrao The Banquet and Hotel Jia International —
              <br className="hidden sm:inline" />
              {" "}three distinct destinations, one warm welcome.
            </p>
          </div>

          {/* Right Button Column */}
          <Link
            href="/#properties"
            className="cta-button group inline-flex items-center justify-center gap-[15px] w-full sm:w-[376px] h-[62px] sm:h-[67px] bg-[#D5B766] hover:bg-[#C7A959] transition-colors shrink-0 shadow-md cursor-pointer"
          >
            <span className="cta-button-text font-body font-semibold text-[16px] sm:text-[18px] leading-[28px] text-[#174B34] uppercase tracking-normal whitespace-nowrap">
              EXPLORE OUR PROPERTIES
            </span>
            <ArrowRight
              size={22}
              className="text-[#174B34] stroke-[2] group-hover:translate-x-1.5 transition-transform shrink-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

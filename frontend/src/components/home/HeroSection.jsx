"use client";

import Image from "next/image";
import { HeroBookingBar } from "../booking";

export default function HeroSection({ onSearch }) {
  return (
    <section
      aria-label="Welcome to Valencia"
      className="relative w-full flex items-center justify-center pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-14 lg:pb-36"
    >
      {/* Background Photography (overflow strictly contained within this wrapper) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/homepage/homepage_hero.png"
          alt="Valencia Hotel Lobby Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Figma Warm Overlay: linear-gradient(180deg, rgba(27, 12, 0, 0.32) 0%, rgba(45, 21, 5, 0.32) 100%) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(27, 12, 0, 0.32) 0%, rgba(45, 21, 5, 0.32) 100%)",
          }}
        />
      </div>

      {/* Hero Content Container (Figma Frame 12, 1080px wide) */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col items-center gap-7 sm:gap-9 lg:gap-10 px-4 sm:px-6">
        {/* Headline Group */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
          {/* Eyebrow with Gold Rules */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full max-w-[560px]">
            <span
              className="h-[1px] w-8 sm:w-16 md:w-[104px] bg-[#BC9756] shrink-0"
              aria-hidden="true"
            />
            <span className="font-body text-[12px] sm:text-[14px] md:text-[16px] font-medium tracking-[0.2em] sm:tracking-[0.24em] text-[#F8F5EA] uppercase whitespace-nowrap">
              A Luxury Boutique Hotel
            </span>
            <span
              className="h-[1px] w-8 sm:w-16 md:w-[104px] bg-[#BC9756] shrink-0"
              aria-hidden="true"
            />
          </div>

          {/* Headline */}
          <h1 className="flex flex-col items-center font-display text-[#F8F5EA] text-center tracking-normal">
            <span className="text-[36px] sm:text-[54px] md:text-[68px] lg:text-[80px] font-normal leading-[1.08] md:leading-[82px]">
              Where Elegance
            </span>
            <span className="italic text-[34px] sm:text-[50px] md:text-[64px] lg:text-[76px] font-normal leading-[1.08] md:leading-[80px]">
              Feels Like Home
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-[620px] font-body text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] font-normal leading-[22px] sm:leading-[26px] md:leading-[29px] text-[#F8F5EA]/95 text-center px-2">
            Italian-inspired elegance, thoughtful hospitality and spaces{" "}
            <br className="hidden sm:inline" />
            for stays and celebrations that feel truly special.
          </p>
        </div>

        {/* Hero Booking Bar */}
        <HeroBookingBar onSearch={onSearch} />
      </div>
    </section>
  );
}

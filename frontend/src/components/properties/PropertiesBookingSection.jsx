"use client";

import Image from "next/image";
import { HeroBookingBar } from "../booking";

export default function PropertiesBookingSection() {
  const handleBookingSearch = (searchData) => {
    console.log("Properties booking search:", searchData);
  };

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="relative w-full bg-[#4B3523] text-[#F8F5EA] overflow-hidden pt-16 sm:pt-20 md:pt-[77px] pb-16 sm:pb-20 md:pb-[84px]"
    >
      {/* Background Architectural Illustration */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-luminosity pointer-events-none">
        <Image
          src="/images/Properties/propertiesBG.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        {/* Subtle gradient overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4B3523]/80 via-[#4B3523]/50 to-[#4B3523]/90" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 flex flex-col items-center gap-3 sm:gap-3.5 text-center">
        {/* Eyebrow */}
        <span className="font-body font-semibold text-[13px] sm:text-[14px] md:text-[15px] leading-[24px] tracking-[0.22em] sm:tracking-[0.28em] text-[#E2BA6D] uppercase">
          YOUR STAY, BEAUTIFULLY PLANNED
        </span>

        {/* Title */}
        <h2
          id="booking-heading"
          className="font-display font-normal text-[36px] sm:text-[48px] md:text-[54px] lg:text-[60px] leading-[1.18] sm:leading-[1.22] text-[#F8F5EA] max-w-[1150px]"
        >
          Your next stay begins here.
        </h2>

        {/* Subtitle */}
        <p className="font-body font-normal text-[16px] sm:text-[18px] md:text-[21px] leading-[26px] sm:leading-[32px] text-[#F8F5EA]/90 max-w-[1100px] mb-4 sm:mb-6">
          Choose your dates and discover your stay at VALENCIA.
        </p>

        {/* Reusable Booking Bar */}
        <div className="w-full flex justify-center pt-2">
          <HeroBookingBar onSearch={handleBookingSearch} />
        </div>
      </div>

      {/* Gold Divider Line at bottom of booking section before footer */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A96A] opacity-65"
        aria-hidden="true"
      />
    </section>
  );
}


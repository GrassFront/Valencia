"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./UmraoIcons";

export default function UmraoMoments() {
  return (
    <section
      aria-label="More Moments to Celebrate"
      className="relative w-full bg-[#503522] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] flex flex-col lg:flex-row items-stretch min-h-[560px] lg:h-[614px]">
        {/* Left: Reference Photograph (width: 644px, height: 614px desktop) */}
        <div className="relative w-full lg:w-[644px] h-[360px] sm:h-[450px] lg:h-[614px] shrink-0 overflow-hidden">
          <Image
            src="/images/Umrao/moments.png"
            alt="Pre-wedding royal courtyard celebration with vibrant marigold floral garlands, yellow umbrellas, and ornate carved daybed"
            fill
            sizes="(max-width: 1024px) 100vw, 644px"
            className="object-cover object-center"
          />
        </div>

        {/* Right: Pre-wedding offer copy (width: 796px desktop) */}
        <div className="flex-1 flex flex-col items-start justify-center px-6 sm:px-12 lg:pt-[80px] lg:pb-[60px] lg:pl-[78px] lg:pr-10 py-12 lg:py-0 text-[#FFF9EC]">
          {/* Eyebrow */}
          <p className="font-body font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[27px] tracking-[3px] sm:tracking-[4px] text-[#FFF9EC] uppercase">
            MORE MOMENTS TO CELEBRATE
          </p>

          {/* Spacing: 35px */}
          <div className="h-4 sm:h-6 lg:h-[35px]" aria-hidden="true" />

          {/* Heading */}
          <h2 className="font-display font-normal text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.15] lg:leading-[70px] text-[#FFF9EC] max-w-[580px]">
            Begin the celebrations a little earlier.
          </h2>

          {/* Spacing: 26px */}
          <div className="h-4 sm:h-5 lg:h-[26px]" aria-hidden="true" />

          {/* Subhead */}
          <p className="font-body font-normal text-[18px] sm:text-[22px] lg:text-[28px] leading-[26px] sm:leading-[32px] lg:leading-[35px] text-[#FFF9EC] max-w-[650px]">
            Ask about a complimentary pre-wedding hall with your wedding booking at Umrao.
          </p>

          {/* Spacing: 22px */}
          <div className="h-3 sm:h-4 lg:h-[22px]" aria-hidden="true" />

          {/* Italic Note */}
          <p className="font-display italic font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[24px] sm:leading-[26px] text-[#FFF9EC]/90 max-w-[650px]">
            Offer eligibility, availability and inclusions to be confirmed by our team.
          </p>

          {/* Spacing: 45px */}
          <div className="h-6 sm:h-8 lg:h-[45px]" aria-hidden="true" />

          {/* Button: ENQUIRE ABOUT THE OFFER */}
          <Link
            href="#enquiry"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-[460px] h-[58px] sm:h-[65px] bg-[#CEA652] hover:bg-[#bd9543] active:bg-[#b08738] rounded-[7px] text-[#543522] transition-all shadow-md group"
          >
            <span className="font-body font-bold text-[18px] sm:text-[21px] lg:text-[23px] leading-[30px] tracking-[1.5px] sm:tracking-[2px] uppercase">
              ENQUIRE ABOUT THE OFFER
            </span>
            <ArrowRightIcon
              size={24}
              color="#543522"
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

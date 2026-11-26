"use client";

import Image from "next/image";
import {
  NeoclassicalIcon,
  HeightIcon,
  BedCategoryIcon,
  PinIcon,
} from "./ValenciaIcons";

export default function ValenciaWelcome() {
  return (
    <section className="relative w-full bg-[#FAF6EB] border-b border-black/[0.06] flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-[60px] px-4 sm:px-6 md:px-8 py-10 lg:py-14 xl:py-[54px] xl:px-[60px] box-border">
        {/* Left Column: Welcome Copy */}
        <div className="w-full lg:w-[50%] xl:w-[680px] flex flex-col items-start min-w-0">
          {/* Eyebrow */}
          <p className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[0.22em] text-[#BD9749] uppercase">
            WELCOME TO VALENCIA
          </p>

          {/* Heading lines */}
          <h2 className="font-display text-[34px] sm:text-[44px] md:text-[50px] xl:text-[56px] leading-[1.12] text-[#164C36] mt-3 sm:mt-4">
            <span className="block font-normal">A sense of grandeur.</span>
            <span className="block font-normal italic text-[#BD9749]">A feeling of home.</span>
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-3 mt-4 sm:mt-5 max-w-[650px]">
            <p className="font-body font-normal text-[15px] sm:text-[16.5px] leading-[24px] sm:leading-[26px] text-[#543E30]">
              Planned as a luxury boutique hotel in Patna, VALENCIA brings Italian-inspired neoclassical design together with warm, thoughtful hospitality.
            </p>
            <p className="font-body font-normal text-[15px] sm:text-[16.5px] leading-[24px] sm:leading-[26px] text-[#543E30]">
              Refined architectural details and generous spaces set the scene for restful stays, memorable dining and meaningful gatherings.
            </p>
          </div>

          {/* Gold Divider */}
          <div className="w-full h-[1px] bg-[#E0CA9E] my-6 sm:my-7" aria-hidden="true" />

          {/* 4 Features Grid (2 rows x 2 cols) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-6 gap-x-6 xl:gap-x-8">
            {/* Feature 1: Italian-inspired */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-[54px] sm:w-[60px] h-[50px] shrink-0 flex items-center justify-center">
                <NeoclassicalIcon className="w-[50px] sm:w-[56px] h-[46px]" color="#BD9749" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#164C36]">
                  Italian-inspired
                </h3>
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#543E30]">
                  Neoclassical architecture
                </p>
              </div>
            </div>

            {/* Feature 2: 17-ft clear height */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-[54px] sm:w-[60px] h-[54px] shrink-0 flex items-center justify-center">
                <HeightIcon className="w-[44px] sm:w-[48px] h-[52px]" color="#BD9749" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#164C36]">
                  17-ft clear height
                </h3>
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#543E30]">
                  A generous sense of space
                </p>
              </div>
            </div>

            {/* Feature 3: 4 room categories */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-[54px] sm:w-[60px] h-[50px] shrink-0 flex items-center justify-center">
                <BedCategoryIcon className="w-[50px] sm:w-[56px] h-[44px]" color="#BD9749" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#164C36]">
                  4 room categories
                </h3>
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#543E30]">
                  Deluxe, Twin, Suite &amp; Presidential Suite
                </p>
              </div>
            </div>

            {/* Feature 4: Patna, Bihar */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-[54px] sm:w-[60px] h-[54px] shrink-0 flex items-center justify-center">
                <PinIcon className="w-[46px] sm:w-[50px] h-[52px]" color="#BD9749" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#164C36]">
                  Patna, Bihar
                </h3>
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#543E30]">
                  Full address to be confirmed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Lobby Image */}
        <div className="relative w-full lg:w-[50%] xl:w-[556px] h-[360px] sm:h-[480px] md:h-[540px] lg:h-[580px] xl:h-[610px] rounded-[6px] overflow-hidden shadow-sm shrink-0 group">
          <Image
            src="/images/ValenciaPage/Welcome to Valencia/Welcome to Valencia.png"
            alt="Valencia grand sunlit lobby with neoclassical arches"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 556px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}

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
      <div className="w-full max-w-[1440px] xl:h-[729px] min-h-[729px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-[50px] px-4 sm:px-6 md:px-8 py-10 lg:py-12 xl:pt-[44px] xl:pr-[52px] xl:pb-[44px] xl:pl-[56px] box-border">
        {/* Left Column: Welcome Copy */}
        <div className="w-full lg:w-[50%] xl:w-[726px] flex flex-col items-start min-w-0">
          {/* Eyebrow */}
          <p className="font-body font-bold text-[15px] sm:text-[17px] xl:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#BD9749] uppercase">
            WELCOME TO VALENCIA
          </p>

          <div className="h-[14px] sm:h-[25px]" aria-hidden="true" />

          {/* Heading lines */}
          <h2 className="font-display font-bold text-[34px] sm:text-[48px] md:text-[56px] xl:text-[65px] leading-[1.1] sm:leading-[1.15] xl:leading-[79px] text-[#164C36]">
            A sense of grandeur.
          </h2>
          <h2 className="font-display italic font-bold text-[34px] sm:text-[48px] md:text-[56px] xl:text-[65px] leading-[1.1] sm:leading-[1.15] xl:leading-[79px] text-[#BD9749]">
            A feeling of home.
          </h2>

          <div className="h-[14px] sm:h-[25px]" aria-hidden="true" />

          {/* Paragraph 1 */}
          <p className="font-body font-normal text-[15px] sm:text-[18px] xl:text-[20px] leading-[24px] sm:leading-[28px] xl:leading-[24px] text-[#543E30] max-w-[726px]">
            Planned as a luxury boutique hotel in Patna, VALENCIA brings Italian-inspired neoclassical design together with warm, thoughtful hospitality.
          </p>

          <div className="h-[12px] sm:h-[22px]" aria-hidden="true" />

          {/* Paragraph 2 */}
          <p className="font-body font-normal text-[15px] sm:text-[18px] xl:text-[20px] leading-[24px] sm:leading-[28px] xl:leading-[24px] text-[#543E30] max-w-[726px]">
            Refined architectural details and generous spaces set the scene for restful stays, memorable dining and meaningful gatherings.
          </p>

          <div className="h-[20px] sm:h-[37px]" aria-hidden="true" />

          {/* Gold Divider */}
          <div className="w-full h-[1px] bg-[#BD9749]" aria-hidden="true" />

          <div className="h-[16px] sm:h-[24px]" aria-hidden="true" />

          {/* 4 Features Grid (2 rows x 2 cols) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-5 gap-x-4 xl:gap-x-[30px]">
            {/* Feature 1: Italian-inspired */}
            <div className="flex items-center gap-4 sm:gap-[20px] xl:gap-[24px] min-h-[75px] sm:min-h-[90px]">
              <div className="w-[52px] sm:w-[66px] h-[48px] sm:h-[59px] shrink-0 flex items-center justify-center">
                <NeoclassicalIcon className="w-[52px] sm:w-[66px] h-[48px] sm:h-[59px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[19px] sm:text-[23px] xl:text-[27px] leading-[1.2] xl:leading-[33px] text-[#164C36]">
                  Italian-inspired
                </h3>
                <p className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[22px] text-[#543E30]">
                  Neoclassical architecture
                </p>
              </div>
            </div>

            {/* Feature 2: 17-ft clear height */}
            <div className="flex items-center gap-4 sm:gap-[20px] xl:gap-[24px] min-h-[75px] sm:min-h-[90px]">
              <div className="w-[52px] sm:w-[66px] h-[64px] sm:h-[82px] shrink-0 flex items-center justify-center">
                <HeightIcon className="w-[52px] sm:w-[66px] h-[64px] sm:h-[82px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[19px] sm:text-[23px] xl:text-[27px] leading-[1.2] xl:leading-[33px] text-[#164C36]">
                  17-ft clear height
                </h3>
                <p className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[22px] text-[#543E30]">
                  A generous sense of space
                </p>
              </div>
            </div>

            {/* Feature 3: 4 room categories */}
            <div className="flex items-center gap-4 sm:gap-[20px] xl:gap-[24px] min-h-[75px] sm:min-h-[90px]">
              <div className="w-[52px] sm:w-[66px] h-[40px] sm:h-[48px] shrink-0 flex items-center justify-center">
                <BedCategoryIcon className="w-[52px] sm:w-[66px] h-[40px] sm:h-[48px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[19px] sm:text-[23px] xl:text-[27px] leading-[1.2] xl:leading-[33px] text-[#164C36]">
                  4 room categories
                </h3>
                <p className="font-body font-normal text-[13.5px] sm:text-[15.5px] xl:text-[18px] leading-[22px] text-[#543E30]">
                  Deluxe, Twin, Suite &amp; Presidential Suite
                </p>
              </div>
            </div>

            {/* Feature 4: Patna, Bihar */}
            <div className="flex items-center gap-4 sm:gap-[20px] xl:gap-[24px] min-h-[75px] sm:min-h-[90px]">
              <div className="w-[52px] sm:w-[66px] h-[64px] sm:h-[81px] shrink-0 flex items-center justify-center">
                <PinIcon className="w-[52px] sm:w-[66px] h-[64px] sm:h-[81px]" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-bold text-[19px] sm:text-[23px] xl:text-[27px] leading-[1.2] xl:leading-[33px] text-[#164C36]">
                  Patna, Bihar
                </h3>
                <p className="font-body font-normal text-[13.5px] sm:text-[15.5px] xl:text-[18px] leading-[22px] text-[#543E30]">
                  Full address to be confirmed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Lobby Image */}
        <div className="relative w-full lg:w-[50%] xl:w-[556px] h-[360px] sm:h-[480px] md:h-[540px] lg:h-[580px] xl:h-[641px] rounded-[6px] overflow-hidden shadow-sm shrink-0 group">
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

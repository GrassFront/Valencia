"use client";

import Image from "next/image";
import Link from "next/link";
import { ClocheIcon } from "./ValenciaIcons";

export default function ValenciaDining() {
  return (
    <section id="dining" className="relative w-full bg-[#FAF6EB] flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[60px] py-10 lg:py-14 xl:py-[54px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-[56px] box-border">
        {/* Left Column: Dining Photograph */}
        <div className="relative w-full lg:w-[50%] xl:w-[680px] h-[300px] sm:h-[400px] md:h-[480px] lg:h-[540px] xl:h-[610px] rounded-[6px] overflow-hidden shadow-sm shrink-0 group">
          <Image
            src="/images/ValenciaPage/Dining at Valencia/Dining at Valencia.png"
            alt="Dining at Valencia restaurant setting"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Right Column: Dining Content */}
        <div className="w-full lg:w-[50%] xl:w-[570px] flex flex-col items-start min-w-0">
          {/* Eyebrow */}
          <p className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[0.22em] text-[#BD9749] uppercase">
            DINING AT VALENCIA
          </p>

          {/* Headline */}
          <h2 className="font-display text-[34px] sm:text-[44px] md:text-[50px] xl:text-[56px] leading-[1.12] text-[#164C36] mt-3 sm:mt-4">
            <span className="block font-normal">A table worth</span>
            <span className="block font-normal italic text-[#BD9749]">lingering at.</span>
          </h2>

          {/* Description */}
          <p className="font-body font-normal text-[15px] sm:text-[16.5px] leading-[24px] sm:leading-[26px] text-[#543E30] mt-3 sm:mt-4 max-w-[550px]">
            From comforting Indian classics to contemporary continental flavours, enjoy thoughtfully prepared meals in an elegant, welcoming setting.
          </p>

          {/* Short Divider */}
          <div className="w-[110px] h-[1px] bg-[#E0CA9E] my-4 sm:my-5" aria-hidden="true" />

          {/* Under Chef Michael's Guidance */}
          <div className="flex items-center gap-4 sm:gap-5 py-1">
            <div className="w-[50px] sm:w-[56px] h-[40px] sm:h-[46px] shrink-0 relative flex items-center justify-center">
              <Image
                src="/images/ValenciaPage/chefIcon.png"
                alt="Chef"
                width={56}
                height={46}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-[18px] sm:text-[21px] leading-[1.25] text-[#164C36]">
                Under Chef Michael’s guidance
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#6E5A4A] mt-0.5">
                Seasonal ingredients, balanced flavours and thoughtful presentation.
              </p>
            </div>
          </div>

          {/* Full Width Divider */}
          <div className="w-full h-[1px] bg-[#E0CA9E] my-4 sm:my-5" aria-hidden="true" />

          {/* 2x2 Dining Details Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-4 gap-x-5">
            {/* Cuisine */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-[42px] h-[34px] shrink-0 flex items-center justify-center">
                <ClocheIcon className="w-[38px] h-[30px]" color="#BD9749" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[18.5px] leading-[1.25] text-[#164C36]">
                  Cuisine
                </span>
                <span className="font-body font-normal text-[13.5px] sm:text-[14px] leading-[19px] text-[#543E30]">
                  Indian &amp; Continental
                </span>
              </div>
            </div>

            {/* Dining hours */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-[42px] h-[36px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/clockIcon.png"
                  alt="Clock"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[18.5px] leading-[1.25] text-[#164C36]">
                  Dining hours
                </span>
                <span className="font-body font-normal text-[13.5px] sm:text-[14px] leading-[19px] text-[#543E30]">
                  7:00 AM – 11:00 PM
                </span>
              </div>
            </div>

            {/* Breakfast */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-[42px] h-[34px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/cupIcon.png"
                  alt="Breakfast cup"
                  width={36}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[18.5px] leading-[1.25] text-[#164C36]">
                  Breakfast
                </span>
                <span className="font-body font-normal text-[13.5px] sm:text-[14px] leading-[19px] text-[#543E30]">
                  7:00 AM – 10:30 AM
                </span>
              </div>
            </div>

            {/* Setting */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-[42px] h-[32px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/sittingIcon.png"
                  alt="Setting table"
                  width={38}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[18.5px] leading-[1.25] text-[#164C36]">
                  Setting
                </span>
                <span className="font-body font-normal text-[13.5px] sm:text-[14px] leading-[19px] text-[#543E30]">
                  Indoor dining
                </span>
              </div>
            </div>
          </div>

          {/* Dining Actions */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-7 mt-6 sm:mt-7">
            <Link
              href="/dining"
              className="h-[44px] px-7 bg-[#164C36] hover:bg-[#113d2b] transition-all duration-300 rounded-[3px] inline-flex items-center justify-center shadow-sm hover:shadow-md group shrink-0"
            >
              <span className="font-body font-bold text-[13px] sm:text-[13.5px] leading-[18px] tracking-[0.14em] text-white uppercase flex items-center gap-2">
                <span>EXPLORE DINING</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/contact"
              className="font-body font-normal text-[14.5px] sm:text-[15.5px] leading-[20px] text-[#543E30] hover:text-[#BD9749] transition-colors inline-flex items-center justify-center sm:justify-start gap-1.5 py-1"
            >
              <span>Dining enquiries</span>
              <span>→</span>
            </Link>
          </div>

          {/* Subtext */}
          <p className="font-body font-normal text-[12px] sm:text-[13px] leading-[17px] text-[#543E30]/75 mt-3 sm:mt-3.5">
            Sample dining details for design preview.
          </p>
        </div>
      </div>
    </section>
  );
}

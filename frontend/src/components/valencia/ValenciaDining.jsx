"use client";

import Image from "next/image";
import Link from "next/link";
import { ClocheIcon } from "./ValenciaIcons";

export default function ValenciaDining() {
  return (
    <section id="dining" className="relative w-full bg-[#FAF6EB] flex flex-col items-center">
      <div className="w-full max-w-[1440px] xl:h-[733px] min-h-[733px] px-4 sm:px-6 md:px-8 xl:pt-[44px] xl:pr-[30px] xl:pb-[44px] xl:pl-[30px] py-10 lg:py-12 xl:py-0 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-[54px] box-border">
        {/* Left Column: Dining Photograph */}
        <div className="relative w-full lg:w-[50%] xl:w-[743px] h-[280px] sm:h-[380px] md:h-[460px] lg:h-[540px] xl:h-[645px] rounded-[6px] overflow-hidden shadow-sm shrink-0 group">
          <Image
            src="/images/ValenciaPage/Dining at Valencia/Dining at Valencia.png"
            alt="Dining at Valencia restaurant setting"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 743px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Right Column: Dining Content */}
        <div className="w-full lg:w-[50%] xl:w-[562px] flex flex-col items-start min-w-0">
          {/* Eyebrow */}
          <p className="font-body font-bold text-[15px] sm:text-[17px] lg:text-[18px] xl:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#BD9749] uppercase">
            DINING AT VALENCIA
          </p>

          <div className="h-[6px] sm:h-[11px]" aria-hidden="true" />

          {/* Headline */}
          <div className="flex flex-col">
            <h2 className="font-display font-bold text-[32px] sm:text-[44px] md:text-[50px] xl:text-[60px] leading-[1.1] sm:leading-[1.15] xl:leading-[78px] text-[#164C36]">
              A table worth
            </h2>
            <h2 className="font-display italic font-bold text-[32px] sm:text-[44px] md:text-[50px] xl:text-[60px] leading-[1.1] sm:leading-[1.15] xl:leading-[78px] text-[#BD9749]">
              lingering at.
            </h2>
          </div>

          <div className="h-[6px] sm:h-[11px]" aria-hidden="true" />

          {/* Description */}
          <p className="font-body font-normal text-[15px] sm:text-[18px] xl:text-[20px] leading-[24px] sm:leading-[27px] xl:leading-[24px] text-[#543E30] max-w-[562px]">
            From comforting Indian classics to contemporary continental flavours, enjoy thoughtfully prepared meals in an elegant, welcoming setting.
          </p>

          <div className="h-[14px] sm:h-[22px]" aria-hidden="true" />

          {/* Short Divider */}
          <div className="w-[122px] h-[1px] bg-[#BD9749]" aria-hidden="true" />

          <div className="h-[10px] sm:h-[14px]" aria-hidden="true" />

          {/* Under Chef Michael's Guidance */}
          <div className="flex items-center gap-4 sm:gap-[24px] py-1 sm:py-2">
            <div className="w-[52px] sm:w-[66px] h-[40px] sm:h-[51px] shrink-0 relative flex items-center justify-center">
              <Image
                src="/images/ValenciaPage/chefIcon.png"
                alt="Chef"
                width={66}
                height={51}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display font-bold text-[19px] sm:text-[23px] xl:text-[27px] leading-[26px] sm:leading-[33px] text-[#164C36]">
                Under Chef Michael’s guidance
              </h3>
              <p className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[22px] text-[#543E30] mt-0.5">
                Seasonal ingredients, balanced flavours and thoughtful presentation.
              </p>
            </div>
          </div>

          <div className="h-[10px] sm:h-[14px]" aria-hidden="true" />

          {/* Full Width Divider */}
          <div className="w-full max-w-[562px] h-[1px] bg-[#BD9749]" aria-hidden="true" />

          <div className="h-[12px] sm:h-[18px]" aria-hidden="true" />

          {/* 2x2 Dining Details Grid */}
          <div className="w-full max-w-[562px] grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 sm:gap-x-5">
            {/* Cuisine */}
            <div className="flex items-center gap-3 sm:gap-[16px]">
              <div className="w-[38px] sm:w-[45px] h-[28px] sm:h-[33px] shrink-0 flex items-center justify-center">
                <ClocheIcon className="w-[36px] sm:w-[42px] h-[26px] sm:h-[31px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[19px] xl:text-[21px] leading-[24px] sm:leading-[26px] text-[#164C36]">
                  Cuisine
                </span>
                <span className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[22px] text-[#543E30]">
                  Indian &amp; Continental
                </span>
              </div>
            </div>

            {/* Dining hours */}
            <div className="flex items-center gap-3 sm:gap-[16px]">
              <div className="w-[38px] sm:w-[45px] h-[36px] sm:h-[42px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/clockIcon.png"
                  alt="Clock"
                  width={42}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[19px] xl:text-[21px] leading-[24px] sm:leading-[26px] text-[#164C36]">
                  Dining hours
                </span>
                <span className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[22px] text-[#543E30]">
                  7:00 AM – 11:00 PM
                </span>
              </div>
            </div>

            {/* Breakfast */}
            <div className="flex items-center gap-3 sm:gap-[16px]">
              <div className="w-[38px] sm:w-[45px] h-[36px] sm:h-[42px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/cupIcon.png"
                  alt="Breakfast cup"
                  width={42}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[19px] xl:text-[21px] leading-[24px] sm:leading-[26px] text-[#164C36]">
                  Breakfast
                </span>
                <span className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[22px] text-[#543E30]">
                  7:00 AM – 10:30 AM
                </span>
              </div>
            </div>

            {/* Setting */}
            <div className="flex items-center gap-3 sm:gap-[16px]">
              <div className="w-[38px] sm:w-[45px] h-[24px] sm:h-[28px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/sittingIcon.png"
                  alt="Setting table"
                  width={45}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-[17px] sm:text-[19px] xl:text-[21px] leading-[24px] sm:leading-[26px] text-[#164C36]">
                  Setting
                </span>
                <span className="font-body font-normal text-[14px] sm:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[22px] text-[#543E30]">
                  Indoor dining
                </span>
              </div>
            </div>
          </div>

          <div className="h-[16px] sm:h-[21px]" aria-hidden="true" />

          {/* Dining Actions */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-[32px]">
            <a
              href="#booking"
              className="w-full sm:w-[260px] xl:w-[290px] h-[48px] bg-[#164C36] hover:bg-[#113d2b] transition-all duration-300 rounded-[2px] flex items-center justify-center shadow-sm hover:shadow-md group"
            >
              <span className="font-body font-bold text-[15px] sm:text-[17px] xl:text-[19px] leading-[23px] tracking-[2px] text-white uppercase flex items-center gap-2.5">
                <span>EXPLORE DINING</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>

            <a
              href="#contact"
              className="font-body font-normal text-[15px] sm:text-[18px] xl:text-[19px] leading-[23px] text-[#543E30] hover:text-[#BD9749] transition-colors flex items-center justify-center sm:justify-start gap-1.5 py-1"
            >
              <span>Dining enquiries</span>
              <span>→</span>
            </a>
          </div>

          <div className="h-[9px]" aria-hidden="true" />

          {/* Subtext */}
          <p className="font-body font-normal text-[12px] sm:text-[14px] leading-[17px] text-[#543E30]/80">
            Sample dining details for design preview.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./UmraoIcons";

export default function UmraoCelebration() {
  return (
    <section
      aria-label="Stay Through the Celebration"
      className="relative w-full bg-[#FAF6EC] border-b border-black/6 py-8 sm:py-10 lg:py-[32px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[37px] flex flex-col items-center">
        {/* Top Lotus Ornament with gold side lines matching Figma (width: 372px) */}
        <div
          className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-[32px] w-full max-w-[372px]"
          aria-hidden="true"
        >
          <div className="flex-1 h-[1px] bg-[#C8A153] max-w-[127px]" />
          <div className="relative w-[48px] h-[33px] shrink-0">
            <Image
              src="/images/Umrao/lotus.png"
              alt="Umrao Lotus ornament"
              width={48}
              height={33}
              className="object-contain"
            />
          </div>
          <div className="flex-1 h-[1px] bg-[#C8A153] max-w-[127px]" />
        </div>

        {/* Spacing: 12px */}
        <div className="h-2.5 sm:h-3 lg:h-[12px]" aria-hidden="true" />

        {/* Eyebrow: STAY THROUGH THE CELEBRATION */}
        <p className="font-body font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[29px] tracking-[3px] sm:tracking-[4px] text-[#164C36] uppercase text-center">
          STAY THROUGH THE CELEBRATION
        </p>

        {/* Spacing: 14px */}
        <div className="h-2.5 sm:h-3 lg:h-[14px]" aria-hidden="true" />

        {/* Heading: Keep your loved ones close. */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.2] lg:leading-[68px] text-[#543522] text-center max-w-[676px]">
          Keep your loved ones close.
        </h2>

        {/* Spacing: 11px */}
        <div className="h-2 sm:h-2.5 lg:h-[11px]" aria-hidden="true" />

        {/* Subhead */}
        <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[33px] text-[#543522] text-center max-w-[1034px]">
          Nine budget rooms, including a bridal room, offer a convenient place to rest around your event.
        </p>

        {/* Spacing: 36px */}
        <div className="h-6 sm:h-8 lg:h-[36px]" aria-hidden="true" />

        {/* Guest Room Photographs Row (gap: 16px, width: 1366px on desktop) */}
        <div className="w-full max-w-[1366px] flex flex-col lg:flex-row items-center gap-4 lg:gap-[16px]">
          {/* Photo 1: Guest accommodation (width: 872px, height: 453px desktop) */}
          <div className="relative w-full lg:flex-[872] lg:max-w-[872px] min-w-0 h-[300px] sm:h-[400px] lg:h-[453px] overflow-hidden group shadow-xs">
            <Image
              src="/images/Umrao/celebration/guest accomodation.png"
              alt="Comfortable guest accommodation bedroom with king bed, traditional arched window, and warm wooden accents"
              fill
              sizes="(max-width: 1024px) 100vw, 872px"
              className="object-fill umrao-gallery-img"
            />

            {/* Bottom-left caption badge flush with bottom edge: width 275px, height 48px, bg #164C36, pl 18px */}
            <div className="absolute bottom-0 left-0 z-10 w-[240px] sm:w-[275px] h-[44px] sm:h-[48px] bg-[#164C36] rounded-tr-[3px] flex items-center pl-4 sm:pl-[18px] shadow-sm">
              <span className="font-body font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] text-[#FFF9EC]">
                Guest accommodation
              </span>
            </div>
          </div>

          {/* Photo 2: Bridal preparation (width: 478px, height: 453px desktop) */}
          <div className="relative w-full lg:flex-[478] lg:max-w-[478px] min-w-0 h-[300px] sm:h-[400px] lg:h-[453px] overflow-hidden group shadow-xs">
            <Image
              src="/images/Umrao/celebration/bridal room.png"
              alt="Bridal preparation suite with arched ornate vanity mirror, makeup dresser, and designer red bridal lehenga"
              fill
              sizes="(max-width: 1024px) 100vw, 478px"
              className="object-fill umrao-gallery-img"
            />

            {/* Bottom-left caption badge flush with bottom edge: width 232px, height 48px, bg #164C36, pl 18px */}
            <div className="absolute bottom-0 left-0 z-10 w-[210px] sm:w-[232px] h-[44px] sm:h-[48px] bg-[#164C36] rounded-tr-[3px] flex items-center pl-4 sm:pl-[18px] shadow-sm">
              <span className="font-body font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] text-[#FFF9EC]">
                Bridal preparation
              </span>
            </div>
          </div>
        </div>

        {/* Spacing: 37px */}
        <div className="h-6 sm:h-8 lg:h-[37px]" aria-hidden="true" />

        {/* Room Summary Bar (width: 1366px, height: 69px, background: #F1E7D5, border-radius: 9px) */}
        <div className="w-full max-w-[1366px] bg-[#F1E7D5] rounded-[9px] py-4 sm:py-5 lg:py-0 lg:h-[69px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 shadow-xs">
          {/* 9 rooms in total (width: 455px, height: 60px) */}
          <div className="w-full md:w-[455px] h-[40px] md:h-[60px] flex items-center justify-center text-center">
            <span className="font-body font-normal text-[19px] sm:text-[22px] lg:text-[26px] leading-[33px] text-[#543522]">
              9 rooms in total
            </span>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block w-[1px] h-[40px] bg-[#C8A153]/50 shrink-0" aria-hidden="true" />
          <div className="block md:hidden w-3/4 h-[1px] bg-[#C8A153]/30 my-2" aria-hidden="true" />

          {/* Bridal room included (width: 455px, height: 60px) */}
          <div className="w-full md:w-[455px] h-[40px] md:h-[60px] flex items-center justify-center text-center">
            <span className="font-body font-normal text-[19px] sm:text-[22px] lg:text-[26px] leading-[33px] text-[#543522]">
              Bridal room included
            </span>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block w-[1px] h-[40px] bg-[#C8A153]/50 shrink-0" aria-hidden="true" />
          <div className="block md:hidden w-3/4 h-[1px] bg-[#C8A153]/30 my-2" aria-hidden="true" />

          {/* Availability on enquiry (width: 455px, height: 60px) */}
          <div className="w-full md:w-[455px] h-[40px] md:h-[60px] flex items-center justify-center text-center">
            <span className="font-body font-normal text-[19px] sm:text-[22px] lg:text-[26px] leading-[33px] text-[#543522]">
              Availability on enquiry
            </span>
          </div>
        </div>

        {/* Spacing: 17px */}
        <div className="h-3 sm:h-4 lg:h-[17px]" aria-hidden="true" />

        {/* Italic Note (width: 669px) */}
        <p className="font-display italic font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] text-[#543522] text-center max-w-[669px]">
          Room arrangements and inclusions are confirmed with your event enquiry.
        </p>

        {/* Spacing: 30px */}
        <div className="h-5 sm:h-6 lg:h-[30px]" aria-hidden="true" />

        {/* Button: ENQUIRE ABOUT GUEST ROOMS → */}
        <Link
          href="#enquiry"
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-[460px] min-h-[48px] sm:min-h-[56px] px-4 py-2.5 bg-[#164C36] hover:bg-[#103727] active:bg-[#0c2b1e] rounded-[7px] text-[#FFF9EC] transition-all shadow-md group"
        >
          <span className="font-body font-bold text-[12.5px] sm:text-[16px] lg:text-[18px] leading-tight tracking-[1px] sm:tracking-[1.5px] uppercase whitespace-nowrap">
            ENQUIRE ABOUT GUEST ROOMS
          </span>
          <ArrowRightIcon
            size={18}
            color="#FFF9EC"
            className="shrink-0 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDownIcon } from "./JiaIcons";

export default function JiaWelcome() {
  return (
    <section
      aria-label="Welcome to Hotel Jia"
      className="relative w-full bg-[#FAF6EC] pt-10 sm:pt-12 lg:pt-[54px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Top Part: Introduction Copy + Lobby Photograph */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-5 sm:px-8 lg:pl-[38px] lg:pr-6 gap-8 lg:gap-[27px] pb-12 sm:pb-14 lg:pb-[50px]">
          {/* Left Column: Copy (width: 615px desktop) */}
          <div className="w-full lg:w-[615px] flex flex-col items-start shrink-0">
            {/* Eyebrow */}
            <p className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[21px] leading-[26px] tracking-[3px] sm:tracking-[4px] text-[#BE9546] uppercase">
              WELCOME TO HOTEL JIA
            </p>

            {/* Spacing: 40px desktop */}
            <div className="h-5 sm:h-7 lg:h-[40px]" aria-hidden="true" />

            {/* Headings */}
            <h2 className="font-display font-bold text-[#194E35]">
              <span className="block text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.18] lg:leading-[67px]">
                A comfortable base.
              </span>
              <span className="block text-[34px] sm:text-[44px] lg:text-[51px] leading-[1.18] lg:leading-[67px]">
                A convenient city address.
              </span>
            </h2>

            {/* Spacing: 30px desktop */}
            <div className="h-4 sm:h-6 lg:h-[30px]" aria-hidden="true" />

            {/* Paragraph 1 */}
            <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[30px] lg:leading-[34px] text-[#4F3523] max-w-[612px]">
              With 36 rooms across four categories, Hotel Jia International offers a welcoming budget stay for business and leisure travellers in Patna.
            </p>

            {/* Spacing: 20px desktop */}
            <div className="h-3 sm:h-4 lg:h-[20px]" aria-hidden="true" />

            {/* Paragraph 2 */}
            <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[30px] lg:leading-[34px] text-[#4F3523] max-w-[612px]">
              Find us on Fraser Road, opposite Buddha Smriti Park—a practical starting point for your time in the city.
            </p>

            {/* Spacing: 40px desktop */}
            <div className="h-5 sm:h-7 lg:h-[40px]" aria-hidden="true" />

            {/* Explore our rooms link */}
            <div className="flex flex-col items-start group">
              <Link
                href="#rooms"
                className="inline-flex items-center gap-2.5 text-[#194E35] hover:text-[#103727] transition-colors"
              >
                <span className="font-body font-bold text-[18px] sm:text-[20px] lg:text-[22px] leading-[28px] tracking-[2px] sm:tracking-[3px] uppercase">
                  EXPLORE OUR ROOMS
                </span>
                <ArrowDownIcon
                  size={22}
                  color="#194E35"
                  className="group-hover:translate-y-1 transition-transform"
                />
              </Link>
              {/* Green divider line: 327px wide, 2px height */}
              <div
                className="w-[260px] sm:w-[327px] h-[2px] bg-[#194E35] mt-1"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Lobby Photograph (width: 730px, height: 562px desktop) */}
          <div className="relative w-full lg:w-[730px] h-[340px] sm:h-[460px] lg:h-[562px] overflow-hidden rounded-[8px] sm:rounded-[12px] shadow-sm shrink-0">
            <Image
              src="/images/Jia Hotel/jia_lobby.png"
              alt="Hotel Jia International stylish modern reception lobby with warm wood panels and welcoming lounge seating"
              fill
              sizes="(max-width: 1024px) 100vw, 730px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Part: At A Glance Stats Bar (height: 186px desktop, background: #F0E7D6) */}
        <div className="w-full bg-[#F0E7D6] py-6 sm:py-8 lg:py-0 lg:h-[186px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-6">
          {/* Stat 1: 36 Guest rooms (width: 448px desktop) */}
          <div className="w-full md:w-[448px] flex flex-col items-center justify-center text-center py-4 md:py-0">
            <span className="font-display font-bold text-[44px] sm:text-[52px] lg:text-[60px] leading-[1] text-[#194E35]">
              36
            </span>
            <div className="h-1 lg:h-[5px]" aria-hidden="true" />
            <span className="font-body font-normal text-[18px] sm:text-[21px] lg:text-[24px] leading-[36px] text-[#4F3523]">
              Guest rooms
            </span>
          </div>

          {/* Divider 1 */}
          <div
            className="hidden md:block w-[1px] h-[118px] bg-[#D1B474] shrink-0"
            aria-hidden="true"
          />
          <div
            className="block md:hidden w-3/4 h-[1px] bg-[#D1B474]/50 my-2"
            aria-hidden="true"
          />

          {/* Stat 2: 4 Room categories (width: 420px desktop) */}
          <div className="w-full md:w-[420px] flex flex-col items-center justify-center text-center py-4 md:py-0">
            <span className="font-display font-bold text-[44px] sm:text-[52px] lg:text-[60px] leading-[1] text-[#194E35]">
              4
            </span>
            <div className="h-1 lg:h-[5px]" aria-hidden="true" />
            <span className="font-body font-normal text-[18px] sm:text-[21px] lg:text-[24px] leading-[36px] text-[#4F3523]">
              Room categories
            </span>
          </div>

          {/* Divider 2 */}
          <div
            className="hidden md:block w-[1px] h-[118px] bg-[#D1B474] shrink-0"
            aria-hidden="true"
          />
          <div
            className="block md:hidden w-3/4 h-[1px] bg-[#D1B474]/50 my-2"
            aria-hidden="true"
          />

          {/* Stat 3: Fraser Road / Opposite Buddha Smriti Park (width: 570px desktop) */}
          <div className="w-full md:w-[570px] flex flex-col items-center justify-center text-center py-4 md:py-0">
            <span className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[1] text-[#194E35]">
              Fraser Road
            </span>
            <div className="h-1 lg:h-[5px]" aria-hidden="true" />
            <span className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[24px] leading-[36px] text-[#4F3523]">
              Opposite Buddha Smriti Park
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

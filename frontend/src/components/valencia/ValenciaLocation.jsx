"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ValenciaLocation() {
  return (
    <section id="location" className="relative w-full bg-[#FAF6EB] flex flex-col items-center">
      <div className="w-full max-w-[1440px] xl:h-[934px] min-h-[934px] px-4 sm:px-6 md:px-8 pt-12 pb-12 xl:pt-[44px] xl:px-[48px] xl:pb-[44px] flex flex-col items-center text-center justify-start gap-0 box-border">
        {/* Section Label with decorative horizontal rules */}
        <div className="flex items-center justify-center gap-4 sm:gap-[26px]">
          <span className="w-[50px] sm:w-[102px] h-[1px] bg-[#BD9749]" aria-hidden="true" />
          <h2 className="font-display font-bold text-[18px] sm:text-[22px] lg:text-[26px] leading-[33px] tracking-[4px] sm:tracking-[5px] text-[#543E30] uppercase">
            LOCATION &amp; DIRECTIONS
          </h2>
          <span className="w-[50px] sm:w-[102px] h-[1px] bg-[#BD9749]" aria-hidden="true" />
        </div>

        {/* Spacing 21px */}
        <div className="h-[14px] sm:h-[21px]" aria-hidden="true" />

        {/* Heading */}
        <h3 className="font-display font-bold text-[34px] sm:text-[46px] lg:text-[58px] leading-[1.1] lg:leading-[58px] text-[#164C36]">
          Your journey to VALENCIA.
        </h3>

        {/* Spacing 12px */}
        <div className="h-[8px] sm:h-[12px]" aria-hidden="true" />

        {/* Subtitle */}
        <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-[28px] sm:leading-[35px] text-[#543E30]">
          Plan your arrival in Patna with the details you need for a comfortable stay.
        </p>

        {/* Spacing 49px */}
        <div className="h-[24px] sm:h-[49px]" aria-hidden="true" />

        {/* Location Content Row */}
        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-10 xl:gap-[48px] text-left">
          {/* Left Column: Arrival Guidance */}
          <div className="w-full lg:w-[42%] xl:w-[440px] flex flex-col justify-between shrink-0">
            <div className="flex flex-col items-start">
              {/* Hotel Titles */}
              <h4 className="font-display font-bold text-[40px] sm:text-[48px] lg:text-[54px] leading-[1.05] text-[#164C36]">
                VALENCIA
              </h4>
              <p className="font-display italic text-[22px] sm:text-[26px] lg:text-[28px] leading-[36px] text-[#543E30] mt-1">
                A Luxury Boutique Hotel
              </p>

              <div className="h-[18px] sm:h-[24px]" aria-hidden="true" />

              {/* Property Address Item */}
              <div className="w-full flex items-center gap-4 sm:gap-[20px]">
                <div className="w-[36px] h-[36px] shrink-0 relative flex items-center justify-center">
                  <Image
                    src="/images/ValenciaPage/MapIcon.png"
                    alt="Location Pin"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[20px] sm:text-[23px] lg:text-[25px] leading-[30px] text-[#543E30]">
                    Patna, Bihar, India
                  </span>
                  <span className="font-body font-normal text-[14px] sm:text-[16px] leading-[22px] text-[#6E5A4A]">
                    Full address to be confirmed.
                  </span>
                </div>
              </div>

              <div className="h-[16px] sm:h-[22px]" aria-hidden="true" />

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#BD9749]" aria-hidden="true" />

              <div className="h-[18px] sm:h-[24px]" aria-hidden="true" />

              {/* Arriving by Air */}
              <div className="w-full flex items-center gap-4 sm:gap-[18px]">
                <div className="w-[52px] sm:w-[58px] h-[52px] sm:h-[58px] shrink-0 relative flex items-center justify-center">
                  <Image
                    src="/images/ValenciaPage/PlaneIcon.png"
                    alt="Arriving by air"
                    width={58}
                    height={58}
                    className="object-contain"
                  />
                </div>
                <div className="w-[1px] h-[52px] sm:h-[58px] bg-[#BD9749] shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[20px] sm:text-[22px] leading-[28px] text-[#543E30]">
                    Arriving by air
                  </span>
                  <span className="font-body font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#6E5A4A]">
                    Contact our team for guidance from Patna Airport.
                  </span>
                </div>
              </div>

              <div className="h-[16px] sm:h-[22px]" aria-hidden="true" />

              {/* Arriving by Rail */}
              <div className="w-full flex items-center gap-4 sm:gap-[18px]">
                <div className="w-[52px] sm:w-[58px] h-[52px] sm:h-[58px] shrink-0 relative flex items-center justify-center">
                  <Image
                    src="/images/ValenciaPage/TrainIcon.png"
                    alt="Arriving by rail"
                    width={58}
                    height={58}
                    className="object-contain"
                  />
                </div>
                <div className="w-[1px] h-[52px] sm:h-[58px] bg-[#BD9749] shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-[20px] sm:text-[22px] leading-[28px] text-[#543E30]">
                    Arriving by rail
                  </span>
                  <span className="font-body font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#6E5A4A]">
                    Ask our team for the best route from your arrival station.
                  </span>
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS Button */}
            <div className="pt-6 sm:pt-8 mt-auto">
              <Link
                href="/contact"
                className="w-full h-[52px] sm:h-[56px] bg-[#164C36] hover:bg-[#113d2b] transition-all duration-300 rounded-[6px] flex items-center justify-center shadow-sm hover:shadow-md group"
              >
                <span className="font-body font-semibold text-[15px] sm:text-[16px] tracking-[0.1em] text-[#FAF6EB] flex items-center gap-3 uppercase">
                  <span>GET DIRECTIONS</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Illustrative Location Map Preview */}
          <div className="w-full lg:w-[56%] xl:flex-1 h-[360px] sm:h-[460px] md:h-[500px] lg:h-[520px] xl:h-[540px] rounded-[20px] border border-[#D7C294] bg-[#EFE4D0] relative overflow-hidden flex flex-col items-center justify-between p-5 sm:p-6 shadow-sm shrink-0">
            {/* SVG Roads & Parks Background */}
            <svg
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85"
              viewBox="0 0 834 632"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Green Park Areas */}
              <path
                d="M570 0C600 20 640 40 780 10V110C730 115 670 90 620 95C570 100 550 50 570 0Z"
                fill="#BBC78F"
                opacity="0.8"
              />
              <path
                d="M340 10C360 40 390 60 490 50C480 20 440 10 340 10Z"
                fill="#BBC78F"
                opacity="0.75"
              />
              <path
                d="M70 160C120 180 150 240 180 280C140 350 80 320 60 260C50 200 40 170 70 160Z"
                fill="#BBC78F"
                opacity="0.8"
              />
              <path
                d="M560 310C610 300 660 320 680 370C650 420 590 410 570 380C550 350 530 320 560 310Z"
                fill="#BBC78F"
                opacity="0.8"
              />
              <path
                d="M0 430C40 420 90 440 130 480C100 530 50 520 0 530V430Z"
                fill="#BBC78F"
                opacity="0.75"
              />
              <path
                d="M720 480C750 470 790 490 834 520V580C800 590 760 560 720 540C680 520 690 490 720 480Z"
                fill="#BBC78F"
                opacity="0.8"
              />

              {/* Major Roads Grid (Cream / White strokes) */}
              <path
                d="M-20 120 C180 180 380 240 850 360"
                stroke="#FAF6EB"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M160 -20 C240 160 360 320 520 650"
                stroke="#FAF6EB"
                strokeWidth="11"
                strokeLinecap="round"
              />
              <path
                d="M-20 380 C260 340 540 280 850 160"
                stroke="#FAF6EB"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <path
                d="M620 -20 C640 180 660 380 720 650"
                stroke="#FAF6EB"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M280 180 C360 210 500 240 640 210"
                stroke="#FAF6EB"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M320 420 C420 410 540 430 700 450"
                stroke="#FAF6EB"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M80 500 C280 470 480 490 620 540"
                stroke="#FAF6EB"
                strokeWidth="7"
              />
            </svg>

            {/* Pill: LOCATION PREVIEW at top right */}
            <div className="relative z-10 self-end px-5 py-1.5 rounded-full bg-[#FAF6EB] border border-[#BD9749] shadow-sm">
              <span className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[2px] text-[#543E30] uppercase">
                LOCATION PREVIEW
              </span>
            </div>

            {/* Center Map Marker */}
            <div className="relative z-10 flex flex-col items-center my-auto -mt-2">
              {/* Hotel Marker Badge */}
              <div className="px-6 sm:px-8 py-2.5 rounded-[14px] bg-[#FAF6EB] border border-[#C8B386] shadow-md mb-2">
                <span className="font-display font-bold text-[24px] sm:text-[28px] leading-[36px] text-[#164C36] whitespace-nowrap">
                  VALENCIA · Patna
                </span>
              </div>

              {/* Pin Icon (clean static with drop-shadow) */}
              <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                <svg
                  className="w-10 sm:w-12 h-10 sm:h-12 drop-shadow-md"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C15.16 4 8 11.16 8 20C8 30.5 22.2 43.1 22.8 43.6C23.5 44.1 24.5 44.1 25.2 43.6C25.8 43.1 40 30.5 40 20C40 11.16 32.84 4 24 4Z"
                    fill="#164C36"
                  />
                  <circle cx="24" cy="20" r="7" fill="#FAF6EB" />
                </svg>
              </div>
            </div>

            {/* Bottom Notice: Exact location coming soon */}
            <div className="relative z-10 w-full max-w-[560px] rounded-[14px] bg-[#FAF6EB] border border-[#D7C294] p-3.5 sm:px-6 flex items-center gap-4 sm:gap-[18px] shadow-sm self-start ml-0 sm:ml-2">
              <div className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] shrink-0 relative flex items-center justify-center">
                <Image
                  src="/images/ValenciaPage/MapIcon.png"
                  alt="Location"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              <div className="w-[1px] h-[40px] sm:h-[46px] bg-[#BD9749] shrink-0" aria-hidden="true" />

              <div className="flex flex-col">
                <span className="font-display font-bold text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30px] text-[#543E30]">
                  Exact location coming soon
                </span>
                <span className="font-body font-normal text-[13px] sm:text-[15px] leading-[18px] sm:leading-[22px] text-[#6E5A4A]">
                  Map and directions will be updated once confirmed.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

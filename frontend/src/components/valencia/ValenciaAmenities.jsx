"use client";

import Image from "next/image";
import { ClocheIcon, BellIcon } from "./ValenciaIcons";

export default function ValenciaAmenities() {
  return (
    <section className="relative w-full bg-[#E8DAC2] flex flex-col items-center">
      <div className="w-full max-w-[1440px] xl:h-[663px] min-h-[663px] px-4 sm:px-6 md:px-8 xl:px-0 py-12 xl:py-[48px] flex flex-col items-center text-center justify-start gap-0 box-border">
        {/* Eyebrow */}
        <p className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#164C36] uppercase">
          AMENITIES &amp; SERVICES
        </p>

        {/* Spacing 24px */}
        <div className="h-[16px] sm:h-[24px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.15] lg:leading-[70px] text-[#164C36]">
          Thoughtful comforts for your stay.
        </h2>

        {/* Spacing 12px */}
        <div className="h-[8px] sm:h-[12px]" aria-hidden="true" />

        {/* Subtitle */}
        <p className="font-body font-normal text-[20px] sm:text-[24px] lg:text-[28px] leading-[28px] sm:leading-[34px] text-[#543E30]">
          The little details that make time away feel effortless.
        </p>

        {/* Spacing 30px */}
        <div className="h-[18px] sm:h-[30px]" aria-hidden="true" />

        {/* Proposed Amenities Tagline */}
        <p className="font-body font-normal text-[13px] sm:text-[15px] lg:text-[16px] leading-[20px] tracking-[3px] sm:tracking-[4px] text-[#543E30] uppercase">
          PROPOSED AMENITIES · SUBJECT TO CONFIRMATION
        </p>

        {/* Spacing 44px */}
        <div className="h-[24px] sm:h-[44px]" aria-hidden="true" />

        {/* Amenities Grid (1338px on desktop, 2 rows x 3 cols) */}
        <div className="w-full max-w-[1338px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Row 1 / Col 1: Wi-Fi */}
          <div className="flex items-center gap-5 p-5 lg:py-6 lg:pl-4 lg:pr-6 border-b border-[#CCBA9E] lg:border-r">
            <div className="w-[80px] sm:w-[90px] h-[75px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon1.png"
                alt="Wi-Fi"
                width={80}
                height={66}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-body font-bold text-[22px] sm:text-[24px] lg:text-[26px] leading-[32px] text-[#164C36]">
                Wi-Fi
              </h3>
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] text-[#543E30] mt-0.5">
                Stay connected during your visit.
              </p>
            </div>
          </div>

          {/* Row 1 / Col 2: Air Conditioning */}
          <div className="flex items-center gap-5 p-5 lg:py-6 lg:pl-4 lg:pr-6 border-b border-[#CCBA9E] lg:border-r">
            <div className="w-[80px] sm:w-[90px] h-[85px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon3.png"
                alt="Air Conditioning"
                width={78}
                height={82}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-body font-bold text-[22px] sm:text-[24px] lg:text-[26px] leading-[32px] text-[#164C36]">
                Air Conditioning
              </h3>
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] text-[#543E30] mt-0.5">
                Comfort in your personal space.
              </p>
            </div>
          </div>

          {/* Row 1 / Col 3: In-room Dining */}
          <div className="flex items-center gap-5 p-5 lg:py-6 lg:pl-4 lg:pr-6 border-b border-[#CCBA9E]">
            <div className="w-[80px] sm:w-[90px] h-[75px] shrink-0 flex items-center justify-center">
              <ClocheIcon className="w-[78px] sm:w-[86px] h-[64px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-body font-bold text-[22px] sm:text-[24px] lg:text-[26px] leading-[32px] text-[#164C36]">
                In-room Dining
              </h3>
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] text-[#543E30] mt-0.5">
                Enjoy a meal in the comfort of your room.
              </p>
            </div>
          </div>

          {/* Row 2 / Col 1: Housekeeping */}
          <div className="flex items-center gap-5 p-5 lg:py-6 lg:pl-4 lg:pr-6 border-b md:border-b-0 border-[#CCBA9E] lg:border-r">
            <div className="w-[80px] sm:w-[90px] h-[75px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon4.png"
                alt="Housekeeping"
                width={76}
                height={62}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-body font-bold text-[22px] sm:text-[24px] lg:text-[26px] leading-[32px] text-[#164C36]">
                Housekeeping
              </h3>
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] text-[#543E30] mt-0.5">
                Thoughtful care for your room.
              </p>
            </div>
          </div>

          {/* Row 2 / Col 2: Parking */}
          <div className="flex items-center gap-5 p-5 lg:py-6 lg:pl-4 lg:pr-6 border-b md:border-b-0 border-[#CCBA9E] lg:border-r">
            <div className="w-[80px] sm:w-[90px] h-[75px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon2.png"
                alt="Parking"
                width={76}
                height={65}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-body font-bold text-[22px] sm:text-[24px] lg:text-[26px] leading-[32px] text-[#164C36]">
                Parking
              </h3>
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] text-[#543E30] mt-0.5">
                A convenient arrival by car.
              </p>
            </div>
          </div>

          {/* Row 2 / Col 3: Guest Assistance */}
          <div className="flex items-center gap-5 p-5 lg:py-6 lg:pl-4 lg:pr-6">
            <div className="w-[80px] sm:w-[90px] h-[75px] shrink-0 flex items-center justify-center">
              <BellIcon className="w-[78px] sm:w-[86px] h-[67px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-body font-bold text-[22px] sm:text-[24px] lg:text-[26px] leading-[32px] text-[#164C36]">
                Guest Assistance
              </h3>
              <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] text-[#543E30] mt-0.5">
                Help with your stay and local enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

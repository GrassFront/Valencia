"use client";

import Image from "next/image";
import { ClocheIcon, BellIcon } from "./ValenciaIcons";

export default function ValenciaAmenities() {
  return (
    <section className="relative w-full bg-[#E8DAC2] flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[60px] py-12 sm:py-16 md:py-20 flex flex-col items-center text-center justify-start box-border">
        {/* Eyebrow */}
        <p className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[0.24em] text-[#1B4D32] uppercase">
          AMENITIES &amp; SERVICES
        </p>

        {/* Heading */}
        <h2 className="font-display font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] leading-[1.15] text-[#1B4D32] mt-3 sm:mt-4">
          Thoughtful comforts for your stay.
        </h2>

        {/* Subtitle */}
        <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[28px] text-[#554031] mt-2 sm:mt-3">
          The little details that make time away feel effortless.
        </p>

        {/* Proposed Amenities Tagline */}
        <p className="font-body font-medium text-[11px] sm:text-[12px] leading-[18px] tracking-[0.22em] text-[#6E5A4A] uppercase mt-5 sm:mt-6">
          PROPOSED AMENITIES · SUBJECT TO CONFIRMATION
        </p>

        {/* Amenities Grid (1240px on desktop, 2 rows x 3 cols with dividers) */}
        <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left mt-8 sm:mt-10 lg:mt-12">
          {/* Row 1 / Col 1: Wi-Fi */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6 px-3 sm:px-5 lg:px-6 border-b border-[#CCBA9E] lg:border-r">
            <div className="w-[48px] sm:w-[54px] h-[48px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon1.png"
                alt="Wi-Fi"
                width={50}
                height={42}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#1B4D32]">
                Wi-Fi
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#554031] mt-0.5">
                Stay connected during your visit.
              </p>
            </div>
          </div>

          {/* Row 1 / Col 2: Air Conditioning */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6 px-3 sm:px-5 lg:px-6 border-b border-[#CCBA9E] lg:border-r">
            <div className="w-[48px] sm:w-[54px] h-[48px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon3.png"
                alt="Air Conditioning"
                width={48}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#1B4D32]">
                Air Conditioning
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#554031] mt-0.5">
                Comfort in your personal space.
              </p>
            </div>
          </div>

          {/* Row 1 / Col 3: In-room Dining */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6 px-3 sm:px-5 lg:px-6 border-b border-[#CCBA9E]">
            <div className="w-[48px] sm:w-[54px] h-[48px] shrink-0 flex items-center justify-center">
              <ClocheIcon className="w-[48px] sm:w-[52px] h-[38px]" color="#BD9749" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#1B4D32]">
                In-room Dining
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#554031] mt-0.5">
                Enjoy a meal in the comfort of your room.
              </p>
            </div>
          </div>

          {/* Row 2 / Col 1: Housekeeping */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6 px-3 sm:px-5 lg:px-6 border-b md:border-b-0 border-[#CCBA9E] lg:border-r">
            <div className="w-[48px] sm:w-[54px] h-[48px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon4.png"
                alt="Housekeeping"
                width={48}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#1B4D32]">
                Housekeeping
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#554031] mt-0.5">
                Thoughtful care for your room.
              </p>
            </div>
          </div>

          {/* Row 2 / Col 2: Parking */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6 px-3 sm:px-5 lg:px-6 border-b md:border-b-0 border-[#CCBA9E] lg:border-r">
            <div className="w-[48px] sm:w-[54px] h-[48px] shrink-0 flex items-center justify-center relative">
              <Image
                src="/images/ValenciaPage/servicesIcon2.png"
                alt="Parking"
                width={48}
                height={42}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#1B4D32]">
                Parking
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#554031] mt-0.5">
                A convenient arrival by car.
              </p>
            </div>
          </div>

          {/* Row 2 / Col 3: Guest Assistance */}
          <div className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6 px-3 sm:px-5 lg:px-6">
            <div className="w-[48px] sm:w-[54px] h-[48px] shrink-0 flex items-center justify-center">
              <BellIcon className="w-[48px] sm:w-[52px] h-[40px]" color="#BD9749" />
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="font-display font-bold text-[18px] sm:text-[20px] leading-[1.25] text-[#1B4D32]">
                Guest Assistance
              </h3>
              <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] text-[#554031] mt-0.5">
                Help with your stay and local enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

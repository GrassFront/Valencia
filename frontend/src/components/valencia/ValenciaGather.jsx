"use client";

import Image from "next/image";
import Link from "next/link";

export default function ValenciaGather() {
  return (
    <section id="events" className="relative w-full bg-[#5B402B] flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[60px] py-12 sm:py-16 md:py-20 flex flex-col items-center text-center justify-start box-border">
        {/* Eyebrow */}
        <p className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[0.24em] text-[#E5C888] uppercase">
          GATHER AT VALENCIA
        </p>

        {/* Heading */}
        <h2 className="font-display font-normal text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.15] text-[#FFF9ED] mt-3 sm:mt-4">
          For moments that bring us together.
        </h2>

        {/* Subtitle */}
        <p className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[19px] leading-[26px] sm:leading-[28px] text-[#E9E1D5] mt-2 sm:mt-3">
          Explore settings for personal celebrations and purposeful business gatherings.
        </p>

        {/* Event Venues Cards Row */}
        <div className="w-full max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 xl:gap-10 text-left mt-8 sm:mt-10 lg:mt-12">
          {/* Card 1: Celebrations & Gatherings */}
          <article className="w-full border border-[#B38D4F] rounded-[4px] bg-[#493422] flex flex-col overflow-hidden group">
            {/* Top Photo */}
            <div className="relative w-full h-[240px] sm:h-[270px] lg:h-[300px] overflow-hidden bg-[#3D2919] shrink-0">
              <Image
                src="/images/ValenciaPage/Gather at Valencia/Celebrations and gatherings.png"
                alt="Celebrations and Gatherings venue Magnolia Hall"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Venue Description */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
              <div className="flex flex-col">
                <h3 className="font-display font-normal text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.2] text-[#FFFFFF]">
                  Celebrations &amp; Gatherings
                </h3>

                <p className="font-body font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#E5DCD2] mt-2 sm:mt-2.5">
                  Celebrate intimate weddings, anniversaries and special milestones in an elegant setting.
                </p>

                {/* Gold divider line */}
                <div className="w-full h-[1px] bg-[#8A6A42]/60 my-4 sm:my-5" aria-hidden="true" />

                {/* Space Name */}
                <h4 className="font-display font-normal text-[22px] sm:text-[25px] leading-[1.25] text-[#FFFFFF]">
                  The Magnolia Hall
                </h4>

                {/* Capacity */}
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[21px] text-[#D8CDC0] mt-1.5">
                  Up to 120 guests &nbsp;|&nbsp; 2,400 sq ft
                </p>

                {/* Features */}
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[21px] text-[#D8CDC0] mt-1">
                  Custom menus • Flexible décor • Event assistance
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 sm:pt-7">
                <Link
                  href="/events"
                  className="w-full h-[46px] border border-[#C8A354] hover:bg-[#C8A354]/15 transition-all duration-300 rounded-[2px] flex items-center justify-center text-center group/btn"
                >
                  <span className="font-body font-semibold text-[13px] sm:text-[13.5px] leading-[18px] tracking-[0.14em] text-[#FFFFFF] uppercase flex items-center gap-2">
                    <span>EXPLORE WEDDINGS &amp; EVENTS</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Meetings & Conferences */}
          <article className="w-full border border-[#B38D4F] rounded-[4px] bg-[#493422] flex flex-col overflow-hidden group">
            {/* Top Photo */}
            <div className="relative w-full h-[240px] sm:h-[270px] lg:h-[300px] overflow-hidden bg-[#3D2919] shrink-0">
              <Image
                src="/images/ValenciaPage/Gather at Valencia/Meetings and conferences.png"
                alt="Meetings and Conferences venue Executive Room"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Venue Description */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-7 lg:p-8">
              <div className="flex flex-col">
                <h3 className="font-display font-normal text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.2] text-[#FFFFFF]">
                  Meetings &amp; Conferences
                </h3>

                <p className="font-body font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#E5DCD2] mt-2 sm:mt-2.5">
                  A considered space for board meetings, workshops and focused business conversations.
                </p>

                {/* Gold divider line */}
                <div className="w-full h-[1px] bg-[#8A6A42]/60 my-4 sm:my-5" aria-hidden="true" />

                {/* Space Name */}
                <h4 className="font-display font-normal text-[22px] sm:text-[25px] leading-[1.25] text-[#FFFFFF]">
                  The Executive Room
                </h4>

                {/* Capacity */}
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[21px] text-[#D8CDC0] mt-1.5">
                  Up to 24 guests &nbsp;|&nbsp; 800 sq ft
                </p>

                {/* Features */}
                <p className="font-body font-normal text-[13.5px] sm:text-[14.5px] leading-[21px] text-[#D8CDC0] mt-1">
                  Presentation screen • Wi-Fi • Tea &amp; coffee
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 sm:pt-7">
                <Link
                  href="/meetings"
                  className="w-full h-[46px] border border-[#C8A354] hover:bg-[#C8A354]/15 transition-all duration-300 rounded-[2px] flex items-center justify-center text-center group/btn"
                >
                  <span className="font-body font-semibold text-[13px] sm:text-[13.5px] leading-[18px] tracking-[0.14em] text-[#FFFFFF] uppercase flex items-center gap-2">
                    <span>EXPLORE MEETINGS</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Sample venue note */}
        <p className="font-body font-normal text-[13px] sm:text-[14px] leading-[20px] text-[#E9E1D5]/75 mt-8 sm:mt-9">
          Sample venue names, capacities and facilities for design preview.
        </p>
      </div>
    </section>
  );
}

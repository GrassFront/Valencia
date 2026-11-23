"use client";

import Image from "next/image";
import Link from "next/link";

export default function ValenciaGather() {
  return (
    <section id="events" className="relative w-full bg-[#5B402B] flex flex-col items-center">
      <div className="w-full max-w-[1440px] xl:h-[1047px] min-h-[1047px] px-4 sm:px-6 md:px-8 xl:px-0 py-12 xl:py-[44px] flex flex-col items-center text-center justify-start gap-0 box-border">
        {/* Eyebrow */}
        <p className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#E5C888] uppercase">
          GATHER AT VALENCIA
        </p>

        {/* Spacing 24px */}
        <div className="h-[16px] sm:h-[24px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-normal text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.15] lg:leading-[67px] text-[#FFF9ED]">
          For moments that bring us together.
        </h2>

        {/* Spacing 10px */}
        <div className="h-[8px] sm:h-[10px]" aria-hidden="true" />

        {/* Subtitle */}
        <p className="font-body font-normal text-[18px] sm:text-[22px] lg:text-[25px] leading-[26px] sm:leading-[31px] text-[#E9E1D5]">
          Explore settings for personal celebrations and purposeful business gatherings.
        </p>

        {/* Spacing 38px */}
        <div className="h-[22px] sm:h-[38px]" aria-hidden="true" />

        {/* Event Venues Cards Row */}
        <div className="w-full max-w-[1350px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[40px] text-left">
          {/* Card 1: Celebrations & Gatherings */}
          <article className="w-full lg:max-w-[655px] min-h-[660px] lg:min-h-[715px] border-2 border-[#D4B571] rounded-[2px] bg-transparent flex flex-col overflow-hidden group">
            {/* Top Photo (height 330px) */}
            <div className="relative w-full h-[260px] sm:h-[300px] lg:h-[330px] overflow-hidden bg-[#4B3523]/40 shrink-0">
              <Image
                src="/images/ValenciaPage/Gather at Valencia/Celebrations and gatherings.png"
                alt="Celebrations and Gatherings venue Magnolia Hall"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 655px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Venue Description (padding 14px 40px 24px) */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 lg:pt-[14px] lg:px-[40px] lg:pb-7">
              <div className="flex flex-col">
                <h3 className="font-display font-normal text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.2] lg:leading-[46px] text-[#FFF9ED]">
                  Celebrations &amp; Gatherings
                </h3>

                <div className="h-[9px]" aria-hidden="true" />

                <p className="font-body font-normal text-[18px] sm:text-[21px] lg:text-[23px] leading-[26px] sm:leading-[28px] text-[#EFE8DF]">
                  Celebrate intimate weddings, anniversaries and special milestones in an elegant setting.
                </p>

                <div className="h-[14px] sm:h-[19px]" aria-hidden="true" />

                {/* Gold divider line */}
                <div className="w-full h-[1px] bg-[#D4B571]" aria-hidden="true" />

                <div className="h-[7px]" aria-hidden="true" />

                {/* Subheading */}
                <h4 className="font-display font-normal text-[26px] sm:text-[30px] lg:text-[33px] leading-[40px] text-[#FFF9ED]">
                  The Magnolia Hall
                </h4>

                <div className="h-[8px] sm:h-[11px]" aria-hidden="true" />

                {/* Capacity */}
                <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-[27px] text-[#EFE8DF]">
                  Up to 120 guests | 2,400 sq ft
                </p>

                <div className="h-[8px] sm:h-[11px]" aria-hidden="true" />

                {/* Features */}
                <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] text-[#EFE8DF]">
                  Custom menus • Flexible décor • Event assistance
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 lg:pt-[26px]">
                <Link
                  href="/events"
                  className="w-full h-[52px] sm:h-[57px] border-2 border-[#F7EDDA] hover:bg-[#F7EDDA]/10 transition-all duration-300 rounded-[2px] flex items-center justify-center text-center group/btn"
                >
                  <span className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] tracking-[2px] text-[#F7EDDA] uppercase flex items-center gap-2">
                    <span>EXPLORE WEDDINGS &amp; EVENTS</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </article>

          {/* Card 2: Meetings & Conferences */}
          <article className="w-full lg:max-w-[655px] min-h-[660px] lg:min-h-[715px] border-2 border-[#D4B571] rounded-[2px] bg-transparent flex flex-col overflow-hidden group">
            {/* Top Photo (height 330px) */}
            <div className="relative w-full h-[260px] sm:h-[300px] lg:h-[330px] overflow-hidden bg-[#4B3523]/40 shrink-0">
              <Image
                src="/images/ValenciaPage/Gather at Valencia/Meetings and conferences.png"
                alt="Meetings and Conferences venue Executive Room"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 655px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Venue Description (padding 14px 40px 24px) */}
            <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 lg:pt-[14px] lg:px-[40px] lg:pb-7">
              <div className="flex flex-col">
                <h3 className="font-display font-normal text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.2] lg:leading-[46px] text-[#FFF9ED]">
                  Meetings &amp; Conferences
                </h3>

                <div className="h-[9px]" aria-hidden="true" />

                <p className="font-body font-normal text-[18px] sm:text-[21px] lg:text-[23px] leading-[26px] sm:leading-[28px] text-[#EFE8DF]">
                  A considered space for board meetings, workshops and focused business conversations.
                </p>

                <div className="h-[14px] sm:h-[19px]" aria-hidden="true" />

                {/* Gold divider line */}
                <div className="w-full h-[1px] bg-[#D4B571]" aria-hidden="true" />

                <div className="h-[7px]" aria-hidden="true" />

                {/* Subheading */}
                <h4 className="font-display font-normal text-[26px] sm:text-[30px] lg:text-[33px] leading-[40px] text-[#FFF9ED]">
                  The Executive Room
                </h4>

                <div className="h-[8px] sm:h-[11px]" aria-hidden="true" />

                {/* Capacity */}
                <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-[27px] text-[#EFE8DF]">
                  Up to 24 guests | 800 sq ft
                </p>

                <div className="h-[8px] sm:h-[11px]" aria-hidden="true" />

                {/* Features */}
                <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] text-[#EFE8DF]">
                  Presentation screen • Wi-Fi • Tea &amp; coffee
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 lg:pt-[26px]">
                <Link
                  href="/meetings"
                  className="w-full h-[52px] sm:h-[57px] border-2 border-[#F7EDDA] hover:bg-[#F7EDDA]/10 transition-all duration-300 rounded-[2px] flex items-center justify-center text-center group/btn"
                >
                  <span className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] tracking-[2px] text-[#F7EDDA] uppercase flex items-center gap-2">
                    <span>EXPLORE MEETINGS</span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* Spacing 25px */}
        <div className="h-[16px] sm:h-[25px]" aria-hidden="true" />

        {/* Sample venue note */}
        <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] text-[#EFE8DF]">
          Sample venue names, capacities and facilities for design preview.
        </p>
      </div>
    </section>
  );
}

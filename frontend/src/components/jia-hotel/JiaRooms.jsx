"use client";

import Image from "next/image";
import { SectionTitleWithDividers, ArrowRightIcon } from "./JiaIcons";

export const JIA_ROOMS = [
  {
    id: "budget",
    name: "Budget",
    description: "Simple comfort for everyday stays.",
    image: "/images/Jia Hotel/budget.png",
    alt: "Hotel Jia Budget room with comfortable bed, clean linen, wall artwork, and warm lighting",
  },
  {
    id: "superior",
    name: "Superior",
    description: "A welcoming setting to settle in.",
    image: "/images/Jia Hotel/superior.png",
    alt: "Hotel Jia Superior room with plush king bed, bedside sconces, and cozy armchair by the window",
  },
  {
    id: "twin-bed",
    name: "Twin Bed",
    description: "A practical choice for shared stays.",
    image: "/images/Jia Hotel/tin bed.png",
    alt: "Hotel Jia Twin Bed room with two twin single beds, reading lamps, and modern curtains",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Comfort for business and leisure visits.",
    image: "/images/Jia Hotel/executive.png",
    alt: "Hotel Jia Executive room with spacious work desk, ergonomic chair, king bed, and sunlit windows",
  },
];

export default function JiaRooms({ onSelectRoom }) {
  const handleEnquire = (roomName) => {
    if (onSelectRoom) {
      onSelectRoom(roomName);
    } else {
      const el = document.getElementById("enquiry");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="rooms"
      aria-label="Rooms at Hotel Jia"
      className="relative w-full bg-[#FAF6EC] pt-8 sm:pt-10 lg:pt-[25px] pb-12 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[53px] flex flex-col items-center">
        {/* Eyebrow with gold divider lines */}
        <SectionTitleWithDividers
          eyebrow="ROOMS AT HOTEL JIA"
          color="#BE9546"
          dividerColor="#BE9546"
        />

        {/* Spacing: 17px desktop */}
        <div className="h-3 sm:h-4 lg:h-[17px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[60px] text-[#194E35] text-center max-w-[800px]">
          Find the room that fits your visit.
        </h2>

        {/* Spacing: 39px desktop */}
        <div className="h-6 sm:h-8 lg:h-[39px]" aria-hidden="true" />

        {/* 4 Room Cards Grid (width: 1334px total, gap: 16px desktop) */}
        <div className="w-full max-w-[1334px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[16px] items-stretch">
          {JIA_ROOMS.map((room) => (
            <article
              key={room.id}
              className="w-full rounded-[11px] border border-[#E9DCC5] bg-[#FAF6EC] overflow-hidden flex flex-col justify-between jia-card-hover group shadow-xs"
            >
              {/* Room Card Photo (height: 221px desktop) */}
              <div className="relative w-full h-[210px] sm:h-[221px] overflow-hidden shrink-0">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 321px"
                  className="object-cover jia-img-scale"
                />
              </div>

              {/* Room Card Information (padding: 11px 16px 16px 18px) */}
              <div className="flex-1 flex flex-col justify-between pt-[11px] pb-4 px-4 sm:px-[18px]">
                <div className="flex flex-col items-start">
                  {/* Room Name */}
                  <h3 className="font-display font-bold text-[25px] sm:text-[27px] lg:text-[29px] leading-[34px] lg:leading-[36px] text-[#194E35]">
                    {room.name}
                  </h3>

                  {/* Spacing: 5px */}
                  <div className="h-1 lg:h-[5px]" aria-hidden="true" />

                  {/* Room Description */}
                  <p className="font-body font-normal text-[15px] sm:text-[16px] leading-[20px] text-[#4F3523]">
                    {room.description}
                  </p>
                </div>

                {/* Spacing: 19px */}
                <div className="h-4 lg:h-[19px]" aria-hidden="true" />

                {/* ENQUIRE NOW Button (width: 285px, height: 38px desktop) */}
                <button
                  type="button"
                  onClick={() => handleEnquire(`${room.name} Room`)}
                  className="w-full h-[38px] bg-[#194E35] hover:bg-[#103727] active:bg-[#0c2b1e] rounded-[8px] text-[#FAF6EC] flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer group/btn"
                >
                  <span className="font-body font-bold text-[15px] sm:text-[16px] leading-[20px] uppercase tracking-wide">
                    ENQUIRE NOW
                  </span>
                  <ArrowRightIcon
                    size={18}
                    color="#FAF6EC"
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Spacing: 14px desktop */}
        <div className="h-3 sm:h-4 lg:h-[14px]" aria-hidden="true" />

        {/* Note below rooms grid */}
        <p className="font-display italic font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] text-[#786D61] text-center">
          Room specifications, rates and availability will be confirmed by our team.
        </p>
      </div>
    </section>
  );
}

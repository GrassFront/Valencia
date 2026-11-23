"use client";

import Image from "next/image";
import Link from "next/link";

const ROOMS_DATA = [
  {
    id: "deluxe",
    title: "Deluxe",
    desc: "A welcoming retreat for restful stays.",
    image: "/images/ValenciaPage/Rooms and Suites/Deluxe.png",
    href: "/rooms/deluxe",
    details: {
      size: "380 sq ft",
      occupancy: "2 Adults",
      bedType: "King Bed",
      view: "Courtyard & Garden View",
      features: [
        "Plush king-size mattress with high-thread-count Italian linen",
        "En-suite marble bathroom with rainfall shower & luxury toiletries",
        "High-speed Wi-Fi, 55-inch Smart TV & integrated sound system",
        "Dedicated workspace with ergonomic armchair & espresso maker",
      ],
    },
  },
  {
    id: "twin",
    title: "Twin",
    desc: "Shared stays, with space for individual comfort.",
    image: "/images/ValenciaPage/Rooms and Suites/twin.png",
    href: "/rooms/twin",
    details: {
      size: "410 sq ft",
      occupancy: "2 Adults",
      bedType: "Two Twin Beds",
      view: "City & Garden View",
      features: [
        "Two twin beds crafted with premium custom pocket-spring mattresses",
        "Spacious wardrobe, individual reading sconces & bedside USB ports",
        "Luxurious bathroom with double vanity and walk-in rain shower",
        "In-room refreshment bar with artisanal teas and coffees",
      ],
    },
  },
  {
    id: "suite",
    title: "Suite",
    desc: "Room to unwind, with a separate sense of retreat.",
    image: "/images/ValenciaPage/Rooms and Suites/suite.png",
    href: "/rooms/suite",
    details: {
      size: "620 sq ft",
      occupancy: "2-3 Adults",
      bedType: "Master King Bed",
      view: "Panoramic Patna Skyline",
      features: [
        "Separate living salon with plush velvet seating & marble coffee table",
        "Master bedroom suite with walk-in wardrobe and dressing vanity",
        "Freestanding soaking bathtub & separate glass-enclosed rain shower",
        "Personalized butler service on request & evening turndown amenities",
      ],
    },
  },
  {
    id: "presidential",
    title: "Presidential Suite",
    desc: "An expansive setting for an exceptional stay.",
    image: "/images/ValenciaPage/Rooms and Suites/presidential.png",
    href: "/rooms/presidential-suite",
    details: {
      size: "1,200 sq ft",
      occupancy: "Up to 4 Guests",
      bedType: "Grand King Bedroom Suite",
      view: "Private Balcony & City Panorama",
      features: [
        "Expansive formal living room, dining salon for 6 & private pantry",
        "Master sanctuary with private terrace, chandelier & custom millwork",
        "Opulent Italian marble master bath with jacuzzi tub & steam shower",
        "VIP private airport transfer & dedicated 24-hour concierge service",
      ],
    },
  },
];

export default function ValenciaRooms() {
  return (
    <section id="rooms" className="relative w-full bg-[#FAF6EB] flex flex-col items-center">
      <div className="w-full max-w-[1440px] xl:h-[714px] min-h-[714px] px-4 sm:px-6 md:px-8 xl:pt-[44px] xl:pr-[43px] xl:pb-[44px] xl:pl-[47px] py-10 lg:py-12 flex flex-col justify-start items-start gap-0 box-border">
        {/* Eyebrow */}
        <p className="font-body font-bold text-[15px] sm:text-[17px] xl:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#BD9749] uppercase">
          ROOMS &amp; SUITES
        </p>

        {/* Spacing 14px */}
        <div className="h-[10px] sm:h-[14px]" aria-hidden="true" />

        {/* Heading & View All Button Row */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-8 pb-8 lg:pb-[35px]">
          <div className="flex flex-col items-start">
            <h2 className="font-display font-bold text-[32px] sm:text-[42px] lg:text-[51px] leading-[1.15] lg:leading-[62px] text-[#164C36]">
              Find your own sense of comfort.
            </h2>
            <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[25px] leading-[24px] sm:leading-[31px] text-[#543E30] mt-1">
              Four room categories, each with its own character.
            </p>
          </div>

          <Link
            href="/rooms"
            className="w-full sm:w-[240px] lg:w-[285px] h-[50px] sm:h-[54px] bg-[#164C36] hover:bg-[#113d2b] transition-all duration-300 rounded-[2px] flex items-center justify-center shrink-0 shadow-sm hover:shadow-md group"
          >
            <span className="font-body font-bold text-[15px] sm:text-[17px] lg:text-[19px] leading-[23px] tracking-[2px] text-white uppercase flex items-center gap-2.5">
              <span>VIEW ALL ROOMS</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>

        {/* 4 Room Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[20px]">
          {ROOMS_DATA.map((room) => (
            <article
              key={room.id}
              className="w-full min-h-[458px] rounded-[7px] border border-[#E1D2B3] bg-[#FAF6EB] flex flex-col overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(27,45,35,0.08)] transition-all duration-300 group"
            >
              {/* Photo Area: height 265px */}
              <Link href={room.href} className="relative w-full h-[240px] sm:h-[265px] overflow-hidden bg-[#E8DAC2]/30 shrink-0 block">
                <Image
                  src={room.image}
                  alt={`${room.title} Room at Valencia`}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 322px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Room Card Copy */}
              <div className="flex-1 flex flex-col justify-between p-5 lg:pt-[15px] lg:px-[26px] lg:pb-5">
                <div className="flex flex-col">
                  {/* Room Name */}
                  <Link href={room.href} className="hover:text-[#BD9749] transition-colors">
                    <h3 className="font-display font-bold text-[24px] sm:text-[26px] lg:text-[28px] leading-[34px] text-[#164C36]">
                      {room.title}
                    </h3>
                  </Link>

                  {/* Spacing 9px */}
                  <div className="h-[9px]" aria-hidden="true" />

                  {/* Description */}
                  <p className="font-body font-normal text-[17px] sm:text-[18px] lg:text-[20px] leading-[24px] text-[#543E30] min-h-[48px]">
                    {room.desc}
                  </p>
                </div>

                <div className="flex flex-col mt-4">
                  {/* Spacing 20px / Gold Divider */}
                  <div className="w-full h-[1px] bg-[#BD9749]" aria-hidden="true" />

                  {/* Spacing 16px */}
                  <div className="h-[14px] sm:h-[16px]" aria-hidden="true" />

                  {/* VIEW DETAILS Link / Button */}
                  <Link
                    href={room.href}
                    className="inline-flex items-center gap-2 font-body font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] text-[#164C36] hover:text-[#BD9749] transition-colors cursor-pointer text-left group/btn"
                  >
                    <span>VIEW DETAILS</span>
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

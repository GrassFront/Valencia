"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ROOMS = [
  {
    id: "deluxe",
    name: "Deluxe",
    titleSizeClass: "text-[27px]",
    description: "A welcoming retreat for restful stays.",
    linkLabel: "VIEW DETAILS",
    href: "/rooms/deluxe",
    image: "/images/homepage/homepage_deluxe.png",
    alt: "Valencia Deluxe Room - Luxury King Bed with neoclassical decor",
  },
  {
    id: "twin",
    name: "Twin",
    titleSizeClass: "text-[27px]",
    description: "Shared stays, with space for individual comfort.",
    linkLabel: "VIEW DETAILS",
    href: "/rooms/twin",
    image: "/images/homepage/homepage_twin.png",
    alt: "Valencia Twin Room - Two plush beds with warm bespoke styling",
  },
  {
    id: "suite",
    name: "Suite",
    titleSizeClass: "text-[27px]",
    description: "Room to unwind, with a separate sense of retreat.",
    linkLabel: "VIEW DETAILS",
    href: "/rooms/suite",
    image: "/images/homepage/homepage_suite.png",
    alt: "Valencia Executive Suite - Expansive seating and opulent parlor",
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    // 24px - 27px responsive for single-line harmony
    titleSizeClass: "text-[22px] sm:text-[24px] xl:text-[25px] 2xl:text-[27px] tracking-tight whitespace-nowrap",
    description: "An expansive setting for an exceptional stay.",
    linkLabel: "VIEW DETAILS",
    href: "/rooms/presidential-suite",
    image: "/images/homepage/homepage_presidental.png",
    alt: "Valencia Presidential Suite - Master bedroom and grand Italian neoclassical finishes",
  },
];

export default function RoomsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Scroll to active card on pagination click (useful on mobile / tablet carousel)
  const scrollToCard = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  // Sync activeIndex on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0]?.offsetWidth || 308;
      const gap = 20;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      if (newIndex >= 0 && newIndex < ROOMS.length && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-section-heading"
      className="w-full bg-[#FAF7EE] border-b border-black/10 overflow-hidden"
    >
      {/* 1440px Container (Figma: padding 0 66px 0 80px, gap 32px) */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-14 xl:pl-[80px] xl:pr-[66px] py-14 sm:py-16 xl:py-[52px] flex flex-col gap-8 xl:gap-[32px]">
        {/* Section Header: 1294px wide in Figma, flex between */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          {/* Heading and introduction (Figma: gap 4px, width 990px) */}
          <div className="flex flex-col items-start gap-1 sm:gap-1.5 max-w-[990px]">
            {/* Eyebrow */}
            <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[26px] tracking-[0.40em] sm:tracking-[0.45em] text-[#C9A96A] uppercase">
              REST BEAUTIFULLY
            </span>

            {/* Title */}
            <h2
              id="rooms-section-heading"
              className="font-display font-normal text-[34px] sm:text-[46px] md:text-[54px] lg:text-[64px] leading-[1.12] lg:leading-[78px] text-[#1B4D32]"
            >
              Find your perfect stay.
            </h2>

            {/* Subtitle */}
            <p className="font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[24px] text-[#80786B] max-w-[595px]">
              Four room categories, each with its own sense of comfort and character.
            </p>
          </div>

          {/* Button / View rooms (Figma: 220px x 51px, #1B4D32 background, 18px gap) */}
          <Link
            href="/rooms"
            className="group inline-flex h-[51px] w-full sm:w-[220px] items-center justify-center gap-[18px] bg-[#1B4D32] text-[#F8F5EA] transition-colors duration-200 hover:bg-[#153e28] active:bg-[#0f2c1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D32] shrink-0 self-start md:self-end"
          >
            <span className="font-body font-semibold text-[13px] leading-[24px] tracking-[0.2em] uppercase whitespace-nowrap">
              VIEW ROOMS
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M3.5 11H18.5M12.5 5L18.5 11L12.5 17"
                stroke="#F8F5EA"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Room Cards: 1294px wide, 4 cards of 308.5px with 20px gap */}
        <div
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-6 xl:gap-[20px] sm:overflow-visible sm:pb-0 justify-items-center"
        >
          {ROOMS.map((room) => (
            <article
              key={room.id}
              className="group relative flex flex-col items-start w-[285px] sm:w-full sm:max-w-[308.5px] h-[380px] bg-[#FFFDF7] border border-[#D9CCAF] rounded-[5px] shadow-[0px_5px_12px_rgba(77,59,31,0.07)] shrink-0 snap-center overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_10px_24px_rgba(77,59,31,0.12)]"
            >
              {/* Cropped Room Photo: 308.5px x 228px with smooth zoom on hover */}
              <div className="relative w-full h-[228px] overflow-hidden shrink-0 bg-[#E8DCC9]/20">
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 640px) 285px, (max-width: 1280px) 308px, 308px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Room details (Figma: padding 11px 18px 0px 23px, gap 4px, height 152px) */}
              <div className="w-full flex-1 h-[152px] flex flex-col justify-between pt-[11px] pr-[18px] pb-[16px] pl-[23px] box-border">
                {/* Text Group */}
                <div className="flex flex-col items-start gap-1 w-full">
                  {/* Room name */}
                  <h3
                    className={`font-display font-normal ${room.titleSizeClass} leading-[37px] text-[#4B3A2B] truncate w-full`}
                  >
                    {room.name}
                  </h3>

                  {/* Room description */}
                  <p className="font-body font-normal text-[15px] xl:text-[16px] leading-[21px] text-[#80786B] max-w-[268px] line-clamp-2">
                    {room.description}
                  </p>
                </div>

                {/* Link / View details (Figma: gap 18px, label 14px, arrow 24px) */}
                <div className="w-full flex items-center pt-1">
                  <Link
                    href={room.href}
                    className="inline-flex items-center gap-[18px] text-[#1B4D32] hover:text-[#C9A96A] transition-colors py-0.5"
                  >
                    <span className="font-body font-semibold text-[13.5px] xl:text-[14px] leading-[26px] tracking-[0.15em] uppercase whitespace-nowrap">
                      {room.linkLabel}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12H20M14 6L20 12L14 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel pagination: 4 circular dots, 15px gap, Figma 10px dots */}
        <div
          className="w-full flex items-center justify-center gap-[15px] py-2"
          role="tablist"
          aria-label="Room categories pagination"
        >
          {ROOMS.map((room, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={room.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to ${room.name}`}
                onClick={() => scrollToCard(idx)}
                className={`transition-all duration-200 cursor-pointer ${isActive
                  ? "w-[10px] h-[10px] rounded-full bg-[#1B4D32] scale-110"
                  : "w-[10px] h-[10px] rounded-full border-[1.5px] border-[#C9A96A] bg-transparent hover:border-[#1B4D32]"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}


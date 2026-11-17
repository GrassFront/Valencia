"use client";

import Image from "next/image";

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "The Lobby",
    category: "Arrival & Living Spaces",
    src: "/images/ValenciaPage/Gallery/lobby.png",
  },
  {
    id: 2,
    title: "Deluxe Room",
    category: "Rooms & Suites",
    src: "/images/ValenciaPage/Gallery/Deluxe Room.png",
  },
  {
    id: 3,
    title: "Dining",
    category: "Restaurant & Bar",
    src: "/images/ValenciaPage/Gallery/dining.png",
  },
  {
    id: 4,
    title: "Twin Room",
    category: "Rooms & Suites",
    src: "/images/ValenciaPage/Gallery/twin room.png",
  },
  {
    id: 5,
    title: "Celebrations",
    category: "Events & Weddings",
    src: "/images/ValenciaPage/Gallery/celebrations.png",
  },
  {
    id: 6,
    title: "Meetings",
    category: "Executive Gatherings",
    src: "/images/ValenciaPage/Gallery/meetings.png",
  },
  {
    id: 7,
    title: "Culinary Moments",
    category: "Chef's Tasting & Dishes",
    src: "/images/ValenciaPage/Gallery/culinary moments.png",
  },
  {
    id: 8,
    title: "Suite Living",
    category: "Private Luxury Retreats",
    src: "/images/ValenciaPage/Gallery/suite living.png",
  },
];

export default function ValenciaGallery({ onOpenGallery }) {
  return (
    <section id="gallery" className="relative w-full bg-[#FAF6EB] border-b border-black/[0.06] flex flex-col items-center">
      <div className="w-full max-w-[1440px] lg:h-[1025px] px-4 sm:px-6 md:px-8 pt-10 pb-10 lg:pt-[38px] lg:px-[46px] lg:pb-[38px] flex flex-col items-center text-center justify-start gap-0 box-border">
        {/* Eyebrow */}
        <p className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#BD9749] uppercase">
          A CLOSER LOOK AT VALENCIA
        </p>

        {/* Spacing 17px */}
        <div className="h-[10px] sm:h-[17px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.1] sm:leading-[1.15] lg:leading-[83px] text-[#164C36]">
          Picture your stay.
        </h2>

        {/* Spacing 10px */}
        <div className="h-[6px] sm:h-[10px]" aria-hidden="true" />

        {/* Subtitle */}
        <p className="font-body font-normal text-[17px] sm:text-[20px] lg:text-[22px] leading-[27px] text-[#543E30]">
          Explore the spaces that make every moment feel special.
        </p>

        {/* Spacing 32px */}
        <div className="h-[20px] sm:h-[32px]" aria-hidden="true" />

        {/* 8 Gallery Photos Mosaic */}
        <div className="w-full max-w-[1348px] flex flex-col gap-3.5 lg:gap-[14px]">
          {/* Row 1: 2 Equal Columns (666px each) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-[16px]">
            {/* 1. The Lobby */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(0)}
              className="relative w-full h-[220px] sm:h-[258px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="The Lobby - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[0].src}
                alt={GALLERY_ITEMS[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 666px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 2. Deluxe Room */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(1)}
              className="relative w-full h-[220px] sm:h-[258px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Deluxe Room - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[1].src}
                alt={GALLERY_ITEMS[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 666px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Row 2: 3 Columns (666px / 325px / 325px) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3.5 lg:gap-[16px]">
            {/* 3. Dining (Span 6 out of 12) */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(2)}
              className="md:col-span-6 relative w-full h-[200px] sm:h-[221px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Dining - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[2].src}
                alt={GALLERY_ITEMS[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 666px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 4. Twin Room (Span 3 out of 12) */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(3)}
              className="md:col-span-3 relative w-full h-[200px] sm:h-[221px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Twin Room - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[3].src}
                alt={GALLERY_ITEMS[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 325px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 5. Celebrations (Span 3 out of 12) */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(4)}
              className="md:col-span-3 relative w-full h-[200px] sm:h-[221px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Celebrations - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[4].src}
                alt={GALLERY_ITEMS[4].title}
                fill
                sizes="(max-width: 768px) 100vw, 325px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Row 3: 3 Columns (346px / 304px / 666px) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3.5 lg:gap-[16px]">
            {/* 6. Meetings */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(5)}
              className="md:col-span-3 relative w-full h-[200px] sm:h-[226px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Meetings - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[5].src}
                alt={GALLERY_ITEMS[5].title}
                fill
                sizes="(max-width: 768px) 100vw, 346px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 7. Culinary Moments */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(6)}
              className="md:col-span-3 relative w-full h-[200px] sm:h-[226px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Culinary Moments - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[6].src}
                alt={GALLERY_ITEMS[6].title}
                fill
                sizes="(max-width: 768px) 100vw, 304px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 8. Suite Living */}
            <div
              onClick={() => onOpenGallery && onOpenGallery(7)}
              className="md:col-span-6 relative w-full h-[200px] sm:h-[226px] rounded-[4px] overflow-hidden group cursor-pointer shadow-sm"
              title="Suite Living - Click to enlarge"
            >
              <Image
                src={GALLERY_ITEMS[7].src}
                alt={GALLERY_ITEMS[7].title}
                fill
                sizes="(max-width: 768px) 100vw, 666px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

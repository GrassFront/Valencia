"use client";

import Image from "next/image";
import { SectionTitleWithDividers, ExpandIcon } from "./UmraoIcons";

export const GALLERY_ITEMS = [
  // Row 1 (2 items)
  {
    id: 1,
    title: "The Grand Hall – Jaipur-inspired elegance",
    src: "/images/Umrao/gallery/Gallery photograph.png",
    row: 1,
    colSpan: "lg:w-[692px]",
  },
  {
    id: 2,
    title: "The Lawn – Open-air celebrations in a regal setting",
    src: "/images/Umrao/gallery/Gallery photograph 2.png",
    row: 1,
    colSpan: "lg:w-[686px]",
  },

  // Row 2 (3 items)
  {
    id: 3,
    title: "The Intimate Hall – Perfect for closer gatherings",
    src: "/images/Umrao/gallery/Gallery photograph 3.png",
    row: 2,
    colSpan: "lg:w-[457px]",
  },
  {
    id: 4,
    title: "Prewedding Vibes – Colour, culture and joy",
    src: "/images/Umrao/gallery/Gallery photograph 4.png",
    row: 2,
    colSpan: "lg:w-[458px]",
  },
  {
    id: 5,
    title: "Heritage Details – Timeless Jaipur charm",
    src: "/images/Umrao/gallery/Gallery photograph 5.png",
    row: 2,
    colSpan: "lg:w-[446px]",
  },

  // Row 3 (3 items)
  {
    id: 6,
    title: "The Wedding Stage – A grand setting for your special day",
    src: "/images/Umrao/gallery/Gallery photograph 6.png",
    row: 3,
    colSpan: "lg:w-[498px]",
  },
  {
    id: 7,
    title: "Dining Details – Curated with care",
    src: "/images/Umrao/gallery/Gallery photograph 7.png",
    row: 3,
    colSpan: "lg:w-[417px]",
  },
  {
    id: 8,
    title: "The Entrance – A royal welcome to Umrao",
    src: "/images/Umrao/gallery/Gallery photograph 8.png",
    row: 3,
    colSpan: "lg:w-[446px]",
  },
];

export default function UmraoGallery({ onOpenLightbox }) {
  const row1Items = GALLERY_ITEMS.filter((item) => item.row === 1);
  const row2Items = GALLERY_ITEMS.filter((item) => item.row === 2);
  const row3Items = GALLERY_ITEMS.filter((item) => item.row === 3);

  const handleCardClick = (item) => {
    const index = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    if (onOpenLightbox) {
      onOpenLightbox(index >= 0 ? index : 0);
    }
  };

  return (
    <section
      aria-label="Umrao In Pictures"
      className="relative w-full bg-[#FAF6EC] pt-4 sm:pt-6 lg:pt-[17px] pb-12 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[25px] flex flex-col items-center">
        {/* Top Lotus Image */}
        <div className="relative w-[46px] h-[32px] shrink-0 mb-2">
          <Image
            src="/images/Umrao/lotus.png"
            alt="Umrao Lotus ornament"
            width={46}
            height={32}
            className="object-contain"
          />
        </div>

        {/* Spacing: 9px */}
        <div className="h-2 lg:h-[9px]" aria-hidden="true" />

        {/* Eyebrow with gold divider lines */}
        <SectionTitleWithDividers
          eyebrow="UMRAO IN PICTURES"
          color="#194E35"
          dividerColor="#C49A4A"
        />

        {/* Spacing: 5px */}
        <div className="h-1 lg:h-[5px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.2] lg:leading-[71px] text-[#194E35] text-center max-w-[900px]">
          A glimpse of your next celebration.
        </h2>

        {/* Spacing: 10px */}
        <div className="h-2 lg:h-[10px]" aria-hidden="true" />

        {/* Subhead */}
        <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[29px] text-[#503522] text-center">
          Explore our spaces, settings and thoughtful details.
        </p>

        {/* Spacing: 19px */}
        <div className="h-4 sm:h-5 lg:h-[19px]" aria-hidden="true" />

        {/* =========================================================================
            Gallery Grid: 3 Rows matching exact dimensions on Desktop
            ========================================================================= */}
        <div className="w-full max-w-[1390px] flex flex-col gap-3.5 lg:gap-[14px]">
          {/* Row 1 (2 cards, height: 285px) */}
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-3.5 lg:gap-[14px]">
            {row1Items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className={`relative flex-1 ${item.colSpan} h-[260px] sm:h-[285px] rounded-[3px] overflow-hidden flex flex-col cursor-pointer group shadow-xs`}
              >
                {/* Photo (height: 248px desktop) */}
                <div className="relative w-full flex-1 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 692px"
                    className="object-cover umrao-gallery-img"
                  />
                </div>

                {/* Caption Bar (height: 37px, background: #3C2D1D) */}
                <div className="h-[37px] bg-[#3C2D1D] px-3 sm:px-[21px] flex items-center justify-between shrink-0">
                  <span className="font-display font-normal text-[15px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#FAF6EC] truncate pr-2">
                    {item.title}
                  </span>
                  <div className="text-[#FAF6EC] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0">
                    <ExpandIcon size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (3 cards, height: 228px) */}
          <div className="w-full flex flex-col md:flex-row items-stretch gap-3.5 lg:gap-[14px]">
            {row2Items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className={`relative flex-1 ${item.colSpan} h-[220px] sm:h-[228px] rounded-[3px] overflow-hidden flex flex-col cursor-pointer group shadow-xs`}
              >
                {/* Photo (height: 191px desktop) */}
                <div className="relative w-full flex-1 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 458px"
                    className="object-cover umrao-gallery-img"
                  />
                </div>

                {/* Caption Bar (height: 37px, background: #3C2D1D) */}
                <div className="h-[37px] bg-[#3C2D1D] px-3 sm:px-[21px] flex items-center justify-between shrink-0">
                  <span className="font-display font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[21px] text-[#FAF6EC] truncate pr-2">
                    {item.title}
                  </span>
                  <div className="text-[#FAF6EC] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0">
                    <ExpandIcon size={19} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 (3 cards, height: 215px) */}
          <div className="w-full flex flex-col md:flex-row items-stretch gap-3.5 lg:gap-[14px]">
            {row3Items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className={`relative flex-1 ${item.colSpan} h-[210px] sm:h-[215px] rounded-[3px] overflow-hidden flex flex-col cursor-pointer group shadow-xs`}
              >
                {/* Photo (height: 178px desktop) */}
                <div className="relative w-full flex-1 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 498px"
                    className="object-cover umrao-gallery-img"
                  />
                </div>

                {/* Caption Bar (height: 37px, background: #3C2D1D) */}
                <div className="h-[37px] bg-[#3C2D1D] px-3 sm:px-[21px] flex items-center justify-between shrink-0">
                  <span className="font-display font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[21px] text-[#FAF6EC] truncate pr-2">
                    {item.title}
                  </span>
                  <div className="text-[#FAF6EC] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0">
                    <ExpandIcon size={19} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing: 16px */}
        <div className="h-3 sm:h-4 lg:h-[16px]" aria-hidden="true" />

        {/* Note below gallery */}
        <p className="font-display italic font-normal text-[13px] sm:text-[14px] lg:text-[15px] leading-[19px] text-[#776B61] text-center">
          Concept imagery for design preview.
        </p>
      </div>
    </section>
  );
}

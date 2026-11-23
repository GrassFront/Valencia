"use client";

import Image from "next/image";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export default function ValenciaHero({ onOpenGallery }) {
  const scrollToBooking = (e) => {
    e.preventDefault();
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#FAF6EB] flex flex-col items-center">
      <div className="w-full max-w-[1440px] lg:min-h-[948px] flex flex-col items-start gap-0 p-0 justify-start">
        {/* Breadcrumb Bar */}
        <div className="w-full pt-[25px] px-4 sm:px-6 md:px-8 lg:pl-[50px] lg:pr-[44px]">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-body text-[14px] sm:text-[15px] leading-[18px] text-[#543E30]">
              <li>
                <Link href="/" className="hover:text-[#BD9749] transition-colors">
                  Home
                </Link>
              </li>
              <li className="opacity-60">/</li>
              <li>
                <Link href="/properties" className="hover:text-[#BD9749] transition-colors">
                  Our Properties
                </Link>
              </li>
              <li className="opacity-60">/</li>
              <li className="font-semibold text-[#164C36]" aria-current="page">
                VALENCIA
              </li>
            </ol>
          </nav>

          {/* Spacing 33px */}
          <div className="h-[20px] sm:h-[33px]" aria-hidden="true" />

          {/* Property Title and Booking Row */}
          <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 pb-7">
            {/* Left Title Column */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <p className="font-body font-bold text-[15px] sm:text-[17px] lg:text-[19px] leading-[23px] tracking-[4px] sm:tracking-[5px] text-[#BD9749] uppercase">
                PATNA · LUXURY BOUTIQUE HOTEL
              </p>

              {/* Main Headline */}
              <h1 className="font-display font-bold text-[48px] sm:text-[64px] lg:text-[79px] leading-[1.05] sm:leading-[1.15] lg:leading-[96px] text-[#164C36] mt-1 mb-1 tracking-tight">
                VALENCIA
              </h1>

              {/* Italic Subtitle */}
              <p className="font-display italic font-normal text-[20px] sm:text-[23px] lg:text-[26px] leading-[28px] sm:leading-[32px] text-[#543E30]">
                Italian-inspired elegance. A warm welcome in Patna.
              </p>
            </div>

            {/* Right Booking CTA Button */}
            <div className="flex flex-col items-start lg:items-end shrink-0 pt-2 lg:pt-0">
              <Link
                href="/rooms"
                className="w-full sm:w-[320px] lg:w-[352px] h-[52px] sm:h-[57px] bg-[#164C36] hover:bg-[#113d2b] transition-all duration-300 rounded-[10px] flex items-center justify-center shadow-md hover:shadow-lg group"
              >
                <span className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[23px] tracking-[2px] text-white uppercase flex items-center gap-3">
                  <span>BOOK YOUR STAY</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Mosaic */}
        <div className="w-full px-4 sm:px-6 lg:px-[25px] pb-8 lg:pb-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-[10px]">
            {/* Left Large Exterior Photo (888px x 590px on 1440px desktop) */}
            <div className="relative lg:col-span-8 h-[340px] sm:h-[460px] md:h-[520px] lg:h-[590px] rounded-[10px] overflow-hidden group">
              <Image
                src="/images/ValenciaPage/HeroSection/ValenciaGallery1.png"
                alt="Valencia Luxury Boutique Hotel illuminated dusk view"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 888px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Right Column of 2 Interior Photos */}
            <div className="lg:col-span-4 flex flex-col gap-2 sm:gap-[10px] h-auto lg:h-[590px]">
              {/* Top Interior Image (Lobby) */}
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[290px] rounded-[10px] overflow-hidden group shrink-0">
                <Image
                  src="/images/ValenciaPage/HeroSection/ValenciaGallery2.png"
                  alt="Valencia Grand Lobby with chandelier"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 492px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Interior Image (Bedroom / Suite with clickable View Gallery area) */}
              <div
                onClick={() => onOpenGallery && onOpenGallery(0)}
                className="relative w-full h-[220px] sm:h-[260px] lg:h-[290px] rounded-[10px] overflow-hidden group shrink-0 cursor-pointer"
                title="View Gallery"
              >
                <Image
                  src="/images/ValenciaPage/HeroSection/ValenciaGallery3.png"
                  alt="Valencia Luxury Bedroom Suite"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 492px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenGallery && onOpenGallery(0);
                  }}
                  aria-label="View Gallery"
                  className="absolute bottom-3 right-3 w-[160px] h-[48px] rounded-[8px] opacity-0 cursor-pointer focus-visible:opacity-100 focus-visible:bg-white/80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

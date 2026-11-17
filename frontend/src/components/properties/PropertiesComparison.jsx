"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "Property type",
    valencia: "Luxury boutique hotel",
    umrao: "Banquet venue",
    jia: "Budget hotel",
  },
  {
    feature: "Best for",
    valencia: "Boutique stays, dining & meetings",
    umrao: "Weddings, celebrations & events",
    jia: "Practical city stays",
  },
  {
    feature: "Rooms & spaces",
    valencia: "Deluxe, Twin, Suite &\nPresidential Suite",
    umrao: "Main hall, lawn & smaller hall",
    jia: "36 rooms across 4 categories",
  },
  {
    feature: "Highlights",
    valencia: "Italian-inspired design",
    umrao: "Indoor & outdoor event spaces",
    jia: "Free Wi-Fi, parking & EV charging",
  },
  {
    feature: "Status",
    valencia: "Planned",
    umrao: "Operational",
    jia: "Operational",
  },
  {
    feature: "Booking or enquiry",
    valencia: "Booking availability to be confirmed",
    umrao: "Event enquiry",
    jia: "Contact for booking options",
  },
];

export default function PropertiesComparison() {
  const [selectedMobileTab, setSelectedMobileTab] = useState("valencia");

  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="relative w-full bg-[#FAF7EE] py-12 sm:py-14 md:py-16 border-b border-black/5"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px] flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 sm:gap-3 max-w-[900px] mb-8 sm:mb-10 md:mb-12">
          <span className="font-body font-semibold text-[13px] sm:text-[14px] leading-[20px] tracking-[0.28em] sm:tracking-[0.38em] text-[#C09B59] uppercase">
            COMPARE OUR PROPERTIES
          </span>
          <h2
            id="compare-heading"
            className="font-display font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[51px] leading-[1.18] sm:leading-[1.22] text-[#174B34]"
          >
            Find the right fit for your visit.
          </h2>
          <p className="font-body font-normal text-[16px] sm:text-[19px] md:text-[21px] leading-[26px] sm:leading-[29px] text-[#745B48]">
            Compare our stays and event spaces at a glance.
          </p>
        </div>

        {/* --- DESKTOP / TABLET COMPARISON TABLE (md screens and up) --- */}
        <div className="hidden md:block w-full max-w-[1320px] overflow-x-auto comparison-table-wrapper no-scrollbar rounded-[6px] border border-[#DCCBAE] shadow-[0_4px_24px_rgba(27,45,35,0.04)] bg-[#FAF7F0]">
          <div className="min-w-[980px] w-full flex flex-col">
            {/* Header Row */}
            <div className="grid grid-cols-[244px_384px_346px_346px] w-full h-[72px]">
              {/* Cell 0/0 (Empty / Label placeholder) */}
              <div className="bg-[#204B36] border-[0.5px] border-[#E3D9C8]/40 flex items-center px-6" />

              {/* Cell 0/1 (Valencia) */}
              <div className="bg-[#204B36] border-[0.5px] border-[#E3D9C8]/40 flex flex-col justify-center items-center px-4">
                <span className="font-display font-normal text-[22px] lg:text-[25px] leading-[31px] tracking-[0.07em] text-[#F8F5EA] text-center">
                  VALENCIA
                </span>
              </div>

              {/* Cell 0/2 (Umrao) */}
              <div className="bg-[#204B36] border-[0.5px] border-[#E3D9C8]/40 flex items-center justify-center px-4">
                <span className="font-display font-normal text-[21px] lg:text-[24px] leading-[31px] text-[#F8F5EA] text-center">
                  Umrao The Banquet
                </span>
              </div>

              {/* Cell 0/3 (Jia) */}
              <div className="bg-[#204B36] border-[0.5px] border-[#E3D9C8]/40 flex items-center justify-center px-4">
                <span className="font-display font-normal text-[21px] lg:text-[24px] leading-[31px] text-[#F8F5EA] text-center">
                  Hotel Jia International
                </span>
              </div>
            </div>

            {/* Content Rows */}
            {COMPARISON_ROWS.map((row, idx) => {
              const isEven = idx % 2 === 0;
              const labelBg = isEven ? "bg-[#FAF7F0]" : "bg-[#F5F1E8]";
              const valenciaBg = isEven ? "bg-[#F8F0DF]" : "bg-[#F5EDDC]";
              const othersBg = isEven ? "bg-[#FAF7F0]" : "bg-[#F5F1E8]";

              return (
                <div
                  key={row.feature}
                  className="grid grid-cols-[244px_384px_346px_346px] w-full min-h-[57px] transition-colors"
                >
                  {/* Row Feature Label */}
                  <div
                    className={`${labelBg} border-[0.5px] border-[#E3D9C8] flex items-center px-6 py-3.5`}
                  >
                    <span className="font-body font-bold text-[16px] lg:text-[17px] leading-[23px] text-[#604A3B]">
                      {row.feature}
                    </span>
                  </div>

                  {/* Valencia Data (Flagship tint) */}
                  <div
                    className={`${valenciaBg} border-[0.5px] border-[#E3D9C8] flex items-center px-6 py-3.5`}
                  >
                    <span className="font-body font-normal text-[15px] lg:text-[17px] leading-[23px] text-[#604A3B] whitespace-pre-line">
                      {row.valencia}
                    </span>
                  </div>

                  {/* Umrao Data */}
                  <div
                    className={`${othersBg} border-[0.5px] border-[#E3D9C8] flex items-center px-6 py-3.5`}
                  >
                    <span className="font-body font-normal text-[15px] lg:text-[17px] leading-[23px] text-[#604A3B]">
                      {row.umrao}
                    </span>
                  </div>

                  {/* Hotel Jia Data */}
                  <div
                    className={`${othersBg} border-[0.5px] border-[#E3D9C8] flex items-center px-6 py-3.5`}
                  >
                    <span className="font-body font-normal text-[15px] lg:text-[17px] leading-[23px] text-[#604A3B]">
                      {row.jia}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Action Row */}
            <div className="grid grid-cols-[244px_384px_346px_346px] w-full h-[78px]">
              {/* Empty Action cell */}
              <div className="bg-[#FAF7F0] border-[0.5px] border-[#E3D9C8] flex items-center px-6" />

              {/* Valencia Action */}
              <div className="bg-[#F8F0DF] border-[0.5px] border-[#E3D9C8] flex items-center justify-center px-6">
                <Link
                  href="#valencia"
                  className="w-full max-w-[328px] h-[42px] bg-[#204B36] hover:bg-[#173828] text-[#F8F5EA] rounded-[5px] flex items-center justify-center gap-2 font-body font-bold text-[14px] lg:text-[15px] leading-[20px] tracking-[0.12em] uppercase transition-colors group/btn shadow-sm"
                >
                  <span>VIEW STAY</span>
                  <ArrowRight
                    size={15}
                    className="stroke-[2.5] group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Umrao Action */}
              <div className="bg-[#FAF7F0] border-[0.5px] border-[#E3D9C8] flex items-center justify-center px-6">
                <Link
                  href="/umrao"
                  className="w-full max-w-[290px] h-[42px] bg-[#204B36] hover:bg-[#173828] text-[#F8F5EA] rounded-[5px] flex items-center justify-center gap-2 font-body font-bold text-[14px] lg:text-[15px] leading-[20px] tracking-[0.12em] uppercase transition-colors group/btn shadow-sm"
                >
                  <span>ENQUIRE</span>
                  <ArrowRight
                    size={15}
                    className="stroke-[2.5] group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Hotel Jia Action */}
              <div className="bg-[#FAF7F0] border-[0.5px] border-[#E3D9C8] flex items-center justify-center px-6">
                <Link
                  href="/hotel-jia"
                  className="w-full max-w-[290px] h-[42px] bg-[#204B36] hover:bg-[#173828] text-[#F8F5EA] rounded-[5px] flex items-center justify-center gap-2 font-body font-bold text-[14px] lg:text-[15px] leading-[20px] tracking-[0.12em] uppercase transition-colors group/btn shadow-sm"
                >
                  <span>VIEW HOTEL</span>
                  <ArrowRight
                    size={15}
                    className="stroke-[2.5] group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE RESPONSIVE COMPARISON VIEW (< md screens) --- */}
        <div className="md:hidden w-full flex flex-col gap-5">
          {/* Mobile Selector Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-lg bg-[#EAE3D2] border border-[#DECFB3]">
            <button
              type="button"
              onClick={() => setSelectedMobileTab("valencia")}
              className={`py-2 px-1 text-center rounded-md font-body text-[12.5px] font-bold transition-all ${selectedMobileTab === "valencia"
                  ? "bg-[#204B36] text-[#F8F5EA] shadow-sm"
                  : "text-[#604A3B] hover:text-[#204B36]"
                }`}
            >
              VALENCIA
            </button>
            <button
              type="button"
              onClick={() => setSelectedMobileTab("umrao")}
              className={`py-2 px-1 text-center rounded-md font-body text-[12.5px] font-bold transition-all ${selectedMobileTab === "umrao"
                  ? "bg-[#204B36] text-[#F8F5EA] shadow-sm"
                  : "text-[#604A3B] hover:text-[#204B36]"
                }`}
            >
              Umrao Banquet
            </button>
            <button
              type="button"
              onClick={() => setSelectedMobileTab("jia")}
              className={`py-2 px-1 text-center rounded-md font-body text-[12.5px] font-bold transition-all ${selectedMobileTab === "jia"
                  ? "bg-[#204B36] text-[#F8F5EA] shadow-sm"
                  : "text-[#604A3B] hover:text-[#204B36]"
                }`}
            >
              Hotel Jia
            </button>
          </div>

          {/* Active Property Card */}
          <div className="w-full rounded-[8px] border border-[#DCCBAE] bg-[#FCFAF5] overflow-hidden shadow-sm">
            {/* Header banner */}
            <div className="bg-[#204B36] text-[#F8F5EA] p-4 text-center">
              <h3 className="font-display font-bold text-[22px]">
                {selectedMobileTab === "valencia"
                  ? "VALENCIA"
                  : selectedMobileTab === "umrao"
                    ? "Umrao The Banquet"
                    : "Hotel Jia International"}
              </h3>
              {selectedMobileTab === "valencia" && (
                <span className="font-body text-[10px] tracking-[0.2em] text-[#E2BA6D] uppercase font-bold">
                  OUR FLAGSHIP
                </span>
              )}
            </div>

            {/* List of features */}
            <div className="divide-y divide-[#E3D9C8]">
              {COMPARISON_ROWS.map((row) => {
                const value =
                  selectedMobileTab === "valencia"
                    ? row.valencia
                    : selectedMobileTab === "umrao"
                      ? row.umrao
                      : row.jia;

                return (
                  <div key={row.feature} className="p-4 flex flex-col gap-1">
                    <span className="font-body font-bold text-[13px] tracking-wide text-[#806E50] uppercase">
                      {row.feature}
                    </span>
                    <span className="font-body font-medium text-[15px] text-[#233028] whitespace-pre-line">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action button */}
            <div className="p-4 bg-[#F8F0DF]">
              <Link
                href={
                  selectedMobileTab === "valencia"
                    ? "#valencia"
                    : selectedMobileTab === "umrao"
                      ? "/umrao"
                      : "/hotel-jia"
                }
                className="w-full h-[46px] bg-[#204B36] text-[#F8F5EA] rounded-[5px] flex items-center justify-center gap-2 font-body font-bold text-[14px] tracking-[0.12em] uppercase"
              >
                <span>
                  {selectedMobileTab === "valencia"
                    ? "VIEW STAY"
                    : selectedMobileTab === "umrao"
                      ? "ENQUIRE"
                      : "VIEW HOTEL"}
                </span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


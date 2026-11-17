"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const LOCATIONS = [
  {
    id: "valencia",
    name: "VALENCIA",
    type: "Luxury Boutique Hotel",
    address: "Patna · Exact location to be confirmed",
    statusBadge: "FLAGSHIP · PLANNED",
    statusNote: "Location announcement coming soon",
    isValencia: true,
  },
  {
    id: "umrao",
    name: "Umrao The Banquet",
    type: "Banquet & Celebration Venue",
    address: "Zero Mile, Masaurhi Road, Patna 800007",
    statusBadge: "OPERATIONAL · OPEN FOR EVENTS",
    statusNote: "Zero Mile, Masaurhi Road",
    isValencia: false,
  },
  {
    id: "jia",
    name: "Hotel Jia International",
    type: "Practical City Stays",
    address: "Fraser Road, opposite Buddha Smriti Park, Patna",
    statusBadge: "OPERATIONAL · BOOKINGS OPEN",
    statusNote: "Fraser Road, near Railway Station",
    isValencia: false,
  },
];

export default function PatnaLocationsMap() {
  const [activeLocation, setActiveLocation] = useState("valencia");

  const currentLoc = LOCATIONS.find((l) => l.id === activeLocation) || LOCATIONS[0];

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="relative w-full bg-[#FAF7EE] py-12 sm:py-14 md:py-16 border-b border-black/5"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[85px] flex flex-col gap-8 sm:gap-10">
        {/* Header Block */}
        <div className="flex flex-col items-start gap-2 sm:gap-3 max-w-[900px]">
          <div className="flex items-center gap-3">
            <span className="font-body font-semibold text-[12.5px] sm:text-[13px] leading-[18px] tracking-[0.25em] text-[#745B48] uppercase">
              FIND US IN PATNA
            </span>
            <div className="w-[44px] sm:w-[52px] h-[1px] bg-[#BDA985]" aria-hidden="true" />
          </div>

          <h2
            id="locations-heading"
            className="font-display font-bold text-[34px] sm:text-[44px] md:text-[50px] lg:text-[55px] leading-[1.18] sm:leading-[1.22] text-[#174B34]"
          >
            Three destinations. One city.
          </h2>

          <p className="font-body font-normal text-[16px] sm:text-[19px] md:text-[22px] leading-[26px] sm:leading-[31px] text-[#745B48]">
            Explore our locations and plan your visit.
          </p>
        </div>

        {/* 2-Column Content: Left Locations List, Right Map Box */}
        <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 xl:gap-[30px] items-start w-full">
          {/* Left Column: Location Cards */}
          <div className="flex flex-col gap-4 w-full">
            {LOCATIONS.map((loc) => {
              const isActive = activeLocation === loc.id;

              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setActiveLocation(loc.id)}
                  className={`group relative text-left w-full rounded-[8px] transition-all duration-200 overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-[#204D36] border border-[#C9A96A] shadow-[0_6px_20px_rgba(32,77,54,0.18)]"
                      : "bg-[#FAF7EE] hover:bg-[#F6EFE3] border border-[#D4C5AC]"
                  }`}
                  aria-pressed={isActive}
                >
                  {/* Left Gold Selection Accent Strip */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#C9A66A]"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-center gap-5 sm:gap-6 py-4 sm:py-5 pl-7 sm:pl-9 pr-5">
                    {/* Map Pin Icon in Gold */}
                    <div className="flex items-center justify-center shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                          isActive
                            ? "border-[#B99B62] bg-[#275c41] text-[#E8DCC9]"
                            : "border-[#B99B62]/80 bg-[#EAE1CE]/60 text-[#745B48]"
                        }`}
                      >
                        <MapPin size={20} className="stroke-[1.75]" />
                      </div>
                    </div>

                    {/* Vertical Icon Separator Line */}
                    <div
                      className={`w-[1px] shrink-0 transition-colors ${
                        loc.isValencia ? "h-[68px] sm:h-[74px]" : "h-[52px] sm:h-[57px]"
                      } ${isActive ? "bg-[#A5AD8C]" : "bg-[#D9C6A3]"}`}
                      aria-hidden="true"
                    />

                    {/* Copy */}
                    <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 pr-2">
                      <h3
                        className={`font-display text-[22px] sm:text-[26px] lg:text-[29px] leading-[1.25] transition-colors truncate ${
                          isActive
                            ? "font-normal text-[#F8F5EA]"
                            : "font-bold text-[#174B34]"
                        }`}
                      >
                        {loc.name}
                      </h3>
                      <div
                        className={`font-body text-[13.5px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[22px] transition-colors ${
                          isActive ? "text-[#E4E3CC]" : "text-[#745B48]"
                        }`}
                      >
                        {loc.isValencia ? (
                          <>
                            <span className="block">{loc.type}</span>
                            <span
                              className={`block text-[13px] sm:text-[14px] ${
                                isActive ? "text-[#E4E3CC]/90" : "text-[#745B48]"
                              }`}
                            >
                              {loc.address}
                            </span>
                          </>
                        ) : (
                          <span className={isActive ? "text-[#E4E3CC]" : "text-[#745B48]"}>
                            {loc.address}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Link: CONTACT OUR TEAM → */}
            <div className="pt-2 sm:pt-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 font-body font-semibold text-[12px] sm:text-[13px] leading-[20px] tracking-[0.2em] text-[#745B48] hover:text-[#174B34] transition-colors uppercase relative pb-1"
              >
                <span>CONTACT OUR TEAM</span>
                <ArrowRight
                  size={15}
                  className="stroke-[2.5] group-hover:translate-x-1 transition-transform"
                />
                <span
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C3A366]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Property Map Container */}
          <div className="flex flex-col gap-2 w-full">
            <div className="relative w-full min-h-[380px] sm:min-h-[420px] lg:h-[444px] rounded-[8px] border border-[#C9A96A] bg-[#F0ECE1] overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-[inset_0_2px_12px_rgba(0,0,0,0.03)]">
              {/* Subtle Geometric Street Map Line SVG Pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.22]"
                aria-hidden="true"
              >
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 740 444"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="90" x2="740" y2="120" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="0" y1="240" x2="740" y2="210" stroke="#FFFFFF" strokeWidth="8" />
                  <line x1="0" y1="360" x2="740" y2="340" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="140" y1="0" x2="160" y2="444" stroke="#FFFFFF" strokeWidth="7" />
                  <line x1="380" y1="0" x2="360" y2="444" stroke="#FFFFFF" strokeWidth="9" />
                  <line x1="590" y1="0" x2="620" y2="444" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="40" y1="30" x2="700" y2="420" stroke="#B99B62" strokeWidth="2" strokeDasharray="6 6" />
                  <line x1="700" y1="40" x2="80" y2="410" stroke="#B99B62" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="370" cy="220" r="140" stroke="#FFFFFF" strokeWidth="4" />
                  <circle cx="370" cy="220" r="80" stroke="#FFFFFF" strokeWidth="3" />
                  <circle cx="370" cy="220" r="6" fill="#174B34" />
                </svg>
              </div>

              {/* Map Content Center Card */}
              <div className="relative z-10 flex flex-col items-center gap-3.5 max-w-[560px]">
                {/* Folded Map SVG Icon */}
                <div className="w-[62px] h-[62px] rounded-full bg-[#EAE1CE]/80 border-2 border-[#B99B62] flex items-center justify-center text-[#B99B62] shadow-sm">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B99B62"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" y1="3" x2="9" y2="18" />
                    <line x1="15" y1="6" x2="15" y2="21" />
                  </svg>
                </div>

                {/* Map Title */}
                <h3 className="font-display font-bold text-[28px] sm:text-[32px] lg:text-[34px] leading-[1.25] text-[#174B34]">
                  Property map
                </h3>

                {/* Subtitle with active location feedback */}
                <p className="font-body font-normal text-[15px] sm:text-[17px] leading-[24px] text-[#745B48]">
                  Verified property locations will appear here.
                </p>

                {/* Currently selected location pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF5] border border-[#DECFB3] shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#B99B62] animate-pulse" />
                  <span className="font-body font-bold text-[12px] text-[#174B34]">
                    Selected: {currentLoc.name}
                  </span>
                  <span className="text-[#B99B62] text-[12px]">·</span>
                  <span className="font-body text-[11.5px] text-[#745B48]">
                    {currentLoc.statusNote}
                  </span>
                </div>

                {currentLoc.id === "umrao" && (
                  <Link
                    href="/umrao"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#174B34] text-[#FAF6EC] font-body font-bold text-[12px] hover:bg-[#123d2a] transition-colors mt-1 shadow-xs"
                  >
                    <span>Explore Umrao The Banquet</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
                {currentLoc.id === "jia" && (
                  <Link
                    href="/hotel-jia"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#174B34] text-[#FAF6EC] font-body font-bold text-[12px] hover:bg-[#123d2a] transition-colors mt-1 shadow-xs"
                  >
                    <span>Explore Hotel Jia International</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
                {currentLoc.id === "valencia" && (
                  <Link
                    href="/valencia"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#174B34] text-[#FAF6EC] font-body font-bold text-[12px] hover:bg-[#123d2a] transition-colors mt-1 shadow-xs"
                  >
                    <span>Explore Valencia Hotel</span>
                    <ArrowRight size={13} />
                  </Link>
                )}

                {/* Badge: MAP PREVIEW · LOCATIONS PENDING */}
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-[8px] bg-[#EAE1CE] border border-[#C9A96A]/40 mt-1">
                  <span className="font-body font-bold text-[9px] sm:text-[10px] leading-[15px] tracking-[0.2em] text-[#745B48] uppercase">
                    MAP PREVIEW · LOCATIONS PENDING
                  </span>
                </div>
              </div>
            </div>

            {/* Note below map */}
            <p className="font-body font-normal text-[12px] sm:text-[13px] leading-[18px] text-[#A58A68] text-center lg:text-left pt-1">
              Directions will be available once locations are confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


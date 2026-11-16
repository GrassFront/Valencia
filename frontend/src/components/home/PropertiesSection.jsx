"use client";

import Image from "next/image";
import Link from "next/link";

const AMENITIES = [
  {
    label: "Luxury Rooms & Suites",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M4 8V18M4 14H20M20 11V18"
          stroke="#B68D57"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="6.5"
          y="10"
          width="4.5"
          height="3"
          rx="1"
          stroke="#B68D57"
          strokeWidth="1.2"
        />
        <rect
          x="13"
          y="10"
          width="4.5"
          height="3"
          rx="1"
          stroke="#B68D57"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    label: "Fine Dining",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M7 4V9C7 10.1 7.9 11 9 11V20M6 4V8M10 4V8"
          stroke="#B68D57"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 4C15.5 5.5 15 8 15 11V20M15 11H18C18 7 17 4 17 4Z"
          stroke="#B68D57"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Events & Celebrations",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <circle cx="10" cy="14" r="4.5" stroke="#B68D57" strokeWidth="1.4" />
        <circle cx="15" cy="14" r="4.5" stroke="#B68D57" strokeWidth="1.4" />
        <path
          d="M15 6L15.6 7.6L17.2 8.2L15.6 8.8L15 10.4L14.4 8.8L12.8 8.2L14.4 7.6L15 6Z"
          fill="#B68D57"
        />
      </svg>
    ),
  },
  {
    label: "Meetings & Conferences",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M3 8L12 3L21 8H3Z"
          stroke="#B68D57"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <line x1="6" y1="11" x2="6" y2="18" stroke="#B68D57" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="10" y1="11" x2="10" y2="18" stroke="#B68D57" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="14" y1="11" x2="14" y2="18" stroke="#B68D57" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="18" y1="11" x2="18" y2="18" stroke="#B68D57" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="3" y1="19" x2="21" y2="19" stroke="#B68D57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function PropertiesSection() {
  return (
    <section
      id="properties"
      aria-labelledby="collection-heading"
      className="relative w-full bg-[#F7F3EA] border-b border-black/[0.06] overflow-hidden"
    >
      {/* Main Container: 1440px Figma Frame */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-8 2xl:px-[58px] py-10 sm:py-12 xl:py-[44px] flex flex-col items-center gap-6 sm:gap-7 xl:gap-[24px]">
        {/* Decorative architectural crop - Left watermark */}
        <div className="absolute left-0 top-0 w-[120px] sm:w-[160px] xl:w-[190px] h-[150px] sm:h-[190px] xl:h-[217px] pointer-events-none select-none z-0">
          <Image
            src="/icon/homepage/propertiesSection_left.png"
            alt=""
            fill
            sizes="(max-width: 640px) 120px, 190px"
            className="object-contain object-left-top opacity-35 sm:opacity-45 xl:opacity-50"
            aria-hidden="true"
          />
        </div>

        {/* Decorative architectural crop - Right watermark */}
        <div className="absolute right-0 top-0 w-[120px] sm:w-[160px] xl:w-[192px] h-[150px] sm:h-[190px] xl:h-[217px] pointer-events-none select-none z-0">
          <Image
            src="/icon/homepage/propertiesSection_right.png"
            alt=""
            fill
            sizes="(max-width: 640px) 120px, 192px"
            className="object-contain object-right-top opacity-35 sm:opacity-45 xl:opacity-50"
            aria-hidden="true"
          />
        </div>

        {/* Section Heading Group */}
        <div className="relative z-10 flex flex-col items-center text-center gap-1.5 sm:gap-2 max-w-[1334px] w-full">
          {/* Eyebrow with rules */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-[540px]">
            <span
              className="h-[1px] w-8 sm:w-16 md:w-[134px] bg-[#C9A96A] shrink-0"
              aria-hidden="true"
            />
            <span className="font-body font-semibold text-[12px] sm:text-[13.5px] xl:text-[14px] leading-[24px] tracking-[0.28em] sm:tracking-[0.35em] text-[#AD824C] uppercase whitespace-nowrap">
              OUR PROPERTIES
            </span>
            <span
              className="h-[1px] w-8 sm:w-16 md:w-[134px] bg-[#C9A96A] shrink-0"
              aria-hidden="true"
            />
          </div>

          {/* Title */}
          <h2
            id="collection-heading"
            className="font-display font-normal text-[32px] sm:text-[44px] md:text-[52px] xl:text-[62px] leading-[1.12] xl:leading-[77px] text-center"
          >
            <span className="text-[#203C35]">Discover Our </span>
            <span className="italic text-[#AD824C]">Collection.</span>
          </h2>

          {/* Subtitle - Centered exactly on 2 lines matching Figma */}
          <p className="font-body font-normal text-[13.5px] sm:text-[15.5px] xl:text-[16px] leading-[22px] sm:leading-[24px] text-[#526362] text-center max-w-[720px] mx-auto text-balance px-2">
            Three distinctive properties, each crafted with the same commitment to exceptional hospitality,
            <br className="hidden sm:inline" />
            {" "}offering unique experiences for every occasion.
          </p>
        </div>

        {/* Property Collection Cards Row: Fluid and responsive on desktop (1280px-1440px+) */}
        <div className="relative z-10 w-full max-w-[1334px] flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:justify-between gap-6 xl:gap-[10px] xl:h-[521px]">
          {/* ============================================================== */}
          {/* Flagship Card: Valencia (Fluid: flex-[1.433] max-w-[774px]) */}
          {/* ============================================================== */}
          <article className="group w-full max-w-[774px] xl:flex-[1.433] xl:max-w-[774px] xl:h-[521px] min-w-0 bg-[#FAF7F0] border border-black/10 rounded-[5px] flex flex-col overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            {/* Exterior Photograph: exactly 315px on desktop */}
            <div className="relative w-full h-[220px] sm:h-[280px] xl:h-[315px] xl:shrink-0 overflow-hidden bg-[#E8DCC9]/20">
              <Image
                src="/images/homepage/homepage_valencia.png"
                alt="Valencia - Neoclassical boutique luxury hotel exterior illuminated at dusk"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 680px, 774px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Valencia Details: exactly 206px on desktop */}
            <div className="w-full xl:h-[206px] flex-1 flex flex-col md:flex-row items-start justify-between pt-3.5 sm:pt-[10px] pb-4 sm:pb-3.5 px-4 sm:px-6 xl:pl-[22px] 2xl:pl-[24px] xl:pr-4 2xl:pr-[20px] gap-3 sm:gap-4 box-border min-w-0">
              {/* Flagship Description */}
              <div className="flex flex-col items-start justify-between flex-1 min-w-0 h-full max-w-[490px]">
                <div className="flex flex-col items-start gap-1">
                  {/* Property name */}
                  <h3 className="font-display font-normal text-[26px] sm:text-[30px] xl:text-[34px] leading-[30px] sm:leading-[36px] xl:leading-[41px] text-[#242B25]">
                    VALENCIA
                  </h3>

                  {/* Tagline */}
                  <span className="font-body font-semibold text-[10px] xl:text-[11px] leading-[18px] xl:leading-[20px] tracking-[0.32em] xl:tracking-[0.37em] text-[#AD824C] uppercase">
                    A LUXURY BOUTIQUE HOTEL
                  </span>

                  {/* Description */}
                  <p className="font-body font-normal text-[12px] xl:text-[13px] leading-[16px] xl:leading-[19px] text-[#6B7676] max-w-[480px]">
                    An exquisite stay experience with Italian-inspired architecture, refined interiors and warm hospitality. Designed for travellers who seek elegance, comfort and meaningful moments.
                  </p>
                </div>

                {/* Button / VIEW STAY */}
                <div className="pt-2">
                  <Link
                    href="/valencia"
                    className="inline-flex h-[38px] xl:h-[43px] w-[170px] xl:w-[186px] items-center justify-center gap-2.5 bg-[#1B4D32] text-[#F8F5EA] rounded-[2px] transition-colors duration-200 hover:bg-[#153e28] active:bg-[#0f2c1c]"
                  >
                    <span className="font-body font-semibold text-[10px] leading-[20px] tracking-[0.18em] uppercase whitespace-nowrap">
                      VIEW STAY
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12"
                        stroke="#F8F5EA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Amenities Column */}
              <div className="flex flex-col items-start justify-center gap-2 sm:gap-2.5 xl:gap-[11px] 2xl:gap-[12px] w-full md:w-[195px] xl:w-[205px] 2xl:w-[225px] xl:h-[160px] shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#C9A96A]/30">
                {AMENITIES.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 w-full"
                  >
                    {item.icon}
                    <span className="font-body font-normal text-[11.5px] xl:text-[12px] leading-[22px] xl:leading-[24px] text-[#6B7676] whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* ============================================================== */}
          {/* Other Properties Column: UMRAO & HOTEL JIA (Fluid: flex-1 max-w-[540px]) */}
          {/* ============================================================== */}
          <div className="w-full max-w-[774px] xl:flex-1 xl:max-w-[540px] xl:h-[521px] min-w-0 flex flex-col justify-between gap-4 sm:gap-5 xl:gap-[10px]">
            {/* ------------------------------------------------------------ */}
            {/* Card 1: UMRAO THE BANQUET */}
            {/* ------------------------------------------------------------ */}
            <article className="group w-full xl:h-[255.5px] xl:flex-1 bg-[#FAF7F0] border border-black/10 rounded-[5px] flex flex-col sm:flex-row overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] min-w-0">
              {/* UMRAO Photograph: 50% fluid width */}
              <div className="relative w-full sm:w-1/2 xl:w-1/2 h-[190px] sm:h-auto sm:min-h-full xl:h-full overflow-hidden shrink-0 bg-[#E8DCC9]/20">
                <Image
                  src="/images/homepage/homepage_umrao.png"
                  alt="Umrao The Banquet - Opulent wedding reception ballroom with crystal chandelier"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 270px, 270px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* UMRAO Details: 50% fluid width */}
              <div className="w-full sm:w-1/2 xl:w-1/2 flex-1 flex flex-col items-start justify-between pt-3 sm:pt-[12px] xl:pt-[14px] pb-3 sm:pb-[12px] xl:pb-[14px] pl-4 sm:pl-5 xl:pl-[18px] 2xl:pl-[24px] pr-3 xl:pr-3.5 2xl:pr-[15px] box-border min-w-0">
                {/* Top Details Group */}
                <div className="flex flex-col items-start gap-0.5 sm:gap-1 w-full min-w-0">
                  {/* Operational Badge */}
                  <span className="inline-flex items-center justify-center h-[22px] xl:h-[24px] px-2.5 bg-[#E7E7DF] rounded-[3px] font-body font-semibold text-[9px] leading-[22px] xl:leading-[24px] tracking-[0.1em] text-[#405A52] uppercase shrink-0">
                    OPERATIONAL
                  </span>

                  {/* Property Name */}
                  <div className="flex flex-col items-start pt-0.5 min-w-0">
                    <h3 className="font-display font-normal text-[22px] sm:text-[25px] xl:text-[27px] 2xl:text-[29px] leading-[26px] sm:leading-[30px] xl:leading-[32px] text-[#242B25] truncate max-w-full">
                      UMRAO
                    </h3>
                    <span className="font-display font-normal text-[16px] sm:text-[19px] xl:text-[20px] 2xl:text-[22px] leading-[20px] sm:leading-[23px] xl:leading-[25px] text-[#242B25] truncate max-w-full">
                      THE BANQUET
                    </span>
                  </div>

                  {/* Gold Divider: 30px x 1px */}
                  <span className="w-[30px] h-[1px] bg-[#C9A96A] my-0.5 xl:my-1" aria-hidden="true" />

                  {/* Description */}
                  <p className="font-body font-normal text-[11px] sm:text-[11.5px] xl:text-[12px] 2xl:text-[13px] leading-[15px] sm:leading-[16px] xl:leading-[17px] text-[#6B7676] max-w-[245px]">
                    Elegant venues for weddings, receptions and grand celebrations, with personalized service and refined décor.
                  </p>
                </div>

                {/* Button / ENQUIRE NOW */}
                <div className="pt-1 w-full">
                  <Link
                    href="#events"
                    className="inline-flex h-[32px] sm:h-[34px] w-full max-w-[214px] items-center justify-center gap-2 border border-[#B68D57] rounded-[2px] text-[#B68D57] hover:bg-[#B68D57] hover:text-[#FAF7F0] transition-colors duration-200"
                  >
                    <span className="font-body font-semibold text-[9px] sm:text-[9.5px] 2xl:text-[10px] leading-[20px] tracking-[0.14em] sm:tracking-[0.18em] uppercase whitespace-nowrap">
                      ENQUIRE NOW
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>

            {/* ------------------------------------------------------------ */}
            {/* Card 2: HOTEL JIA INTERNATIONAL */}
            {/* ------------------------------------------------------------ */}
            <article className="group w-full xl:h-[255.5px] xl:flex-1 bg-[#FAF7F0] border border-black/10 rounded-[5px] flex flex-col sm:flex-row overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] min-w-0">
              {/* HOTEL JIA Photograph: 50% fluid width */}
              <div className="relative w-full sm:w-1/2 xl:w-1/2 h-[190px] sm:h-auto sm:min-h-full xl:h-full overflow-hidden shrink-0 bg-[#E8DCC9]/20">
                <Image
                  src="/images/homepage/homepage_hotelJIA.png"
                  alt="Hotel JIA International - Contemporary hotel facade with warm illuminated entrance"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 270px, 270px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* HOTEL JIA Details: 50% fluid width */}
              <div className="w-full sm:w-1/2 xl:w-1/2 flex-1 flex flex-col items-start justify-between pt-3 sm:pt-[12px] xl:pt-[14px] pb-3 sm:pb-[12px] xl:pb-[14px] pl-4 sm:pl-5 xl:pl-[18px] 2xl:pl-[24px] pr-3 xl:pr-3.5 2xl:pr-[15px] box-border min-w-0">
                {/* Top Details Group */}
                <div className="flex flex-col items-start gap-0.5 sm:gap-1 w-full min-w-0">
                  {/* Operational Badge */}
                  <span className="inline-flex items-center justify-center h-[22px] xl:h-[24px] px-2.5 bg-[#E7E7DF] rounded-[3px] font-body font-semibold text-[9px] leading-[22px] xl:leading-[24px] tracking-[0.1em] text-[#405A52] uppercase shrink-0">
                    OPERATIONAL
                  </span>

                  {/* Property Name */}
                  <div className="flex flex-col items-start pt-0.5 min-w-0">
                    <h3 className="font-display font-normal text-[22px] sm:text-[25px] xl:text-[27px] 2xl:text-[29px] leading-[26px] sm:leading-[30px] xl:leading-[32px] text-[#242B25] truncate max-w-full">
                      HOTEL JIA
                    </h3>
                    <span className="font-display font-normal text-[16px] sm:text-[19px] xl:text-[20px] 2xl:text-[22px] leading-[20px] sm:leading-[23px] xl:leading-[25px] text-[#242B25] truncate max-w-full">
                      INTERNATIONAL
                    </span>
                  </div>

                  {/* Gold Divider: 30px x 1px */}
                  <span className="w-[30px] h-[1px] bg-[#C9A96A] my-0.5 xl:my-1" aria-hidden="true" />

                  {/* Description */}
                  <p className="font-body font-normal text-[11px] sm:text-[11.5px] xl:text-[12px] 2xl:text-[13px] leading-[15px] sm:leading-[16px] xl:leading-[17px] text-[#6B7676] max-w-[245px]">
                    A comfortable and practical stay for business and leisure travellers, with modern amenities and convenient access.
                  </p>
                </div>

                {/* Button / VIEW HOTEL */}
                <div className="pt-1 w-full">
                  <Link
                    href="#properties"
                    className="inline-flex h-[32px] sm:h-[34px] w-full max-w-[214px] items-center justify-center gap-2 border border-[#B68D57] rounded-[2px] text-[#B68D57] hover:bg-[#B68D57] hover:text-[#FAF7F0] transition-colors duration-200"
                  >
                    <span className="font-body font-semibold text-[9px] sm:text-[9.5px] 2xl:text-[10px] leading-[20px] tracking-[0.14em] sm:tracking-[0.18em] uppercase whitespace-nowrap">
                      VIEW HOTEL
                    </span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

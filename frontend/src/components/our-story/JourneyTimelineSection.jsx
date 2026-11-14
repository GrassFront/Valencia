"use client";

import Image from "next/image";

const MILESTONES = [
  {
    year: "2014",
    title: "A warm beginning",
    property: "HOTEL JIA INTERNATIONAL",
    line1: "Our journey began with a simple idea:",
    line2: "comfortable city stays and a personal",
    line3: "welcome for every guest arriving in Patna.",
    illustrationSrc: "/images/OurStory/storyIcon8.png",
    alt: "Archway architectural illustration",
    width: 280,
    height: 190,
  },
  {
    year: "2019",
    title: "Room to celebrate",
    property: "UMRAO THE BANQUET",
    line1: "That spirit grew into spaces for weddings,",
    line2: "family occasions and gatherings, bringing",
    line3: "people together around meaningful moments.",
    illustrationSrc: "/images/OurStory/storyIcon9.png",
    alt: "Pediment banquet pavilion illustration",
    width: 295,
    height: 190,
  },
  {
    year: "2026",
    title: "A new expression",
    property: "THE VISION FOR VALENCIA",
    line1: "The next chapter imagines boutique",
    line2: "hospitality shaped by Italian-inspired elegance,",
    line3: "thoughtful dining and the warmth of home.",
    illustrationSrc: "/images/OurStory/storyIcon10.png",
    alt: "Corinthian column and villa window illustration",
    width: 230,
    height: 190,
  },
];

export default function JourneyTimelineSection() {
  return (
    <section
      id="our-journey"
      aria-labelledby="journey-heading"
      className="journey-section relative w-full bg-[#4B3523] text-[#F9F6EF] overflow-hidden"
    >
      <div className="journey-container relative w-full max-w-[1440px] mx-auto py-[44px] md:py-[48px] px-6 sm:px-10 md:px-12 xl:px-[90px] flex flex-col gap-[18px]">
        {/* Header Introduction Row */}
        <div className="journey-intro flex flex-col md:flex-row justify-between items-start w-full max-w-[1260px] gap-6">
          {/* Left Title and Subtitle */}
          <div className="journey-intro-left flex flex-col items-start gap-1 max-w-[900px]">
            <span className="journey-eyebrow font-body font-semibold text-[13px] leading-[25px] tracking-[0.4em] text-[#ECC378] uppercase">
              OUR JOURNEY
            </span>
            <h2
              id="journey-heading"
              className="journey-title font-display font-normal text-[36px] sm:text-[46px] md:text-[52px] xl:text-[59px] leading-[1.15] text-[#F9F6EF]"
            >
              A story still unfolding.
            </h2>
            <p className="journey-subtitle font-body font-normal text-[17px] sm:text-[20px] xl:text-[23px] leading-[32px] text-[#E8E0D5]">
              The milestones behind our hospitality family.
            </p>
          </div>

          {/* Right Disclaimer Box */}
          <div className="journey-disclaimer-box flex flex-col items-start md:items-end gap-[3px] text-left md:text-right shrink-0 pt-1.5">
            <span className="journey-disclaimer-label font-body font-semibold text-[11px] leading-[20px] tracking-[0.22em] text-[#ECC378] uppercase">
              ILLUSTRATIVE TIMELINE
            </span>
            <span className="journey-disclaimer-text font-body font-normal text-[12px] leading-[22px] text-[#E8E0D5]">
              Sample dates and story for design purposes.
            </span>
          </div>
        </div>

        {/* Timeline Row with 3 Milestones */}
        <div className="journey-timeline-row relative w-full max-w-[1260px] flex flex-col md:grid md:grid-cols-3 xl:flex xl:flex-row items-center xl:items-start justify-between gap-10 md:gap-6 xl:gap-[20px] mt-4 isolation-isolate">
          {/* Horizontal Golden Connector Line (Desktop XL only to prevent horizontal overflow on tablet) */}
          <div
            className="journey-connector-line hidden xl:block absolute left-[190px] top-[57px] w-[880px] h-[1.5px] bg-[#ECC378] z-0 pointer-events-none"
            aria-hidden="true"
          />

          {MILESTONES.map((milestone) => (
            <div
              key={milestone.year}
              className="journey-milestone relative z-[1] flex flex-col items-center text-center gap-3 w-full max-w-[407px]"
            >
              {/* Year */}
              <span className="journey-year font-body font-semibold text-[21px] sm:text-[23px] leading-[35px] text-[#ECC378]">
                {milestone.year}
              </span>

              {/* Milestone Circle Node */}
              <div
                className="journey-node relative z-[2] w-[21px] h-[21px] rounded-full bg-[#4B3523] border-[1.5px] border-[#ECC378] shrink-0"
                aria-hidden="true"
              />

              {/* Milestone Title */}
              <h3 className="journey-milestone-title font-display font-normal text-[22px] sm:text-[25px] xl:text-[30px] leading-[36px] sm:leading-[40px] text-[#F9F6EF]">
                {milestone.title}
              </h3>

              {/* Property Label */}
              <span className="journey-property-label font-body font-semibold text-[10px] sm:text-[11px] xl:text-[12px] leading-[25px] tracking-[0.25em] text-[#ECC378] uppercase">
                {milestone.property}
              </span>

              {/* Milestone Description - exactly 3 lines matching reference */}
              <p className="journey-milestone-desc font-body font-normal text-[14px] sm:text-[15px] leading-[22px] text-[#E8E0D5] max-w-[340px]">
                {milestone.line1}
                <br className="hidden sm:inline" />
                {" "}{milestone.line2}
                <br className="hidden sm:inline" />
                {" "}{milestone.line3}
              </p>

              {/* Architectural Illustration Crop */}
              <div
                className="journey-illustration-wrap mt-auto pt-4 relative flex items-center justify-center opacity-30 pointer-events-none w-full max-w-[280px] h-[160px] sm:h-[190px]"
              >
                <Image
                  src={milestone.illustrationSrc}
                  alt={milestone.alt}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1280px) 240px, 295px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

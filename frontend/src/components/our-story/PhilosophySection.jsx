"use client";

import Image from "next/image";

const PRINCIPLES = [
  {
    iconSrc: "/images/OurStory/storyICon4.png",
    alt: "Warm Hospitality cupped hands icon",
    title: "Warm Hospitality",
    line1: "A thoughtful welcome that",
    line2: "makes every guest feel at ease.",
  },
  {
    iconSrc: "/images/OurStory/storyIcon5.png",
    alt: "Timeless Elegance classical archway icon",
    title: "Timeless Elegance",
    line1: "Italian-inspired spaces with",
    line2: "a sense of warmth and refinement.",
  },
  {
    iconSrc: "/images/OurStory/storyIcon6.png",
    alt: "Thoughtful Care hand holding heart icon",
    title: "Thoughtful Care",
    line1: "Attention to the small details",
    line2: "that make each visit personal.",
  },
  {
    iconSrc: "/images/OurStory/storyIcon7.png",
    alt: "Meaningful Moments star sparkle icon",
    title: "Meaningful Moments",
    line1: "Spaces to connect, celebrate",
    line2: "and create lasting memories.",
  },
];

export default function PhilosophySection() {
  return (
    <section
      id="our-philosophy"
      aria-labelledby="philosophy-heading"
      className="philosophy-section relative w-full bg-[#F9F5EA] overflow-hidden"
    >
      {/* Architectural edge decoration - Left (Classical Roman Arches) */}
      <div
        className="philosophy-edge-left hidden md:block absolute left-0 bottom-0 pointer-events-none z-0 opacity-80 lg:opacity-100"
        aria-hidden="true"
      >
        <Image
          src="/images/OurStory/storyBG2.png"
          alt=""
          width={220}
          height={420}
          className="object-contain object-bottom-left"
        />
      </div>

      {/* Architectural edge decoration - Right (Classical Arch & Cypress) */}
      <div
        className="philosophy-edge-right hidden md:block absolute right-0 bottom-0 pointer-events-none z-0 opacity-80 lg:opacity-100"
        aria-hidden="true"
      >
        <Image
          src="/images/OurStory/storyBG3.png"
          alt=""
          width={235}
          height={420}
          className="object-contain object-bottom-right"
        />
      </div>

      <div className="philosophy-container relative w-full max-w-[1440px] mx-auto flex flex-col items-center pt-[48px] pb-[60px] px-6 sm:px-10 lg:px-12 gap-[40px] md:gap-[46px] isolation-isolate">
        {/* Heading Box */}
        <div className="philosophy-heading-box relative z-[2] w-full max-w-[1200px] flex flex-col items-center text-center gap-[13px]">
          {/* Gold accent line */}
          <div className="philosophy-gold-accent w-[68px] h-[1px] bg-[#BE9549] mb-1" />

          {/* Eyebrow */}
          <span className="philosophy-eyebrow font-body font-semibold text-[13px] sm:text-[14px] leading-[24px] tracking-[0.3em] text-[#6F503A] uppercase">
            OUR PHILOSOPHY
          </span>

          {/* Title - exactly 2 lines */}
          <h2
            id="philosophy-heading"
            className="philosophy-title font-display font-normal text-[32px] sm:text-[42px] md:text-[48px] lg:text-[53px] leading-[1.13] text-[#173E33]"
          >
            Elegance in every detail.
            <br />
            Warmth in every welcome.
          </h2>

          {/* Subtitle - exactly 1 line */}
          <p className="philosophy-subtitle font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[30px] sm:leading-[32px] text-[#795A46] max-w-[850px]">
            The principles that shape the way we welcome, care and create.
          </p>
        </div>

        {/* --- 1. Desktop Layout (lg: >= 1024px): 4 columns with vertical dividers --- */}
        <div className="hidden lg:flex flex-row items-start justify-center w-full max-w-[1256px] relative z-[2]">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="flex flex-row items-center justify-center flex-1"
            >
              <div className="philosophy-item flex flex-col items-center text-center gap-[13px] w-full px-3 xl:px-4">
                {/* 76x76 Icon */}
                <div className="philosophy-icon-wrap relative w-[76px] h-[76px] shrink-0">
                  <Image
                    src={principle.iconSrc}
                    alt={principle.alt}
                    fill
                    sizes="76px"
                    className="object-contain"
                  />
                </div>

                {/* Principle Title */}
                <h3 className="philosophy-item-title font-display font-normal text-[25px] xl:text-[27px] leading-[37px] text-[#173E33]">
                  {principle.title}
                </h3>

                {/* Description - exactly 2 lines */}
                <p className="philosophy-item-desc font-body font-normal text-[15px] xl:text-[16px] leading-[22px] text-[#795A46] max-w-[270px]">
                  {principle.line1}
                  <br />
                  {principle.line2}
                </p>
              </div>

              {/* Vertical divider between columns */}
              {index < PRINCIPLES.length - 1 && (
                <div
                  className="philosophy-v-divider w-[1px] h-[181px] bg-[#DDCDB3] shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* --- 2. Tablet Layout (md: 768px - 1023px): 2x2 Grid with comfortable spacing --- */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-10 gap-y-12 w-full max-w-[720px] relative z-[2]">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="flex flex-col items-center text-center gap-3 w-full px-4"
            >
              <div className="relative w-[72px] h-[72px] shrink-0">
                <Image
                  src={principle.iconSrc}
                  alt={principle.alt}
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>

              <h3 className="font-display font-normal text-[24px] leading-[34px] text-[#173E33]">
                {principle.title}
              </h3>

              <p className="font-body font-normal text-[15px] leading-[22px] text-[#795A46] max-w-[280px]">
                {principle.line1}
                <br />
                {principle.line2}
              </p>
            </div>
          ))}
        </div>

        {/* --- 3. Mobile Layout (< 768px): 1 column stacked --- */}
        <div className="flex md:hidden flex-col items-center gap-10 w-full max-w-[320px] relative z-[2]">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.title}
              className="flex flex-col items-center text-center gap-2.5 w-full"
            >
              <div className="relative w-[64px] h-[64px] shrink-0">
                <Image
                  src={principle.iconSrc}
                  alt={principle.alt}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>

              <h3 className="font-display font-normal text-[22px] leading-[30px] text-[#173E33]">
                {principle.title}
              </h3>

              <p className="font-body font-normal text-[14px] leading-[22px] text-[#795A46] max-w-[260px]">
                {principle.line1}
                <br />
                {principle.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

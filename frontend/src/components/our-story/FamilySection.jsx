"use client";

import Image from "next/image";
import Link from "next/link";

export default function FamilySection() {
  return (
    <section
      id="the-family"
      aria-labelledby="family-heading"
      className="family-section relative w-full bg-[#FAF7EF] border-b border-black/[0.06] overflow-hidden"
    >
      <div className="family-container relative w-full max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center xl:items-stretch justify-between py-[44px] md:py-[50px] xl:py-[60px] px-6 sm:px-10 lg:px-12 xl:px-14 gap-8 xl:gap-[51px]">
        {/* Architectural decoration watermark crop (mobile bottom-right + desktop bottom-right) */}
        <div
          className="family-bg-watermark block md:hidden xl:block absolute right-0 bottom-0 pointer-events-none z-0"
          aria-hidden="true"
        >
          <Image
            src="/images/OurStory/storyBG1.png"
            alt=""
            width={310}
            height={534}
            className="object-contain object-bottom-right"
          />
        </div>

        {/* Left Column: Valencia Lounge Photograph */}
        <div className="family-image-wrapper relative w-full max-w-[540px] xl:max-w-[592px] h-[360px] sm:h-[460px] md:h-[520px] xl:h-auto xl:self-stretch shrink-0 z-10 overflow-hidden rounded-[7px] shadow-sm">
          <Image
            src="/images/OurStory/story2.png"
            alt="Valencia luxury lounge interior"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 600px, 592px"
            className="object-cover object-center rounded-[7px]"
          />
        </div>

        {/* Right Column: Hospitality Family Copy & List */}
        <div className="family-content relative w-full max-w-[680px] xl:max-w-[700px] flex-1 min-w-0 flex flex-col justify-between pt-2 xl:pt-[15px] z-10">
          <div className="family-copy-top flex flex-col gap-[18px] xl:gap-[20px]">
            <div className="family-header-group flex flex-col gap-[18px] xl:gap-[20px]">
              {/* Eyebrow with gold divider rules */}
              <div className="family-eyebrow-row flex items-center gap-[18px] max-w-full">
                <div className="family-eyebrow-divider w-[60px] sm:w-[90px] h-[1px] bg-[#C9A96A] shrink-0" />
                <span className="family-eyebrow-text font-body font-semibold text-[13px] sm:text-[15px] leading-[25px] tracking-[0.25em] sm:tracking-[0.3em] text-[#BE9555] uppercase whitespace-nowrap">
                  THE FAMILY BEHIND VALENCIA
                </span>
                <div className="family-eyebrow-divider family-eyebrow-divider-right w-[60px] sm:w-[90px] h-[1px] bg-[#C9A96A] shrink-0" />
              </div>

              {/* Heading - 3 lines matching SS3 layout without right-side overflow */}
              <h2
                id="family-heading"
                className="family-heading font-display font-normal text-[32px] sm:text-[40px] md:text-[46px] xl:text-[52px] 2xl:text-[56px] leading-[1.15] text-[#1B4D32]"
              >
                <span className="block">Three destinations.</span>
                <span className="block">One spirit of</span>
                <span className="block">hospitality.</span>
              </h2>
            </div>

            <div className="family-paragraphs-group flex flex-col gap-[18px] xl:gap-[20px]">
              {/* Introductory paragraphs - 3 lines each on desktop matching reference */}
              <p className="family-body-text font-body font-normal text-[16px] sm:text-[18px] xl:text-[19px] leading-[27px] text-[#6E5A4A] max-w-[640px]">
                VALENCIA is the flagship luxury boutique hotel of Yash Events
                <br className="hidden xl:inline" />
                {" "}Corporation, bringing Italian-inspired elegance and warm
                <br className="hidden xl:inline" />
                {" "}hospitality to Patna.
              </p>

              <p className="family-body-text font-body font-normal text-[16px] sm:text-[18px] xl:text-[19px] leading-[27px] text-[#6E5A4A] max-w-[640px]">
                Together with Umrao The Banquet and Hotel Jia International,
                <br className="hidden xl:inline" />
                {" "}it connects distinctive stays, meaningful celebrations and
                <br className="hidden xl:inline" />
                {" "}everyday travel through one hospitality family.
              </p>
            </div>
          </div>

          {/* Hospitality Family List */}
          <div className="family-cards-list w-full max-w-[440px] flex flex-col gap-[14px] pt-4 xl:pt-6">
            {/* 1. VALENCIA */}
            <Link href="/valencia" className="family-card-item flex items-center gap-[28px] min-h-[69px] hover:opacity-85 transition-opacity">
              <div className="family-card-icon relative w-[76px] h-[64px] shrink-0">
                <Image
                  src="/images/OurStory/storyIcon1.png"
                  alt="Valencia logo emblem"
                  fill
                  sizes="76px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="family-card-title font-display font-normal text-[26px] sm:text-[29px] leading-[38px] text-[#1B4D32]">
                  VALENCIA
                </h3>
                <p className="family-card-desc font-body font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#6E5A4A]">
                  Luxury boutique stays · Flagship
                </p>
              </div>
            </Link>

            {/* Gold divider */}
            <div className="family-divider-line w-full max-w-[435px] h-[1px] bg-[#C9A96A]" />

            {/* 2. Umrao The Banquet */}
            <Link href="/umrao" className="family-card-item flex items-center gap-[28px] min-h-[69px] hover:opacity-85 transition-opacity">
              <div className="family-card-icon relative w-[76px] h-[64px] shrink-0">
                <Image
                  src="/images/OurStory/storyIcon2.png"
                  alt="Umrao The Banquet clinking glasses emblem"
                  fill
                  sizes="76px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="family-card-title font-display font-normal text-[26px] sm:text-[29px] leading-[38px] text-[#1B4D32]">
                  Umrao The Banquet
                </h3>
                <p className="family-card-desc font-body font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#6E5A4A]">
                  Weddings, events &amp; gatherings
                </p>
              </div>
            </Link>

            {/* Gold divider */}
            <div className="family-divider-line w-full max-w-[435px] h-[1px] bg-[#C9A96A]" />

            {/* 3. Hotel Jia International */}
            <Link
              href="/hotel-jia"
              className="family-card-item flex items-center gap-[28px] min-h-[69px] hover:opacity-85 transition-opacity"
            >
              <div className="family-card-icon relative w-[76px] h-[64px] shrink-0">
                <Image
                  src="/images/OurStory/storyIcon3.png"
                  alt="Hotel Jia International bed emblem"
                  fill
                  sizes="76px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="family-card-title font-display font-normal text-[26px] sm:text-[29px] leading-[38px] text-[#1B4D32]">
                  Hotel Jia International
                </h3>
                <p className="family-card-desc font-body font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#6E5A4A]">
                  Comfortable city stays
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

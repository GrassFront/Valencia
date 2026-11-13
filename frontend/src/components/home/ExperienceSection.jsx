"use client";

import Image from "next/image";

export default function ExperienceSection({
  onDiscoverStory,
  storyHref = "#our-story",
}) {
  return (
    <section
      id="our-story"
      aria-labelledby="valencia-experience-heading"
      className="w-full bg-[#F8F5EA] border-b border-black/[0.06] overflow-hidden"
    >
      {/* Inner Container: 1440px Figma Frame */}
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-[92px] py-12 sm:py-14 md:py-16 xl:py-[72px]">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 md:gap-12 xl:gap-10 2xl:gap-[65px]">
          {/* Experience / Copy (Figma 480px width, 51px top padding on desktop) */}
          <div className="w-full max-w-[620px] xl:max-w-none xl:w-[460px] 2xl:w-[480px] xl:shrink-0 flex flex-col items-start pt-0 xl:pt-[51px]">
            {/* Experience / Eyebrow */}
            <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[18px] tracking-[0.32em] sm:tracking-[0.36em] text-[#C9A96A] uppercase">
              THE VALENCIA EXPERIENCE
            </span>

            {/* Figma Spacing: 12px */}
            <div className="h-3 w-full" aria-hidden="true" />

            {/* Experience / Heading */}
            <h2
              id="valencia-experience-heading"
              className="flex flex-col font-display text-[34px] sm:text-[46px] md:text-[54px] lg:text-[58px] 2xl:text-[64px] leading-[1.08] lg:leading-[1.1] 2xl:leading-[64px] tracking-normal"
            >
              <span className="font-normal text-[#4B3A2B]">
                Italian elegance.
              </span>
              <span className="italic font-normal text-[#1B4D32]">
                Indian warmth.
              </span>
            </h2>

            {/* Figma Spacing: 24px */}
            <div className="h-6 w-full" aria-hidden="true" />

            {/* Experience / Description */}
            <p className="font-body font-normal text-[15px] sm:text-[16px] lg:text-[17px] 2xl:text-[18px] leading-[24px] sm:leading-[26px] 2xl:leading-[27px] text-[#6C6255] max-w-[480px]">
              Inspired by Italian neoclassical design, VALENCIA pairs grand
              17-ft-high halls with thoughtful details and warm hospitality. A
              welcoming setting for restful stays, meaningful meetings and
              memorable celebrations.
            </p>

            {/* Figma Spacing: 28px */}
            <div className="h-7 w-full" aria-hidden="true" />

            {/* Button / Discover our story (Figma 302px x 53px, #1B4D32 background, 20px gap) */}
            {onDiscoverStory ? (
              <button
                type="button"
                onClick={onDiscoverStory}
                className="group inline-flex h-[53px] w-full sm:w-[302px] items-center justify-center gap-5 bg-[#1B4D32] text-[#F8F5EA] transition-colors duration-200 hover:bg-[#153e28] active:bg-[#0f2c1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D32] cursor-pointer"
              >
                <span className="font-body font-semibold text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.17em] uppercase whitespace-nowrap">
                  DISCOVER OUR STORY
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10H17M11.5 4.5L17 10L11.5 15.5"
                    stroke="#F8F5EA"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <a
                href={storyHref}
                className="group inline-flex h-[53px] w-full sm:w-[302px] items-center justify-center gap-5 bg-[#1B4D32] text-[#F8F5EA] transition-colors duration-200 hover:bg-[#153e28] active:bg-[#0f2c1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D32]"
              >
                <span className="font-body font-semibold text-[13.5px] sm:text-[14px] leading-[20px] tracking-[0.17em] uppercase whitespace-nowrap">
                  DISCOVER OUR STORY
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10H17M11.5 4.5L17 10L11.5 15.5"
                    stroke="#F8F5EA"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Experience / Photography (Figma 711px x 462px) */}
          <div className="w-full xl:flex-1 max-w-[711px] min-w-0 flex items-center justify-center">
            <div className="relative w-full aspect-[711/462] overflow-hidden">
              <Image
                src="/images/homepage/homepage_section2.png"
                alt="The Valencia Experience - Neoclassical Italian lounge with luxurious sofas, elegant chandelier and warm lighting"
                width={711}
                height={462}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 711px"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ChefSection() {
  return (
    <section
      id="chef-michael"
      aria-labelledby="chef-heading"
      className="chef-section relative w-full bg-[#FAF7EE] overflow-hidden"
    >
      <div className="chef-container relative w-full max-w-[1440px] mx-auto py-[33px] md:py-[40px] xl:py-[50px] px-6 sm:px-10 lg:px-12 xl:pl-[50px] xl:pr-[60px] flex flex-col xl:flex-row items-center xl:items-stretch justify-between gap-8 xl:gap-[66px] isolation-isolate">
        {/* Architectural corner background watermark (mobile + desktop bottom right) */}
        <div
          className="chef-corner-bg block md:hidden xl:block absolute right-0 bottom-0 pointer-events-none z-0"
          aria-hidden="true"
        >
          <Image
            src="/images/OurStory/storyBG5.png"
            alt=""
            width={407}
            height={346}
            className="object-contain object-bottom-right"
          />
        </div>

        {/* Left Column: Chef Michael Portrait */}
        <div className="chef-portrait-wrap relative w-full max-w-[540px] xl:max-w-[589px] h-[360px] sm:h-[440px] md:h-[500px] xl:h-auto xl:self-stretch shrink-0 rounded-[7px] overflow-hidden z-10 shadow-sm">
          <Image
            src="/images/OurStory/story_chef.png"
            alt="Chef Michael smiling in chef uniform preparing dish with flame"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 540px, 589px"
            className="object-cover object-center rounded-[7px]"
          />
        </div>

        {/* Right Column: Chef Profile Content */}
        <div className="chef-content relative z-10 w-full max-w-[704px] flex flex-col justify-between pt-2 xl:pt-[24px]">
          {/* Top Content Block */}
          <div className="chef-top-group flex flex-col gap-[14px]">
            <div className="chef-header-group flex flex-col gap-[10px] sm:gap-[14px]">
              {/* Eyebrow */}
              <span className="chef-eyebrow font-body font-semibold text-[13px] sm:text-[14px] leading-[26px] tracking-[0.15em] text-[#B78B32] uppercase">
                THE PEOPLE BEHIND THE EXPERIENCE
              </span>

              {/* Heading */}
              <h2
                id="chef-heading"
                className="chef-title font-display font-normal text-[34px] sm:text-[44px] md:text-[50px] xl:text-[54px] 2xl:text-[58px] leading-[1.18] text-[#164633] whitespace-normal xl:whitespace-nowrap"
              >
                Meet Chef Michael.
              </h2>

              {/* Role */}
              <span className="chef-role font-body font-semibold text-[13px] sm:text-[15px] xl:text-[16px] leading-[30px] tracking-[0.18em] text-[#593B2A] uppercase">
                CELEBRITY CHEF · CULINARY TRAINER
              </span>
            </div>

            {/* Biography: Paragraph 1 in exactly 3 lines, Paragraph 2 in 2 lines */}
            <div className="chef-bio-box flex flex-col gap-[14px] sm:gap-[16px] pt-1 max-w-[640px]">
              <p className="chef-bio-p font-body font-normal text-[16px] sm:text-[18px] xl:text-[19px] leading-[28px] text-[#745240] max-w-[620px]">
                <span className="block">With 15+ years across 4- and 5-star hotel kitchens,</span>
                <span className="block">Chef Michael brings professional expertise and a</span>
                <span className="block">thoughtful approach to food.</span>
              </p>
              <p className="chef-bio-p font-body font-normal text-[16px] sm:text-[18px] xl:text-[19px] leading-[28px] text-[#745240] max-w-[620px]">
                <span className="block">At VALENCIA, his culinary guidance shapes a dining</span>
                <span className="block">experience rooted in flavour, care and warm hospitality.</span>
              </p>
            </div>
          </div>

          {/* Bottom Block: Divider, Stats and Button */}
          <div className="chef-bottom-block flex flex-col gap-[14px] pt-6 xl:pt-4">
            {/* Gold Divider */}
            <div className="chef-divider w-full max-w-[382px] h-[1px] bg-[#D7B777]" />

            {/* 15+ Years Stats Row */}
            <div className="chef-stats-row flex items-center gap-[22px] max-w-[440px] h-[64px] sm:h-[73px]">
              <span className="chef-stat-number font-display font-normal text-[48px] sm:text-[54px] xl:text-[61px] leading-[73px] text-[#CBA24E]">
                15+
              </span>
              <div className="chef-stat-v-divider w-[1px] h-[49px] bg-[#D7B777]" />
              <p className="chef-stat-desc font-body font-normal text-[15px] sm:text-[17px] xl:text-[19px] leading-[26px] text-[#745240]">
                Years of culinary
                <br />
                experience
              </p>
            </div>

            {/* Button: Explore Dining */}
            <Link
              href="/dining"
              className="chef-button group inline-flex items-center justify-center gap-[18px] w-full sm:w-[293px] h-[55px] bg-[#CBA24E] hover:bg-[#C09540] rounded-[2px] transition-colors cursor-pointer shadow-sm"
            >
              <span className="chef-button-text font-body font-semibold text-[15px] sm:text-[16px] leading-[28px] tracking-[0.18em] text-[#4B2E19] uppercase">
                EXPLORE DINING
              </span>
              <ArrowRight
                size={20}
                className="text-[#4B2E19] stroke-[1.8] group-hover:translate-x-1 transition-transform shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurStoryHero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("the-family");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Our Story Hero"
      className="story-hero-section relative w-full bg-[#35220E] overflow-hidden min-h-[598px]"
    >
      {/* Background Image - Full Viewport Width */}
      <div className="story-hero-bg absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/images/OurStory/story_hero.png"
          alt="Valencia grand lobby"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark readability gradient overlay on the left */}
      <div
        className="story-hero-overlay absolute inset-0 w-full h-full z-[1] pointer-events-none"
        aria-hidden="true"
      />

      <div className="story-hero-container relative z-[2] w-full max-w-[1440px] mx-auto min-h-[598px] flex flex-col justify-between">
        {/* Hero copy */}
        <div className="story-hero-content relative z-[2] max-w-[650px] flex flex-col gap-3">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="story-hero-breadcrumb">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            / <span className="text-[#D6C5A5]">Our Story</span>
          </nav>

          {/* Eyebrow */}
          <p className="story-hero-eyebrow">THE HEART OF VALENCIA</p>

          {/* Page title */}
          <h1 className="story-hero-title">Our Story</h1>

          {/* Italic statement - exactly 2 lines */}
          <p className="story-hero-statement">
            Rooted in warmth.
            <br />
            Inspired by elegance.
          </p>

          {/* Description - exactly 2 lines */}
          <p className="story-hero-description max-w-[620px]">
            Discover the vision behind VALENCIA and the shared spirit
            <br className="hidden sm:inline" />
            {" "}of hospitality that connects the Yash Events Corporation family.
          </p>
        </div>

        {/* Discover Our Story Scroll Cue */}
        <button
          type="button"
          onClick={scrollToNextSection}
          className="story-hero-scroll group flex items-center gap-[18px] cursor-pointer focus:outline-none"
          aria-label="Discover our story - scroll down"
        >
          {/* Vector down arrow matching Figma spec (16px x 35px) */}
          <div className="relative w-[16px] h-[35px] flex items-center justify-center">
            <svg
              width="16"
              height="35"
              viewBox="0 0 16 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#E5D7B6] group-hover:translate-y-1 transition-transform"
            >
              <line x1="8" y1="2" x2="8" y2="30" stroke="#E5D7B6" strokeWidth="1.4" />
              <path
                d="M2 24L8 30L14 24"
                stroke="#E5D7B6"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="story-hero-scroll-label group-hover:text-[#C9A96A] transition-colors">
            DISCOVER OUR STORY
          </span>
        </button>
      </div>
    </section>
  );
}

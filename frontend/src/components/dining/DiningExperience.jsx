"use client";

import Image from "next/image";
import { ArrowRightIcon } from "./DiningIcons";

export default function DiningExperience() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="dining-experience-section"
      id="dining-experience"
      aria-label="The Dining Experience"
    >
      <div className="dining-experience-container">
        {/* Left Column: Composite Image (Spread + Inset Dining Room + Concept imagery tag) */}
        <div className="dining-experience-image-wrap">
          <Image
            src="/images/DiningPage/Dining Experience/DiningExperience.png"
            alt="The Dining Experience at Valencia with thoughtfully prepared dishes and intimate ambiance"
            width={725}
            height={560}
            sizes="(max-width: 1024px) 100vw, 725px"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Experience Content */}
        <div className="dining-experience-content">
          <div className="dining-experience-text-block">
            <p className="dining-experience-eyebrow">THE DINING EXPERIENCE</p>

            <h2 className="dining-experience-title">
              Good food.<br />
              Unhurried moments.
            </h2>

            <div className="dining-experience-desc">
              <p className="mb-3">
                A welcoming table, thoughtfully prepared flavours and an atmosphere that invites you to stay a little longer.
              </p>
              <p>
                From a relaxed meal to a special evening, discover the warmth of dining at VALENCIA.
              </p>
            </div>

            <hr className="dining-experience-divider" />
          </div>

          <div className="dining-experience-bottom-block">
            {/* Dining qualities */}
            <div className="dining-qualities-row">
              <div className="dining-quality-item">
                <div className="dining-quality-icon">
                  <Image
                    src="/images/DiningPage/Dining Experience/flavours.png"
                    alt="Thoughtful flavours icon"
                    width={64}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <h3 className="dining-quality-label">Thoughtful flavours</h3>
              </div>

              <div className="dining-quality-item">
                <div className="dining-quality-icon">
                  <Image
                    src="/images/DiningPage/Dining Experience/surroundings.png"
                    alt="Inviting surroundings icon"
                    width={64}
                    height={52}
                    className="object-contain"
                  />
                </div>
                <h3 className="dining-quality-label">Inviting surroundings</h3>
              </div>
            </div>

            {/* Action Button */}
            <a
              href="#menu-highlights"
              onClick={scrollTo("menu-highlights")}
              className="btn-experience-highlights"
              aria-label="Explore Menu Highlights"
            >
              <span>EXPLORE MENU HIGHLIGHTS</span>
              <ArrowRightIcon className="w-[16px] h-[16px] ml-2" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

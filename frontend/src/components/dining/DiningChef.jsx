"use client";

import Image from "next/image";
import { ArrowRightIcon } from "./DiningIcons";

export default function DiningChef() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="dining-chef-section"
      id="chef-michael"
      aria-label="Chef Michael - Guided by passion"
    >
      <div className="dining-chef-container">
        {/* Left Column: Biography */}
        <div className="dining-chef-bio">
          <div className="dining-chef-text-block">
            <p className="dining-chef-eyebrow">THE CHEF BEHIND THE EXPERIENCE</p>

            <h2 className="dining-chef-headline">
              <span className="block">Guided by passion.</span>
              <span className="block">Crafted with care.</span>
            </h2>

            <div className="dining-chef-name-group">
              <h3 className="dining-chef-name">Chef Michael</h3>
              <p className="dining-chef-title">Celebrity Chef &amp; Culinary Trainer</p>
            </div>

            <p className="dining-chef-desc">
              <span className="block">Under Chef Michael’s culinary direction, the kitchen at</span>
              <span className="block">VALENCIA brings thoughtful preparation, balanced</span>
              <span className="block">flavours and care to every plate.</span>
            </p>

            <hr className="dining-chef-divider" />

            <p className="dining-chef-quote">
              A considered approach. A memorable dining experience.
            </p>
          </div>

          <a
            href="#menu-highlights"
            onClick={scrollTo("menu-highlights")}
            className="btn-chef-highlights"
            aria-label="Explore Menu Highlights by Chef Michael"
          >
            <span>EXPLORE MENU HIGHLIGHTS</span>
            <ArrowRightIcon className="w-[16px] h-[16px] ml-2" strokeWidth={2} />
          </a>
        </div>

        {/* Right Column: Chef Michael Photograph with 22px border radius */}
        <div className="dining-chef-photo">
          <Image
            src="/images/DiningPage/ChefMichel.png"
            alt="Chef Michael - Celebrity Chef & Culinary Trainer in the kitchen preparing fine dishes"
            width={503}
            height={589}
            sizes="(max-width: 1024px) 100vw, 503px"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

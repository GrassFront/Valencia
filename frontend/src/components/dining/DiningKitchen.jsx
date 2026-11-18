"use client";

import Image from "next/image";
import { ArrowRightIcon } from "./DiningIcons";

export default function DiningKitchen() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="dining-kitchen-section"
      id="our-kitchen"
      aria-label="From our kitchen - Flavours gallery"
    >
      <div className="dining-kitchen-container">
        {/* Top Header Row */}
        <div className="dining-kitchen-header">
          <div className="dining-kitchen-intro">
            <p className="dining-kitchen-eyebrow">FROM OUR KITCHEN</p>
            <h2 className="dining-kitchen-title">Flavours to remember.</h2>
            <p className="dining-kitchen-subtitle">
              Explore a taste of the VALENCIA dining experience.
            </p>
          </div>

          <a
            href="#reservation"
            onClick={scrollTo("reservation")}
            className="btn-kitchen-reserve"
            aria-label="Reserve a table"
          >
            <span>RESERVE A TABLE</span>
            <ArrowRightIcon className="w-[15px] h-[15px] ml-2" strokeWidth={1.8} />
          </a>
        </div>

        {/* Asymmetric Food Gallery */}
        <div className="dining-kitchen-gallery">
          {/* Card 01: From the tandoor (Left large column) */}
          <div className="dining-kitchen-card-large">
            <Image
              src="/images/DiningPage/Flavours from Kitchen/From the tandoor/Native photo crop.png"
              alt="From the tandoor - Smoky flavours, thoughtfully prepared"
              width={619}
              height={525}
              className="w-full h-full object-cover"
            />
            <div className="dining-kitchen-gradient-large" />
            <div className="dining-kitchen-caption-large">
              <span className="dining-kitchen-num">01 ———</span>
              <h3 className="dining-kitchen-dish-large">From the tandoor</h3>
              <p className="dining-kitchen-desc-large">Smoky flavours, thoughtfully prepared.</p>
            </div>
          </div>

          {/* Right Column (Cards 02, 03, 04) */}
          <div className="dining-kitchen-right-col">
            {/* Top row: 02 Comfort classics & 03 Something sweet */}
            <div className="dining-kitchen-top-row">
              {/* Card 02: Comfort classics */}
              <div className="dining-kitchen-card-small card-comfort">
                <Image
                  src="/images/DiningPage/Flavours from Kitchen/Comfort classics/Native photo crop.png"
                  alt="Comfort classics - Signature curries"
                  width={331}
                  height={259}
                  className="w-full h-full object-cover"
                />
                <div className="dining-kitchen-gradient-small" />
                <div className="dining-kitchen-caption-small">
                  <span className="dining-kitchen-num">02 ———</span>
                  <h3 className="dining-kitchen-dish-small">Comfort classics</h3>
                </div>
              </div>

              {/* Card 03: Something sweet */}
              <div className="dining-kitchen-card-small card-sweet">
                <Image
                  src="/images/DiningPage/Flavours from Kitchen/Something sweet/Native photo crop.png"
                  alt="Something sweet - Traditional Indian dessert"
                  width={330}
                  height={259}
                  className="w-full h-full object-cover"
                />
                <div className="dining-kitchen-gradient-small" />
                <div className="dining-kitchen-caption-small">
                  <span className="dining-kitchen-num">03 ———</span>
                  <h3 className="dining-kitchen-dish-small">Something sweet</h3>
                </div>
              </div>
            </div>

            {/* Bottom row: Card 04 Aromatic favourites */}
            <div className="dining-kitchen-card-bottom">
              <Image
                src="/images/DiningPage/Flavours from Kitchen/Aromatic favourites/Native photo crop.png"
                alt="Aromatic favourites - Biryani with fried onions and mint"
                width={675}
                height={252}
                className="w-full h-full object-cover"
              />
              <div className="dining-kitchen-gradient-small" />
              <div className="dining-kitchen-caption-small">
                <span className="dining-kitchen-num">04 ———</span>
                <h3 className="dining-kitchen-dish-small">Aromatic favourites</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <p className="dining-kitchen-footer-notice">
          Sample dishes and concept imagery. Final menu subject to confirmation.
        </p>
      </div>
    </section>
  );
}

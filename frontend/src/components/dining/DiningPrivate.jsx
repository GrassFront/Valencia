"use client";

import Image from "next/image";
import { ArrowRightIcon } from "./DiningIcons";

export default function DiningPrivate() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="dining-private-section"
      id="private-dining"
      aria-label="Private dining & celebrations"
    >
      <div className="dining-private-container">
        {/* Left Column: Private dining introduction */}
        <div className="dining-private-intro">
          <div className="dining-private-text-block">
            <p className="dining-private-eyebrow">PRIVATE DINING &amp; CELEBRATIONS</p>

            <h2 className="dining-private-title">
              Some occasions deserve<br />
              a table of their own.
            </h2>

            <p className="dining-private-desc">
              For intimate celebrations, family gatherings and special evenings, let’s explore a dining experience around your occasion.
            </p>

            <p className="dining-private-callout">
              Share your plans with our events team.
            </p>
          </div>

          <a
            href="#reservation"
            onClick={scrollTo("reservation")}
            className="btn-private-event"
            aria-label="Plan your private dining event"
          >
            <span>PLAN YOUR EVENT</span>
            <ArrowRightIcon className="w-[16px] h-[16px]" strokeWidth={1.8} />
          </a>
        </div>

        {/* Right Column: Private dining photography */}
        <div className="dining-private-image-wrap">
          <Image
            src="/images/DiningPage/Private Dining.png"
            alt="Private dining table arrangement at Valencia for intimate celebrations"
            width={708}
            height={419}
            sizes="(max-width: 1024px) 100vw, 708px"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

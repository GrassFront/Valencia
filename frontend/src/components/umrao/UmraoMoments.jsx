"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./UmraoIcons";

export default function UmraoMoments() {
  return (
    <section
      aria-label="More Moments to Celebrate"
      className="umrao-moments-section"
    >
      <div className="umrao-moments-container">
        {/* Left: offer / Reference photograph (644px x 614px on desktop) */}
        <div className="umrao-moments-photo">
          <Image
            src="/images/Umrao/moments.png"
            alt="Pre-wedding royal courtyard celebration with vibrant marigold floral garlands, yellow umbrellas, and ornate carved daybed"
            fill
            sizes="(max-width: 1023px) 100vw, 644px"
            className="object-cover object-center"
          />
        </div>

        {/* Right: Pre-wedding offer (796px x 614px on desktop) */}
        <div className="umrao-moments-offer">
          {/* MORE MOMENTS TO CELEBRATE */}
          <p className="umrao-moments-eyebrow">
            MORE MOMENTS TO CELEBRATE
          </p>

          {/* Spacing: 35px */}
          <div className="umrao-moments-space-1" aria-hidden="true" />

          {/* Begin the celebrations a little earlier. */}
          <h2 className="umrao-moments-title">
            Begin the celebrations a little earlier.
          </h2>

          {/* Spacing: 26px */}
          <div className="umrao-moments-space-2" aria-hidden="true" />

          {/* Ask about a complimentary pre-wedding hall with your wedding booking at Umrao. */}
          <p className="umrao-moments-desc">
            Ask about a complimentary pre-wedding hall with your wedding booking at Umrao.
          </p>

          {/* Spacing: 22px */}
          <div className="umrao-moments-space-3" aria-hidden="true" />

          {/* Offer eligibility, availability and inclusions to be confirmed by our team. */}
          <p className="umrao-moments-note">
            Offer eligibility, availability and inclusions to be confirmed by our team.
          </p>

          {/* Spacing: 45px */}
          <div className="umrao-moments-space-4" aria-hidden="true" />

          {/* ENQUIRE ABOUT THE OFFER */}
          <Link href="#enquiry" className="umrao-moments-cta group">
            <span className="umrao-moments-cta-label">
              ENQUIRE ABOUT THE OFFER
            </span>
            <ArrowRightIcon
              size={24}
              color="#543522"
              className="shrink-0 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

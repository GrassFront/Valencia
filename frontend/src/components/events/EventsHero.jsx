"use client";

import Link from "next/link";
import Image from "next/image";

export default function EventsHero({ onPlanClick, onExploreClick }) {
  return (
    <section className="events-hero" aria-label="Weddings & Events Hero">
      {/* Background Image */}
      <div className="events-hero-bg">
        <Image
          src="/images/EventPage/hero.png"
          alt="Umrao The Banquet Wedding Venue"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Text contrast / Brown gradient */}
      <div className="events-hero-gradient" aria-hidden="true" />

      {/* Hero Content */}
      <div className="events-hero-content">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="events-hero-breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-1 text-[#F1EDE5]/70">/</span>
          <span>Weddings & Events</span>
        </nav>

        {/* Spacing */}
        <div className="events-hero-spacing" aria-hidden="true" />

        {/* Eyebrow */}
        <div className="events-hero-eyebrow">
          WEDDINGS & EVENTS ─────
        </div>

        {/* Main Heading (exact 2 lines in desktop) */}
        <h1 className="events-hero-heading">
          A beautiful beginning.<br />
          An unforgettable celebration.
        </h1>

        {/* Venue Subhead */}
        <div className="events-hero-subhead">
          UMRAO THE BANQUET · PATNA
        </div>

        {/* Description */}
        <p className="events-hero-desc">
          Bring your loved ones together in a setting<br className="hidden sm:inline" /> made for your most meaningful moments.
        </p>

        {/* Hero Actions */}
        <div className="events-hero-actions">
          <a
            href="#event-enquiry"
            onClick={(e) => {
              if (onPlanClick) {
                e.preventDefault();
                onPlanClick();
              }
            }}
            className="events-hero-btn-primary"
          >
            <span>PLAN YOUR EVENT</span>
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#spaces"
            onClick={(e) => {
              if (onExploreClick) {
                e.preventDefault();
                onExploreClick();
              }
            }}
            className="events-hero-btn-secondary"
          >
            <span>EXPLORE VENUES</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

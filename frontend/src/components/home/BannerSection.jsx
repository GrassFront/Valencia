"use client";

import Image from "next/image";
import Link from "next/link";
import "./css/banner-copy-auto-layout.css";

export default function BannerSection() {
  return (
    <section
      aria-label="Valencia - Where Elegance Feels Like Home"
      className="banner-luxury-section"
    >
      {/* Background Image: Grand Hotel Lobby */}
      <div className="banner-bg-wrapper" aria-hidden="true">
        <Image
          src="/images/homepage/Lobby/Clean right photograph.png"
          alt="Valencia Grand Lobby"
          fill
          priority
          sizes="100vw"
          className="banner-bg-image"
        />
      </div>

      {/* Dark Ambient Gradient Overlay */}
      <div className="banner-overlay-gradient" aria-hidden="true" />

      {/* Content Container */}
      <div className="banner-inner-container">
        <div className="banner-copy-auto-layout">
          <p className="eyebrow">VALENCIA · A LUXURY BOUTIQUE HOTEL</p>

          <h2 className="headline">
            Where elegance<br />
            <span className="headline-italic-accent">feels like home.</span>
          </h2>

          <p className="description">
            Italian-inspired design meets warm hospitality in Patna.<br />
            Thoughtfully designed rooms and suites for business trips<br />
            and relaxed getaways.
          </p>

          <Link
            href="/valencia#rooms"
            className="button-explore-rooms-and-suites"
            aria-label="Explore Rooms & Suites"
          >
            <span className="button-label">EXPLORE ROOMS &amp; SUITES</span>
            <div className="arrow-vector" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 10H16.5M11.5 5.5L16.5 10L11.5 14.5"
                  stroke="#48351F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

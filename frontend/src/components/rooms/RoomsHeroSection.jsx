"use client";

import Link from "next/link";
import { HeroBookingBar } from "../booking";
import "./css/hero-rooms-and-suites-native-image-crop.css";

export default function RoomsHeroSection({ onSearch }) {
  return (
    <section
      aria-label="Rooms and Suites at Valencia"
      className="rooms-hero-section"
    >
      {/* 1. Hero Banner with Native Image Crop */}
      <div className="hero-rooms-and-suites-native-image-crop">
        <div className="rooms-hero-content">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="rooms-hero-breadcrumb">
            <Link href="/" className="rooms-hero-breadcrumb-link">
              Home
            </Link>
            <span className="rooms-hero-breadcrumb-separator">/</span>
            <span className="rooms-hero-breadcrumb-current">
              Rooms &amp; Suites
            </span>
          </nav>

          {/* Page Heading */}
          <h1 className="rooms-hero-title">Rooms &amp; Suites</h1>

          {/* Subtitles */}
          <p className="rooms-hero-subtitle-italic">
            Find your own sense of comfort.
          </p>
          <p className="rooms-hero-subtitle-text">
            Explore Deluxe, Twin, Suite and Presidential Suite stays at VALENCIA.
          </p>
        </div>
      </div>

      {/* 2. Search Bar Overlay (ss2 & ss3) */}
      <div className="rooms-hero-search-wrapper">
        <HeroBookingBar onSearch={onSearch} />
        <p className="booking-availability-note">
          Booking availability to be confirmed.
        </p>
      </div>
    </section>
  );
}

export { RoomsHeroSection as HeroRoomsAndSuitesNativeImageCrop };

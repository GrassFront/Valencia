"use client";

import { useState } from "react";
import Image from "next/image";
import "./css/your-next-stay-booking.css";

export default function YourNextStayBooking() {
  const [bookingType, setBookingType] = useState("hourly");

  return (
    <section
      aria-label="Your Next Stay Booking"
      className="your-next-stay-booking"
    >
      {/* Background Neoclassical Palace Image Overlay */}
      <div
        className="your-next-stay-booking-native-image-crop"
        aria-hidden="true"
      />

      {/* Eyebrow */}
      <p className="eyebrow">YOUR STAY, BEAUTIFULLY PLANNED</p>

      {/* Headline */}
      <h2 className="title">Your next stay begins here.</h2>

      {/* Subtitle */}
      <p className="subtitle">
        Choose your dates and discover your stay at VALENCIA.
      </p>

      {/* Booking Search Bar Card */}
      <div className="search-bar-card">
        {/* Toggle Pill: Night Stay vs Hourly Booking */}
        <div className="toggle-wrapper" role="tablist" aria-label="Booking Mode">
          <button
            type="button"
            role="tab"
            aria-selected={bookingType === "night"}
            onClick={() => setBookingType("night")}
            className={`toggle-btn ${
              bookingType === "night"
                ? "toggle-btn-active"
                : "toggle-btn-inactive"
            }`}
          >
            <span className="relative w-4 h-4 flex items-center justify-center">
              <Image
                src="/images/homepage/your-stay/moon.svg"
                alt=""
                width={16}
                height={16}
                className={bookingType === "night" ? "brightness-0 invert" : ""}
              />
            </span>
            <span>Night Stay</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={bookingType === "hourly"}
            onClick={() => setBookingType("hourly")}
            className={`toggle-btn ${
              bookingType === "hourly"
                ? "toggle-btn-active"
                : "toggle-btn-inactive"
            }`}
          >
            <span className="relative w-4 h-4 flex items-center justify-center">
              <Image
                src={
                  bookingType === "hourly"
                    ? "/images/homepage/your-stay/clock-white.svg"
                    : "/images/homepage/your-stay/clock-green.svg"
                }
                alt=""
                width={16}
                height={16}
              />
            </span>
            <span>Hourly Booking</span>
          </button>
        </div>

        {/* Input Fields Row */}
        <div className="fields-row">
          {/* Field 1: Check In */}
          <div className="field-item">
            <div className="field-icon">
              <Image
                src="/images/homepage/your-stay/calendar-checkin.svg"
                alt="Calendar"
                width={22}
                height={22}
              />
            </div>
            <div className="field-text">
              <span className="field-label">Check In</span>
              <span className="field-value">Select date</span>
            </div>
            <div className="field-chevron">
              <Image
                src="/images/homepage/your-stay/chevron.svg"
                alt=""
                width={12}
                height={12}
              />
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 2: Check Out */}
          <div className="field-item">
            <div className="field-icon">
              <Image
                src="/images/homepage/your-stay/calendar-checkout.svg"
                alt="Calendar"
                width={22}
                height={22}
              />
            </div>
            <div className="field-text">
              <span className="field-label">Check Out</span>
              <span className="field-value">Select date</span>
            </div>
            <div className="field-chevron">
              <Image
                src="/images/homepage/your-stay/chevron.svg"
                alt=""
                width={12}
                height={12}
              />
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 3: Duration */}
          <div className="field-item">
            <div className="field-icon">
              <Image
                src="/images/homepage/your-stay/clock-green.svg"
                alt="Duration"
                width={22}
                height={22}
              />
            </div>
            <div className="field-text">
              <span className="field-label">Duration</span>
              <span className="field-value">Select hours</span>
            </div>
            <div className="field-chevron">
              <Image
                src="/images/homepage/your-stay/chevron.svg"
                alt=""
                width={12}
                height={12}
              />
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 4: Guests & Rooms */}
          <div className="field-item">
            <div className="field-icon">
              <Image
                src="/images/homepage/your-stay/guests.svg"
                alt="Guests"
                width={22}
                height={22}
              />
            </div>
            <div className="field-text">
              <span className="field-label">Guests & Rooms</span>
              <span className="field-value">2 Guests, 1 Room</span>
            </div>
            <div className="field-chevron">
              <Image
                src="/images/homepage/your-stay/chevron.svg"
                alt=""
                width={12}
                height={12}
              />
            </div>
          </div>

          {/* Search CTA Button */}
          <button type="button" className="search-cta-btn">
            <span>Search Rooms</span>
            <span className="search-cta-arrow">
              <Image
                src="/images/homepage/your-stay/search-arrow.svg"
                alt=""
                width={18}
                height={18}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

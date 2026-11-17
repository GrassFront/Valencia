"use client";

import { HeroBookingBar } from "../booking";
import "./css/your-next-stay-booking.css";

export default function YourNextStayBooking({
  variant = "default",
  className = "",
  onSearch,
}) {
  const isValencia = variant === "valencia";

  return (
    <section
      id="booking"
      aria-label="Your Next Stay Booking"
      className={`your-next-stay-booking ${isValencia ? "variant-valencia" : ""} ${className}`.trim()}
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
        {isValencia
          ? "Choose your dates and find your perfect room at VALENCIA."
          : "Choose your dates and discover your stay at VALENCIA."}
      </p>

      {/* Booking Search Bar matching Hero Section */}
      <HeroBookingBar
        onSearch={onSearch}
        buttonText={isValencia ? "Book Your Stay" : "Search Rooms"}
      />

      {isValencia && (
        <a href="#contact" className="valencia-contact-link">
          <span>Need help with your booking? Contact us</span>
          <span>→</span>
        </a>
      )}
    </section>
  );
}

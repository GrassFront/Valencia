"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./css/popup-need-a-ride-to-the-hotel.css";

export function PopupNeedARideToTheHotel({
  isOpen = true,
  onClose,
  checkInDate = "12 Nov 2026",
  destination = "VALENCIA · Patna",
  onBookCab,
}) {
  const router = useRouter();

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookCabClick = () => {
    if (onBookCab) {
      onBookCab();
    } else {
      router.push("/booking/cab");
      onClose?.();
    }
  };

  return (
    <div
      className="popup-cab-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cab-popup-title"
    >
      <div
        className="popup-need-a-ride-to-the-hotel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <div className="close-icon">
            <Image
              src="/images/cab booking/Close button.svg"
              alt="Close"
              width={36}
              height={36}
              unoptimized
            />
          </div>
        </button>

        {/* Content */}
        <div className="popup-content">
          {/* Status Header */}
          <div className="confirmation-status">
            <div className="confirmed-check">
              <Image
                src="/images/cab booking/Confirmed check.svg"
                alt="Confirmed"
                width={34}
                height={34}
                unoptimized
              />
            </div>
            <p className="your-stay-is-confirmed">YOUR STAY IS CONFIRMED</p>
          </div>

          {/* Cab Icon Badge */}
          <div className="cab-icon-badge">
            <Image
              src="/images/cab booking/Cab icon badge.svg"
              alt="Cab service icon"
              width={124}
              height={124}
              unoptimized
            />
          </div>

          {/* Headline & Description */}
          <h2 id="cab-popup-title" className="popup-title">
            Need a ride to the hotel?
          </h2>

          <p className="popup-description">
            Arrange a cab from the airport, railway station or{" "}
            <br className="hidden sm:inline" />
            another pickup point to VALENCIA.
          </p>

          {/* Hotel & Check-in Details */}
          <div className="hotel-and-check-in-details">
            <div className="hotel-destination">
              <div className="location-pin">
                <Image
                  src="/images/cab booking/Location pin.svg"
                  alt="Destination"
                  width={28}
                  height={28}
                  unoptimized
                />
              </div>
              <p className="destination">{destination}</p>
            </div>

            <div className="vertical-divider" />

            <div className="check-in-date">
              <div className="calendar">
                <Image
                  src="/images/cab booking/Calendar.svg"
                  alt="Calendar"
                  width={28}
                  height={28}
                  unoptimized
                />
              </div>
              <p className="check-in">Check-in: {checkInDate}</p>
            </div>
          </div>

          <p className="helper-text">
            Choose your pickup, vehicle and fare in the next steps.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="book-a-cab"
            onClick={handleBookCabClick}
          >
            <span className="button-label">BOOK A CAB</span>
            <div className="arrow-right">
              <Image
                src="/images/cab booking/Arrow right.svg"
                alt="Arrow right"
                width={27}
                height={27}
                unoptimized
              />
            </div>
          </button>

          {/* Dismiss Link */}
          <button
            type="button"
            className="maybe-later"
            onClick={onClose}
          >
            Maybe later
          </button>

          <div className="footer-divider" />

          <p className="cab-charge-note">
            Cab charges are separate from your hotel booking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupNeedARideToTheHotel;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./css/your-cab-booking.css";

export function YourCabBooking({
  hotelBookingRef = "VAL-DEMO-1026",
  cabBookingRef = "CAB-DEMO-1026",
  vehicleName = "Toyota Innova · Air-conditioned MPV",
  vehicleImage = "/images/cab booking/car-innova.png",
  pickupAddress = "Fraser Road, near Buddha Smriti Park",
  pickupCity = "Patna, Bihar",
  destination = "VALENCIA · Patna",
  pickupDate = "12 Nov 2026",
  pickupTime = "02:00 PM IST",
  passengers = "2 passengers",
  bags = "2 large bags",
  totalFare = "₹1,200",
  paidOnline = "₹0",
  payableAtHotel = "₹1,200",
  paymentMethod = "Pay at Hotel",
  onContactHotel,
  onDownloadConfirmation,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cabBookingRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (onDownloadConfirmation) {
      onDownloadConfirmation();
    } else if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="your-cab-booking" aria-label="Cab Booking Confirmation">
      {/* Top Heading Row */}
      <div className="cab-heading">
        <h2 className="your-cab-booking-2">Your cab booking</h2>

        <div className="attached-booking">
          <div className="attached-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#075840"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <span className="attached-to-val-demo-1026">
            Attached to {hotelBookingRef}
          </span>
        </div>

        <div className="header-spacer" />

        <div className="confirmed-badge">
          <div className="check-circle-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#075840"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="#075840" strokeWidth="2" fill="none" />
              <polyline points="8 12 11 15 16 9" stroke="#075840" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="confirmed-2">Confirmed</span>
        </div>
      </div>

      {/* Reference & Copy Badge */}
      <div className="reference-and-copy">
        <div className="ticket-icon-wrap">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#075840"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          </svg>
        </div>
        <span className="cab-demo-1026">{cabBookingRef}</span>
        <span className="divider-sep">│</span>
        <button type="button" className="copy-action-btn" onClick={handleCopy}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#075840"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span className="copy">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      {/* Main Journey & Payment Grid */}
      <div className="cab-journey-and-payment">
        {/* Left Side: Cab Journey */}
        <div className="cab-journey">
          {/* Vehicle Profile Row */}
          <div className="vehicle-profile-row">
            <div className="vehicle-illustration-wrap">
              <Image
                src={vehicleImage}
                alt={vehicleName}
                width={150}
                height={64}
                style={{ objectFit: "contain", width: "auto", height: "54px" }}
                unoptimized
              />
            </div>
            <span className="vehicle-row-sep">│</span>
            <p className="toyota-innova-air-conditioned-mpv">{vehicleName}</p>
          </div>

          {/* Pickup and Destination Flow */}
          <div className="pickup-and-destination">
            <div className="route-step pickup-step">
              <div className="route-pin-icon">
                <Image
                  src="/images/cab booking/Location pin.svg"
                  alt="Pickup"
                  width={22}
                  height={22}
                  unoptimized
                />
              </div>
              <p className="fraser-road-near-buddha-smriti-park">{pickupAddress}</p>
            </div>

            <div className="route-step city-step">
              <div className="dashed-connector-line" />
              <p className="patna-bihar">{pickupCity}</p>
            </div>

            <div className="route-step destination-step">
              <div className="route-pin-icon destination-pin">
                <Image
                  src="/images/cab booking/Location pin.svg"
                  alt="Destination"
                  width={22}
                  height={22}
                  unoptimized
                />
              </div>
              <p className="valencia-patna">{destination}</p>
            </div>
          </div>

          <div className="journey-divider" />

          {/* Pickup Details: Date, Time, Passengers, Bags */}
          <div className="pickup-time-passengers-and-luggage">
            <div className="spec-badge">
              <Image
                src="/images/cab booking/trip details/calendar icon.svg"
                alt="Date"
                width={20}
                height={20}
                unoptimized
              />
              <span className="spec-text">{pickupDate}</span>
            </div>

            <div className="spec-badge">
              <Image
                src="/images/cab booking/trip details/clock icon.svg"
                alt="Time"
                width={20}
                height={20}
                unoptimized
              />
              <span className="spec-text">{pickupTime}</span>
            </div>

            <div className="spec-badge">
              <Image
                src="/images/cab booking/trip details/user icon.svg"
                alt="Passengers"
                width={20}
                height={20}
                unoptimized
              />
              <span className="spec-text">{passengers}</span>
            </div>

            <div className="spec-badge">
              <Image
                src="/images/cab booking/trip details/bag icon.svg"
                alt="Bags"
                width={20}
                height={20}
                unoptimized
              />
              <span className="spec-text">{bags}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Cab Payment */}
        <div className="cab-payment">
          <div className="payment-heading">
            <h3 className="cab-payment-2">Cab payment</h3>
            <div className="pay-at-hotel-badge">
              <div className="hotel-payment-icon">
                <Image
                  src="/images/cab booking/trip details/Hotel icon.svg"
                  alt="Hotel"
                  width={20}
                  height={20}
                  unoptimized
                />
              </div>
              <span className="pay-at-hotel-label">{paymentMethod}</span>
            </div>
          </div>

          <div className="payment-line-item">
            <span className="item-title">Total cab fare</span>
            <span className="item-amount">{totalFare}</span>
          </div>

          <div className="payment-line-item">
            <span className="item-title">Paid online</span>
            <span className="item-amount">{paidOnline}</span>
          </div>

          <div className="payment-inner-divider" />

          <div className="payable-at-hotel-row">
            <span className="payable-title">Payable at hotel</span>
            <span className="payable-amount">{payableAtHotel}</span>
          </div>

          <p className="i-separate-from-your-hotel-payment">
            ⓘ &nbsp;Separate from your hotel payment.
          </p>
        </div>
      </div>

      {/* Driver Assignment Pending Banner */}
      <div className="driver-assignment">
        <span className="i-driver-assignment-pending">
          ⓘ &nbsp;Driver assignment pending
        </span>
        <span className="driver-banner-sep">│</span>
        <span className="driver-contact-and-vehicle-details-will">
          Driver contact and vehicle details will be shared before pickup.
        </span>
      </div>

      {/* Action Links */}
      <div className="cab-actions">
        <button
          type="button"
          onClick={handleDownload}
          className="download-cab-confirmation-btn"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#075840"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>DOWNLOAD CAB CONFIRMATION</span>
        </button>

        <span className="action-sep">│</span>

        <button
          type="button"
          onClick={onContactHotel || (() => alert("Connecting with VALENCIA concierge regarding your cab booking..."))}
          className="contact-hotel-about-this-ride-btn"
        >
          Contact hotel about this ride
        </button>
      </div>
    </section>
  );
}

export default YourCabBooking;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { PopupNeedARideToTheHotel } from "./PopupNeedARideToTheHotel";
import { YourCabBooking } from "./YourCabBooking";
import "./css/booking-confirmation-hotel-contact.css";

const ROOM_DATA = {
  deluxe: {
    key: "deluxe",
    name: "Deluxe Room",
    bed: "King bed",
    occupancy: "2 adults · 1 room",
    defaultRate: 6000,
    breakfastRate: 7000,
    image: "/images/booking/Rectangle.png",
    bannerImage: "/images/booking/Rectangle 2.png",
    roomPage: "/rooms/deluxe-room",
  },
  twin: {
    key: "twin",
    name: "Twin Room",
    bed: "Twin beds",
    occupancy: "2 adults · 1 room",
    defaultRate: 6500,
    breakfastRate: 7500,
    image: "/images/Room and Suites/delux room/Twin Room/Reference photo crop.png",
    bannerImage: "/images/Room and Suites/delux room/Twin Room/Reference photo crop.png",
    roomPage: "/rooms/twin-room",
  },
  suite: {
    key: "suite",
    name: "Suite",
    bed: "King-size bed",
    occupancy: "2 adults · 1 child · 1 room",
    defaultRate: 9000,
    breakfastRate: 10500,
    image: "/images/Room and Suites/delux room/Suite/Reference photo crop.png",
    bannerImage: "/images/Room and Suites/delux room/Suite/Reference photo crop.png",
    roomPage: "/rooms/suite",
  },
  "presidential-suite": {
    key: "presidential-suite",
    name: "Presidential Suite",
    bed: "Master King-size bed",
    occupancy: "4 guests · 1 room",
    defaultRate: 18000,
    breakfastRate: 20000,
    image: "/images/Room and Suites/delux room/Presidential Suite/Reference photo crop.png",
    bannerImage: "/images/Room and Suites/delux room/Presidential Suite/Reference photo crop.png",
    roomPage: "/rooms/presidential-suite",
  },
};

export function BookingConfirmationHotelContactVersion({
  guestData,
  paymentMethod: propPaymentMethod,
  bookingReference: propReference,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawRoom = (searchParams?.get("room") || "deluxe").toLowerCase();
  const roomKey = rawRoom.includes("twin")
    ? "twin"
    : rawRoom.includes("presidential")
    ? "presidential-suite"
    : rawRoom.includes("suite")
    ? "suite"
    : "deluxe";
  const currentRoom = ROOM_DATA[roomKey] || ROOM_DATA.deluxe;

  const selectedRatePlan = searchParams?.get("rate") === "breakfast-included" ? "breakfast-included" : "room-only";
  const checkInDate = searchParams?.get("checkin") || "12 Nov 2026";
  const checkOutDate = searchParams?.get("checkout") || "14 Nov 2026";
  const nightsCount = parseInt(searchParams?.get("nights") || "2", 10);
  const bookingRef = propReference || searchParams?.get("ref") || "VAL-DEMO-1026";
  const paymentMethodDisplay = propPaymentMethod || searchParams?.get("method") || "UPI";

  // Guest details resolution
  const firstName = guestData?.firstName || searchParams?.get("firstName") || "Aarav";
  const lastName = guestData?.lastName || searchParams?.get("lastName") || "Sharma";
  const guestFullName = `${firstName} ${lastName}`.trim();
  const guestEmail = guestData?.email || searchParams?.get("email") || "aarav@example.com";
  const rawPhone = guestData?.phone || searchParams?.get("phone") || "3210";
  const countryCode = guestData?.countryCode || searchParams?.get("countryCode") || "+91";
  const lastDigits = rawPhone.length > 4 ? rawPhone.slice(-4) : rawPhone;
  const maskedPhone = `${countryCode} • • • • • • • ${lastDigits}`;
  const estimatedArrival = guestData?.arrival || searchParams?.get("arrival") || "3:00 PM (guest estimate)";
  const specialRequest = guestData?.specialRequest || searchParams?.get("request") || "Quiet room requested";

  // Financials
  const pricePerNight = selectedRatePlan === "breakfast-included" ? currentRoom.breakfastRate : currentRoom.defaultRate;
  const roomCharges = pricePerNight * nightsCount;
  const taxesAndFees = Math.round(roomCharges * 0.1);
  const totalPaid = roomCharges + taxesAndFees;

  const formatPrice = (val) => "₹" + val.toLocaleString("en-IN");

  // Cab booking popup modal state (shown after room booking unless cab already confirmed)
  const isCabConfirmed = searchParams?.get("cab") === "confirmed";
  const [showCabPopup, setShowCabPopup] = useState(!isCabConfirmed);
  const cabVehicle = searchParams?.get("vehicle") || "Toyota Innova · Air-conditioned MPV";
  const cabVehicleImg = searchParams?.get("vehicleImg") || "/images/cab booking/car-innova.png";
  const cabPickup = searchParams?.get("pickup") || "Fraser Road, near Buddha Smriti Park";
  const cabFare = searchParams?.get("fare") || "₹1,200";
  const cabPayMethod = searchParams?.get("payMethod") || "Pay at Hotel";

  // Copy booking reference
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(bookingRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadInvoice = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="booking-confirmation-wrapper">
      {/* Cab Booking Modal Popup shown after room book */}
      <PopupNeedARideToTheHotel
        isOpen={showCabPopup}
        onClose={() => setShowCabPopup(false)}
        checkInDate={checkInDate}
        destination="VALENCIA · Patna"
        onBookCab={() => {
          setShowCabPopup(false);
          const params = new URLSearchParams();
          if (roomKey) params.set("room", roomKey);
          if (checkInDate) params.set("checkIn", checkInDate);
          if (bookingRef) params.set("bookingRef", bookingRef);
          if (guestFullName) params.set("guest", guestFullName);
          router.push(`/booking/cab?${params.toString()}`);
        }}
      />

      <div className="booking-confirmation-hotel-contact">
        {/* ================= HEADER ================= */}
        <header className="confirmation-header">
          <Link href="/" className="brand-valencia-logo">
            <div className="original-emblem" />
            <div className="wordmark">
              <p className="valencia">VALENCIA</p>
              <p className="brand-descriptor">A LUXURY BOUTIQUE HOTEL</p>
            </div>
          </Link>

          <Link href="/" className="back-to-home">
            <div className="icon-back">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B523B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <p className="back-to-home-2">Back to home</p>
          </Link>
        </header>

        <hr className="header-divider" />

        {/* ================= CONFIRMATION HERO ================= */}
        <section className="confirmation-and-booking-reference">
          <div className="confirmed-title">
            <div className="success">
              <div className="check-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h1 className="booking-confirmed">Booking confirmed</h1>
          </div>

          <p className="thank-you-aarav-we-look-forward-to">
            Thank you, {firstName}. We look forward to welcoming you.
          </p>

          <div className="booking-reference-and-copy">
            <div className="ticket-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
            </div>
            <p className="val-demo-1026">{bookingRef}</p>
            <span className="text">│</span>
            <button
              type="button"
              onClick={handleCopy}
              className="copy-btn"
              title="Copy Booking Reference"
              aria-label="Copy booking reference"
            >
              <div className="copy-icon">
                {copied ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </div>
              <p className="copy">{copied ? "Copied!" : "Copy"}</p>
            </button>
          </div>

          <div className="confirmation-delivery">
            <div className="mail-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <p className="confirmation-sent-to-aarav-example-com">
              Confirmation sent to {guestEmail} and your mobile ending {lastDigits}.
            </p>
          </div>
        </section>

        {/* ================= 2-COLUMN DETAILS ================= */}
        <main className="stay-payment-and-hotel-contact">
          {/* Left Column: Your Stay and Guest Details */}
          <section className="your-stay-and-guest-details">
            <h2 className="your-stay">Your stay</h2>

            <div className="confirmation-room-reference-crop">
              <Image
                src={currentRoom.image}
                alt={currentRoom.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <h3 className="deluxe-room">{currentRoom.name}</h3>
            <p className="valencia-patna">VALENCIA · Patna</p>

            {/* Stay Dates and Occupancy */}
            <div className="stay-dates-and-occupancy">
              {/* Check-in */}
              <div className="stay-info-item">
                <div className="stay-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="stay-text-col">
                  <p className="stay-primary-text">{checkInDate}</p>
                  <p className="stay-secondary-text">Check-in</p>
                </div>
              </div>

              {/* Check-out */}
              <div className="stay-info-item">
                <div className="stay-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="stay-text-col">
                  <p className="stay-primary-text">{checkOutDate}</p>
                  <p className="stay-secondary-text">Check-out</p>
                </div>
              </div>

              {/* Nights & Occupancy */}
              <div className="stay-info-item">
                <div className="stay-icon brown">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
                <div className="stay-text-col">
                  <p className="stay-primary-text">{nightsCount} nights</p>
                  <p className="stay-secondary-text">{currentRoom.occupancy}</p>
                </div>
              </div>

              {/* Rate Plan */}
              <div className="stay-info-item">
                <div className="stay-icon brown">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
                <div className="stay-text-col">
                  <p className="stay-primary-text">
                    {selectedRatePlan === "breakfast-included" ? "Breakfast included" : "Room only"}
                  </p>
                  <p className="stay-secondary-text">{currentRoom.bed}</p>
                </div>
              </div>
            </div>

            <div className="rectangle-2" />

            {/* Guest Details */}
            <h2 className="guest-details-heading">Guest details</h2>

            <div className="guest-contact-and-requests">
              <div className="guest-contact">
                {/* Name */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="contact-text">{guestFullName}</p>
                </div>

                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <p className="contact-text">{guestEmail}</p>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <p className="contact-text">{maskedPhone}</p>
                </div>
              </div>

              {/* Arrival and Requests */}
              <div className="arrival-and-requests">
                <div className="request-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                  </div>
                  <div className="request-text-col">
                    <p className="request-title">Estimated arrival</p>
                    <p className="request-subtitle">{estimatedArrival}</p>
                  </div>
                </div>

                <div className="request-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49372B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="request-text-col">
                    <p className="request-title">{specialRequest}</p>
                    <p className="request-subtitle">(subject to availability)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Payment Summary & Hotel Contact */}
          <aside className="payment-and-hotel-contact">
            {/* Card 1: Payment Summary */}
            <div className="payment-summary">
              <h2 className="payment-summary-2">Payment summary</h2>

              <div className="paid-status">
                <div className="paid-check-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="paid-demo">Paid (demo)</p>
              </div>

              <div className="payment-row">
                <p className="payment-row-label">Room charges</p>
                <p className="payment-row-value">{formatPrice(roomCharges)}</p>
              </div>

              <div className="payment-row">
                <p className="payment-row-label">Taxes &amp; fees (demo)</p>
                <p className="payment-row-value">{formatPrice(taxesAndFees)}</p>
              </div>

              <div className="summary-divider" />

              <div className="total-paid-row">
                <p className="total-paid-2">Total paid</p>
                <p className="rs13-200">{formatPrice(totalPaid)}</p>
              </div>

              <div className="summary-divider" />

              <div className="payment-row">
                <p className="payment-row-label">Payment method</p>
                <p className="payment-row-value">{paymentMethodDisplay}</p>
              </div>

              <Link href={currentRoom.roomPage} className="btn-view-booking">
                VIEW BOOKING
              </Link>

              <button
                type="button"
                onClick={handleDownloadInvoice}
                className="btn-download-invoice"
              >
                <div className="contact-icon" style={{ color: "#104F3B" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                DOWNLOAD INVOICE
              </button>
            </div>

            {/* Card 2: Contact Your Hotel */}
            <div className="contact-your-hotel">
              <div className="hotel-heading">
                <h3 className="contact-your-hotel-2">Contact your hotel</h3>
                <p className="valencia-patna-2">VALENCIA · Patna</p>
              </div>

              <p className="for-arrival-assistance-or-questions">
                For arrival assistance or questions about your stay.
              </p>

              <div className="phone-number-block">
                <p className="layer-91-xxxxx-xxxxx">+91 XXXXX XXXXX</p>
                <p className="hotel-number-to-be-confirmed">Hotel number to be confirmed.</p>
              </div>

              <div className="summary-divider" />

              <div className="keep-booking-reference-handy">
                <div className="info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <p className="keep-booking-reference-val-demo-1026">
                  Keep booking reference {bookingRef} handy.
                </p>
              </div>

              <a href="tel:+910000000000" className="btn-call-hotel">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call hotel
              </a>

              <p className="available-once-contact-details-are">
                Available once contact details are confirmed.
              </p>
            </div>
          </aside>
        </main>

        {/* ================= YOUR CAB BOOKING ================= */}
        <YourCabBooking
          hotelBookingRef={bookingRef}
          cabBookingRef="CAB-DEMO-1026"
          pickupDate={checkInDate}
          pickupTime="02:00 PM IST"
          pickupAddress={cabPickup}
          pickupCity="Patna, Bihar"
          destination="VALENCIA · Patna"
          vehicleName={cabVehicle}
          vehicleImage={cabVehicleImg}
          passengers="2 passengers"
          bags="2 large bags"
          totalFare={cabFare}
          paidOnline={cabPayMethod === "Pay at Hotel" ? "₹0" : cabFare}
          payableAtHotel={cabPayMethod === "Pay at Hotel" ? cabFare : "₹0"}
          paymentMethod={cabPayMethod}
        />

        {/* ================= BEFORE YOU ARRIVE ================= */}
        <section className="before-you-arrive">
          <div className="info-icon-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#104F3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <h4 className="before-you-arrive-2">Before you arrive</h4>
          <span className="text-2">│</span>
          <p className="valid-photo-id-required-at-check-in">
            Valid photo ID required at check-in. Refer to your confirmation for arrival timings and rate-specific policies.
          </p>
        </section>

        <hr className="footer-divider" />
      </div>
    </div>
  );
}

// Aliases for versatile import
export const BookingConfirmation = BookingConfirmationHotelContactVersion;
export default BookingConfirmationHotelContactVersion;

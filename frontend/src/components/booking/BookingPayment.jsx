"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { BookingConfirmationHotelContactVersion } from "./BookingConfirmationHotelContactVersion";
import "./css/booking-payment.css";

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

export function BookingPayment({ onBack, onComplete }) {
  const searchParams = useSearchParams();
  const router = useRouter();

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

  // Payment states
  const [paymentMethod, setPaymentMethod] = useState("upi"); // 'upi' | 'card' | 'netbanking'
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pricing
  const pricePerNight = selectedRatePlan === "breakfast-included" ? currentRoom.breakfastRate : currentRoom.defaultRate;
  const staySubtotal = pricePerNight * nightsCount;
  const taxesAndFees = Math.round(staySubtotal * 0.1);
  const totalPayable = staySubtotal + taxesAndFees;

  const formatPrice = (val) => "₹" + val.toLocaleString("en-IN");

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.push(`/booking/review?room=${roomKey}&rate=${selectedRatePlan}`);
    }
  };

  const handleProceedPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      if (onComplete) onComplete();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 1200);
  };

  if (isSuccess) {
    return (
      <BookingConfirmationHotelContactVersion
        guestData={{
          firstName: "Aarav",
          lastName: "Sharma",
          email: "aarav@example.com",
          phone: "3210",
          countryCode: "+91",
          arrival: "3:00 PM (guest estimate)",
          specialRequest: "Quiet room requested",
        }}
        paymentMethod={paymentMethod === "upi" ? "UPI" : paymentMethod === "card" ? "Credit / Debit Card" : "Netbanking"}
        bookingReference="VAL-DEMO-1026"
      />
    );
  }

  return (
    <div className="booking-payment-wrapper">
      <div className="booking-payment">
        {/* ================= HEADER ================= */}
        <div className="secure-booking-header">
          <Link href="/" className="brand-valencia-logo">
            <div className="original-emblem" />
            <div className="wordmark">
              <p className="valencia">VALENCIA</p>
              <p className="brand-descriptor">A LUXURY BOUTIQUE HOTEL</p>
            </div>
          </Link>

          <div className="booking-navigation">
            <button type="button" onClick={handleBack} className="back-to-room">
              <div className="back">
                <Image src="/images/booking/Back.svg" alt="Back" width={20} height={20} />
              </div>
              <p className="back-to-review">Back to review</p>
            </button>

            <div className="secure-lock">
              <Image src="/images/booking/Secure lock.svg" alt="Secure lock" width={21} height={21} />
            </div>
            <p className="secure-payment">Secure payment</p>
          </div>
        </div>

        {/* ================= PROGRESS BAR ================= */}
        <div className="booking-progress">
          <Link href="/rooms" className="step-1">
            <div className="step-indicator">
              <div className="completed">
                <Image src="/images/booking/Step indicator.svg" alt="Step 1 completed" width={36} height={36} />
              </div>
            </div>
            <p className="rooms">Rooms</p>
          </Link>

          <div className="progress-connector" />

          <Link href={`/booking?room=${roomKey}&rate=${selectedRatePlan}&step=2`} className="step-2">
            <div className="step-indicator-2">
              <div className="frame">
                <Image src="/images/booking/Step indicator.svg" alt="Step 2 completed" width={36} height={36} />
              </div>
            </div>
            <p className="details">Details</p>
          </Link>

          <div className="progress-connector-2" />

          <button type="button" onClick={handleBack} className="step-3">
            <div className="step-indicator-3">
              <div className="frame-2">
                <Image src="/images/booking/Step indicator.svg" alt="Step 3 completed" width={36} height={36} />
              </div>
            </div>
            <p className="review">Review</p>
          </button>

          <div className="progress-connector-3" />

          <div className="step-4">
            <div className="step-indicator-4">
              <p className="layer-4">4</p>
            </div>
            <p className="payment">Payment</p>
          </div>
        </div>

        {/* ================= INTRO ================= */}
        <div className="payment-introduction">
          <p className="complete-your-reservation">Complete your reservation.</p>
          <p className="choose-a-payment-method-to-confirm-your">
            Choose a payment method to confirm your stay.
          </p>
        </div>

        {/* ================= TWO COLUMNS ================= */}
        <div className="payment-and-reservation">
          {/* LEFT COLUMN: Payment choices */}
          <div className="payment-choices-and-notices">
            <div className="choose-how-to-pay">
              <p className="choose-how-to-pay-2">Choose how to pay</p>

              {/* 1. UPI Payment Option */}
              <div
                className={`upi ${paymentMethod === "upi" ? "" : "collapsed"}`}
                onClick={() => setPaymentMethod("upi")}
              >
                <div className="payment-method-header">
                  <div className="payment-method-left">
                    <div className={`radio-outer ${paymentMethod === "upi" ? "selected" : ""}`}>
                      {paymentMethod === "upi" && <div className="radio-inner" />}
                    </div>
                    <div className="method-icon">
                      {/* Mobile phone / UPI icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#62482B" strokeWidth="1.8">
                        <rect x="5" y="2" width="14" height="20" rx="3" />
                        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
                      </svg>
                    </div>
                    <p className="method-title">UPI</p>
                  </div>
                  <div className={`chevron-icon ${paymentMethod === "upi" ? "open" : ""}`}>
                    {paymentMethod === "upi" ? "⌃" : "⌄"}
                  </div>
                </div>

                {paymentMethod === "upi" && (
                  <div className="upi-app-payment-guidance">
                    <div className="upi-phone-illustration">
                      <div className="phone-backdrop">
                        {/* Phone graphic with arrow */}
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <rect x="18" y="8" width="24" height="44" rx="4" stroke="#262A27" strokeWidth="2" />
                          <circle cx="30" cy="46" r="1.5" fill="#262A27" />
                          <path d="M26 24L36 30L26 36Z" fill="#BC8B36" />
                        </svg>
                      </div>
                    </div>

                    <div className="upi-instructions">
                      <p className="pay-with-your-upi-app">Pay with your UPI app</p>
                      <p className="continue-to-open-the-secure-payment">
                        Continue to open the secure payment gateway and choose your UPI app.
                      </p>
                      <div className="upi-safety-notice">
                        <Image src="/images/booking/Frame 3.svg" alt="Notice" width={22} height={22} />
                        <p className="approve-the-payment-only-in-your-upi">
                          Approve the payment only in your UPI app. Never share your UPI PIN.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Credit / Debit Card Option */}
              <div
                className={`credit-debit-card ${paymentMethod === "card" ? "selected" : ""}`}
                onClick={() => setPaymentMethod("card")}
              >
                <div className="payment-method-header">
                  <div className="payment-method-left">
                    <div className={`radio-outer ${paymentMethod === "card" ? "selected" : ""}`}>
                      {paymentMethod === "card" && <div className="radio-inner" />}
                    </div>
                    <div className="method-icon-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#62482B" strokeWidth="1.8">
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    </div>
                    <p className="method-title">Credit / Debit Card</p>
                  </div>
                  <div className={`chevron-icon ${paymentMethod === "card" ? "open" : ""}`}>
                    {paymentMethod === "card" ? "⌃" : "⌄"}
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="card-input-guidance">
                    <p className="method-detail-text">
                      We accept Visa, MasterCard, RuPay, and American Express. You will enter your card details on the bank-grade encrypted gateway.
                    </p>
                  </div>
                )}
              </div>

              {/* 3. Netbanking Option */}
              <div
                className={`netbanking ${paymentMethod === "netbanking" ? "selected" : ""}`}
                onClick={() => setPaymentMethod("netbanking")}
              >
                <div className="payment-method-header">
                  <div className="payment-method-left">
                    <div className={`radio-outer ${paymentMethod === "netbanking" ? "selected" : ""}`}>
                      {paymentMethod === "netbanking" && <div className="radio-inner" />}
                    </div>
                    <div className="method-icon-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#62482B" strokeWidth="1.8">
                        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v4M12 14v4M16 14v4" />
                      </svg>
                    </div>
                    <p className="method-title">Netbanking</p>
                  </div>
                  <div className={`chevron-icon ${paymentMethod === "netbanking" ? "open" : ""}`}>
                    {paymentMethod === "netbanking" ? "⌃" : "⌄"}
                  </div>
                </div>

                {paymentMethod === "netbanking" && (
                  <div className="card-input-guidance">
                    <p className="method-detail-text">
                      Supported banks: HDFC, ICICI, SBI, Axis, Kotak, and 50+ other Indian banks.
                    </p>
                  </div>
                )}
              </div>

              {/* Divider & Total */}
              <div className="rectangle" />

              <div className="amount-to-pay">
                <p className="amount-to-pay-2">Amount to pay</p>
                <p className="rs13-200">{formatPrice(totalPayable)}</p>
              </div>

              <button
                type="button"
                onClick={handleProceedPayment}
                disabled={isProcessing}
                className="proceed-to-pay"
              >
                <p className="proceed-to-pay-rs13-200">
                  {isProcessing ? "PROCESSING PAYMENT..." : `PROCEED TO PAY ${formatPrice(totalPayable)}`}
                </p>
                <div className="frame-15">
                  <Image src="/images/booking/Frame 5.svg" alt="Next" width={18} height={18} />
                </div>
              </button>

              <div className="payment-gateway-redirect">
                <div className="frame-16">
                  <Image src="/images/booking/Secure lock.svg" alt="Lock" width={16} height={16} />
                </div>
                <p className="you-ll-be-redirected-to-the-payment">
                  You’ll be redirected to the payment gateway.
                </p>
              </div>
            </div>

            <div className="confirmation-condition">
              <div className="frame-17">
                <Image src="/images/booking/Frame 3.svg" alt="Notice" width={22} height={22} />
              </div>
              <p className="your-booking-is-confirmed-once-payment">
                Your booking is confirmed once payment is successful.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Reservation Summary */}
          <div className="your-reservation-payment-summary">
            <div className="rectangle-2">
              <Image
                src={currentRoom.bannerImage}
                alt={currentRoom.name}
                fill
                sizes="(max-width: 768px) 100vw, 498px"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="concept-badge">Concept image</div>
            </div>

            <div className="reservation-summary-content">
              <p className="your-reservation">Your reservation</p>
              <p className="deluxe-room">{currentRoom.name}</p>
              <p className="valencia-patna">VALENCIA &nbsp;·&nbsp; Patna</p>

              <div className="reservation-dates">
                <div className="check-in">
                  <p className="check-in-2">Check-in</p>
                  <p className="layer-12-nov-2026">{checkInDate}</p>
                </div>
                <div className="check-out">
                  <p className="check-out-2">Check-out</p>
                  <p className="layer-14-nov-2026">{checkOutDate}</p>
                </div>
              </div>

              <p className="layer-2-nights-2-adults-1-room">
                {nightsCount} nights &nbsp;·&nbsp; 2 adults &nbsp;·&nbsp; 1 room
              </p>

              <div className="rate-plan">
                <div className="frame-18">
                  <Image src="/images/booking/Frame.svg" alt="Bed" width={20} height={20} />
                </div>
                <p className="room-only">
                  {selectedRatePlan === "breakfast-included" ? "Breakfast included" : "Room only"}
                </p>
              </div>

              <div className="rectangle-3" />

              <div className="rs6-000-x-2-nights">
                <p className="rs6-000-x-2-nights-2">
                  {formatPrice(pricePerNight)} × {nightsCount} nights
                </p>
                <p className="rs12-000">{formatPrice(staySubtotal)}</p>
              </div>

              <div className="taxes-fees-demo">
                <p className="taxes-fees-demo-2">Taxes &amp; fees (demo)</p>
                <p className="rs1-200">{formatPrice(taxesAndFees)}</p>
              </div>

              <div className="rectangle-4" />

              <div className="total-payable">
                <p className="total-payable-2">Total payable</p>
                <p className="rs13-200-2">{formatPrice(totalPayable)}</p>
              </div>

              <div className="price-notes">
                <p className="price-in-inr">Price in INR.</p>
                <p className="illustrative-rates-for-design-preview">
                  Illustrative rates for design preview.
                </p>
              </div>

              <div className="payment-not-completed">
                <div className="frame-19">
                  <Image src="/images/booking/Frame 4.svg" alt="Notice" width={24} height={24} />
                </div>
                <p className="payment-not-completed-please-complete">
                  Payment not completed.<br />
                  Please complete the payment to confirm your booking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BACK LINK ================= */}
        <button type="button" onClick={handleBack} className="back-to-review-2">
          <div className="frame-20">
            <Image src="/images/booking/Back.svg" alt="Back" width={18} height={18} />
          </div>
          <p className="back-to-review-3">Back to review</p>
        </button>

        {/* ================= FOOTER ================= */}
        <div className="booking-footer">
          <div className="rectangle-5" />
          <div className="footer-links">
            <p className="c-2026-valencia">© 2026 VALENCIA</p>
            <p className="privacy-policy-booking-cancellation">
              Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp; Booking &amp; Cancellation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPayment;

"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import "./css/booking-review-reservation.css";

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

export function BookingReviewReservation({
  guestData,
  onBack,
  onEditDetails,
  onEditRoom,
  onProceedPayment,
}) {
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
  const roomsCount = Math.max(1, parseInt(searchParams?.get("rooms") || "1", 10));

  const [agreed, setAgreed] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Defaults or passed guest details
  const guest = {
    title: guestData?.title || "Mr.",
    firstName: guestData?.firstName || "Aarav",
    lastName: guestData?.lastName || "Sharma",
    email: guestData?.email || "aarav@example.com",
    countryCode: guestData?.countryCode || "+91",
    phone: guestData?.phone || "9876543210",
    estimatedArrival: guestData?.estimatedArrival || "3:00 PM",
    specialRequests: guestData?.specialRequests || "A quiet room, if available.",
    adults: guestData?.adults || "2",
  };

  const maskedPhone = useMemo(() => {
    const p = guest.phone;
    if (p.length <= 4) return `${guest.countryCode} •••••••${p}`;
    return `${guest.countryCode}  •••••••${p.slice(-4)}`;
  }, [guest.phone, guest.countryCode]);

  // Pricing
  const pricePerNight = selectedRatePlan === "breakfast-included" ? currentRoom.breakfastRate : currentRoom.defaultRate;
  const staySubtotal = pricePerNight * nightsCount * roomsCount;
  const taxesAndFees = Math.round(staySubtotal * 0.1);
  const totalPayable = staySubtotal + taxesAndFees;

  const formatPrice = (val) => "₹" + val.toLocaleString("en-IN");

  const handleBackToDetails = () => {
    if (onBack) {
      onBack();
    } else {
      router.push(`/booking?room=${roomKey}&rate=${selectedRatePlan}&step=2&checkin=${encodeURIComponent(checkInDate)}&checkout=${encodeURIComponent(checkOutDate)}&nights=${nightsCount}&rooms=${roomsCount}`);
    }
  };

  const handleEditRoomDates = () => {
    if (onEditRoom) {
      onEditRoom();
    } else {
      router.push(currentRoom.roomPage);
    }
  };

  const handlePayment = () => {
    if (!agreed) return;
    if (onProceedPayment) {
      onProceedPayment();
    } else {
      router.push(`/booking/payment?room=${roomKey}&rate=${selectedRatePlan}&checkin=${encodeURIComponent(checkInDate)}&checkout=${encodeURIComponent(checkOutDate)}&nights=${nightsCount}&rooms=${roomsCount}`);
    }
  };

  if (isConfirmed) {
    return (
      <div className="booking-review-page-wrapper">
        <div className="booking-review-reservation">
          <div
            style={{
              width: "100%",
              maxWidth: "800px",
              margin: "40px auto",
              background: "#FDFBF7",
              border: "1px solid #E8DDCB",
              borderRadius: "8px",
              padding: "48px 32px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "#164A39",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
              }}
            >
              ✓
            </div>
            <h1 style={{ color: "#164A39", fontFamily: "Playfair Display, serif", fontSize: "32px", margin: 0 }}>
              Reservation Confirmed
            </h1>
            <p style={{ color: "#6E6862", fontFamily: "Manrope, sans-serif", fontSize: "16px", maxWidth: "540px", lineHeight: "24px", margin: 0 }}>
              Thank you, {guest.title} {guest.firstName} {guest.lastName}. Your booking at VALENCIA Patna has been reserved. A confirmation email has been dispatched to {guest.email}.
            </p>
            <div
              style={{
                width: "100%",
                maxWidth: "480px",
                background: "#F2EBDD",
                borderRadius: "6px",
                padding: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                textAlign: "left",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              <div>
                <p style={{ color: "#7B756E", fontSize: "12px", margin: 0 }}>Booking Reference</p>
                <p style={{ color: "#164A39", fontSize: "15px", fontWeight: "600", margin: "2px 0 0 0" }}>VAL-2026-84920</p>
              </div>
              <div>
                <p style={{ color: "#7B756E", fontSize: "12px", margin: 0 }}>Selected Room</p>
                <p style={{ color: "#164A39", fontSize: "15px", fontWeight: "600", margin: "2px 0 0 0" }}>{currentRoom.name}</p>
              </div>
              <div>
                <p style={{ color: "#7B756E", fontSize: "12px", margin: 0 }}>Stay Duration</p>
                <p style={{ color: "#164A39", fontSize: "15px", fontWeight: "600", margin: "2px 0 0 0" }}>
                  {checkInDate} — {checkOutDate} ({nightsCount} nights)
                </p>
              </div>
              <div>
                <p style={{ color: "#7B756E", fontSize: "12px", margin: 0 }}>Total Payable</p>
                <p style={{ color: "#164A39", fontSize: "15px", fontWeight: "600", margin: "2px 0 0 0" }}>{formatPrice(totalPayable)}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "12px" }}>
              <Link
                href="/"
                style={{
                  padding: "12px 28px",
                  borderRadius: "5px",
                  background: "#164A39",
                  color: "#FFFFFF",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Return to Home
              </Link>
              <Link
                href="/rooms"
                style={{
                  padding: "12px 28px",
                  borderRadius: "5px",
                  background: "#C9A96A",
                  color: "#FFFFFF",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Explore Other Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-review-page-wrapper">
      <div className="booking-review-reservation">
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
            <button type="button" onClick={handleBackToDetails} className="back-to-room">
              <div className="back">
                <Image src="/images/booking/Back.svg" alt="Back" width={20} height={20} />
              </div>
              <p className="back-to-guest-details">Back to guest details</p>
            </button>

            <div className="secure-lock">
              <Image src="/images/booking/Secure lock.svg" alt="Secure lock" width={20} height={20} />
            </div>
            <p className="secure-booking">Secure booking</p>
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

          <button type="button" onClick={handleBackToDetails} className="step-2">
            <div className="step-indicator-2">
              <div className="frame">
                <Image src="/images/booking/Step indicator.svg" alt="Step 2 completed" width={36} height={36} />
              </div>
            </div>
            <p className="details">Details</p>
          </button>

          <div className="progress-connector-2" />

          <div className="step-3">
            <div className="step-indicator-3">
              <p className="layer-3">3</p>
            </div>
            <p className="review">Review</p>
          </div>

          <div className="progress-connector-3" />

          <div className="step-4">
            <div className="step-indicator-4">
              <p className="layer-4">4</p>
            </div>
            <p className="payment">Payment</p>
          </div>
        </div>

        {/* ================= INTRO ================= */}
        <div className="review-introduction">
          <p className="review-your-reservation">Review your reservation.</p>
          <p className="check-your-stay-and-guest-details">
            Check your stay and guest details before continuing to payment.
          </p>
        </div>

        {/* ================= TWO COLUMNS ================= */}
        <div className="reservation-review-columns">
          {/* LEFT COLUMN: Stay, Guest, Policies */}
          <div className="stay-guest-and-policies">
            {/* 1. Your Stay Card */}
            <div className="your-stay">
              <div className="stay-heading">
                <p className="your-stay-2">Your stay</p>
                <button type="button" onClick={handleEditRoomDates} className="edit-room-dates">
                  Edit room &amp; dates
                </button>
              </div>

              <div className="room-image-and-stay-details">
                <div className="rectangle">
                  <Image
                    src={currentRoom.image}
                    alt={currentRoom.name}
                    fill
                    sizes="252px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div className="room-stay-details">
                  <p className="deluxe-room">{currentRoom.name}</p>
                  <p className="valencia-patna">VALENCIA · Patna</p>

                  <div className="check-in-and-check-out">
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
                    {nightsCount} {nightsCount === 1 ? "night" : "nights"} · {guest.adults} {guest.adults === "1" ? "adult" : "adults"} · {roomsCount} {roomsCount === 1 ? "room" : "rooms"}
                  </p>

                  <div className="rectangle-2" />

                  <div className="included-room-features">
                    <div className="frame-2">
                      <Image src="/images/booking/Frame.svg" alt="Bed" width={20} height={20} />
                    </div>
                    <p className="king-bed">{currentRoom.bed}</p>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div className="frame-3">
                      <Image src="/images/booking/Frame 2.svg" alt="Rate" width={20} height={20} />
                    </div>
                    <p className="room-only-rate">
                      {selectedRatePlan === "breakfast-included"
                        ? "Breakfast included rate"
                        : "Room only rate"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Guest Details Card */}
            <div className="guest-details">
              <div className="guest-heading">
                <p className="guest-details-2">Guest details</p>
                <button type="button" onClick={handleBackToDetails} className="edit-details">
                  Edit details
                </button>
              </div>

              <div className="guest-data-row">
                <div className="guest-name">
                  <p className="guest-name-2">Guest name</p>
                  <p className="aarav-sharma">
                    {guest.title} {guest.firstName} {guest.lastName}
                  </p>
                </div>
                <div className="mobile-number">
                  <p className="mobile-number-2">Mobile number</p>
                  <p className="layer-91-3210">{maskedPhone}</p>
                </div>
              </div>

              <div className="guest-data-row-2">
                <div className="email-address">
                  <p className="email-address-2">Email address</p>
                  <p className="aarav-example-com">{guest.email}</p>
                </div>
                <div className="estimated-arrival">
                  <p className="estimated-arrival-2">Estimated arrival</p>
                  <p className="layer-3-00-pm">{guest.estimatedArrival}</p>
                </div>
              </div>

              <div className="rectangle-3" />

              <div className="special-request">
                <p className="special-request-2">Special request</p>
                <p className="a-quiet-room-if-available">{guest.specialRequests}</p>
                <p className="requests-are-subject-to-availability">
                  Requests are subject to availability.
                </p>
              </div>
            </div>

            {/* 3. Booking Policies Card */}
            <div className="booking-policies">
              <p className="booking-policies-2">Booking policies</p>

              <div className="cancellation-changes">
                <div className="policy-icon">
                  <div className="frame-4">
                    <Image src="/images/booking/Policy icon.svg" alt="Cancellation policy" width={44} height={44} />
                  </div>
                </div>
                <div className="policy-text">
                  <p className="cancellation-changes-2">Cancellation &amp; changes</p>
                  <p className="your-selected-rate-determines">
                    Your selected rate determines cancellation charges and amendment terms.
                  </p>
                </div>
              </div>

              <div className="rectangle-4" />

              <div className="arrival-departure">
                <div className="policy-icon-2">
                  <div className="frame-5">
                    <Image src="/images/booking/Policy icon 2.svg" alt="Arrival & departure" width={44} height={44} />
                  </div>
                </div>
                <div className="policy-text-2">
                  <p className="arrival-departure-2">Arrival &amp; departure</p>
                  <p className="check-in-and-check-out-timings-will-be">
                    Check-in and check-out timings will be included in your confirmation.
                  </p>
                </div>
              </div>

              <div className="policy-design-preview-notice">
                <div className="frame-6">
                  <Image src="/images/booking/Frame 3.svg" alt="Notice" width={22} height={22} />
                </div>
                <p className="design-preview-final-rate-specific">
                  Design preview: final rate-specific policies are awaiting confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Price Summary Card */}
          <div className="price-summary">
            <div className="rectangle-5">
              <Image
                src={currentRoom.bannerImage}
                alt={currentRoom.name}
                fill
                sizes="(max-width: 768px) 100vw, 492px"
                style={{ objectFit: "cover" }}
              />
              <div className="concept-badge">Concept image</div>
            </div>

            <div className="price-summary-content">
              <p className="price-summary-2">Price summary</p>
              <p className="deluxe-room-2">{currentRoom.name}</p>
              <p className="layer-2-nights-1-room">{nightsCount} {nightsCount === 1 ? "night" : "nights"} · {roomsCount} {roomsCount === 1 ? "room" : "rooms"}</p>

              <div className="rectangle-6" />

              <div className="rs6-000-x-2-nights">
                <p className="rs6-000-x-2-nights-2">
                  {formatPrice(pricePerNight)} × {nightsCount} {nightsCount === 1 ? "night" : "nights"}{roomsCount > 1 ? ` × ${roomsCount} rooms` : ""}
                </p>
                <p className="rs12-000">{formatPrice(staySubtotal)}</p>
              </div>

              <div className="taxes-fees-demo">
                <p className="taxes-fees-demo-2">Taxes &amp; fees (demo)</p>
                <p className="rs1-200">{formatPrice(taxesAndFees)}</p>
              </div>

              <div className="rectangle-7" />

              <div className="total-payable">
                <p className="total-payable-2">Total payable</p>
                <p className="rs13-200">{formatPrice(totalPayable)}</p>
              </div>

              <div className="price-notes">
                <p className="price-in-inr">Price in INR.</p>
                <p className="illustrative-rates-for-design-preview">
                  Illustrative rates for design preview.
                </p>
              </div>

              <div className="no-payment-notice">
                <div className="frame-7">
                  <Image src="/images/booking/Frame 4.svg" alt="Notice" width={22} height={22} />
                </div>
                <p className="no-payment-has-been-taken-yet">No payment has been taken yet.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="agreement-and-continue">
          <div className="agreement-and-back-link">
            <div
              className="terms-acceptance"
              onClick={() => setAgreed(!agreed)}
              role="button"
              tabIndex={0}
            >
              <div className={`checkbox-unchecked ${agreed ? "checked" : ""}`} />
              <p className="i-agree-to-the-terms-conditions-and">
                I agree to the Terms &amp; Conditions and Booking &amp; Cancellation Policy.
              </p>
            </div>
          </div>

          <div className="payment-next-step">
            <button
              type="button"
              disabled={!agreed}
              onClick={handlePayment}
              className="continue-to-payment"
            >
              <p className="continue-to-payment-2">CONTINUE TO PAYMENT</p>
              <div className="frame-8">
                <Image src="/images/booking/Frame 5.svg" alt="Next" width={16} height={16} />
              </div>
            </button>
            <p className="you-will-review-payment-options-on-the">
              You will review payment options on the next step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingReviewReservation;

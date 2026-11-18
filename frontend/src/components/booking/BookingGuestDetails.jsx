"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { BookingReviewReservation } from "./BookingReviewReservation";
import { BookingPayment } from "./BookingPayment";
import { BookingConfirmationHotelContactVersion } from "./BookingConfirmationHotelContactVersion";
import "./css/booking-guest-details.css";

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

export function BookingGuestDetails() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Dynamic parameters from query string
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
  const initialStep = parseInt(searchParams?.get("step") || "2", 10);
  const checkInDate = searchParams?.get("checkin") || "12 Nov 2026";
  const checkOutDate = searchParams?.get("checkout") || "14 Nov 2026";
  const nightsCount = parseInt(searchParams?.get("nights") || "2", 10);

  // Flow State
  const [currentStep, setCurrentStep] = useState(initialStep >= 2 && initialStep <= 4 ? initialStep : 2);

  // Form Fields State
  const [formData, setFormData] = useState({
    title: "Mr.",
    firstName: "Aarav",
    lastName: "Sharma",
    email: "aarav@example.com",
    countryCode: "+91",
    phone: "9876543210",
    adults: "2",
    children: "0",
    estimatedArrival: "3:00 PM",
    specialRequests: "A quiet room, if available.",
    needGst: false,
    gstCompanyName: "",
    gstNumber: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Pricing calculations
  const pricePerNight = selectedRatePlan === "breakfast-included" ? currentRoom.breakfastRate : currentRoom.defaultRate;
  const staySubtotal = pricePerNight * nightsCount;
  const taxesAndFees = Math.round(staySubtotal * 0.1);
  const totalPayable = staySubtotal + taxesAndFees;

  const formatPrice = (val) => "₹" + val.toLocaleString("en-IN");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleValidateAndContinue = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) errors.email = "Valid email is required";
    if (!formData.phone.trim()) errors.phone = "Mobile number is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setCurrentStep(3);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToStep2 = () => {
    setCurrentStep(2);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProceedToPayment = () => {
    if (!agreedToTerms) return;
    setCurrentStep(4);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const maskedPhone = useMemo(() => {
    const p = formData.phone;
    if (p.length <= 4) return `${formData.countryCode} •••••••${p}`;
    return `${formData.countryCode} •••••••${p.slice(-4)}`;
  }, [formData.phone, formData.countryCode]);

  if (currentStep === 3) {
    return (
      <BookingReviewReservation
        guestData={formData}
        onBack={handleBackToStep2}
        onEditDetails={handleBackToStep2}
        onEditRoom={() => router.push(currentRoom.roomPage)}
        onProceedPayment={() => {
          setCurrentStep(4);
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      />
    );
  }

  if (currentStep === 4) {
    return (
      <BookingPayment
        onBack={() => {
          setCurrentStep(3);
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        onComplete={() => {
          setCurrentStep(5);
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      />
    );
  }

  if (currentStep === 5) {
    return (
      <BookingConfirmationHotelContactVersion
        guestData={formData}
        bookingReference="VAL-DEMO-1026"
      />
    );
  }

  return (
    <div className="booking-page-wrapper">
      <div className="booking-guest-details">
        {/* ================= SECURE BOOKING HEADER ================= */}
        <header className="secure-booking-header">
          <Link href="/" className="brand-valencia-logo">
            <div className="original-emblem" />
            <div className="wordmark">
              <p className="valencia">VALENCIA</p>
              <p className="brand-descriptor">A LUXURY BOUTIQUE HOTEL</p>
            </div>
          </Link>

          <div className="booking-navigation">
            {currentStep === 2 && (
              <Link href={currentRoom.roomPage} className="back-to-room">
                <div className="back">
                  <Image src="/images/booking/Back.svg" alt="Back" width={20} height={20} />
                </div>
                <p className="back-to-room-2">Back to room</p>
              </Link>
            )}

            {currentStep === 3 && (
              <button type="button" onClick={handleBackToStep2} className="back-to-room">
                <div className="back">
                  <Image src="/images/booking/Back.svg" alt="Back" width={20} height={20} />
                </div>
                <p className="back-to-room-2">Back to guest details</p>
              </button>
            )}

            {currentStep === 4 && (
              <Link href="/" className="back-to-room">
                <div className="back">
                  <Image src="/images/booking/Back.svg" alt="Back" width={20} height={20} />
                </div>
                <p className="back-to-room-2">Back to home</p>
              </Link>
            )}

            <div className="secure-badge">
              <div className="secure-lock">
                <Image src="/images/booking/Secure lock.svg" alt="Secure lock" width={20} height={20} />
              </div>
              <p className="secure-booking">Secure booking</p>
            </div>
          </div>
        </header>

        {/* ================= STEP PROGRESS BAR ================= */}
        <nav aria-label="Booking steps" className="booking-progress">
          {/* Step 1: Rooms */}
          <Link href="/rooms" className="step-item" style={{ textDecoration: "none" }}>
            <div className="step-indicator completed">
              <Image src="/images/booking/Step indicator.svg" alt="Step 1 completed" width={32} height={32} />
            </div>
            <p className="step-label completed">Rooms</p>
          </Link>

          <div className="progress-connector" />

          {/* Step 2: Details */}
          <button
            type="button"
            className="step-item"
            onClick={() => currentStep > 2 && setCurrentStep(2)}
            style={{ cursor: currentStep > 2 ? "pointer" : "default" }}
          >
            <div
              className={`step-indicator ${
                currentStep > 2 ? "completed" : currentStep === 2 ? "active" : ""
              }`}
            >
              {currentStep > 2 ? (
                <Image src="/images/booking/Step indicator.svg" alt="Step 2 completed" width={32} height={32} />
              ) : (
                "2"
              )}
            </div>
            <p className={`step-label ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}>
              Details
            </p>
          </button>

          <div className="progress-connector" />

          {/* Step 3: Review */}
          <button
            type="button"
            className="step-item"
            onClick={() => currentStep > 3 && setCurrentStep(3)}
            style={{ cursor: currentStep > 3 ? "pointer" : "default" }}
          >
            <div
              className={`step-indicator ${
                currentStep > 3 ? "completed" : currentStep === 3 ? "active" : ""
              }`}
            >
              {currentStep > 3 ? (
                <Image src="/images/booking/Step indicator.svg" alt="Step 3 completed" width={32} height={32} />
              ) : (
                "3"
              )}
            </div>
            <p className={`step-label ${currentStep === 3 ? "active" : currentStep > 3 ? "completed" : ""}`}>
              Review
            </p>
          </button>

          <div className="progress-connector" />

          {/* Step 4: Payment */}
          <div className="step-item">
            <div className={`step-indicator ${currentStep === 4 ? "active" : ""}`}>4</div>
            <p className={`step-label ${currentStep === 4 ? "active" : ""}`}>Payment</p>
          </div>
        </nav>

        {/* ================= STEP 2: GUEST DETAILS ================= */}
        {currentStep === 2 && (
          <div className="step-2-view">
            <div className="guest-details-introduction">
              <h1 className="guest-details">Guest Details</h1>
              <p className="add-your-guest-details-then-review-your">
                Add your guest details, then review your reservation.
              </p>
            </div>

            <div className="guest-form-and-reservation">
              {/* Left Column: Form */}
              <div className="guest-information">
                <div className="account-or-guest">
                  <div className="account-prompt">
                    <div className="account-benefits">
                      <p className="already-have-an-account">Already have an account?</p>
                      <p className="login-to-speed-up-your-booking-or">
                        Login to speed up your booking or create a new account.
                      </p>
                    </div>
                    <div className="login-or-register">
                      <button type="button" className="login-link">
                        Login
                      </button>
                      <span className="divider-text">|</span>
                      <button type="button" className="register-link">
                        Register
                      </button>
                    </div>
                  </div>

                  <div className="continue-as-guest-selected">
                    <div className="selected-radio">
                      <div className="radio-dot" />
                    </div>
                    <div className="guest-booking-explanation">
                      <p className="continue-as-guest">Continue as Guest</p>
                      <p className="book-without-an-account-we-ll-only-use">
                        Book without an account. We’ll only use your details for this reservation.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleValidateAndContinue} className="guest-details-form">
                  <div className="form-heading">
                    <h2 className="guest-details-2">Guest details</h2>
                    <p className="required-fields">* Required fields</p>
                  </div>

                  {/* Name Fields */}
                  <div className="name-fields">
                    <div className="form-group">
                      <label className="form-label" htmlFor="title-select">Title *</label>
                      <select
                        id="title-select"
                        className="form-select"
                        value={formData.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Dr.">Dr.</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="first-name-input">First name *</label>
                      <input
                        id="first-name-input"
                        type="text"
                        className="form-input"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                      />
                      {formErrors.firstName && <span style={{ color: "#B91C1C", fontSize: 12 }}>{formErrors.firstName}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="last-name-input">Last name *</label>
                      <input
                        id="last-name-input"
                        type="text"
                        className="form-input"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                      />
                      {formErrors.lastName && <span style={{ color: "#B91C1C", fontSize: 12 }}>{formErrors.lastName}</span>}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="contact-fields">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email-input">Email address *</label>
                      <input
                        id="email-input"
                        type="email"
                        className="form-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                      {formErrors.email && <span style={{ color: "#B91C1C", fontSize: 12 }}>{formErrors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone-input">Mobile number *</label>
                      <div className="phone-input-wrap">
                        <div className="phone-prefix">{formData.countryCode}</div>
                        <input
                          id="phone-input"
                          type="tel"
                          className="form-input"
                          placeholder="Mobile number"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      {formErrors.phone && <span style={{ color: "#B91C1C", fontSize: 12 }}>{formErrors.phone}</span>}
                    </div>
                  </div>

                  <p className="contact-guidance">
                    Booking updates will be sent to your email and mobile.
                  </p>

                  {/* Guests and Arrival */}
                  <div className="guests-and-arrival">
                    <div className="form-group">
                      <label className="form-label" htmlFor="adults-select">Adults *</label>
                      <select
                        id="adults-select"
                        className="form-select"
                        value={formData.adults}
                        onChange={(e) => handleChange("adults", e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="children-select">Children *</label>
                      <select
                        id="children-select"
                        className="form-select"
                        value={formData.children}
                        onChange={(e) => handleChange("children", e.target.value)}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="arrival-select">Estimated arrival (Optional)</label>
                      <select
                        id="arrival-select"
                        className="form-select"
                        value={formData.estimatedArrival}
                        onChange={(e) => handleChange("estimatedArrival", e.target.value)}
                      >
                        <option value="Select time">Select time</option>
                        <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                        <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                        <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                        <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                        <option value="After 6:00 PM">After 6:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="special-requests">Special requests (optional)</label>
                    <textarea
                      id="special-requests"
                      className="form-textarea"
                      maxLength={250}
                      placeholder="Let us know how we can make your stay more comfortable."
                      value={formData.specialRequests}
                      onChange={(e) => handleChange("specialRequests", e.target.value)}
                    />
                    <div className="request-meta-row">
                      <p className="requests-are-subject-to-availability">
                        Requests are subject to availability.
                      </p>
                      <p className="char-count">{formData.specialRequests.length}/250</p>
                    </div>
                  </div>

                  {/* GST Invoice */}
                  <div
                    className="gst-invoice-option"
                    onClick={() => handleChange("needGst", !formData.needGst)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`checkbox-custom ${formData.needGst ? "checked" : ""}`} />
                    <p className="gst-label">I need a GST invoice (optional)</p>
                  </div>

                  {formData.needGst && (
                    <div className="gst-fields">
                      <div className="form-group">
                        <label className="form-label" htmlFor="gst-company">Company Name</label>
                        <input
                          id="gst-company"
                          type="text"
                          className="form-input"
                          placeholder="Registered Company Name"
                          value={formData.gstCompanyName}
                          onChange={(e) => handleChange("gstCompanyName", e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="gst-number">GST Identification Number</label>
                        <input
                          id="gst-number"
                          type="text"
                          className="form-input"
                          placeholder="e.g. 10AAAAA0000A1Z5"
                          value={formData.gstNumber}
                          onChange={(e) => handleChange("gstNumber", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="form-actions">
                    <Link href={currentRoom.roomPage} className="return-to-room">
                      <div className="back">
                        <Image src="/images/booking/Back.svg" alt="Back" width={18} height={18} />
                      </div>
                      <span>Back to room</span>
                    </Link>

                    <button type="submit" className="btn-continue-review">
                      <span>CONTINUE TO REVIEW</span>
                      <Image src="/images/booking/Frame 5.svg" alt="Next" width={16} height={16} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Your Reservation Card (Step 2) */}
              <div className="your-reservation-summary">
                <div className="deluxe-room-reference-crop">
                  <Image
                    src={currentRoom.image}
                    alt={currentRoom.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 492px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div className="reservation-information">
                  <h3 className="your-reservation">Your reservation</h3>
                  <p className="valencia-patna">VALENCIA · Patna</p>
                  <p className="deluxe-room">{currentRoom.name}</p>
                  <p className="king-bed-2-adults-1-room">
                    {currentRoom.bed} · {formData.adults} adults · 1 room
                  </p>

                  <div className="card-divider" />

                  <div className="stay-dates">
                    <div className="date-col">
                      <p className="date-col-label">Check-in</p>
                      <p className="date-col-val">{checkInDate}</p>
                    </div>
                    <div className="date-col">
                      <p className="date-col-label">Check-out</p>
                      <p className="date-col-val">{checkOutDate}</p>
                    </div>
                    <div className="date-col">
                      <p className="date-col-label">Nights</p>
                      <p className="date-col-val">{nightsCount} nights</p>
                    </div>
                  </div>

                  <div className="change-dates">
                    <Link href={currentRoom.roomPage} className="edit-dates">
                      Edit dates
                    </Link>
                  </div>

                  <div className="card-divider" />

                  <div className="selected-rate-plan">
                    <p className="rate-plan-label">Rate plan</p>
                    <p className="rate-plan-val">
                      {selectedRatePlan === "breakfast-included" ? "Breakfast included" : "Room only"}
                    </p>
                  </div>

                  <div className="card-divider" />

                  <div className="price-line-row">
                    <p className="price-line-label">
                      {formatPrice(pricePerNight)} × {nightsCount} nights
                    </p>
                    <p className="price-line-val">{formatPrice(staySubtotal)}</p>
                  </div>

                  <div className="price-line-row">
                    <p className="price-line-label">Taxes &amp; fees (demo)</p>
                    <p className="price-line-val">{formatPrice(taxesAndFees)}</p>
                  </div>

                  <div className="card-divider" />

                  <div className="total-price-row">
                    <p className="total-label">Total</p>
                    <p className="total-val">{formatPrice(totalPayable)}</p>
                  </div>

                  <div className="price-notes">
                    <p>Price in INR.</p>
                    <p>Illustrative rates for design preview.</p>
                  </div>

                  <div className="cancellation-information">
                    <Image src="/images/booking/Frame 3.svg" alt="Info" width={22} height={22} />
                    <p className="cancellation-terms-will-be-shown-with">
                      Cancellation terms will be shown with your selected rate before confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: REVIEW RESERVATION (MATCHING SCREENSHOT) ================= */}
        {currentStep === 3 && (
          <div className="step-3-view">
            <div className="guest-details-introduction">
              <h1 className="guest-details">Review your reservation.</h1>
              <p className="add-your-guest-details-then-review-your">
                Check your stay and guest details before continuing to payment.
              </p>
            </div>

            <div className="guest-form-and-reservation">
              {/* Left Column: Review Cards */}
              <div className="review-left-column">
                {/* 1. Your Stay Card */}
                <div className="review-card">
                  <div className="review-card-header">
                    <h2 className="review-card-title">Your stay</h2>
                    <Link href={currentRoom.roomPage} className="btn-edit-link">
                      Edit room &amp; dates
                    </Link>
                  </div>

                  <div className="your-stay-content">
                    <div className="your-stay-thumb">
                      <Image
                        src={currentRoom.image}
                        alt={currentRoom.name}
                        fill
                        sizes="220px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="your-stay-details">
                      <h3 className="your-stay-room-name">{currentRoom.name}</h3>
                      <p className="your-stay-hotel-loc">VALENCIA · Patna</p>

                      <div className="your-stay-dates-row">
                        <div className="your-stay-date-box">
                          <p className="your-stay-date-lbl">Check-in</p>
                          <p className="your-stay-date-val">{checkInDate}</p>
                        </div>
                        <div className="your-stay-date-box">
                          <p className="your-stay-date-lbl">Check-out</p>
                          <p className="your-stay-date-val">{checkOutDate}</p>
                        </div>
                      </div>

                      <p className="your-stay-meta">
                        {nightsCount} nights · {formData.adults} adults · 1 room
                      </p>

                      <div className="your-stay-badges">
                        <div className="stay-badge-item">
                          <Image src="/images/booking/Frame.svg" alt="Bed" width={18} height={18} />
                          <span>{currentRoom.bed}</span>
                        </div>
                        <span className="stay-badge-sep">|</span>
                        <div className="stay-badge-item">
                          <Image src="/images/booking/Frame 2.svg" alt="Rate" width={18} height={18} />
                          <span>
                            {selectedRatePlan === "breakfast-included"
                              ? "Breakfast included rate"
                              : "Room only rate"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Guest Details Card */}
                <div className="review-card">
                  <div className="review-card-header">
                    <h2 className="review-card-title">Guest details</h2>
                    <button type="button" onClick={handleBackToStep2} className="btn-edit-link">
                      Edit details
                    </button>
                  </div>

                  <div className="guest-details-review-grid">
                    <div className="guest-review-field">
                      <p className="guest-review-lbl">Guest name</p>
                      <p className="guest-review-val">
                        {formData.title} {formData.firstName} {formData.lastName}
                      </p>
                    </div>

                    <div className="guest-review-field">
                      <p className="guest-review-lbl">Mobile number</p>
                      <p className="guest-review-val">{maskedPhone}</p>
                    </div>

                    <div className="guest-review-field">
                      <p className="guest-review-lbl">Email address</p>
                      <p className="guest-review-val">{formData.email}</p>
                    </div>

                    <div className="guest-review-field">
                      <p className="guest-review-lbl">Estimated arrival</p>
                      <p className="guest-review-val">{formData.estimatedArrival || "3:00 PM"}</p>
                    </div>
                  </div>

                  <div className="special-request-review">
                    <p className="guest-review-lbl">Special request</p>
                    <p className="special-request-text">
                      {formData.specialRequests || "A quiet room, if available."}
                    </p>
                    <p className="requests-are-subject-to-availability">
                      Requests are subject to availability.
                    </p>
                  </div>
                </div>

                {/* 3. Booking Policies Card */}
                <div className="review-card">
                  <div className="review-card-header">
                    <h2 className="review-card-title">Booking policies</h2>
                  </div>

                  <div className="booking-policies-list">
                    <div className="policy-review-row">
                      <div className="policy-review-icon">
                        <Image src="/images/booking/Policy icon.svg" alt="Cancellation policy" width={44} height={44} />
                      </div>
                      <div className="policy-review-texts">
                        <p className="policy-review-title">Cancellation &amp; changes</p>
                        <p className="policy-review-desc">
                          Your selected rate determines cancellation charges and amendment terms.
                        </p>
                      </div>
                    </div>

                    <div className="policy-review-row">
                      <div className="policy-review-icon">
                        <Image src="/images/booking/Policy icon 2.svg" alt="Arrival & departure" width={44} height={44} />
                      </div>
                      <div className="policy-review-texts">
                        <p className="policy-review-title">Arrival &amp; departure</p>
                        <p className="policy-review-desc">
                          Check-in and check-out timings will be included in your confirmation.
                        </p>
                      </div>
                    </div>

                    <div className="policies-design-preview-note">
                      <Image src="/images/booking/Frame 3.svg" alt="Notice" width={22} height={22} />
                      <p className="design-preview-text">
                        Design preview: final rate-specific policies are awaiting confirmation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Agreement & Continue Button */}
                <div className="agreement-and-continue">
                  <div
                    className="terms-acceptance"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`checkbox-custom ${agreedToTerms ? "checked" : ""}`} />
                    <p className="i-agree-to-the-terms-conditions-and">
                      I agree to the Terms &amp; Conditions and Booking &amp; Cancellation Policy.
                    </p>
                  </div>

                  <div className="payment-next-step">
                    <button
                      type="button"
                      disabled={!agreedToTerms}
                      onClick={handleProceedToPayment}
                      className="continue-to-payment"
                    >
                      <span className="continue-to-payment-2">CONTINUE TO PAYMENT</span>
                      <Image src="/images/booking/Frame 5.svg" alt="Next" width={16} height={16} />
                    </button>
                    <p className="you-will-review-payment-options-on-the">
                      You will review payment options on the next step.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Price Summary Card (Step 3) */}
              <div className="booking-price-summary">
                <div className="price-summary-banner">
                  <Image
                    src={currentRoom.bannerImage}
                    alt={currentRoom.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 492px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="concept-image-badge">Concept image</div>
                </div>

                <div className="price-summary-content">
                  <h3 className="price-summary-2">Price summary</h3>
                  <p className="deluxe-room-2">{currentRoom.name}</p>
                  <p className="layer-2-nights-1-room">{nightsCount} nights · 1 room</p>

                  <div className="card-divider" />

                  <div className="price-line-row">
                    <p className="price-line-label">
                      {formatPrice(pricePerNight)} × {nightsCount} nights
                    </p>
                    <p className="price-line-val">{formatPrice(staySubtotal)}</p>
                  </div>

                  <div className="price-line-row">
                    <p className="price-line-label">Taxes &amp; fees (demo)</p>
                    <p className="price-line-val">{formatPrice(taxesAndFees)}</p>
                  </div>

                  <div className="card-divider" />

                  <div className="total-payable">
                    <p className="total-payable-2">Total payable</p>
                    <p className="rs13-200">{formatPrice(totalPayable)}</p>
                  </div>

                  <div className="price-notes">
                    <p>Price in INR.</p>
                    <p>Illustrative rates for design preview.</p>
                  </div>

                  <div className="no-payment-notice">
                    <Image src="/images/booking/Frame 4.svg" alt="Notice" width={22} height={22} />
                    <p className="no-payment-has-been-taken-yet">No payment has been taken yet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 4: PAYMENT CONFIRMATION DEMO ================= */}
        {currentStep === 4 && (
          <div className="payment-step-container">
            <div className="payment-success-icon">✓</div>
            <h1 className="payment-success-title">Reservation Confirmed</h1>
            <p className="payment-success-desc">
              Thank you, {formData.title} {formData.firstName} {formData.lastName}. Your booking at
              VALENCIA Patna has been reserved. A confirmation email has been dispatched to {formData.email}.
            </p>

            <div className="payment-meta-card">
              <div className="payment-meta-item">
                <p className="payment-meta-lbl">Booking Reference</p>
                <p className="payment-meta-val">VAL-2026-84920</p>
              </div>
              <div className="payment-meta-item">
                <p className="payment-meta-lbl">Selected Room</p>
                <p className="payment-meta-val">{currentRoom.name}</p>
              </div>
              <div className="payment-meta-item">
                <p className="payment-meta-lbl">Stay Duration</p>
                <p className="payment-meta-val">
                  {checkInDate} — {checkOutDate} ({nightsCount} nights)
                </p>
              </div>
              <div className="payment-meta-item">
                <p className="payment-meta-lbl">Total Payable</p>
                <p className="payment-meta-val">{formatPrice(totalPayable)}</p>
              </div>
            </div>

            <div className="payment-actions">
              <Link href="/" className="btn-home-return">
                Return to Home
              </Link>
              <Link href="/rooms" className="btn-home-return" style={{ background: "#C9A96A" }}>
                Explore Other Rooms
              </Link>
            </div>
          </div>
        )}

        {/* ================= BOOKING FOOTER ================= */}
        <footer className="booking-footer">
          <div className="booking-footer-divider" />
          <div className="footer-links">
            <p className="c-2026-valencia">© 2026 VALENCIA</p>
            <p className="privacy-policy-booking-cancellation">
              Privacy Policy &nbsp;&nbsp;|&nbsp;&nbsp; Booking &amp; Cancellation
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default BookingGuestDetails;

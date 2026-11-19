"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import "./css/cab-taxi-book-flow.css";

const PICKUP_OPTIONS = [
  {
    id: "airport",
    title: "Airport",
    subtitle: "Pick up from Patna Airport (PAT)",
    locationName: "Patna Airport (PAT)",
    icon: "/images/cab booking/trip details/Frame 80.svg",
    guidance: "Allow time for baggage collection when choosing your pickup time.",
  },
  {
    id: "railway",
    title: "Railway station",
    subtitle: "Pick up from Patna railway station",
    locationName: "Patna Junction Railway Station",
    icon: "/images/cab booking/trip details/Pickup/reference outline.svg",
    guidance: "Allow time for train arrival and platform exit when choosing your pickup time.",
  },
  {
    id: "other",
    title: "Other location",
    subtitle: "Pick up from a different address in Patna",
    locationName: "Fraser Road, near Buddha Smriti Park",
    icon: "/images/cab booking/trip details/Pickup/reference outline 2.svg",
    guidance: "Enter the exact address where you would like to be picked up.",
  },
];

const TIME_OPTIONS = [
  "08:00 AM IST",
  "10:00 AM IST",
  "12:00 PM IST",
  "02:00 PM IST",
  "03:30 PM IST",
  "05:00 PM IST",
  "06:30 PM IST",
  "08:00 PM IST",
  "09:30 PM IST",
];

export function CabTaxiBookFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL Query Parameters or Defaults
  const checkInParam = searchParams.get("checkIn") || "12 Nov 2026";
  const bookingRefParam = searchParams.get("bookingRef") || "VAL-DEMO-1026";
  const guestNameParam = searchParams.get("guest") || "Aarav Sharma";

  // State Management
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPickup, setSelectedPickup] = useState("airport");
  const [customAddress, setCustomAddress] = useState("Fraser Road, near Buddha Smriti Park");
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [pickupDate, setPickupDate] = useState(checkInParam);
  const [pickupTime, setPickupTime] = useState("02:00 PM IST");
  const [passengers, setPassengers] = useState(2);
  const [largeBags, setLargeBags] = useState(2);

  // Contact info
  const [guestName, setGuestName] = useState(guestNameParam);
  const [guestEmail, setGuestEmail] = useState("aarav@example.com");
  const [guestPhone, setGuestPhone] = useState("+91 ••••••3210");
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [tempContact, setTempContact] = useState({ name: guestName, email: guestEmail, phone: guestPhone });

  // Popover state
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const timeDropdownRef = useRef(null);
  const dateDropdownRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(e.target)) {
        setShowTimeDropdown(false);
      }
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(e.target)) {
        setShowDateDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentOption = PICKUP_OPTIONS.find((opt) => opt.id === selectedPickup) || PICKUP_OPTIONS[0];

  const displayLocation =
    selectedPickup === "other"
      ? customAddress || "Select a pickup address"
      : currentOption.locationName;

  const isContinueDisabled = selectedPickup === "other" && !customAddress.trim();

  // Navigation handlers
  const handleBackToBooking = () => {
    router.push("/booking/confirmation");
  };

  const handleChooseVehicle = () => {
    if (isContinueDisabled) return;
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  const handleSaveContact = () => {
    setGuestName(tempContact.name);
    setGuestEmail(tempContact.email);
    setGuestPhone(tempContact.phone);
    setIsEditingContact(false);
  };

  return (
    <div className="cab-taxi-book-flow-wrapper">
      <div className="cab-taxi-book-flow">
        {/* ================= HEADER ================= */}
        <header className="cab-header">
          <Link href="/" className="brand-valencia-logo">
            <div className="original-emblem" />
            <div className="wordmark">
              <p className="valencia">VALENCIA</p>
              <p className="brand-descriptor">A LUXURY BOUTIQUE HOTEL</p>
            </div>
          </Link>

          <div className="account-navigation">
            <button
              type="button"
              className="back-to-booking-btn"
              onClick={handleBackToBooking}
              aria-label="Back to booking"
            >
              <div style={{ width: 18, height: 18, position: "relative", display: "flex", alignItems: "center" }}>
                <Image
                  src="/images/cab booking/trip details/back icon.svg"
                  alt="Back"
                  width={18}
                  height={18}
                  unoptimized
                />
              </div>
              <span className="back-text">Back to booking</span>
            </button>

            <div className="nav-divider" />

            <div className="user-profile-badge">
              <div className="user-avatar">
                <span>{guestName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}</span>
              </div>
              <span className="user-name">Hi {guestName.split(" ")[0]}</span>
              <div className="user-chevron">
                <Image
                  src="/images/cab booking/trip details/chev icon.svg"
                  alt="Expand"
                  width={14}
                  height={14}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </header>

        <div className="header-bottom-line" />

        {/* ================= 4-STEP PROGRESS BAR ================= */}
        <div className="booking-progress-container">
          <div className="booking-progress">
            {/* Step 1: Trip details (Active) */}
            <div className={`step-item ${currentStep === 1 ? "active" : currentStep > 1 ? "completed" : ""}`}>
              <div className="step-circle">1</div>
              <span className="step-label">Trip details</span>
            </div>

            <div className="step-connector" />

            {/* Step 2: Vehicle & fare */}
            <div className={`step-item ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}>
              <div className="step-circle">2</div>
              <span className="step-label">Vehicle &amp; fare</span>
            </div>

            <div className="step-connector" />

            {/* Step 3: Review & payment */}
            <div className={`step-item ${currentStep === 3 ? "active" : currentStep > 3 ? "completed" : ""}`}>
              <div className="step-circle">3</div>
              <span className="step-label">Review &amp; payment</span>
            </div>

            <div className="step-connector" />

            {/* Step 4: Confirmation */}
            <div className={`step-item ${currentStep === 4 ? "active" : ""}`}>
              <div className="step-circle">4</div>
              <span className="step-label">Confirmation</span>
            </div>
          </div>
        </div>

        {/* ================= PAGE INTRODUCTION ================= */}
        <section className="page-introduction">
          <p className="your-arrival-eyebrow">YOUR ARRIVAL</p>
          <h1 className="a-smooth-arrival-starts-here">A smooth arrival starts here.</h1>
          <p className="choose-your-pickup-subtitle">
            Choose your pickup. We’ll help you plan the ride.
          </p>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <main className="trip-details-content">
          {/* Pickup Options Cards */}
          <div className="pickup-options-grid" role="radiogroup" aria-label="Pickup options">
            {PICKUP_OPTIONS.map((opt) => {
              const isSelected = selectedPickup === opt.id;
              return (
                <div
                  key={opt.id}
                  className={`pickup-card ${isSelected ? "selected" : ""}`}
                  onClick={() => {
                    setSelectedPickup(opt.id);
                    if (opt.id === "other") {
                      setIsEditingAddress(true);
                    }
                  }}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedPickup(opt.id);
                    }
                  }}
                >
                  <div className="pickup-card-left">
                    <div className="pickup-card-icon">
                      <Image
                        src={opt.icon}
                        alt={opt.title}
                        width={44}
                        height={44}
                        unoptimized
                      />
                    </div>
                    <div className="pickup-card-info">
                      <p className="pickup-card-title">{opt.title}</p>
                      <p className="pickup-card-subtitle">{opt.subtitle}</p>
                    </div>
                  </div>

                  <div className="pickup-card-radio">
                    {isSelected ? (
                      <Image
                        src="/images/cab booking/trip details/Selection.svg"
                        alt="Selected"
                        width={24}
                        height={24}
                        unoptimized
                      />
                    ) : (
                      <div className="radio-unselected" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Editable address if "Other location" is selected */}
          {selectedPickup === "other" && (
            <div className="custom-address-row">
              <label htmlFor="pickup-custom-address">Enter Pickup Address in Patna</label>
              <div className="custom-address-input-wrap">
                <input
                  id="pickup-custom-address"
                  type="text"
                  className="custom-address-input"
                  placeholder="e.g. Fraser Road, near Buddha Smriti Park, Patna"
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  autoFocus={isEditingAddress}
                />
              </div>
            </div>
          )}

          {/* YOUR ROUTE Card */}
          <div className="your-route-card">
            {/* Header: Title + Tag */}
            <div className="route-card-header">
              <span className="route-eyebrow">YOUR ROUTE</span>
              <span className="one-way-badge">One-way transfer</span>
            </div>

            {/* Visual Route */}
            <div className="route-visual-row">
              {/* Pickup Point */}
              <div className="pickup-location-block">
                <div className="pin-icon-wrap">
                  <Image
                    src="/images/cab booking/trip details/Frame.svg"
                    alt="Pickup Pin"
                    width={36}
                    height={36}
                    unoptimized
                  />
                </div>
                <div className="pickup-location-text">
                  <p className="pickup-location-name">{displayLocation}</p>
                  <button
                    type="button"
                    className="change-pickup-link"
                    onClick={() => {
                      if (selectedPickup === "other") {
                        setIsEditingAddress(true);
                      } else {
                        setSelectedPickup("other");
                        setIsEditingAddress(true);
                      }
                    }}
                  >
                    Change pickup
                  </button>
                </div>
              </div>

              {/* Connector line with Car */}
              <div className="route-connector-line">
                <div className="line-segment" />
                <div className="car-badge">
                  <Image
                    src="/images/cab booking/trip details/car icon.svg"
                    alt="Cab Car"
                    width={44}
                    height={34}
                    unoptimized
                  />
                </div>
                <div className="line-segment" />
              </div>

              {/* Destination Hotel */}
              <div className="destination-location-block">
                <div className="hotel-badge-wrap">
                  <Image
                    src="/images/cab booking/trip details/Hotel icon.svg"
                    alt="Valencia Hotel"
                    width={52}
                    height={52}
                    unoptimized
                  />
                </div>
                <div className="destination-location-text">
                  <p className="destination-hotel-name">VALENCIA · Patna</p>
                  <p className="destination-hotel-desc">Your booked hotel</p>
                </div>
              </div>
            </div>

            <div className="route-divider" />

            {/* Route Controls (Date / Time / Passengers / Bags) */}
            <div className="route-controls-row">
              {/* Pickup Date */}
              <div
                className="control-field-block"
                ref={dateDropdownRef}
                onClick={() => setShowDateDropdown(!showDateDropdown)}
              >
                <div className="field-icon-wrap">
                  <Image
                    src="/images/cab booking/trip details/calendar icon.svg"
                    alt="Calendar"
                    width={26}
                    height={26}
                    unoptimized
                  />
                </div>
                <div className="field-content">
                  <span className="field-label">Pickup date</span>
                  <span className="field-value">{pickupDate}</span>
                </div>
                <div className="field-chevron">
                  <Image
                    src="/images/cab booking/trip details/chev icon 2.svg"
                    alt="Chevron"
                    width={14}
                    height={14}
                    unoptimized
                  />
                </div>
                <div className="control-divider-v" />

                {showDateDropdown && (
                  <div className="dropdown-popover">
                    {["12 Nov 2026", "13 Nov 2026", "14 Nov 2026", "15 Nov 2026"].map((d) => (
                      <div
                        key={d}
                        className={`dropdown-item ${pickupDate === d ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPickupDate(d);
                          setShowDateDropdown(false);
                        }}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pickup Time */}
              <div
                className="control-field-block"
                ref={timeDropdownRef}
                onClick={() => setShowTimeDropdown(!showTimeDropdown)}
              >
                <div className="field-icon-wrap">
                  <Image
                    src="/images/cab booking/trip details/clock icon.svg"
                    alt="Clock"
                    width={26}
                    height={26}
                    unoptimized
                  />
                </div>
                <div className="field-content">
                  <span className="field-label">Pickup time</span>
                  <span className="field-value">{pickupTime}</span>
                </div>
                <div className="field-chevron">
                  <Image
                    src="/images/cab booking/trip details/chev icon 3.svg"
                    alt="Chevron"
                    width={14}
                    height={14}
                    unoptimized
                  />
                </div>
                <div className="control-divider-v" />

                {showTimeDropdown && (
                  <div className="dropdown-popover">
                    {TIME_OPTIONS.map((t) => (
                      <div
                        key={t}
                        className={`dropdown-item ${pickupTime === t ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPickupTime(t);
                          setShowTimeDropdown(false);
                        }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Passengers Counter */}
              <div className="control-counter-block">
                <div className="field-icon-wrap">
                  <Image
                    src="/images/cab booking/trip details/user icon.svg"
                    alt="Passengers"
                    width={26}
                    height={26}
                    unoptimized
                  />
                </div>
                <span className="counter-label-wrap">Passengers</span>
                <div className="counter-actions">
                  <button
                    type="button"
                    className="counter-btn"
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                    disabled={passengers <= 1}
                    aria-label="Decrease passengers"
                  >
                    −
                  </button>
                  <span className="counter-value-num">{passengers}</span>
                  <button
                    type="button"
                    className="counter-btn"
                    onClick={() => setPassengers(Math.min(8, passengers + 1))}
                    disabled={passengers >= 8}
                    aria-label="Increase passengers"
                  >
                    +
                  </button>
                </div>
                <div className="control-divider-v" />
              </div>

              {/* Large Bags Counter */}
              <div className="control-counter-block">
                <div className="field-icon-wrap">
                  <Image
                    src="/images/cab booking/trip details/bag icon.svg"
                    alt="Bags"
                    width={26}
                    height={26}
                    unoptimized
                  />
                </div>
                <span className="counter-label-wrap">Large bags</span>
                <div className="counter-actions">
                  <button
                    type="button"
                    className="counter-btn"
                    onClick={() => setLargeBags(Math.max(0, largeBags - 1))}
                    disabled={largeBags <= 0}
                    aria-label="Decrease large bags"
                  >
                    −
                  </button>
                  <span className="counter-value-num">{largeBags}</span>
                  <button
                    type="button"
                    className="counter-btn"
                    onClick={() => setLargeBags(Math.min(6, largeBags + 1))}
                    disabled={largeBags >= 6}
                    aria-label="Increase large bags"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Guidance note */}
            <div className="route-guidance-note">
              <span className="guidance-icon">ⓘ</span>
              <span>{currentOption.guidance}</span>
            </div>
          </div>

          {/* Pickup Contact Bar */}
          <div className="pickup-contact-bar">
            <div className="contact-left">
              <div className="contact-avatar-circle">
                <span>{guestName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}</span>
              </div>
              <div className="contact-info-text">
                <span className="contact-label">Pickup contact</span>
                <span className="contact-string">
                  {guestName} &nbsp;·&nbsp; {guestEmail} &nbsp;·&nbsp; {guestPhone}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="edit-contact-btn"
              onClick={() => {
                setTempContact({ name: guestName, email: guestEmail, phone: guestPhone });
                setIsEditingContact(true);
              }}
            >
              <Image
                src="/images/cab booking/trip details/Edit pencil.svg"
                alt="Edit"
                width={18}
                height={18}
                unoptimized
              />
              <span>Edit details</span>
            </button>
          </div>

          {/* Linked Hotel Reservation */}
          <div className="linked-stay-notice">
            <div className="linked-icon">
              <Image
                src="/images/cab booking/trip details/Frame 2.svg"
                alt="Linked Stay"
                width={22}
                height={22}
                unoptimized
              />
            </div>
            <span className="linked-text-main" onClick={handleBackToBooking}>
              Linked to your confirmed stay
            </span>
            <span className="linked-sep">|</span>
            <span className="linked-ref-details">
              {bookingRefParam} · Check-in {checkInParam}
            </span>
          </div>

          {/* Page Actions Footer */}
          <div className="page-actions-row">
            <button
              type="button"
              className="back-action-btn"
              onClick={handleBackToBooking}
            >
              <Image
                src="/images/cab booking/trip details/back icon 2.svg"
                alt="Back"
                width={20}
                height={20}
                unoptimized
              />
              <span>Back to booking</span>
            </button>

            <div className="continue-action-wrap">
              <button
                type="button"
                className="choose-vehicle-cta"
                disabled={isContinueDisabled}
                onClick={handleChooseVehicle}
              >
                <span>CHOOSE A VEHICLE</span>
                <Image
                  src="/images/cab booking/trip details/arrow icon.svg"
                  alt="Arrow right"
                  width={22}
                  height={22}
                  unoptimized
                />
              </button>
              <p className="cta-helper-note">
                {isContinueDisabled
                  ? "Select a pickup address to continue."
                  : "View available cabs and fares next. No payment at this step."}
              </p>
            </div>
          </div>
        </main>

        {/* Edit Contact Modal */}
        {isEditingContact && (
          <div className="contact-modal-overlay" onClick={() => setIsEditingContact(false)}>
            <div className="contact-modal-box" onClick={(e) => e.stopPropagation()}>
              <h3 className="contact-modal-title">Edit Pickup Contact</h3>

              <div className="contact-input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={tempContact.name}
                  onChange={(e) => setTempContact({ ...tempContact, name: e.target.value })}
                />
              </div>

              <div className="contact-input-field">
                <label>Email Address</label>
                <input
                  type="email"
                  value={tempContact.email}
                  onChange={(e) => setTempContact({ ...tempContact, email: e.target.value })}
                />
              </div>

              <div className="contact-input-field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={tempContact.phone}
                  onChange={(e) => setTempContact({ ...tempContact, phone: e.target.value })}
                />
              </div>

              <div className="contact-modal-actions">
                <button
                  type="button"
                  className="contact-cancel-btn"
                  onClick={() => setIsEditingContact(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="contact-save-btn"
                  onClick={handleSaveContact}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Vehicle Selection Feedback Toast */}
        {showSuccessToast && (
          <div
            style={{
              position: "fixed",
              bottom: 30,
              right: 30,
              background: "#07552D",
              color: "#FFFFFF",
              padding: "16px 24px",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              zIndex: 999,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            <span style={{ fontSize: "20px" }}>🚕</span>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "15px" }}>Available Cabs Confirmed!</p>
              <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
                Toyota Innova (₹1,200) reserved for {displayLocation} on {pickupDate} at {pickupTime}.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CabTaxiBookFlow;

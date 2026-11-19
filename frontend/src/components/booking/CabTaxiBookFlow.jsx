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
    routeIcon: "/images/cab booking/trip details/Frame.svg",
    guidance: "Allow time for baggage collection when choosing your pickup time.",
  },
  {
    id: "railway",
    title: "Railway station",
    subtitle: "Pick up from Patna railway station",
    locationName: "Patna Junction (PNBE)",
    icon: "/images/cab booking/trip details/Pickup/reference outline.svg",
    routeIcon: "/images/cab booking/trip details/train icon.svg",
    guidance: "Allow time for train arrival and platform exit when choosing your pickup time.",
  },
  {
    id: "other",
    title: "Other location",
    subtitle: "Pick up from a different address in Patna",
    locationName: "Fraser Road, near Buddha Smriti Park",
    icon: "/images/cab booking/trip details/Pickup/reference outline 2.svg",
    routeIcon: "/images/cab booking/Location pin.svg",
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

const PATNA_SUGGESTIONS = [
  {
    title: "Fraser Road",
    subtitle: "Fraser Road Area, Patna, Bihar",
    fullAddress: "Fraser Road, Fraser Road Area, Patna, Bihar",
  },
  {
    title: "Fraser Road, near Dak Bungalow Chowk",
    subtitle: "Patna, Bihar",
    fullAddress: "Fraser Road, near Dak Bungalow Chowk, Patna, Bihar",
  },
  {
    title: "Fraser Road, near Buddha Smriti Park",
    subtitle: "Patna, Bihar",
    fullAddress: "Fraser Road, near Buddha Smriti Park, Patna, Bihar",
  },
  {
    title: "Bailey Road, near Patna High Court",
    subtitle: "Patna, Bihar",
    fullAddress: "Bailey Road, near Patna High Court, Patna, Bihar",
  },
  {
    title: "Boring Road Crossing",
    subtitle: "Patna, Bihar",
    fullAddress: "Boring Road Crossing, Patna, Bihar",
  },
  {
    title: "Exhibition Road, near Gandhi Maidan",
    subtitle: "Patna, Bihar",
    fullAddress: "Exhibition Road, near Gandhi Maidan, Patna, Bihar",
  },
];

const VEHICLES = [
  {
    id: "dzire",
    name: "Maruti Suzuki Dzire",
    type: "Sedan",
    price: "₹750",
    priceNumber: 750,
    passengers: "Up to 3 passengers",
    bags: "2 large bags",
    ac: "Air conditioning",
    buttonLabel: "Select Dzire",
    imageSrc: "/images/cab booking/car-dzire.png",
  },
  {
    id: "innova",
    name: "Toyota Innova",
    type: "Spacious MPV",
    price: "₹1,200",
    priceNumber: 1200,
    passengers: "Up to 5 passengers",
    bags: "3 large bags",
    ac: "Air conditioning",
    buttonLabel: "Select Innova",
    imageSrc: "/images/cab booking/car-innova.png",
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    type: "Family MPV",
    price: "₹1,000",
    priceNumber: 1000,
    passengers: "Up to 5 passengers",
    bags: "2 large bags",
    ac: "Air conditioning",
    buttonLabel: "Select Ertiga",
    imageSrc: "/images/cab booking/car-ertiga.png",
  },
  {
    id: "carnival",
    name: "Kia Carnival",
    type: "Premium luxury MPV",
    price: "₹2,000",
    priceNumber: 2000,
    passengers: "Up to 6 passengers",
    bags: "3 large bags",
    ac: "Air conditioning",
    buttonLabel: "Select Carnival",
    imageSrc: "/images/cab booking/car-carnival.png",
  },
];

export function CabTaxiBookFlow({ initialStep = 1 } = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL Query Parameters or Defaults
  const checkInParam = searchParams.get("checkIn") || "12 Nov 2026";
  const bookingRefParam = searchParams.get("bookingRef") || "VAL-DEMO-1026";
  const guestNameParam = searchParams.get("guest") || "Aarav Sharma";

  // State Management
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [selectedPickup, setSelectedPickup] = useState("other");
  const [customAddress, setCustomAddress] = useState("Fraser Road, near Buddha Smriti Park");
  const [searchAddressQuery, setSearchAddressQuery] = useState("Fraser Road, near Buddha Smriti Park");
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [pickupDate, setPickupDate] = useState(checkInParam);
  const [pickupTime, setPickupTime] = useState("02:00 PM IST");
  const [passengers, setPassengers] = useState(2);
  const [largeBags, setLargeBags] = useState(2);
  const [selectedVehicle, setSelectedVehicle] = useState("innova");

  // Step 3 (Review & Payment) State
  const [paymentMethod, setPaymentMethod] = useState("hotel"); // "hotel" | "now"
  const [agreedToTerms, setAgreedToTerms] = useState(true);

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
  const addressSuggestionsRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(e.target)) {
        setShowTimeDropdown(false);
      }
      if (dateDropdownRef.current && !dateDropdownRef.current.contains(e.target)) {
        setShowDateDropdown(false);
      }
      if (addressSuggestionsRef.current && !addressSuggestionsRef.current.contains(e.target)) {
        setShowAddressSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentOption = PICKUP_OPTIONS.find((opt) => opt.id === selectedPickup) || PICKUP_OPTIONS[0];

  const displayLocation =
    selectedPickup === "other"
      ? customAddress || "Fraser Road, near Buddha Smriti Park"
      : currentOption.locationName;

  const isContinueDisabled = selectedPickup === "other" && !customAddress.trim();

  // Active Vehicle & Dynamic Fare Calculations
  const activeCar =
    VEHICLES.find((v) => v.id === selectedVehicle) ||
    VEHICLES.find((v) => v.id === "innova") ||
    VEHICLES[0];

  const totalFareNumber = activeCar.priceNumber || 1200;
  const taxesNumber = Math.round(totalFareNumber * 0.08333) || 100;
  const transferFareNumber = totalFareNumber - taxesNumber;
  const dueNowNumber = paymentMethod === "now" ? totalFareNumber : 0;
  const payAtHotelNumber = paymentMethod === "hotel" ? totalFareNumber : 0;

  // Navigation handlers
  const handleBackToBooking = () => {
    router.push("/booking/confirmation?cab=confirmed");
  };

  const handleChooseVehicle = () => {
    if (isContinueDisabled) return;
    setCurrentStep(2);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
            {/* Step 1: Trip details */}
            <div
              className={`step-item ${currentStep === 1 ? "active" : "completed"}`}
              onClick={() => {
                if (currentStep > 1) {
                  setCurrentStep(1);
                  if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              style={{ cursor: currentStep > 1 ? "pointer" : "default" }}
            >
              <div className="step-circle">{currentStep > 1 ? "✓" : "1"}</div>
              <span className="step-label">Trip details</span>
            </div>

            <div className="step-connector" />

            {/* Step 2: Vehicle & fare */}
            <div
              className={`step-item ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}
              onClick={() => {
                if (currentStep > 2) {
                  setCurrentStep(2);
                  if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              style={{ cursor: currentStep > 2 ? "pointer" : "default" }}
            >
              <div className="step-circle">{currentStep > 2 ? "✓" : "2"}</div>
              <span className="step-label">Vehicle &amp; fare</span>
            </div>

            <div className="step-connector" />

            {/* Step 3: Review & payment */}
            <div
              className={`step-item ${currentStep === 3 ? "active step-3-active" : currentStep > 3 ? "completed" : ""}`}
              onClick={() => {
                if (currentStep > 3) {
                  setCurrentStep(3);
                  if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              style={{ cursor: currentStep > 3 ? "pointer" : "default" }}
            >
              <div className="step-circle">{currentStep > 3 ? "✓" : "3"}</div>
              <span className="step-label">Review &amp; payment</span>
            </div>

            <div className="step-connector" />

            {/* Step 4: Confirmation */}
            <div className={`step-item ${currentStep === 4 ? "active completed" : ""}`}>
              <div className="step-circle">{currentStep === 4 ? "✓" : "4"}</div>
              <span className="step-label">Confirmation</span>
            </div>
          </div>
        </div>

        {/* ================= STEP 1: TRIP DETAILS ================= */}
        {currentStep === 1 && (
          <>
            <section className="page-introduction">
              <p className="your-arrival-eyebrow">YOUR ARRIVAL</p>
              <h1 className="a-smooth-arrival-starts-here">A smooth arrival starts here.</h1>
              <p className="choose-your-pickup-subtitle">
                Choose your pickup. We’ll help you plan the ride.
              </p>
            </section>

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

              {/* YOUR ROUTE Card */}
              <div className="your-route-card">
                <div className="route-card-header">
                  <span className="route-eyebrow">YOUR ROUTE</span>
                  <span className="one-way-badge">One-way transfer</span>
                </div>

                <div className="route-visual-row">
                  {selectedPickup === "other" ? (
                    <div className="pickup-location-block other-location-mode" ref={addressSuggestionsRef}>
                      <div className="pin-icon-wrap">
                        <Image
                          src="/images/cab booking/Location pin.svg"
                          alt="Pickup Address"
                          width={38}
                          height={38}
                          unoptimized
                        />
                      </div>
                      <div className="pickup-search-box-wrap">
                        <p className="pickup-address-heading">Pickup address</p>
                        <div className="address-input-relative">
                          <svg
                            className="address-search-svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6C5F56"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                          <input
                            type="text"
                            className="address-search-field"
                            placeholder="Search an address in Patna"
                            value={searchAddressQuery}
                            onChange={(e) => {
                              setSearchAddressQuery(e.target.value);
                              setCustomAddress(e.target.value);
                              setShowAddressSuggestions(true);
                            }}
                            onFocus={() => setShowAddressSuggestions(true)}
                          />
                          {searchAddressQuery && (
                            <button
                              type="button"
                              className="clear-search-btn"
                              onClick={() => {
                                setSearchAddressQuery("");
                                setCustomAddress("");
                              }}
                              aria-label="Clear address"
                            >
                              ×
                            </button>
                          )}

                          {showAddressSuggestions && (
                            <div className="address-suggestions-popover">
                              {(() => {
                                const filtered = searchAddressQuery.trim()
                                  ? PATNA_SUGGESTIONS.filter(
                                      (s) =>
                                        s.title.toLowerCase().includes(searchAddressQuery.toLowerCase()) ||
                                        s.subtitle.toLowerCase().includes(searchAddressQuery.toLowerCase())
                                    )
                                  : PATNA_SUGGESTIONS.slice(0, 3);
                                const listToRender = filtered.length > 0 ? filtered : PATNA_SUGGESTIONS.slice(0, 3);

                                return listToRender.map((item, idx) => {
                                  const isSelected =
                                    idx === 0 ||
                                    searchAddressQuery === item.title ||
                                    searchAddressQuery === item.fullAddress;
                                  return (
                                    <div
                                      key={idx}
                                      className={`suggestion-row ${isSelected ? "selected" : ""}`}
                                      onClick={() => {
                                        setSearchAddressQuery(item.title);
                                        setCustomAddress(item.fullAddress);
                                        setShowAddressSuggestions(false);
                                      }}
                                    >
                                      <div className="suggestion-pin-wrap">
                                        <Image
                                          src="/images/cab booking/Location pin.svg"
                                          alt="Location"
                                          width={26}
                                          height={26}
                                          unoptimized
                                        />
                                      </div>
                                      <div className="suggestion-text-wrap">
                                        <p className="suggestion-title">{item.title}</p>
                                        <p className="suggestion-subtitle">{item.subtitle}</p>
                                      </div>
                                    </div>
                                  );
                                });
                              })()}
                              <div className="suggestions-footer-note">Sample location suggestions</div>
                            </div>
                          )}
                        </div>
                        <p className="pickup-address-guidance">Choose a result to confirm your pickup point.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="pickup-location-block">
                      <div className="pin-icon-wrap">
                        <Image
                          src={currentOption.routeIcon || "/images/cab booking/trip details/Frame.svg"}
                          alt={currentOption.title}
                          width={40}
                          height={40}
                          unoptimized
                        />
                      </div>
                      <div className="pickup-location-text">
                        <p className="pickup-location-name">{displayLocation}</p>
                        <button
                          type="button"
                          className="change-pickup-link"
                          onClick={() => {
                            setSelectedPickup("other");
                          }}
                        >
                          Change pickup
                        </button>
                      </div>
                    </div>
                  )}

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
          </>
        )}

        {/* ================= STEP 2: VEHICLE & FARE ================= */}
        {currentStep === 2 && (
          <section className="vehicle-selection-wrapper">
            <div className="page-introduction">
              <p className="your-arrival-eyebrow">YOUR ARRIVAL</p>
              <h1 className="choose-your-ride-heading">Choose your ride.</h1>
              <p className="choose-your-ride-subtitle">
                Compare space, comfort and fares for your transfer.
              </p>
            </div>

            <main className="vehicle-selection-content">
              {/* Trip summary banner */}
              <div className="trip-summary-banner">
                <div className="trip-summary-left">
                  <div className="summary-pin-wrap">
                    <Image
                      src="/images/cab booking/Location pin.svg"
                      alt="Pickup"
                      width={28}
                      height={28}
                      unoptimized
                    />
                  </div>
                  <div className="summary-text-wrap">
                    <div className="summary-route-line">
                      <span className="summary-pickup-name">{displayLocation}</span>
                      <span className="summary-arrow">→</span>
                      <span className="summary-hotel-name">VALENCIA · Patna</span>
                    </div>
                    <p className="summary-specs-line">
                      {pickupDate} &nbsp;·&nbsp; {pickupTime} &nbsp;·&nbsp; {passengers} passengers &nbsp;·&nbsp; {largeBags} large bags
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="edit-trip-btn"
                  onClick={() => setCurrentStep(1)}
                >
                  <span style={{ fontSize: "16px" }}>✎</span>
                  <span>Edit trip</span>
                </button>
              </div>

              {/* 2x2 Vehicles Grid */}
              <div className="vehicles-grid">
                {VEHICLES.map((vehicle) => {
                  const isSelected = selectedVehicle === vehicle.id;
                  return (
                    <div
                      key={vehicle.id}
                      className={`vehicle-card ${isSelected ? "selected" : ""}`}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                    >
                      {/* Top row */}
                      <div className="vehicle-card-top">
                        <div className="vehicle-car-and-info">
                          <div className="vehicle-car-illustration">
                            <Image
                              src={vehicle.imageSrc}
                              alt={vehicle.name}
                              width={128}
                              height={56}
                              style={{ objectFit: "contain", width: "auto", height: "48px" }}
                              unoptimized
                            />
                          </div>
                          <div className="vehicle-info-block">
                            <h3 className="vehicle-title">{vehicle.name}</h3>
                            <p className="vehicle-type">{vehicle.type}</p>
                          </div>
                        </div>

                        <div className="vehicle-price-and-radio">
                          <div className="vehicle-pricing">
                            <span className="price-amount">{vehicle.price}</span>
                            <span className="price-note">One-way total</span>
                          </div>
                          <div className="vehicle-radio-wrap">
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
                      </div>

                      {/* Specs row */}
                      <div className="vehicle-card-specs">
                        <div className="spec-line">
                          <Image
                            src="/images/cab booking/trip details/Frame 3.svg"
                            alt="Passengers"
                            width={18}
                            height={18}
                            unoptimized
                          />
                          <span>{vehicle.passengers} &nbsp;·&nbsp; {vehicle.bags}</span>
                        </div>
                        <div className="spec-line">
                          <Image
                            src="/images/cab booking/trip details/Frame 4.svg"
                            alt="Air conditioning"
                            width={18}
                            height={18}
                            unoptimized
                          />
                          <span>{vehicle.ac}</span>
                        </div>
                      </div>

                      {/* Action button */}
                      <button
                        type="button"
                        className={`vehicle-select-btn ${isSelected ? "selected" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVehicle(vehicle.id);
                        }}
                      >
                        {isSelected ? "Selected ✓" : vehicle.buttonLabel}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Sample fares note */}
              <p className="sample-fares-note">
                Sample fares and passenger/luggage limits; final details depend on the assigned vehicle.
              </p>

              {/* About these fares banner */}
              <div className="about-these-fares-banner">
                <div className="about-left">
                  <span className="about-info-icon">ⓘ</span>
                  <span className="about-title">About these fares</span>
                </div>

                <div className="about-divider-v" />

                <div className="about-inclusions">
                  <p>• Included: vehicle, driver and applicable taxes.</p>
                  <p>• Extra waiting or route changes may cost more.</p>
                </div>

                <div className="about-divider-v" />

                <button
                  type="button"
                  className="cancellation-terms-link"
                  onClick={() => alert("Cancellation terms: Free cancellation up to 2 hours before scheduled pickup time. No cancellation charges if cancelled with prior notice.")}
                >
                  View fare &amp; cancellation terms
                </button>
              </div>

              {/* Footer actions */}
              <div className="vehicle-page-actions">
                <button
                  type="button"
                  className="back-to-trip-btn"
                  onClick={() => setCurrentStep(1)}
                >
                  ← &nbsp;Back to trip details
                </button>

                <div className="continue-review-wrap">
                  <button
                    type="button"
                    className="continue-review-cta"
                    disabled={!selectedVehicle}
                    onClick={() => {
                      setCurrentStep(3);
                      if (typeof window !== "undefined") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    <span>CONTINUE TO REVIEW</span>
                    <Image
                      src="/images/cab booking/trip details/arrow icon.svg"
                      alt="Arrow"
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </button>
                  <p className="continue-helper-note">
                    {!selectedVehicle
                      ? "Select a vehicle to continue."
                      : "Review your transfer details and payment method."}
                  </p>
                </div>
              </div>
            </main>
          </section>
        )}

        {/* ================= STEP 3: REVIEW & PAYMENT ================= */}
        {currentStep === 3 && (
          <section className="cab-review-payment-wrapper">
            <div className="page-introduction">
              <p className="your-arrival-eyebrow">YOUR ARRIVAL</p>
              <h1 className="review-your-ride-heading">Review your ride.</h1>
              <p className="review-your-ride-subtitle">
                Check your pickup details, then complete your cab booking.
              </p>
            </div>

            <main className="review-columns">
              {/* Left Column: Transfer, Contact, and Payment Method */}
              <div className="transfer-contact-and-payment">
                {/* Your Transfer Card */}
                <div className="your-transfer-card">
                  <div className="card-top-heading-row">
                    <h2 className="card-primary-title">Your transfer</h2>
                    <button
                      type="button"
                      className="edit-trip-action-link"
                      onClick={() => {
                        setCurrentStep(1);
                        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <span className="pencil-icon">✎</span>
                      <span>Edit trip</span>
                    </button>
                  </div>

                  <div className="pickup-dropoff-flow">
                    <div className="flow-route-pins">
                      <div className="pin-icon-wrap-sm">
                        <Image
                          src="/images/cab booking/Location pin.svg"
                          alt="Pickup"
                          width={24}
                          height={24}
                          unoptimized
                        />
                      </div>
                      <div className="vertical-dashed-line" />
                      <div className="pin-icon-wrap-sm">
                        <Image
                          src="/images/cab booking/Location pin.svg"
                          alt="Drop-off"
                          width={24}
                          height={24}
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="flow-addresses">
                      <div className="address-point">
                        <p className="flow-label">PICKUP</p>
                        <p className="flow-main-address">{displayLocation}</p>
                        <p className="flow-sub-address">Patna, Bihar</p>
                      </div>

                      <div className="address-point" style={{ marginTop: "14px" }}>
                        <p className="flow-label">DROP-OFF</p>
                        <p className="flow-hotel-address">VALENCIA · Patna</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-divider-line" />

                  {/* Ride Details (Date, Time, Passengers, Bags) */}
                  <div className="ride-specs-row">
                    <div className="ride-spec-item">
                      <Image
                        src="/images/cab booking/trip details/calendar icon.svg"
                        alt="Date"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      <span>{pickupDate}</span>
                    </div>
                    <div className="ride-spec-item">
                      <Image
                        src="/images/cab booking/trip details/clock icon.svg"
                        alt="Time"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      <span>{pickupTime}</span>
                    </div>
                    <div className="ride-spec-item">
                      <Image
                        src="/images/cab booking/trip details/user icon.svg"
                        alt="Passengers"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      <span>{passengers} passengers</span>
                    </div>
                    <div className="ride-spec-item">
                      <Image
                        src="/images/cab booking/trip details/bag icon.svg"
                        alt="Bags"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      <span>{largeBags} large bags</span>
                    </div>
                  </div>

                  {/* Selected Vehicle Subcard */}
                  <div className="selected-vehicle-subcard">
                    <div className="vehicle-subcard-left">
                      <div className="vehicle-subcard-img">
                        <Image
                          src={activeCar.imageSrc}
                          alt={activeCar.name}
                          width={118}
                          height={54}
                          style={{ objectFit: "contain", width: "auto", height: "48px" }}
                          unoptimized
                        />
                      </div>
                      <div className="vehicle-subcard-text">
                        <h3 className="vehicle-subcard-name">{activeCar.name}</h3>
                        <p className="vehicle-subcard-desc">
                          {activeCar.ac} · {activeCar.type}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="change-vehicle-btn"
                      onClick={() => {
                        setCurrentStep(2);
                        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Change vehicle
                    </button>
                  </div>
                </div>

                {/* Pickup Contact Card */}
                <div className="pickup-contact-card">
                  <div className="card-top-heading-row">
                    <h2 className="card-primary-title">Pickup contact</h2>
                    <button
                      type="button"
                      className="edit-trip-action-link"
                      onClick={() => {
                        setTempContact({ name: guestName, email: guestEmail, phone: guestPhone });
                        setIsEditingContact(true);
                      }}
                    >
                      <span className="pencil-icon">✎</span>
                      <span>Edit</span>
                    </button>
                  </div>

                  <div className="contact-details-row">
                    <div className="contact-item">
                      <Image
                        src="/images/cab booking/trip details/user icon.svg"
                        alt="Guest"
                        width={20}
                        height={20}
                        unoptimized
                      />
                      <span>{guestName}</span>
                    </div>
                    <div className="contact-item">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" stroke="#075B28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="1" width="18" height="14" rx="2" />
                        <path d="M1 3l9 6 9-6" />
                      </svg>
                      <span>{guestEmail}</span>
                    </div>
                    <div className="contact-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#075B28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>{guestPhone}</span>
                    </div>
                  </div>

                  {/* Linked Hotel Booking Pill */}
                  <div className="linked-hotel-booking-pill">
                    <div className="bed-icon-wrap">
                      <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#292824" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v4" />
                      </svg>
                    </div>
                    <span className="linked-label-text">Linked hotel booking:</span>
                    <span className="linked-ref-code" onClick={handleBackToBooking}>
                      {bookingRefParam}
                    </span>
                  </div>
                </div>

                {/* How Would You Like to Pay Card */}
                <div className="how-to-pay-card">
                  <h2 className="card-primary-title">How would you like to pay?</h2>

                  <div className="payment-options-grid">
                    {/* Pay Now */}
                    <div
                      className={`payment-choice-card ${paymentMethod === "now" ? "selected" : ""}`}
                      onClick={() => setPaymentMethod("now")}
                      role="radio"
                      aria-checked={paymentMethod === "now"}
                      tabIndex={0}
                    >
                      <div className="choice-left">
                        <div className="choice-icon-wrap">
                          <svg width="26" height="22" viewBox="0 0 24 20" fill="none" stroke="#075B28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="2" width="22" height="16" rx="3" />
                            <path d="M1 7h22M5 13h4" />
                          </svg>
                        </div>
                        <div className="choice-text">
                          <p className="choice-title">Pay Now</p>
                          <p className="choice-subtitle">Pay online to complete your booking</p>
                        </div>
                      </div>
                      <div className="choice-radio">
                        {paymentMethod === "now" ? (
                          <span className="radio-dot-checked">●</span>
                        ) : (
                          <span className="radio-dot-unchecked">○</span>
                        )}
                      </div>
                    </div>

                    {/* Pay at Hotel */}
                    <div
                      className={`payment-choice-card ${paymentMethod === "hotel" ? "selected" : ""}`}
                      onClick={() => setPaymentMethod("hotel")}
                      role="radio"
                      aria-checked={paymentMethod === "hotel"}
                      tabIndex={0}
                    >
                      <div className="choice-left">
                        <div className="choice-icon-wrap">
                          <Image
                            src="/images/cab booking/trip details/Hotel icon.svg"
                            alt="Hotel"
                            width={28}
                            height={28}
                            unoptimized
                          />
                        </div>
                        <div className="choice-text">
                          <p className="choice-title">Pay at Hotel</p>
                          <p className="choice-subtitle">Settle your cab fare at the hotel</p>
                        </div>
                      </div>
                      <div className="choice-radio">
                        {paymentMethod === "hotel" ? (
                          <span className="radio-dot-checked">●</span>
                        ) : (
                          <span className="radio-dot-unchecked">○</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Payment Guidance Info */}
                  <div className="payment-guidance-info">
                    <span className="guidance-info-icon">ⓘ</span>
                    <p className="guidance-text">
                      {paymentMethod === "hotel"
                        ? "No online payment is required. Your cab fare is payable at the hotel."
                        : "Secure online payment gateway will open upon confirming."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Fare Summary and Before You Confirm */}
              <div className="fare-and-confirmation">
                {/* Fare Summary Card */}
                <div className="fare-summary-card">
                  <h2 className="fare-summary-title">Fare summary</h2>
                  <p className="fare-summary-type">One-way transfer</p>

                  <div className="fare-line-item">
                    <span className="item-label">Transfer fare</span>
                    <span className="item-val">₹{transferFareNumber.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="fare-line-item">
                    <span className="item-label">Taxes &amp; fees (demo)</span>
                    <span className="item-val">₹{taxesNumber.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="card-divider-line" />

                  <div className="fare-total-row">
                    <span className="total-label">Total cab fare</span>
                    <span className="total-amount">₹{totalFareNumber.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="card-divider-line" />

                  <div className="fare-line-item">
                    <span className="item-label">Due now</span>
                    <span className="item-val">₹{dueNowNumber.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="fare-line-item">
                    <span className="item-label">Pay at hotel</span>
                    <span className="item-val">₹{payAtHotelNumber.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="card-divider-line" />

                  <div className="separate-fare-notice">
                    <span className="separate-icon">ⓘ</span>
                    <span className="separate-text">Cab payment is separate from your hotel booking.</span>
                  </div>
                </div>

                {/* Before You Confirm Card */}
                <div className="before-you-confirm-card">
                  <h3 className="before-confirm-title">Before you confirm</h3>
                  <p className="before-confirm-bullet">
                    • &nbsp;Extra waiting or route changes may cost more.
                  </p>

                  <button
                    type="button"
                    className="view-cancellation-terms-link"
                    onClick={() =>
                      alert(
                        "Cab Terms & Cancellation:\n• Free cancellation up to 2 hours before scheduled pickup time.\n• Extra waiting beyond 15 minutes or route diversions may incur additional charges."
                      )
                    }
                  >
                    View fare &amp; cancellation terms
                  </button>

                  <div className="card-divider-line" />

                  {/* Agreement Checkbox */}
                  <div
                    className="terms-agreement-row"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                  >
                    <div className={`custom-terms-checkbox ${agreedToTerms ? "checked" : ""}`}>
                      {agreedToTerms && <span>✓</span>}
                    </div>
                    <label className="terms-label">
                      I agree to the Cab Terms and Cancellation Policy.
                    </label>
                  </div>

                  {/* Confirm Button */}
                  <button
                    type="button"
                    className="confirm-cab-btn"
                    disabled={!agreedToTerms}
                    onClick={() => {
                      const query = new URLSearchParams();
                      query.set("cab", "confirmed");
                      if (bookingRefParam) query.set("ref", bookingRefParam);
                      if (checkInParam) query.set("checkin", checkInParam);
                      if (guestName) query.set("guest", guestName);
                      if (displayLocation) query.set("pickup", displayLocation);
                      if (activeCar?.name) query.set("vehicle", `${activeCar.name} · ${activeCar.ac} ${activeCar.type}`);
                      if (activeCar?.imageSrc) query.set("vehicleImg", activeCar.imageSrc);
                      if (totalFareNumber) query.set("fare", `₹${totalFareNumber.toLocaleString("en-IN")}`);
                      if (paymentMethod) query.set("payMethod", paymentMethod === "hotel" ? "Pay at Hotel" : "Paid online");
                      router.push(`/booking/confirmation?${query.toString()}`);
                    }}
                  >
                    <span>CONFIRM CAB BOOKING</span>
                    <Image
                      src="/images/cab booking/trip details/arrow icon.svg"
                      alt="Confirm"
                      width={22}
                      height={22}
                      unoptimized
                    />
                  </button>

                  {/* Under-button fare note */}
                  <p className="due-summary-footer-note">
                    ₹{dueNowNumber} due now · ₹{payAtHotelNumber.toLocaleString("en-IN")} payable at hotel
                  </p>
                </div>
              </div>
            </main>

            {/* Footer Back Link */}
            <div className="review-page-footer">
              <button
                type="button"
                className="back-to-vehicles-btn"
                onClick={() => {
                  setCurrentStep(2);
                  if (typeof window !== "undefined") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                ← &nbsp;Back to vehicles
              </button>
            </div>
          </section>
        )}

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
              <p style={{ margin: 0, fontWeight: 700, fontSize: "15px" }}>
                {selectedVehicle
                  ? `${VEHICLES.find((v) => v.id === selectedVehicle)?.name} Selected!`
                  : "Trip Details Confirmed!"}
              </p>
              <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
                Pickup at {displayLocation} on {pickupDate} at {pickupTime}.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function CabVehicleAndFareNoVehicleSelected() {
  return <CabTaxiBookFlow initialStep={2} />;
}

export function CabReviewAndPaymentPayAtHotel(props) {
  return <CabTaxiBookFlow initialStep={3} {...props} />;
}

export default CabTaxiBookFlow;

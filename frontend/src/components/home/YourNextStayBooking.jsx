"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./css/your-next-stay-booking.css";

const DURATION_OPTIONS = [
  "3 Hours",
  "6 Hours",
  "9 Hours",
  "12 Hours",
  "18 Hours",
  "24 Hours",
];

const MONTH_DATA = [
  { name: "October 2026", year: 2026, monthIndex: 9, startDayOffset: 4, days: 31 },
  { name: "November 2026", year: 2026, monthIndex: 10, startDayOffset: 0, days: 30 },
  { name: "December 2026", year: 2026, monthIndex: 11, startDayOffset: 2, days: 31 },
];

export default function YourNextStayBooking() {
  const [stayMode, setStayMode] = useState("hourly"); // 'hourly' | 'night'
  const [checkInDay, setCheckInDay] = useState(null);
  const [checkOutDay, setCheckOutDay] = useState(null);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(0);

  const [duration, setDuration] = useState("12 Hours");
  const [customDurationInput, setCustomDurationInput] = useState("12 Hours");

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [activePopover, setActivePopover] = useState(null); // 'checkIn' | 'checkOut' | 'duration' | 'guests' | null
  const searchCardRef = useRef(null);

  const activeMonth = MONTH_DATA[currentMonthIdx];

  // Formatted display strings
  const checkInText = checkInDay ? `${checkInDay} Oct 2026` : "Select date";
  const checkOutText = checkOutDay ? `${checkOutDay} Oct 2026` : "Select date";
  const guestsSummary = `${adults} Guests, ${rooms} Room`;

  // Close popover on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchCardRef.current && !searchCardRef.current.contains(event.target)) {
        setActivePopover(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActivePopover(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const togglePopover = (name) => {
    setActivePopover((prev) => (prev === name ? null : name));
  };

  const handleSearch = () => {
    setActivePopover(null);
    alert(
      `Searching Rooms:\n• Mode: ${stayMode === "hourly" ? "Hourly Booking" : "Night Stay"}\n• Check In: ${checkInText}\n• Check Out: ${checkOutText}\n• Duration: ${stayMode === "hourly" ? duration : "N/A"}\n• Guests: ${adults} Adults, ${childrenCount} Children in ${rooms} Room(s)`
    );
  };

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
      <div ref={searchCardRef} className="search-bar-card">
        {/* Toggle Pill: Night Stay vs Hourly Booking */}
        <div className="toggle-wrapper" role="tablist" aria-label="Booking Mode">
          <button
            type="button"
            role="tab"
            aria-selected={stayMode === "night"}
            onClick={() => {
              setStayMode("night");
              setActivePopover(null);
            }}
            className={`toggle-btn ${
              stayMode === "night"
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
                className={stayMode === "night" ? "brightness-0 invert" : ""}
              />
            </span>
            <span>Night Stay</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={stayMode === "hourly"}
            onClick={() => {
              setStayMode("hourly");
              setActivePopover(null);
            }}
            className={`toggle-btn ${
              stayMode === "hourly"
                ? "toggle-btn-active"
                : "toggle-btn-inactive"
            }`}
          >
            <span className="relative w-4 h-4 flex items-center justify-center">
              <Image
                src={
                  stayMode === "hourly"
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
          <div className="field-wrapper">
            <button
              type="button"
              onClick={() => togglePopover("checkIn")}
              className={`field-item ${
                activePopover === "checkIn" ? "field-item-active" : ""
              }`}
            >
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
                <span className="field-value">{checkInText}</span>
              </div>
              <div
                className={`field-chevron ${
                  activePopover === "checkIn" ? "field-chevron-up" : ""
                }`}
              >
                <Image
                  src="/images/homepage/your-stay/chevron.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
            </button>

            {/* Check-In Popover */}
            {activePopover === "checkIn" && (
              <div className="booking-popover">
                <div className="cal-header">
                  <button
                    type="button"
                    disabled={currentMonthIdx === 0}
                    onClick={() => setCurrentMonthIdx((prev) => Math.max(0, prev - 1))}
                    className="cal-header-btn"
                    aria-label="Previous month"
                  >
                    ‹
                  </button>
                  <span className="cal-header-title">{activeMonth.name}</span>
                  <button
                    type="button"
                    disabled={currentMonthIdx === MONTH_DATA.length - 1}
                    onClick={() =>
                      setCurrentMonthIdx((prev) =>
                        Math.min(MONTH_DATA.length - 1, prev + 1)
                      )
                    }
                    className="cal-header-btn"
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>

                <div className="cal-days-row">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                <div className="cal-grid">
                  {Array.from({ length: activeMonth.startDayOffset }).map((_, i) => (
                    <span key={`empty-in-${i}`} className="w-8 h-8" />
                  ))}
                  {Array.from({ length: activeMonth.days }, (_, i) => i + 1).map((day) => {
                    const isSelected = checkInDay === day;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setCheckInDay(day)}
                        className={`cal-day-cell ${
                          isSelected ? "cal-day-selected" : ""
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!checkInDay) setCheckInDay(26);
                    setActivePopover("checkOut");
                  }}
                  className="cal-apply-btn"
                >
                  Apply Check-in Date
                </button>
              </div>
            )}
          </div>

          <div className="field-divider" />

          {/* Field 2: Check Out */}
          <div className="field-wrapper">
            <button
              type="button"
              onClick={() => togglePopover("checkOut")}
              className={`field-item ${
                activePopover === "checkOut" ? "field-item-active" : ""
              }`}
            >
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
                <span className="field-value">{checkOutText}</span>
              </div>
              <div
                className={`field-chevron ${
                  activePopover === "checkOut" ? "field-chevron-up" : ""
                }`}
              >
                <Image
                  src="/images/homepage/your-stay/chevron.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
            </button>

            {/* Check-Out Popover */}
            {activePopover === "checkOut" && (
              <div className="booking-popover">
                <div className="cal-header">
                  <button
                    type="button"
                    disabled={currentMonthIdx === 0}
                    onClick={() => setCurrentMonthIdx((prev) => Math.max(0, prev - 1))}
                    className="cal-header-btn"
                    aria-label="Previous month"
                  >
                    ‹
                  </button>
                  <span className="cal-header-title">{activeMonth.name}</span>
                  <button
                    type="button"
                    disabled={currentMonthIdx === MONTH_DATA.length - 1}
                    onClick={() =>
                      setCurrentMonthIdx((prev) =>
                        Math.min(MONTH_DATA.length - 1, prev + 1)
                      )
                    }
                    className="cal-header-btn"
                    aria-label="Next month"
                  >
                    ›
                  </button>
                </div>

                <div className="cal-days-row">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                <div className="cal-grid">
                  {Array.from({ length: activeMonth.startDayOffset }).map((_, i) => (
                    <span key={`empty-out-${i}`} className="w-8 h-8" />
                  ))}
                  {Array.from({ length: activeMonth.days }, (_, i) => i + 1).map((day) => {
                    const isSelected = checkOutDay === day;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setCheckOutDay(day)}
                        className={`cal-day-cell ${
                          isSelected ? "cal-day-selected" : ""
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!checkOutDay) setCheckOutDay(28);
                    setActivePopover(null);
                  }}
                  className="cal-apply-btn"
                >
                  Apply Check-out Date
                </button>
              </div>
            )}
          </div>

          <div className="field-divider" />

          {/* Field 3: Duration */}
          <div className="field-wrapper">
            <button
              type="button"
              onClick={() => togglePopover("duration")}
              className={`field-item ${
                activePopover === "duration" ? "field-item-active" : ""
              }`}
            >
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
                <span className="field-value">{duration}</span>
              </div>
              <div
                className={`field-chevron ${
                  activePopover === "duration" ? "field-chevron-up" : ""
                }`}
              >
                <Image
                  src="/images/homepage/your-stay/chevron.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
            </button>

            {/* Duration Popover */}
            {activePopover === "duration" && (
              <div className="booking-popover">
                <div className="duration-header">
                  <div className="field-icon mt-0.5">
                    <Image
                      src="/images/homepage/your-stay/clock-green.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                  </div>
                  <div>
                    <h4 className="duration-title">Select Duration</h4>
                    <p className="duration-subtitle">
                      Enter the number of hours for your stay
                    </p>
                  </div>
                </div>

                <input
                  type="text"
                  value={customDurationInput}
                  onChange={(e) => {
                    setCustomDurationInput(e.target.value);
                    setDuration(e.target.value);
                  }}
                  className="duration-input"
                  placeholder="e.g. 12 Hours"
                />

                <div className="duration-divider">
                  <div className="duration-divider-line" />
                  <span className="duration-divider-text">OR</span>
                  <div className="duration-divider-line" />
                </div>

                <div className="duration-chips-label">
                  Choose from common durations
                </div>

                <div className="duration-chips-grid">
                  {DURATION_OPTIONS.map((opt) => {
                    const isSelected = duration === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setDuration(opt);
                          setCustomDurationInput(opt);
                        }}
                        className={`duration-chip ${
                          isSelected ? "duration-chip-active" : ""
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setActivePopover(null)}
                  className="cal-apply-btn"
                >
                  Apply Duration
                </button>
              </div>
            )}
          </div>

          <div className="field-divider" />

          {/* Field 4: Guests & Rooms */}
          <div className="field-wrapper">
            <button
              type="button"
              onClick={() => togglePopover("guests")}
              className={`field-item ${
                activePopover === "guests" ? "field-item-active" : ""
              }`}
            >
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
                <span className="field-value">{guestsSummary}</span>
              </div>
              <div
                className={`field-chevron ${
                  activePopover === "guests" ? "field-chevron-up" : ""
                }`}
              >
                <Image
                  src="/images/homepage/your-stay/chevron.svg"
                  alt=""
                  width={12}
                  height={12}
                />
              </div>
            </button>

            {/* Guests & Rooms Popover */}
            {activePopover === "guests" && (
              <div className="booking-popover booking-popover-right">
                <div className="guests-header">
                  <div className="field-icon">
                    <Image
                      src="/images/homepage/your-stay/guests.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                  </div>
                  <h4 className="guests-title">Guests & Rooms</h4>
                </div>

                {/* Section 1: Rooms */}
                <div className="stepper-row">
                  <span className="stepper-label">Rooms</span>
                  <div className="stepper-controls">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
                      className="stepper-btn"
                    >
                      -
                    </button>
                    <span className="stepper-val">{rooms}</span>
                    <button
                      type="button"
                      disabled={rooms >= 5}
                      onClick={() => setRooms((prev) => Math.min(5, prev + 1))}
                      className="stepper-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="guests-divider" />

                {/* Section 2: Guests per Room */}
                <div className="guests-subhead">Guests per Room</div>
                <div className="guests-columns">
                  {/* Adults */}
                  <div>
                    <div className="guests-col-label">Adults (12+ yrs)</div>
                    <div className="stepper-controls">
                      <button
                        type="button"
                        disabled={adults <= 1}
                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                        className="stepper-btn"
                      >
                        -
                      </button>
                      <span className="stepper-val">{adults}</span>
                      <button
                        type="button"
                        disabled={adults >= 10}
                        onClick={() => setAdults((prev) => Math.min(10, prev + 1))}
                        className="stepper-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div>
                    <div className="guests-col-label">Children (0-11 yrs)</div>
                    <div className="stepper-controls">
                      <button
                        type="button"
                        disabled={childrenCount <= 0}
                        onClick={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
                        className="stepper-btn"
                      >
                        -
                      </button>
                      <span className="stepper-val">{childrenCount}</span>
                      <button
                        type="button"
                        disabled={childrenCount >= 6}
                        onClick={() => setChildrenCount((prev) => Math.min(6, prev + 1))}
                        className="stepper-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActivePopover(null)}
                  className="cal-apply-btn"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Search CTA Button */}
          <button
            type="button"
            onClick={handleSearch}
            className="search-cta-btn"
          >
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

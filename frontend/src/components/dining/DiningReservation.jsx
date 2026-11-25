"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BrandSelect } from "@/components/common";
import { BookingCalendarPopover } from "@/components/booking";
import {
  ArrowRightIcon,
  CalendarIcon,
  InfoCircleIcon,
  PhoneHelpIcon,
} from "./DiningIcons";

function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  try {
    const [y, m, d] = dateStr.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function DiningReservation() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    preferredDate: "",
    preferredTime: "",
    guests: "2 guests",
    occasion: "",
    specialRequests: "",
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const calendarContainerRef = useRef(null);

  // Close calendar popover on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        calendarContainerRef.current &&
        !calendarContainerRef.current.contains(event.target)
      ) {
        setCalendarOpen(false);
      }
    }
    if (calendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [calendarOpen]);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobileNumber.trim()) {
      alert("Please enter your name and mobile number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      className="dining-reservation-section"
      id="reservation"
      aria-label="Join us at the table - Reservation request"
    >
      <div className="dining-reservation-container">
        {/* Left Column: Reservation Introduction */}
        <div className="dining-reservation-left">
          <p className="dining-reservation-eyebrow">JOIN US AT THE TABLE</p>

          <h2 className="dining-reservation-title">
            Make time for<br />
            something delicious.
          </h2>

          <p className="dining-reservation-desc">
            Plan a relaxed meal or a special occasion. Share your preferred date and we’ll help arrange your visit.
          </p>

          <hr className="dining-reservation-rule" />

          {/* Need help contact block */}
          <div className="dining-reservation-help">
            <div className="dining-reservation-help-icon">
              <PhoneHelpIcon className="w-[33px] h-[33px]" stroke="#D1B35B" />
            </div>
            <div className="dining-reservation-help-copy">
              <p className="dining-reservation-help-q">Need help with your request?</p>
              <Link
                href="/contact"
                className="dining-reservation-help-link"
              >
                Contact our team →
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Request a Table Form Card */}
        <div className="dining-reservation-form-card">
          <div className="dining-form-heading">
            <h3 className="dining-form-title">Request a table</h3>
            <p className="dining-form-subtitle">Tell us when you’d like to dine.</p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#FAF7F0] border border-[#C7C0B4] rounded-[4px] text-center my-auto">
              <h4 className="font-display text-[28px] text-[#0B3824] mb-3">
                Thank you, {formData.fullName}!
              </h4>
              <p className="font-body text-[16px] text-[#564534] leading-[24px] mb-6">
                Your reservation request for {formData.guests} on {formData.preferredDate ? formatDisplayDate(formData.preferredDate) : "your preferred date"} has been received. Our team will contact you at {formData.mobileNumber} shortly to confirm availability.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-form-submit max-w-[280px] mx-auto"
              >
                REQUEST ANOTHER TABLE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Full name & Mobile number */}
              <div className="dining-form-row">
                <div className="dining-field-group">
                  <label htmlFor="fullName" className="dining-field-label">
                    Full name *
                  </label>
                  <div className="dining-field-input-box">
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={handleChange("fullName")}
                    />
                  </div>
                </div>

                <div className="dining-field-group">
                  <label htmlFor="mobileNumber" className="dining-field-label">
                    Mobile number *
                  </label>
                  <div className="dining-field-input-box">
                    <input
                      id="mobileNumber"
                      type="tel"
                      required
                      placeholder="+91 Enter mobile number"
                      value={formData.mobileNumber}
                      onChange={handleChange("mobileNumber")}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Date, time and guests */}
              <div className="dining-form-row dining-form-row-3col">
                {/* Date with Branding Calendar Popover */}
                <div className="dining-field-group" ref={calendarContainerRef}>
                  <label htmlFor="preferredDateBtn" className="dining-field-label">
                    Preferred date *
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      id="preferredDateBtn"
                      aria-haspopup="dialog"
                      aria-expanded={calendarOpen}
                      onClick={() => setCalendarOpen((prev) => !prev)}
                      className="dining-field-input-box cursor-pointer group text-left w-full"
                    >
                      <span
                        className={`truncate select-none ${
                          formData.preferredDate ? "text-[#564534] font-medium" : "text-[#95938C]"
                        }`}
                      >
                        {formData.preferredDate
                          ? formatDisplayDate(formData.preferredDate)
                          : "Select date"}
                      </span>
                      <div className="dining-field-icon group-hover:text-[#174D37] transition-colors">
                        <CalendarIcon className="w-4 h-4 text-[#685749]" />
                      </div>
                    </button>

                    {/* Branding Calendar Popover */}
                    {calendarOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 z-50 shadow-2xl">
                        <BookingCalendarPopover
                          selectedDate={formData.preferredDate}
                          onSelectDate={(dateStr) => {
                            setFormData((prev) => ({ ...prev, preferredDate: dateStr }));
                            setCalendarOpen(false);
                          }}
                          onClose={() => setCalendarOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Preferred time with BrandSelect */}
                <div className="dining-field-group">
                  <label htmlFor="preferredTime" className="dining-field-label">
                    Preferred time *
                  </label>
                  <BrandSelect
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange("preferredTime")}
                    placeholder="Select time"
                    options={[
                      "07:30 AM - Breakfast",
                      "08:30 AM - Breakfast",
                      "09:30 AM - Breakfast",
                      "12:30 PM - Lunch",
                      "01:30 PM - Lunch",
                      "02:30 PM - Lunch",
                      "07:00 PM - Dinner",
                      "08:00 PM - Dinner",
                      "09:00 PM - Dinner",
                      "10:00 PM - Dinner",
                    ]}
                    triggerClassName="dining-field-select-trigger"
                  />
                </div>

                {/* Guests with BrandSelect */}
                <div className="dining-field-group">
                  <label htmlFor="guests" className="dining-field-label">
                    Guests *
                  </label>
                  <BrandSelect
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange("guests")}
                    placeholder="2 guests"
                    options={[
                      "1 guest",
                      "2 guests",
                      "3 guests",
                      "4 guests",
                      "5 guests",
                      "6 guests",
                      "7+ guests",
                    ]}
                    triggerClassName="dining-field-select-trigger"
                  />
                </div>
              </div>

              {/* Row 3: Occasion (optional) with BrandSelect */}
              <div className="dining-field-group">
                <label htmlFor="occasion" className="dining-field-label">
                  Occasion (optional)
                </label>
                <BrandSelect
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange("occasion")}
                  placeholder="Select an occasion"
                  options={[
                    "Casual Dining",
                    "Birthday Celebration",
                    "Anniversary",
                    "Business Meeting",
                    "Family Gathering",
                    "Romantic Dinner",
                    "Other Occasion",
                  ]}
                  triggerClassName="dining-field-select-trigger"
                />
              </div>

              {/* Row 4: Special requests (optional) */}
              <div className="dining-field-group">
                <label htmlFor="specialRequests" className="dining-field-label">
                  Special requests (optional)
                </label>
                <textarea
                  id="specialRequests"
                  rows={2}
                  placeholder="Dietary preferences, celebrations or anything we should know"
                  className="dining-field-textarea"
                  value={formData.specialRequests}
                  onChange={handleChange("specialRequests")}
                />
              </div>

              {/* Row 5: Notice */}
              <div className="dining-form-notice">
                <div className="dining-form-notice-icon">
                  <InfoCircleIcon className="w-4 h-4 text-[#C9A64B]" />
                </div>
                <p className="dining-form-notice-text">
                  This is a reservation request. Our team will confirm availability before your table is booked.
                </p>
              </div>

              {/* Row 6: Submit Button */}
              <button
                type="submit"
                className="btn-form-submit"
                aria-label="Send reservation request"
              >
                <span>SEND RESERVATION REQUEST</span>
                <ArrowRightIcon className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </button>

              {/* Row 7: Legal text */}
              <p className="dining-form-legal">
                By submitting, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

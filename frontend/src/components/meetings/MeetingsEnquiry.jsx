"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrandSelect } from "@/components/common";
import { BookingCalendarPopover } from "@/components/booking";
import { CalendarIcon } from "./MeetingsIcons";

const MEETING_TYPES = [
  "Conference",
  "Board Meeting",
  "Workshop",
  "Training Session",
  "Corporate Gathering",
  "Seminar",
  "Team Offsite",
];

const SETUP_CHOICES_ROW_1 = ["Theatre", "Classroom", "U-shape", "Boardroom"];
const SETUP_CHOICES_ROW_2 = ["AV", "Catering", "Rooms"];

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

export default function MeetingsEnquiry() {
  const [formData, setFormData] = useState({
    company: "",
    meetingType: "",
    preferredDate: "",
    attendees: "",
    flexibleDates: false,
    setupNeeds: [],
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
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
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSetupToggle = (choice) => {
    setFormData((prev) => {
      const exists = prev.setupNeeds.includes(choice);
      return {
        ...prev,
        setupNeeds: exists
          ? prev.setupNeeds.filter((item) => item !== choice)
          : [...prev.setupNeeds, choice],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.company ||
      !formData.meetingType ||
      !formData.preferredDate ||
      !formData.attendees ||
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.email
    ) {
      setErrorMsg("Please fill in all required fields (*).");
      return;
    }

    setSubmitted(true);
    setErrorMsg("");
  };

  return (
    <section id="meeting-enquiry" className="meetings-enquiry" aria-label="Meeting Enquiry">
      <div className="meetings-enquiry-inner">
        {/* Left Column: Introduction & Direct Contact */}
        <div className="meetings-enquiry-left">
          <span className="meetings-enquiry-eyebrow">LET&apos;S PLAN YOUR MEETING</span>
          <h2 className="meetings-enquiry-heading">
            Bring your agenda.<br />
            We’ll help with<br />
            the details.
          </h2>
          <p className="meetings-enquiry-desc">
            Tell us about your team and requirements. Our team will help you explore suitable spaces at VALENCIA and Umrao.
          </p>

          <div className="meetings-enquiry-contact">
            <div className="meetings-enquiry-contact-icon">
              <Image
                src="/images/MeetingsPage/Contact icon.svg"
                alt="Contact phone icon"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
            </div>
            <div className="meetings-enquiry-contact-copy">
              <a href="tel:+910000000000" className="meetings-enquiry-contact-link">
                Contact our team →
              </a>
              <a href="tel:+910000000000" className="meetings-enquiry-contact-phone">
                +91 00000 00000
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Enquiry Form Card */}
        <div className="meetings-enquiry-card">
          <h3 className="meetings-form-title">Meeting enquiry</h3>
          <p className="meetings-form-subtitle">Share a few details to get started.</p>

          {submitted ? (
            <div className="bg-[#174D37]/10 border border-[#174D37]/30 rounded-lg p-6 text-center my-auto">
              <h4 className="font-playfair text-[26px] text-[#0D452E] mb-2">
                Thank you for your enquiry
              </h4>
              <p className="font-body text-[16px] text-[#59453B] mb-6 leading-relaxed">
                Our events and meetings team will review your requirements and get in touch with you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    company: "",
                    meetingType: "",
                    preferredDate: "",
                    attendees: "",
                    flexibleDates: false,
                    setupNeeds: [],
                    fullName: "",
                    mobileNumber: "",
                    email: "",
                    message: "",
                  });
                }}
                className="meetings-submit-btn max-w-[280px] mx-auto"
              >
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {errorMsg && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
                  {errorMsg}
                </div>
              )}

              {/* Row 1: Company & Meeting Type */}
              <div className="meetings-form-row">
                <div className="meetings-form-col">
                  <label htmlFor="company" className="meetings-form-label">
                    Company *
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="meetings-input"
                  />
                </div>

                <div className="meetings-form-col">
                  <label htmlFor="meetingType" className="meetings-form-label">
                    Meeting type *
                  </label>
                  <BrandSelect
                    id="meetingType"
                    name="meetingType"
                    value={formData.meetingType}
                    onChange={(e) => handleInputChange("meetingType", e.target.value)}
                    options={MEETING_TYPES}
                    placeholder="Select meeting type"
                    triggerClassName="meeting-field-select-trigger"
                  />
                </div>
              </div>

              {/* Row 2: Preferred date & Attendees */}
              <div className="meetings-form-row">
                <div className="meetings-form-col" ref={calendarContainerRef}>
                  <label htmlFor="preferredDate" className="meetings-form-label">
                    Preferred date *
                  </label>
                  <div className="relative w-full">
                    <button
                      id="preferredDate"
                      type="button"
                      onClick={() => setCalendarOpen((prev) => !prev)}
                      className="meetings-input flex items-center justify-between text-left cursor-pointer group"
                    >
                      <span
                        className={
                          formData.preferredDate ? "text-[#59453B]" : "text-[#9E9489]"
                        }
                      >
                        {formData.preferredDate
                          ? formatDisplayDate(formData.preferredDate)
                          : "Select date"}
                      </span>
                      <CalendarIcon className="w-4 h-4 text-[#776B61] group-hover:text-[#0D452E] transition-colors" />
                    </button>

                    {calendarOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 z-50 shadow-2xl">
                        <BookingCalendarPopover
                          selectedDate={formData.preferredDate}
                          onSelectDate={(dateStr) => {
                            handleInputChange("preferredDate", dateStr);
                            setCalendarOpen(false);
                          }}
                          onClose={() => setCalendarOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="meetings-form-col">
                  <label htmlFor="attendees" className="meetings-form-label">
                    Attendees *
                  </label>
                  <input
                    id="attendees"
                    type="text"
                    required
                    placeholder="e.g. 25"
                    value={formData.attendees}
                    onChange={(e) => handleInputChange("attendees", e.target.value)}
                    className="meetings-input"
                  />
                </div>
              </div>

              {/* Flexible dates checkbox */}
              <div className="mb-4">
                <label className="meetings-checkbox-row">
                  <input
                    type="checkbox"
                    checked={formData.flexibleDates}
                    onChange={(e) => handleInputChange("flexibleDates", e.target.checked)}
                    className="meetings-checkbox-input"
                  />
                  <span className="meetings-checkbox-label">My dates are flexible</span>
                </label>
              </div>

              {/* Setup needs (optional) */}
              <div className="meetings-setup-grid">
                <span className="meetings-setup-label">Setup needs (optional)</span>

                {/* Choices Row 1 */}
                <div className="meetings-setup-choices">
                  {SETUP_CHOICES_ROW_1.map((choice) => (
                    <label key={choice} className="meetings-checkbox-row">
                      <input
                        type="checkbox"
                        checked={formData.setupNeeds.includes(choice)}
                        onChange={() => handleSetupToggle(choice)}
                        className="meetings-checkbox-input"
                      />
                      <span className="meetings-checkbox-label">{choice}</span>
                    </label>
                  ))}
                </div>

                {/* Choices Row 2 */}
                <div className="meetings-setup-choices">
                  {SETUP_CHOICES_ROW_2.map((choice) => (
                    <label key={choice} className="meetings-checkbox-row">
                      <input
                        type="checkbox"
                        checked={formData.setupNeeds.includes(choice)}
                        onChange={() => handleSetupToggle(choice)}
                        className="meetings-checkbox-input"
                      />
                      <span className="meetings-checkbox-label">{choice}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 3: Full name & Mobile number */}
              <div className="meetings-form-row mt-3">
                <div className="meetings-form-col">
                  <label htmlFor="fullName" className="meetings-form-label">
                    Full name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="meetings-input"
                  />
                </div>

                <div className="meetings-form-col">
                  <label htmlFor="mobileNumber" className="meetings-form-label">
                    Mobile number *
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                    className="meetings-input"
                  />
                </div>
              </div>

              {/* Row 4: Email address */}
              <div className="meetings-form-row">
                <div className="meetings-form-col">
                  <label htmlFor="email" className="meetings-form-label">
                    Email address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="meetings-input"
                  />
                </div>
              </div>

              {/* Row 5: Message (optional) */}
              <div className="meetings-form-row flex-col gap-1 mb-2">
                <label htmlFor="message" className="meetings-form-label">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  maxLength={500}
                  placeholder="Share any specific requirements or questions..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="meetings-textarea"
                />
                <span className="meetings-char-count">{formData.message.length}/500</span>
              </div>

              {/* Note */}
              <p className="meetings-form-note">
                This is an enquiry. Space availability and arrangements will be confirmed by our team.
              </p>

              {/* Submit Button */}
              <button type="submit" className="meetings-submit-btn">
                <span>SEND MEETING ENQUIRY</span>
                <span className="text-[20px] leading-none mb-0.5 ml-2">→</span>
              </button>

              {/* Privacy note */}
              <p className="meetings-privacy-note">
                Your details will be used to respond to your enquiry.{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

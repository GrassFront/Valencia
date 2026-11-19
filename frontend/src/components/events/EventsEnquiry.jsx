"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BrandSelect } from "@/components/common";
import { BookingCalendarPopover } from "@/components/booking";
import { Calendar, Check } from "lucide-react";

const EVENT_TYPE_OPTIONS = [
  "Wedding",
  "Reception",
  "Pre-wedding (Engagement / Haldi / Mehndi / Sangeet)",
  "Social Gathering (Birthday / Anniversary)",
  "Corporate Event",
  "Other Celebration",
];

const GUEST_RANGE_OPTIONS = [
  "50 - 150 guests",
  "150 - 300 guests",
  "300 - 500 guests",
  "500 - 800 guests",
  "800 - 1,200+ guests",
  "Not sure yet",
];

const SPACE_OPTIONS = [
  "The Main Hall (Approx. 8,000 sq. ft.)",
  "The Lawn (17,000 sq. ft.)",
  "The Small Hall (2,500 sq. ft.)",
  "Multiple Spaces",
  "Not sure / Recommend for me",
];

const ROOMS_OPTIONS = [
  "0",
  "1 - 5 rooms",
  "6 - 15 rooms",
  "16 - 30 rooms",
  "30+ rooms",
];

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

export default function EventsEnquiry({
  initialEventType = "",
  initialSpace = "",
}) {
  const [formData, setFormData] = useState({
    eventType: initialEventType || "",
    eventDate: "",
    flexibleDates: false,
    guests: "",
    preferredSpace: initialSpace || "",
    roomsNeeded: "0",
    name: "",
    mobile: "",
    email: "",
    specialRequests: "",
  });

  // Keep state updated if initial props change
  useEffect(() => {
    if (initialEventType) {
      setFormData((prev) => ({ ...prev, eventType: initialEventType }));
    }
  }, [initialEventType]);

  useEffect(() => {
    if (initialSpace) {
      setFormData((prev) => ({ ...prev, preferredSpace: initialSpace }));
    }
  }, [initialSpace]);

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const calendarRef = useRef(null);
  const roomsInputRef = useRef(null);

  // Close calendar popover on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.eventType) {
      setErrorMsg("Please select an event type.");
      return;
    }
    if (!formData.flexibleDates && !formData.eventDate) {
      setErrorMsg("Please select an event date or check 'My dates are flexible'.");
      return;
    }
    if (!formData.guests) {
      setErrorMsg("Please select the estimated guest range.");
      return;
    }
    if (!formData.preferredSpace) {
      setErrorMsg("Please choose your preferred space.");
      return;
    }
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.mobile.trim()) {
      setErrorMsg("Please enter your mobile number.");
      return;
    }

    setSubmitted(true);
    setErrorMsg("");
  };

  return (
    <section id="event-enquiry" className="events-enquiry-section" aria-label="Event Enquiry">
      <div className="events-enquiry-inner">
        {/* Left Column: Event enquiry introduction */}
        <div className="events-enquiry-left">
          <span className="events-enquiry-eyebrow">
            LET’S PLAN YOUR EVENT
          </span>

          <h2 className="events-enquiry-heading">
            Tell us what<br />
            you’re<br />
            celebrating.
          </h2>

          <p className="events-enquiry-desc">
            Share a few details and our Umrao team<br className="hidden sm:inline" /> will help you plan the next step.
          </p>

          <div className="events-enquiry-gold-rule" aria-hidden="true" />

          {/* Speak with our team */}
          <div className="events-enquiry-contact">
            {/* Phone SVG */}
            <Image
              src="/images/EventPage/Phone icon.svg"
              alt="Contact phone icon"
              width={60}
              height={60}
              className="w-[60px] h-[60px] flex-shrink-0"
            />

            {/* Contact Copy */}
            <div className="events-contact-copy">
              <p className="events-contact-text">Prefer to speak with us?</p>
              <a href="tel:+910000000000" className="events-contact-link">
                Contact the events team →
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Event enquiry Form */}
        <div className="events-enquiry-card">
          <div className="events-form-header">
            <h3 className="events-form-title">Event enquiry</h3>
            <p className="events-form-subtitle">
              We’ll be in touch to discuss your plans.
            </p>
          </div>

          {submitted ? (
            <div className="w-full bg-[#174F38]/10 border border-[#174F38]/30 rounded-lg p-8 text-center my-auto">
              <div className="w-12 h-12 bg-[#174F38] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} />
              </div>
              <h4 className="font-playfair text-[28px] text-[#174B33] mb-2">
                Thank you for your enquiry
              </h4>
              <p className="font-body text-[16px] text-[#684E3F] mb-6 max-w-md mx-auto leading-relaxed">
                Our dedicated Umrao events team has received your details and will contact you shortly to confirm venue availability and discuss your celebration.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    eventType: "",
                    eventDate: "",
                    flexibleDates: false,
                    guests: "",
                    preferredSpace: "",
                    roomsNeeded: "0",
                    name: "",
                    mobile: "",
                    email: "",
                    specialRequests: "",
                  });
                }}
                className="events-form-submit-btn max-w-[280px] mx-auto text-[13px]"
              >
                SUBMIT ANOTHER ENQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col gap-3">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded">
                  {errorMsg}
                </div>
              )}

              {/* Row 1: Event type, Event date, Flexible date toggle */}
              <div className="events-form-row">
                {/* Event type * (width: 332px) */}
                <div className="events-form-col w-[332px]">
                  <label htmlFor="eventType" className="events-form-label">
                    Event type *
                  </label>
                  <BrandSelect
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={(val) => handleInputChange("eventType", val)}
                    options={EVENT_TYPE_OPTIONS}
                    placeholder="Choose an event"
                    triggerClassName="event-field-select-trigger"
                  />
                </div>

                {/* Event date * (width: 253px) */}
                <div className="events-form-col w-[253px]" ref={calendarRef}>
                  <label htmlFor="eventDate" className="events-form-label">
                    Event date *
                  </label>
                  <div className="relative w-full">
                    <button
                      id="eventDate"
                      type="button"
                      disabled={formData.flexibleDates}
                      onClick={() => setCalendarOpen((prev) => !prev)}
                      className={`events-input flex items-center justify-start gap-2.5 text-left cursor-pointer ${
                        formData.flexibleDates ? "opacity-50 cursor-not-allowed bg-gray-50" : ""
                      }`}
                    >
                      <Calendar size={16} className="text-[#8A8885] shrink-0" />
                      <span className={formData.eventDate ? "text-[#233028]" : "text-[#8A8885]"}>
                        {formData.flexibleDates
                          ? "Dates are flexible"
                          : formData.eventDate
                          ? formatDisplayDate(formData.eventDate)
                          : "Select date"}
                      </span>
                    </button>

                    {calendarOpen && !formData.flexibleDates && (
                      <div className="absolute top-[calc(100%+6px)] left-0 z-50 shadow-2xl">
                        <BookingCalendarPopover
                          selectedDate={formData.eventDate}
                          onSelectDate={(dateStr) => {
                            handleInputChange("eventDate", dateStr);
                            setCalendarOpen(false);
                          }}
                          onClose={() => setCalendarOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Flexible date toggle (width: 173px) */}
                <div
                  className="events-flexible-toggle w-[173px]"
                  onClick={() =>
                    handleInputChange("flexibleDates", !formData.flexibleDates)
                  }
                >
                  <div
                    className={`events-custom-checkbox ${
                      formData.flexibleDates ? "checked" : ""
                    }`}
                  >
                    {formData.flexibleDates && <Check size={13} className="stroke-[3]" />}
                  </div>
                  <span className="events-flexible-text">My dates are flexible</span>
                </div>
              </div>

              {/* Row 2: Estimated guests, Preferred space */}
              <div className="events-form-row">
                {/* Estimated guests * (width: 380px) */}
                <div className="events-form-col w-[380px]">
                  <label htmlFor="guests" className="events-form-label">
                    Estimated guests *
                  </label>
                  <BrandSelect
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={(val) => handleInputChange("guests", val)}
                    options={GUEST_RANGE_OPTIONS}
                    placeholder="Select guest range"
                    triggerClassName="event-field-select-trigger"
                  />
                </div>

                {/* Preferred space * (width: 378px) */}
                <div className="events-form-col w-[378px]">
                  <label htmlFor="preferredSpace" className="events-form-label">
                    Preferred space *
                  </label>
                  <BrandSelect
                    id="preferredSpace"
                    name="preferredSpace"
                    value={formData.preferredSpace}
                    onChange={(val) => handleInputChange("preferredSpace", val)}
                    options={SPACE_OPTIONS}
                    placeholder="Choose space or select Not sure"
                    triggerClassName="event-field-select-trigger"
                  />
                </div>
              </div>

              {/* Row 3: Rooms needed, Name, Mobile */}
              <div className="events-form-row">
                {/* Rooms needed for guests (optional) (width: 247px) */}
                <div className="events-form-col w-[247px]" ref={roomsInputRef}>
                  <label htmlFor="roomsNeeded" className="events-form-label">
                    Rooms needed for guests (optional)
                  </label>
                  <BrandSelect
                    id="roomsNeeded"
                    name="roomsNeeded"
                    value={formData.roomsNeeded}
                    onChange={(val) => handleInputChange("roomsNeeded", val)}
                    options={ROOMS_OPTIONS}
                    placeholder="0"
                    triggerClassName="event-field-select-trigger"
                  />
                </div>

                {/* Name * (width: 247px) */}
                <div className="events-form-col w-[247px]">
                  <label htmlFor="name" className="events-form-label">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="events-input"
                  />
                </div>

                {/* Mobile * (width: 244px) */}
                <div className="events-form-col w-[244px]">
                  <label htmlFor="mobile" className="events-form-label">
                    Mobile *
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    required
                    placeholder="+91 Enter 10-digit mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    className="events-input"
                  />
                </div>
              </div>

              {/* Row 4: Email (optional) */}
              <div className="events-form-row">
                <div className="events-form-col w-full">
                  <label htmlFor="email" className="events-form-label">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="events-input"
                  />
                </div>
              </div>

              {/* Row 5: Special requests (optional) */}
              <div className="events-form-row">
                <div className="events-form-col w-full">
                  <label htmlFor="specialRequests" className="events-form-label">
                    Special requests (optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={2}
                    placeholder="Tell us about your plans, setup needs or questions"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="events-input-textarea"
                  />
                </div>
              </div>

              {/* Booking confirmation notice */}
              <p className="events-form-disclaimer">
                Submitting an enquiry does not confirm a booking. Our team will contact you to discuss availability.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="events-form-submit-btn group"
              >
                <span>SEND EVENT ENQUIRY</span>
                <span className="events-form-submit-arrow transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </button>

              {/* Privacy text */}
              <p className="events-form-privacy">
                Your information will be handled according to our Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

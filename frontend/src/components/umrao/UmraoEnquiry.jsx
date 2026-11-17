"use client";

import { useState } from "react";
import {
  SectionTitleWithDividers,
  ArrowRightIcon,
  CalendarIcon,
} from "./UmraoIcons";
import { Check, ChevronDown } from "lucide-react";
import { BookingCalendarPopover } from "../booking";
import { BrandSelect } from "../common";

// Format date string YYYY-MM-DD into "DD MMM YYYY" for elegant display
function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return dateStr;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function UmraoEnquiry({ preselectedSpace = "" }) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    eventType: "",
    eventDate: "",
    estimatedGuests: "",
    preferredSpace: preselectedSpace,
    budgetRange: "",
    message: "",
    consent: false,
  });

  const [prevSpace, setPrevSpace] = useState(preselectedSpace);
  if (preselectedSpace !== prevSpace) {
    setPrevSpace(preselectedSpace);
    setFormData((prev) => ({ ...prev, preferredSpace: preselectedSpace }));
  }

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.mobileNumber.trim() ||
      !formData.eventType ||
      !formData.eventDate ||
      !formData.estimatedGuests
    ) {
      setErrorMsg("Please fill in all required fields marked with *.");
      return;
    }

    if (!formData.consent) {
      setErrorMsg("Please agree to the Privacy Policy to proceed with your enquiry.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+91",
      mobileNumber: "",
      eventType: "",
      eventDate: "",
      estimatedGuests: "",
      preferredSpace: "",
      budgetRange: "",
      message: "",
      consent: false,
    });
    setSubmitted(false);
  };

  return (
    <section
      id="enquiry"
      aria-label="Event Enquiry"
      className="relative w-full bg-[#FAF6EC] py-12 sm:py-16 lg:py-[44px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[25px] flex flex-col items-center">
        {/* Section Title with Dividers */}
        <SectionTitleWithDividers
          eyebrow="LET’S PLAN YOUR OCCASION"
          color="#C49A4A"
          dividerColor="#C49A4A"
        />

        {/* Spacing: 16px */}
        <div className="h-3 sm:h-4 lg:h-[16px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.2] lg:leading-[71px] text-[#194E35] text-center max-w-[850px]">
          Tell us what you’re celebrating.
        </h2>

        {/* Spacing: 10px */}
        <div className="h-2 lg:h-[10px]" aria-hidden="true" />

        {/* Subhead */}
        <p className="font-body font-normal text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] lg:leading-[29px] text-[#503522] text-center max-w-[800px]">
          Share a few details and our team will help you explore the possibilities.
        </p>

        {/* Spacing: 27px */}
        <div className="h-5 sm:h-6 lg:h-[27px]" aria-hidden="true" />

        {/* Enquiry Form Card (width: 1204px desktop, background: #FCF9F2, border: 2px solid #E6D8C2) */}
        <div className="w-full max-w-[1204px] bg-[#FCF9F2] border-2 border-[#E6D8C2] rounded-[16px] p-5 sm:p-8 lg:px-[35px] lg:py-[28px] shadow-sm">
          {submitted ? (
            <div className="py-12 sm:py-16 flex flex-col items-center text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#194E35] text-[#FAF6EC] flex items-center justify-center mb-6 shadow-md">
                <Check size={36} strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-bold text-[28px] sm:text-[36px] text-[#194E35] mb-3">
                Thank You, {formData.fullName}!
              </h3>
              <p className="font-body text-[17px] sm:text-[20px] text-[#503522] max-w-lg mb-8 leading-relaxed">
                Your event enquiry for <strong className="text-[#194E35]">Umrao The Banquet</strong> has been received. Our event planning team will contact you shortly at{" "}
                <strong className="text-[#194E35]">{formData.email}</strong> or{" "}
                <strong className="text-[#194E35]">{formData.mobileNumber}</strong> to discuss dates and bespoke arrangements.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3.5 rounded-[9px] bg-[#194E35] text-[#FAF6EC] font-body font-bold text-[16px] hover:bg-[#123d2a] transition-colors uppercase tracking-wider"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col">
              {/* Required field legend */}
              <div className="flex items-center justify-between pb-3 sm:pb-4">
                <span className="font-body font-normal text-[15px] sm:text-[17px] leading-[21px] text-[#BA2929]">
                  * Required fields
                </span>
                {errorMsg && (
                  <span className="font-body font-semibold text-[14px] text-[#BA2929] bg-red-50 px-3 py-1 rounded">
                    {errorMsg}
                  </span>
                )}
              </div>

              {/* Selected Property Banner (height: 51px, background: #DFE7D8) */}
              <div className="w-full h-[51px] bg-[#DFE7D8] rounded-[7px] px-4 sm:px-[23px] flex items-center gap-2 mb-5 sm:mb-[19px]">
                <span className="font-body font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[25px] text-[#194E35]">
                  Selected property:
                </span>
                <span className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[25px] text-[#194E35]">
                  Umrao The Banquet
                </span>
              </div>

              {/* Row 1: Full name * & Email address * (gap: 32px) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px] mb-4 sm:mb-5 lg:mb-[20px]">
                {/* Full name * */}
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="fullName"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Full name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full h-[48px] rounded-[8px] px-4 sm:px-[21px] font-body text-[16px] sm:text-[18px] lg:text-[19px] umrao-input"
                  />
                </div>

                {/* Email address * */}
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="email"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full h-[48px] rounded-[8px] px-4 sm:px-[21px] font-body text-[16px] sm:text-[18px] lg:text-[19px] umrao-input"
                  />
                </div>
              </div>

              {/* Row 2: Mobile number * & Event type * */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px] mb-4 sm:mb-5 lg:mb-[20px]">
                {/* Mobile number * */}
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="mobileNumber"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Mobile number *
                  </label>
                  <div className="w-full h-[48px] rounded-[8px] px-3 sm:px-[16px] flex items-center gap-2.5 sm:gap-3.5 umrao-input bg-[#FCFAF6]">
                    <div className="flex items-center gap-1 shrink-0 font-body text-[16px] sm:text-[18px] lg:text-[19px] text-[#503522]">
                      <span>+91</span>
                      <ChevronDown size={16} className="text-[#655344]" />
                    </div>
                    <div className="w-[1px] h-[30px] bg-[#BFB3A8] shrink-0" aria-hidden="true" />
                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Mobile number"
                      className="w-full h-full bg-transparent border-0 outline-none font-body text-[16px] sm:text-[18px] lg:text-[19px] text-[#503522] placeholder:text-[#776B61]"
                    />
                  </div>
                </div>

                {/* Event type * */}
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="eventType"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Event type *
                  </label>
                  <BrandSelect
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Select occasion"
                    options={[
                      "Wedding",
                      "Grand Reception",
                      "Pre-Wedding / Sangeet / Mehendi",
                      "Anniversary / Birthday",
                      "Corporate Meeting / Conference",
                      "Exhibition / Product Launch",
                      "Family Gathering",
                      "Other Occasion",
                    ]}
                  />
                </div>
              </div>

              {/* Row 3: Preferred event date * & Estimated guests * */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px] mb-4 sm:mb-5 lg:mb-[20px]">
                {/* Preferred event date * */}
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="eventDate"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Preferred event date *
                  </label>
                  <div className="relative w-full">
                    <button
                      type="button"
                      id="eventDate"
                      aria-haspopup="dialog"
                      aria-expanded={calendarOpen}
                      onClick={() => setCalendarOpen((prev) => !prev)}
                      className="w-full h-[48px] rounded-[8px] px-4 sm:px-[21px] flex items-center justify-between umrao-input bg-[#FCFAF6] cursor-pointer group text-left focus:outline-none focus:ring-2 focus:ring-[#194E35]/20 focus:border-[#194E35] transition-all"
                    >
                      <span
                        className={`font-body text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] select-none ${
                          formData.eventDate ? "text-[#503522] font-medium" : "text-[#776B61]"
                        }`}
                      >
                        {formData.eventDate
                          ? formatDisplayDate(formData.eventDate)
                          : "Select date"}
                      </span>
                      <div className="text-[#655344] group-hover:text-[#194E35] transition-colors shrink-0">
                        <CalendarIcon size={22} />
                      </div>
                    </button>

                    {/* Hidden input to hold value for form submission */}
                    <input
                      type="hidden"
                      name="eventDate"
                      value={formData.eventDate}
                    />

                    {/* Booking Flow Matching Luxury Calendar Popover */}
                    {calendarOpen && (
                      <BookingCalendarPopover
                        selectedDate={formData.eventDate}
                        onSelectDate={(dateStr) => {
                          setFormData((prev) => ({ ...prev, eventDate: dateStr }));
                          if (errorMsg) setErrorMsg("");
                        }}
                        onClose={() => setCalendarOpen(false)}
                      />
                    )}
                  </div>
                </div>

                {/* Estimated guests * */}
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="estimatedGuests"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Estimated guests *
                  </label>
                  <input
                    id="estimatedGuests"
                    name="estimatedGuests"
                    type="number"
                    min="1"
                    required
                    value={formData.estimatedGuests}
                    onChange={handleChange}
                    placeholder="Number of guests"
                    className="w-full h-[48px] rounded-[8px] px-4 sm:px-[21px] font-body text-[16px] sm:text-[18px] lg:text-[19px] umrao-input"
                  />
                </div>
              </div>

              {/* Row 4: Preferred space (optional) & Budget range (optional) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[32px] mb-4 sm:mb-5 lg:mb-[20px]">
                {/* Preferred space (optional) */}
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="preferredSpace"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Preferred space (optional)
                  </label>
                  <BrandSelect
                    id="preferredSpace"
                    name="preferredSpace"
                    value={formData.preferredSpace}
                    onChange={handleChange}
                    placeholder="Help me choose"
                    options={[
                      { value: "Main Hall", label: "Main Hall (Approx. 8,000 sq ft)" },
                      { value: "Open-air Lawn", label: "Open-air Lawn (17,000 sq ft)" },
                      { value: "Small Hall", label: "Small Hall (2,500 sq ft)" },
                      { value: "Combined / All Spaces", label: "Combined / All Spaces" },
                      { value: "Conference Room", label: "Conference Room" },
                    ]}
                  />
                </div>

                {/* Budget range (optional) */}
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="budgetRange"
                    className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                  >
                    Budget range (optional)
                  </label>
                  <BrandSelect
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    placeholder="Select range"
                    options={[
                      "Under ₹3,00,000",
                      "₹3,00,000 – ₹7,00,000",
                      "₹7,00,000 – ₹15,00,000",
                      "₹15,00,000 – ₹30,00,000",
                      "₹30,00,000+",
                    ]}
                  />
                </div>
              </div>

              {/* Row 5: Tell us more (optional) */}
              <div className="flex flex-col items-start mb-4 sm:mb-5 lg:mb-[17px]">
                <label
                  htmlFor="message"
                  className="font-body font-bold text-[16px] sm:text-[18px] lg:text-[19px] leading-[24px] text-[#503522] mb-2 sm:mb-[9px]"
                >
                  Tell us more (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your plans, guest-room needs or any special requests."
                  className="w-full min-h-[86px] rounded-[8px] p-3 sm:px-[21px] sm:py-[12px] font-body text-[16px] sm:text-[18px] lg:text-[19px] umrao-input resize-y"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-center gap-3 sm:gap-[17px] mb-5 sm:mb-[15px]">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-5 h-5 sm:w-[26px] sm:h-[26px] rounded-[5px] border border-[#BFB3A8] text-[#194E35] focus:ring-[#194E35] cursor-pointer shrink-0"
                />
                <label
                  htmlFor="consent"
                  className="font-body font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[23px] text-[#503522] cursor-pointer"
                >
                  I agree to the Privacy Policy and consent to being contacted about this enquiry.
                </label>
              </div>

              {/* Submit Row: Submitting note & Button (gap or between) */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-2">
                <p className="font-display italic font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[21px] text-[#776B61] text-center sm:text-left">
                  Submitting an enquiry does not confirm a booking.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-[260px] h-[54px] bg-[#194E35] hover:bg-[#123d2a] active:bg-[#0c2b1e] rounded-[9px] text-[#FAF6EC] transition-all shadow-md group cursor-pointer shrink-0"
                >
                  <span className="font-body font-bold text-[18px] sm:text-[20px] lg:text-[21px] leading-[26px] tracking-wide uppercase">
                    SEND ENQUIRY
                  </span>
                  <ArrowRightIcon
                    size={22}
                    color="#FAF6EC"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

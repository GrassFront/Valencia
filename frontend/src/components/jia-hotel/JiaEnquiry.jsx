"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import Image from "next/image";
import { BookingCalendarPopover } from "../booking";

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

// Chevron Icon matching Figma token (width: 20px, height: 17px, border: 1.67px solid #4F3523)
function ChevronIcon({ className = "", color = "#4F3523" }) {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 6.5L10 11.5L15 6.5"
        stroke={color}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Calendar Icon matching Figma token (width: 25px, height: 26px, border: 1.73px solid #4F3523)
function CalendarIcon({ size = 25, color = "#4F3523", className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round((size * 26) / 25)}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="19"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth="1.73"
      />
      <path d="M17 2V6" stroke={color} strokeWidth="1.73" strokeLinecap="round" />
      <path d="M8 2V6" stroke={color} strokeWidth="1.73" strokeLinecap="round" />
      <path d="M3 10H22" stroke={color} strokeWidth="1.73" />
    </svg>
  );
}

// Arrow Right Button Icon matching Figma token (width: 25px, height: 22px, border: 1.83px solid #FAF6EC)
function ArrowButtonIcon({ color = "#FAF6EC", className = "" }) {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 11H20M20 11L13 4M20 11L13 18"
        stroke={color}
        strokeWidth="1.83"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Custom Accessible Select Input matching exact Figma dimensions and styling
function JiaSelect({
  id,
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  className = "",
}) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const listboxId = `${selectId}-listbox`;

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleOutsideClick = useCallback((e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  const selectedOption = options.find((opt) => String(opt.value) === String(value));
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-start ${className}`}
    >
      {label && (
        <label
          htmlFor={selectId}
          className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px] select-none"
        >
          {label}
        </label>
      )}

      <button
        id={selectId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-[45px] box-border px-[14px] sm:px-[17px] pr-[12px] sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] flex flex-row justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all cursor-pointer"
      >
        <span className="font-body font-normal text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523] truncate">
          {displayText}
        </span>
        <div className="shrink-0 ml-1.5 sm:ml-2">
          <ChevronIcon
            color="#4F3523"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          role="listbox"
          id={listboxId}
          className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 bg-[#FCFAF6] border border-[#DDC9A6] rounded-[9px] shadow-[0_12px_28px_rgba(79,53,35,0.14)] py-1.5 max-h-[220px] overflow-y-auto"
        >
          {options.map((opt) => {
            const isSelected = String(opt.value) === String(value);
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-[17px] py-2 text-[15px] sm:text-[16px] leading-[22px] font-body cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[#F3EBDD] text-[#194E35] font-semibold"
                    : "text-[#4F3523] hover:bg-[#FAF6EC]"
                }`}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const ROOM_OPTIONS = [
  { value: "No preference", label: "No preference" },
  { value: "Budget", label: "Budget Room" },
  { value: "Superior", label: "Superior Room" },
  { value: "Twin Bed", label: "Twin Bed Room" },
  { value: "Executive", label: "Executive Room" },
];

const ADULT_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5+", label: "5+" },
];

const CHILD_OPTIONS = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3+", label: "3+" },
];

const ROOM_COUNT_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4+", label: "4+" },
];

export default function JiaEnquiry({ preselectedRoom = "" }) {
  const [checkInCalendarOpen, setCheckInCalendarOpen] = useState(false);
  const [checkOutCalendarOpen, setCheckOutCalendarOpen] = useState(false);

  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomPreference: preselectedRoom || "No preference",
    adults: "2",
    children: "0",
    rooms: "1",
    fullName: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    specialRequests: "",
    consent: false,
  });

  const [prevRoom, setPrevRoom] = useState(preselectedRoom);
  if (preselectedRoom && preselectedRoom !== prevRoom) {
    setPrevRoom(preselectedRoom);
    setFormData((prev) => ({ ...prev, roomPreference: preselectedRoom }));
  }

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.checkInDate) {
      setErrorMsg("Please select a check-in date.");
      return;
    }
    if (!formData.checkOutDate) {
      setErrorMsg("Please select a check-out date.");
      return;
    }
    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!formData.mobileNumber.trim()) {
      setErrorMsg("Please enter your mobile number.");
      return;
    }
    if (!formData.consent) {
      setErrorMsg(
        "Please agree to the Privacy Policy to proceed with your enquiry."
      );
      return;
    }

    setSubmitted(true);
    setErrorMsg("");
  };

  return (
    <section
      id="enquiry"
      aria-label="Plan your stay at Hotel Jia"
      className="relative w-full bg-[#FAF6EC] pt-[47px] pb-16 lg:pb-[60px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-[96px] flex flex-col items-start">
        {/* PLAN YOUR STAY - Left aligned (width: 198px, height: 30px) */}
        <h3 className="font-display font-bold text-[22px] sm:text-[24px] leading-[30px] text-[#BE9546]">
          PLAN YOUR STAY
        </h3>

        {/* Space: 3px */}
        <div className="h-[3px]" aria-hidden="true" />

        {/* Your city stay starts here. (width: 587px, height: 64px) */}
        <h2 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[48px] lg:text-[51px] leading-[1.2] lg:leading-[64px] text-[#194E35]">
          Your city stay starts here.
        </h2>

        {/* Space: 7px */}
        <div className="h-[7px]" aria-hidden="true" />

        {/* Tell us your plans... (width: 804px, height: 29px) */}
        <p className="font-body font-normal text-[17px] sm:text-[20px] md:text-[22px] lg:text-[23px] leading-[24px] sm:leading-[28px] lg:leading-[29px] text-[#4F3523] max-w-[804px]">
          Tell us your plans. We’ll help you find the right room at Hotel Jia International.
        </p>

        {/* Space: 29px */}
        <div className="h-[20px] sm:h-[24px] lg:h-[29px]" aria-hidden="true" />

        {/* Stay Enquiry Form Card (1248px x 827px, #FCFAF6, border 1px solid #DDC9A6, rounded 13px) */}
        <div className="box-border w-full max-w-[1248px] bg-[#FCFAF6] border border-[#DDC9A6] rounded-[13px] pt-[16px] px-4 sm:px-6 md:px-8 xl:px-[31px] pb-[32px] flex flex-col items-start shadow-sm">
          {submitted ? (
            <div className="w-full py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#194E35]/10 flex items-center justify-center mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#194E35"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-[28px] sm:text-[34px] text-[#194E35]">
                Thank You for Your Enquiry
              </h3>
              <p className="font-body text-[17px] sm:text-[19px] text-[#4F3523] mt-3 max-w-[580px]">
                We have received your stay enquiry for{" "}
                <strong>Hotel Jia International</strong>. Our reservations team
                will get in touch with availability and rates promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    checkInDate: "",
                    checkOutDate: "",
                    roomPreference: "No preference",
                    adults: "2",
                    children: "0",
                    rooms: "1",
                    fullName: "",
                    email: "",
                    countryCode: "+91",
                    mobileNumber: "",
                    specialRequests: "",
                    consent: false,
                  });
                }}
                className="mt-8 px-8 py-3 bg-[#194E35] text-[#FAF6EC] rounded-[8px] font-bold text-[16px] hover:bg-[#123d2a] transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full" noValidate>
              {/* Property Heading (width: 1186px, height: 66px, gap: 24px) */}
              <div className="w-full max-w-[1186px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-row items-center gap-3 sm:gap-[24px]">
                  {/* Hotel Icon (72px x 64px) */}
                  <div className="w-[56px] h-[50px] sm:w-[72px] sm:h-[64px] shrink-0 relative">
                    <Image
                      src="/images/Jia Hotel/hotel icon.png"
                      alt="Hotel Jia Icon"
                      width={72}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Divider (1px x 57px, #C4B297) */}
                  <div
                    className="w-[1px] h-[46px] sm:h-[57px] bg-[#C4B297] shrink-0"
                    aria-hidden="true"
                  />

                  {/* Property Name (width: 650px) */}
                  <div className="flex flex-col items-start">
                    <h4 className="font-display font-bold text-[24px] sm:text-[29px] leading-[30px] sm:leading-[36px] text-[#4F3523]">
                      Hotel Jia International
                    </h4>
                    <span className="font-body font-normal text-[15px] sm:text-[18px] leading-[20px] sm:leading-[23px] text-[#4F3523]">
                      Fraser Road, Patna
                    </span>
                  </div>
                </div>

                {/* * Required fields (width: 320px) */}
                <div className="flex flex-row justify-start sm:justify-end items-center">
                  <span className="font-body font-normal text-[15px] sm:text-[18px] leading-[20px] sm:leading-[23px] text-[#4F3523]">
                    * Required fields
                  </span>
                </div>
              </div>

              {/* Space: 8px */}
              <div className="h-[8px]" aria-hidden="true" />

              {/* Divider (width: 1186px, height: 1px, #D9CCB6) */}
              <div className="w-full max-w-[1186px] h-[1px] bg-[#D9CCB6]" aria-hidden="true" />

              {/* Space: 14px */}
              <div className="h-[14px]" aria-hidden="true" />

              {/* ========================================================= */}
              {/* SECTION: YOUR STAY                                       */}
              {/* ========================================================= */}
              <div className="w-full max-w-[1186px] flex flex-col items-start">
                <h4 className="font-display font-bold text-[26px] sm:text-[30px] lg:text-[33px] leading-[34px] sm:leading-[38px] lg:leading-[41px] text-[#194E35]">
                  Your stay
                </h4>
                <p className="font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[21px] sm:leading-[23px] text-[#4F3523] mt-0.5">
                  Choose your dates and room preferences.
                </p>

                {/* Space: 16px */}
                <div className="h-[14px] sm:h-[16px]" aria-hidden="true" />

                {/* ------------------------------------------------------- */}
                {/* LINE 1: STAY DATES (EXACTLY 2 INPUTS IN THIS LINE)      */}
                {/* Responsive across Mobile (stacked), Tablet (2 equal), Desktop (2x 577px) */}
                {/* ------------------------------------------------------- */}
                <div className="w-full max-w-[1186px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 xl:gap-[32px]">
                  {/* Check-in date * */}
                  <div className="relative w-full flex flex-col items-start">
                    <label
                      htmlFor="jia-check-in-btn"
                      className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px]"
                    >
                      Check-in date *
                    </label>

                    <button
                      id="jia-check-in-btn"
                      type="button"
                      onClick={() => {
                        setCheckInCalendarOpen(!checkInCalendarOpen);
                        setCheckOutCalendarOpen(false);
                      }}
                      className="w-full h-[45px] box-border px-[14px] sm:px-[17px] pr-[12px] sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] flex flex-row justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all cursor-pointer"
                    >
                      <span
                        className={`font-body text-[15px] sm:text-[17px] leading-[21px] ${
                          formData.checkInDate
                            ? "font-normal text-[#4F3523]"
                            : "font-normal text-[#786D61]"
                        }`}
                      >
                        {formatDisplayDate(formData.checkInDate) || "Select date"}
                      </span>
                      <CalendarIcon size={24} color="#4F3523" />
                    </button>

                    {/* Booking Calendar Popover */}
                    {checkInCalendarOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 z-50 shadow-xl rounded-xl">
                        <BookingCalendarPopover
                          selectedDate={formData.checkInDate}
                          onSelectDate={(date) => {
                            handleInputChange("checkInDate", date);
                            setCheckInCalendarOpen(false);
                          }}
                          onClose={() => setCheckInCalendarOpen(false)}
                        />
                      </div>
                    )}
                  </div>

                  {/* Check-out date * */}
                  <div className="relative w-full flex flex-col items-start">
                    <label
                      htmlFor="jia-check-out-btn"
                      className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px]"
                    >
                      Check-out date *
                    </label>

                    <button
                      id="jia-check-out-btn"
                      type="button"
                      onClick={() => {
                        setCheckOutCalendarOpen(!checkOutCalendarOpen);
                        setCheckInCalendarOpen(false);
                      }}
                      className="w-full h-[45px] box-border px-[14px] sm:px-[17px] pr-[12px] sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] flex flex-row justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all cursor-pointer"
                    >
                      <span
                        className={`font-body text-[15px] sm:text-[17px] leading-[21px] ${
                          formData.checkOutDate
                            ? "font-normal text-[#4F3523]"
                            : "font-normal text-[#786D61]"
                        }`}
                      >
                        {formatDisplayDate(formData.checkOutDate) || "Select date"}
                      </span>
                      <CalendarIcon size={24} color="#4F3523" />
                    </button>

                    {/* Booking Calendar Popover */}
                    {checkOutCalendarOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 sm:left-auto sm:right-0 md:left-0 xl:left-auto xl:right-0 z-50 shadow-xl rounded-xl">
                        <BookingCalendarPopover
                          selectedDate={formData.checkOutDate}
                          minDate={formData.checkInDate || undefined}
                          onSelectDate={(date) => {
                            handleInputChange("checkOutDate", date);
                            setCheckOutCalendarOpen(false);
                          }}
                          onClose={() => setCheckOutCalendarOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Space: 16px */}
                <div className="h-[14px] sm:h-[16px]" aria-hidden="true" />

                {/* ------------------------------------------------------- */}
                {/* LINE 2: ROOM & GUEST PREFERENCES                        */}
                {/* Desktop: 4 inputs in 1 line (2.6fr + 1fr + 1fr + 1fr ~ 509px + 195px + 191px + 195px) */}
                {/* Tablet: Room preference full width, 3 guest selects in 3 equal columns */}
                {/* Mobile: 1 column stacked cleanly                        */}
                {/* ------------------------------------------------------- */}
                <div className="w-full max-w-[1186px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2.6fr_1fr_1fr_1fr] gap-4 xl:gap-[31px]">
                  {/* Room preference (optional) */}
                  <div className="w-full sm:col-span-3 lg:col-span-1">
                    <JiaSelect
                      id="jia-room-pref"
                      label="Room preference (optional)"
                      value={formData.roomPreference}
                      onChange={(val) => handleInputChange("roomPreference", val)}
                      options={ROOM_OPTIONS}
                      placeholder="No preference"
                      className="w-full"
                    />
                  </div>

                  {/* Adults * */}
                  <div className="w-full">
                    <JiaSelect
                      id="jia-adults"
                      label="Adults *"
                      value={formData.adults}
                      onChange={(val) => handleInputChange("adults", val)}
                      options={ADULT_OPTIONS}
                      placeholder="2"
                      className="w-full"
                    />
                  </div>

                  {/* Children */}
                  <div className="w-full">
                    <JiaSelect
                      id="jia-children"
                      label="Children"
                      value={formData.children}
                      onChange={(val) => handleInputChange("children", val)}
                      options={CHILD_OPTIONS}
                      placeholder="0"
                      className="w-full"
                    />
                  </div>

                  {/* Rooms * */}
                  <div className="w-full">
                    <JiaSelect
                      id="jia-rooms"
                      label="Rooms *"
                      value={formData.rooms}
                      onChange={(val) => handleInputChange("rooms", val)}
                      options={ROOM_COUNT_OPTIONS}
                      placeholder="1"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Space: 27px */}
              <div className="h-[20px] sm:h-[24px] lg:h-[27px]" aria-hidden="true" />

              {/* Divider (width: 1186px, height: 1px, #D9CCB6) */}
              <div className="w-full max-w-[1186px] h-[1px] bg-[#D9CCB6]" aria-hidden="true" />

              {/* Space: 12px */}
              <div className="h-[12px]" aria-hidden="true" />

              {/* ========================================================= */}
              {/* SECTION: YOUR CONTACT DETAILS                            */}
              {/* ========================================================= */}
              <div className="w-full max-w-[1186px] flex flex-col items-start">
                <h4 className="font-display font-bold text-[26px] sm:text-[30px] lg:text-[32px] leading-[34px] sm:leading-[38px] lg:leading-[40px] text-[#194E35]">
                  Your contact details
                </h4>
                <p className="font-body font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[21px] sm:leading-[23px] text-[#4F3523] mt-0.5">
                  Our team will use these details to respond to your enquiry.
                </p>

                {/* Space: 16px */}
                <div className="h-[14px] sm:h-[16px]" aria-hidden="true" />

                {/* ------------------------------------------------------- */}
                {/* LINE 3: CONTACT FIELDS (EXACTLY 3 INPUTS IN THIS LINE)  */}
                {/* Desktop: 3 equal grid cols (~375px each, gap 30px)      */}
                {/* Tablet: 3 columns balanced across the card width        */}
                {/* Mobile: stacked vertically                              */}
                {/* ------------------------------------------------------- */}
                <div className="w-full max-w-[1186px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 xl:gap-[30px]">
                  {/* Full name * */}
                  <div className="w-full flex flex-col items-start">
                    <label
                      htmlFor="jia-fullname"
                      className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px]"
                    >
                      Full name *
                    </label>
                    <input
                      id="jia-fullname"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Your full name"
                      className="box-border w-full h-[45px] px-[14px] sm:px-[17px] pr-[12px] sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] font-body text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523] placeholder:text-[#786D61] focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all"
                    />
                  </div>

                  {/* Email address * */}
                  <div className="w-full flex flex-col items-start">
                    <label
                      htmlFor="jia-email"
                      className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px]"
                    >
                      Email address *
                    </label>
                    <input
                      id="jia-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="you@example.com"
                      className="box-border w-full h-[45px] px-[14px] sm:px-[17px] pr-[12px] sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] font-body text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523] placeholder:text-[#786D61] focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all"
                    />
                  </div>

                  {/* Mobile number * */}
                  <div className="w-full flex flex-col items-start">
                    <label
                      htmlFor="jia-phone"
                      className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px]"
                    >
                      Mobile number *
                    </label>
                    <div className="w-full flex flex-row items-center gap-[10px] sm:gap-[13px] h-[45px]">
                      {/* Dialling Code */}
                      <div className="box-border w-[86px] sm:w-[96px] xl:w-[105px] h-[45px] px-2.5 sm:px-[17px] pr-2 sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] flex flex-row justify-between items-center shrink-0">
                        <span className="font-body font-normal text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523]">
                          +91
                        </span>
                        <ChevronIcon color="#4F3523" />
                      </div>

                      {/* Phone Number Input */}
                      <input
                        id="jia-phone"
                        type="tel"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          handleInputChange("mobileNumber", e.target.value)
                        }
                        placeholder="Mobile number"
                        className="box-border flex-1 min-w-0 h-[45px] px-3 sm:px-[18px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] font-body text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523] placeholder:text-[#786D61] focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Space: 14px */}
              <div className="h-[14px]" aria-hidden="true" />

              {/* ========================================================= */}
              {/* SECTION: SPECIAL REQUESTS (OPTIONAL)                      */}
              {/* (width: 1186px, height: 63px)                             */}
              {/* ========================================================= */}
              <div className="w-full max-w-[1186px] flex flex-col items-start">
                <label
                  htmlFor="jia-special-requests"
                  className="block font-body font-bold text-[16px] sm:text-[17px] leading-[21px] text-[#4F3523] mb-[6px]"
                >
                  Special requests (optional)
                </label>
                <textarea
                  id="jia-special-requests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) =>
                    handleInputChange("specialRequests", e.target.value)
                  }
                  placeholder="Share arrival plans, accessibility needs or other preferences."
                  className="box-border w-full min-h-[63px] h-[63px] pt-[10px] px-[14px] sm:px-[17px] pr-[12px] sm:pr-[14px] bg-[#FCFBF8] border border-[#BFB3A4] rounded-[7px] font-body font-normal text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523] placeholder:text-[#786D61] focus:outline-none focus:ring-2 focus:ring-[#194E35]/30 focus:border-[#194E35] transition-all resize-none"
                />

                {/* Space: 5px */}
                <div className="h-[5px]" aria-hidden="true" />

                <span className="font-body font-normal text-[14px] sm:text-[15px] leading-[19px] text-[#4F3523]">
                  Requests are subject to availability.
                </span>
              </div>

              {/* Space: 14px */}
              <div className="h-[14px]" aria-hidden="true" />

              {/* ========================================================= */}
              {/* SECTION: PRIVACY CONSENT (width: 1186px, height: 29px)    */}
              {/* ========================================================= */}
              <div className="w-full max-w-[1186px] flex flex-row items-center gap-[12px] sm:gap-[14px]">
                <input
                  id="jia-privacy-consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) =>
                    handleInputChange("consent", e.target.checked)
                  }
                  className="box-border w-[20px] h-[20px] bg-white border-2 border-[#A58D67] rounded-[3px] accent-[#194E35] cursor-pointer shrink-0 mt-0.5 sm:mt-0"
                />
                <label
                  htmlFor="jia-privacy-consent"
                  className="font-body font-normal text-[15px] sm:text-[17px] leading-[21px] text-[#4F3523] cursor-pointer"
                >
                  I agree to the{" "}
                  <span className="underline hover:text-[#194E35] transition-colors">
                    Privacy Policy
                  </span>{" "}
                  and consent to being contacted about this enquiry.
                </label>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 font-body text-[14px]">
                  {errorMsg}
                </div>
              )}

              {/* Space: 20px */}
              <div className="h-[16px] sm:h-[20px]" aria-hidden="true" />

              {/* Divider (width: 1186px, height: 1px, #D9CCB6) */}
              <div className="w-full max-w-[1186px] h-[1px] bg-[#D9CCB6]" aria-hidden="true" />

              {/* Space: 19px */}
              <div className="h-[16px] sm:h-[19px]" aria-hidden="true" />

              {/* ========================================================= */}
              {/* SUBMIT STAY ENQUIRY ROW                                   */}
              {/* (width: 1186px, height: 59px)                             */}
              {/* ========================================================= */}
              <div className="w-full max-w-[1186px] flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
                {/* Enquiry Notice (width: 760px, height: 59px, gap: 24px) */}
                <div className="flex flex-row items-center gap-3 sm:gap-[24px] max-w-[700px] flex-1">
                  {/* Information Icon (width: 34px, height: 34px) */}
                  <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] shrink-0 relative">
                    <Image
                      src="/images/Jia Hotel/Information.svg"
                      alt="Information"
                      width={34}
                      height={34}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Notice text (width: 700px) */}
                  <div className="flex flex-col items-start min-w-0">
                    <span className="font-body font-bold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[23px] text-[#4F3523]">
                      This enquiry does not confirm a reservation.
                    </span>
                    <span className="font-body font-normal text-[15px] sm:text-[17px] leading-[20px] sm:leading-[21px] text-[#4F3523]">
                      Our team will share rates and availability.
                    </span>
                  </div>
                </div>

                {/* Submit Button (width: 355px, height: 59px, #194E35, rounded: 8px) */}
                <button
                  type="submit"
                  className="w-full md:w-[320px] xl:w-[355px] h-[54px] sm:h-[59px] bg-[#194E35] hover:bg-[#123d2a] active:bg-[#0c2b1e] rounded-[8px] flex flex-row justify-center items-center gap-[10px] transition-all shadow-md group shrink-0 cursor-pointer"
                >
                  <span className="font-display font-bold text-[20px] sm:text-[23px] leading-[26px] sm:leading-[29px] text-[#FAF6EC] whitespace-nowrap">
                    SEND STAY ENQUIRY
                  </span>
                  <ArrowButtonIcon
                    color="#FAF6EC"
                    className="group-hover:translate-x-1 transition-transform shrink-0"
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

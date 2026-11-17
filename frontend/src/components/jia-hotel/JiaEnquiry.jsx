"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SectionTitleWithDividers,
  ArrowRightIcon,
  CalendarIcon,
} from "./JiaIcons";
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

const ROOM_OPTIONS = [
  { value: "No preference", label: "No preference" },
  { value: "Budget", label: "Budget Room" },
  { value: "Superior", label: "Superior Room" },
  { value: "Twin Bed", label: "Twin Bed Room" },
  { value: "Executive", label: "Executive Room" },
];

const ADULT_OPTIONS = [
  { value: "1", label: "1 Adult" },
  { value: "2", label: "2 Adults" },
  { value: "3", label: "3 Adults" },
  { value: "4", label: "4 Adults" },
  { value: "5+", label: "5+ Adults" },
];

const CHILD_OPTIONS = [
  { value: "0", label: "0 Children" },
  { value: "1", label: "1 Child" },
  { value: "2", label: "2 Children" },
  { value: "3+", label: "3+ Children" },
];

const ROOM_COUNT_OPTIONS = [
  { value: "1", label: "1 Room" },
  { value: "2", label: "2 Rooms" },
  { value: "3", label: "3 Rooms" },
  { value: "4+", label: "4+ Rooms" },
];

export default function JiaEnquiry({ preselectedRoom = "" }) {
  const [checkInCalendarOpen, setCheckInCalendarOpen] = useState(false);
  const [checkOutCalendarOpen, setCheckOutCalendarOpen] = useState(false);

  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomPreference: preselectedRoom || "No preference",
    adults: "1",
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
      className="relative w-full bg-[#FAF6EC] py-14 sm:py-20 lg:py-[88px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[56px] flex flex-col items-center">
        {/* Section Title with Gold Dividers */}
        <SectionTitleWithDividers
          eyebrow="PLAN YOUR STAY"
          color="#BE9546"
          dividerColor="#BE9546"
        />

        {/* Spacing: 14px */}
        <div className="h-2.5 sm:h-3.5 lg:h-[14px]" aria-hidden="true" />

        {/* Heading */}
        <h2 className="font-display font-bold text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.15] lg:leading-[64px] text-[#194E35] text-center max-w-[850px]">
          Your city stay starts here.
        </h2>

        {/* Spacing: 12px */}
        <div className="h-2 sm:h-3 lg:h-[12px]" aria-hidden="true" />

        {/* Subtitle */}
        <p className="font-body font-normal text-[16px] sm:text-[19px] lg:text-[21px] leading-[26px] sm:leading-[30px] text-[#4F3523] text-center max-w-[760px]">
          Tell us your plans. We’ll help you find the right room at Hotel Jia
          International.
        </p>

        {/* Spacing: 36px */}
        <div className="h-6 sm:h-8 lg:h-[36px]" aria-hidden="true" />

        {/* Form Card (1248px x ~827px, #FCFAF6, border 1px solid #DDC9A6, rounded 13px) */}
        <div className="w-full max-w-[1248px] bg-[#FCFAF6] border border-[#DDC9A6] rounded-[14px] p-5 sm:p-8 lg:p-[42px] shadow-sm">
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#194E35]/10 flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-[#194E35]" />
              </div>
              <h3 className="font-display font-bold text-[28px] sm:text-[34px] text-[#194E35]">
                Thank You for Your Enquiry
              </h3>
              <p className="font-body text-[17px] sm:text-[19px] text-[#4F3523] mt-3 max-w-[580px]">
                We have received your stay enquiry for{" "}
                <strong>Hotel Jia International</strong>. Our reservations team
                will get in touch with availability and booking confirmation
                promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    checkInDate: "",
                    checkOutDate: "",
                    roomPreference: "No preference",
                    adults: "1",
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
            <form onSubmit={handleSubmit} noValidate>
              {/* Top Property Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DDC9A6] gap-4">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="shrink-0">
                    <Image
                      src="/images/Jia Hotel/hotel icon.png"
                      alt="Hotel Jia"
                      width={72}
                      height={64}
                      className="w-[56px] h-[50px] sm:w-[72px] sm:h-[64px] object-contain"
                    />
                  </div>
                  <div
                    className="w-[1px] h-[46px] sm:h-[57px] bg-[#C4B297] shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.2] text-[#194E35]">
                      Hotel Jia International
                    </h3>
                    <p className="font-body font-normal text-[15px] sm:text-[17px] text-[#4F3523] mt-0.5">
                      Fraser Road, Patna
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="font-body font-normal text-[14px] sm:text-[15px] text-[#4F3523]/80">
                    * Required fields
                  </span>
                </div>
              </div>

              {/* Section A: Your stay */}
              <div className="pt-6 sm:pt-7">
                <h4 className="font-body font-bold text-[16px] sm:text-[18px] text-[#194E35] uppercase tracking-wider mb-4">
                  YOUR STAY
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {/* Check-in Date */}
                  <div className="relative">
                    <label className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5">
                      Check-in date *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setCheckInCalendarOpen(!checkInCalendarOpen);
                        setCheckOutCalendarOpen(false);
                      }}
                      className="w-full h-[52px] px-4 bg-white border border-[#DDC9A6] rounded-[8px] flex items-center justify-between text-left text-[15px] sm:text-[16px] text-[#4F3523] focus:outline-none focus:ring-2 focus:ring-[#194E35]/40 transition-all"
                    >
                      <span
                        className={
                          formData.checkInDate
                            ? "text-[#4F3523] font-medium"
                            : "text-[#4F3523]/50"
                        }
                      >
                        {formatDisplayDate(formData.checkInDate) ||
                          "Select check-in"}
                      </span>
                      <CalendarIcon size={20} color="#BE9546" />
                    </button>

                    {/* Popover */}
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

                  {/* Check-out Date */}
                  <div className="relative">
                    <label className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5">
                      Check-out date *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setCheckOutCalendarOpen(!checkOutCalendarOpen);
                        setCheckInCalendarOpen(false);
                      }}
                      className="w-full h-[52px] px-4 bg-white border border-[#DDC9A6] rounded-[8px] flex items-center justify-between text-left text-[15px] sm:text-[16px] text-[#4F3523] focus:outline-none focus:ring-2 focus:ring-[#194E35]/40 transition-all"
                    >
                      <span
                        className={
                          formData.checkOutDate
                            ? "text-[#4F3523] font-medium"
                            : "text-[#4F3523]/50"
                        }
                      >
                        {formatDisplayDate(formData.checkOutDate) ||
                          "Select check-out"}
                      </span>
                      <CalendarIcon size={20} color="#BE9546" />
                    </button>

                    {/* Popover */}
                    {checkOutCalendarOpen && (
                      <div className="absolute top-[calc(100%+6px)] left-0 z-50 shadow-xl rounded-xl">
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

                  {/* Room Preference (optional) */}
                  <div>
                    <label className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5">
                      Room preference (optional)
                    </label>
                    <BrandSelect
                      value={formData.roomPreference}
                      onChange={(val) =>
                        handleInputChange("roomPreference", val)
                      }
                      options={ROOM_OPTIONS}
                      placeholder="Select room type"
                    />
                  </div>

                  {/* Adults * */}
                  <div>
                    <label className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5">
                      Adults *
                    </label>
                    <BrandSelect
                      value={formData.adults}
                      onChange={(val) => handleInputChange("adults", val)}
                      options={ADULT_OPTIONS}
                    />
                  </div>

                  {/* Children */}
                  <div>
                    <label className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5">
                      Children
                    </label>
                    <BrandSelect
                      value={formData.children}
                      onChange={(val) => handleInputChange("children", val)}
                      options={CHILD_OPTIONS}
                    />
                  </div>

                  {/* Rooms * */}
                  <div>
                    <label className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5">
                      Rooms *
                    </label>
                    <BrandSelect
                      value={formData.rooms}
                      onChange={(val) => handleInputChange("rooms", val)}
                      options={ROOM_COUNT_OPTIONS}
                    />
                  </div>
                </div>
              </div>

              {/* Section B: Your contact details */}
              <div className="pt-8">
                <h4 className="font-body font-bold text-[16px] sm:text-[18px] text-[#194E35] uppercase tracking-wider mb-4">
                  YOUR CONTACT DETAILS
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {/* Full Name * */}
                  <div>
                    <label
                      htmlFor="jia-fullName"
                      className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5"
                    >
                      Full name *
                    </label>
                    <input
                      id="jia-fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Enter full name"
                      className="w-full h-[52px] px-4 bg-white border border-[#DDC9A6] rounded-[8px] text-[15px] sm:text-[16px] text-[#4F3523] placeholder:text-[#4F3523]/40 focus:outline-none focus:ring-2 focus:ring-[#194E35]/40 transition-all"
                    />
                  </div>

                  {/* Email address * */}
                  <div>
                    <label
                      htmlFor="jia-email"
                      className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5"
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
                      placeholder="Enter email address"
                      className="w-full h-[52px] px-4 bg-white border border-[#DDC9A6] rounded-[8px] text-[15px] sm:text-[16px] text-[#4F3523] placeholder:text-[#4F3523]/40 focus:outline-none focus:ring-2 focus:ring-[#194E35]/40 transition-all"
                    />
                  </div>

                  {/* Mobile number * */}
                  <div>
                    <label
                      htmlFor="jia-mobile"
                      className="block font-body font-medium text-[15px] sm:text-[16px] text-[#4F3523] mb-1.5"
                    >
                      Mobile number *
                    </label>
                    <div className="flex w-full h-[52px] bg-white border border-[#DDC9A6] rounded-[8px] overflow-hidden focus-within:ring-2 focus-within:ring-[#194E35]/40 transition-all">
                      <div className="flex items-center justify-center px-3 bg-[#FAF6EC] border-r border-[#DDC9A6] shrink-0 text-[#4F3523] font-medium text-[15px]">
                        +91
                      </div>
                      <input
                        id="jia-mobile"
                        type="tel"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) =>
                          handleInputChange("mobileNumber", e.target.value)
                        }
                        placeholder="Mobile number"
                        className="flex-1 px-4 text-[15px] sm:text-[16px] text-[#4F3523] placeholder:text-[#4F3523]/40 focus:outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section C: Special requests (optional) */}
              <div className="pt-8">
                <label
                  htmlFor="jia-requests"
                  className="block font-body font-bold text-[16px] sm:text-[18px] text-[#194E35] uppercase tracking-wider mb-2"
                >
                  SPECIAL REQUESTS (OPTIONAL)
                </label>
                <textarea
                  id="jia-requests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) =>
                    handleInputChange("specialRequests", e.target.value)
                  }
                  placeholder="Early check-in, late check-out, high floor, quiet room, etc."
                  className="w-full p-4 bg-white border border-[#DDC9A6] rounded-[8px] text-[15px] sm:text-[16px] text-[#4F3523] placeholder:text-[#4F3523]/40 focus:outline-none focus:ring-2 focus:ring-[#194E35]/40 transition-all resize-none"
                />
                <p className="font-body italic text-[13px] sm:text-[14px] text-[#4F3523]/75 mt-1.5">
                  Requests are subject to availability.
                </p>
              </div>

              {/* Section D: Privacy Consent Checkbox */}
              <div className="pt-6 flex items-start gap-3">
                <input
                  id="jia-consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) =>
                    handleInputChange("consent", e.target.checked)
                  }
                  className="mt-1 w-5 h-5 rounded border-[#DDC9A6] text-[#194E35] focus:ring-[#194E35] shrink-0 cursor-pointer"
                />
                <label
                  htmlFor="jia-consent"
                  className="font-body text-[14px] sm:text-[16px] text-[#4F3523] cursor-pointer"
                >
                  I agree to the Privacy Policy and consent to being contacted
                  about this enquiry.
                </label>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 font-body text-[14px]">
                  {errorMsg}
                </div>
              )}

              {/* Section E: Notice block & Submit button */}
              <div className="pt-8 mt-6 border-t border-[#DDC9A6] flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left Notice */}
                <div className="flex items-start gap-3 max-w-[680px]">
                  <div className="shrink-0 mt-0.5">
                    <Image
                      src="/images/Jia Hotel/Information.svg"
                      alt="Information"
                      width={22}
                      height={22}
                      className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                    />
                  </div>
                  <p className="font-body italic text-[14px] sm:text-[15px] leading-[22px] text-[#4F3523]">
                    This enquiry does not confirm a reservation. Room availability
                    and rates will be shared by our reservations team upon review.
                  </p>
                </div>

                {/* Right Button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-[355px] h-[58px] bg-[#194E35] hover:bg-[#123d2a] active:bg-[#0c2b1e] text-[#FAF6EC] rounded-[8px] transition-all shadow-md group shrink-0"
                >
                  <span className="font-body font-bold text-[17px] sm:text-[19px] leading-[26px] tracking-wide uppercase">
                    SEND STAY ENQUIRY
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

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Moon,
  Clock,
  Calendar,
  User,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { classNames } from "../../lib/classNames";

const DURATION_OPTIONS = [
  "3 Hours",
  "6 Hours",
  "9 Hours",
  "12 Hours",
  "18 Hours",
  "24 Hours",
];

const formatHoursText = (val) => {
  if (!val) return "12 Hours";
  const str = String(val).trim();
  if (/^\d+\s*(hours?|hrs?)$/i.test(str)) {
    const num = parseInt(str.replace(/\D/g, ""), 10);
    return `${num} ${num === 1 ? "Hour" : "Hours"}`;
  }
  const match = str.match(/^(\d+)/);
  if (match) {
    const num = parseInt(match[1], 10);
    return `${num} ${num === 1 ? "Hour" : "Hours"}`;
  }
  return str;
};

const MONTH_DATA = [
  { name: "October 2026", year: 2026, monthIndex: 9, startDayOffset: 4, days: 31 },
  { name: "November 2026", year: 2026, monthIndex: 10, startDayOffset: 0, days: 30 },
  { name: "December 2026", year: 2026, monthIndex: 11, startDayOffset: 2, days: 31 },
];

export default function HeroBookingBar({
  onSearch,
  buttonText = "Search Rooms",
  className = "",
  initialStayMode = "hourly",
  buttonVariant = "default",
}) {
  const router = useRouter();
  const [stayMode, setStayMode] = useState(initialStayMode); // 'night' | 'hourly'
  const [checkIn, setCheckIn] = useState(null); // { day, monthIdx }
  const [checkOut, setCheckOut] = useState(null); // { day, monthIdx }
  const [currentMonthIdx, setCurrentMonthIdx] = useState(0);

  const [duration, setDuration] = useState("12 Hours");
  const [customDurationInput, setCustomDurationInput] = useState("12 Hours");

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const [activePopover, setActivePopover] = useState(null); // 'checkIn' | 'checkOut' | 'duration' | 'guests' | null
  const containerRef = useRef(null);

  const activeMonth = MONTH_DATA[currentMonthIdx];

  const formatSelectedDate = (dateObj) => {
    if (!dateObj) return "";
    const m = MONTH_DATA[dateObj.monthIdx] || MONTH_DATA[0];
    const monthShort = m.name.split(" ")[0].slice(0, 3);
    return `${dateObj.day} ${monthShort} ${m.year}`;
  };

  // Derived display strings
  const checkInText = formatSelectedDate(checkIn);
  const checkOutText = formatSelectedDate(checkOut);
  const guestsSummary = `${adults} ${adults === 1 ? "adult" : "adults"}${childrenCount > 0 ? `, ${childrenCount} child` : ""
    } · ${rooms} ${rooms === 1 ? "room" : "rooms"}`;

  // Dismiss popover on outside click or Escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
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

  const handleSearch = () => {
    setActivePopover(null);
    if (onSearch) {
      onSearch({
        stayMode,
        checkInDate: checkInText || "Select date",
        checkOutDate: checkOutText || "Select date",
        duration: stayMode === "hourly" ? formatHoursText(duration) : undefined,
        adults,
        children: childrenCount,
        rooms,
      });
    } else {
      if (typeof window !== "undefined" && window.location.pathname.startsWith("/rooms")) {
        const el =
          document.querySelector(".choose-your-stay-filters") ||
          document.querySelector(".rooms-listing-wrapper");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      router.push("/rooms");
    }
  };

  const togglePopover = (name) => {
    setActivePopover((prev) => (prev === name ? null : name));
  };

  return (
    <div
      ref={containerRef}
      className={classNames(
        "relative z-30 w-full max-w-[1080px] rounded-[22px] bg-[#FBF5EA] p-3 sm:py-3 sm:px-5 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#E8DCC9]/60",
        className
      )}
      aria-label="Hotel booking search bar"
    >
      <div className="flex flex-col gap-2.5">
        {/* Row 1: Stay Mode Toggle */}
        <div className="flex items-center justify-center sm:justify-start">
          <div
            className="relative flex h-[38px] w-[360px] max-w-full rounded-full border border-[#1B4D32] bg-[#FBF5EA] overflow-hidden select-none"
            role="tablist"
            aria-label="Stay Type"
          >
            {/* Night Stay Tab */}
            <button
              type="button"
              role="tab"
              aria-selected={stayMode === "night"}
              onClick={() => {
                setStayMode("night");
                setActivePopover(null);
              }}
              className={classNames(
                "relative z-10 flex h-full w-1/2 items-center justify-center gap-2.5 rounded-full text-[14px] font-bold font-body leading-none transition-all duration-200 cursor-pointer",
                stayMode === "night"
                  ? "bg-[#1B4D32] text-[#FBF5EA]"
                  : "bg-transparent text-[#1B4D32] hover:text-[#1B4D32]/85"
              )}
            >
              <Moon size={17} className={classNames("stroke-[2.2] shrink-0", stayMode === "night" ? "text-[#FBF5EA]" : "text-[#1B4D32]")} />
              <span>Night Stay</span>
            </button>

            {/* Hourly Booking Tab */}
            <button
              type="button"
              role="tab"
              aria-selected={stayMode === "hourly"}
              onClick={() => {
                setStayMode("hourly");
                setActivePopover(null);
              }}
              className={classNames(
                "relative z-10 flex h-full w-1/2 items-center justify-center gap-2.5 rounded-full text-[14px] font-bold font-body leading-none transition-all duration-200 cursor-pointer",
                stayMode === "hourly"
                  ? "bg-[#1B4D32] text-[#FBF5EA]"
                  : "bg-transparent text-[#1B4D32] hover:text-[#1B4D32]/85"
              )}
            >
              <Clock size={17} className={classNames("stroke-[2.2] shrink-0", stayMode === "hourly" ? "text-[#FBF5EA]" : "text-[#1B4D32]")} />
              <span>Hourly Booking</span>
            </button>
          </div>
        </div>

        {/* 10px Spacing */}
        <div className="h-[2px] hidden lg:block" aria-hidden="true" />

        {/* Row 2: Fields Row (Figma: height 58px on desktop, padding 0 8px per field) */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-stretch lg:items-center gap-1.5 sm:gap-2 lg:gap-1 w-full lg:h-[58px]">
          {/* Field 1: Check In */}
          <div className="relative flex-1 min-w-0">
            <button
              type="button"
              onClick={() => togglePopover("checkIn")}
              aria-expanded={activePopover === "checkIn"}
              className={classNames(
                "flex h-[58px] w-full items-center px-2 gap-3 rounded-[10px] text-left transition-all border cursor-pointer",
                activePopover === "checkIn"
                  ? "border-[#1B4D32] bg-[#FBF5EA] shadow-sm"
                  : "border-transparent hover:bg-[#F6EFE3]/70"
              )}
            >
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
                <Calendar size={22} className="stroke-[1.85]" />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body whitespace-nowrap">
                  Check In
                </span>
                <span
                  className={classNames(
                    "text-[13px] leading-[18px] font-body truncate whitespace-nowrap",
                    checkInText ? "font-medium text-[#233028]" : "font-normal text-[#8B8E87]"
                  )}
                >
                  {checkInText || "Select date"}
                </span>
              </div>
              {activePopover === "checkIn" ? (
                <ChevronUp size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
              ) : (
                <ChevronDown size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
              )}
            </button>

            {/* Check-In Date Picker Popover */}
            {activePopover === "checkIn" && (
              <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-[calc(100vw-36px)] sm:w-[330px] rounded-[18px] border border-[#E8DCC9] bg-[#FBF5EA] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-150">
                {/* Month Navigator Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <button
                    type="button"
                    disabled={currentMonthIdx === 0}
                    onClick={() => setCurrentMonthIdx((prev) => Math.max(0, prev - 1))}
                    className="p-1 rounded-full text-[#233028] hover:bg-[#F3EAD9] disabled:opacity-20 cursor-pointer"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={20} className="stroke-[1.8]" />
                  </button>
                  <span className="font-bold text-[15px] text-[#233028] font-body">
                    {activeMonth.name}
                  </span>
                  <button
                    type="button"
                    disabled={currentMonthIdx === MONTH_DATA.length - 1}
                    onClick={() =>
                      setCurrentMonthIdx((prev) => Math.min(MONTH_DATA.length - 1, prev + 1))
                    }
                    className="p-1 rounded-full text-[#233028] hover:bg-[#F3EAD9] disabled:opacity-20 cursor-pointer"
                    aria-label="Next month"
                  >
                    <ChevronRight size={20} className="stroke-[1.8]" />
                  </button>
                </div>

                {/* Days of Week in Gold (#BC9756) */}
                <div className="grid grid-cols-7 gap-1 text-center text-[12px] font-semibold text-[#BC9756] mb-2 font-body">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                {/* Date Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-body mb-5">
                  {Array.from({ length: activeMonth.startDayOffset }).map((_, i) => (
                    <span key={`empty-in-${i}`} className="h-8 w-8" />
                  ))}
                  {Array.from({ length: activeMonth.days }, (_, i) => i + 1).map((day) => {
                    const isSelected =
                      checkIn?.day === day && checkIn?.monthIdx === currentMonthIdx;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setCheckIn({ day, monthIdx: currentMonthIdx })}
                        className={classNames(
                          "h-8 w-8 mx-auto rounded-full flex items-center justify-center font-medium transition-colors cursor-pointer",
                          isSelected
                            ? "bg-[#1B4D32] text-white font-bold"
                            : "text-[#233028] hover:bg-[#F3EAD9]"
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Action Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (!checkIn) setCheckIn({ day: 26, monthIdx: currentMonthIdx });
                    setActivePopover("checkOut");
                  }}
                  className="w-full h-[44px] rounded-[8px] bg-[#1B4D32] text-[#FBF5EA] text-[14px] font-bold font-body hover:bg-[#153e28] transition-colors cursor-pointer"
                >
                  Apply Check-in Date
                </button>
              </div>
            )}
          </div>

          {/* Field 2: Check Out */}
          <div className="relative flex-1 min-w-0">
            <button
              type="button"
              onClick={() => togglePopover("checkOut")}
              aria-expanded={activePopover === "checkOut"}
              className={classNames(
                "flex h-[58px] w-full items-center px-2 gap-3 rounded-[10px] text-left transition-all border cursor-pointer",
                activePopover === "checkOut"
                  ? "border-[#1B4D32] bg-[#FBF5EA] shadow-sm"
                  : "border-transparent hover:bg-[#F6EFE3]/70"
              )}
            >
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
                <Calendar size={22} className="stroke-[1.85]" />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body whitespace-nowrap">
                  Check Out
                </span>
                <span
                  className={classNames(
                    "text-[13px] leading-[18px] font-body truncate whitespace-nowrap",
                    checkOutText ? "font-medium text-[#233028]" : "font-normal text-[#8B8E87]"
                  )}
                >
                  {checkOutText || "Select date"}
                </span>
              </div>
              {activePopover === "checkOut" ? (
                <ChevronUp size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
              ) : (
                <ChevronDown size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
              )}
            </button>

            {/* Check-Out Date Picker Popover */}
            {activePopover === "checkOut" && (
              <div className="absolute top-[calc(100%+8px)] left-0 sm:left-auto sm:right-0 lg:left-0 z-50 w-[calc(100vw-36px)] sm:w-[330px] rounded-[18px] border border-[#E8DCC9] bg-[#FBF5EA] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-150">
                {/* Month Navigator Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <button
                    type="button"
                    disabled={currentMonthIdx === 0}
                    onClick={() => setCurrentMonthIdx((prev) => Math.max(0, prev - 1))}
                    className="p-1 rounded-full text-[#233028] hover:bg-[#F3EAD9] disabled:opacity-20 cursor-pointer"
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={20} className="stroke-[1.8]" />
                  </button>
                  <span className="font-bold text-[15px] text-[#233028] font-body">
                    {activeMonth.name}
                  </span>
                  <button
                    type="button"
                    disabled={currentMonthIdx === MONTH_DATA.length - 1}
                    onClick={() =>
                      setCurrentMonthIdx((prev) => Math.min(MONTH_DATA.length - 1, prev + 1))
                    }
                    className="p-1 rounded-full text-[#233028] hover:bg-[#F3EAD9] disabled:opacity-20 cursor-pointer"
                    aria-label="Next month"
                  >
                    <ChevronRight size={20} className="stroke-[1.8]" />
                  </button>
                </div>

                {/* Days of Week in Gold (#BC9756) */}
                <div className="grid grid-cols-7 gap-1 text-center text-[12px] font-semibold text-[#BC9756] mb-2 font-body">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                {/* Date Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-body mb-5">
                  {Array.from({ length: activeMonth.startDayOffset }).map((_, i) => (
                    <span key={`empty-out-${i}`} className="h-8 w-8" />
                  ))}
                  {Array.from({ length: activeMonth.days }, (_, i) => i + 1).map((day) => {
                    const isSelected =
                      checkOut?.day === day && checkOut?.monthIdx === currentMonthIdx;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setCheckOut({ day, monthIdx: currentMonthIdx })}
                        className={classNames(
                          "h-8 w-8 mx-auto rounded-full flex items-center justify-center font-medium transition-colors cursor-pointer",
                          isSelected
                            ? "bg-[#1B4D32] text-white font-bold"
                            : "text-[#233028] hover:bg-[#F3EAD9]"
                        )}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Action Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (!checkOut) setCheckOut({ day: 28, monthIdx: currentMonthIdx });
                    setActivePopover(null);
                  }}
                  className="w-full h-[44px] rounded-[8px] bg-[#1B4D32] text-[#FBF5EA] text-[14px] font-bold font-body hover:bg-[#153e28] transition-colors cursor-pointer"
                >
                  Apply Check-out Date
                </button>
              </div>
            )}
          </div>

          {/* Field 3: Duration (Shown only when Hourly Booking is active) */}
          {stayMode === "hourly" && (
            <div className="relative flex-1 min-w-0">
              <button
                type="button"
                onClick={() => togglePopover("duration")}
                aria-expanded={activePopover === "duration"}
                className={classNames(
                  "flex h-[58px] w-full items-center px-2 gap-3 rounded-[10px] text-left transition-all border cursor-pointer",
                  activePopover === "duration"
                    ? "border-[#1B4D32] bg-[#FBF5EA] shadow-sm"
                    : "border-transparent hover:bg-[#F6EFE3]/70"
                )}
              >
                <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
                  <Clock size={22} className="stroke-[1.85]" />
                </div>
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body whitespace-nowrap">
                    Duration
                  </span>
                  <span className="text-[13px] font-normal leading-[18px] text-[#8B8E87] truncate font-body whitespace-nowrap">
                    {formatHoursText(duration)}
                  </span>
                </div>
                {activePopover === "duration" ? (
                  <ChevronUp size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
                ) : (
                  <ChevronDown size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
                )}
              </button>

              {/* Duration Popover */}
              {activePopover === "duration" && (
                <div className="absolute top-[calc(100%+8px)] left-0 sm:left-auto sm:right-0 lg:left-0 z-50 w-[calc(100vw-36px)] sm:w-[340px] rounded-[18px] border border-[#E8DCC9] bg-[#FBF5EA] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-150">
                  {/* Header */}
                  <div className="flex items-start gap-2.5 mb-4">
                    <Clock size={22} className="text-[#1B4D32] stroke-[2] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[15px] font-bold text-[#233028] leading-[20px] font-body">
                        Select Duration
                      </h4>
                      <p className="text-[11.5px] text-[#8B8E87] leading-[16px] font-body">
                        Enter the number of hours for your stay
                      </p>
                    </div>
                  </div>

                  {/* Input Box */}
                  <div className="mb-4">
                    <input
                      type="text"
                      value={customDurationInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomDurationInput(val);
                        const match = val.match(/^(\d+)/);
                        if (match) {
                          const n = parseInt(match[1], 10);
                          setDuration(`${n} ${n === 1 ? "Hour" : "Hours"}`);
                        } else if (val.trim()) {
                          setDuration(val);
                        }
                      }}
                      onBlur={() => {
                        if (customDurationInput.trim()) {
                          const formatted = formatHoursText(customDurationInput);
                          setCustomDurationInput(formatted);
                          setDuration(formatted);
                        }
                      }}
                      className="w-full h-[46px] rounded-[10px] border border-[#1B4D32] bg-[#FBF5EA] px-4 text-[14px] font-semibold text-[#233028] outline-none font-body focus:ring-1 focus:ring-[#1B4D32]"
                      placeholder="e.g. 8 Hours"
                    />
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 h-[1px] bg-[#E8DCC9]" />
                    <span className="text-[11px] font-semibold text-[#8B8E87] uppercase tracking-wider">
                      OR
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E8DCC9]" />
                  </div>

                  {/* Common Durations Label */}
                  <div className="text-[12px] font-semibold text-[#233028] mb-2.5 font-body">
                    Choose from common durations
                  </div>

                  {/* Duration Chips (3x2 Grid) */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
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
                          className={classNames(
                            "h-[36px] rounded-[18px] text-[13px] font-bold font-body transition-colors border cursor-pointer",
                            isSelected
                              ? "bg-[#1B4D32] text-[#FBF5EA] border-transparent shadow-sm"
                              : "bg-[#FBF5EA] text-[#233028] border-[#E8DCC9] hover:bg-[#F3EAD9]"
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Apply Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (customDurationInput.trim()) {
                        const formatted = formatHoursText(customDurationInput);
                        setCustomDurationInput(formatted);
                        setDuration(formatted);
                      }
                      setActivePopover(null);
                    }}
                    className="w-full h-[44px] rounded-[8px] bg-[#1B4D32] text-[#FBF5EA] text-[14px] font-bold font-body hover:bg-[#153e28] transition-colors cursor-pointer"
                  >
                    Apply Duration
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Field 4: Guests & Rooms */}
          <div className="relative flex-1 min-w-0">
            <button
              type="button"
              onClick={() => togglePopover("guests")}
              aria-expanded={activePopover === "guests"}
              className={classNames(
                "flex h-[58px] w-full items-center px-2 gap-3 rounded-[10px] text-left transition-all border cursor-pointer",
                activePopover === "guests"
                  ? "border-[#1B4D32] bg-[#FBF5EA] shadow-sm"
                  : "border-transparent hover:bg-[#F6EFE3]/70"
              )}
            >
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
                <User size={22} className="stroke-[1.85]" />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body whitespace-nowrap">
                  Guests &amp; Rooms
                </span>
                <span className="text-[13px] font-normal leading-[18px] text-[#8B8E87] truncate font-body whitespace-nowrap">
                  {guestsSummary}
                </span>
              </div>
              {activePopover === "guests" ? (
                <ChevronUp size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
              ) : (
                <ChevronDown size={16} className="text-[#1B4D32] stroke-[1.8] shrink-0" />
              )}
            </button>

            {/* Guests & Rooms Popover */}
            {activePopover === "guests" && (
              <div className="absolute top-[calc(100%+8px)] left-0 sm:left-auto sm:right-0 lg:left-auto lg:right-0 z-50 w-[calc(100vw-36px)] sm:w-[340px] rounded-[18px] border border-[#E8DCC9] bg-[#FBF5EA] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-150">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <User size={22} className="text-[#1B4D32] stroke-[2] shrink-0" />
                  <h4 className="text-[15px] font-bold text-[#233028] font-body">
                    Guests & Rooms
                  </h4>
                </div>

                {/* Section 1: Rooms */}
                <div className="flex items-center justify-between py-1 mb-3">
                  <span className="text-[14px] font-bold text-[#233028] font-body">
                    Rooms
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded-full bg-[#F4ECE0] text-[#233028] flex items-center justify-center font-bold text-[16px] hover:bg-[#ebdcc8] disabled:opacity-25 transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-[14px] font-bold text-[#233028] font-body">
                      {rooms}
                    </span>
                    <button
                      type="button"
                      disabled={rooms >= 5}
                      onClick={() => setRooms((prev) => Math.min(5, prev + 1))}
                      className="w-8 h-8 rounded-full bg-[#F4ECE0] text-[#233028] flex items-center justify-center font-bold text-[16px] hover:bg-[#ebdcc8] disabled:opacity-25 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="h-[1px] w-full bg-[#E8DCC9]/80 my-3" />

                {/* Section 2: Guests per Room */}
                <div className="mb-5">
                  <div className="text-[13px] font-bold text-[#233028] mb-3 font-body">
                    Guests per Room
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Adults Column */}
                    <div>
                      <div className="text-[12px] font-semibold text-[#34413F] mb-2 font-body">
                        Adults (12+ yrs)
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={adults <= 1}
                          onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                          className="w-8 h-8 rounded-full bg-[#F4ECE0] text-[#233028] flex items-center justify-center font-bold text-[16px] hover:bg-[#ebdcc8] disabled:opacity-25 transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-[14px] font-bold text-[#233028] font-body">
                          {adults}
                        </span>
                        <button
                          type="button"
                          disabled={adults >= 8}
                          onClick={() => setAdults((prev) => Math.min(8, prev + 1))}
                          className="w-8 h-8 rounded-full bg-[#F4ECE0] text-[#233028] flex items-center justify-center font-bold text-[16px] hover:bg-[#ebdcc8] disabled:opacity-25 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children Column */}
                    <div>
                      <div className="text-[12px] font-semibold text-[#34413F] mb-2 font-body">
                        Children (0-11 yrs)
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          disabled={childrenCount <= 0}
                          onClick={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
                          className="w-8 h-8 rounded-full bg-[#F4ECE0] text-[#233028] flex items-center justify-center font-bold text-[16px] hover:bg-[#ebdcc8] disabled:opacity-25 transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-[14px] font-bold text-[#233028] font-body">
                          {childrenCount}
                        </span>
                        <button
                          type="button"
                          disabled={childrenCount >= 6}
                          onClick={() => setChildrenCount((prev) => Math.min(6, prev + 1))}
                          className="w-8 h-8 rounded-full bg-[#F4ECE0] text-[#233028] flex items-center justify-center font-bold text-[16px] hover:bg-[#ebdcc8] disabled:opacity-25 transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={() => setActivePopover(null)}
                  className="w-full h-[44px] rounded-[8px] bg-[#1B4D32] text-[#FBF5EA] text-[14px] font-bold font-body hover:bg-[#153e28] transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Search Rooms CTA Button (Figma: height 44px, rounded 8px, font 15px/21px bold) */}
          <button
            type="button"
            onClick={handleSearch}
            className={classNames(
              "hero-booking-search-btn flex h-[44px] w-full lg:w-auto lg:min-w-[160px] whitespace-nowrap shrink-0 items-center justify-center gap-2.5 rounded-[8px] px-6 transition-all shadow-sm font-bold text-[15px] leading-[21px] font-body self-center cursor-pointer",
              buttonVariant === "gold"
                ? "bg-[#C49A58] text-[#3A2A1A] hover:bg-[#b88f4c] active:bg-[#a67d3c]"
                : "bg-[#1B4D32] text-[#FBF5EA] hover:bg-[#153e28] active:bg-[#10301f]"
            )}
          >
            <span>{buttonText}</span>
            <ArrowRight size={18} className="stroke-[2.2]" />
          </button>
        </div>
      </div>
    </div>
  );
}

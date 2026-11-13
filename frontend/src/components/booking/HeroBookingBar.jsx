"use client";

import { useState, useRef, useEffect } from "react";
import {
  Moon,
  Clock,
  Calendar,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import { classNames } from "../../lib/classNames";

const MONTH_DATA = [
  { name: "October 2026", year: 2026, monthIndex: 9, startDayOffset: 4, days: 31 }, // Oct 1, 2026 is Thursday (offset 4)
  { name: "November 2026", year: 2026, monthIndex: 10, startDayOffset: 0, days: 30 }, // Nov 1, 2026 is Sunday (offset 0)
  { name: "December 2026", year: 2026, monthIndex: 11, startDayOffset: 2, days: 31 }, // Dec 1, 2026 is Tuesday (offset 2)
];

export default function HeroBookingBar({ onSearch }) {
  const [stayMode, setStayMode] = useState("night"); // 'night' | 'hourly'
  const [checkInDay, setCheckInDay] = useState(null); // number or null
  const [checkOutDay, setCheckOutDay] = useState(null); // number or null
  const [currentMonthIdx, setCurrentMonthIdx] = useState(0);

  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [duration, setDuration] = useState("6 Hours");

  const [activePopover, setActivePopover] = useState(null); // 'checkIn' | 'checkOut' | 'guests' | 'duration' | null
  const containerRef = useRef(null);

  const activeMonth = MONTH_DATA[currentMonthIdx];

  // Derived formatted date strings
  const checkInText = checkInDay
    ? `${checkInDay} Oct 2026`
    : "";
  const checkOutText = checkOutDay
    ? `${checkOutDay} Oct 2026`
    : "";

  // Close popover when clicking outside or pressing Escape
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
    onSearch?.({
      stayMode,
      checkInDate: checkInText || "Select date",
      checkOutDate: stayMode === "night" ? (checkOutText || "Select date") : undefined,
      duration: stayMode === "hourly" ? duration : undefined,
      adults,
      children: childrenCount,
      rooms,
    });
  };

  const handleDateClick = (day) => {
    if (activePopover === "checkIn") {
      setCheckInDay(day);
      if (checkOutDay && checkOutDay <= day) {
        setCheckOutDay(day + 2 <= activeMonth.days ? day + 2 : null);
      }
      setActivePopover("checkOut");
    } else if (activePopover === "checkOut") {
      if (checkInDay && day < checkInDay) {
        // If selected check-out is before check-in, set as check-in
        setCheckInDay(day);
        setCheckOutDay(null);
      } else {
        setCheckOutDay(day);
        setActivePopover(null);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-30 w-full max-w-[1080px] rounded-[22px] bg-[#FBF5EA] p-3 sm:p-4 lg:px-5 lg:py-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.16)] border border-[#E8DCC9]/80"
      aria-label="Hotel booking search bar"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Stay Mode Toggle with Smooth Sliding Pill */}
        <div className="flex items-center justify-center sm:justify-start">
          <div
            className="relative flex h-[38px] w-full max-w-[360px] rounded-[22px] border border-[#1B4D32] p-[2px] bg-[#FBF5EA] overflow-hidden"
            role="tablist"
            aria-label="Stay Type"
          >
            {/* Smooth Animated Sliding Pill */}
            <span
              aria-hidden="true"
              className={classNames(
                "absolute top-[2px] bottom-[2px] left-[2px] w-[calc(50%-2px)] rounded-[20px] bg-[#1B4D32] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-sm pointer-events-none",
                stayMode === "hourly" ? "translate-x-full" : "translate-x-0"
              )}
            />

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
                "relative z-10 flex flex-1 items-center justify-center gap-2 rounded-[20px] text-[13.5px] sm:text-[14px] font-bold font-body transition-colors duration-300 select-none",
                stayMode === "night"
                  ? "text-[#FBF5EA]"
                  : "text-[#1B4D32] hover:text-[#1B4D32]/80"
              )}
            >
              <Moon size={17} className="stroke-[2.2] shrink-0" />
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
                "relative z-10 flex flex-1 items-center justify-center gap-2 rounded-[20px] text-[13.5px] sm:text-[14px] font-bold font-body transition-colors duration-300 select-none",
                stayMode === "hourly"
                  ? "text-[#FBF5EA]"
                  : "text-[#1B4D32] hover:text-[#1B4D32]/80"
              )}
            >
              <Clock size={17} className="stroke-[2.2] shrink-0" />
              <span>Hourly Booking</span>
            </button>
          </div>
        </div>

        {/* Row 2: Search Fields Row (Responsive: Flex on Desktop, 2x2 Grid on Tablet, Column on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch lg:items-center gap-2.5 lg:gap-3 w-full">
          {/* Field 1: Check In */}
          <button
            type="button"
            onClick={() =>
              setActivePopover((prev) => (prev === "checkIn" ? null : "checkIn"))
            }
            aria-expanded={activePopover === "checkIn"}
            className={classNames(
              "flex h-[58px] lg:flex-1 items-center px-3 sm:px-3.5 gap-3 rounded-[10px] text-left transition-all border",
              activePopover === "checkIn"
                ? "bg-[#F3EAD9] border-[#1B4D32] shadow-sm"
                : "bg-transparent border-transparent hover:bg-[#F6EFE3]"
            )}
          >
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
              <Calendar size={23} className="stroke-[1.85]" />
            </div>
            <div className="flex flex-1 flex-col justify-center min-w-0">
              <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body">
                Check In
              </span>
              <span
                className={classNames(
                  "text-[13px] leading-[18px] font-body truncate",
                  checkInText ? "font-medium text-[#233028]" : "font-normal text-[#8B8E87]"
                )}
              >
                {checkInText || "Select date"}
              </span>
            </div>
            <ChevronDown
              size={18}
              className={classNames(
                "text-[#1B4D32] transition-transform stroke-[1.4] shrink-0",
                activePopover === "checkIn" ? "rotate-180" : ""
              )}
            />
          </button>

          {/* Field 2: Check Out (or Duration in Hourly mode) */}
          {stayMode === "night" ? (
            <button
              type="button"
              onClick={() =>
                setActivePopover((prev) =>
                  prev === "checkOut" ? null : "checkOut"
                )
              }
              aria-expanded={activePopover === "checkOut"}
              className={classNames(
                "flex h-[58px] lg:flex-1 items-center px-3 sm:px-3.5 gap-3 rounded-[10px] text-left transition-all border",
                activePopover === "checkOut"
                  ? "bg-[#F3EAD9] border-[#1B4D32] shadow-sm"
                  : "bg-transparent border-transparent hover:bg-[#F6EFE3]"
              )}
            >
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
                <Calendar size={23} className="stroke-[1.85]" />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body">
                  Check Out
                </span>
                <span
                  className={classNames(
                    "text-[13px] leading-[18px] font-body truncate",
                    checkOutText ? "font-medium text-[#233028]" : "font-normal text-[#8B8E87]"
                  )}
                >
                  {checkOutText || "Select date"}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={classNames(
                  "text-[#1B4D32] transition-transform stroke-[1.4] shrink-0",
                  activePopover === "checkOut" ? "rotate-180" : ""
                )}
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                setActivePopover((prev) =>
                  prev === "duration" ? null : "duration"
                )
              }
              aria-expanded={activePopover === "duration"}
              className={classNames(
                "flex h-[58px] lg:flex-1 items-center px-3 sm:px-3.5 gap-3 rounded-[10px] text-left transition-all border",
                activePopover === "duration"
                  ? "bg-[#F3EAD9] border-[#1B4D32] shadow-sm"
                  : "bg-transparent border-transparent hover:bg-[#F6EFE3]"
              )}
            >
              <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
                <Clock size={23} className="stroke-[1.85]" />
              </div>
              <div className="flex flex-1 flex-col justify-center min-w-0">
                <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body">
                  Duration
                </span>
                <span className="text-[13px] font-medium leading-[18px] text-[#233028] truncate font-body">
                  {duration}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={classNames(
                  "text-[#1B4D32] transition-transform stroke-[1.4] shrink-0",
                  activePopover === "duration" ? "rotate-180" : ""
                )}
              />
            </button>
          )}

          {/* Field 3: Guests & Rooms */}
          <button
            type="button"
            onClick={() =>
              setActivePopover((prev) => (prev === "guests" ? null : "guests"))
            }
            aria-expanded={activePopover === "guests"}
            className={classNames(
              "flex h-[58px] lg:flex-1 items-center px-3 sm:px-3.5 gap-3 rounded-[10px] text-left transition-all border",
              activePopover === "guests"
                ? "bg-[#F3EAD9] border-[#1B4D32] shadow-sm"
                : "bg-transparent border-transparent hover:bg-[#F6EFE3]"
            )}
          >
            <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center text-[#1B4D32]">
              <User size={23} className="stroke-[1.85]" />
            </div>
            <div className="flex flex-1 flex-col justify-center min-w-0">
              <span className="text-[13px] font-bold leading-[18px] text-[#233028] font-body">
                Guests & Rooms
              </span>
              <div className="flex items-center gap-1 text-[13px] leading-[18px] font-normal text-[#8B8E87] font-body truncate">
                <span>{adults}</span>
                <span className="text-[12px]">{adults === 1 ? "adult" : "adults"} ·</span>
                {childrenCount > 0 && (
                  <>
                    <span>{childrenCount}</span>
                    <span className="text-[12px]">{childrenCount === 1 ? "child" : "children"} ·</span>
                  </>
                )}
                <span>{rooms}</span>
                <span className="text-[12px]">{rooms === 1 ? "room" : "rooms"}</span>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={classNames(
                "text-[#1B4D32] transition-transform stroke-[1.4] shrink-0",
                activePopover === "guests" ? "rotate-180" : ""
              )}
            />
          </button>

          {/* Field 4 / CTA Action Button: Search Rooms */}
          <button
            type="button"
            onClick={handleSearch}
            className="flex h-[48px] sm:h-[58px] lg:h-[44px] w-full lg:w-[248px] shrink-0 items-center justify-center gap-2.5 rounded-[8px] bg-[#1B4D32] px-6 text-[#FBF5EA] hover:bg-[#153e28] active:bg-[#10301f] transition-all shadow-md font-bold text-[15px] leading-[21px] font-body self-center"
          >
            <span>Search Rooms</span>
            <ArrowRight size={20} className="stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Popovers Layer (Positioned with high z-index and ample spacing) */}
      {/* Date Picker Popover */}
      {(activePopover === "checkIn" || activePopover === "checkOut") && (
        <div
          className={classNames(
            "absolute top-[calc(100%+10px)] z-50 w-[calc(100vw-32px)] sm:w-[330px] rounded-2xl border border-[#E8DCC9] bg-[#FFFDF9] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] animate-in fade-in zoom-in-95 duration-150",
            activePopover === "checkIn"
              ? "left-2 sm:left-4"
              : "left-2 sm:left-auto sm:right-4 lg:left-[27%] lg:right-auto"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DCC9]/60">
            <div>
              <span className="text-[13.5px] font-bold text-[#1B4D32] block">
                {activePopover === "checkIn" ? "Select Check-In Date" : "Select Check-Out Date"}
              </span>
              <span className="text-[11px] text-[#8B8E87]">
                {checkInText ? `Check-in: ${checkInText}` : "Step 1 of 2"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setActivePopover(null)}
              className="p-1 rounded-full text-[#8B8E87] hover:bg-[#F8F5EA] hover:text-[#1B4D32]"
            >
              <X size={16} />
            </button>
          </div>

          {/* Month Navigation */}
          <div className="py-3">
            <div className="flex items-center justify-between mb-3 px-1">
              <button
                type="button"
                disabled={currentMonthIdx === 0}
                onClick={() => setCurrentMonthIdx((prev) => Math.max(0, prev - 1))}
                className="p-1 rounded-full text-[#1B4D32] hover:bg-[#F8F5EA] disabled:opacity-25"
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-semibold text-[13.5px] text-[#233028]">
                {activeMonth.name}
              </span>
              <button
                type="button"
                disabled={currentMonthIdx === MONTH_DATA.length - 1}
                onClick={() =>
                  setCurrentMonthIdx((prev) => Math.min(MONTH_DATA.length - 1, prev + 1))
                }
                className="p-1 rounded-full text-[#1B4D32] hover:bg-[#F8F5EA] disabled:opacity-25"
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-[#8B8E87] mb-1.5">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>

            {/* Date Cells */}
            <div className="grid grid-cols-7 gap-1 text-center text-[12.5px]">
              {/* Empty leading day cells */}
              {Array.from({ length: activeMonth.startDayOffset }).map((_, i) => (
                <span key={`empty-${i}`} className="h-8 w-8" />
              ))}

              {Array.from({ length: activeMonth.days }, (_, i) => i + 1).map((day) => {
                const isCheckIn = checkInDay === day;
                const isCheckOut = checkOutDay === day;
                const isInRange =
                  checkInDay &&
                  checkOutDay &&
                  day > checkInDay &&
                  day < checkOutDay;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDateClick(day)}
                    className={classNames(
                      "h-8 w-8 mx-auto rounded-full flex items-center justify-center font-medium transition-all",
                      isCheckIn || isCheckOut
                        ? "bg-[#1B4D32] text-white font-bold shadow-sm"
                        : isInRange
                        ? "bg-[#1B4D32]/15 text-[#1B4D32] font-semibold"
                        : "text-[#233028] hover:bg-[#F3EAD9]"
                    )}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Action Footer */}
          <div className="pt-2 border-t border-[#E8DCC9]/60 flex items-center justify-between text-[12px]">
            <button
              type="button"
              onClick={() => {
                setCheckInDay(null);
                setCheckOutDay(null);
              }}
              className="text-[#8B8E87] hover:text-[#1B4D32] underline"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setActivePopover(null)}
              className="px-3 py-1 bg-[#1B4D32] text-[#FBF5EA] rounded-md font-semibold hover:bg-[#153e28]"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Hourly Duration Popover */}
      {activePopover === "duration" && (
        <div className="absolute top-[calc(100%+10px)] left-2 sm:left-auto sm:right-4 lg:left-[27%] lg:right-auto z-50 w-[calc(100vw-32px)] sm:w-[250px] rounded-2xl border border-[#E8DCC9] bg-[#FFFDF9] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)] animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8DCC9]/60">
            <span className="text-[13.5px] font-bold text-[#1B4D32]">Select Duration</span>
            <button
              type="button"
              onClick={() => setActivePopover(null)}
              className="p-1 text-[#8B8E87] hover:text-[#1B4D32]"
            >
              <X size={16} />
            </button>
          </div>
          <div className="py-2.5 flex flex-col gap-1.5">
            {["3 Hours", "6 Hours", "12 Hours", "24 Hours"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setDuration(opt);
                  setActivePopover(null);
                }}
                className={classNames(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-lg text-[13px] font-medium transition-colors text-left",
                  duration === opt
                    ? "bg-[#1B4D32] text-white"
                    : "text-[#233028] hover:bg-[#F8F5EA]"
                )}
              >
                <span>{opt}</span>
                {duration === opt && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Guests & Rooms Popover */}
      {activePopover === "guests" && (
        <div className="absolute top-[calc(100%+10px)] left-2 sm:left-auto right-2 sm:right-4 lg:right-[260px] z-50 w-[calc(100vw-32px)] sm:w-[300px] rounded-2xl border border-[#E8DCC9] bg-[#FFFDF9] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DCC9]/60">
            <span className="text-[13.5px] font-bold text-[#1B4D32]">
              Guests & Rooms
            </span>
            <button
              type="button"
              onClick={() => setActivePopover(null)}
              className="p-1 text-[#8B8E87] hover:text-[#1B4D32]"
            >
              <X size={16} />
            </button>
          </div>
          <div className="py-3 flex flex-col gap-3.5">
            {/* Adults */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-bold text-[#233028]">Adults</div>
                <div className="text-[11px] text-[#8B8E87]">Ages 13 or above</div>
              </div>
              <div className="flex items-center gap-2 border border-[#E8DCC9] rounded-lg px-2 py-1 bg-[#FBF5EA]">
                <button
                  type="button"
                  disabled={adults <= 1}
                  onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#1B4D32] disabled:opacity-25"
                >
                  -
                </button>
                <span className="w-5 text-center text-[13px] font-bold text-[#233028]">
                  {adults}
                </span>
                <button
                  type="button"
                  disabled={adults >= 8}
                  onClick={() => setAdults((prev) => Math.min(8, prev + 1))}
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#1B4D32] disabled:opacity-25"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-bold text-[#233028]">Children</div>
                <div className="text-[11px] text-[#8B8E87]">Ages 0 to 12</div>
              </div>
              <div className="flex items-center gap-2 border border-[#E8DCC9] rounded-lg px-2 py-1 bg-[#FBF5EA]">
                <button
                  type="button"
                  disabled={childrenCount <= 0}
                  onClick={() =>
                    setChildrenCount((prev) => Math.max(0, prev - 1))
                  }
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#1B4D32] disabled:opacity-25"
                >
                  -
                </button>
                <span className="w-5 text-center text-[13px] font-bold text-[#233028]">
                  {childrenCount}
                </span>
                <button
                  type="button"
                  disabled={childrenCount >= 6}
                  onClick={() =>
                    setChildrenCount((prev) => Math.min(6, prev + 1))
                  }
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#1B4D32] disabled:opacity-25"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[13px] font-bold text-[#233028]">Rooms</div>
                <div className="text-[11px] text-[#8B8E87]">Total rooms</div>
              </div>
              <div className="flex items-center gap-2 border border-[#E8DCC9] rounded-lg px-2 py-1 bg-[#FBF5EA]">
                <button
                  type="button"
                  disabled={rooms <= 1}
                  onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#1B4D32] disabled:opacity-25"
                >
                  -
                </button>
                <span className="w-5 text-center text-[13px] font-bold text-[#233028]">
                  {rooms}
                </span>
                <button
                  type="button"
                  disabled={rooms >= 5}
                  onClick={() => setRooms((prev) => Math.min(5, prev + 1))}
                  className="w-6 h-6 flex items-center justify-center font-bold text-[#1B4D32] disabled:opacity-25"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setActivePopover(null)}
            className="w-full mt-2 py-2 rounded-lg bg-[#1B4D32] text-[#FBF5EA] text-[13px] font-bold hover:bg-[#153e28] transition-colors"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

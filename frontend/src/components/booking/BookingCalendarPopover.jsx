"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { classNames } from "../../lib/classNames";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BookingCalendarPopover({
  selectedDate = "",
  onSelectDate,
  onClose,
  minDate,
  className = "",
}) {
  const containerRef = useRef(null);

  // Compute reference today (in local timezone YYYY-MM-DD)
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;
  const effectiveMinDate = minDate || todayStr;

  // Initial view year & month from selectedDate or today
  const getInitialYearMonth = () => {
    if (selectedDate && /^\d{4}-\d{2}-\d{2}$/.test(selectedDate)) {
      const [y, m] = selectedDate.split("-").map(Number);
      return { year: y, monthIndex: m - 1 };
    }
    return { year: now.getFullYear(), monthIndex: now.getMonth() };
  };

  const [{ year: viewYear, monthIndex: viewMonth }, setViewDate] = useState(getInitialYearMonth);

  // Determine if previous month navigation should be disabled
  const [minYear, minMonth] = effectiveMinDate.split("-").map(Number);
  const isPrevDisabled =
    viewYear < minYear || (viewYear === minYear && viewMonth <= minMonth - 1);

  const handlePrevMonth = () => {
    if (isPrevDisabled) return;
    setViewDate((prev) => {
      if (prev.monthIndex === 0) {
        return { year: prev.year - 1, monthIndex: 11 };
      }
      return { year: prev.year, monthIndex: prev.monthIndex - 1 };
    });
  };

  const handleNextMonth = () => {
    setViewDate((prev) => {
      if (prev.monthIndex === 11) {
        return { year: prev.year + 1, monthIndex: 0 };
      }
      return { year: prev.year, monthIndex: prev.monthIndex + 1 };
    });
  };

  // Calendar calculations
  const startDayOffset = new Date(viewYear, viewMonth, 1).getDay();
  const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();

  // Dismiss on outside click or Escape
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (onClose) onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, handleKeyDown]);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="Select Date Calendar"
      className={classNames(
        "absolute top-[calc(100%+8px)] left-0 z-50 w-[calc(100vw-36px)] sm:w-[330px] rounded-[18px] border border-[#E8DCC9] bg-[#FBF5EA] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-150",
        className
      )}
    >
      {/* Month Navigator Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <button
          type="button"
          disabled={isPrevDisabled}
          onClick={handlePrevMonth}
          className="p-1 rounded-full text-[#233028] hover:bg-[#F3EAD9] disabled:opacity-20 cursor-pointer transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} className="stroke-[1.8]" />
        </button>

        <span className="font-bold text-[15px] text-[#233028] font-body">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>

        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1 rounded-full text-[#233028] hover:bg-[#F3EAD9] cursor-pointer transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={20} className="stroke-[1.8]" />
        </button>
      </div>

      {/* Days of Week in Gold (#BC9756) */}
      <div className="grid grid-cols-7 gap-1 text-center text-[12px] font-semibold text-[#BC9756] mb-2 font-body select-none">
        {DAYS_OF_WEEK.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-[13px] font-body mb-4">
        {Array.from({ length: startDayOffset }).map((_, i) => (
          <span key={`empty-${i}`} className="h-8 w-8" aria-hidden="true" />
        ))}

        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
          const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(
            day
          ).padStart(2, "0")}`;
          const isPast = dateStr < effectiveMinDate;
          const isSelected = selectedDate === dateStr;
          const isToday = dateStr === todayStr;

          return (
            <button
              key={day}
              type="button"
              disabled={isPast}
              onClick={() => {
                onSelectDate(dateStr);
                if (onClose) onClose();
              }}
              className={classNames(
                "h-8 w-8 mx-auto rounded-full flex items-center justify-center font-medium transition-colors cursor-pointer",
                isSelected
                  ? "bg-[#194E35] text-white font-bold shadow-xs"
                  : isPast
                  ? "text-[#233028]/25 cursor-not-allowed"
                  : isToday
                  ? "text-[#194E35] font-bold border border-[#194E35]/40 hover:bg-[#F3EAD9]"
                  : "text-[#233028] hover:bg-[#F3EAD9]"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-3 border-t border-[#E8DCC9]/70 flex items-center justify-between text-[13px] font-body">
        <button
          type="button"
          onClick={() => {
            onSelectDate("");
            if (onClose) onClose();
          }}
          className="text-[#776B61] hover:text-[#503522] font-medium transition-colors cursor-pointer"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={() => {
            if (onClose) onClose();
          }}
          className="px-3.5 py-1 bg-[#194E35] text-[#FAF6EC] rounded-[6px] font-medium hover:bg-[#103727] transition-colors cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}

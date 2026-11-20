import React from "react";
import { ArrowRight } from "lucide-react";
import { CalendarMinusIcon } from "./AccountIcons";

export default function CancelledEmptyState({ onViewUpcoming }) {
  return (
    <div className="w-full min-h-[410px] border border-[#DFD5C2] rounded-[6px] flex flex-col items-center justify-center py-12 sm:py-16 px-4 gap-[14px] text-center bg-[#FBF8F0]">
      {/* Empty state illustration */}
      <div className="w-[124px] h-[124px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0 mb-2">
        <CalendarMinusIcon size={56} stroke="#946719" />
      </div>

      {/* No cancelled bookings */}
      <h3 className="font-display font-semibold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[43px] text-[#1D1812]">
        No cancelled bookings
      </h3>

      {/* Subtitle */}
      <p className="font-body font-normal text-[17px] sm:text-[20px] leading-[24px] sm:leading-[27px] text-[#898984] max-w-[420px]">
        Any bookings you cancel will appear here.
      </p>

      {/* Action Button */}
      <button
        type="button"
        onClick={onViewUpcoming}
        className="mt-2 w-full max-w-[318px] h-[48px] rounded-[9px] bg-[#134D39] text-[#FFFFFF] font-body text-[14px] sm:text-[15px] font-medium flex items-center justify-center gap-3 hover:bg-[#0f3d2d] transition-colors shadow-sm cursor-pointer"
      >
        <span>VIEW UPCOMING BOOKINGS</span>
        <ArrowRight size={16} className="stroke-[2]" />
      </button>
    </div>
  );
}

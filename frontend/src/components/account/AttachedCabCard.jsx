"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { CarIcon, PinIcon, CalendarIcon, ClockIcon, CheckCircleIcon } from "./AccountIcons";

export default function AttachedCabCard({
  cabRef = "CAB -DEMO-1026",
  vehicleName = "Toyota Innova",
  routeFrom = "Fraser Road, near Buddha Smriti Park",
  routeTo = "VALENCIA. Patna",
  date = "12 Nov 2024",
  time = "2:00 PM IST",
  passengers = "2 passengers",
  bags = "2 Large bags",
  price = "₹1,200",
  paymentMethod = "Pay at hotel",
  paymentStatus = "Cab payment pending",
  driverStatus = "Driver Assignment pending",
  status = "Completed",
  onViewCabDetails,
}) {
  return (
    <div className="w-full bg-[#F3ECDD] rounded-[8px] p-4 sm:p-5 lg:p-[20px_24px] flex flex-col gap-3.5 border border-[#E8DFC8]/60">
      {/* Header with car icon, title and status */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[35px] h-[26px] flex items-center justify-center text-[#986D2D]">
            <CarIcon size={26} stroke="#8C6717" />
          </div>
          <h4 className="font-display font-semibold text-[20px] sm:text-[22px] leading-[22px] text-[#201B15]">
            Attached cab booking
          </h4>
        </div>

        {/* Status Badge */}
        <div className="h-[32px] px-3.5 rounded-[18px] bg-[#E1EBD9] flex items-center gap-2 shrink-0">
          <CheckCircleIcon size={16} stroke="#134D39" />
          <span className="font-body font-normal text-[14px] leading-[19px] text-[#134D39]">
            {status}
          </span>
        </div>
      </div>

      {/* Main Details and Pricing Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
        {/* Left Side: Vehicle, Route, Timing */}
        <div className="flex flex-col gap-2.5 flex-1 min-w-0">
          {/* Vehicle and Cab Reference */}
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-[17px] sm:text-[19px] leading-[22px] text-[#201B15]">
              {vehicleName}
            </span>
            <span className="w-[1px] h-[16px] bg-[#DFD6C4]" aria-hidden="true" />
            <span className="font-body font-medium text-[15px] sm:text-[16px] leading-[20px] text-[#84827F]">
              {cabRef}
            </span>
          </div>

          {/* Route */}
          <div className="flex items-center gap-2.5 text-[#524F48] flex-wrap">
            <PinIcon size={20} stroke="#565653" className="shrink-0" />
            <span className="font-body font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-[0.02em]">
              {routeFrom}
            </span>
            <ArrowRight size={16} className="shrink-0 stroke-[2] text-[#524F48]" />
            <span className="font-body font-medium text-[14px] sm:text-[16px] leading-[20px] tracking-[0.04em]">
              {routeTo}
            </span>
          </div>

          {/* Date, Time, Passengers, Bags */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-[#524F48] flex-wrap text-[14px] sm:text-[16px]">
            <CalendarIcon size={20} stroke="#565653" className="shrink-0" />
            <span className="font-body font-medium leading-[20px] tracking-[0.02em]">
              {date}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#524F48]" />
            <span className="font-body font-medium leading-[20px] tracking-[0.02em]">
              {time}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#524F48]" />
            <span className="font-body font-medium leading-[20px] tracking-[0.02em]">
              {passengers}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#524F48]" />
            <span className="font-body font-medium leading-[20px] tracking-[0.02em]">
              {bags}
            </span>
          </div>
        </div>

        {/* Vertical divider on desktop */}
        <div className="hidden lg:block w-[1px] h-[80px] bg-[#ECE5DB] shrink-0" aria-hidden="true" />

        {/* Right Side: Payment and Price */}
        <div className="flex flex-col items-start lg:items-end justify-center shrink-0 min-w-[140px] pt-2 lg:pt-0 border-t lg:border-t-0 border-[#ECE5DB]">
          <div className="h-[26px] px-3 rounded-[12px] bg-[#F0E5C9] flex items-center justify-center mb-1">
            <span className="font-body font-semibold text-[13px] leading-[19px] text-[#806432]">
              {paymentMethod}
            </span>
          </div>
          <div className="font-body font-bold text-[24px] sm:text-[27px] leading-[34px] sm:leading-[36px] text-[#2D2721]">
            {price}
          </div>
          <p className="font-body font-medium text-[14px] sm:text-[15px] leading-[20px] text-[#7C7D78] tracking-[0.02em]">
            {paymentStatus}
          </p>
        </div>
      </div>

      {/* Horizontal divider */}
      <div className="w-full h-[1px] bg-[#E1D8C6] my-1" />

      {/* Driver status and view details link */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <ClockIcon size={20} stroke="#846000" className="shrink-0" />
          <span className="font-body font-medium text-[14px] sm:text-[15px] leading-[20px] text-[#846000] tracking-[0.02em]">
            {driverStatus}
          </span>
        </div>

        <button
          type="button"
          onClick={onViewCabDetails}
          className="font-body font-medium text-[14px] leading-[20px] text-[#2D4432] underline hover:opacity-80 transition-opacity flex items-center gap-1.5 cursor-pointer ml-auto"
        >
          <span>View cab details</span>
          <ArrowRight size={15} className="stroke-[2] text-[#524F48] no-underline" />
        </button>
      </div>
    </div>
  );
}

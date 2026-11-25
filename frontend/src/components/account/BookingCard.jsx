"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BedIcon, CalendarIcon, UserProfileIcon, CheckCircleIcon, InvoiceIcon } from "./AccountIcons";
import AttachedCabCard from "./AttachedCabCard";

export default function BookingCard({
  reference = "VAL-DEMO-1026",
  status = "Confirmed",
  roomName = "Deluxe Room",
  hotelName = "VALENCIA · Patna",
  rateType = "Room only",
  checkInDate = "12 Nov 2026",
  checkOutDate = "14 Nov 2026",
  occupancy = "2 nights · 2 adults · 1 room",
  image = "/images/booking/Rectangle.png",
  totalPaid = "₹13,200",
  isDemoAmount = false,
  cabBooking = null,
  onViewBooking,
  onDownloadInvoice,
  onViewCabDetails,
}) {
  return (
    <article
      aria-label={`Booking ${reference}`}
      className="w-full border border-[#DFD5C2] rounded-[6px] p-4 sm:p-5 lg:p-[16px_20px_20px_20px] bg-[#FAF8F2] flex flex-col gap-5 shadow-xs"
    >
      {/* Reference & Status */}
      <div className="w-full flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-display font-semibold text-[17px] sm:text-[18px] leading-[24px] text-[#3C342D]">
          Reference: {reference}
        </h3>
        <div className="h-[32px] px-3.5 rounded-[18px] bg-[#E1EBD9] flex items-center gap-2 shrink-0">
          <CheckCircleIcon size={16} stroke="#134D39" />
          <span className="font-body font-normal text-[14px] leading-[19px] text-[#134D39]">
            {status}
          </span>
        </div>
      </div>

      {/* Booking Image and Details */}
      <div className="w-full flex flex-col md:flex-row items-stretch md:items-start gap-5 lg:gap-[28px]">
        {/* Room Image */}
        <div className="relative w-full md:w-[320px] lg:w-[344px] h-[220px] sm:h-[239px] rounded-[5px] overflow-hidden shrink-0 bg-[#E8DFC8]">
          <Image
            src={image}
            alt={roomName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 344px"
          />
          {/* Concept Image Badge */}
          <div className="absolute left-3 bottom-3 px-2 py-0.5 rounded-[3px] bg-black/60 text-[#FFFFFF] text-[10px] tracking-[0.06em] font-body uppercase backdrop-blur-xs">
            CONCEPT IMAGE
          </div>
        </div>

        {/* Room Information */}
        <div className="flex-1 flex flex-col justify-between min-h-[239px] gap-3">
          <div className="flex flex-col">
            <h4 className="font-display font-semibold text-[23px] sm:text-[26px] leading-[32px] sm:leading-[37px] text-[#201B15]">
              {roomName}
            </h4>
            <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[26px] sm:leading-[29px] text-[#565653]">
              {hotelName}
            </p>
            <div className="flex items-center gap-2 text-[#898984] mt-1">
              <BedIcon size={18} stroke="#898984" />
              <span className="font-body text-[15px] sm:text-[16px] leading-[22px]">
                {rateType}
              </span>
            </div>
          </div>

          {/* Dates & Occupancy Grid */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2">
            {/* Check-in */}
            <div className="flex items-start gap-2.5">
              <CalendarIcon size={20} stroke="#565653" className="mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-body text-[13px] sm:text-[14px] leading-[18px] sm:leading-[19px] text-[#898984]">
                  Check-in
                </span>
                <span className="font-body font-normal text-[15px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-[#565653]">
                  {checkInDate}
                </span>
              </div>
            </div>

            {/* Check-out */}
            <div className="flex items-start gap-2.5">
              <CalendarIcon size={20} stroke="#565653" className="mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-body text-[13px] sm:text-[14px] leading-[18px] sm:leading-[19px] text-[#898984]">
                  Check-out
                </span>
                <span className="font-body font-normal text-[15px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-[#565653]">
                  {checkOutDate}
                </span>
              </div>
            </div>

            {/* Occupancy */}
            <div className="flex items-start gap-2.5">
              <UserProfileIcon size={20} stroke="#565653" className="mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <span className="font-body text-[13px] sm:text-[14px] leading-[18px] sm:leading-[19px] text-[#898984]">
                  Occupancy
                </span>
                <span className="font-body font-normal text-[14px] sm:text-[15px] leading-[20px] text-[#898984]">
                  {occupancy}
                </span>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-[#E1D8C6] my-1" />

          {/* Paid and Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            {/* Total Paid */}
            <div className="flex flex-col">
              <span className="font-body text-[13px] sm:text-[14px] leading-[19px] text-[#898984]">
                Total paid
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-body font-bold text-[24px] sm:text-[27px] leading-[34px] sm:leading-[36px] text-[#2D2721]">
                  {totalPaid}
                </span>
                {isDemoAmount && (
                  <span className="font-body text-[13px] leading-[18px] text-[#898984]">
                    Demo amount
                  </span>
                )}
              </div>
            </div>

            {/* Buttons: VIEW BOOKING + Download invoice */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <button
                type="button"
                onClick={onViewBooking}
                className="h-[48px] px-5 sm:px-6 rounded-[9px] bg-[#134D39] text-[#FFFFFF] font-body text-[14px] sm:text-[15px] font-medium flex items-center justify-center gap-2.5 hover:bg-[#0f3d2d] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>VIEW BOOKING</span>
                <ArrowRight size={16} className="stroke-[2]" />
              </button>

              <button
                type="button"
                onClick={onDownloadInvoice}
                className="font-body text-[15px] sm:text-[16px] leading-[22px] text-[#134D39] underline hover:opacity-80 transition-opacity flex items-center gap-1.5 cursor-pointer"
              >
                <InvoiceIcon size={18} stroke="#134D39" />
                <span>Download invoice</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Attached Cab Booking (if present) */}
      {cabBooking && (
        <div className="w-full pt-1">
          <AttachedCabCard
            {...cabBooking}
            onViewCabDetails={onViewCabDetails}
          />
        </div>
      )}
    </article>
  );
}

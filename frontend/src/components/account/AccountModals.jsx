"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Check, ArrowRight, Printer, Download, Car, Calendar, Clock, MapPin, User, ShieldCheck } from "lucide-react";

export function CabDetailsModal({ isOpen, onClose, cabData }) {
  if (!isOpen) return null;

  const data = cabData || {
    cabRef: "CAB -DEMO-1026",
    hotelRef: "VAL-DEMO-1026",
    vehicleName: "Toyota Innova · Air-conditioned MPV",
    routeFrom: "Fraser Road, near Buddha Smriti Park, Patna",
    routeTo: "VALENCIA · Patna",
    date: "12 Nov 2024",
    time: "2:00 PM IST",
    passengers: "2 passengers",
    bags: "2 Large bags",
    totalFare: "₹1,200",
    payableAtHotel: "₹1,200",
    paidOnline: "₹0",
    paymentMethod: "Pay at hotel",
    driverStatus: "Driver Assignment pending",
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-[620px] bg-[#FAF8F2] border border-[#DFD5C2] rounded-[12px] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#565653] hover:text-[#134D39] rounded-full hover:bg-[#EAE4D7] transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 pb-3 border-b border-[#E1D8C6]">
          <div className="w-[38px] h-[38px] rounded-full bg-[#E1EBD9] flex items-center justify-center text-[#134D39]">
            <Car size={20} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-[22px] text-[#201B15]">
              Cab Booking Details
            </h3>
            <p className="font-body text-[13px] text-[#898984]">
              Attached to reservation {data.hotelRef}
            </p>
          </div>
        </div>

        {/* Reference & status */}
        <div className="flex items-center justify-between py-4 border-b border-[#E1D8C6]/60">
          <div>
            <span className="font-body text-[12px] uppercase text-[#898984] tracking-[0.05em]">
              Booking Reference
            </span>
            <p className="font-display font-semibold text-[17px] text-[#201B15]">
              {data.cabRef}
            </p>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#E1EBD9] text-[#134D39] text-[13px] font-medium flex items-center gap-1.5">
            <Check size={14} className="stroke-[2.5]" />
            <span>Confirmed</span>
          </div>
        </div>

        {/* Vehicle & Journey */}
        <div className="py-4 flex flex-col gap-3 border-b border-[#E1D8C6]/60">
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-[18px] text-[#201B15]">
              {data.vehicleName}
            </span>
          </div>

          <div className="flex flex-col gap-2 pt-1 font-body text-[14px] text-[#524F48]">
            <div className="flex items-start gap-2.5">
              <MapPin size={18} className="text-[#134D39] shrink-0 mt-0.5" />
              <div>
                <span className="text-[12px] text-[#898984] block">Pickup Location</span>
                <span className="font-medium text-[#201B15]">{data.routeFrom}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={18} className="text-[#986D2D] shrink-0 mt-0.5" />
              <div>
                <span className="text-[12px] text-[#898984] block">Destination</span>
                <span className="font-medium text-[#201B15]">{data.routeTo}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 bg-[#F3ECDD] p-3 rounded-[6px]">
            <div>
              <span className="text-[11px] text-[#898984] block">Date</span>
              <span className="text-[13px] font-medium text-[#201B15]">{data.date}</span>
            </div>
            <div>
              <span className="text-[11px] text-[#898984] block">Time</span>
              <span className="text-[13px] font-medium text-[#201B15]">{data.time}</span>
            </div>
            <div>
              <span className="text-[11px] text-[#898984] block">Passengers</span>
              <span className="text-[13px] font-medium text-[#201B15]">{data.passengers}</span>
            </div>
            <div>
              <span className="text-[11px] text-[#898984] block">Luggage</span>
              <span className="text-[13px] font-medium text-[#201B15]">{data.bags}</span>
            </div>
          </div>
        </div>

        {/* Driver Assignment status */}
        <div className="py-3.5 px-4 rounded-[6px] bg-[#F7F2E6] border border-[#E8DFC8] my-4 flex items-center gap-3">
          <Clock size={20} className="text-[#846000] shrink-0" />
          <div className="flex flex-col">
            <span className="text-[14px] font-medium text-[#846000]">
              {data.driverStatus}
            </span>
            <span className="text-[12px] text-[#7C7D78]">
              Driver phone number and license plate will be sent via SMS 2 hours prior to arrival.
            </span>
          </div>
        </div>

        {/* Fare breakdown */}
        <div className="py-3 flex flex-col gap-2">
          <div className="flex justify-between text-[14px] text-[#524F48]">
            <span>Total cab fare</span>
            <span className="font-semibold text-[#201B15]">{data.totalFare}</span>
          </div>
          <div className="flex justify-between text-[14px] text-[#524F48]">
            <span>Paid online</span>
            <span className="font-medium">{data.paidOnline}</span>
          </div>
          <div className="flex justify-between text-[16px] font-semibold text-[#201B15] pt-2 border-t border-[#E1D8C6]">
            <span>Payable at hotel</span>
            <span className="text-[18px] text-[#134D39] font-bold">{data.payableAtHotel}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-5 flex items-center justify-end gap-3 border-t border-[#E1D8C6]">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-[6px] border border-[#134D39] text-[#134D39] text-[14px] font-medium flex items-center gap-2 hover:bg-[#EAE4D7] transition-colors"
          >
            <Printer size={16} />
            <span>Print Confirmation</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-[6px] bg-[#134D39] text-[#FFFFFF] text-[14px] font-medium hover:bg-[#0f3d2d] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function InvoiceModal({ isOpen, onClose, booking }) {
  if (!isOpen) return null;

  const b = booking || {
    reference: "VAL-DEMO-1026",
    roomName: "Deluxe Room",
    hotelName: "VALENCIA · Patna",
    checkInDate: "12 Nov 2026",
    checkOutDate: "14 Nov 2026",
    occupancy: "2 nights · 2 adults · 1 room",
    totalPaid: "₹13,200",
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-[650px] bg-[#FFFDF9] border border-[#DFD5C2] rounded-[12px] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#565653] hover:text-[#134D39] rounded-full hover:bg-[#EAE4D7] transition-colors print:hidden"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Invoice Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#E1D8C6]">
          <div>
            <h2 className="font-display font-medium text-[26px] tracking-[0.05em] text-[#1B4D32]">
              VALENCIA
            </h2>
            <p className="font-body text-[8px] uppercase tracking-[0.2em] text-[#C9A96A]">
              A LUXURY BOUTIQUE HOTEL
            </p>
            <p className="font-body text-[12px] text-[#898984] mt-2">
              Fraser Road, Patna, Bihar 800001
            </p>
          </div>
          <div className="text-right">
            <span className="font-display font-bold text-[20px] text-[#201B15] block">
              TAX INVOICE
            </span>
            <span className="font-body text-[13px] text-[#565653] block">
              #{b.reference}-INV
            </span>
            <span className="font-body text-[12px] text-[#898984]">
              Date: {b.checkInDate}
            </span>
          </div>
        </div>

        {/* Guest Details */}
        <div className="py-4 border-b border-[#E1D8C6] flex justify-between gap-4 text-[14px]">
          <div>
            <span className="text-[12px] text-[#898984] block">Billed To</span>
            <strong className="font-display text-[16px] text-[#201B15] block">Aarav Sharma</strong>
            <span className="text-[#565653]">aarav@example.com</span>
          </div>
          <div className="text-right">
            <span className="text-[12px] text-[#898984] block">Payment Status</span>
            <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#E1EBD9] text-[#134D39] text-[12px] font-semibold">
              PAID IN FULL
            </span>
          </div>
        </div>

        {/* Item details */}
        <div className="py-4 border-b border-[#E1D8C6]">
          <table className="w-full text-left font-body text-[14px]">
            <thead>
              <tr className="border-b border-[#E8DFC8] text-[#898984] text-[12px] uppercase">
                <th className="pb-2">Description</th>
                <th className="pb-2 text-center">Duration</th>
                <th className="pb-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DFC8]/40">
              <tr>
                <td className="py-3">
                  <strong className="font-display text-[15px] text-[#201B15] block">{b.roomName}</strong>
                  <span className="text-[12px] text-[#898984]">{b.hotelName} ({b.checkInDate} &ndash; {b.checkOutDate})</span>
                </td>
                <td className="py-3 text-center text-[#565653]">2 Nights</td>
                <td className="py-3 text-right font-medium text-[#201B15]">{b.totalPaid}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="py-4 flex flex-col gap-2 font-body text-[14px]">
          <div className="flex justify-between text-[#565653]">
            <span>Subtotal</span>
            <span>₹11,186</span>
          </div>
          <div className="flex justify-between text-[#565653]">
            <span>CGST (9%)</span>
            <span>₹1,007</span>
          </div>
          <div className="flex justify-between text-[#565653]">
            <span>SGST (9%)</span>
            <span>₹1,007</span>
          </div>
          <div className="flex justify-between font-bold text-[18px] text-[#201B15] pt-2 border-t border-[#E1D8C6]">
            <span>Total Paid</span>
            <span className="text-[#134D39]">{b.totalPaid}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E1D8C6] print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-[6px] border border-[#134D39] text-[#134D39] text-[14px] font-medium flex items-center gap-2 hover:bg-[#EAE4D7] transition-colors"
          >
            <Printer size={16} />
            <span>Print Invoice</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-[6px] bg-[#134D39] text-[#FFFFFF] text-[14px] font-medium hover:bg-[#0f3d2d] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export function ChangeEmailModal({ isOpen, onClose }) {
  const [newEmail, setNewEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEmail) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-[480px] bg-[#FAF8F2] border border-[#DFD5C2] rounded-[12px] p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#565653] hover:text-[#134D39] rounded-full hover:bg-[#EAE4D7] transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="font-display font-semibold text-[22px] text-[#201B15] mb-2">
          Change Email Address
        </h3>
        <p className="font-body text-[14px] text-[#898984] mb-5">
          We will send a verification code to your new email address to confirm ownership.
        </p>

        {sent ? (
          <div className="p-4 rounded-[6px] bg-[#E1EBD9] text-[#134D39] font-body text-[14px] flex items-center gap-2.5">
            <Check size={18} />
            <span>Verification link sent! Please check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="new-email-input" className="font-body text-[14px] text-[#292722]">
                New Email Address
              </label>
              <input
                id="new-email-input"
                type="email"
                required
                placeholder="yourname@domain.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full h-[48px] px-3.5 rounded-[5px] border border-[#DFD5C2] bg-[#FFFFFF] font-body text-[15px] text-[#292722] focus:outline-none focus:border-[#134D39]"
              />
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-[6px] text-[#565653] hover:text-[#201B15] font-body text-[14px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-[6px] bg-[#134D39] text-[#FFFFFF] font-body text-[14px] font-medium hover:bg-[#0f3d2d] transition-colors"
              >
                Send Verification
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function ChangeMobileModal({ isOpen, onClose }) {
  const [newMobile, setNewMobile] = useState("");
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMobile) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-[480px] bg-[#FAF8F2] border border-[#DFD5C2] rounded-[12px] p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#565653] hover:text-[#134D39] rounded-full hover:bg-[#EAE4D7] transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="font-display font-semibold text-[22px] text-[#201B15] mb-2">
          Change Mobile Number
        </h3>
        <p className="font-body text-[14px] text-[#898984] mb-5">
          We will send an OTP via SMS to your new number to verify your identity.
        </p>

        {sent ? (
          <div className="p-4 rounded-[6px] bg-[#E1EBD9] text-[#134D39] font-body text-[14px] flex items-center gap-2.5">
            <Check size={18} />
            <span>OTP sent! Please check your mobile messages.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="new-mobile-input" className="font-body text-[14px] text-[#292722]">
                New Mobile Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-[5px] border border-r-0 border-[#DFD5C2] bg-[#EFECE5] text-[#565653] font-body text-[14px]">
                  +91
                </span>
                <input
                  id="new-mobile-input"
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={newMobile}
                  onChange={(e) => setNewMobile(e.target.value)}
                  className="flex-1 h-[48px] px-3.5 rounded-r-[5px] border border-[#DFD5C2] bg-[#FFFFFF] font-body text-[15px] text-[#292722] focus:outline-none focus:border-[#134D39]"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-[6px] text-[#565653] hover:text-[#201B15] font-body text-[14px]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-[6px] bg-[#134D39] text-[#FFFFFF] font-body text-[14px] font-medium hover:bg-[#0f3d2d] transition-colors"
              >
                Send OTP
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

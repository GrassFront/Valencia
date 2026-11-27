"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, User, Calendar, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function AccountHeader() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#FBF8F0] border-b border-[#E1D8C6] sticky top-0 z-50">
        <div className="w-full flex h-[76px] sm:h-[87px] items-center justify-between gap-2 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {/* Brand / Valencia logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3.5 min-w-0 transition-opacity hover:opacity-95"
            aria-label="Valencia - Back to Home"
          >
            <div className="relative w-[46px] sm:w-[94px] h-[30px] sm:h-[58px] shrink-0">
              <Image
                src="/images/booking/Original emblem.png"
                alt="Valencia Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display font-medium text-[17px] sm:text-[28px] leading-[22px] sm:leading-[37px] tracking-[0.05em] text-[#1B4D32]">
                VALENCIA
              </span>
              <span className="font-body text-[5px] sm:text-[7px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#C9A96A] font-normal leading-[7px] sm:leading-[8px] whitespace-nowrap">
                A LUXURY BOUTIQUE HOTEL
              </span>
            </div>
          </Link>

          {/* Account navigation */}
          <div className="flex items-center gap-2.5 sm:gap-6 relative shrink-0">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 sm:gap-2 cursor-pointer focus:outline-none"
              aria-expanded={dropdownOpen}
              aria-label="Account menu"
            >
              <div className="w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] rounded-full bg-[#134D39] text-[#FFFFFF] flex items-center justify-center font-display font-semibold text-[14px] sm:text-[18px] leading-[20px] sm:leading-[24px] shadow-xs shrink-0">
                {user?.initials || "AS"}
              </div>
              <ChevronDown
                size={18}
                className={`text-[#565653] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

          {/* User popup menu */}
          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 top-[100%] mt-2 w-[210px] rounded-[14px] bg-[#FAF7F0] border border-[#E8DCC9] shadow-[0_12px_32px_rgba(27,45,35,0.12)] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-2 border-b border-[#E8DCC9]/70 mb-1">
                  <p className="font-display font-semibold text-[14px] text-[#201B15] truncate">
                    {user?.fullName || "Aarav Sharma"}
                  </p>
                  <p className="font-body text-[12px] text-[#898984] truncate">
                    {user?.email || "aarav@example.com"}
                  </p>
                </div>
                <Link
                  href="/account/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F2ECE0] text-[#292722] hover:text-[#134D39] transition-colors"
                >
                  <User size={18} className="text-[#134D39] stroke-[1.8]" />
                  <span className="font-body font-medium text-[15px]">My Profile</span>
                </Link>
                <Link
                  href="/account"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F2ECE0] text-[#292722] hover:text-[#134D39] transition-colors"
                >
                  <Calendar size={18} className="text-[#134D39] stroke-[1.8]" />
                  <span className="font-body font-medium text-[15px]">My Bookings</span>
                </Link>
                <div className="my-1.5 border-t border-[#E8DCC9]/70" />
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F2ECE0] text-[#78716C] hover:text-[#C53030] transition-colors text-left cursor-pointer"
                >
                  <LogOut size={16} className="stroke-[1.8]" />
                  <span className="font-body font-medium text-[14px]">Sign Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>

    <div className="w-full bg-[#FBF8F0] px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-3 pb-1 flex justify-end">
      <Link
        href="/"
        className="font-body text-[13px] sm:text-[15px] leading-[20px] text-[#574A39] hover:text-[#1B4D32] transition-colors flex items-center gap-1.5 whitespace-nowrap"
      >
        <span aria-hidden="true">&larr;</span>
        <span className="md:hidden">Back</span>
        <span className="hidden md:inline">Back to website</span>
      </Link>
    </div>
  </>
  );
}

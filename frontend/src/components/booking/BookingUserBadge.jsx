"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Calendar, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function computeInitials(user) {
  if (!user) return "";
  if (user.initials && typeof user.initials === "string") {
    return user.initials.toUpperCase();
  }
  const fullName =
    user.fullName ||
    `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
    user.email ||
    "";
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function BookingUserBadge({ showGreetingOnDesktop = false }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (!isAuthenticated || !user) return null;

  const initials = computeInitials(user) || "U";
  const firstName =
    user.firstName ||
    (user.fullName ? user.fullName.split(/\s+/)[0] : "") ||
    "Guest";

  return (
    <div ref={wrapRef} className="relative flex items-center shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 sm:gap-2 cursor-pointer focus:outline-none bg-transparent border-0 p-0"
        aria-expanded={open}
        aria-label="Account menu"
      >
        <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#134D39] text-[#FFFFFF] flex items-center justify-center font-display font-semibold text-[13px] sm:text-[15px] leading-none shadow-xs shrink-0">
          {initials}
        </div>
        {showGreetingOnDesktop && (
          <span className="hidden md:inline font-body font-medium text-[15px] text-[#49372B] whitespace-nowrap">
            Hi {firstName}
          </span>
        )}
        <ChevronDown
          size={16}
          className={`text-[#565653] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-[210px] rounded-[14px] bg-[#FAF7F0] border border-[#E8DCC9] shadow-[0_12px_32px_rgba(27,45,35,0.14)] p-2 z-50">
          <div className="px-3 py-2 border-b border-[#E8DCC9]/70 mb-1">
            <p className="font-display font-semibold text-[14px] text-[#201B15] truncate m-0">
              {user.fullName || firstName}
            </p>
            {user.email && (
              <p className="font-body text-[12px] text-[#898984] truncate m-0">
                {user.email}
              </p>
            )}
          </div>
          <Link
            href="/account/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F2ECE0] text-[#292722] hover:text-[#134D39] transition-colors no-underline"
          >
            <User size={16} className="text-[#134D39] stroke-[1.8]" />
            <span className="font-body font-medium text-[14px]">My Profile</span>
          </Link>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F2ECE0] text-[#292722] hover:text-[#134D39] transition-colors no-underline"
          >
            <Calendar size={16} className="text-[#134D39] stroke-[1.8]" />
            <span className="font-body font-medium text-[14px]">My Bookings</span>
          </Link>
          <div className="my-1.5 border-t border-[#E8DCC9]/70" />
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              logout();
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-[8px] hover:bg-[#F2ECE0] text-[#78716C] hover:text-[#C53030] transition-colors text-left cursor-pointer bg-transparent border-0"
          >
            <LogOut size={16} className="stroke-[1.8]" />
            <span className="font-body font-medium text-[14px]">Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}
export default BookingUserBadge;

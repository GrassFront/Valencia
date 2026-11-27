"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BedIcon, UserProfileIcon, SignOutIcon } from "./AccountIcons";
import { useAuth } from "../../context/AuthContext";

export default function AccountSidebar({ activeTab = "bookings", onSelectTab }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  return (
    <aside
      aria-label="Account Sidebar"
      className="hidden lg:flex w-full lg:w-[268px] bg-[#F4F0E5] rounded-[5px] pt-[23px] pb-[32px] px-[20px] lg:pl-[25px] lg:pr-[12px] flex-col items-start shrink-0 min-h-[500px]"
    >
      {/* User avatar */}
      <div className="w-[69px] h-[69px] rounded-full bg-[#134D39] text-[#FFFFFF] flex items-center justify-center font-display font-semibold text-[29px] leading-[39px] shadow-sm mb-1 shrink-0">
        {user?.initials || "AS"}
      </div>

      {/* Aarav Sharma */}
      <h2 className="font-display font-semibold text-[21px] leading-[37px] text-[#292722] mt-1 truncate max-w-full">
        {user?.fullName || "Aarav Sharma"}
      </h2>

      {/* aarav@example.com */}
      <p className="font-body font-normal text-[16px] sm:text-[17px] leading-[26px] text-[#898984] mb-6 truncate max-w-full">
        {user?.email || "aarav@example.com"}
      </p>

      {/* Navigation Buttons */}
      <nav className="w-full flex flex-col gap-2">
        {/* My Bookings */}
        {onSelectTab ? (
          <button
            type="button"
            onClick={() => onSelectTab("bookings")}
            className={`w-full max-w-[244px] h-[53px] pl-[14px] flex items-center gap-[20px] rounded-[5px] transition-all cursor-pointer text-left ${
              activeTab !== "profile"
                ? "bg-[#E2ECDA] text-[#134D39]"
                : "bg-transparent text-[#134D39] hover:bg-[#EAE4D7]"
            }`}
          >
            <BedIcon size={25} stroke="#134D39" className="shrink-0" />
            <span className="font-display font-semibold text-[18px] leading-[24px]">
              My Bookings
            </span>
          </button>
        ) : (
          <Link
            href="/account"
            className={`w-full max-w-[244px] h-[53px] pl-[14px] flex items-center gap-[20px] rounded-[5px] transition-all cursor-pointer ${
              activeTab !== "profile"
                ? "bg-[#E2ECDA] text-[#134D39]"
                : "bg-transparent text-[#134D39] hover:bg-[#EAE4D7]"
            }`}
          >
            <BedIcon size={25} stroke="#134D39" className="shrink-0" />
            <span className="font-display font-semibold text-[18px] leading-[24px]">
              My Bookings
            </span>
          </Link>
        )}

        {/* My Profile */}
        {onSelectTab ? (
          <button
            type="button"
            onClick={() => onSelectTab("profile")}
            className={`w-full max-w-[244px] h-[53px] pl-[14px] flex items-center gap-[20px] rounded-[5px] transition-all cursor-pointer text-left ${
              activeTab === "profile"
                ? "bg-[#E2ECDA] text-[#134D39]"
                : "bg-transparent text-[#134D39] hover:bg-[#EAE4D7]"
            }`}
          >
            <UserProfileIcon size={25} stroke="#134D39" className="shrink-0" />
            <span className="font-display font-semibold text-[18px] leading-[24px]">
              My Profile
            </span>
          </button>
        ) : (
          <Link
            href="/account/profile"
            className={`w-full max-w-[244px] h-[53px] pl-[14px] flex items-center gap-[20px] rounded-[5px] transition-all cursor-pointer ${
              activeTab === "profile"
                ? "bg-[#E2ECDA] text-[#134D39]"
                : "bg-transparent text-[#134D39] hover:bg-[#EAE4D7]"
            }`}
          >
            <UserProfileIcon size={25} stroke="#134D39" className="shrink-0" />
            <span className="font-display font-semibold text-[18px] leading-[24px]">
              My Profile
            </span>
          </Link>
        )}
      </nav>

      {/* Sidebar gap */}
      <div className="h-[25px]" />

      {/* Rectangle Divider */}
      <div className="w-[220px] h-[1px] bg-[#E1D8C6]" />

      {/* Sign out */}
      <button
        type="button"
        onClick={handleSignOut}
        className="w-[220px] h-[83px] flex items-center gap-[20px] text-[#565653] hover:text-[#134D39] transition-colors cursor-pointer text-left focus:outline-none"
      >
        <SignOutIcon size={26} stroke="currentColor" className="shrink-0" />
        <span className="font-body font-normal text-[18px] leading-[24px]">
          Sign out
        </span>
      </button>

      {/* Rectangle Divider */}
      <div className="w-[220px] h-[1px] bg-[#E1D8C6]" />
    </aside>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function ProfileForm({
  onChangeEmailClick,
  onChangeMobileClick,
}) {
  const { user, updateProfile } = useAuth();

  const [firstName, setFirstName] = useState(user?.firstName || "Aarav");
  const [lastName, setLastName] = useState(user?.lastName || "Sharma");
  const [email] = useState(user?.email || "aarav@example.com");
  const [mobile] = useState(user?.displayMobile || "+91 • • • • • • 3210");
  const [marketingConsent, setMarketingConsent] = useState(
    user?.marketingConsent !== undefined ? user.marketingConsent : true
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      firstName,
      lastName,
      marketingConsent,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFirstName(user?.firstName || "Aarav");
    setLastName(user?.lastName || "Sharma");
    setMarketingConsent(user?.marketingConsent !== undefined ? user.marketingConsent : true);
  };

  return (
    <div className="w-full border border-[#DFD5C2] rounded-[6px] p-6 sm:p-8 lg:p-[32px] bg-[#FAF8F2] shadow-xs">
      {savedSuccess && (
        <div
          className="w-full mb-6 p-4 rounded-[6px] bg-[#E1EBD9] border border-[#134D39]/30 text-[#134D39] font-body text-[14px] sm:text-[15px] flex items-center gap-2.5 animate-in fade-in"
          role="status"
        >
          <Check size={18} className="stroke-[2.5]" />
          <span>Your personal details and preferences have been updated successfully.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        {/* Personal details heading */}
        <div>
          <h3 className="font-display font-semibold text-[22px] sm:text-[24px] leading-[30px] text-[#201B15]">
            Personal details
          </h3>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* First name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profile-first-name"
              className="font-body text-[14px] sm:text-[15px] text-[#292722]"
            >
              First name
            </label>
            <input
              id="profile-first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-[48px] px-3.5 rounded-[5px] border border-[#DFD5C2] bg-[#FFFFFF] font-body text-[15px] sm:text-[16px] text-[#292722] focus:outline-none focus:border-[#134D39] focus:ring-1 focus:ring-[#134D39]"
              required
            />
          </div>

          {/* Last name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profile-last-name"
              className="font-body text-[14px] sm:text-[15px] text-[#292722]"
            >
              Last name
            </label>
            <input
              id="profile-last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-[48px] px-3.5 rounded-[5px] border border-[#DFD5C2] bg-[#FFFFFF] font-body text-[15px] sm:text-[16px] text-[#292722] focus:outline-none focus:border-[#134D39] focus:ring-1 focus:ring-[#134D39]"
              required
            />
          </div>

          {/* Email address */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profile-email"
              className="font-body text-[14px] sm:text-[15px] text-[#292722]"
            >
              Email address
            </label>
            <input
              id="profile-email"
              type="email"
              value={email}
              readOnly
              disabled
              className="w-full h-[48px] px-3.5 rounded-[5px] border border-[#DFD5C2] bg-[#EFECE5] font-body text-[15px] sm:text-[16px] text-[#565653] cursor-not-allowed"
            />
            <button
              type="button"
              onClick={onChangeEmailClick}
              className="font-body text-[14px] leading-[19px] text-[#134D39] underline hover:opacity-80 transition-opacity text-left cursor-pointer w-fit pt-0.5"
            >
              Change email
            </button>
          </div>

          {/* Mobile number */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="profile-mobile"
              className="font-body text-[14px] sm:text-[15px] text-[#292722]"
            >
              Mobile number
            </label>
            <input
              id="profile-mobile"
              type="text"
              value={mobile}
              readOnly
              disabled
              className="w-full h-[48px] px-3.5 rounded-[5px] border border-[#DFD5C2] bg-[#EFECE5] font-body text-[15px] sm:text-[16px] text-[#565653] cursor-not-allowed"
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onChangeMobileClick}
                className="font-body text-[14px] leading-[19px] text-[#134D39] underline hover:opacity-80 transition-opacity text-right cursor-pointer pt-0.5"
              >
                Change mobile
              </button>
            </div>
          </div>
        </div>

        {/* Verification note */}
        <p className="font-body text-[13px] sm:text-[14px] leading-[20px] text-[#898984] -mt-1">
          Changes to your email or mobile require verification.
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#DFD5C2]" />

        {/* Communication preferences */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display font-semibold text-[20px] sm:text-[22px] leading-[28px] text-[#201B15]">
            Communication preferences
          </h3>

          <label className="flex items-start gap-3.5 cursor-pointer select-none group">
            <div className="relative flex items-center justify-center mt-1">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-[22px] h-[22px] rounded-[4px] border flex items-center justify-center transition-colors ${
                  marketingConsent
                    ? "bg-[#134D39] border-[#134D39]"
                    : "bg-[#FFFFFF] border-[#DFD5C2] group-hover:border-[#134D39]"
                }`}
              >
                {marketingConsent && <Check size={16} className="text-[#FFFFFF] stroke-[3]" />}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-body font-semibold text-[15px] sm:text-[16px] leading-[22px] text-[#201B15]">
                Send me offers and updates from VALENCIA.
              </span>
              <span className="font-body font-normal text-[13px] sm:text-[14px] leading-[20px] text-[#898984]">
                Booking and service messages will still be sent when needed.
              </span>
            </div>
          </label>
        </div>

        {/* Actions row */}
        <div className="flex items-center gap-6 pt-2">
          <button
            type="submit"
            className="h-[48px] px-6 sm:px-8 rounded-[9px] bg-[#134D39] text-[#FFFFFF] font-body text-[14px] sm:text-[15px] font-medium flex items-center justify-center gap-3 hover:bg-[#0f3d2d] transition-colors shadow-sm cursor-pointer"
          >
            <span>SAVE CHANGES</span>
            <ArrowRight size={16} className="stroke-[2]" />
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="font-body font-medium text-[15px] text-[#134D39] hover:opacity-80 transition-opacity cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import React from "react";

export default function BookingTabs({ activeTab = "upcoming", onTabChange, counts = { upcoming: 1, past: 2, cancelled: 0 } }) {
  const tabs = [
    { id: "upcoming", label: `Upcoming (${counts.upcoming})` },
    { id: "past", label: `Past (${counts.past})` },
    { id: "cancelled", label: `Cancelled (${counts.cancelled})` },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center gap-6 sm:gap-8 h-[53px] overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-between h-[53px] cursor-pointer focus:outline-none shrink-0 group"
            >
              <span
                className={`font-body text-[17px] sm:text-[19px] leading-[26px] transition-colors pb-2 ${
                  isActive
                    ? "font-medium text-[#134D39]"
                    : "font-normal text-[#898984] group-hover:text-[#134D39]"
                }`}
              >
                {tab.label}
              </span>
              {isActive ? (
                <span className="w-full h-[4px] bg-[#134D39] rounded-[2px]" />
              ) : (
                <span className="w-full h-[4px] bg-transparent" />
              )}
            </button>
          );
        })}
      </div>
      {/* 1px horizontal rule */}
      <div className="w-full h-[1px] bg-[#E1D8C6]" />
    </div>
  );
}

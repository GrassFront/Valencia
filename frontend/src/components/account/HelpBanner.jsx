import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeadsetIcon } from "./AccountIcons";

export default function HelpBanner({ type = "upcoming" }) {
  const contentMap = {
    upcoming: {
      title: "Need help with your booking?",
      subtitle: "We're here to help with your reservation.",
    },
    past: {
      title: "Need help with a past stay?",
      subtitle: "We're here to help with your past bookings.",
    },
    cancelled: {
      title: "Need help with a cancellation?",
      subtitle: "Contact our team for questions about your booking.",
    },
    profile: {
      title: "Need help with your account?",
      subtitle: "Contact our team for assistance with your account.",
    },
  };

  const { title, subtitle } = contentMap[type] || contentMap.upcoming;

  return (
    <div className="w-full min-h-[89px] bg-[#F4EFE3] border border-[#DFD5C2] rounded-[6px] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-[#ECE2CB] flex items-center justify-center shrink-0">
          <HeadsetIcon size={28} stroke="#986D2D" />
        </div>
        <div className="flex flex-col gap-0.5">
          <h3 className="font-display font-semibold text-[20px] sm:text-[22px] leading-[28px] sm:leading-[30px] text-[#332E28]">
            {title}
          </h3>
          <p className="font-body font-normal text-[15px] sm:text-[17px] leading-[22px] sm:leading-[23px] text-[#898984]">
            {subtitle}
          </p>
        </div>
      </div>

      <Link
        href="/contact"
        className="font-body text-[15px] sm:text-[16px] leading-[22px] text-[#134D39] underline hover:opacity-80 transition-opacity flex items-center gap-1.5 shrink-0 self-end sm:self-center font-medium"
      >
        <span>Contact support</span>
        <ArrowRight size={16} className="inline stroke-[2] no-underline" />
      </Link>
    </div>
  );
}

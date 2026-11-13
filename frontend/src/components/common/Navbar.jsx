"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, User, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../lib/navigation";
import { classNames } from "../../lib/classNames";

export default function Navbar({ activeItem = "Home", onLoginClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="relative w-full bg-[#F8F5EA] border-b border-[#E8DCC9]/50 z-40"
    >
      <div className="mx-auto flex h-[90px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-8 lg:pl-[58px] lg:pr-[44px]">
        {/* Brand / Valencia logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-95"
          aria-label="Valencia - A Luxury Boutique Hotel"
        >
          <div className="relative h-[48px] sm:h-[58px] w-[200px] sm:w-[240px] lg:w-[275px]">
            <Image
              src="/images/logo/valencia-logo.png"
              alt="Valencia - A Luxury Boutique Hotel"
              fill
              priority
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 275px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Visible on xl screens 1200px+) */}
        <div className="hidden xl:flex items-center gap-3.5 2xl:gap-5 h-[50px] shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === activeItem || item.active;
            const hasChildren = item.hasDropdown && item.children;

            return (
              <div
                key={item.label}
                className="relative flex items-center h-[50px] shrink-0"
                onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={classNames(
                    "inline-flex items-center gap-1 text-[13.5px] 2xl:text-[14px] leading-[18px] transition-colors whitespace-nowrap shrink-0",
                    isActive
                      ? "font-semibold text-[#BC9756]"
                      : "font-medium text-[#34413F] hover:text-[#BC9756]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={classNames(
                        "transition-transform text-[#34413F] stroke-[1.8] shrink-0",
                        openDropdown === item.label ? "rotate-180 text-[#BC9756]" : ""
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Active Indicator Underline */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-[37px] bg-[#BC9756]"
                    aria-hidden="true"
                  />
                )}

                {/* Dropdown Menu */}
                {hasChildren && openDropdown === item.label && (
                  <div className="absolute top-[48px] left-0 z-50 min-w-[200px] rounded-sm bg-[#FFFDF9] py-2 shadow-xl border border-[#E8DCC9] animate-in fade-in zoom-in-95 duration-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-[13px] font-medium text-[#34413F] hover:bg-[#F8F5EA] hover:text-[#1B4D32] transition-colors whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Section: Account & Log In Button (Desktop) */}
        <div className="hidden xl:flex items-center gap-5 shrink-0">
          {/* Account Icon with divider */}
          <div className="flex h-[50px] w-[46px] items-center justify-center border-l border-[#E8DCC9]">
            <button
              type="button"
              aria-label="User Account"
              className="flex items-center justify-center text-[#34413F] hover:text-[#1B4D32] transition-colors p-1"
            >
              <User size={22} className="stroke-[1.8]" />
            </button>
          </div>

          {/* Book Now / Log In Button */}
          <button
            type="button"
            onClick={onLoginClick}
            className="flex h-[48px] w-[140px] items-center justify-center gap-3 rounded-[3px] bg-[#1B4D32] text-[#F8F5EA] text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-[#153e28] transition-colors shadow-sm shrink-0"
          >
            <span className="whitespace-nowrap">LOG IN</span>
            <ArrowRight size={16} className="stroke-[1.8] shrink-0" />
          </button>
        </div>

        {/* Mobile / Tablet Controls (Visible on screens < 1200px) */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onLoginClick}
            className="flex h-[38px] px-3.5 items-center justify-center gap-2 rounded-[3px] bg-[#1B4D32] text-[#F8F5EA] text-[11px] font-semibold tracking-[0.05em] uppercase"
          >
            <span>LOG IN</span>
            <ArrowRight size={14} />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#34413F] hover:text-[#1B4D32] focus:outline-none"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F8F5EA] border-t border-[#E8DCC9] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-[#E8DCC9]/40 last:border-b-0 pb-2">
                <div
                  className="flex items-center justify-between py-2 cursor-pointer"
                  onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                >
                  <Link
                    href={item.href}
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                    className={classNames(
                      "text-[15px] font-medium transition-colors",
                      item.active ? "text-[#BC9756] font-semibold" : "text-[#34413F]"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={18}
                      className={classNames(
                        "text-[#34413F] transition-transform",
                        openDropdown === item.label ? "rotate-180 text-[#BC9756]" : ""
                      )}
                    />
                  )}
                </div>
                {item.hasDropdown && openDropdown === item.label && item.children && (
                  <div className="pl-4 pb-2 pt-1 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13.5px] text-[#34413F]/80 hover:text-[#1B4D32] py-1"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-3 border-t border-[#E8DCC9] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#34413F]">
                <User size={20} />
                <span className="text-[14px] font-medium">My Account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

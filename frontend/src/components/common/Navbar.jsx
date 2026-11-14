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
            const isActive = activeItem ? item.label === activeItem : item.active;
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
                    "inline-flex items-center gap-1.5 text-[13.5px] 2xl:text-[14px] leading-[18px] transition-colors whitespace-nowrap shrink-0 py-2",
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
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BC9756]"
                    aria-hidden="true"
                  />
                )}

                {/* Refined Luxury Dropdown Menu */}
                {hasChildren && openDropdown === item.label && (
                  <div className="absolute top-[100%] left-0 pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="w-[260px] 2xl:w-[280px] rounded-[6px] bg-[#FFFDF9] py-2 px-1.5 shadow-[0_16px_36px_rgba(27,45,35,0.12)] border border-[#E8DCC9] border-t-2 border-t-[#BC9756]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="group flex items-center justify-between px-3.5 py-2.5 rounded-[4px] hover:bg-[#F6EFE3] transition-all duration-150 border-b border-[#E8DCC9]/30 last:border-b-0"
                        >
                          <div className="flex flex-col min-w-0 pr-2">
                            <span className="text-[13px] font-semibold text-[#242B25] group-hover:text-[#1B4D32] transition-colors font-body truncate">
                              {child.label}
                            </span>
                            {child.subtitle && (
                              <span className="text-[11px] text-[#7A8A85] font-normal leading-[14px] truncate font-body">
                                {child.subtitle}
                              </span>
                            )}
                          </div>
                          <ArrowRight
                            size={13}
                            className="text-[#BC9756] opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
                          />
                        </Link>
                      ))}
                    </div>
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
            <Link
              href="/login"
              aria-label="User Account"
              className="flex items-center justify-center text-[#34413F] hover:text-[#1B4D32] transition-colors p-1 cursor-pointer"
            >
              <User size={22} className="stroke-[1.8]" />
            </Link>
          </div>

          {/* Book Now / Log In Button */}
          <Link
            href="/login"
            onClick={onLoginClick}
            className="flex h-[48px] w-[140px] items-center justify-center gap-3 rounded-[3px] bg-[#1B4D32] text-[#F8F5EA] text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-[#153e28] transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            <span className="whitespace-nowrap">LOG IN</span>
            <ArrowRight size={16} className="stroke-[1.8] shrink-0" />
          </Link>
        </div>

        {/* Mobile / Tablet Controls (Visible on screens < 1200px) */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          <Link
            href="/login"
            onClick={onLoginClick}
            className="flex h-[38px] px-3.5 items-center justify-center gap-2 rounded-[3px] bg-[#1B4D32] text-[#F8F5EA] text-[11px] font-semibold tracking-[0.05em] uppercase cursor-pointer"
          >
            <span>LOG IN</span>
            <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#34413F] hover:text-[#1B4D32] focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F8F5EA] border-t border-[#E8DCC9] px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isMobileActive = activeItem ? item.label === activeItem : item.active;
              return (
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
                      isMobileActive ? "text-[#BC9756] font-semibold" : "text-[#34413F]"
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
                  <div className="pl-3 pr-2 py-2 my-1 bg-[#F1E9DB]/60 rounded-[4px] border-l-2 border-[#BC9756] flex flex-col gap-1.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex flex-col py-1.5 px-2 rounded hover:bg-[#E8DCC9]/50 transition-colors"
                      >
                        <span className="text-[13.5px] font-medium text-[#242B25] hover:text-[#1B4D32]">
                          {child.label}
                        </span>
                        {child.subtitle && (
                          <span className="text-[11px] text-[#7A8A85]">
                            {child.subtitle}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
            })}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 pt-3 border-t border-[#E8DCC9] flex items-center justify-between text-[#34413F] hover:text-[#1B4D32] transition-colors"
            >
              <div className="flex items-center gap-2">
                <User size={20} />
                <span className="text-[14px] font-medium">My Account</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

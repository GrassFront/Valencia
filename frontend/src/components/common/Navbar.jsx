"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight, User, Menu, X, Calendar, LogOut } from "lucide-react";
import { NAV_ITEMS } from "../../lib/navigation";
import { classNames } from "../../lib/classNames";
import { useAuth } from "../../context/AuthContext";

export default function Navbar({ activeItem = "Home", onLoginClick }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="relative w-full bg-[#F8F5EA] border-b border-[#E8DCC9]/50 z-40"
    >
      <div className="mx-auto flex h-[90px] w-full max-w-[min(94vw,2400px)] items-center justify-between px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12">
        {/* Brand / Valencia logo */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-opacity hover:opacity-95"
          aria-label="Valencia - A Luxury Boutique Hotel"
        >
          <div className="relative h-[44px] sm:h-[52px] xl:h-[56px] w-[170px] sm:w-[200px] lg:w-[220px] xl:w-[225px] 2xl:w-[260px]">
            <Image
              src="/images/logo/valencia-logo.png"
              alt="Valencia - A Luxury Boutique Hotel"
              fill
              priority
              sizes="(max-width: 640px) 170px, (max-width: 1024px) 220px, 260px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Visible on xl screens 1200px+) */}
        <div className="hidden xl:flex items-center gap-2 xl:gap-2.5 2xl:gap-4.5 h-[50px] shrink-1 min-w-0">
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
                    "inline-flex items-center gap-1 xl:gap-1.5 text-[12.5px] xl:text-[13px] 2xl:text-[14px] leading-[18px] transition-colors whitespace-nowrap shrink-0 py-2",
                    isActive
                      ? "font-semibold text-[#BC9756]"
                      : "font-medium text-[#34413F] hover:text-[#BC9756]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative whitespace-nowrap">
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-[14px] left-0 right-0 h-[2.5px] bg-[#BC9756]"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={classNames(
                        "transition-transform stroke-[1.8] shrink-0",
                        isActive ? "text-[#BC9756]" : "text-[#34413F]",
                        openDropdown === item.label ? "rotate-180 text-[#BC9756]" : ""
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>

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
        {isAuthenticated && user ? (
          <div className="hidden xl:flex items-center gap-3 shrink-0 relative">
            <button
              type="button"
              onClick={() => setUserMenuOpen((prev) => !prev)}
              className="flex items-center gap-2.5 h-[50px] px-2 rounded-full hover:opacity-95 transition-all cursor-pointer focus:outline-none"
              aria-expanded={userMenuOpen}
              aria-label="User account menu"
            >
              <div className="w-[38px] h-[38px] rounded-full bg-[#134D39] text-[#FFFFFF] flex items-center justify-center font-display font-semibold text-[15px] shadow-xs">
                {user.initials || "AS"}
              </div>
              <span className="font-body font-medium text-[15px] text-[#292722]">
                Hi, {user.firstName || "Aarav"}
              </span>
              <ChevronDown
                size={16}
                className={classNames(
                  "text-[#565653] transition-transform duration-200 stroke-[2]",
                  userMenuOpen ? "rotate-180" : ""
                )}
              />
            </button>

            {/* Dropdown Menu (Figma Image 1) */}
            {userMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setUserMenuOpen(false)}
                />
                <div className="absolute right-0 top-[100%] mt-1 w-[204px] rounded-[14px] bg-[#FAF7F0] border border-[#E8DCC9] shadow-[0_12px_32px_rgba(27,45,35,0.12)] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/account/profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F2ECE0] text-[#292722] hover:text-[#134D39] transition-colors"
                  >
                    <User size={18} className="text-[#134D39] stroke-[1.8]" />
                    <span className="font-body font-medium text-[15px]">My Profile</span>
                  </Link>
                  <Link
                    href="/account"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-[8px] hover:bg-[#F2ECE0] text-[#292722] hover:text-[#134D39] transition-colors"
                  >
                    <Calendar size={18} className="text-[#134D39] stroke-[1.8]" />
                    <span className="font-body font-medium text-[15px]">My Bookings</span>
                  </Link>
                  <div className="my-1.5 border-t border-[#E8DCC9]/70" />
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
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
        ) : (
          <div className="hidden xl:flex items-center gap-2.5 xl:gap-3 2xl:gap-5 shrink-0">
            {/* Account Icon with divider */}
            <div className="flex h-[46px] w-[38px] xl:w-[42px] items-center justify-center border-l border-[#E8DCC9]">
              <Link
                href="/login"
                aria-label="User Account"
                className="flex items-center justify-center text-[#34413F] hover:text-[#1B4D32] transition-colors p-1 cursor-pointer"
              >
                <User size={20} className="stroke-[1.8]" />
              </Link>
            </div>

            {/* Book Now / Log In Button */}
            <Link
              href="/login"
              onClick={onLoginClick}
              className="flex h-[42px] xl:h-[44px] 2xl:h-[48px] w-[105px] xl:w-[115px] 2xl:w-[136px] items-center justify-center gap-2 2xl:gap-2.5 rounded-[3px] bg-[#1B4D32] text-[#F8F5EA] text-[11px] xl:text-[11.5px] 2xl:text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-[#153e28] transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              <span className="whitespace-nowrap">LOG IN</span>
              <ArrowRight size={15} className="stroke-[1.8] shrink-0" />
            </Link>
          </div>
        )}

        {/* Mobile / Tablet Controls (Visible on screens < 1200px) */}
        <div className="flex xl:hidden items-center gap-3 shrink-0">
          {isAuthenticated && user ? (
            <Link
              href="/account"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[#134D39] text-[#FFFFFF] text-[13px] font-medium"
            >
              <div className="w-[26px] h-[26px] rounded-full bg-[#1B4D32] flex items-center justify-center font-display text-[12px] font-semibold">
                {user.initials || "AS"}
              </div>
              <span className="font-display font-medium pr-1">Aarav</span>
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={onLoginClick}
              className="flex h-[38px] px-3.5 items-center justify-center gap-2 rounded-[3px] bg-[#1B4D32] text-[#F8F5EA] text-[11px] font-semibold tracking-[0.05em] uppercase cursor-pointer"
            >
              <span>LOG IN</span>
              <ArrowRight size={14} />
            </Link>
          )}
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
            {isAuthenticated && user ? (
              <div className="mt-4 pt-3 border-t border-[#E8DCC9] flex flex-col gap-2">
                <div className="flex items-center gap-3 py-1">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#134D39] text-[#FFFFFF] flex items-center justify-center font-display font-semibold text-[15px]">
                    {user.initials || "AS"}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-[15px] text-[#201B15]">
                      {user.fullName || "Aarav Sharma"}
                    </span>
                    <span className="font-body text-[12px] text-[#898984]">
                      {user.email || "aarav@example.com"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <Link
                    href="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-2 px-1 text-[14px] font-medium text-[#292722] hover:text-[#134D39]"
                  >
                    <Calendar size={18} className="text-[#134D39]" />
                    <span>My Bookings</span>
                  </Link>
                  <Link
                    href="/account/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-2 px-1 text-[14px] font-medium text-[#292722] hover:text-[#134D39]"
                  >
                    <User size={18} className="text-[#134D39]" />
                    <span>My Profile</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                    className="flex items-center gap-2.5 py-2 px-1 text-[14px] font-medium text-[#78716C] hover:text-[#C53030] text-left cursor-pointer"
                  >
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

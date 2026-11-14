"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      aria-label="Site Footer"
      className="relative w-full bg-[#1B4D32] text-[#F8F5EA] overflow-hidden"
    >
      {/* Upper Footer Container */}
      <div className="mx-auto w-full max-w-[1440px] pt-[28px] sm:pt-[36px] xl:pt-[22px] pb-[40px] px-6 sm:px-10 lg:px-12 xl:pl-[70px] xl:pr-[70px]">
        {/* --- 1. Desktop Layout (xl: >= 1200px) --- */}
        <div className="hidden xl:flex flex-row items-start justify-between gap-[24px] 2xl:gap-[29px] w-full">
          {/* Column 1: Brand & Social Links */}
          <div className="w-[430px] flex flex-col items-center gap-2 text-center shrink-0">
            {/* Logo artwork */}
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-95"
              aria-label="Valencia Home"
            >
              <div className="relative w-[280px] h-[192px]">
                <Image
                  src="/images/logo/logo-artwork.png"
                  alt="Valencia - A Luxury Boutique Hotel"
                  fill
                  sizes="280px"
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Brand Statement */}
            <h3 className="w-full max-w-[420px] font-display font-normal text-[31px] leading-[35px] text-[#F8F5EA] text-center">
              Where Elegance
              <br />
              Feels Like Home.
            </h3>

            {/* Tagline */}
            <p className="w-full max-w-[430px] font-body font-normal text-[12px] leading-[24px] text-[#F8F5EA] text-center">
              Thoughtful stays and memorable gatherings in Patna.
            </p>

            {/* Social Heading */}
            <h4 className="w-full max-w-[420px] font-body font-semibold text-[12px] leading-[24px] tracking-[0.24em] text-[#E2BA6D] text-center uppercase mt-1">
              CONNECT WITH US
            </h4>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-[17px] h-[36px] mt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[36px] h-[36px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#F8F5EA] hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-colors"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[36px] h-[36px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#F8F5EA] hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-colors"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-[36px] h-[36px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#F8F5EA] hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-colors"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    fill="currentColor"
                  ></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Gold Divider 1 */}
          <div className="w-[1px] h-[390px] bg-[#C9A96A] opacity-65 shrink-0 self-start" />

          {/* Column 2: Explore Navigation */}
          <div className="w-[230px] 2xl:w-[253px] flex flex-col items-start gap-[16px] shrink-0 text-left">
            <h4 className="w-full font-display font-normal text-[13px] leading-[30px] tracking-[0.35em] text-[#C9A96A] uppercase">
              EXPLORE
            </h4>

            <nav
              className="flex flex-col gap-[10px] w-full"
              aria-label="Footer Navigation Desktop"
            >
              <Link
                href="/"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/our-story"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="/properties"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Our Properties
              </Link>
              <Link
                href="/#rooms"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Rooms &amp; Suites
              </Link>
              <Link
                href="/#dining"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Dining
              </Link>
              <Link
                href="/#events"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Weddings &amp; Events
              </Link>
              <Link
                href="/#meetings"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Meetings
              </Link>
              <Link
                href="/#contact"
                className="font-body font-normal text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Gold Divider 2 */}
          <div className="w-[1px] h-[390px] bg-[#C9A96A] opacity-65 shrink-0 self-start" />

          {/* Column 3: Our Properties */}
          <div className="flex-1 max-w-[480px] 2xl:max-w-[505px] flex flex-col items-start gap-[9px] shrink-0 text-left">
            <h4 className="w-full font-display font-normal text-[13px] leading-[31px] tracking-[0.32em] text-[#C9A96A] uppercase">
              OUR PROPERTIES
            </h4>

            {/* Property 1: VALENCIA */}
            <div className="w-full flex flex-col items-start gap-[2px]">
              <h5 className="font-display font-normal text-[28px] leading-[35px] text-[#F8F5EA]">
                VALENCIA
              </h5>
              <p className="font-display font-normal text-[16px] leading-[24px] text-[#F8F5EA]">
                Luxury Boutique Hotel · Patna
              </p>
              <div className="flex items-center gap-[9px] mt-0.5">
                <MapPin size={17} className="text-[#C9A96A] stroke-[1.5] shrink-0" />
                <span className="font-body font-normal text-[14px] leading-[24px] text-[#F8F5EA]">
                  Address &amp; phone: to be confirmed
                </span>
              </div>
            </div>

            {/* Gold divider */}
            <div className="w-full max-w-[505px] h-[1px] bg-[#C9A96A] opacity-65 my-1" />

            {/* Property 2: Umrao The Banquet */}
            <div className="w-full flex flex-col items-start gap-[2px]">
              <h5 className="font-display font-normal text-[28px] leading-[35px] text-[#F8F5EA]">
                Umrao The Banquet
              </h5>
              <p className="font-display font-normal text-[16px] leading-[24px] text-[#F8F5EA]">
                Zero Mile, Masaurhi Road, Patna 800007
              </p>
              <div className="flex items-center gap-[9px] mt-0.5">
                <MapPin size={17} className="text-[#C9A96A] stroke-[1.5] shrink-0" />
                <span className="font-body font-normal text-[14px] leading-[24px] text-[#F8F5EA]">
                  Phone: to be confirmed
                </span>
              </div>
            </div>

            {/* Gold divider */}
            <div className="w-full max-w-[505px] h-[1px] bg-[#C9A96A] opacity-65 my-1" />

            {/* Property 3: Hotel Jia International */}
            <div className="w-full flex flex-col items-start gap-[2px]">
              <h5 className="font-display font-normal text-[28px] leading-[35px] text-[#F8F5EA]">
                Hotel Jia International
              </h5>
              <p className="font-display font-normal text-[16px] leading-[24px] text-[#F8F5EA]">
                Fraser Road, opposite Buddha Smriti Park, Patna
              </p>
              <div className="flex items-center gap-[9px] mt-0.5">
                <MapPin size={17} className="text-[#C9A96A] stroke-[1.5] shrink-0" />
                <span className="font-body font-normal text-[14px] leading-[24px] text-[#F8F5EA]">
                  Phone: to be confirmed
                </span>
              </div>
            </div>

            {/* Contact us link */}
            <Link
              href="/#contact"
              className="group flex items-center gap-[14px] pt-2 text-[#C9A96A] hover:text-[#d8bc80] transition-colors"
            >
              <span className="font-body font-semibold text-[12px] leading-[24px] tracking-[0.22em] uppercase">
                CONTACT US
              </span>
              <ArrowRight
                size={18}
                className="text-[#C9A96A] stroke-[1.8] group-hover:translate-x-1 transition-transform shrink-0"
              />
            </Link>
          </div>
        </div>

        {/* --- 2. Tablet & Mobile Layout (< 1200px) --- */}
        <div className="flex xl:hidden flex-col items-center gap-8 md:gap-10 w-full">
          {/* Brand & Social Links */}
          <div className="w-full max-w-[500px] flex flex-col items-center gap-2.5 text-center">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-95"
              aria-label="Valencia Home"
            >
              <div className="relative w-[240px] sm:w-[280px] h-[160px] sm:h-[192px]">
                <Image
                  src="/images/logo/logo-artwork.png"
                  alt="Valencia - A Luxury Boutique Hotel"
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-contain"
                />
              </div>
            </Link>

            <h3 className="font-display font-normal text-[26px] sm:text-[30px] leading-[34px] text-[#F8F5EA]">
              Where Elegance
              <br />
              Feels Like Home.
            </h3>

            <p className="font-body font-normal text-[13px] sm:text-[14px] leading-[22px] text-[#F8F5EA] max-w-[380px]">
              Thoughtful stays and memorable gatherings in Patna.
            </p>

            <h4 className="font-body font-semibold text-[12px] leading-[24px] tracking-[0.24em] text-[#E2BA6D] uppercase mt-2">
              CONNECT WITH US
            </h4>

            <div className="flex items-center justify-center gap-[17px] h-[36px] mt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[36px] h-[36px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#F8F5EA] hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[36px] h-[36px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#F8F5EA] hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-[36px] h-[36px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#F8F5EA] hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon
                    points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                    fill="currentColor"
                  ></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Divider between Brand and Lower Navigation / Properties */}
          <div className="w-full max-w-[700px] h-[1px] bg-[#C9A96A]/30" />

          {/* Tablet & Mobile: Explore & Properties side-by-side on tablet (md), stacked on mobile */}
          <div className="w-full max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
            {/* Column 2: Explore Navigation */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3.5">
              <h4 className="font-display font-normal text-[13px] leading-[30px] tracking-[0.35em] text-[#C9A96A] uppercase">
                EXPLORE
              </h4>

              <nav
                className="flex flex-col gap-2.5 w-full"
                aria-label="Footer Navigation Tablet"
              >
                <Link
                  href="/"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/our-story"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/properties"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Our Properties
                </Link>
                <Link
                  href="/#rooms"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Rooms &amp; Suites
                </Link>
                <Link
                  href="/#dining"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Dining
                </Link>
                <Link
                  href="/#events"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Weddings &amp; Events
                </Link>
                <Link
                  href="/#meetings"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Meetings
                </Link>
                <Link
                  href="/#contact"
                  className="font-body font-normal text-[15px] sm:text-[16px] leading-[25px] text-[#F8F5EA] hover:text-[#C9A96A] transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Column 3: Our Properties */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3.5">
              <h4 className="font-display font-normal text-[13px] leading-[31px] tracking-[0.32em] text-[#C9A96A] uppercase">
                OUR PROPERTIES
              </h4>

              {/* Property 1: VALENCIA */}
              <div className="w-full flex flex-col items-center md:items-start gap-1">
                <h5 className="font-display font-normal text-[24px] sm:text-[26px] leading-[32px] text-[#F8F5EA]">
                  VALENCIA
                </h5>
                <p className="font-display font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#F8F5EA]">
                  Luxury Boutique Hotel · Patna
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <MapPin size={16} className="text-[#C9A96A] stroke-[1.5] shrink-0" />
                  <span className="font-body font-normal text-[13px] sm:text-[14px] leading-[22px] text-[#F8F5EA]">
                    Address &amp; phone: to be confirmed
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#C9A96A]/40 my-1" />

              {/* Property 2: Umrao The Banquet */}
              <div className="w-full flex flex-col items-center md:items-start gap-1">
                <h5 className="font-display font-normal text-[24px] sm:text-[26px] leading-[32px] text-[#F8F5EA]">
                  Umrao The Banquet
                </h5>
                <p className="font-display font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#F8F5EA]">
                  Zero Mile, Masaurhi Road, Patna 800007
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <MapPin size={16} className="text-[#C9A96A] stroke-[1.5] shrink-0" />
                  <span className="font-body font-normal text-[13px] sm:text-[14px] leading-[22px] text-[#F8F5EA]">
                    Phone: to be confirmed
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-[#C9A96A]/40 my-1" />

              {/* Property 3: Hotel Jia International */}
              <div className="w-full flex flex-col items-center md:items-start gap-1">
                <h5 className="font-display font-normal text-[24px] sm:text-[26px] leading-[32px] text-[#F8F5EA]">
                  Hotel Jia International
                </h5>
                <p className="font-display font-normal text-[15px] sm:text-[16px] leading-[22px] text-[#F8F5EA]">
                  Fraser Road, opposite Buddha Smriti Park, Patna
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <MapPin size={16} className="text-[#C9A96A] stroke-[1.5] shrink-0" />
                  <span className="font-body font-normal text-[13px] sm:text-[14px] leading-[22px] text-[#F8F5EA]">
                    Phone: to be confirmed
                  </span>
                </div>
              </div>

              {/* Contact us link */}
              <Link
                href="/#contact"
                className="group flex items-center gap-3 pt-2 text-[#C9A96A] hover:text-[#d8bc80] transition-colors"
              >
                <span className="font-body font-semibold text-[12px] leading-[24px] tracking-[0.22em] uppercase">
                  CONTACT US
                </span>
                <ArrowRight
                  size={16}
                  className="text-[#C9A96A] stroke-[1.8] group-hover:translate-x-1 transition-transform shrink-0"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Policies & Back to top */}
      <div className="w-full border-t border-[#C9A96A]/20">
        <div className="mx-auto w-full max-w-[1440px] min-h-[64px] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 lg:pl-[48px] lg:pr-[34px] py-4 gap-4 text-center sm:text-left">
          {/* Copyright */}
          <p className="font-body font-normal text-[12px] leading-[24px] text-[#F8F5EA]">
            © 2026 VALENCIA. All rights reserved.
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 font-body font-normal text-[12px] leading-[24px] text-[#F8F5EA]">
            <Link href="#privacy" className="hover:text-[#C9A96A] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#C9A96A]/60">·</span>
            <Link href="#terms" className="hover:text-[#C9A96A] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-[#C9A96A]/60">·</span>
            <Link href="#cancellation" className="hover:text-[#C9A96A] transition-colors">
              Booking &amp; Cancellation
            </Link>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-[30px] h-[30px] rounded-full border border-[#C9A96A] flex items-center justify-center text-[#C9A96A] hover:bg-[#C9A96A]/15 hover:border-[#E2BA6D] hover:text-[#E2BA6D] transition-all cursor-pointer shrink-0"
          >
            <ArrowUp size={16} className="stroke-[1.6]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="w-[18px] h-[18px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="w-[18px] h-[18px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03.34-1.73 1.76-1.73H17.5V2.21C16.88 2.13 15.77 2 14.47 2 11.75 2 9.89 3.66 9.89 6.7v2.8H7v4h2.89V22h4.11v-8.5z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        className="w-[18px] h-[18px]"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.24 26.24 0 0 0 2 12a26.24 26.24 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.24 26.24 0 0 0 22 12a26.24 26.24 0 0 0-.42-4.81zM10 15V9l5.2 3L10 15z" />
      </svg>
    ),
  },
];

export default function FooterBrand() {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* Brand Header: Crest + Wordmark + Subtitle */}
      <Link
        href="/"
        className="inline-flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]"
        aria-label="Valencia - A Luxury Boutique Hotel"
      >
        {/* Crest Emblem */}
        <div className="relative w-[122px] sm:w-[135px] h-[74px] sm:h-[82px]">
          <Image
            src="/images/Footer/valencia-crest-trans.png"
            alt="Valencia Crest"
            fill
            sizes="(max-width: 640px) 122px, 135px"
            className="object-contain object-center"
            priority={false}
          />
        </div>

        {/* VALENCIA Wordmark */}
        <span
          className="uppercase tracking-[0.1em] font-normal"
          style={{
            fontFamily: "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: "41.26px",
            lineHeight: "120%",
            letterSpacing: "0.1em",
            color: "#FAF9FA",
          }}
        >
          VALENCIA
        </span>

        {/* A LUXURY BOUTIQUE HOTEL with decorative rules */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-1.5 w-full">
          <span className="inline-block w-7 sm:w-10 h-[1px] bg-[#C9A96A] opacity-80" />
          <span
            className="uppercase whitespace-nowrap"
            style={{
              fontFamily: "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
              fontWeight: 500,
              fontSize: "9.87px",
              lineHeight: "120%",
              letterSpacing: "0.18em",
              color: "#C9A96A",
            }}
          >
            A LUXURY BOUTIQUE HOTEL
          </span>
          <span className="inline-block w-7 sm:w-10 h-[1px] bg-[#C9A96A] opacity-80" />
        </div>
      </Link>

      {/* Where Elegance Feels Like Home. */}
      <h2
        className="mt-2.5 sm:mt-3 mb-1"
        style={{
          fontFamily: "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
          fontWeight: 400,
          fontSize: "31px",
          lineHeight: "35px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#F8F5EA",
        }}
      >
        Where Elegance
        <br />
        Feels Like Home.
      </h2>

      {/* Thoughtful stays and memorable gatherings in Patna. */}
      <p
        className="px-2"
        style={{
          fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "20px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#F8F5EA",
        }}
      >
        Thoughtful stays and memorable gatherings in Patna.
      </p>

      {/* CONNECT WITH US */}
      <div className="mt-2.5 sm:mt-3">
        <p
          className="uppercase mb-1.5 sm:mb-2"
          style={{
            fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            lineHeight: "20px",
            letterSpacing: "0.24em",
            textAlign: "center",
            color: "#E2BA6D",
          }}
        >
          CONNECT WITH US
        </p>

        {/* 3 Outlined Gold Circular Social Buttons */}
        <div className="flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-[#E2BA6D] flex items-center justify-center text-[#E2BA6D] transition-all duration-300 hover:border-[#FAF4EB] hover:text-[#FAF4EB] hover:scale-105"
            >
              <span className="scale-85 flex items-center justify-center">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

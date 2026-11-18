"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowDownIcon } from "./DiningIcons";

export default function DiningHero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="dining-hero" id="hero" aria-label="Dining at Valencia Hero">
      {/* Background Image */}
      <div className="dining-hero-bg" aria-hidden="true">
        <Image
          src="/images/DiningPage/Hero.png"
          alt="Dining at Valencia restaurant setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Luxury Gradient Overlay matching Figma */}
      <div className="dining-hero-overlay" aria-hidden="true" />

      {/* Foreground Content */}
      <div className="dining-hero-inner">
        <div className="dining-hero-content">
          {/* Breadcrumb: Home / Dining */}
          <nav aria-label="Breadcrumb" className="dining-hero-breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-1.5 opacity-80">/</span>
            <span>Dining</span>
          </nav>

          {/* Eyebrow */}
          <p className="dining-hero-eyebrow">DINING AT VALENCIA</p>

          {/* Title - exactly 2 lines */}
          <h1 className="dining-hero-title">
            A table worth<br />
            coming together for.
          </h1>

          {/* Subtitle - exactly 2 lines */}
          <p className="dining-hero-subtitle">
            Thoughtfully crafted flavours, warm hospitality<br />
            and moments to savour.
          </p>

          {/* CTA Actions */}
          <div className="dining-hero-actions">
            <a
              href="#reservation"
              onClick={scrollTo("reservation")}
              className="btn-hero-reserve"
              aria-label="Reserve a table at Valencia"
            >
              <span>RESERVE A TABLE</span>
              <ArrowRightIcon className="w-[18px] h-[18px]" strokeWidth={1.8} />
            </a>

            <a
              href="#dining-experience"
              onClick={scrollTo("dining-experience")}
              className="btn-hero-explore"
              aria-label="Explore Dining"
            >
              <span>EXPLORE DINING</span>
              <ArrowDownIcon className="w-[18px] h-[18px]" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

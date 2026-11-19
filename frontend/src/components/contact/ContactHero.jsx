"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactHero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="contact-hero" aria-label="Contact Hero">
      {/* Background Hero Image */}
      <div className="contact-hero-bg">
        <Image
          src="/images/ContactPage/hero.png"
          alt="Valencia Hotel Reception"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Deep brown gradient overlay on left */}
      <div className="contact-hero-overlay" aria-hidden="true" />

      {/* Hero Inner Content */}
      <div className="contact-hero-inner">
        {/* Breadcrumb */}
        <div className="contact-hero-breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-1.5 opacity-80">/</span>
          <span>Contact</span>
        </div>

        {/* Copy */}
        <div className="contact-hero-copy">
          <span className="contact-hero-eyebrow">GET IN TOUCH</span>
          <h1 className="contact-hero-heading">
            We’d love to hear
            <br />
            from you.
          </h1>
          <p className="contact-hero-description">
            For stays, celebrations, dining or business gatherings, connect with the right team across our properties.
          </p>
        </div>

        {/* Actions */}
        <div className="contact-hero-actions">
          <a
            href="#enquiry"
            onClick={scrollTo("enquiry")}
            className="contact-hero-btn-primary"
          >
            <span>SEND AN ENQUIRY</span>
            <span className="arrow-down">↓</span>
          </a>
          <a
            href="#properties"
            onClick={scrollTo("properties")}
            className="contact-hero-btn-secondary"
          >
            <span>FIND OUR PROPERTIES</span>
            <span className="arrow-down">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

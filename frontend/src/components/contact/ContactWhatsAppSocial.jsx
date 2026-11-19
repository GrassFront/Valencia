"use client";

import Image from "next/image";

export default function ContactWhatsAppSocial() {
  return (
    <section className="contact-social-section" aria-label="WhatsApp and Social">
      {/* Background Architectural Illustration (image 118 / behind.png) */}
      <div className="contact-social-bg-image" aria-hidden="true">
        <Image
          src="/images/ContactPage/behind.png"
          alt="Palace Architectural Drawing"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority={false}
        />
      </div>

      <div className="contact-social-inner">
        {/* WhatsApp Column (Left) */}
        <div className="contact-wa-col">
          <span className="contact-wa-eyebrow">A CONVERSATION AWAY</span>
          <h2 className="contact-wa-heading">Prefer to message us?</h2>
          <p className="contact-wa-desc">
            Ask about stays, dining or celebrations on WhatsApp.
          </p>

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-wa-btn"
          >
            <div className="contact-wa-btn-icon">
              <Image
                src="/images/ContactPage/Conversation Away/WhatsApp icon.svg"
                alt="WhatsApp"
                width={45}
                height={40}
              />
            </div>
            <span className="contact-wa-btn-text">CHAT ON WHATSAPP</span>
            <span className="contact-wa-btn-arrow" aria-hidden="true">→</span>
          </a>

          <p className="contact-wa-awaiting">WhatsApp contact awaiting confirmation.</p>
        </div>

        {/* Vertical Gold Divider (height 434px) */}
        <div className="contact-social-vertical-rule" aria-hidden="true" />

        {/* Social Column (Right) */}
        <div className="contact-social-col">
          <span className="contact-social-eyebrow">STAY CONNECTED</span>
          <h3 className="contact-social-heading">
            A little closer to
            <br />
            VALENCIA.
          </h3>
          <p className="contact-social-desc">
            Follow our stories and share your experience.
          </p>

          {/* Social Links Row */}
          <div className="contact-social-links">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link-item"
            >
              <div className="contact-social-circle">
                <Image
                  src="/images/ContactPage/Conversation Away/INSTAGRAM circle.svg"
                  alt="Instagram"
                  width={78}
                  height={78}
                />
              </div>
              <span className="contact-social-label">INSTAGRAM</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link-item"
            >
              <div className="contact-social-circle">
                <Image
                  src="/images/ContactPage/Conversation Away/FACEBOOK circle.svg"
                  alt="Facebook"
                  width={78}
                  height={78}
                />
              </div>
              <span className="contact-social-label">FACEBOOK</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link-item"
            >
              <div className="contact-social-circle">
                <Image
                  src="/images/ContactPage/Conversation Away/YOUTUBE circle.svg"
                  alt="YouTube"
                  width={78}
                  height={78}
                />
              </div>
              <span className="contact-social-label">YOUTUBE</span>
            </a>
          </div>

          {/* Horizontal Gold Rule */}
          <div className="contact-social-horizontal-rule" aria-hidden="true" />

          {/* Read Guest Reviews */}
          <a
            href="https://tripadvisor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-reviews-link"
          >
            <span>READ GUEST REVIEWS ↗</span>
          </a>

          <p className="contact-social-awaiting">
            Official social and review links to be confirmed.
          </p>
        </div>
      </div>

      {/* Gold bottom border */}
      <div className="contact-social-bottom-border" aria-hidden="true" />
    </section>
  );
}

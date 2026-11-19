"use client";

import Image from "next/image";

export default function ContactProperties({ onSelectProperty }) {
  const handleEnquiryClick = (propertyName) => (e) => {
    e.preventDefault();
    if (onSelectProperty) {
      onSelectProperty(propertyName);
    }
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="properties" className="contact-properties" aria-label="Our Properties">
      <div className="contact-properties-inner">
        {/* Section Heading */}
        <div className="contact-properties-heading">
          <span className="contact-properties-eyebrow">— OUR PROPERTIES —</span>
          <h2 className="contact-properties-title">Connect with the right team.</h2>
          <p className="contact-properties-desc">
            Choose a property for your stay, celebration or enquiry.
          </p>
        </div>

        {/* 3 Property Cards with Exact Parallel Row Alignment */}
        <div className="contact-properties-cards">
          {/* Card 1: VALENCIA */}
          <div className="contact-prop-card">
            {/* Title Row - exactly 50px */}
            <div className="contact-prop-title-row">
              <h3 className="contact-prop-name valencia-brand">VALENCIA</h3>
            </div>

            {/* Subtitle Row - exactly 22px */}
            <div className="contact-prop-sub-row">
              <span className="contact-prop-tag">LUXURY BOUTIQUE HOTEL</span>
            </div>

            {/* Details Rows with Fixed Parallel Heights */}
            <div className="contact-prop-details">
              {/* Row 1: Address - exactly 58px */}
              <div className="contact-prop-row address-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/mapIcon.svg"
                    alt="Address"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="contact-prop-text">
                  24 Heritage Avenue, Bailey Road Patna,
                  <br />
                  Bihar 800014
                </p>
              </div>

              {/* Row 2: Phone - exactly 42px */}
              <div className="contact-prop-row phone-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/callIcon.svg"
                    alt="Phone"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="tel:+910000000000"
                  className="contact-prop-text phone-text hover:text-[#0B3828] transition-colors"
                >
                  +91 00000 00000
                </a>
              </div>

              {/* Row 3: Email - exactly 42px */}
              <div className="contact-prop-row mail-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/MailIcon.svg"
                    alt="Email"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="mailto:stay@valencia.example"
                  className="contact-prop-text hover:text-[#0B3828] transition-colors"
                >
                  stay@valencia.example
                </a>
              </div>

              {/* Row 4: Hours - exactly 42px */}
              <div className="contact-prop-row hours-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/ClockIcon.svg"
                    alt="Hours"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="contact-prop-text">Daily 9:00 AM - 9:00 PM</p>
              </div>
            </div>

            {/* SEND AN ENQUIRY Button - exactly 48px, parallel position across all 3 cards */}
            <button
              type="button"
              onClick={handleEnquiryClick("Valencia")}
              className="contact-prop-btn"
            >
              <span>SEND AN ENQUIRY</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>

            {/* Spacer matching the 29px directions link in Cards 2 & 3 */}
            <div className="contact-prop-directions-spacer" aria-hidden="true" />
          </div>

          {/* Card 2: Umrao The Banquet */}
          <div className="contact-prop-card">
            {/* Title Row - exactly 50px */}
            <div className="contact-prop-title-row">
              <h3 className="contact-prop-name">Umrao The Banquet</h3>
            </div>

            {/* Subtitle Row - exactly 22px */}
            <div className="contact-prop-sub-row">
              <span className="contact-prop-tag">WEDDINGS &amp; EVENTS</span>
            </div>

            {/* Details Rows with Fixed Parallel Heights */}
            <div className="contact-prop-details">
              {/* Row 1: Address - exactly 58px */}
              <div className="contact-prop-row address-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/mapIcon.svg"
                    alt="Address"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="contact-prop-text">
                  Zero Mile, Masaurhi Road,
                  <br />
                  Patna 800007
                </p>
              </div>

              {/* Row 2: Phone - exactly 42px */}
              <div className="contact-prop-row phone-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/callIcon.svg"
                    alt="Phone"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="tel:+910000000002"
                  className="contact-prop-text phone-text hover:text-[#0B3828] transition-colors"
                >
                  +91 00000 00002
                </a>
              </div>

              {/* Row 3: Email - exactly 42px */}
              <div className="contact-prop-row mail-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/MailIcon.svg"
                    alt="Email"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="mailto:events@umrao.example"
                  className="contact-prop-text hover:text-[#0B3828] transition-colors"
                >
                  events@umrao.example
                </a>
              </div>

              {/* Row 4: Hours - exactly 42px */}
              <div className="contact-prop-row hours-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/ClockIcon.svg"
                    alt="Hours"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="contact-prop-text">Daily 10:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* SEND AN ENQUIRY Button - exactly 48px, parallel position */}
            <button
              type="button"
              onClick={handleEnquiryClick("Umrao The Banquet")}
              className="contact-prop-btn"
            >
              <span>SEND AN ENQUIRY</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>

            {/* GET DIRECTIONS Link - exactly 29px */}
            <a
              href="https://maps.google.com/?q=Zero+Mile+Masaurhi+Road+Patna+800007"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-prop-directions-link"
            >
              <span className="directions-icon" aria-hidden="true">◇</span>
              <span>GET DIRECTIONS</span>
              <span className="directions-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Card 3: Hotel Jia International */}
          <div className="contact-prop-card">
            {/* Title Row - exactly 50px */}
            <div className="contact-prop-title-row">
              <h3 className="contact-prop-name">Hotel Jia International</h3>
            </div>

            {/* Subtitle Row - exactly 22px */}
            <div className="contact-prop-sub-row">
              <span className="contact-prop-tag">CITY HOTEL</span>
            </div>

            {/* Details Rows with Fixed Parallel Heights */}
            <div className="contact-prop-details">
              {/* Row 1: Address - exactly 58px */}
              <div className="contact-prop-row address-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/mapIcon.svg"
                    alt="Address"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="contact-prop-text">
                  Fraser Road, opposite Buddha
                  <br />
                  Smriti Park, Patna
                </p>
              </div>

              {/* Row 2: Phone - exactly 42px */}
              <div className="contact-prop-row phone-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/callIcon.svg"
                    alt="Phone"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="tel:+910000000003"
                  className="contact-prop-text phone-text hover:text-[#0B3828] transition-colors"
                >
                  +91 00000 00003
                </a>
              </div>

              {/* Row 3: Email - exactly 42px */}
              <div className="contact-prop-row mail-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/MailIcon.svg"
                    alt="Email"
                    width={28}
                    height={28}
                  />
                </div>
                <a
                  href="mailto:stay@hoteljia.example"
                  className="contact-prop-text hover:text-[#0B3828] transition-colors"
                >
                  stay@hoteljia.example
                </a>
              </div>

              {/* Row 4: Hours - exactly 42px */}
              <div className="contact-prop-row hours-row">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/ClockIcon.svg"
                    alt="Hours"
                    width={28}
                    height={28}
                  />
                </div>
                <p className="contact-prop-text">Front desk Open 24 hours</p>
              </div>
            </div>

            {/* SEND AN ENQUIRY Button - exactly 48px, parallel position */}
            <button
              type="button"
              onClick={handleEnquiryClick("Hotel Jia International")}
              className="contact-prop-btn"
            >
              <span>SEND AN ENQUIRY</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>

            {/* GET DIRECTIONS Link - exactly 29px */}
            <a
              href="https://maps.google.com/?q=Hotel+Jia+International+Fraser+Road+Patna"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-prop-directions-link"
            >
              <span className="directions-icon" aria-hidden="true">◇</span>
              <span>GET DIRECTIONS</span>
              <span className="directions-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

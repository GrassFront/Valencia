"use client";

import Image from "next/image";

export default function EventsOffer({ onOfferClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onOfferClick) {
      onOfferClick();
    } else {
      const formEl = document.getElementById("event-enquiry");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="events-offer-section" aria-label="Wedding Offer - More Room to Celebrate">
      <div className="events-offer-inner">
        {/* Left Column: Offer Content */}
        <div className="events-offer-content">
          {/* Eyebrow */}
          <div className="events-offer-eyebrow-row">
            <div className="events-offer-gold-rule" aria-hidden="true" />
            <span className="events-offer-eyebrow">MORE ROOM TO CELEBRATE</span>
          </div>

          {/* Title */}
          <h2 className="events-offer-title">
            One celebration.<br />
            Many beautiful moments.
          </h2>

          {/* Subhead */}
          <h3 className="events-offer-subhead">
            A little extra space for your wedding story.
          </h3>

          {/* Description */}
          <p className="events-offer-desc">
            Book the Main Hall and enjoy a complimentary<br className="hidden sm:inline" /> Small Hall for your pre-wedding functions.*
          </p>

          {/* Pre-wedding functions bullet list */}
          <div className="events-offer-list">
            Engagement • Haldi • Mehndi • Sangeet
          </div>

          {/* CTA Button */}
          <a
            href="#event-enquiry"
            onClick={handleClick}
            className="events-offer-btn group"
          >
            <span className="events-offer-btn-text">ENQUIRE ABOUT THE OFFER</span>
            <span className="events-offer-btn-arrow transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>

          {/* Disclaimer */}
          <p className="events-offer-disclaimer">
            *Proposed offer. Wording and eligibility are subject to confirmation.
          </p>
        </div>

        {/* Right Column: Pre-wedding Celebration Image */}
        <div className="events-offer-image-wrapper">
          <Image
            src="/images/EventPage/moreRoom.png"
            alt="Pre-wedding celebration floral decor and seating setup"
            width={714}
            height={484}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

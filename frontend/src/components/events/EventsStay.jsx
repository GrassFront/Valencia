"use client";

import Image from "next/image";
import Link from "next/link";

const STAY_OPTIONS = [
  {
    id: "umrao",
    name: "Umrao The Banquet",
    tag: "AT THE EVENT VENUE",
    desc: "Ask about rooms for guests attending your event.",
    href: "/umrao",
    icon: "/images/EventPage/Stay for celebration/Frame.svg",
  },
  {
    id: "valencia",
    name: "VALENCIA",
    tag: "LUXURY BOUTIQUE STAY",
    desc: "Explore a refined stay for family and wedding guests.",
    href: "/valencia",
    icon: "/images/EventPage/Stay for celebration/Frame 2.svg",
  },
  {
    id: "jia",
    name: "Hotel Jia International",
    tag: "CITY STAY",
    desc: "A practical accommodation option in central Patna.",
    href: "/hotel-jia",
    icon: "/images/EventPage/Stay for celebration/Frame 3.svg",
  },
];

export default function EventsStay({ onStayEnquireClick }) {
  const handleEnquireStays = (e) => {
    e.preventDefault();
    if (onStayEnquireClick) {
      onStayEnquireClick();
    } else {
      const formEl = document.getElementById("event-enquiry");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="events-stay-section" aria-label="Stay for the Celebration">
      <div className="events-stay-inner">
        {/* Left Column: Introduction & Bedroom Image */}
        <div className="events-stay-left">
          <div className="events-stay-left-top">
            <div className="events-stay-eyebrow">
              STAY FOR THE CELEBRATION ─────
            </div>

            <h2 className="events-stay-title">
              Keep your loved ones<br />
              close to the occasion.
            </h2>

            <p className="events-stay-desc">
              Explore accommodation at Umrao, VALENCIA and Hotel Jia<br className="hidden sm:inline" /> International for guests joining your celebration.
            </p>
          </div>

          <div className="events-stay-image-wrapper">
            <Image
              src="/images/EventPage/Stay for celebration/Guest bedroom/Native crop.png"
              alt="Luxury guest bedroom accommodation"
              width={609}
              height={316}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Accommodation Options Card */}
        <div className="events-stay-card">
          {STAY_OPTIONS.map((option, index) => (
            <div key={option.id} className="w-full flex flex-col">
              <Link href={option.href} className="events-stay-option group">
                {/* Bed Icon */}
                <div className="events-stay-icon relative">
                  <Image
                    src={option.icon}
                    alt={`${option.name} accommodation icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Option Copy */}
                <div className="events-stay-copy">
                  <h3 className="events-stay-name">{option.name}</h3>
                  <span className="events-stay-tag">{option.tag}</span>
                  <p className="events-stay-tag-desc">{option.desc}</p>
                </div>

                {/* Arrow */}
                <span className="events-stay-arrow" aria-hidden="true">
                  →
                </span>
              </Link>

              {/* Divider between items */}
              {index < STAY_OPTIONS.length - 1 && (
                <div className="events-stay-divider my-2" aria-hidden="true" />
              )}
            </div>
          ))}

          {/* Action Button */}
          <button
            type="button"
            onClick={handleEnquireStays}
            className="events-stay-btn group"
          >
            <span className="events-stay-btn-text">ENQUIRE ABOUT GUEST STAYS</span>
            <span className="events-stay-btn-arrow transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </button>

          {/* Footnote */}
          <p className="events-stay-footnote">
            Rooms, rates and availability will be confirmed by our team.
          </p>
        </div>
      </div>
    </section>
  );
}

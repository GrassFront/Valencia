"use client";

import Image from "next/image";

const SPACES_DATA = [
  {
    id: "main-hall",
    name: "The Main Hall",
    preferredOption: "The Main Hall (Approx. 8,000 sq. ft.)",
    image: "/images/EventPage/Spaces at Umrao/The Main Hall/Native image crop.png",
    icon: "/images/EventPage/Spaces at Umrao/Frame.svg",
    area: "Approx. 8,000 sq. ft.",
    desc: (
      <>
        A pillarless setting for weddings, receptions and<br className="hidden sm:inline" /> larger gatherings.
      </>
    ),
    capacity: "Guest capacity: to be confirmed",
  },
  {
    id: "the-lawn",
    name: "The Lawn",
    preferredOption: "The Lawn (17,000 sq. ft.)",
    image: "/images/EventPage/Spaces at Umrao/The Lawn/Native image crop.png",
    icon: "/images/EventPage/Spaces at Umrao/Frame 2.svg",
    area: "17,000 sq. ft.",
    desc: (
      <>
        An open-air setting for celebrations<br className="hidden sm:inline" /> under the evening sky.
      </>
    ),
    capacity: "Guest capacity: to be confirmed",
  },
  {
    id: "small-hall",
    name: "The Small Hall",
    preferredOption: "The Small Hall (2,500 sq. ft.)",
    image: "/images/EventPage/Spaces at Umrao/The Small Hall/Native image crop.png",
    icon: "/images/EventPage/Spaces at Umrao/Frame 3.svg",
    area: "2,500 sq. ft.",
    desc: (
      <>
        A welcoming space for pre-wedding functions and<br className="hidden sm:inline" /> intimate gatherings.
      </>
    ),
    capacity: "Guest capacity: to be confirmed",
  },
];

export default function EventsSpaces({ onSelectSpace }) {
  const handleEnquire = (space) => {
    if (onSelectSpace) {
      onSelectSpace(space.preferredOption);
    } else {
      const formEl = document.getElementById("event-enquiry");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="spaces" className="events-spaces-section" aria-label="Spaces at Umrao">
      <div className="events-spaces-inner">
        {/* Section Heading */}
        <div className="events-section-heading">
          <span className="events-section-eyebrow">SPACES AT UMRAO</span>
          <div className="events-gold-rule-center" aria-hidden="true" />
          <h2 className="events-section-title">The right setting for your celebration.</h2>
          <p className="events-section-subtitle">
            Explore three spaces for gatherings grand and intimate.
          </p>
        </div>

        {/* Three Venue Cards */}
        <div className="events-spaces-grid">
          {SPACES_DATA.map((space) => (
            <div key={space.id} className="events-venue-card">
              {/* Image */}
              <div className="events-venue-image-wrapper">
                <Image
                  src={space.image}
                  alt={space.name}
                  width={438}
                  height={291}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Venue Information */}
              <div className="events-venue-info">
                <h3 className="events-venue-name">{space.name}</h3>

                {/* Floor Area */}
                <div className="events-venue-area-row">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src={space.icon}
                      alt="Floor area icon"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="events-venue-area-text">{space.area}</span>
                </div>

                {/* Description */}
                <p className="events-venue-desc">{space.desc}</p>

                {/* Divider */}
                <div className="events-venue-divider" aria-hidden="true" />

                {/* Capacity */}
                <div className="events-venue-capacity">{space.capacity}</div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => handleEnquire(space)}
                  className="events-venue-btn group"
                >
                  <span className="events-venue-btn-text">ENQUIRE ABOUT THIS VENUE</span>
                  <span className="events-venue-btn-arrow transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guest capacity note */}
        <p className="events-spaces-note">
          Guest capacities will be confirmed for your preferred event layout.
        </p>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import "./css/layer-03-amenities-services.css";

const PROPOSED_AMENITIES = [
  {
    id: "wi-fi",
    title: "Wi-Fi",
    icon: "/images/Room and Suites/Frame.svg",
    alt: "High-speed Wi-Fi",
  },
  {
    id: "air-conditioning",
    title: "Air Conditioning",
    icon: "/images/Room and Suites/Frame 2.svg",
    alt: "Climate control and air conditioning",
  },
  {
    id: "in-room-dining",
    title: "In-room Dining",
    icon: "/images/Room and Suites/Frame 3.svg",
    alt: "Gourmet in-room dining service",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    icon: "/images/Room and Suites/Frame 4.svg",
    alt: "Daily housekeeping and fresh linens",
  },
  {
    id: "parking",
    title: "Parking",
    icon: "/images/Room and Suites/Frame 5.svg",
    alt: "Secure on-site parking",
  },
  {
    id: "guest-assistance",
    title: "Guest Assistance",
    icon: "/images/Room and Suites/Frame 6.svg",
    alt: "24/7 front desk and guest assistance",
  },
];

export default function AmenitiesAndServicesSection() {
  return (
    <section
      aria-label="Amenities and Services"
      className="layer-03-amenities-services"
    >
      {/* 1. Eyebrow */}
      <p className="amenities-services-eyebrow">AMENITIES &amp; SERVICES</p>

      {/* 2. Main Title */}
      <h2 className="amenities-services-headline">
        Thoughtful comforts for your stay.
      </h2>

      {/* 3. Subtitle */}
      <p className="amenities-services-subtitle">
        The details that make time away feel effortless.
      </p>

      {/* 4. Proposed Amenities Notice Badge */}
      <div className="proposed-amenities-confirmation-notice">
        <p className="proposed-amenities-subject-to">
          PROPOSED AMENITIES · SUBJECT TO CONFIRMATION
        </p>
      </div>

      {/* 5. Spacer */}
      <div className="space-before-amenity-icons" aria-hidden="true" />

      {/* 6. Six Proposed Amenities */}
      <div className="six-proposed-amenities">
        {PROPOSED_AMENITIES.map((amenity, index) => {
          const isLast = index === PROPOSED_AMENITIES.length - 1;
          return (
            <div key={amenity.id} className="amenity-column-item">
              <div className="amenity-large-icon-wrapper">
                <Image
                  src={amenity.icon}
                  alt={amenity.alt}
                  width={80}
                  height={76}
                  className="amenity-large-svg"
                  unoptimized
                />
              </div>

              <p className="amenity-column-title">{amenity.title}</p>

              {/* Vertical divider line between items (desktop) */}
              {!isLast && (
                <div className="amenity-vertical-divider" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { AmenitiesAndServicesSection as Component03AmenitiesServices };

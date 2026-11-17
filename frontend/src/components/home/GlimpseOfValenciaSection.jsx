"use client";

import Image from "next/image";
import Link from "next/link";
import "./css/layer-08-gallery-and-thoughtful-details.css";

const AMENITIES = [
  {
    id: "patna",
    name: "Patna",
    description: "Your base for work\nand leisure.",
    iconSrc: "/images/homepage/Glimps of valencia/Editable vector icon 2.svg",
    iconAlt: "Patna location icon",
  },
  {
    id: "wifi",
    name: "Wi-Fi",
    description: "Stay connected\nduring your visit.",
    iconSrc: "/images/homepage/Glimps of valencia/Editable vector icon 3.svg",
    iconAlt: "Wi-Fi icon",
  },
  {
    id: "parking",
    name: "Parking",
    description: "Convenience for\nyour arrival.",
    iconSrc: "/images/homepage/Glimps of valencia/Editable vector icon 4.svg",
    iconAlt: "Parking icon",
  },
  {
    id: "concierge",
    name: "Concierge",
    description: "Help with the details\nof your stay.",
    iconSrc: "/images/homepage/Glimps of valencia/Editable vector icon 5.svg",
    iconAlt: "Concierge icon",
  },
];

export default function GlimpseOfValenciaSection() {
  return (
    <section
      aria-label="A Glimpse of Valencia"
      className="layer-08-gallery-and-thoughtful-details"
    >
      <div className="layer-08-gallery-container">
        {/* 1. Header Row */}
        <div className="gallery-heading">
          <div className="gallery-introduction">
            <p className="eyebrow">A GLIMPSE OF VALENCIA</p>
            <h2 className="title">Beauty in every detail.</h2>
            <p className="subtitle">
              Explore the spaces, textures and thoughtful touches that shape your stay.
            </p>
          </div>

          <Link href="/valencia#rooms" className="button-full-gallery">
            <span className="label">VIEW ALL ROOMS</span>
            <div className="editable-vector-icon" aria-hidden="true">
              <Image
                src="/images/homepage/Glimps of valencia/Editable vector icon.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </Link>
        </div>

        {/* 2. Gallery Mosaic */}
        <div className="gallery-mosaic-auto-layout">
          {/* Left Large Photo: The Lobby */}
          <div className="the-lobby gallery-card">
            <div className="gallery-photo-wrapper">
              <Image
                src="/images/homepage/Glimps of valencia/The Lobby/Cropped photograph.png"
                alt="The Lobby"
                fill
                sizes="(max-width: 992px) 100vw, 443px"
                className="gallery-image"
              />
            </div>
            <div className="label-contrast-gradient" aria-hidden="true" />
            <p className="editable-photo-label">The Lobby</p>
          </div>

          {/* Right Column Grid */}
          <div className="gallery-right-column">
            {/* Top Row: Rooms & Suites + Dining */}
            <div className="rooms-and-dining">
              <div className="rooms-suites gallery-card">
                <div className="gallery-photo-wrapper">
                  <Image
                    src="/images/homepage/Glimps of valencia/Rooms & Suites/Cropped photograph.png"
                    alt="Rooms & Suites"
                    fill
                    sizes="(max-width: 992px) 50vw, 429px"
                    className="gallery-image"
                  />
                </div>
                <div className="label-contrast-gradient" aria-hidden="true" />
                <p className="editable-photo-label">Rooms &amp; Suites</p>
              </div>

              <div className="dining gallery-card">
                <div className="gallery-photo-wrapper">
                  <Image
                    src="/images/homepage/Glimps of valencia/Dining/Cropped photograph.png"
                    alt="Dining"
                    fill
                    sizes="(max-width: 992px) 50vw, 420px"
                    className="gallery-image"
                  />
                </div>
                <div className="label-contrast-gradient" aria-hidden="true" />
                <p className="editable-photo-label">Dining</p>
              </div>
            </div>

            {/* Bottom Row: Architectural Details + Quiet Corners + A Warm Welcome */}
            <div className="architectural-details-and-spaces">
              <div className="architectural-details gallery-card">
                <div className="gallery-photo-wrapper">
                  <Image
                    src="/images/homepage/Glimps of valencia/Architectural Details/Cropped photograph.png"
                    alt="Architectural Details"
                    fill
                    sizes="(max-width: 992px) 33vw, 251px"
                    className="gallery-image"
                  />
                </div>
                <div className="label-contrast-gradient" aria-hidden="true" />
                <p className="editable-photo-label">Architectural Details</p>
              </div>

              <div className="quiet-corners gallery-card">
                <div className="gallery-photo-wrapper">
                  <Image
                    src="/images/homepage/Glimps of valencia/Quiet Corners/Cropped photograph.png"
                    alt="Quiet Corners"
                    fill
                    sizes="(max-width: 992px) 33vw, 278px"
                    className="gallery-image"
                  />
                </div>
                <div className="label-contrast-gradient" aria-hidden="true" />
                <p className="editable-photo-label">Quiet Corners</p>
              </div>

              <div className="a-warm-welcome gallery-card">
                <div className="gallery-photo-wrapper">
                  <Image
                    src="/images/homepage/Glimps of valencia/A Warm Welcome/Cropped photograph.png"
                    alt="A Warm Welcome"
                    fill
                    sizes="(max-width: 992px) 33vw, 310px"
                    className="gallery-image"
                  />
                </div>
                <div className="label-contrast-gradient" aria-hidden="true" />
                <p className="editable-photo-label">A Warm Welcome</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Comfort In The Details (Amenities) */}
        <div className="comfort-in-the-details">
          <div className="amenities-introduction">
            <p className="eyebrow-2">COMFORT IN THE DETAILS</p>
            <h3 className="title-2">
              Thoughtful details.<br />A comfortable stay.
            </h3>
          </div>

          <div className="vertical-gold-divider" aria-hidden="true" />

          <div className="amenities-auto-layout">
            {AMENITIES.map((item) => (
              <div key={item.id} className="amenity-card">
                <div className="amenity-icon-wrapper">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="amenity-name">{item.name}</h4>
                <p className="description">
                  {item.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

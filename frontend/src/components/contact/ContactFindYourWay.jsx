"use client";

import { useState } from "react";
import Image from "next/image";

const PROPERTIES_DATA = {
  valencia: {
    id: "valencia",
    tabLabel: "VALENCIA",
    tabClass: "tab-valencia",
    name: "VALENCIA",
    category: "LUXURY BOUTIQUE HOTEL",
    address: "24 Heritage Avenue, Bailey Road Patna, Bihar 800014",
    mapsUrl: "https://maps.google.com/?q=24+Heritage+Avenue+Bailey+Road+Patna",
    pinLabel: "Valencia",
    pinX: 380,
    pinY: 170,
  },
  umrao: {
    id: "umrao",
    tabLabel: "Umrao The Banquet",
    tabClass: "tab-umrao",
    name: "Umrao The Banquet",
    category: "WEDDINGS & EVENTS",
    address: "Zero Mile, Masaurhi Road, Patna 800007",
    mapsUrl: "https://maps.google.com/?q=Zero+Mile+Masaurhi+Road+Patna+800007",
    pinLabel: "Umrao",
    pinX: 546,
    pinY: 200,
  },
  jia: {
    id: "jia",
    tabLabel: "Hotel Jia International",
    tabClass: "tab-jia",
    name: "Hotel Jia International",
    category: "CITY HOTEL",
    address: "Fraser Road, opposite Buddha Smriti Park, Patna",
    mapsUrl: "https://maps.google.com/?q=Hotel+Jia+International+Fraser+Road+Patna",
    pinLabel: "Hotel Jia",
    pinX: 430,
    pinY: 220,
  },
};

export default function ContactFindYourWay() {
  const [selectedProperty, setSelectedProperty] = useState("umrao");
  const [zoomLevel, setZoomLevel] = useState(1);

  const current = PROPERTIES_DATA[selectedProperty] || PROPERTIES_DATA.umrao;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.45));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));

  return (
    <section className="contact-find-way" aria-label="Find Your Way">
      <div className="contact-find-way-inner">
        {/* Header */}
        <div className="contact-find-way-header">
          <span className="contact-find-way-eyebrow">— FIND YOUR WAY —</span>
          <h2 className="contact-find-way-title">Your visit starts here.</h2>
          <p className="contact-find-way-desc">Choose a property to explore its location.</p>
        </div>

        {/* Content Container */}
        <div className="contact-find-way-container">
          {/* Property Selector Tabs */}
          <div className="contact-property-tabs" role="tablist" aria-label="Property Location Tabs">
            {Object.values(PROPERTIES_DATA).map((prop) => {
              const isActive = selectedProperty === prop.id;
              return (
                <button
                  key={prop.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedProperty(prop.id)}
                  className={`contact-prop-tab ${prop.tabClass} ${isActive ? "active" : "inactive"}`}
                >
                  {prop.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Location Details and Map Panel */}
          <div className="contact-location-panel">
            {/* Left Details Box */}
            <div className="contact-location-details">
              <h3 className="contact-location-name">{current.name}</h3>
              <span className="contact-location-cat">{current.category}</span>

              {/* Address with pin */}
              <div className="contact-location-address">
                <div className="contact-prop-icon">
                  <Image
                    src="/images/ContactPage/mapIcon.svg"
                    alt="Pin"
                    width={28}
                    height={28}
                  />
                </div>
                <p>{current.address}</p>
              </div>

              {/* Get Directions Button */}
              <a
                href={current.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-location-btn"
              >
                <span>GET DIRECTIONS</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>

              <p className="contact-location-hint">
                Open directions in your preferred map app.
              </p>
            </div>

            {/* Right Map Box */}
            <div className="contact-location-map" aria-label="Interactive stylized map">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center center",
                  transition: "transform 0.3s ease",
                }}
              >
                <svg
                  viewBox="0 0 832 383"
                  className="w-full h-full object-cover"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Soft Background */}
                  <rect width="832" height="383" fill="#F4EFE6" />

                  {/* Land Parcels / Blocks */}
                  <path d="M40 20 L210 10 L195 120 L30 110 Z" fill="#ECE4D6" opacity="0.8" />
                  <path d="M230 15 L380 10 L370 115 L220 120 Z" fill="#ECE4D6" opacity="0.65" />
                  <path d="M410 10 L620 15 L600 130 L400 120 Z" fill="#E8DFC9" opacity="0.7" />
                  <path d="M640 20 L810 25 L810 140 L625 135 Z" fill="#ECE4D6" opacity="0.75" />

                  <path d="M25 140 L190 145 L175 270 L15 250 Z" fill="#ECE4D6" opacity="0.7" />
                  <path d="M215 145 L360 140 L345 280 L200 275 Z" fill="#E8DFC9" opacity="0.7" />
                  <path d="M380 145 L580 150 L560 275 L370 280 Z" fill="#ECE4D6" opacity="0.8" />
                  <path d="M605 155 L795 160 L780 290 L590 280 Z" fill="#E8DFC9" opacity="0.65" />

                  <path d="M15 285 L170 290 L150 370 L10 365 Z" fill="#ECE4D6" opacity="0.75" />
                  <path d="M195 295 L340 300 L325 375 L180 370 Z" fill="#E8DFC9" opacity="0.7" />
                  <path d="M365 300 L550 295 L535 375 L350 375 Z" fill="#ECE4D6" opacity="0.8" />
                  <path d="M575 300 L780 310 L765 375 L560 375 Z" fill="#E8DFC9" opacity="0.7" />

                  {/* Diagonal and secondary street paths */}
                  <path d="M-20 60 L850 330" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
                  <path d="M-20 60 L850 330" stroke="#E3DAC3" strokeWidth="1" strokeDasharray="none" />

                  <path d="M120 -20 L780 400" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
                  <path d="M120 -20 L780 400" stroke="#E3DAC3" strokeWidth="1" />

                  <path d="M720 -20 L40 400" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" />
                  <path d="M720 -20 L40 400" stroke="#E3DAC3" strokeWidth="1" />

                  {/* Primary Grid Streets */}
                  <path d="M0 130 L832 135" stroke="#FFFFFF" strokeWidth="22" />
                  <path d="M0 130 L832 135" stroke="#E6DCC5" strokeWidth="1" />

                  <path d="M0 280 L832 285" stroke="#FFFFFF" strokeWidth="20" />
                  <path d="M0 280 L832 285" stroke="#E6DCC5" strokeWidth="1" />

                  <path d="M200 0 L185 383" stroke="#FFFFFF" strokeWidth="18" />
                  <path d="M370 0 L355 383" stroke="#FFFFFF" strokeWidth="18" />
                  <path d="M590 0 L575 383" stroke="#FFFFFF" strokeWidth="20" />

                  {/* Roundabouts / Intersections */}
                  <circle cx="705" cy="335" r="18" fill="#F4EFE6" stroke="#FFFFFF" strokeWidth="8" />

                  {/* Property Map Pin Marker */}
                  <g
                    transform={`translate(${current.pinX}, ${current.pinY})`}
                    style={{
                      transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  >
                    {/* Shadow */}
                    <ellipse cx="0" cy="18" rx="8" ry="3.5" fill="#233028" opacity="0.2" />

                    {/* Pin Teardrop Shape */}
                    <path
                      d="M0 -34 C-10 -34 -17 -26 -17 -16 C-17 -4 0 16 0 16 C0 16 17 -4 17 -16 C17 -26 10 -34 0 -34 Z"
                      fill="#104D34"
                    />

                    {/* Pin Center Dot */}
                    <circle cx="0" cy="-17" r="5.5" fill="#FFFFFF" />

                    {/* Pin Text Label Underneath */}
                    <text
                      x="0"
                      y="32"
                      textAnchor="middle"
                      fill="#104D34"
                      fontSize="14"
                      fontWeight="700"
                      fontFamily="var(--font-manrope), sans-serif"
                    >
                      {current.pinLabel}
                    </text>
                  </g>
                </svg>
              </div>

              {/* Zoom Buttons Controls on Bottom Right */}
              <div className="contact-map-controls">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="contact-map-zoom-btn"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="contact-map-zoom-btn"
                  aria-label="Zoom out"
                >
                  −
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

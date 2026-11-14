"use client";

import Image from "next/image";
import Link from "next/link";
import "./css/beyond-your-stay-discover-bihar.css";

const DESTINATIONS = [
  {
    id: "patna",
    name: "Patna",
    icon: "/images/homepage/beyond your stay/Landmark icon.svg",
    iconAlt: "Golghar landmark icon",
    description: "Golghar and the city’s\ncultural landmarks.",
  },
  {
    id: "nalanda",
    name: "Nalanda",
    icon: "/images/homepage/beyond your stay/Landmark icon 2.svg",
    iconAlt: "Nalanda ancient centre of learning icon",
    description: "The ruins of an ancient\ncentre of learning.",
  },
  {
    id: "bodh-gaya",
    name: "Bodh Gaya",
    icon: "/images/homepage/beyond your stay/Landmark icon 3.svg",
    iconAlt: "Mahabodhi Temple icon",
    description: "Mahabodhi Temple and its\nspiritual heritage.",
  },
];

export default function BeyondYourStaySection() {
  return (
    <section
      aria-label="Beyond Your Stay - Discover Bihar"
      className="beyond-your-stay-discover-bihar"
    >
      <div className="beyond-your-stay-container">
        {/* Left Column: Nalanda Photograph */}
        <div className="nalanda-photograph-and-caption">
          <div className="nalanda-cropped-reference">
            <Image
              src="/images/homepage/beyond your stay/Nalanda/cropped reference.png"
              alt="Nalanda ancient ruins and heritage of Bihar"
              fill
              sizes="(max-width: 992px) 100vw, 731px"
              className="nalanda-image"
              priority={false}
            />
          </div>
        </div>

        {/* Right Column: Bihar Destinations and Actions */}
        <div className="bihar-destinations-and-actions">
          {/* Eyebrow with gold rule */}
          <div className="eyebrow">
            <p className="beyond-your-stay">BEYOND YOUR STAY</p>
            <div className="rectangle" aria-hidden="true" />
          </div>

          {/* Heading */}
          <div className="heading">
            <h2 className="stay-in-patna">Stay in Patna.</h2>
            <p className="discover-bihar">Discover Bihar.</p>
          </div>

          {/* Intro Description */}
          <p className="make-valencia-your-base-in-patna-and">
            Make VALENCIA your base in Patna and discover Bihar’s<br />
            cultural landmarks, ancient learning and spiritual heritage.
          </p>

          {/* Destination List */}
          <div className="destination-list">
            {DESTINATIONS.map((dest, idx) => (
              <div key={dest.id}>
                {idx > 0 && <div className="destination-h-divider" aria-hidden="true" />}
                <div className="destination-row">
                  {/* Landmark Vector Icon */}
                  <div className="destination-icon-col">
                    <Image
                      src={dest.icon}
                      alt={dest.iconAlt}
                      width={84}
                      height={54}
                      className="object-contain object-left"
                    />
                  </div>

                  {/* Destination Name */}
                  <h3 className="destination-name">{dest.name}</h3>

                  {/* Vertical Hairline Divider */}
                  <div className="destination-v-divider" aria-hidden="true" />

                  {/* Destination Description */}
                  <div className="destination-desc-col">
                    <p className="destination-desc-text">
                      {dest.description.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore Actions */}
          <div className="explore-actions">
            <Link
              href="/properties"
              className="explore-bihar-button"
              aria-label="Explore Properties"
            >
              <span className="explore-properties">EXPLORE PROPERTIES</span>
              <div className="arrow" aria-hidden="true">
                <Image
                  src="/images/homepage/beyond your stay/Arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
            </Link>

            <Link
              href="/rooms"
              className="view-rooms-link"
              aria-label="View Rooms & Suites"
            >
              <div className="underlined-link">
                <span className="view-rooms-suites">VIEW ROOMS &amp; SUITES</span>
                <div className="rectangle-7" aria-hidden="true" />
              </div>
              <div className="arrow-2" aria-hidden="true">
                <Image
                  src="/images/homepage/beyond your stay/Arrow 2.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

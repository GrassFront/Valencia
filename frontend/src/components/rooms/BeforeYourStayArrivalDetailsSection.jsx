"use client";

import Image from "next/image";
import "./css/layer-04-before-your-stay-arrival-details.css";

const ARRIVAL_POLICY_CARDS = [
  {
    id: "check-in",
    title: "Check-in",
    description: "Check-in time will be confirmed with your booking.",
    icon: "/images/Room and Suites/before-your-stay/check-in.svg",
    alt: "Check-in clock icon",
  },
  {
    id: "check-out",
    title: "Check-out",
    description: "Check-out time will be confirmed with your booking.",
    icon: "/images/Room and Suites/before-your-stay/check-out.svg",
    alt: "Check-out clock icon",
  },
  {
    id: "cancellation",
    title: "Cancellation & changes",
    description:
      "Review the applicable cancellation and amendment terms before confirming your stay.",
    icon: "/images/Room and Suites/before-your-stay/cancellation.svg",
    alt: "Cancellation and amendment policy icon",
  },
];

export default function BeforeYourStayArrivalDetailsSection() {
  return (
    <section
      aria-label="Before your stay arrival details"
      className="layer-04-before-your-stay-arrival-details"
    >
      <div className="before-your-stay-container">
        {/* 1. Heading */}
        <div className="heading-and-policy-action">
          <div className="before-your-stay-section-heading">
            <p className="before-your-stay-eyebrow">BEFORE YOUR STAY</p>
            <h2 className="before-your-stay-headline">
              A few details for a smooth arrival.
            </h2>
          </div>
        </div>

        {/* 2. Arrival Policy Cards */}
        <div className="arrival-policy-cards">
          {ARRIVAL_POLICY_CARDS.map((card) => (
            <div key={card.id} className="arrival-policy-card">
              <div className="policy-card-icon-wrapper">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={106}
                  height={84}
                  className="policy-card-svg"
                  unoptimized
                />
              </div>

              <h3 className="policy-card-title">{card.title}</h3>

              <p className="policy-card-description">{card.description}</p>
            </div>
          ))}
        </div>

        {/* 3. Bottom Note */}
        <p className="policy-details-are-awaiting">
          Policy details are awaiting confirmation.
        </p>
      </div>
    </section>
  );
}

export { BeforeYourStayArrivalDetailsSection as Component04BeforeYourStayArrivalDetails };

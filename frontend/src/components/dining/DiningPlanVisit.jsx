"use client";

import Image from "next/image";
import { ArrowRightIcon } from "./DiningIcons";

export default function DiningPlanVisit() {
  return (
    <section
      className="dining-plan-section"
      id="plan-your-visit"
      aria-label="Plan your visit - Dining essentials"
    >
      <div className="dining-plan-container">
        {/* Section Header */}
        <p className="dining-plan-eyebrow">PLAN YOUR VISIT</p>
        <h2 className="dining-plan-title">We look forward to welcoming you.</h2>
        <p className="dining-plan-subtitle">
          The essentials for your next dining experience at VALENCIA.
        </p>

        {/* 3 Information Cards */}
        <div className="dining-plan-cards">
          {/* Card 1: Dining hours */}
          <article className="dining-plan-card">
            <div className="dining-plan-card-icon">
              <Image
                src="/images/DiningPage/ClockIcon.png"
                alt="Clock icon"
                width={43}
                height={44}
                className="object-contain"
              />
            </div>

            <h3 className="dining-plan-card-title">Dining hours</h3>

            <div className="dining-plan-hours-row">
              <span className="dining-plan-hours-label">Breakfast</span>
              <span className="dining-plan-hours-time">7:00 AM - 10:30 AM</span>
            </div>

            <div className="dining-plan-hours-row">
              <span className="dining-plan-hours-label">Lunch</span>
              <span className="dining-plan-hours-time">12:30 AM - 3:30 pM</span>
            </div>

            <div className="dining-plan-hours-row">
              <span className="dining-plan-hours-label">Dinner</span>
              <span className="dining-plan-hours-time">7:00 AM - 11:00 PM</span>
            </div>

            <p className="dining-plan-hours-note">Open Daily</p>
          </article>

          {/* Card 2: Find us */}
          <article className="dining-plan-card">
            <div className="dining-plan-card-icon">
              <Image
                src="/images/DiningPage/mapIcon.png"
                alt="Location pin icon"
                width={43}
                height={44}
                className="object-contain"
              />
            </div>

            <h3 className="dining-plan-card-title">Find us</h3>

            <p className="dining-plan-address">
              VALENCIA · Patna, Bihar{"\n"}
              24 Heritage Avenue, Bally Road{"\n"}
              Patna, Bihar 800014
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dining-plan-directions-link"
              aria-label="Get directions to Valencia Patna"
            >
              <span>Get directions</span>
              <ArrowRightIcon className="w-[16px] h-[16px]" strokeWidth={1.8} />
            </a>
          </article>

          {/* Card 3: Get in touch */}
          <article className="dining-plan-card">
            <div className="dining-plan-card-icon">
              <Image
                src="/images/DiningPage/Callicon.png"
                alt="Phone call icon"
                width={43}
                height={44}
                className="object-contain"
              />
            </div>

            <h3 className="dining-plan-card-title">Get in touch</h3>

            <p className="dining-plan-contact-sub">
              For dining enquiries and special requests.
            </p>

            <a
              href="tel:+910000000000"
              className="dining-plan-contact-value"
              aria-label="Call for dining reservations"
            >
              +91 00000 00000
            </a>

            <a
              href="mailto:dinning@valencia.example"
              className="dining-plan-contact-value"
              aria-label="Email for dining enquiries"
            >
              dinning@valencia.example
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./css/deluxe-room-before-your-stay-booking.css";

export default function DeluxeRoomBeforeYourStayBookingPolicies() {
  return (
    <section className="deluxe-room-before-your-stay-booking-section">
      <div className="deluxe-room-before-your-stay-booking">
        {/* Top Header & CTA */}
        <div className="policy-introduction-and-cta">
          <div className="policy-introduction">
            <p className="before-your-stay">BEFORE YOUR STAY</p>
            <h2 className="a-few-details-for-a-restful-visit">A few details for a restful visit.</h2>
            <p className="review-the-essentials-before-confirming">
              Review the essentials before confirming your reservation.
            </p>
          </div>

          <Link href="/contact?topic=booking-policy" className="view-booking-policy-button">
            <span className="view-booking-policy">VIEW BOOKING POLICY</span>
            <div className="icon-arrow-up-right">
              <Image
                src="/images/Room and Suites/delux room/Icon/Arrow up right.svg"
                alt="Arrow up right"
                width={18}
                height={18}
                unoptimized
              />
            </div>
          </Link>
        </div>

        <div className="section-spacing"></div>

        {/* 3 Booking Policy Columns */}
        <div className="three-booking-policy-columns">
          {/* Column 1: Check-in & check-out */}
          <div className="check-in-check-out">
            <div className="icon-check-in-check-out">
              <Image
                src="/images/Room and Suites/delux room/Icon/Check-in & check-out.svg"
                alt="Check-in & check-out icon"
                width={80}
                height={67}
                unoptimized
              />
            </div>
            <h3 className="check-in-check-out-2">Check-in &amp; check-out</h3>
            <p className="arrival-and-departure-times-will-be">
              Arrival and departure times will be
              <br />
              confirmed with your reservation.
            </p>
          </div>

          {/* Column 2: Cancellation & amendments */}
          <div className="cancellation-amendments">
            <div className="icon-cancellation-amendments">
              <Image
                src="/images/Room and Suites/delux room/Icon/Cancellation & amendments.svg"
                alt="Cancellation & amendments icon"
                width={80}
                height={67}
                unoptimized
              />
            </div>
            <h3 className="cancellation-amendments-2">Cancellation &amp; amendments</h3>
            <p className="terms-depend-on-your-selected-rate-plan">
              Terms depend on your selected
              <br />
              rate plan. Review them before
              <br />
              booking.
            </p>
          </div>

          {/* Column 3: Children & extra beds */}
          <div className="children-extra-beds">
            <div className="icon-children-extra-beds">
              <Image
                src="/images/Room and Suites/delux room/Icon/Children & extra beds.svg"
                alt="Children & extra beds icon"
                width={80}
                height={67}
                unoptimized
              />
            </div>
            <h3 className="children-extra-beds-2">Children &amp; extra beds</h3>
            <p className="contact-our-team-for-availability-age">
              Contact our team for availability,
              <br />
              age policies and additional charges.
            </p>
          </div>
        </div>

        <div className="section-spacing-2"></div>

        {/* Policy Confirmation Note */}
        <div className="policy-confirmation-note">
          <div className="rectangle-3-policy"></div>
          <p className="final-policy-details-will-be-provided">
            Final policy details will be provided before you confirm your booking.
          </p>
        </div>
      </div>
    </section>
  );
}

export { DeluxeRoomBeforeYourStayBookingPolicies };

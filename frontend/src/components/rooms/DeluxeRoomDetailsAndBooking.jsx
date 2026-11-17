"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./css/deluxe-room-details-and-booking.css";

export default function DeluxeRoomDetailsAndBooking({
  roomTag = "DELUXE ROOM",
  eyebrow = "YOUR DELUXE RETREAT",
  roomSize = "32 m² / 344 sq ft",
  bedType = "King-size bed",
  occupancy = "2 adults + 1 child",
  view = "Garden view",
  introTitle = "A little time, entirely yours.",
  introParagraph1 = "Settle into a calm retreat with warm interiors, comfortable furnishings and space to unwind after a day in Patna.",
  introParagraph2 = "Thoughtful details create a welcoming space for restful nights and unhurried mornings.",
  roomOnlyRate = 6000,
  breakfastIncludedRate = 7000,
  roomKey = "deluxe",
}) {
  const [selectedRate, setSelectedRate] = useState("room-only"); // "room-only" or "breakfast-included"
  const [showRateConditions, setShowRateConditions] = useState(false);

  const isRoomOnly = selectedRate === "room-only";
  const currentRate = isRoomOnly ? roomOnlyRate : breakfastIncludedRate;
  const stayTotalNum = currentRate * 2;
  const taxesFeesNum = Math.round(stayTotalNum * 0.1);
  const totalNum = stayTotalNum + taxesFeesNum;

  const rateDetails = {
    rateFormatted: `₹${currentRate.toLocaleString("en-IN")}`,
    stayTotal: `₹${stayTotalNum.toLocaleString("en-IN")}`,
    taxesFees: `₹${taxesFeesNum.toLocaleString("en-IN")}`,
    total: `₹${totalNum.toLocaleString("en-IN")}`,
  };

  return (
    <section className="deluxe-room-details-and-booking-section">
      <div className="deluxe-room-details-and-booking">
        {/* ================= LEFT COLUMN: ROOM DETAILS ================= */}
        <div className="room-details">
          {/* 01. Room at a glance */}
          <div className="room-at-a-glance">
            <p className="your-deluxe-retreat">{eyebrow}</p>
            <h2 className="room-at-a-glance-2">Room at a glance.</h2>

            <div className="four-room-specifications">
              {/* Room Size */}
              <div className="room-size">
                <div className="icon-size">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/size.svg"
                    alt="Room size icon"
                    width={44}
                    height={44}
                    unoptimized
                  />
                </div>
                <p className="room-size-2">Room size</p>
                <p className="layer-32-m2-344-sq-ft">{roomSize}</p>
              </div>

              {/* Bed Type */}
              <div className="bed-type">
                <div className="icon-bed">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/bed.svg"
                    alt="Bed type icon"
                    width={44}
                    height={44}
                    unoptimized
                  />
                </div>
                <p className="bed-type-2">Bed type</p>
                <p className="king-size-bed">{bedType}</p>
              </div>

              {/* Occupancy */}
              <div className="occupancy">
                <div className="icon-people">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/people.svg"
                    alt="Occupancy icon"
                    width={44}
                    height={44}
                    unoptimized
                  />
                </div>
                <p className="occupancy-2">Occupancy</p>
                <p className="layer-2-adults-1-child">{occupancy}</p>
              </div>

              {/* View */}
              <div className="view">
                <div className="icon-eye">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/eye.svg"
                    alt="View icon"
                    width={44}
                    height={44}
                    unoptimized
                  />
                </div>
                <p className="view-2">View</p>
                <p className="garden-view">{view}</p>
              </div>
            </div>

            <p className="illustrative-room-specifications">Illustrative room specifications.</p>
          </div>

          <div className="rectangle"></div>

          {/* 02. Room Introduction */}
          <div className="room-introduction">
            <h3 className="a-little-time-entirely-yours">{introTitle}</h3>
            <p className="settle-into-a-calm-retreat-with-warm">
              {introParagraph1}
            </p>
            <p className="thoughtful-details-create-a-welcoming">
              {introParagraph2}
            </p>
          </div>

          <div className="rectangle-2"></div>

          {/* 03. Comfort Amenities */}
          <div className="amenities">
            <h3 className="comfort-thoughtfully-considered">Comfort, thoughtfully considered.</h3>

            {/* Row 1: Wi-Fi & AC */}
            <div className="amenities-row-1">
              <div className="wi-fi">
                <div className="icon-wifi">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/wifi.svg"
                    alt="Wi-Fi icon"
                    width={47}
                    height={47}
                    unoptimized
                  />
                </div>
                <div className="description">
                  <p className="wi-fi-2">Wi-Fi</p>
                  <p className="stay-connected-with-complimentary-high">
                    Stay connected with complimentary
                    <br />
                    high-speed Wi-Fi.
                  </p>
                </div>
              </div>

              <div className="air-conditioning">
                <div className="icon-snow">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/snow.svg"
                    alt="Air conditioning icon"
                    width={47}
                    height={47}
                    unoptimized
                  />
                </div>
                <div className="description-2">
                  <p className="air-conditioning-2">Air conditioning</p>
                  <p className="maintain-your-ideal-comfort-whatever">
                    Maintain your ideal comfort,
                    <br />
                    whatever the season.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Tea & Coffee & TV */}
            <div className="amenities-row-2">
              <div className="tea-coffee">
                <div className="icon-tea">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/tea.svg"
                    alt="Tea & coffee icon"
                    width={47}
                    height={47}
                    unoptimized
                  />
                </div>
                <div className="description-3">
                  <p className="tea-coffee-2">Tea &amp; coffee</p>
                  <p className="in-room-tea-and-coffee-making">
                    In-room tea and coffee making
                    <br />
                    facilities.
                  </p>
                </div>
              </div>

              <div className="television">
                <div className="icon-tv">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/tv.svg"
                    alt="Television icon"
                    width={47}
                    height={47}
                    unoptimized
                  />
                </div>
                <div className="description-4">
                  <p className="television-2">Television</p>
                  <p className="enjoy-a-range-of-entertainment-options">
                    Enjoy a range of entertainment
                    <br />
                    options.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Bath Essentials & Housekeeping */}
            <div className="amenities-row-3">
              <div className="bath-essentials">
                <div className="icon-bath">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/bath.svg"
                    alt="Bath essentials icon"
                    width={47}
                    height={47}
                    unoptimized
                  />
                </div>
                <div className="description-5">
                  <p className="bath-essentials-2">Bath essentials</p>
                  <p className="premium-bath-amenities-for-a-refreshing">
                    Premium bath amenities
                    <br />
                    for a refreshing stay.
                  </p>
                </div>
              </div>

              <div className="housekeeping">
                <div className="icon-broom">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/broom.svg"
                    alt="Housekeeping icon"
                    width={47}
                    height={47}
                    unoptimized
                  />
                </div>
                <div className="description-6">
                  <p className="housekeeping-2">Housekeeping</p>
                  <p className="daily-housekeeping-for-a-comfortable">
                    Daily housekeeping for a comfortable
                    <br />
                    and carefree stay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="proposed-amenities-subject-to">
            Proposed amenities · Subject to confirmation.
          </p>
        </div>

        {/* ================= RIGHT COLUMN: PLAN YOUR STAY BOOKING CARD ================= */}
        <div className="plan-your-stay-booking-card">
          {/* Header */}
          <div className="booking-heading">
            <h3 className="plan-your-stay">Plan your stay</h3>
            <div className="demo-rates-badge">
              <p className="demo-rates">DEMO RATES</p>
            </div>
          </div>

          <p className="deluxe-room-tag">{roomTag}</p>

          {/* Dates & Guests */}
          <div className="stay-dates-and-guests">
            <div className="dates">
              <div className="check-in">
                <p className="check-in-2">Check-in</p>
                <div className="check-in-input" tabIndex={0} role="button" aria-label="Select check-in date">
                  <p className="layer-12-nov-2026">12 Nov 2026</p>
                  <div className="icon-calendar">
                    <Image
                      src="/images/Room and Suites/delux room/Icon/calendar.svg"
                      alt="Calendar"
                      width={25}
                      height={25}
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              <div className="check-out">
                <p className="check-out-2">Check-out</p>
                <div className="check-out-input" tabIndex={0} role="button" aria-label="Select check-out date">
                  <p className="layer-14-nov-2026">14 Nov 2026</p>
                  <div className="icon-calendar-2">
                    <Image
                      src="/images/Room and Suites/delux room/Icon/calendar 2.svg"
                      alt="Calendar"
                      width={25}
                      height={25}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="guests">
              <p className="guests-2">Guests</p>
              <div className="guests-input" tabIndex={0} role="button" aria-label="Select guests">
                <p className="layer-2-adults-1-room">2 adults · 1 room</p>
                <div className="icon-down">
                  <Image
                    src="/images/Room and Suites/delux room/Icon/down.svg"
                    alt="Select guests arrow"
                    width={25}
                    height={25}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Select your rate */}
          <p className="select-your-rate">Select your rate</p>

          <div className="rate-options" role="radiogroup" aria-label="Select your room rate">
            {/* Room only option */}
            <div
              className={`room-only ${isRoomOnly ? "rate-card-selected" : "rate-card-unselected"}`}
              onClick={() => setSelectedRate("room-only")}
              role="radio"
              aria-checked={isRoomOnly}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedRate("room-only");
                }
              }}
            >
              <div className="rate-card-left">
                <div className={isRoomOnly ? "radio-selected" : "radio-unselected"}>
                  <Image
                    src={
                      isRoomOnly
                        ? "/images/Room and Suites/delux room/Radio/Selected.svg"
                        : "/images/Room and Suites/delux room/Radio/Unselected.svg"
                    }
                    alt={isRoomOnly ? "Selected" : "Unselected"}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <p className="room-only-2">Room only</p>
              </div>

              <div className="nightly-rate">
                <p className="rs6-000">₹{roomOnlyRate.toLocaleString("en-IN")}</p>
                <p className="night">/ night</p>
              </div>
            </div>

            {/* Breakfast included option */}
            <div
              className={`breakfast-included ${!isRoomOnly ? "rate-card-selected" : "rate-card-unselected"}`}
              onClick={() => setSelectedRate("breakfast-included")}
              role="radio"
              aria-checked={!isRoomOnly}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedRate("breakfast-included");
                }
              }}
            >
              <div className="rate-card-left">
                <div className={!isRoomOnly ? "radio-selected" : "radio-unselected"}>
                  <Image
                    src={
                      !isRoomOnly
                        ? "/images/Room and Suites/delux room/Radio/Selected.svg"
                        : "/images/Room and Suites/delux room/Radio/Unselected.svg"
                    }
                    alt={!isRoomOnly ? "Selected" : "Unselected"}
                    width={24}
                    height={24}
                    unoptimized
                  />
                </div>
                <p className="breakfast-included-2">Breakfast included</p>
              </div>

              <div className="nightly-rate-2">
                <p className="rs7-000">₹{breakfastIncludedRate.toLocaleString("en-IN")}</p>
                <p className="night-2">/ night</p>
              </div>
            </div>
          </div>

          {/* Rate conditions link */}
          <button
            type="button"
            className="view-rate-conditions bg-transparent border-none text-left p-0 cursor-pointer"
            onClick={() => setShowRateConditions(!showRateConditions)}
          >
            {showRateConditions ? "Hide rate conditions" : "View rate conditions"}
          </button>

          {showRateConditions && (
            <div className="p-3 text-xs text-[#55535A] bg-[#F4EFE6] rounded border border-[#D8CCB4] flex flex-col gap-1 transition-all">
              <p>• Flexible cancellation up to 48 hours prior to arrival date without charge.</p>
              <p>• Check-in time starts at 2:00 PM; check-out time is until 12:00 PM.</p>
              <p>
                • {isRoomOnly ? "Room only rate does not include breakfast." : "Daily buffet breakfast included for registered guests at The Valencia Brasserie."}
              </p>
            </div>
          )}

          {/* Price summary */}
          <div className="price-summary">
            <div className="rectangle-3"></div>

            <div className="rs6-000-x-2-nights">
              <p className="rs6-000-x-2-nights-2">
                {rateDetails.rateFormatted} × 2 nights
              </p>
              <p className="rs12-000">{rateDetails.stayTotal}</p>
            </div>

            <div className="taxes-fees-demo">
              <p className="taxes-fees-demo-2">Taxes &amp; fees (demo)</p>
              <p className="rs1-200">{rateDetails.taxesFees}</p>
            </div>

            <div className="rectangle-4"></div>

            <div className="total-for-stay">
              <div className="total-label">
                <p className="total">Total</p>
                <p className="for-2-nights">For 2 nights</p>
              </div>
              <p className="rs13-200">{rateDetails.total}</p>
            </div>

            <Link
              href={`/contact?enquiry=booking&room=${roomKey}&rate=${selectedRate}`}
              className="book-now no-underline"
            >
              <span className="book-now-2">BOOK NOW</span>
              <div className="icon-arrow">
                <Image
                  src="/images/Room and Suites/delux room/Icon/arrow.svg"
                  alt="Arrow right"
                  width={27}
                  height={27}
                  unoptimized
                />
              </div>
            </Link>
          </div>

          {/* Booking notes */}
          <div className="booking-notes">
            <p className="continue-to-guest-details-and-payment">
              Continue to guest details and payment.
            </p>
            <p className="sample-dates-rates-and-taxes-for-design">
              Sample dates, rates and taxes for design preview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { DeluxeRoomDetailsAndBooking };

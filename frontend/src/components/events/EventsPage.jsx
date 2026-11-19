"use client";

import { useState } from "react";
import EventsHero from "./EventsHero";
import EventsSpaces from "./EventsSpaces";
import EventsOffer from "./EventsOffer";
import EventsWeHost from "./EventsWeHost";
import EventsStay from "./EventsStay";
import EventsGallery from "./EventsGallery";
import EventsEnquiry from "./EventsEnquiry";
import EventsPlanning from "./EventsPlanning";
import EventsFaq from "./EventsFaq";

export default function EventsPage() {
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedSpace, setSelectedSpace] = useState("");

  const scrollToEnquiry = () => {
    const el = document.getElementById("event-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSpaces = () => {
    const el = document.getElementById("spaces");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSpace = (spaceName) => {
    setSelectedSpace(spaceName);
    scrollToEnquiry();
  };

  const handleSelectEventType = (typeName) => {
    setSelectedEventType(typeName);
    scrollToEnquiry();
  };

  const handleOfferClick = () => {
    setSelectedEventType("Pre-wedding (Engagement / Haldi / Mehndi / Sangeet)");
    scrollToEnquiry();
  };

  const handleStayEnquire = () => {
    scrollToEnquiry();
  };

  return (
    <div className="events-page-container">
      {/* 01 / Weddings & Events — Hero */}
      <EventsHero
        onPlanClick={scrollToEnquiry}
        onExploreClick={scrollToSpaces}
      />

      {/* 02 / Spaces at Umrao — Venue collection */}
      <EventsSpaces onSelectSpace={handleSelectSpace} />

      {/* 03 / More room to celebrate — Wedding offer */}
      <EventsOffer onOfferClick={handleOfferClick} />

      {/* 04 / Events We Host */}
      <EventsWeHost onSelectEventType={handleSelectEventType} />

      {/* 05 / Stay for the celebration */}
      <EventsStay onStayEnquireClick={handleStayEnquire} />

      {/* 06 / Celebration Gallery */}
      <EventsGallery />

      {/* 07 / Event enquiry (Form) */}
      <EventsEnquiry
        initialEventType={selectedEventType}
        initialSpace={selectedSpace}
      />

      {/* 08 / Your celebration planned together (Steps) */}
      <EventsPlanning />

      {/* 09 / Before you plan your day — FAQs */}
      <EventsFaq onContactClick={scrollToEnquiry} />
    </div>
  );
}

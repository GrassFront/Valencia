"use client";

import { useState } from "react";
import JiaHero from "./JiaHero";
import JiaWelcome from "./JiaWelcome";
import JiaRooms from "./JiaRooms";
import JiaEssentials from "./JiaEssentials";
import JiaLookingAhead from "./JiaLookingAhead";
import JiaLocation from "./JiaLocation";
import JiaEnquiry from "./JiaEnquiry";

export default function JiaPage() {
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleSelectRoom = (roomName) => {
    setSelectedRoom(roomName);
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF6EC] overflow-x-clip">
      {/* Section 01: Hero (1440x806px) */}
      <JiaHero />

      {/* Section 02: Welcome to Hotel Jia & Stat Bar (1440x852px) */}
      <JiaWelcome />

      {/* Section 03: Rooms at Hotel Jia (1440x588px) */}
      <JiaRooms onSelectRoom={handleSelectRoom} />

      {/* Section 04: Everyday Essentials (1440x648px) */}
      <JiaEssentials />

      {/* Section 05: Looking Ahead - Planned Spaces (1440x700px) */}
      <JiaLookingAhead />

      {/* Section 06: Location & Directions (1440x880px) */}
      <JiaLocation />

      {/* Section 07: Plan Your Stay - Enquiry Form (1440x1082px) */}
      <JiaEnquiry preselectedRoom={selectedRoom} />
    </div>
  );
}

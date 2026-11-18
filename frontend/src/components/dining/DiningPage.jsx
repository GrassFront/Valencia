"use client";

import DiningHero from "./DiningHero";
import DiningExperience from "./DiningExperience";
import DiningChef from "./DiningChef";
import DiningTaste from "./DiningTaste";
import DiningKitchen from "./DiningKitchen";
import DiningPlanVisit from "./DiningPlanVisit";
import DiningReservation from "./DiningReservation";
import DiningPrivate from "./DiningPrivate";

export default function DiningPage() {
  return (
    <div className="dining-page">
      {/* 01 / Frame 35: Hero section */}
      <DiningHero />

      {/* 02 / The Dining Experience */}
      <DiningExperience />

      {/* 03 / Chef Michael — Guided by passion */}
      <DiningChef />

      {/* 04 / A Taste of Valencia — Menu highlights */}
      <DiningTaste />

      {/* 05 / From our kitchen — Flavours gallery */}
      <DiningKitchen />

      {/* 06 / Plan your visit — Dining essentials */}
      <DiningPlanVisit />

      {/* 07 / Join us at the table — Reservation request */}
      <DiningReservation />

      {/* 08 / Private dining & celebrations */}
      <DiningPrivate />
    </div>
  );
}

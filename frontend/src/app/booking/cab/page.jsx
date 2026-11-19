import React, { Suspense } from "react";
import { CabTaxiBookFlow } from "@/components/booking/CabTaxiBookFlow";

export const metadata = {
  title: "Cab & Taxi Booking | VALENCIA Hotel Patna",
  description: "Arrange luxury airport or railway pickup to VALENCIA Boutique Hotel Patna.",
};

export default function CabBookingPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#FAF7EF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Manrope, sans-serif",
            color: "#07552D",
            fontSize: "18px",
          }}
        >
          Loading ride &amp; pickup details...
        </div>
      }
    >
      <CabTaxiBookFlow />
    </Suspense>
  );
}

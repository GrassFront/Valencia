import React, { Suspense } from "react";
import { BookingGuestDetails } from "@/components/booking/BookingGuestDetails";

export const metadata = {
  title: "Secure Booking | VALENCIA Hotel Patna",
  description: "Complete your reservation at VALENCIA, a luxury boutique hotel in Patna.",
};

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#F9F6ED",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Manrope, sans-serif",
            color: "#164A39",
            fontSize: "18px",
          }}
        >
          Loading reservation details...
        </div>
      }
    >
      <BookingGuestDetails />
    </Suspense>
  );
}

import React, { Suspense } from "react";
import { BookingConfirmationHotelContactVersion } from "@/components/booking/BookingConfirmationHotelContactVersion";

export const metadata = {
  title: "Booking Confirmed | VALENCIA Hotel Patna",
  description: "Your reservation at VALENCIA Patna has been confirmed. View your stay details and booking reference.",
};

export default function BookingConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            background: "#F8F5ED",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Manrope, sans-serif",
            color: "#104F3B",
            fontSize: "18px",
          }}
        >
          Loading your confirmed reservation...
        </div>
      }
    >
      <BookingConfirmationHotelContactVersion />
    </Suspense>
  );
}

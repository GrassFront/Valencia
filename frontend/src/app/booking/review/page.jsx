import React, { Suspense } from "react";
import { BookingReviewReservation } from "@/components/booking/BookingReviewReservation";

export const metadata = {
  title: "Review Reservation | VALENCIA Hotel Patna",
  description: "Review your stay and guest details before confirming your booking at VALENCIA Patna.",
};

export default function BookingReviewPage() {
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
          Loading reservation review...
        </div>
      }
    >
      <BookingReviewReservation />
    </Suspense>
  );
}

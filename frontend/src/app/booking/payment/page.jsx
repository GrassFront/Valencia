import React, { Suspense } from "react";
import { BookingPayment } from "@/components/booking/BookingPayment";

export const metadata = {
  title: "Secure Payment | VALENCIA Hotel Patna",
  description: "Complete your reservation with secure payment options at VALENCIA Patna.",
};

export default function BookingPaymentPage() {
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
            color: "#125440",
            fontSize: "18px",
          }}
        >
          Loading payment gateway...
        </div>
      }
    >
      <BookingPayment />
    </Suspense>
  );
}

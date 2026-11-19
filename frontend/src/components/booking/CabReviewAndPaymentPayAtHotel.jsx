"use client";

import React from "react";
import CabTaxiBookFlow from "./CabTaxiBookFlow";
import "./css/cab-review-and-payment-pay-at-hotel.css";

export function CabReviewAndPaymentPayAtHotel(props) {
  return <CabTaxiBookFlow initialStep={3} {...props} />;
}

export default CabReviewAndPaymentPayAtHotel;

import React from "react";
import AccountDashboard from "../../../components/account/AccountDashboard";

export const metadata = {
  title: "My Bookings | VALENCIA - A Luxury Boutique Hotel",
  description: "View and manage your upcoming stays, past reservations, and cab details at VALENCIA Hotel.",
};

export default function BookingsPage() {
  return <AccountDashboard initialTab="upcoming" />;
}

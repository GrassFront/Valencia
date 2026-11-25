import React from "react";
import AccountDashboard from "../../components/account/AccountDashboard";

export const metadata = {
  title: "My Account & Bookings | VALENCIA - A Luxury Boutique Hotel",
  description: "View and manage your upcoming stays, past reservations, and personal profile details at VALENCIA Hotel.",
};

export default function AccountPage() {
  return <AccountDashboard initialTab="upcoming" />;
}

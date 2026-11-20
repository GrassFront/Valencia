import React from "react";
import AccountDashboard from "../../../components/account/AccountDashboard";

export const metadata = {
  title: "My Profile | VALENCIA - A Luxury Boutique Hotel",
  description: "Manage your personal details, contact preferences, and stay profile at VALENCIA Hotel.",
};

export default function ProfilePage() {
  return <AccountDashboard initialTab="profile" />;
}

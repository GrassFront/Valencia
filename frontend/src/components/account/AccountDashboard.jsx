"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AccountHeader from "./AccountHeader";
import AccountBreadcrumb from "./AccountBreadcrumb";
import AccountSidebar from "./AccountSidebar";
import BookingTabs from "./BookingTabs";
import BookingCard from "./BookingCard";
import CancelledEmptyState from "./CancelledEmptyState";
import HelpBanner from "./HelpBanner";
import ProfileForm from "./ProfileForm";
import { CabDetailsModal, InvoiceModal, ChangeEmailModal, ChangeMobileModal } from "./AccountModals";
import { useAuth } from "../../context/AuthContext";

export default function AccountDashboard({ initialTab = "upcoming" }) {
  const router = useRouter();
  const { isAuthenticated, isLoaded } = useAuth();
  const [activeTab, setActiveTab] = useState(initialTab);

  // Modals state
  const [selectedCabData, setSelectedCabData] = useState(null);
  const [cabModalOpen, setCabModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get("tab");
      if (tab) {
        setActiveTab(tab);
      }
    }
  }, []);

  // Handle Tab changes
  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = tab === "profile" ? "/account?tab=profile" : `/account?tab=${tab}`;
      window.history.pushState(null, "", url);
    }
  };

  const handleOpenInvoice = (bookingData) => {
    setSelectedInvoice(bookingData);
    setInvoiceModalOpen(true);
  };

  const handleOpenCabDetails = (cabData) => {
    setSelectedCabData(cabData);
    setCabModalOpen(true);
  };

  const isProfile = activeTab === "profile";

  // Data for Bookings
  const upcomingBooking = {
    reference: "VAL-DEMO-1026",
    status: "Confirmed",
    roomName: "Deluxe Room",
    hotelName: "VALENCIA · Patna",
    rateType: "Room only",
    checkInDate: "12 Nov 2026",
    checkOutDate: "14 Nov 2026",
    occupancy: "2 nights · 2 adults · 1 room",
    image: "/images/booking/Rectangle.png",
    totalPaid: "₹13,200",
    isDemoAmount: false,
    cabBooking: {
      cabRef: "CAB -DEMO-1026",
      vehicleName: "Toyota Innova",
      routeFrom: "Fraser Road, near Buddha Smriti Park",
      routeTo: "VALENCIA. Patna",
      date: "12 Nov 2024",
      time: "2:00 PM IST",
      passengers: "2 passengers",
      bags: "2 Large bags",
      price: "₹1,200",
      paymentMethod: "Pay at hotel",
      paymentStatus: "Cab payment pending",
      driverStatus: "Driver Assignment pending",
      status: "Completed",
    },
  };

  const pastBookings = [
    {
      reference: "VAL-DEMO-0826",
      status: "Completed",
      roomName: "Deluxe Room",
      hotelName: "VALENCIA · Patna",
      rateType: "Room only",
      checkInDate: "18 Aug 2026",
      checkOutDate: "20 Aug 2026",
      occupancy: "2 nights · 2 adults · 1 room",
      image: "/images/booking/Rectangle.png",
      totalPaid: "₹13,200",
      isDemoAmount: true,
      cabBooking: null,
    },
    {
      reference: "VAL-DEMO-0526",
      status: "Completed",
      roomName: "Suite",
      hotelName: "VALENCIA · Patna",
      rateType: "Room only",
      checkInDate: "09 May 2026",
      checkOutDate: "10 May 2026",
      occupancy: "1 night · 2 adults · 1 room",
      image: "/images/booking/Rectangle 2.png",
      totalPaid: "₹9,900",
      isDemoAmount: true,
      cabBooking: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF8F0] flex flex-col font-body selection:bg-[#134D39] selection:text-white pb-16">
      {/* Account Header */}
      <AccountHeader />

      {/* Breadcrumb */}
      <AccountBreadcrumb isProfile={isProfile} />

      {/* Main Container */}
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex-1">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[44px] w-full">
          {/* Account Sidebar (Left Column) */}
          <AccountSidebar
            activeTab={isProfile ? "profile" : "bookings"}
            onSelectTab={handleSelectTab}
          />

          {/* Account Content (Right Column) */}
          <section
            aria-label={isProfile ? "My Profile" : "My Bookings"}
            className="w-full flex-1 flex flex-col items-start min-w-0"
          >
            {/* Page Introduction */}
            <div className="w-full flex flex-col items-start mb-6">
              <span className="font-body text-[12px] sm:text-[13px] leading-[18px] tracking-[1.7px] text-[#B18E51] uppercase font-medium">
                YOUR VALENCIA ACCOUNT
              </span>
              <h1 className="font-display font-semibold text-[36px] sm:text-[45px] lg:text-[51px] leading-[1.2] lg:leading-[75px] text-[#161310] mt-1">
                {isProfile ? "My profile" : "My bookings"}
              </h1>
              <p className="font-body font-normal text-[20px] sm:text-[23px] lg:text-[25px] leading-[30px] lg:leading-[40px] text-[#898984]">
                {isProfile
                  ? "Keep your details up to date for your next stay."
                  : "Your stays, all in one place."}
              </p>
              {(isProfile || activeTab === "cancelled" || activeTab === "past") && (
                <p className="font-body font-normal text-[15px] sm:text-[17px] leading-[23px] text-[#898984] mt-1">
                  {isProfile ? "Sample profile data." : "Sample booking data."}
                </p>
              )}
            </div>

            {/* Profile Tab View */}
            {isProfile ? (
              <div className="w-full flex flex-col gap-8">
                <ProfileForm
                  onChangeEmailClick={() => setEmailModalOpen(true)}
                  onChangeMobileClick={() => setMobileModalOpen(true)}
                />
                <HelpBanner type="profile" />
              </div>
            ) : (
              /* Bookings Tabs View */
              <div className="w-full flex flex-col gap-6">
                {/* Tabs */}
                <BookingTabs
                  activeTab={activeTab}
                  onTabChange={(tab) => handleSelectTab(tab)}
                  counts={{ upcoming: 1, past: 2, cancelled: 0 }}
                />

                {/* Tab Content: Upcoming */}
                {activeTab === "upcoming" && (
                  <div className="w-full flex flex-col gap-6">
                    <BookingCard
                      {...upcomingBooking}
                      onViewBooking={() => router.push(`/booking/confirmation?reference=${upcomingBooking.reference}`)}
                      onDownloadInvoice={() => handleOpenInvoice(upcomingBooking)}
                      onViewCabDetails={() => handleOpenCabDetails(upcomingBooking.cabBooking)}
                    />
                    <HelpBanner type="upcoming" />
                  </div>
                )}

                {/* Tab Content: Past */}
                {activeTab === "past" && (
                  <div className="w-full flex flex-col gap-6">
                    {pastBookings.map((b) => (
                      <BookingCard
                        key={b.reference}
                        {...b}
                        onViewBooking={() => router.push(`/booking/confirmation?reference=${b.reference}`)}
                        onDownloadInvoice={() => handleOpenInvoice(b)}
                      />
                    ))}
                    <HelpBanner type="past" />
                  </div>
                )}

                {/* Tab Content: Cancelled */}
                {activeTab === "cancelled" && (
                  <div className="w-full flex flex-col gap-6">
                    <CancelledEmptyState onViewUpcoming={() => handleSelectTab("upcoming")} />
                    <HelpBanner type="cancelled" />
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Modals */}
      <CabDetailsModal
        isOpen={cabModalOpen}
        onClose={() => setCabModalOpen(false)}
        cabData={selectedCabData}
      />
      <InvoiceModal
        isOpen={invoiceModalOpen}
        onClose={() => setInvoiceModalOpen(false)}
        booking={selectedInvoice}
      />
      <ChangeEmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
      <ChangeMobileModal
        isOpen={mobileModalOpen}
        onClose={() => setMobileModalOpen(false)}
      />
    </div>
  );
}

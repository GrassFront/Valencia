import { MainLayout } from "@/components/layout";
import {
  RoomsHeroSection,
  RoomsListingSection,
  AmenitiesAndServicesSection,
} from "@/components/rooms";
import { YourNextStayBooking } from "@/components/home";

export const metadata = {
  title: "Rooms & Suites | Valencia - A Luxury Boutique Hotel",
  description:
    "Find your own sense of comfort. Explore Deluxe, Twin, Suite and Presidential Suite stays at VALENCIA in Patna.",
};

export default function RoomsAndSuitesPage() {
  return (
    <MainLayout activeNavItem="Rooms & Suites" showFooter={true} footerVariant="primary">
      <div className="rooms-and-suites-page flex flex-col w-full">
        {/* Section 01: Hero with Native Image Crop & Booking Bar */}
        <RoomsHeroSection />

        {/* Section 02: Choose Your Stay Filters & Room Cards Grid */}
        <RoomsListingSection />

        {/* Section 03: Layer 03 Amenities & Services (Thoughtful comforts for your stay) */}
        <AmenitiesAndServicesSection />

        {/* Section 04: Upper Section of Footer (Your Next Stay Booking) */}
        <YourNextStayBooking />
      </div>
    </MainLayout>
  );
}

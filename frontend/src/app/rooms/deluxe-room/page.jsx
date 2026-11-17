import { MainLayout } from "@/components/layout";
import {
  DeluxeRoomHeroGallery,
  DeluxeRoomDetailsAndBooking,
  DeluxeRoomBeforeYourStayBookingPolicies,
  DeluxeRoomExploreMoreWaysToStay,
} from "@/components/rooms";

export const metadata = {
  title: "Deluxe Room | Valencia - A Luxury Boutique Hotel",
  description:
    "A welcoming retreat for restful stays. Discover the Deluxe Room at VALENCIA in Patna with Italian-inspired neoclassical decor.",
};

export default function DeluxeRoomPage() {
  return (
    <MainLayout activeNavItem="Rooms & Suites" showFooter={true} footerVariant="secondary">
      <div className="deluxe-room-page flex flex-col w-full">
        {/* Section 01: Hero Gallery with Breadcrumb & Back button */}
        <DeluxeRoomHeroGallery />

        {/* Section 02: Room Details & Booking Section */}
        <DeluxeRoomDetailsAndBooking />

        {/* Section 03: Before Your Stay - Booking Policies */}
        <DeluxeRoomBeforeYourStayBookingPolicies />

        {/* Section 04: Explore More Ways to Stay */}
        <DeluxeRoomExploreMoreWaysToStay />
      </div>
    </MainLayout>
  );
}

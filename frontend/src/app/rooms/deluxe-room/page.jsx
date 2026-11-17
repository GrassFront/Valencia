import { MainLayout } from "@/components/layout";
import { DeluxeRoomHeroGallery } from "@/components/rooms";
import { YourNextStayBooking } from "@/components/home";

export const metadata = {
  title: "Deluxe Room | Valencia - A Luxury Boutique Hotel",
  description:
    "A welcoming retreat for restful stays. Discover the Deluxe Room at VALENCIA in Patna with Italian-inspired neoclassical decor.",
};

export default function DeluxeRoomPage() {
  return (
    <MainLayout activeNavItem="Rooms & Suites" showFooter={true} footerVariant="primary">
      <div className="deluxe-room-page flex flex-col w-full">
        {/* Section 01: Hero Gallery with Breadcrumb & Back button */}
        <DeluxeRoomHeroGallery />

        {/* Section 02: Upper Section of Footer (Your Next Stay Booking) */}
        <YourNextStayBooking />
      </div>
    </MainLayout>
  );
}

import { MainLayout } from "@/components/layout";
import {
  DeluxeRoomHeroGallery,
  DeluxeRoomDetailsAndBooking,
  DeluxeRoomBeforeYourStayBookingPolicies,
  DeluxeRoomExploreMoreWaysToStay,
} from "@/components/rooms";

export const metadata = {
  title: "Suite | Valencia - A Luxury Boutique Hotel",
  description:
    "Room to unwind, with a separate sense of retreat. Discover the Suite at VALENCIA in Patna with Italian-inspired neoclassical decor.",
};

const SUITE_PHOTOS = [
  {
    id: "main-suite",
    src: "/images/Room and Suites/delux room/Suite/Reference photo crop.png",
    alt: "Valencia Suite - Lavish Living Parlor and Bedroom",
    caption: "Suite with Separate Living Parlor and Master Bedroom",
  },
  {
    id: "bedroom",
    src: "/images/Room and Suites/delux room/Upload target.png",
    alt: "Valencia Suite - Master Bedroom with King Bed",
    caption: "Private Master Bedroom with Garden View",
  },
  {
    id: "bathroom",
    src: "/images/Room and Suites/delux room/Upload target3.png",
    alt: "Valencia Suite - Marble bathroom with backlit mirror",
    caption: "En-suite Marble Bathroom with Walk-in Rain Shower",
  },
  {
    id: "suite-alt",
    src: "/images/Room and Suites/rooms details/Native image crop2.png",
    alt: "Valencia Suite - Alternative living room perspective",
    caption: "Suite Living Chamber Perspective",
  },
];

export default function SuitePage() {
  return (
    <MainLayout activeNavItem="Rooms & Suites" showFooter={true} footerVariant="secondary">
      <div className="suite-page flex flex-col w-full">
        {/* Section 01: Hero Gallery with Breadcrumb & Back button */}
        <DeluxeRoomHeroGallery
          roomName="Suite"
          eyebrow="ELEVATED LUXURY"
          subtitle="Room to unwind, with a separate sense of retreat."
          photos={SUITE_PHOTOS}
        />

        {/* Section 02: Room Details & Booking Section */}
        <DeluxeRoomDetailsAndBooking
          roomTag="SUITE"
          eyebrow="YOUR SUITE RETREAT"
          roomSize="48 m² / 520 sq ft"
          bedType="King-size bed"
          occupancy="2 adults + 1 child"
          view="Courtyard & city view"
          introTitle="Spacious elegance, unhurried ease."
          introParagraph1="A beautifully appointed haven featuring a separate living parlor and lavish private bedroom, crafted for those who value privacy and generous space."
          introParagraph2="Unwind in Italian-inspired luxury with hand-selected furnishings, bespoke art, and an aura of refined tranquility."
          roomOnlyRate={9000}
          breakfastIncludedRate={10500}
          roomKey="suite"
        />

        {/* Section 03: Before Your Stay - Booking Policies */}
        <DeluxeRoomBeforeYourStayBookingPolicies />

        {/* Section 04: Explore More Ways to Stay */}
        <DeluxeRoomExploreMoreWaysToStay currentRoomId="suite" />
      </div>
    </MainLayout>
  );
}

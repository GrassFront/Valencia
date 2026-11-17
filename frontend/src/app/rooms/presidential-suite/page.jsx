import { MainLayout } from "@/components/layout";
import {
  DeluxeRoomHeroGallery,
  DeluxeRoomDetailsAndBooking,
  DeluxeRoomBeforeYourStayBookingPolicies,
  DeluxeRoomExploreMoreWaysToStay,
} from "@/components/rooms";

export const metadata = {
  title: "Presidential Suite | Valencia - A Luxury Boutique Hotel",
  description:
    "An expansive setting for an exceptional stay. Discover the Presidential Suite at VALENCIA in Patna with Italian-inspired neoclassical decor.",
};

const PRESIDENTIAL_SUITE_PHOTOS = [
  {
    id: "main-presidential",
    src: "/images/Room and Suites/delux room/Presidential Suite/Reference photo crop.png",
    alt: "Valencia Presidential Suite - Grand Palace Salon and Master Chamber",
    caption: "Presidential Suite Grand Salon and Master Quarters",
  },
  {
    id: "bedroom",
    src: "/images/Room and Suites/delux room/Upload target.png",
    alt: "Valencia Presidential Suite - Palatial Master Bedroom",
    caption: "Palatial Master Bedroom with Garden View",
  },
  {
    id: "bathroom",
    src: "/images/Room and Suites/delux room/Upload target3.png",
    alt: "Valencia Presidential Suite - Marble sanctuary with illuminated vanity",
    caption: "Opulent Marble Bathroom Sanctuary with Rain Shower",
  },
  {
    id: "salon-alt",
    src: "/images/Room and Suites/rooms details/Native image crop3.png",
    alt: "Valencia Presidential Suite - Grand Salon Overview",
    caption: "Grand Salon and Private Dining Overview",
  },
];

export default function PresidentialSuitePage() {
  return (
    <MainLayout activeNavItem="Rooms & Suites" showFooter={true} footerVariant="secondary">
      <div className="presidential-suite-page flex flex-col w-full">
        {/* Section 01: Hero Gallery with Breadcrumb & Back button */}
        <DeluxeRoomHeroGallery
          roomName="Presidential Suite"
          eyebrow="SIGNATURE PALATIAL RETREAT"
          subtitle="An expansive setting for an exceptional stay."
          photos={PRESIDENTIAL_SUITE_PHOTOS}
        />

        {/* Section 02: Room Details & Booking Section */}
        <DeluxeRoomDetailsAndBooking
          roomTag="PRESIDENTIAL SUITE"
          eyebrow="THE PRESIDENTIAL SUITE"
          roomSize="111 m² / 1,200 sq ft"
          bedType="Master King-size bed"
          occupancy="4 guests"
          view="Panoramic city & garden view"
          introTitle="Unrivalled luxury, majestic proportions."
          introParagraph1="The pinnacle of hospitality at Valencia. An expansive master retreat with grand living salon, dining room, dressing chamber, and opulent marble sanctuary."
          introParagraph2="Every detail has been curated to deliver an extraordinary, regal stay in Patna with bespoke butler attention and supreme privacy."
          roomOnlyRate={18000}
          breakfastIncludedRate={20000}
          roomKey="presidential-suite"
        />

        {/* Section 03: Before Your Stay - Booking Policies */}
        <DeluxeRoomBeforeYourStayBookingPolicies />

        {/* Section 04: Explore More Ways to Stay */}
        <DeluxeRoomExploreMoreWaysToStay currentRoomId="presidential-suite" />
      </div>
    </MainLayout>
  );
}

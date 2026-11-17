import { MainLayout } from "@/components/layout";
import {
  DeluxeRoomHeroGallery,
  DeluxeRoomDetailsAndBooking,
  DeluxeRoomBeforeYourStayBookingPolicies,
  DeluxeRoomExploreMoreWaysToStay,
} from "@/components/rooms";

export const metadata = {
  title: "Twin Room | Valencia - A Luxury Boutique Hotel",
  description:
    "Shared stays, with space for individual comfort. Discover the Twin Room at VALENCIA in Patna with Italian-inspired neoclassical decor.",
};

const TWIN_ROOM_PHOTOS = [
  {
    id: "main-twin",
    src: "/images/Room and Suites/delux room/Twin Room/Reference photo crop.png",
    alt: "Valencia Twin Room - Dual Twin Beds with neoclassical decor",
    caption: "Twin Room with Dual Luxury Beds and Garden View",
  },
  {
    id: "sitting-area",
    src: "/images/Room and Suites/delux room/Upload target2.png",
    alt: "Valencia Twin Room - Reading corner and window view",
    caption: "Private Reading Corner with Garden View",
  },
  {
    id: "bathroom",
    src: "/images/Room and Suites/delux room/Upload target3.png",
    alt: "Valencia Twin Room - Marble bathroom with backlit mirror",
    caption: "En-suite Marble Bathroom with Walk-in Shower",
  },
  {
    id: "bedroom-alt",
    src: "/images/Room and Suites/rooms details/Native image crop.png",
    alt: "Valencia Twin Room - Alternative bedroom angle",
    caption: "Twin Room Layout Overview",
  },
];

export default function TwinRoomPage() {
  return (
    <MainLayout activeNavItem="Rooms & Suites" showFooter={true} footerVariant="secondary">
      <div className="twin-room-page flex flex-col w-full">
        {/* Section 01: Hero Gallery with Breadcrumb & Back button */}
        <DeluxeRoomHeroGallery
          roomName="Twin Room"
          eyebrow="SHARED RETREAT"
          subtitle="Shared stays, with space for individual comfort."
          photos={TWIN_ROOM_PHOTOS}
        />

        {/* Section 02: Room Details & Booking Section */}
        <DeluxeRoomDetailsAndBooking
          roomTag="TWIN ROOM"
          eyebrow="YOUR TWIN RETREAT"
          roomSize="32 m² / 340 sq ft"
          bedType="Twin beds"
          occupancy="2 adults"
          view="City or garden view"
          introTitle="Shared comfort, individual calm."
          introParagraph1="Two plush twin beds in a serene, neoclassical setting tailored for companions, friends, or family travelling together in Patna."
          introParagraph2="Enjoy individual sleeping comfort alongside generous lounge spaces and thoughtful luxury touches for a relaxed stay."
          roomOnlyRate={6500}
          breakfastIncludedRate={7500}
          roomKey="twin"
        />

        {/* Section 03: Before Your Stay - Booking Policies */}
        <DeluxeRoomBeforeYourStayBookingPolicies />

        {/* Section 04: Explore More Ways to Stay */}
        <DeluxeRoomExploreMoreWaysToStay currentRoomId="twin-room" />
      </div>
    </MainLayout>
  );
}

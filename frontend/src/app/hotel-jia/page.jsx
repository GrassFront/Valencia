import { MainLayout } from "@/components/layout";
import JiaPage from "@/components/jia-hotel/JiaPage";
import "@/styles/jia-hotel/jia-hotel.css";

export const metadata = {
  title: "Hotel Jia International | Your City Stay in Patna | Comfort That Keeps You Connected",
  description:
    "A practical, welcoming base for business trips, family visits and exploring Patna. 36 guest rooms across 4 categories located on Fraser Road, opposite Buddha Smriti Park, Patna.",
};

export default function HotelJiaRoute() {
  return (
    <MainLayout
      activeNavItem="Properties"
      showFooter={true}
      footerVariant="primary"
    >
      <JiaPage />
    </MainLayout>
  );
}

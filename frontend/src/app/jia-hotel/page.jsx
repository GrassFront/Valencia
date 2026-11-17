import { MainLayout } from "@/components/layout";
import JiaPage from "@/components/jia-hotel/JiaPage";
import "@/styles/jia-hotel/jia-hotel.css";

export const metadata = {
  title: "Hotel Jia International | Your City Stay in Patna",
  description:
    "A practical, welcoming base for business trips, family visits and exploring Patna. Located on Fraser Road, opposite Buddha Smriti Park, Patna.",
};

export default function JiaHotelAliasRoute() {
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

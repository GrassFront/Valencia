import { MainLayout } from "@/components/layout";
import { DiningPage } from "@/components/dining";
import { YourNextStayBooking } from "@/components/home";
import "@/styles/dining/dining.css";

export const metadata = {
  title: "Dining | Valencia - A Luxury Boutique Hotel in Patna",
  description:
    "A table worth coming together for. Discover thoughtfully crafted flavours, warm hospitality and memorable dining at VALENCIA in Patna, guided by Celebrity Chef Michael.",
};

export default function Page() {
  return (
    <MainLayout
      activeNavItem="Dining"
      showFooter={true}
      footerVariant="primary"
    >
      <DiningPage />
      <YourNextStayBooking />
    </MainLayout>
  );
}

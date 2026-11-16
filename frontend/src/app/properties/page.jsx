import { MainLayout } from "@/components/layout";
import {
  PropertiesHero,
  PropertiesShowcase,
  PropertiesComparison,
  PatnaLocationsMap,
  PropertiesBookingSection,
} from "@/components/properties";
import "@/styles/properties/properties.css";

export const metadata = {
  title: "Our Properties | Valencia - A Luxury Boutique Hotel",
  description:
    "Distinct places. A shared welcome. Explore the Yash Events Corporation family: VALENCIA luxury boutique hotel, Umrao The Banquet, and Hotel Jia International in Patna.",
};

export default function PropertiesPage() {
  return (
    <MainLayout activeNavItem="Properties" showFooter={true} footerVariant="primary">
      <div className="properties-page flex flex-col w-full">
        {/* Section 01: Hero Introduction */}
        <PropertiesHero />

        {/* Section 02: A place for every occasion */}
        <PropertiesShowcase />

        {/* Section 03: Compare our properties */}
        <PropertiesComparison />

        {/* Section 04: Find us in Patna & Map */}
        <PatnaLocationsMap />

        {/* Section 10: Booking Section */}
        <PropertiesBookingSection />
      </div>
    </MainLayout>
  );
}


import { MainLayout } from "@/components/layout";
import ValenciaPage from "@/components/valencia/ValenciaPage";
import "@/styles/valencia/valencia.css";

export const metadata = {
  title: "Valencia | A Luxury Boutique Hotel in Patna",
  description:
    "Italian-inspired elegance. A warm welcome in Patna. Planned as a luxury boutique hotel in Patna, VALENCIA brings neoclassical design together with thoughtful hospitality, fine dining, and bespoke event spaces.",
};

export default function Page() {
  return (
    <MainLayout
      activeNavItem="Properties"
      showFooter={true}
      footerVariant="primary"
    >
      <ValenciaPage />
    </MainLayout>
  );
}

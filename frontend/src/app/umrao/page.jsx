import { MainLayout } from "@/components/layout";
import UmraoPage from "@/components/umrao/UmraoPage";
import "@/styles/umrao/umrao.css";

export const metadata = {
  title: "Umrao The Banquet | Celebrate in Patna | Luxury Wedding & Event Venue",
  description:
    "Jaipur-inspired interiors and versatile spaces for weddings, celebrations and memorable gatherings. Features an 8,000 sq ft Main Hall, 17,000 sq ft Open-air Lawn, and budget guest accommodation at Zero Mile, Masaurhi Road, Patna.",
};

export default function Page() {
  return (
    <MainLayout
      activeNavItem="Properties"
      showFooter={true}
      footerVariant="primary"
    >
      <UmraoPage />
    </MainLayout>
  );
}

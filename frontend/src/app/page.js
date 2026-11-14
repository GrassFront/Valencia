import { MainLayout } from "../components/layout";
import {
  HeroSection,
  ExperienceSection,
  ServicesSection,
  RoomsSection,
  PropertiesSection,
  DiningSection,
  GuestExperiencesSection,
  YourNextStayBooking,
} from "../components/home";

export const metadata = {
  title: "Valencia - A Luxury Boutique Hotel",
  description:
    "Where Elegance Feels Like Home. Italian-inspired elegance, thoughtful hospitality and spaces for stays and celebrations that feel truly special.",
};

export default function HomePage() {
  return (
    <MainLayout activeNavItem="Home">
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <RoomsSection />
      <PropertiesSection />
      <DiningSection />
      <GuestExperiencesSection />
      <YourNextStayBooking />
    </MainLayout>
  );
}

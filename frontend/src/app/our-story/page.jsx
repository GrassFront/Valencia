import { MainLayout } from "@/components/layout";
import {
  OurStoryHero,
  FamilySection,
  PhilosophySection,
  JourneyTimelineSection,
  ChefSection,
  HospitalityFamilyCta,
} from "@/components/our-story";
import "@/styles/our-story/our-story.css";

export const metadata = {
  title: "Our Story | Valencia - A Luxury Boutique Hotel",
  description:
    "Rooted in warmth. Inspired by elegance. Discover the vision behind VALENCIA and the shared spirit of hospitality that connects the Yash Events Corporation family.",
};

export default function OurStoryPage() {
  return (
    <MainLayout activeNavItem="Our Story" showFooter={true}>
      <OurStoryHero />
      <FamilySection />
      <PhilosophySection />
      <JourneyTimelineSection />
      <ChefSection />
      <HospitalityFamilyCta />
    </MainLayout>
  );
}

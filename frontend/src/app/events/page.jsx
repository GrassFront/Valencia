import { MainLayout } from "@/components/layout";
import { EventsPage } from "@/components/events";
import { YourNextStayBooking } from "@/components/home";
import "@/styles/events/events.css";

export const metadata = {
  title: "Weddings & Events | Umrao The Banquet · Patna | Valencia",
  description:
    "A beautiful beginning. An unforgettable celebration. Bring your loved ones together in a setting made for your most meaningful moments at Umrao The Banquet, Patna.",
};

export default function Page() {
  return (
    <MainLayout
      activeNavItem="Weddings & Events"
      showFooter={true}
      footerVariant="primary"
    >
      <EventsPage />
      <YourNextStayBooking />
    </MainLayout>
  );
}


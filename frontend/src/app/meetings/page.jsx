import { MainLayout } from "@/components/layout";
import { MeetingsPage } from "@/components/meetings";
import { YourNextStayBooking } from "@/components/home";
import "@/styles/meetings/meetings.css";

export const metadata = {
  title: "Meetings & Conferences | Valencia - A Luxury Boutique Hotel in Patna",
  description:
    "Space for ideas. Room for progress. Bring your team together with meeting spaces at VALENCIA and Umrao in Patna.",
};

export default function Page() {
  return (
    <MainLayout
      activeNavItem="Meetings"
      showFooter={true}
      footerVariant="primary"
    >
      <MeetingsPage />
      <YourNextStayBooking />
    </MainLayout>
  );
}

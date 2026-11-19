import { MainLayout } from "@/components/layout";
import { ContactPage } from "@/components/contact";
import "@/styles/contact/contact.css";

export const metadata = {
  title: "Contact Us | Valencia · Patna",
  description:
    "We’d love to hear from you. For stays, celebrations, dining or business gatherings, connect with the right team across our properties.",
};

export default function Page() {
  return (
    <MainLayout
      activeNavItem="Contact"
      showFooter={true}
      footerVariant="secondary"
    >
      <ContactPage />
    </MainLayout>
  );
}

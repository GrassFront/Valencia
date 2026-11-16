import Header from "./Header";
import Footer from "../common/Footer";
import WhatsAppButton from "../common/WhatsAppButton";

export default function MainLayout({
  children,
  activeNavItem = "Home",
  showFooter = true,
  footerVariant = "primary",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#233028]">
      <Header activeItem={activeNavItem} />
      <main className="flex-1 w-full">
        {children}
      </main>
      {showFooter && <Footer variant={footerVariant} />}
      <WhatsAppButton />
    </div>
  );
}

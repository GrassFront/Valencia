import Header from "./Header";
import Footer from "../footer";

export default function MainLayout({ children, activeNavItem = "Home" }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#233028]">
      <Header activeItem={activeNavItem} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}


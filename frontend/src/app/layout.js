import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Valencia - A Luxury Boutique Hotel",
  description: "Italian-inspired elegance, thoughtful hospitality and spaces for stays and celebrations that feel truly special.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}>
      <body className="min-h-full font-body">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

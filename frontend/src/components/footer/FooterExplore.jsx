import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Properties", href: "/properties" },
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Weddings & Events", href: "#events" },
  { label: "Meetings", href: "#meetings" },
  { label: "Contact", href: "#contact" },
];

export default function FooterExplore() {
  return (
    <div className="flex flex-col">
      {/* Column Title */}
      <h3 className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] text-[#C9A96A] uppercase mb-1.5 sm:mb-2">
        Explore
      </h3>

      {/* Navigation Links */}
      <ul className="space-y-0.5 sm:space-y-1">
        {EXPLORE_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[16px] leading-[25px] font-normal text-[#F8F5EA] tracking-normal font-sans hover:text-[#C9A96A] transition-colors duration-200 inline-block"
              style={{
                fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                fontSize: "16px",
                lineHeight: "25px",
                fontWeight: 400,
                letterSpacing: "0%",
                color: "#F8F5EA",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

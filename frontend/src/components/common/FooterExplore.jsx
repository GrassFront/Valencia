import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Properties", href: "/properties" },
  { label: "Rooms & Suites", href: "/#rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Weddings & Events", href: "/#events" },
  { label: "Meetings", href: "/meetings" },
  { label: "Contact", href: "/#contact" },
];

export default function FooterExplore() {
  return (
    <div className="flex flex-col">
      {/* Column Title */}
      <h3 className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] text-[#C9A96A] uppercase mb-1.5 sm:mb-2 font-body">
        Explore
      </h3>

      {/* Navigation Links */}
      <ul className="space-y-0.5 sm:space-y-1">
        {EXPLORE_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-[15px] sm:text-[16px] leading-[25px] font-normal text-[#F8F5EA] hover:text-[#C9A96A] transition-colors duration-200 inline-block"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

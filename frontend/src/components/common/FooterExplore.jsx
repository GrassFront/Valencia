import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Properties", href: "/properties" },
  { label: "Rooms & Suites", href: "/#rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Weddings & Events", href: "/events" },
  { label: "Meetings", href: "/meetings" },
  { label: "Contact", href: "/contact" },
];

export default function FooterExplore({ variant = "primary" }) {
  const isSecondary = variant === "secondary" || variant === "green";
  const lineColor = isSecondary ? "bg-[#C9A96A]/35" : "bg-[#C9A96A]/30";

  return (
    <div className="flex flex-col">
      {/* Column Title */}
      <div className="flex items-center gap-4 mb-2.5 sm:mb-2">
        <h3 className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] text-[#C9A96A] uppercase font-body shrink-0">
          Explore
        </h3>
        <div className={`sm:hidden flex-1 h-[1px] ${lineColor}`} aria-hidden="true" />
      </div>

      {/* Navigation Links (2 columns on mobile, single column on sm+) */}
      <ul className="grid grid-rows-4 grid-flow-col gap-x-6 gap-y-1.5 sm:block sm:space-y-1">
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

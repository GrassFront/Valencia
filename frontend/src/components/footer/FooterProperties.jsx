import Link from "next/link";

const PROPERTIES = [
  {
    name: "VALENCIA",
    isUppercase: true,
    subtitle: "Luxury Boutique Hotel · Patna",
    detail: "Address & phone: to be confirmed",
    href: "/properties#valencia",
  },
  {
    name: "Umrao The Banquet",
    isUppercase: false,
    subtitle: "Zero Mile, Masaurhi Road, Patna 800007",
    detail: "Phone: to be confirmed",
    href: "/properties#umrao",
  },
  {
    name: "Hotel Jia International",
    isUppercase: false,
    subtitle: "Fraser Road, opposite Buddha Smriti Park, Patna",
    detail: "Phone: to be confirmed",
    href: "/properties#jia",
  },
];

export default function FooterProperties() {
  return (
    <div className="flex flex-col">
      {/* Column Title */}
      <h3 className="text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] text-[#C9A96A] uppercase mb-1.5 sm:mb-2">
        Our Properties
      </h3>

      {/* Properties List */}
      <div className="space-y-2 sm:space-y-2.5">
        {PROPERTIES.map((property, index) => (
          <div key={property.name} className="group">
            <Link href={property.href} className="block">
              <h4
                className={`font-display text-[24px] sm:text-[28px] leading-[32px] sm:leading-[35px] font-normal text-[#F8F5EA] tracking-normal group-hover:text-[#C9A96A] transition-colors ${
                  property.isUppercase ? "uppercase" : ""
                }`}
                style={{
                  fontFamily: "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
                  fontSize: "28px",
                  lineHeight: "35px",
                  fontWeight: 400,
                  letterSpacing: "0%",
                  color: "#F8F5EA",
                }}
              >
                {property.name}
              </h4>
            </Link>

            <p
              className="mt-1"
              style={{
                fontFamily: "var(--font-playfair-display), 'Playfair Display', Georgia, serif",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                letterSpacing: "0%",
                color: "#F8F5EA",
              }}
            >
              {property.subtitle}
            </p>

            {/* Address / Phone row with location icon */}
            <div className="flex items-center gap-2 mt-1.5 text-[#CBBBA9]">
              <svg
                className="w-3.5 h-3.5 text-[#C9A96A] shrink-0 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-manrope), 'Manrope', sans-serif",
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  letterSpacing: "0%",
                }}
              >
                {property.detail}
              </span>
            </div>

            {/* Divider line between properties */}
            {index < PROPERTIES.length - 1 && (
              <div className="w-full h-[1px] bg-[#C9A96A]/20 mt-2 sm:mt-2.5" />
            )}
          </div>
        ))}
      </div>

      {/* Contact Us CTA link */}
      <div className="pt-1.5">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#C9A96A] hover:text-[#FAF4EB] transition-colors uppercase group"
        >
          <span>Contact Us</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

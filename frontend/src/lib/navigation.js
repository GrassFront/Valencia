export const NAV_ITEMS = [
  { label: "Home", href: "/", active: true },
  { label: "Our Story", href: "#our-story" },
  {
    label: "Properties",
    href: "#properties",
    hasDropdown: true,
    children: [
      { label: "Valencia Patna", href: "#properties" },
      { label: "Hotel JIA", href: "#properties" },
      { label: "Umrao", href: "#properties" },
    ],
  },
  {
    label: "Rooms & Suites",
    href: "#rooms",
    hasDropdown: true,
    children: [
      { label: "Deluxe Room", href: "#rooms" },
      { label: "Executive Suite", href: "#rooms" },
      { label: "Presidential Suite", href: "#rooms" },
    ],
  },
  { label: "Dining", href: "#dining" },
  { label: "Weddings & Events", href: "#events" },
  { label: "Meetings", href: "#meetings" },
  { label: "Contact", href: "#contact" },
];


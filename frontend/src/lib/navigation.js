export const NAV_ITEMS = [
  { label: "Home", href: "/", active: true },
  { label: "Our Story", href: "#our-story" },
  {
    label: "Properties",
    href: "#properties",
    hasDropdown: true,
    children: [
      {
        label: "Valencia",
        subtitle: "A Luxury Boutique Hotel",
        href: "#properties",
      },
      {
        label: "Umrao The Banquet",
        subtitle: "Weddings & Celebrations",
        href: "#properties",
      },
      {
        label: "Hotel JIA International",
        subtitle: "Business & Leisure Stay",
        href: "#properties",
      },
    ],
  },
  {
    label: "Rooms & Suites",
    href: "#rooms",
    hasDropdown: true,
    children: [
      {
        label: "Deluxe Room",
        subtitle: "A welcoming retreat for restful stays",
        href: "#rooms",
      },
      {
        label: "Twin Room",
        subtitle: "Shared stays with individual comfort",
        href: "#rooms",
      },
      {
        label: "Suite",
        subtitle: "Room to unwind with separate retreat",
        href: "#rooms",
      },
      {
        label: "Presidential Suite",
        subtitle: "An expansive setting for exceptional stay",
        href: "#rooms",
      },
    ],
  },
  { label: "Dining", href: "#dining" },
  { label: "Weddings & Events", href: "#events" },
  { label: "Meetings", href: "#meetings" },
  { label: "Contact", href: "#contact" },
];

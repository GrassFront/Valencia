import Image from "next/image";

const FACILITIES = [
  {
    name: "Wi-Fi",
    text: "Connectivity for your meeting",
    icon: "/images/MeetingsPage/Facilities/Wi-Fi icon.svg",
  },
  {
    name: "Audio & Visual",
    text: "Presentation requirements",
    icon: "/images/MeetingsPage/Facilities/Audio & Visual icon.svg",
  },
  {
    name: "Catering",
    text: "Refreshments and meal options",
    icon: "/images/MeetingsPage/Facilities/Catering icon.svg",
  },
  {
    name: "Parking",
    text: "Guest arrival arrangements",
    icon: "/images/MeetingsPage/Facilities/Parking icon.svg",
  },
  {
    name: "Concierge",
    text: "On-site assistance",
    icon: "/images/MeetingsPage/Facilities/Concierge icon.svg",
  },
];

export default function MeetingsFacilities() {
  return (
    <section className="meetings-facilities" aria-label="Meeting Facilities">
      {/* Header */}
      <div className="meetings-facilities-header">
        <span className="meetings-facilities-eyebrow">MEETING FACILITIES</span>
        <h2 className="meetings-facilities-title">The essentials for a productive day.</h2>
        <p className="meetings-facilities-subtitle">
          Discuss the facilities and support your gathering needs.
        </p>
      </div>

      {/* Five Columns */}
      <div className="meetings-facilities-cols">
        {FACILITIES.map((facility, index) => (
          <div key={facility.name} className="contents">
            <div className="meetings-facility-col">
              <div className="meetings-facility-icon-wrap">
                <Image
                  src={facility.icon}
                  alt={facility.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="meetings-facility-name">{facility.name}</h3>
              <p className="meetings-facility-text">{facility.text}</p>
            </div>

            {index < FACILITIES.length - 1 && (
              <div className="meetings-facility-divider" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Horizontal Line */}
      <div className="meetings-facilities-bottom-line" aria-hidden="true" />
    </section>
  );
}

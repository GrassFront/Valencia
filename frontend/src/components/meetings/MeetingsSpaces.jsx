import Image from "next/image";
import { CapacityIcon, LayoutsIcon } from "./MeetingsIcons";

const SPACES = [
  {
    id: "valencia-meeting-space",
    property: "VALENCIA",
    title: "Meeting Space",
    desc: "A considered setting for focused discussions, team meetings and presentations.",
    image: "/images/MeetingsPage/Spaces to Connect/Meeting Space/Native crop.png",
    alt: "Meeting Space at Valencia",
    capacity: "Capacity: to be confirmed",
    layouts: "Layouts: on request",
  },
  {
    id: "umrao-conference-room",
    property: "UMRAO THE BANQUET",
    title: "Conference Room",
    desc: "Explore a space for conferences, workshops and corporate gatherings.",
    image: "/images/MeetingsPage/Spaces to Connect/Conference Room/Native crop.png",
    alt: "Conference Room at Umrao The Banquet",
    capacity: "Capacity: to be confirmed",
    layouts: "Layouts: on request",
  },
];

export default function MeetingsSpaces() {
  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const el = document.getElementById("meeting-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="spaces-to-connect" className="meetings-spaces" aria-label="Spaces to Connect">
      {/* Header */}
      <div className="meetings-spaces-header">
        <span className="meetings-spaces-eyebrow">SPACES TO CONNECT</span>
        <h2 className="meetings-spaces-title">Find the setting for your next meeting.</h2>
        <p className="meetings-spaces-subtitle">
          Explore meeting spaces at VALENCIA and Umrao, tailored around your gathering.
        </p>
      </div>

      {/* Cards Row */}
      <div className="meetings-spaces-row">
        {SPACES.map((space) => (
          <div key={space.id} className="meetings-space-card">
            <div className="meetings-space-crop">
              <Image
                src={space.image}
                alt={space.alt}
                width={622}
                height={275}
                className="meetings-space-img"
                priority
              />
              <span className="meetings-space-badge">Concept image</span>
            </div>

            <div className="meetings-space-content">
              <div>
                <span className="meetings-space-property">{space.property}</span>
                <h3 className="meetings-space-name">{space.title}</h3>
                <p className="meetings-space-desc">{space.desc}</p>
              </div>

              <div>
                <div className="meetings-space-details">
                  <div className="meetings-space-detail-item">
                    <CapacityIcon className="w-[34px] h-[30px] shrink-0" />
                    <span>{space.capacity}</span>
                  </div>

                  <div className="meetings-space-divider" aria-hidden="true" />

                  <div className="meetings-space-detail-item">
                    <LayoutsIcon className="w-[29px] h-[29px] shrink-0" />
                    <span>{space.layouts}</span>
                  </div>
                </div>

                <a
                  href="#meeting-enquiry"
                  onClick={scrollToEnquiry}
                  className="meetings-space-btn"
                >
                  <span>ENQUIRE ABOUT THIS SPACE</span>
                  <span className="text-[20px] leading-none mb-0.5">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p className="meetings-spaces-footnote">
        Our team will confirm space suitability, seating layouts and availability for your requirements.
      </p>
    </section>
  );
}

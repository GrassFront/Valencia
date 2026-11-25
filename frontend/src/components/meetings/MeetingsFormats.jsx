"use client";

import Image from "next/image";

const FORMATS = [
  {
    id: "half-day",
    title: "Half Day",
    tag: "FOCUSED SESSIONS",
    desc: "For team discussions, presentations and shorter workshops.",
    note: "Discuss timing, setup and refreshments.",
    image: "/images/MeetingsPage/Formats/Half Day/Native crop.png",
    alt: "Half Day Meeting Format",
  },
  {
    id: "full-day",
    title: "Full Day",
    tag: "A COMPLETE WORKING DAY",
    desc: "For training, conferences and agendas that need more time.",
    note: "Discuss meeting space, breaks and meal options.",
    image: "/images/MeetingsPage/Formats/Full Day/Native crop.png",
    alt: "Full Day Meeting Format",
  },
  {
    id: "residential",
    title: "Residential",
    tag: "MEET, STAY & CONNECT",
    desc: "For multi-day programmes and teams travelling to Patna.",
    note: "Discuss meeting space, guest rooms and dining.",
    image: "/images/MeetingsPage/Formats/Residential/Native crop.png",
    alt: "Residential Meeting Format",
  },
];

export default function MeetingsFormats() {
  const scrollToEnquiry = (e) => {
    e.preventDefault();
    const el = document.getElementById("meeting-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="meetings-formats" aria-label="Meeting Formats">
      {/* Header */}
      <div className="meetings-formats-header">
        <div className="meetings-formats-eyebrow-row">
          <div className="meetings-formats-rule" aria-hidden="true" />
          <span className="meetings-formats-eyebrow">MEETING FORMATS</span>
          <div className="meetings-formats-rule" aria-hidden="true" />
        </div>
        <h2 className="meetings-formats-title">A format that fits your agenda.</h2>
        <p className="meetings-formats-subtitle">
          Explore options for focused sessions, full-day programmes and meetings with a stay.
        </p>
      </div>

      {/* Cards Row */}
      <div className="meetings-formats-row">
        {FORMATS.map((format) => (
          <div key={format.id} className="meetings-format-card">
            <div className="meetings-format-crop">
              <Image
                src={format.image}
                alt={format.alt}
                width={404}
                height={197}
                className="meetings-format-img"
              />
            </div>

            <div className="meetings-format-content">
              <div>
                <h3 className="meetings-format-name">{format.title}</h3>
                <span className="meetings-format-tag">{format.tag}</span>
                <p className="meetings-format-desc">{format.desc}</p>
              </div>

              <div>
                <div className="meetings-format-divider" aria-hidden="true" />
                <p className="meetings-format-note">{format.note}</p>
              </div>

              <a
                href="#meeting-enquiry"
                onClick={scrollToEnquiry}
                className="meetings-format-btn"
              >
                <span>ENQUIRE ABOUT THIS FORMAT</span>
                <span className="text-[18px] leading-none mb-0.5 ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

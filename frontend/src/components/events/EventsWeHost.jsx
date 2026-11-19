"use client";

import Image from "next/image";

const HOST_EVENTS_DATA = [
  {
    id: "weddings",
    title: "Weddings",
    eventTypeOption: "Wedding",
    image: "/images/EventPage/Event we host/Weddings/Native crop.png",
    desc: (
      <>
        A beautiful setting for your ceremony<br className="hidden sm:inline" /> and new beginnings.
      </>
    ),
  },
  {
    id: "receptions",
    title: "Receptions",
    eventTypeOption: "Reception",
    image: "/images/EventPage/Event we host/Receptions/Native crop.png",
    desc: (
      <>
        Bring loved ones together to celebrate<br className="hidden sm:inline" /> your next chapter.
      </>
    ),
  },
  {
    id: "social-gatherings",
    title: "Social Gatherings",
    eventTypeOption: "Social Gathering (Birthday / Anniversary)",
    image: "/images/EventPage/Event we host/Social Gatherings/Native crop.png",
    desc: (
      <>
        Birthdays, anniversaries and<br className="hidden sm:inline" /> moments worth sharing.
      </>
    ),
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    eventTypeOption: "Corporate Event",
    image: "/images/EventPage/Event we host/Corporate Events/Native crop.png",
    desc: (
      <>
        Professional gatherings, team occasions<br className="hidden sm:inline" /> and business milestones.
      </>
    ),
  },
];

export default function EventsWeHost({ onSelectEventType }) {
  const handleCardClick = (eventItem) => {
    if (onSelectEventType) {
      onSelectEventType(eventItem.eventTypeOption);
    } else {
      const formEl = document.getElementById("event-enquiry");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="events-host-section" aria-label="Events We Host">
      <div className="events-host-inner">
        {/* Heading & Action Row */}
        <div className="events-host-header">
          <div className="events-host-heading-box">
            <span className="events-host-eyebrow">EVENTS WE HOST</span>
            <h2 className="events-host-title">For every reason to come together.</h2>
            <p className="events-host-desc">
              From life’s milestones to meaningful business gatherings,<br className="hidden sm:inline" /> find your setting at Umrao.
            </p>
          </div>

          <a
            href="#event-enquiry"
            onClick={(e) => {
              e.preventDefault();
              const formEl = document.getElementById("event-enquiry");
              if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
            }}
            className="events-host-header-btn group"
          >
            <span className="events-host-header-btn-text">PLAN YOUR EVENT</span>
            <span className="events-host-header-btn-arrow transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* Event Cards Row */}
        <div className="events-host-grid">
          {HOST_EVENTS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="events-host-card cursor-pointer group"
            >
              {/* Card Image */}
              <div className="events-host-card-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={321}
                  height={283}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Text */}
              <div className="events-host-card-text">
                <h3 className="events-host-card-title">{item.title}</h3>
                <p className="events-host-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

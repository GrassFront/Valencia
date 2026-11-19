"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "How many guests can the venues accommodate?",
    answer:
      "Capacity depends on the venue and event layout. Share your estimated guest count and our team will help you explore suitable options.",
  },
  {
    id: "faq-2",
    question: "Can we arrange a venue visit?",
    answer:
      "Yes, we encourage venue visits. You can schedule a visit through our enquiry form or by contacting our events team directly to walk through The Main Hall, The Lawn and The Small Hall.",
  },
  {
    id: "faq-3",
    question: "Is the Small Hall offer available for my event?",
    answer:
      "The complimentary Small Hall offer is available for qualifying wedding bookings when booking the Main Hall. Terms, dates and eligibility are confirmed upon enquiry.",
  },
  {
    id: "faq-4",
    question: "Can you help arrange accommodation for guests?",
    answer:
      "Yes, we offer accommodation coordination across Umrao, VALENCIA luxury boutique hotel, and Hotel Jia International for your attendees and family.",
  },
  {
    id: "faq-5",
    question: "Can we discuss catering and décor requirements?",
    answer:
      "Our culinary and events team can curate tailored menus, catering services, and collaborate with preferred décor partners to match your vision.",
  },
  {
    id: "faq-6",
    question: "Does submitting an enquiry confirm my booking?",
    answer:
      "No, submitting an enquiry does not confirm a booking. Our dedicated team will reach out to discuss availability, pricing, and next steps.",
  },
];

export default function EventsFaq({ onContactClick }) {
  // First item open by default as shown in the Figma screenshot
  const [openIds, setOpenIds] = useState(["faq-1"]);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExtraClick = (e) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const formEl = document.getElementById("event-enquiry");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="events-faq-section" aria-label="Frequently Asked Questions">
      <div className="events-faq-inner">
        {/* Left Column: FAQ Introduction */}
        <div className="events-faq-intro">
          <span className="events-faq-eyebrow">A LITTLE MORE CLARITY</span>

          <h2 className="events-faq-title">
            Before you<br />
            plan your day.
          </h2>

          <p className="events-faq-desc">
            Answers to common questions about<br className="hidden sm:inline" /> celebrating at Umrao.
          </p>

          <div className="events-faq-breathing" aria-hidden="true" />

          <a
            href="#event-enquiry"
            onClick={handleExtraClick}
            className="events-faq-extra"
          >
            Have something else in mind?
          </a>
        </div>

        {/* Right Column: Questions Accordion */}
        <div className="events-faq-list" role="region" aria-label="Questions list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div key={item.id} className="w-full">
                <div
                  className={`events-faq-item ${isOpen ? "open" : "closed"}`}
                  onClick={() => toggleFaq(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFaq(item.id);
                    }
                  }}
                >
                  <div className="events-faq-question-row">
                    <h3 className="events-faq-question">{item.question}</h3>
                    <span className="events-faq-toggle-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {isOpen && (
                    <p className="events-faq-answer animate-in fade-in duration-200">
                      {item.answer}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="events-faq-divider" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

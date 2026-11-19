"use client";

import Image from "next/image";

const PLANNING_STEPS = [
  {
    stepNumber: "01",
    title: "Enquire",
    desc: (
      <>
        Share your event, preferred dates and<br className="hidden sm:inline" /> estimated guest count.
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame.svg",
  },
  {
    stepNumber: "02",
    title: "Visit",
    desc: (
      <>
        Explore the spaces with our team<br className="hidden sm:inline" /> and discuss your plans.
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame 2.svg",
  },
  {
    stepNumber: "03",
    title: "Quote",
    desc: (
      <>
        Review a tailored proposal with<br className="hidden sm:inline" /> inclusions and terms.
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame 3.svg",
  },
  {
    stepNumber: "04",
    title: "Confirm",
    desc: (
      <>
        Finalise the details and complete the<br className="hidden sm:inline" /> agreed booking formalities.
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame 4.svg",
  },
];

export default function EventsPlanning() {
  return (
    <section className="events-plan-section" aria-label="Planning Process">
      <div className="events-plan-inner">
        {/* Planning Heading */}
        <div className="events-plan-heading-box">
          <span className="events-plan-eyebrow">
            FROM FIRST HELLO TO YOUR BIG DAY
          </span>
          <h2 className="events-plan-title">
            Your celebration, planned together.
          </h2>
          <p className="events-plan-desc">
            Four simple steps to bring your occasion<br className="hidden sm:inline" /> to life at Umrao.
          </p>
        </div>

        {/* Four Planning Steps */}
        <div className="events-plan-steps">
          {PLANNING_STEPS.map((step) => (
            <div key={step.stepNumber} className="events-plan-step-card">
              {/* Step number badge */}
              <div className="events-step-number-circle">
                {step.stepNumber}
              </div>

              {/* Step Icon */}
              <div className="events-step-icon relative">
                <Image
                  src={step.icon}
                  alt={`${step.title} step icon`}
                  width={49}
                  height={49}
                  className="w-[49px] h-[49px]"
                />
              </div>

              {/* Step Title */}
              <h3 className="events-step-title">{step.title}</h3>

              {/* Step Description */}
              <p className="events-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

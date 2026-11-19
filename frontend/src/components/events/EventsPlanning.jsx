"use client";

import Image from "next/image";

const PLANNING_STEPS = [
  {
    stepNumber: "01",
    title: "Enquire",
    desc: (
      <>
        <span className="block">Share your event, preferred</span>
        <span className="block">dates and estimated guest count.</span>
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame.svg",
  },
  {
    stepNumber: "02",
    title: "Visit",
    desc: (
      <>
        <span className="block">Explore the spaces with our team</span>
        <span className="block">and discuss your plans.</span>
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame 2.svg",
  },
  {
    stepNumber: "03",
    title: "Quote",
    desc: (
      <>
        <span className="block">Review a tailored proposal</span>
        <span className="block">with inclusions and terms.</span>
      </>
    ),
    icon: "/images/EventPage/Hello Big Day/Frame 3.svg",
  },
  {
    stepNumber: "04",
    title: "Confirm",
    desc: (
      <>
        <span className="block">Finalise the details and complete</span>
        <span className="block">the agreed booking formalities.</span>
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
            Four simple steps to bring your occasion to life at Umrao.
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

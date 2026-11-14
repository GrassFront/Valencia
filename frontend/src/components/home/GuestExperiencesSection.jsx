"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./css/layer-09-guest-experiences.css";

const REVIEWS = [
  {
    id: "ritika",
    name: "Ritika Sharma",
    location: "MUMBAI, INDIA",
    portrait: "/images/homepage/GUEST EXPERIENCES/Ritika Sharma/Cropped portrait.png",
    headline: "“An absolutely\nremarkable stay.”",
    text: "The attention to detail, warm hospitality and elegant rooms made our stay truly special. Everything felt so thoughtfully curated.",
  },
  {
    id: "arjun",
    name: "Arjun Kapoor",
    location: "DELHI, INDIA",
    portrait: "/images/homepage/GUEST EXPERIENCES/Arjun Kapoor/Cropped portrait.png",
    headline: "“A perfect blend of\nluxury and comfort.”",
    text: "From check-in to checkout, every moment was memorable. The ambience, service and attention to detail exceeded our expectations.",
  },
  {
    id: "neha",
    name: "Neha Patel",
    location: "BENGALURU, INDIA",
    portrait: "/images/homepage/GUEST EXPERIENCES/Neha Patel/Cropped portrait.png",
    headline: "“Exceptional experience\nin every way.”",
    text: "The food, service and ambience were outstanding. A truly refined experience with impeccable hospitality. We can’t wait to return.",
  },
];

export default function GuestExperiencesSection() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = 310;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Continuous auto-scroll timer (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % REVIEWS.length;
        if (scrollContainerRef.current) {
          const cardWidth = 310;
          scrollContainerRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: "smooth",
          });
        }
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Guest Experiences"
      className="layer-09-guest-experiences"
    >
      <div className="layer-09-guest-experiences-inner">
        {/* Left Column: Stories That Stay Introduction */}
        <div className="stories-that-stay-introduction">
          <div className="eyebrow-and-rule">
            <p className="eyebrow">GUEST EXPERIENCES</p>
            <div className="gold-divider-7" />
          </div>

          <div className="title">
            <p className="title-line-1">Stories</p>
            <p className="title-line-2">That Stay.</p>
          </div>

          <p className="introduction">
            Thoughtful service, elegant spaces and unforgettable moments — in the
            words of our guests.
          </p>
        </div>

        {/* Permanent Gold Divider (Stays in window, does not scroll) */}
        <div className="permanent-gold-divider" aria-hidden="true" />

        {/* Right Area: Carousel of Reviews */}
        <div
          className="reviews-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="reviews-container-outer">
            {/* Scrollable Reviews Row */}
            <div
              ref={scrollContainerRef}
              className="reviews-auto-layout"
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const idx = Math.round(scrollLeft / 295);
                if (idx >= 0 && idx < REVIEWS.length && idx !== activeIndex) {
                  setActiveIndex(idx);
                }
              }}
            >
              {REVIEWS.map((review, index) => (
                <article key={review.id} className="review-card">
                  {/* Vertical hairline gold divider between cards (not for first card, as permanent divider handles it) */}
                  {index > 0 && <div className="review-vertical-divider" />}

                  {/* Quote Mark & Five Stars */}
                  <div className="quote-and-five-star-rating">
                    <span className="quote-mark">“</span>
                    <div className="five-stars">
                      <Image
                        src="/images/homepage/GUEST EXPERIENCES/Five stars.svg"
                        alt="5 stars"
                        width={92}
                        height={24}
                      />
                    </div>
                  </div>

                  {/* Review Headline */}
                  <h3 className="review-headline">
                    {review.headline.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </h3>

                  {/* Review Body Text */}
                  <p className="review-text">{review.text}</p>

                  {/* Gold Divider Line */}
                  <div className="gold-divider-horizontal" />

                  {/* Guest Profile */}
                  <div className="guest-profile">
                    <div className="guest-portrait">
                      <Image
                        src={review.portrait}
                        alt={review.name}
                        fill
                        sizes="50px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="guest-identity">
                      <h4 className="guest-name">{review.name}</h4>
                      <p className="guest-location">{review.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="carousel-pagination" role="tablist" aria-label="Review pagination">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-label={`Go to review ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
                className={`pagination-dot ${
                  activeIndex === idx
                    ? "pagination-dot-active"
                    : "pagination-dot-inactive"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

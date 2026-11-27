"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./css/room-categories-alternative-rates-and.css";

const ROOMS_DATA = [
  {
    id: "deluxe-room",
    category: "deluxe",
    title: "Deluxe Room",
    price: "₹6,000",
    rateUnit: "per hour + taxes & fees",
    description: "A welcoming retreat for restful stays.",
    images: [
      "/images/Room and Suites/rooms details/Deluxe/Cropped photo/Native image crop.png",
      "/images/Room and Suites/rooms details/Native image crop.png",
      "/images/Room and Suites/rooms details/Native image crop2.png",
    ],
    specs: [
      {
        icon: "/images/Room and Suites/rooms details/Frame.svg",
        text: "320 sq. ft.",
        alt: "Room size",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 2.svg",
        text: "2 Guests",
        alt: "Occupancy",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 3.svg",
        text: "King Bed",
        alt: "Bed type",
      },
    ],
    amenities: [
      {
        icon: "/images/Room and Suites/rooms details/Wi-Fi icon.svg",
        name: "Wi-Fi",
      },
      {
        icon: "/images/Room and Suites/rooms details/AC icon.svg",
        name: "AC",
      },
      {
        icon: "/images/Room and Suites/rooms details/Tea/Coffee icon.svg",
        name: "Tea/Coffee",
      },
    ],
  },
  {
    id: "twin-room",
    category: "twin",
    title: "Twin Room",
    price: "₹6,500",
    rateUnit: "per hour + taxes & fees",
    description: "Shared stays, with space for individual comfort.",
    images: [
      "/images/Room and Suites/rooms details/Native image crop.png",
      "/images/Room and Suites/rooms details/Deluxe/Cropped photo/Native image crop.png",
      "/images/Room and Suites/rooms details/Native image crop3.png",
    ],
    specs: [
      {
        icon: "/images/Room and Suites/rooms details/Frame.svg",
        text: "340 sq. ft.",
        alt: "Room size",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 2.svg",
        text: "2 Guests",
        alt: "Occupancy",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 3.svg",
        text: "Twin Beds",
        alt: "Bed type",
      },
    ],
    amenities: [
      {
        icon: "/images/Room and Suites/rooms details/Wi-Fi icon.svg",
        name: "Wi-Fi",
      },
      {
        icon: "/images/Room and Suites/rooms details/AC icon.svg",
        name: "AC",
      },
      {
        icon: "/images/Room and Suites/rooms details/Tea/Coffee icon.svg",
        name: "Tea/Coffee",
      },
    ],
  },
  {
    id: "suite",
    category: "suite",
    title: "Suite",
    price: "₹9,000",
    rateUnit: "per hour + taxes & fees",
    description: "Room to unwind, with a separate sense of retreat.",
    images: [
      "/images/Room and Suites/rooms details/Native image crop2.png",
      "/images/Room and Suites/rooms details/Native image crop3.png",
      "/images/Room and Suites/rooms details/Deluxe/Cropped photo/Native image crop.png",
    ],
    specs: [
      {
        icon: "/images/Room and Suites/rooms details/Frame.svg",
        text: "520 sq. ft.",
        alt: "Room size",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 2.svg",
        text: "2 Guests",
        alt: "Occupancy",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 3.svg",
        text: "King Bed",
        alt: "Bed type",
      },
    ],
    amenities: [
      {
        icon: "/images/Room and Suites/rooms details/Wi-Fi icon.svg",
        name: "Wi-Fi",
      },
      {
        icon: "/images/Room and Suites/rooms details/AC icon.svg",
        name: "AC",
      },
      {
        icon: "/images/Room and Suites/rooms details/Mini Bar icon.svg",
        name: "Mini Bar",
      },
    ],
  },
  {
    id: "presidential-suite",
    category: "presidential-suite",
    title: "Presidential Suite",
    price: "₹18,000",
    rateUnit: "per hour + taxes & fees",
    description: "An expansive setting for an exceptional stay.",
    images: [
      "/images/Room and Suites/rooms details/Native image crop3.png",
      "/images/Room and Suites/rooms details/Native image crop2.png",
      "/images/Room and Suites/rooms details/Native image crop.png",
    ],
    specs: [
      {
        icon: "/images/Room and Suites/rooms details/Frame.svg",
        text: "1,200 sq. ft.",
        alt: "Room size",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 2.svg",
        text: "4 Guests",
        alt: "Occupancy",
      },
      {
        icon: "/images/Room and Suites/rooms details/Frame 3.svg",
        text: "King Bed",
        alt: "Bed type",
      },
    ],
    amenities: [
      {
        icon: "/images/Room and Suites/rooms details/Wi-Fi icon.svg",
        name: "Wi-Fi",
      },
      {
        icon: "/images/Room and Suites/rooms details/AC icon.svg",
        name: "AC",
      },
      {
        icon: "/images/Room and Suites/rooms details/Butler Service icon.svg",
        name: "Butler Service",
      },
    ],
  },
];

function RoomCardItem({ room }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll room photos every 2 seconds unless user hovers/focuses
  useEffect(() => {
    if (isPaused || room.images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) =>
        prev === room.images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, room.images.length]);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <article
      className="room-card"
      aria-label={room.title}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Photo with Auto-Scroll Carousel Track */}
      <div className="room-photo-wrapper">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
          data-room-slide-index={currentImgIndex}
        >
          {room.images.map((imgSrc, idx) => (
            <div key={imgSrc + idx} className="relative w-full h-full shrink-0">
              <Image
                src={imgSrc}
                alt={`${room.title} view ${idx + 1}`}
                width={600}
                height={260}
                className="room-photo-image"
                unoptimized
                priority={room.id === "deluxe-room" && idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="photo-dots-indicator" aria-label="Slide indicators">
          {room.images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentImgIndex(idx);
              }}
              aria-label={`View photo ${idx + 1}`}
              className={`photo-dot border-0 p-0 cursor-pointer ${
                idx === currentImgIndex ? "photo-dot-active" : ""
              }`}
            />
          ))}
        </div>

        {/* Carousel Prev/Next Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="photo-nav-btn photo-nav-prev"
        >
          <ChevronLeft size={16} strokeWidth={2.2} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="photo-nav-btn photo-nav-next"
        >
          <ChevronRight size={16} strokeWidth={2.2} />
        </button>
      </div>

      {/* 2. Room Content */}
      <div className="room-card-content">
        {/* Header: Title and Rate */}
        <div className="room-header-row">
          <h3 className="room-title">{room.title}</h3>
          <div className="room-rate-block">
            <span className="room-rate-price">{room.price}</span>
            <span className="room-rate-unit">{room.rateUnit}</span>
          </div>
        </div>

        {/* Description */}
        <p className="room-description">{room.description}</p>

        {/* Specifications: Size, Guests, Bed */}
        <div className="room-specs-row">
          {room.specs.map((spec, idx) => (
            <div key={idx} className="room-spec-item">
              <Image
                src={spec.icon}
                alt={spec.alt}
                width={20}
                height={20}
                className="room-spec-icon"
                unoptimized
              />
              <span className="room-spec-text">{spec.text}</span>
            </div>
          ))}
        </div>

        {/* Key Amenities Strip (Styled exactly like ss1) */}
        <div className="room-amenities-strip">
          <span
            className="amenities-label"
            style={{
              color: "#705B47",
              fontFamily: 'var(--font-manrope), "Manrope", system-ui, sans-serif',
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Key Amenities
          </span>
          <div className="amenities-list">
            {room.amenities.map((item, idx) => (
              <div key={idx} className="amenity-item">
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="amenity-icon"
                  unoptimized
                />
                <span
                  className="amenity-name"
                  style={{
                    color: "#705B47",
                    fontFamily: 'var(--font-manrope), "Manrope", system-ui, sans-serif',
                    fontSize: "14.5px",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="room-actions-row">
          <Link
            href={`/rooms/${room.id}`}
            className="room-btn-view-details"
          >
            VIEW DETAILS
          </Link>
          <Link
            href={`/rooms/${room.id}`}
            className="room-btn-enquire"
          >
            BOOK STAY &nbsp;→
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function RoomCategoriesAlternativeRatesAndAmenities({
  filterCategory = "all",
}) {
  const filteredRooms =
    filterCategory && filterCategory !== "all"
      ? ROOMS_DATA.filter((r) => r.category === filterCategory)
      : ROOMS_DATA;

  return (
    <section
      aria-label="Room categories, rates, and amenities"
      className="room-categories-alternative-rates-and"
    >
      <div className="room-categories-container">
        <div className="room-cards-grid">
          {filteredRooms.map((room) => (
            <RoomCardItem key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { RoomCategoriesAlternativeRatesAndAmenities as RoomCategoriesGrid };

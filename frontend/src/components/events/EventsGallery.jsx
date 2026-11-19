"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

const CATEGORIES = ["All", "Weddings", "Receptions", "Pre-wedding", "The Lawn"];

const GALLERY_SETS = [
  {
    category: "All",
    main: {
      title: "Wedding ceremony mandap setup",
      src: "/images/EventPage/Celebration Gallery/Wedding ceremony/Native crop.png",
      caption: "Grand floral mandap and aisle decoration in the Main Hall",
    },
    sideTop: {
      title: "Lawn celebration evening setup",
      src: "/images/EventPage/Celebration Gallery/Lawn celebration/Native crop.png",
      caption: "Open-air lawn celebration under fairy lights and trees",
    },
    sideBottom: {
      title: "Pre-wedding vibrant setting",
      src: "/images/EventPage/Celebration Gallery/Pre-wedding setting/Native crop.png",
      caption: "Intimate Mehndi and Haldi vibrant yellow floral backdrop",
    },
  },
  {
    category: "Weddings",
    main: {
      title: "Wedding ceremony grand stage",
      src: "/images/EventPage/Celebration Gallery/Wedding ceremony/Native crop.png",
      caption: "Majestic wedding mandap setting with crystal chandeliers",
    },
    sideTop: {
      title: "Wedding banquet table styling",
      src: "/images/EventPage/Spaces at Umrao/The Main Hall/Native image crop.png",
      caption: "Pillarless banquet dining arrangement for grand wedding receptions",
    },
    sideBottom: {
      title: "Evening wedding glow",
      src: "/images/EventPage/Celebration Gallery/Lawn celebration/Native crop.png",
      caption: "Illuminated garden setting for wedding festivities",
    },
  },
  {
    category: "Receptions",
    main: {
      title: "Reception banquet hall",
      src: "/images/EventPage/Spaces at Umrao/The Main Hall/Native image crop.png",
      caption: "Grand chandelier illumination for evening receptions",
    },
    sideTop: {
      title: "Lawn reception dining",
      src: "/images/EventPage/Celebration Gallery/Lawn celebration/Native crop.png",
      caption: "Starlit dinner setup for celebratory gatherings",
    },
    sideBottom: {
      title: "Floral reception backdrop",
      src: "/images/EventPage/Event we host/Receptions/Native crop.png",
      caption: "Curated floral wall and candle arrangements",
    },
  },
  {
    category: "Pre-wedding",
    main: {
      title: "Pre-wedding celebration decor",
      src: "/images/EventPage/moreRoom.png",
      caption: "Traditional marigold and brass floral decor for Haldi and Mehndi",
    },
    sideTop: {
      title: "Haldi lounge setting",
      src: "/images/EventPage/Celebration Gallery/Pre-wedding setting/Native crop.png",
      caption: "Warm golden florals with low seating and bolster cushions",
    },
    sideBottom: {
      title: "Intimate gathering space",
      src: "/images/EventPage/Spaces at Umrao/The Small Hall/Native image crop.png",
      caption: "The Small Hall arranged for private family rituals",
    },
  },
  {
    category: "The Lawn",
    main: {
      title: "17,000 sq ft Celebration Lawn",
      src: "/images/EventPage/Spaces at Umrao/The Lawn/Native image crop.png",
      caption: "Panoramic open-air expanse under twinkling garden fairy lights",
    },
    sideTop: {
      title: "Lawn evening celebration",
      src: "/images/EventPage/Celebration Gallery/Lawn celebration/Native crop.png",
      caption: "Warm ambiance for evening receptions and sangeet parties",
    },
    sideBottom: {
      title: "Outdoor ceremonial mandap",
      src: "/images/EventPage/Event we host/Weddings/Native crop.png",
      caption: "Nature-inspired ceremony setup amidst lush greenery",
    },
  },
];

export default function EventsGallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Find set according to activeTab
  const currentSet =
    GALLERY_SETS.find((s) => s.category === activeTab) || GALLERY_SETS[0];

  const handlePrev = () => {
    const currentIndex = CATEGORIES.indexOf(activeTab);
    const newIndex = (currentIndex - 1 + CATEGORIES.length) % CATEGORIES.length;
    setActiveTab(CATEGORIES[newIndex]);
    setActivePageIndex(newIndex % 4);
  };

  const handleNext = () => {
    const currentIndex = CATEGORIES.indexOf(activeTab);
    const newIndex = (currentIndex + 1) % CATEGORIES.length;
    setActiveTab(CATEGORIES[newIndex]);
    setActivePageIndex(newIndex % 4);
  };

  const handleTabChange = (cat, idx) => {
    setActiveTab(cat);
    setActivePageIndex(idx % 4);
  };

  return (
    <section className="events-gallery-section" aria-label="Celebration Gallery">
      <div className="events-gallery-inner">
        {/* Gallery Header */}
        <div className="events-gallery-header">
          <div className="events-gallery-title-box">
            <span className="events-gallery-eyebrow">CELEBRATION GALLERY</span>
            <h2 className="events-gallery-title">Picture your celebration here.</h2>
            <p className="events-gallery-subtitle">
              Explore settings, details and possibilities at Umrao.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="events-gallery-nav" aria-label="Gallery Navigation">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous gallery view"
              className="events-gallery-arrow-btn"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next gallery view"
              className="events-gallery-arrow-btn"
            >
              →
            </button>
          </div>
        </div>

        {/* Gallery Categories */}
        <div className="events-gallery-categories" role="tablist">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              type="button"
              onClick={() => handleTabChange(cat, idx)}
              className={`events-gallery-tab ${
                activeTab === cat ? "active" : "inactive"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mosaic Layout (1294px × 445px) */}
        <div className="events-gallery-mosaic">
          {/* Main Large Image (778px × 445px) */}
          <div
            className="events-gallery-main-img group"
            onClick={() => setLightboxImage(currentSet.main)}
          >
            <Image
              src={currentSet.main.src}
              alt={currentSet.main.title}
              width={778}
              height={445}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              aria-label="Enlarge image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(currentSet.main);
              }}
              className="events-expand-icon-btn"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Side Stacked Images (506px wide) */}
          <div className="events-gallery-side-imgs">
            {/* Top Sub Image (506px × 218px) */}
            <div
              className="events-gallery-sub-img-1 group"
              onClick={() => setLightboxImage(currentSet.sideTop)}
            >
              <Image
                src={currentSet.sideTop.src}
                alt={currentSet.sideTop.title}
                width={506}
                height={218}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Enlarge image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(currentSet.sideTop);
                }}
                className="events-expand-icon-btn"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            {/* Bottom Sub Image (506px × 217px) */}
            <div
              className="events-gallery-sub-img-2 group"
              onClick={() => setLightboxImage(currentSet.sideBottom)}
            >
              <Image
                src={currentSet.sideBottom.src}
                alt={currentSet.sideBottom.title}
                width={506}
                height={217}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                aria-label="Enlarge image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(currentSet.sideBottom);
                }}
                className="events-expand-icon-btn"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="events-gallery-pagination" aria-label="Pagination">
          {[0, 1, 2, 3].map((dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              aria-label={`Go to gallery slide ${dotIdx + 1}`}
              onClick={() => {
                setActivePageIndex(dotIdx);
                setActiveTab(CATEGORIES[dotIdx] || "All");
              }}
              className={`events-pagination-dot ${
                activePageIndex === dotIdx ? "active" : "inactive"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#174B33]/20 p-2 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#C9A058] transition-colors p-2"
              aria-label="Close image lightbox"
            >
              <X size={28} />
            </button>
            <div className="relative w-full h-[65vh] rounded-md overflow-hidden bg-black/40">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
            </div>
            {lightboxImage.caption && (
              <p className="mt-3 text-center text-[#F8F5EA] font-body text-sm max-w-xl">
                {lightboxImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

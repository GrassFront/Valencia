"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import "./css/deluxe-room-hero-gallery-cropped.css";

const DELUXE_GALLERY_PHOTOS = [
  {
    id: "bedroom",
    src: "/images/Room and Suites/delux room/Upload target.png",
    alt: "Valencia Deluxe Room - Luxury King Bed with neoclassical decor",
    caption: "Main Bedroom with King Bed and Garden View",
  },
  {
    id: "reading-corner",
    src: "/images/Room and Suites/delux room/Upload target2.png",
    alt: "Valencia Deluxe Room - Reading corner with velvet armchair and window view",
    caption: "Private Reading Corner with Garden View",
  },
  {
    id: "bathroom",
    src: "/images/Room and Suites/delux room/Upload target3.png",
    alt: "Valencia Deluxe Room - Marble bathroom with backlit mirror and rain shower",
    caption: "En-suite Marble Bathroom with Walk-in Shower",
  },
  {
    id: "overview",
    src: "/images/Room and Suites/rooms details/Deluxe/Cropped photo/Native image crop.png",
    alt: "Valencia Deluxe Room - Panoramic interior view",
    caption: "Deluxe Room Suite Layout",
  },
];

export default function DeluxeRoomHeroGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  // Close lightbox on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setActivePhotoIdx((prev) =>
          prev === 0 ? DELUXE_GALLERY_PHOTOS.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setActivePhotoIdx((prev) =>
          prev === DELUXE_GALLERY_PHOTOS.length - 1 ? 0 : prev + 1
        );
      }
    }
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const openLightbox = (idx = 0) => {
    setActivePhotoIdx(idx);
    setLightboxOpen(true);
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) =>
      prev === 0 ? DELUXE_GALLERY_PHOTOS.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) =>
      prev === DELUXE_GALLERY_PHOTOS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      aria-label="Deluxe Room Details and Gallery"
      className="deluxe-room-hero-gallery-section"
    >
      <div className="deluxe-room-container">
        {/* 1. Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="deluxe-room-breadcrumb-nav">
          <Link href="/" className="deluxe-breadcrumb-link">
            Home
          </Link>
          <span className="deluxe-breadcrumb-separator">/</span>
          <Link href="/rooms" className="deluxe-breadcrumb-link">
            Rooms &amp; Suites
          </Link>
          <span className="deluxe-breadcrumb-separator">/</span>
          <span className="deluxe-breadcrumb-active">Deluxe Room</span>
        </nav>

        {/* 2. Room Title and Back Return Link */}
        <div className="deluxe-room-header-row">
          <div className="deluxe-room-heading-block">
            <p className="deluxe-room-eyebrow">YOUR PRIVATE RETREAT</p>
            <h1 className="deluxe-room-title">Deluxe Room</h1>
            <p className="deluxe-room-subtitle">
              A welcoming retreat for restful stays.
            </p>
          </div>

          <Link href="/rooms" className="deluxe-back-link">
            <Image
              src="/images/Room and Suites/delux room/Vector.svg"
              alt=""
              width={18}
              height={18}
              className="deluxe-back-icon"
              unoptimized
            />
            <span>Back</span>
          </Link>
        </div>

        {/* 3. Nested 3-Photo Gallery Grid */}
        <div className="deluxe-gallery-grid">
          {/* Left Large Main Bedroom Image */}
          <div
            className="main-bedroom-card"
            onClick={() => openLightbox(0)}
            role="button"
            tabIndex={0}
            aria-label="View main bedroom photo in fullscreen"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openLightbox(0);
            }}
          >
            <Image
              src="/images/Room and Suites/delux room/Upload target.png"
              alt="Deluxe Room Master Bedroom"
              width={832}
              height={710}
              className="main-bedroom-img"
              priority
              unoptimized
            />
          </div>

          {/* Right Supporting Photos Stack */}
          <div className="supporting-photos-stack">
            {/* Top Right: Reading Corner */}
            <div
              className="reading-corner-card"
              onClick={() => openLightbox(1)}
              role="button"
              tabIndex={0}
              aria-label="View reading corner photo in fullscreen"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(1);
              }}
            >
              <Image
                src="/images/Room and Suites/delux room/Upload target2.png"
                alt="Deluxe Room Reading Corner"
                width={534}
                height={339}
                className="reading-corner-img"
                unoptimized
              />
            </div>

            {/* Bottom Right: Bathroom with VIEW ALL PHOTOS Button */}
            <div
              className="bathroom-card"
              onClick={() => openLightbox(2)}
              role="button"
              tabIndex={0}
              aria-label="View bathroom photo in fullscreen"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(2);
              }}
            >
              <Image
                src="/images/Room and Suites/delux room/Upload target3.png"
                alt="Deluxe Room Bathroom"
                width={534}
                height={365}
                className="bathroom-img"
                unoptimized
              />

              {/* View All Photos Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openLightbox(0);
                }}
                className="view-all-photos-btn"
                aria-label="View all photos of Deluxe Room"
              >
                <div className="grid-icon-box" aria-hidden="true">
                  <span className="grid-box-dot" />
                  <span className="grid-box-dot" />
                  <span className="grid-box-dot" />
                  <span className="grid-box-dot" />
                </div>
                <span>VIEW ALL PHOTOS</span>
                <span className="view-all-arrow" aria-hidden="true">
                  <ArrowRight size={16} strokeWidth={2.4} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="deluxe-lightbox-overlay"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Deluxe Room Photo Gallery Modal"
        >
          <div
            className="deluxe-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="deluxe-lightbox-close"
              aria-label="Close photo gallery"
            >
              <X size={28} />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="deluxe-lightbox-nav-prev"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Lightbox Image */}
            <div className="deluxe-lightbox-image-wrapper">
              <Image
                src={DELUXE_GALLERY_PHOTOS[activePhotoIdx].src}
                alt={DELUXE_GALLERY_PHOTOS[activePhotoIdx].alt}
                fill
                className="deluxe-lightbox-img"
                unoptimized
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNextPhoto}
              className="deluxe-lightbox-nav-next"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Caption & Counter */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-white font-body text-[15px] font-medium">
                {DELUXE_GALLERY_PHOTOS[activePhotoIdx].caption}
              </p>
              <span className="deluxe-lightbox-counter">
                {activePhotoIdx + 1} / {DELUXE_GALLERY_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export { DeluxeRoomHeroGallery as DeluxeRoomHeroGalleryCroppedReference };

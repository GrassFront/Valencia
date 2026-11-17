"use client";

import { useState } from "react";
import {
  ValenciaHero,
  ValenciaWelcome,
  ValenciaRooms,
  ValenciaAmenities,
  ValenciaDining,
  ValenciaGather,
  ValenciaGallery,
  ValenciaLocation,
  ValenciaBooking,
  ValenciaFaq,
  GalleryModal,
  GALLERY_ITEMS,
} from "./index";

export default function ValenciaPage() {
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryActiveIndex, setGalleryActiveIndex] = useState(0);

  const openGallery = (index = 0) => {
    setGalleryActiveIndex(index);
    setGalleryModalOpen(true);
  };

  const closeGallery = () => {
    setGalleryModalOpen(false);
  };

  const prevGallery = () => {
    setGalleryActiveIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const nextGallery = () => {
    setGalleryActiveIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="valencia-page flex flex-col w-full">
      {/* 01 / Property hero */}
      <ValenciaHero onOpenGallery={openGallery} />

      {/* 02 / Welcome to Valencia */}
      <ValenciaWelcome />

      {/* 03 / Rooms and suites */}
      <ValenciaRooms />

      {/* 04 / Amenities and services */}
      <ValenciaAmenities />

      {/* 05 / Dining at Valencia */}
      <ValenciaDining />

      {/* 06 / Gather at Valencia */}
      <ValenciaGather />

      {/* 07 / Picture your stay */}
      <ValenciaGallery onOpenGallery={openGallery} />

      {/* 08 / Location and directions */}
      <ValenciaLocation />

      {/* 09 / Your next stay begins here */}
      <ValenciaBooking />

      {/* 10 / Before your stay — FAQ */}
      <ValenciaFaq />

      {/* Full-screen Gallery Modal Lightbox */}
      <GalleryModal
        isOpen={galleryModalOpen}
        images={GALLERY_ITEMS}
        activeIndex={galleryActiveIndex}
        onClose={closeGallery}
        onPrev={prevGallery}
        onNext={nextGallery}
      />
    </div>
  );
}

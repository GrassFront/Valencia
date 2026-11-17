"use client";

import { useState } from "react";
import UmraoHero from "./UmraoHero";
import UmraoWelcome from "./UmraoWelcome";
import UmraoVenues from "./UmraoVenues";
import UmraoMoments from "./UmraoMoments";
import UmraoCelebration from "./UmraoCelebration";
import UmraoBusiness from "./UmraoBusiness";
import UmraoGallery, { GALLERY_ITEMS } from "./UmraoGallery";
import UmraoLocation from "./UmraoLocation";
import UmraoEnquiry from "./UmraoEnquiry";
import UmraoLightbox from "./UmraoLightbox";

export default function UmraoPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedSpace, setSelectedSpace] = useState("");

  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const handleSelectSpace = (spaceName) => {
    setSelectedSpace(spaceName);
    const enquiryEl = document.getElementById("enquiry");
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="umrao-page flex flex-col w-full">
      {/* 01 / Umrao hero */}
      <UmraoHero />

      {/* 02 / Welcome to Umrao */}
      <UmraoWelcome />

      {/* 03 / Our venues */}
      <UmraoVenues onSelectSpace={handleSelectSpace} />

      {/* 04 / More moments to celebrate */}
      <UmraoMoments />

      {/* 05 / Stay through the celebration */}
      <UmraoCelebration />

      {/* 06 / Business at Umrao */}
      <UmraoBusiness />

      {/* 07 / Umrao in pictures */}
      <UmraoGallery onOpenLightbox={handleOpenLightbox} />

      {/* 08 / Find Umrao */}
      <UmraoLocation />

      {/* 09 / Event enquiry */}
      <UmraoEnquiry preselectedSpace={selectedSpace} />

      {/* Interactive Lightbox Modal for gallery preview */}
      <UmraoLightbox
        isOpen={lightboxOpen}
        activeIndex={lightboxIndex}
        items={GALLERY_ITEMS}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}

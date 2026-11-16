"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryModal({ isOpen, images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[activeIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Valencia Photo Gallery"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery modal"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#FAF6EB]/80 hover:text-[#FAF6EB] p-2 rounded-full hover:bg-white/10 transition-colors z-10 cursor-pointer"
      >
        <X size={28} />
      </button>

      {/* Main modal container */}
      <div
        className="relative max-w-[1200px] w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 text-[#FAF6EB] p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-all z-10 cursor-pointer"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 text-[#FAF6EB] p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 transition-all z-10 cursor-pointer"
        >
          <ChevronRight size={28} />
        </button>

        {/* Active Image */}
        <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-lg overflow-hidden border border-[#D4B571]/40 shadow-2xl bg-black">
          <Image
            src={currentImage.src}
            alt={currentImage.title || "Valencia Gallery"}
            fill
            sizes="1200px"
            priority
            className="object-contain"
          />
        </div>

        {/* Image Caption & Counter */}
        <div className="w-full flex items-center justify-between mt-4 px-2 text-[#FAF6EB]">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#E5C888]">
              {currentImage.title}
            </h3>
            {currentImage.category && (
              <p className="font-body text-xs sm:text-sm text-[#FAF6EB]/70 uppercase tracking-widest mt-0.5">
                {currentImage.category}
              </p>
            )}
          </div>
          <span className="font-body text-sm font-semibold tracking-wider text-[#FAF6EB]/80">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

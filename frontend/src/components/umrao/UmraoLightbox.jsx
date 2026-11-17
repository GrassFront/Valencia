"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function UmraoLightbox({
  isOpen,
  activeIndex,
  items,
  onClose,
  onPrev,
  onNext,
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Title and Close */}
      <div
        className="absolute top-0 left-0 right-0 h-16 px-4 sm:px-8 flex items-center justify-between z-20 text-[#FAF6EC] bg-gradient-to-b from-black/70 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-body text-xs sm:text-sm font-semibold tracking-widest text-[#C8A153] uppercase">
            {activeIndex + 1} / {items.length}
          </span>
          <span className="text-[#C8A153]/50">|</span>
          <h4 className="font-display text-sm sm:text-lg text-[#FAF6EC] truncate max-w-[260px] sm:max-w-md">
            {currentItem.title}
          </h4>
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close image modal"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[80vh] h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[75vh]">
          <Image
            src={currentItem.src}
            alt={currentItem.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-contain select-none"
            priority
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        type="button"
        aria-label="Previous photograph"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-20"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        type="button"
        aria-label="Next photograph"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-black/60 border border-white/10 text-center max-w-xl w-[90%] sm:w-auto z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-sm sm:text-base text-[#FAF6EC]">
          {currentItem.title}
        </p>
      </div>
    </div>
  );
}

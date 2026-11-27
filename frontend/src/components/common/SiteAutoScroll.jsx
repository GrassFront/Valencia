"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";

const DISABLED_PREFIXES = [
  "/booking",
  "/account",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/check-email",
  "/verify-email",
  "/sign-in",
];

const SCROLL_SPEED_PX_PER_SEC = 28;
const IDLE_START_DELAY_MS = 1400;

export default function SiteAutoScroll() {
  const pathname = usePathname() || "/";
  const isDisabledRoute = DISABLED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  const [isScrolling, setIsScrolling] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const carryRef = useRef(0);
  const activeRef = useRef(false);

  // Detect reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const onChange = (e) => setIsReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Subtle section reveal animation while scrolling through any page
  useEffect(() => {
    if (typeof window === "undefined" || isReducedMotion) return;

    const sections = Array.from(document.querySelectorAll("main section"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("site-section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
    );

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95) {
        sec.classList.add("site-section-visible");
      } else {
        sec.classList.add("site-section-animate");
        observer.observe(sec);
      }
    });

    return () => observer.disconnect();
  }, [pathname, isReducedMotion]);

  // Manage smooth slow auto-scroll on showcase pages
  useEffect(() => {
    if (typeof window === "undefined" || isDisabledRoute || isReducedMotion) {
      activeRef.current = false;
      setIsScrolling(false);
      return;
    }

    const startTimeout = setTimeout(() => {
      if (window.scrollY < 10) {
        activeRef.current = true;
        setIsScrolling(true);
      }
    }, IDLE_START_DELAY_MS);

    const stopOnUserIntent = (e) => {
      if (e.target && e.target.closest?.("[data-autoscroll-toggle]")) return;
      if (activeRef.current) {
        activeRef.current = false;
        setIsScrolling(false);
      }
      clearTimeout(startTimeout);
    };

    const stopOnFocusInput = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        stopOnUserIntent(e);
      }
    };

    window.addEventListener("wheel", stopOnUserIntent, { passive: true });
    window.addEventListener("touchstart", stopOnUserIntent, { passive: true });
    window.addEventListener("keydown", stopOnUserIntent);
    window.addEventListener("focusin", stopOnFocusInput);

    return () => {
      clearTimeout(startTimeout);
      activeRef.current = false;
      window.removeEventListener("wheel", stopOnUserIntent);
      window.removeEventListener("touchstart", stopOnUserIntent);
      window.removeEventListener("keydown", stopOnUserIntent);
      window.removeEventListener("focusin", stopOnFocusInput);
    };
  }, [pathname, isDisabledRoute, isReducedMotion]);

  useEffect(() => {
    if (!isScrolling || isDisabledRoute || isReducedMotion) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    lastTimeRef.current = performance.now();
    carryRef.current = 0;

    const step = (now) => {
      if (!activeRef.current) return;
      const dt = Math.min(0.05, (now - lastTimeRef.current) / 1000);
      lastTimeRef.current = now;

      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (maxY <= 0 || window.scrollY >= maxY - 2) {
        activeRef.current = false;
        setIsScrolling(false);
        return;
      }

      carryRef.current += SCROLL_SPEED_PX_PER_SEC * dt;
      if (carryRef.current >= 1) {
        const px = Math.floor(carryRef.current);
        carryRef.current -= px;
        window.scrollBy({ top: px, left: 0, behavior: "auto" });
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isScrolling, isDisabledRoute, isReducedMotion]);

  if (isDisabledRoute || isReducedMotion) return null;

  const toggleScroll = () => {
    if (isScrolling) {
      activeRef.current = false;
      setIsScrolling(false);
    } else {
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxY - 4) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      activeRef.current = true;
      setIsScrolling(true);
    }
  };

  return (
    <button
      type="button"
      data-autoscroll-toggle="true"
      onClick={toggleScroll}
      aria-label={isScrolling ? "Pause page auto-scroll" : "Start slow auto-scroll"}
      className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#FAF7F0]/95 backdrop-blur-xs border border-[#C8A153]/60 px-3.5 py-2 text-[12px] font-body font-semibold text-[#164C36] shadow-[0_6px_18px_rgba(22,76,54,0.14)] hover:bg-[#F3EADB] transition-all cursor-pointer"
    >
      {isScrolling ? (
        <>
          <Pause size={13} strokeWidth={2.3} />
          <span>Auto-scrolling</span>
        </>
      ) : (
        <>
          <Play size={13} strokeWidth={2.3} />
          <span>Auto-scroll</span>
        </>
      )}
    </button>
  );
}

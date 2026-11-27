"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

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

// Gentle, continuous presentation pace in CSS px/sec
const SCROLL_SPEED_PX_PER_SEC = 48;
const AUTO_START_DELAY_MS = 450;

export default function SiteAutoScroll() {
  const pathname = usePathname() || "/";
  const isDisabledRoute = DISABLED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  const [isScrolling, setIsScrolling] = useState(false);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);
  const posRef = useRef(0);
  const activeRef = useRef(false);

  // Smooth fade-up entrance animation for sections across all pages
  useEffect(() => {
    if (typeof window === "undefined") return;

    const targets = Array.from(
      document.querySelectorAll("main section, main > div > section")
    );
    if (targets.length === 0) return;

    const reveal = (el) => {
      el.classList.add("site-section-visible");
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "100px 0px 100px 0px" }
    );

    targets.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight + 60) {
        reveal(sec);
      } else {
        sec.classList.add("site-section-animate");
        observer.observe(sec);
      }
    });

    const fallbackTimer = setTimeout(() => {
      targets.forEach(reveal);
    }, 8000);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [pathname]);

  // Start gentle auto-scroll & stop immediately when the user takes control
  useEffect(() => {
    if (typeof window === "undefined" || isDisabledRoute) {
      activeRef.current = false;
      setIsScrolling(false);
      return;
    }

    let cancelledByUser = false;

    const startTimeout = setTimeout(() => {
      if (cancelledByUser) return;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (maxY > 40 && window.scrollY < maxY - 12) {
        posRef.current = window.scrollY;
        activeRef.current = true;
        setIsScrolling(true);
      }
    }, AUTO_START_DELAY_MS);

    const stopAutoScroll = () => {
      cancelledByUser = true;
      clearTimeout(startTimeout);
      if (activeRef.current) {
        activeRef.current = false;
        setIsScrolling(false);
      }
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) >= 1 || Math.abs(e.deltaX) >= 1) {
        stopAutoScroll();
      }
    };

    const onTouchMove = () => {
      stopAutoScroll();
    };

    const onKeyDown = (e) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Home",
          "End",
          " ",
        ].includes(e.key)
      ) {
        stopAutoScroll();
      }
    };

    const onFocusIn = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        stopAutoScroll();
      }
    };

    const onPointerDown = (e) => {
      if (
        e.target &&
        (e.target.closest?.("a, button, input, textarea, select") ||
          e.clientX >= window.innerWidth - 20)
      ) {
        stopAutoScroll();
      }
    };

    window.addEventListener("wheel", onWheel, { capture: true, passive: true });
    window.addEventListener("touchmove", onTouchMove, { capture: true, passive: true });
    window.addEventListener("pointerdown", onPointerDown, { capture: true, passive: true });
    window.addEventListener("keydown", onKeyDown, { capture: true });
    window.addEventListener("focusin", onFocusIn, { capture: true });

    return () => {
      clearTimeout(startTimeout);
      activeRef.current = false;
      window.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
      window.removeEventListener("pointerdown", onPointerDown, { capture: true });
      window.removeEventListener("keydown", onKeyDown, { capture: true });
      window.removeEventListener("focusin", onFocusIn, { capture: true });
    };
  }, [pathname, isDisabledRoute]);

  // Sub-pixel requestAnimationFrame auto-scroll loop
  useEffect(() => {
    const html = document.documentElement;
    if (!isScrolling || isDisabledRoute) {
      html.removeAttribute("data-autoscrolling");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    html.setAttribute("data-autoscrolling", "true");
    posRef.current = window.scrollY;
    lastTimeRef.current = performance.now();

    const step = (now) => {
      if (!activeRef.current) return;

      // Detect any external scroll (trackpad momentum, scrollbar drag, etc.)
      if (Math.abs(window.scrollY - posRef.current) > 4) {
        activeRef.current = false;
        setIsScrolling(false);
        return;
      }

      const dt = Math.min(0.05, Math.max(0, (now - lastTimeRef.current) / 1000));
      lastTimeRef.current = now;

      const maxY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      if (maxY <= 20 || posRef.current >= maxY - 1) {
        activeRef.current = false;
        setIsScrolling(false);
        return;
      }

      posRef.current = Math.min(maxY, posRef.current + SCROLL_SPEED_PX_PER_SEC * dt);

      try {
        window.scrollTo({ top: posRef.current, left: 0, behavior: "instant" });
      } catch {
        window.scrollTo(0, posRef.current);
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      html.removeAttribute("data-autoscrolling");
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isScrolling, isDisabledRoute]);

  return null;
}

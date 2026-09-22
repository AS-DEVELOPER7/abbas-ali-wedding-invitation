"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator({ isVisible = true }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      if (scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToInvitation = () => {
    const cardElem = document.getElementById("sacred-card");
    if (cardElem) {
      cardElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 620, behavior: "smooth" });
    }
  };

  const shouldShow = isVisible && !hasScrolled;

  return (
    <div className="fixed bottom-7 inset-x-0 mx-auto w-full sm:max-w-[420px] pointer-events-none px-4 flex justify-center z-30">
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95, transition: { duration: 0.28, ease: "easeIn" } }}
            transition={{ duration: 0.85, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto"
          >
            {/* Gentle rhythmic floating bounce physics */}
            <motion.div
              animate={{ y: [0, -3.5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.035, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleScrollToInvitation}
              className="relative group cursor-pointer flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-backgroundColor-primary/95 backdrop-blur-md border border-borderColor-primary/65 shadow-[0_8px_24px_rgba(80,55,45,0.16),0_0_0_1px_rgba(212,175,55,0.22)] select-none transition-all hover:border-borderColor-primary hover:shadow-[0_12px_28px_rgba(80,55,45,0.22),0_0_14px_rgba(212,175,55,0.3)]"
              role="button"
              tabIndex={0}
              aria-label="Scroll down to view wedding invitation"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleScrollToInvitation();
                }
              }}
            >
              {/* Soft gold ambient ripple ping */}
              <span className="absolute -inset-0.5 rounded-full border border-borderColor-primary/35 animate-ping opacity-25 pointer-events-none" />

              {/* 1. Slender Luxury Scroll Track Pill */}
              <div className="relative w-3.5 h-5.5 rounded-full border-[1.25px] border-borderColor-primary/85 bg-backgroundColor-secondary/60 flex items-start justify-center p-0.5 shadow-inner">
                {/* Gliding gold jewel bead */}
                <motion.div
                  animate={{
                    y: [0, 7.5, 0],
                    opacity: [0.35, 1, 0.25],
                    scale: [0.85, 1, 0.85],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1],
                  }}
                  className="w-1 h-1 rounded-full bg-gradient-to-b from-borderColor-secondary to-textColor-ternary shadow-[0_0_5px_rgba(212,175,55,0.85)]"
                />
              </div>

              {/* 2. Text Guidance */}
              <div className="flex flex-col items-start text-left pr-0.5">
                <span className="font-playfair text-[9px] sm:text-[9.5px] font-bold tracking-[0.2em] text-textColor-primary uppercase leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]">
                  Scroll to View Invitation
                </span>
                <span className="font-allura text-[11px] text-textColor-ternary tracking-wide leading-none -mt-0.5">
                  or tap to explore
                </span>
              </div>

              {/* 3. Cascading Downward Animated Chevrons */}
              <div className="flex flex-col items-center -space-y-1.5 text-textColor-ternary">
                <motion.svg
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: 0,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
                <motion.svg
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

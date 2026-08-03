"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Added 2 extra panels (5 total)
const backgroundPanels = [
  {
    src: "/aqua.png",
    alt: "Aqua Hoshino",
    slug: "aqua",
    name: "WELCOME | AQUA",
  },
  {
    src: "/akane.png",
    alt: "Akane kurokawa",
    slug: "akane",
    name: "ME | AKANE",
  },
  {
    src: "/ruby.png",
    alt: "Ruby Hoshino",
    slug: "ruby",
    name: "INTERESTS | RUBY",
  },
  {
    src: "/mem2.png", // Replace with your 4th image path
    alt: "Memcho",
    slug: "memcho",
    name: "PEOPLE | MEMCHO",
  },
  {
    src: "/kana.png", // Replace with your 5th image path
    alt: "Arima Kana",
    slug: "kana",
    name: "FUTURE | KANA",
  },
];

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Track scroll position to hide arrow at the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      // 50px buffer zone before true bottom
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      setIsAtBottom(reachedBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans bg-[#F0EFEB] overflow-x-hidden">
      
      {/* -------------------------------------------------------------
          TOP-LEFT CLICKABLE LOGO (FIXED IN VIEWPORT FRAME)
          ------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-6 md:top-8 md:left-8 z-30"
      >
        <Link href="/" className="group block relative w-16 h-16 md:w-20 md:h-20">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full h-full"
          >
            <Image
              src="/deng.png"
              alt="Home Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </Link>
      </motion.div>

      {/* -------------------------------------------------------------
          BOTTOM-CENTER DOWN ARROW (FAST FADE OUT & STAYS GONE)
          ------------------------------------------------------------- */}
      <AnimatePresence>
        {isIntroComplete && !isAtBottom && (
          <motion.div
            key="scroll-arrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: [0.3, 0.9, 0.3], 
              y: [0, 8, 0] 
            }}
            exit={{ 
              opacity: 0, 
              y: 10,
              transition: { duration: 0.25, ease: "easeOut" } // Fast 0.25s exit fade
            }}
            transition={{
              duration: 2.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-1"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------------------------------------------------
          5-HORIZONTAL-BANNER SCROLLABLE BACKGROUND
          ------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isIntroComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-0 flex flex-col w-full"
      >
        {backgroundPanels.map((panel, idx) => (
          <Link href={`/${panel.slug}`} key={idx} className="block h-[33.333vh] w-full">
            <motion.div
              className="relative w-full h-full overflow-hidden border-b last:border-b-0 border-white/10 group cursor-pointer"
              whileHover="hover"
              initial="rest"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Zoomable Banner Container */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  priority={idx < 3} // Only prioritize loading the initial 3 visible images
                  quality={90}
                  className="object-cover filter brightness-[0.75] contrast-[0.95] saturate-[0.8] transition-all duration-700 group-hover:brightness-[1.05] group-hover:contrast-100 group-hover:saturate-100"
                />
              </motion.div>
              
              {/* FLASH OF TEXT ON HOVER */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                variants={{
                  rest: { opacity: 0, scale: 0.95 },
                  hover: { 
                    opacity: [0, 1, 1, 0],
                    scale: [0.95, 1, 1, 1.02],
                  },
                }}
                transition={{
                  duration: 1.2,
                  times: [0, 0.25, 0.75, 1],
                  ease: "easeInOut",
                }}
              >
                <span className="font-serif italic text-2xl md:text-4xl font-light tracking-[0.2em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] uppercase">
                  {panel.name}
                </span>
              </motion.div>

              {/* Dimming Overlay */}
              <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/0 transition-colors duration-700 pointer-events-none" />
            </motion.div>
          </Link>
        ))}

        {/* -------------------------------------------------------------
            BOTTOM-RIGHT WATERMARK (ABSOLUTE TO WEBPAGE BOTTOM)
            ------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isIntroComplete ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 pointer-events-none"
        >
          <p className="text-[10px] md:text-[11px] font-medium tracking-widest text-white/70 uppercase drop-shadow-md">
            powered by grass &lt;3
          </p>
        </motion.div>
      </motion.div>

      {/* -------------------------------------------------------------
          INTRO OVERLAY
          ------------------------------------------------------------- */}
      <AnimatePresence>
        {!isIntroComplete && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#D8A9D8] px-6"
          >
            {/* Blurred image focusing card */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.96 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{
                duration: 2.0,
                ease: [0.16, 1, 0.3, 1],
              }}
              onAnimationComplete={() => {
                setTimeout(() => setIsIntroComplete(true), 100);
              }}
              className="relative w-80 md:w-[32rem] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-purple-900/10"
            >
              <Image
                src="/Hoshino_Ai.png"
                alt="Intro Visual"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Subtle intro caption */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-[#3c2a3e]"
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
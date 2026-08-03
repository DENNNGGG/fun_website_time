"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Reduced to 3 banners for a cleaner layout
const backgroundPanels = [
  {
    src: "/aqua.png",
    alt: "Aqua Hoshino",
  },
  {
    src: "/akane.png",
    alt: "Akane Kurokawa",
  },
  {
    src: "/ruby.png",
    alt: "Ruby Hoshino",
  },
];

export default function Home() {
  // State tracking when the intro animation sequence finishes
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-black">
      
      {/* -------------------------------------------------------------
          3-HORIZONTAL-BANNER DYNAMIC BACKGROUND (SEAMLESS GAP-FREE)
          ------------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isIntroComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-0 flex flex-col w-full h-full overflow-hidden bg-black"
      >
        {backgroundPanels.map((panel, idx) => (
          <motion.div
            key={idx}
            /* Removed border-b and added negative bottom margin (-mb-[1px]) to cover sub-pixel gaps */
            className="relative w-full h-1/3 overflow-hidden group cursor-pointer -mb-[1px] last:mb-0"
            whileHover={{ 
              scale: 1.01, // Subtle expansion on hover
              zIndex: 10,  // Elevates hovered banner above others
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Zoomable Banner Container */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              whileHover={{ scale: 1.05 }} // Zoom effect on hover
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                priority
                quality={90}
                className="object-cover filter brightness-[0.75] contrast-[0.95] saturate-[0.8] transition-all duration-700 group-hover:brightness-[1.05] group-hover:contrast-100 group-hover:saturate-100"
              />
            </motion.div>
            
            {/* Subtle inner top line for visual separation without creating spacing gaps */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 pointer-events-none z-10" />

            {/* Dimming Overlay */}
            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/0 transition-colors duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* -------------------------------------------------------------
          1. INTRO OVERLAY (Espeon Lilac Background)
         ------------------------------------------------------------- */}
      <AnimatePresence>
        {!isIntroComplete && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#D8B4F8] px-6"
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
                setTimeout(() => setIsIntroComplete(true), 1200);
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
              className="mt-6 text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-purple-950/70"
            >
              Entering Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
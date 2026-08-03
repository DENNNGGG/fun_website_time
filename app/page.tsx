"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Route slugs for each character banner
const backgroundPanels = [
  {
    src: "/aqua.png",
    alt: "Aqua Hoshino",
    slug: "aqua",
  },
  {
    src: "/akane.png",
    alt: "Akane kurosawa",
    slug: "akane",
  },
  {
    src: "/ruby.png",
    alt: "Ruby Hoshino",
    slug: "ruby",
  },
];

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-[#F0EFEB]">
      
      {/* 3-HORIZONTAL-BANNER DYNAMIC BACKGROUND */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isIntroComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-0 flex flex-col w-full h-full overflow-hidden"
      >
        {backgroundPanels.map((panel, idx) => (
          <Link href={`/${panel.slug}`} key={idx} className="block h-1/3 w-full">
            <motion.div
              className="relative w-full h-full overflow-hidden border-b last:border-b-0 border-white/10 group cursor-pointer"
              whileHover={{ 
                scale: 1.01,
                zIndex: 10,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Zoomable Banner Container */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
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
              
              {/* Dimming Overlay */}
              <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/0 transition-colors duration-700 pointer-events-none" />
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* INTRO OVERLAY */}
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
              className="mt-6 text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-[#3c2a3e]"
            >
              Entering Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
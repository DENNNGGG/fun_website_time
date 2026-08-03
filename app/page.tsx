"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, Globe, UserCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // State tracking when the intro animation sequence finishes
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  // Motion variants for your main layout elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    // The main container. We remove the solid bg-[#F0EFEB] color and text color, 
    // replacing them with transparency or default text color.
    <div className="relative min-h-screen text-[#1a1c1d] font-sans px-6 md:px-12 flex flex-col items-center justify-between overflow-hidden">
      
      {/* -------------------------------------------------------------
          ADD THIS LAYER: MAIN WEBSITE BACKGROUND IMAGE
          ------------------------------------------------------------- */}
      {/* 
        We use motion.div to smoothly reveal the background after the 
        intro overlay fades out. 
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isIntroComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Smooth background reveal
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/Hoshino_Ai_bg.png" // EDIT THIS: Path to your local background image in /public
          alt="Website Background"
          fill // Spans the entire screen
          priority // Loads immediately
          quality={100} // High quality background
          className="object-cover" // Aspect ratio handled by cropping
        />
        {/* Optional: Add an overlay color if your text is hard to read over the image */}
        {/* <div className="absolute inset-0 bg-white/20" /> */}
      </motion.div>

      {/* -------------------------------------------------------------
          1. INTRO OVERLAY (Image slowly focuses, then exits)
         ------------------------------------------------------------- */}
      <AnimatePresence>
        {!isIntroComplete && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            // Important: We MUST keep the background color (#F0EFEB) 
            // on this overlay layer so it hides the new background until it fades out.
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F0EFEB] px-6"
          >
            {/* Blurred image focusing card */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(20px)", scale: 0.96 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{
                duration: 2.0, // Control speed of image focus
                ease: [0.16, 1, 0.3, 1],
              }}
              onAnimationComplete={() => {
                // Short hold after focus before revealing main site
                setTimeout(() => setIsIntroComplete(true), 1200);
              }}
              className="relative w-80 md:w-[32rem] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-black/10"
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
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-6 text-[10px] md:text-[11px] font-medium tracking-widest uppercase text-[#56595e]"
            >
              Entering Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------------------------------------------------
          2. MAIN WEBPAGE (Your exact layout, revealed post-intro)
         ------------------------------------------------------------- */}
      {/* 
        All main page elements are given z-10 to stay on top of the background.
        We also ensure their text colors contrast with the new background.
      */}

      {/* 1. Header Area */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={isIntroComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full pt-8 flex items-start justify-start z-10 text-[10px] md:text-[11px] font-medium tracking-widest uppercase leading-relaxed text-[#56595e]"
      >
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A78F2]" />
            <span>20 ONLINE SHOW</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-black" />
            <span>THEME</span>
          </div>
        </div>
      </motion.header>

      {/* 2. Centered Hero Block */}
      <motion.main
        initial="hidden"
        animate={isIntroComplete ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex-grow flex flex-col items-center justify-center text-center max-w-2xl w-full z-10 space-y-16 mt-[-10vh]"
      >
        {/* We make the logo placeholder background translucent against the image */}
        <motion.div variants={itemVariants} className="logo-placeholder w-20 h-20 bg-neutral-200/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-300">
          <Globe className="w-10 h-10 text-neutral-400" />
          <span className="sr-only">THE BROWSER COMPANY Logo</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif italic text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-[#0d0e12] max-w-xl mx-auto"
        >
          We're building better ways to use the internet{" "}
          <span className="inline-block relative">
            <span className="font-serif not-italic">Dia</span>
            <span className="absolute left-0 right-1 -bottom-1 border-b-[1.5px] border-dotted border-black/50" />
          </span>{" "}
          and{" "}
          <span className="inline-block relative">
            <span className="font-serif not-italic">Arc</span>.
            <span className="absolute left-0 right-1 -bottom-1 border-b-[1.5px] border-dotted border-black/50" />
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center gap-10 md:gap-16 pt-8 text-[11px] md:text-xs font-semibold tracking-widest uppercase text-[#56595e]">
          <a href="#" className="flex items-center gap-4 group">
            <Search className="w-4 h-4 text-[#8a8d94] group-hover:text-black transition-colors" />
            <span className="group-hover:text-black transition-colors">
              DIA BROWSER
            </span>
          </a>
          <a href="#" className="flex items-center gap-4 group">
            <UserCircle className="w-4 h-4 text-[#8a8d94] group-hover:text-black transition-colors" />
            <span className="group-hover:text-black transition-colors">
              ARC BROWSER
            </span>
          </a>
        </motion.div>

        <motion.nav variants={itemVariants} className="grid grid-cols-2 gap-y-6 gap-x-12 pt-16 text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-[#56595e]">
          <a href="#" className="hover:text-black transition-colors">
            COMPANY VALUES
          </a>
          <a href="#" className="hover:text-black transition-colors">
            JOBS
          </a>
          <a href="#" className="hover:text-black transition-colors">
            NEWSLETTER
          </a>
          <a href="#" className="hover:text-black transition-colors">
            @BROWSERCOMPANY
          </a>
        </motion.nav>
      </motion.main>

      {/* 3. Footer Area */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={isIntroComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full pb-6 grid grid-cols-5 items-end text-[10px] md:text-[11px] tracking-widest font-semibold z-10 text-[#56595e] uppercase"
      >
        <div className="justify-self-start text-base pb-1">
          <Globe className="w-5 h-5 text-neutral-400" />
        </div>

        <div className="justify-self-center leading-tight">
          BC
          <br />
          NY
        </div>

        {/* Monogram background update for contrast */}
        <div className="justify-self-center monogram-placeholder w-5 h-5 bg-neutral-200/50 backdrop-blur-sm rounded-full" />

        <div className="justify-self-center text-center text-[9px] md:text-[10px] tracking-wider leading-relaxed whitespace-nowrap text-[#8a8d94]">
          THE BROWSER
          <br />
          COMPANY OF
          <br />
          NEW YORK
        </div>

        <div className="justify-self-end flex items-center gap-3">
          <span className="w-[1.5px] h-3 bg-black/20" />
          <span>COPYRIGHT 2025</span>
          <span className="w-[1.5px] h-3 bg-black/20" />
        </div>
      </motion.footer>

    </div>
  );
}
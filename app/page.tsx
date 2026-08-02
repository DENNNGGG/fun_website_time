"use client";

import { motion } from "framer-motion";
import { Search, Globe, UserCircle } from "lucide-react"; // Placeholders for icons

export default function Home() {
  // Animation settings for the central hero block
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Elements animate in sequentially
        ease: [0.16, 1, 0.3, 1], // The signature snappy curve
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    // Base layout: Cream background, clean sans text, centered layout grid.
    <div className="relative min-h-screen bg-[#F0EFEB] text-[#1a1c1d] font-sans px-6 md:px-12 flex flex-col items-center justify-between">
      
      {/* 1. Header Area: Upper Left Status Text */}
      <header className="w-full pt-8 flex items-start justify-start z-10 text-[10px] md:text-[11px] font-medium tracking-widest uppercase leading-relaxed text-[#56595e]">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A78F2]" />{" "}
            {/* Status light */}
            <span>20 ONLINE SHOW</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-black" /> {/* Status square */}
            <span>THEME</span>
          </div>
        </div>
      </header>

      {/* 2. Centered Hero Block: The main central stack */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex-grow flex flex-col items-center justify-center text-center max-w-2xl w-full z-10 space-y-16 mt-[-10vh]"
      >
        {/* Placeholder for the central SVG logo */}
        <motion.div variants={itemVariants} className="logo-placeholder w-20 h-20 bg-neutral-200 rounded-full flex items-center justify-center border border-neutral-300">
          <GlobeAlt className="w-10 h-10 text-neutral-400" />
          <span className="sr-only">THE BROWSER COMPANY Logo</span>
        </motion.div>

        {/* The core editorial hook statement */}
        <motion.h1
          variants={itemVariants}
          className="font-serif italic text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-[#0d0e12] max-w-xl mx-auto"
        >
          We're building better ways to use the internet{" "}
          <span className="inline-block relative">
            <span className="font-serif not-italic">Dia</span>{" "}
            {/* Semantic placement for dotted underline, adjust as needed */}
            <span className="absolute left-0 right-1 -bottom-1 border-b-[1.5px] border-dotted border-black/50" />
          </span>{" "}
          and{" "}
          <span className="inline-block relative">
            <span className="font-serif not-italic">Arc</span>.
            {/* Semantic placement for dotted underline, adjust as needed */}
            <span className="absolute left-0 right-1 -bottom-1 border-b-[1.5px] border-dotted border-black/50" />
          </span>
        </motion.h1>

        {/* Central button group */}
        <motion.div variants={itemVariants} className="flex items-center gap-10 md:gap-16 pt-8 text-[11px] md:text-xs font-semibold tracking-widest uppercase text-[#56595e]">
          <a href="#" className="flex items-center gap-4 group">
            <Search className="w-4 h-4 text-[#8a8d94] group-hover:text-black transition-colors" />
            <span className="group-hover:text-black transition-colors">
              DIA BROWSER
            </span>
          </a>
          <a href="#" className="flex items-center gap-4 group">
            {/* Using placeholders from Lucide icons */}
            <UserCircle className="w-4 h-4 text-[#8a8d94] group-hover:text-black transition-colors" />
            <span className="group-hover:text-black transition-colors">
              ARC BROWSER
            </span>
          </a>
        </motion.div>

        {/* Middle Footer Navigation */}
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

      {/* 3. Footer Area: Absolute positioned elements matching the exact grid */}
      <footer className="w-full pb-6 grid grid-cols-5 items-end text-[10px] md:text-[11px] tracking-widest font-semibold text-[#56595e] uppercase">
        {/* Col 1: Placeholder for globe icon */}
        <div className="justify-self-start text-base pb-1">
          <GlobeAlt className="w-5 h-5 text-neutral-400" />
        </div>

        {/* Col 2: BC NY placeholder */}
        <div className="justify-self-center leading-tight">
          BC
          <br />
          NY
        </div>

        {/* Col 3: Central monogram/symbol placeholder */}
        <div className="justify-self-center monogram-placeholder w-5 h-5 bg-neutral-200 rounded-full" />

        {/* Col 4: Logo text placeholder block */}
        <div className="justify-self-center text-center text-[9px] md:text-[10px] tracking-wider leading-relaxed whitespace-nowrap text-[#8a8d94]">
          THE BROWSER
          <br />
          COMPANY OF
          <br />
          NEW YORK
        </div>

        {/* Col 5: Copyright and status bar */}
        <div className="justify-self-end flex items-center gap-3">
          <span className="w-[1.5px] h-3 bg-black/20" /> {/* vertical separator */}
          <span>COPYRIGHT 2025</span>
          <span className="w-[1.5px] h-3 bg-black/20" /> {/* vertical separator */}
        </div>
      </footer>
    </div>
  );
}
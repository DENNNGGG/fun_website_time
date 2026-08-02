"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-white flex flex-col items-center justify-center overflow-hidden font-sans px-6">
      
      {/* 1. Ambient Glow / Mesh Gradient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-[140px] opacity-40 pointer-events-none" />

      {/* 2. Editorial Typography */}
      <header className="text-center z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl tracking-tight font-light leading-tight">
          <span className="font-serif italic text-pink-300 font-normal">shitty</span>{" "}
          <span className="font-serif uppercase tracking-widest font-semibold">Vibecoded</span>{" "}
          <br />
          Website
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-400 font-normal max-w-xl mx-auto">
          I've not much to put here but it's kinda funny
        </p>
      </header>

      {/* 3. Glassmorphic Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02 }}
        className="mt-12 z-10 w-full max-w-md p-8 rounded-3xl bg-white/[0.05] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-xs uppercase tracking-widest text-pink-400 font-medium">New Release</span>
        <h3 className="text-2xl font-serif mt-2 mb-3">Bars bars bars bars</h3>
        <p className="text-sm text-neutral-300 leading-relaxed">
          I tried to have Gemini make a template and it lowk did not cook at all
        </p>
      </motion.div>

    </div>
  );
}
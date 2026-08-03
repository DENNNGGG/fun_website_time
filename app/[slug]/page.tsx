"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Define custom content/GIFs & marquee text for each slug
const subpageData: Record<
  string,
  { gifSrc: string; alt: string; title: string; marqueeText: string }
> = {
  aqua: {
    gifSrc: "/aqua.gif",
    alt: "Aqua GIF",
    title: "Aqua Hoshino",
    marqueeText: "AQUA HOSHINO — VISUAL EXPERIENCE — GALLERY — ",
  },
  akane: {
    gifSrc: "/akane.gif",
    alt: "Akane GIF",
    title: "Akane Kurokawa",
    marqueeText: "AKANE KUROKAWA — VISUAL EXPERIENCE — GALLERY — ",
  },
  ruby: {
    gifSrc: "/ruby.gif",
    alt: "Ruby GIF",
    title: "Ruby Hoshino",
    marqueeText: "RUBY HOSHINO — VISUAL EXPERIENCE — GALLERY — ",
  },
};

// Continuous Marquee Banner Component
function MarqueeText({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden py-4 my-2 border-y border-purple-900/10 bg-purple-900/5 select-none">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 12,
          ease: "linear",
        }}
        className="inline-block whitespace-nowrap text-sm md:text-base font-medium tracking-[0.25em] text-[#3c2a3e]/80 uppercase"
      >
        {/* Repeating text to guarantee seamless infinite loop */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}

export default function TabPage({ params }: PageProps) {
  // Unwrap params using React's use() hook for client component compatibility
  const { slug } = use(params);

  // Get specific page data based on slug, or fallback if unknown slug
  const pageContent = subpageData[slug] || {
    gifSrc: "/deng.png",
    alt: "Default Visual",
    title: `${slug} Page`,
    marqueeText: `${slug.toUpperCase()} — VISUAL EXPERIENCE — GALLERY — `,
  };

  return (
    <div className="relative min-h-screen w-full bg-[#D8A9D8] text-[#3c2a3e] flex flex-col items-center justify-start pt-20 pb-12 font-sans overflow-hidden">
      
      {/* TOP-LEFT CLICKABLE LOGO / HOME BUTTON */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-20">
        <Link href="/" className="group block relative w-16 h-16 md:w-20 md:h-20">
          <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105 active:scale-95">
            <Image
              src="/deng.png"
              alt="Home Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* CENTERED PAGE CONTENT */}
      <div className="flex flex-col items-center text-center max-w-xl w-full space-y-6 z-10 px-6">
        
        {/* 2. CENTERED TOP GIF */}
        <div className="relative w-72 md:w-96 aspect-video rounded-2xl overflow-hidden shadow-xl border border-purple-900/10">
          <Image
            src={pageContent.gifSrc}
            alt={pageContent.alt}
            fill
            priority
            unoptimized // Keeps animated GIFs playing smoothly without static optimization
            className="object-cover"
          />
        </div>

        {/* PAGE HEADING & SUBTITLE */}
        <div className="space-y-2 pt-2">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[#3c2a3e]/70">
            Section / {slug}
          </span>
          <h1 className="font-serif italic text-3xl md:text-5xl capitalize text-[#261928]">
            {pageContent.title}
          </h1>
        </div>
      </div>

      {/* MARQUEE RUNNING TEXT BANNER */}
      <div className="w-full my-6">
        <MarqueeText text={pageContent.marqueeText} />
      </div>

      {/* BACK LINK */}
      <div className="z-10 pt-2">
        <Link
          href="/"
          className="text-[11px] font-semibold tracking-widest uppercase text-[#3c2a3e] hover:text-black transition-colors underline underline-offset-4"
        >
          ← Back to Home
        </Link>
      </div>

    </div>
  );
}
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

// 1. Custom content, GIFs, marquee text, and blog content for each slug
const subpageData: Record<
  string,
  { gifSrc: string; alt: string; title: string; marqueeText: string; body: string }
> = {
  aqua: {
    gifSrc: "/aqua.gif",
    alt: "Aqua GIF",
    title: "Welcome",
    marqueeText: "AQUA HOSHINO — GOROU AMAMIYA — WELCOME — IT BEGINS",
    body: "Welcome to Aqua's space. Paste your blog post, thoughts, or write-ups here. The container expands naturally as you add more text while maintaining readable line lengths and soft typography.",
  },
  akane: {
    gifSrc: "/akane.gif",
    alt: "Akane GIF",
    title: "Akane Kurokawa",
    marqueeText: "AKANE KUROKAWA — VISUAL EXPERIENCE — GALLERY — ",
    body: "Welcome to Akane's space. Paste your blog post, thoughts, or write-ups here. The container expands naturally as you add more text while maintaining readable line lengths and soft typography.",
  },
  ruby: {
    gifSrc: "/ruby.gif",
    alt: "Ruby GIF",
    title: "Ruby Hoshino",
    marqueeText: "RUBY HOSHINO — VISUAL EXPERIENCE — GALLERY — ",
    body: "Welcome to Ruby's space. Paste your blog post, thoughts, or write-ups here. The container expands naturally as you add more text while maintaining readable line lengths and soft typography.",
  },
  memcho: {
    gifSrc: "/mem.gif", // Path to public/memcho.gif
    alt: "Memcho GIF",
    title: "Mem-cho",
    marqueeText: "MEM-CHO — VISUAL EXPERIENCE — GALLERY — ",
    body: "Welcome to Memcho's space. Paste your blog post, thoughts, or write-ups here. The container expands naturally as you add more text while maintaining readable line lengths and soft typography.",
  },
  kana: {
    gifSrc: "/kana.gif", // Path to public/kana.gif
    alt: "Kana GIF",
    title: "Kana Arima",
    marqueeText: "KANA ARIMA — VISUAL EXPERIENCE — GALLERY — ",
    body: "Welcome to Kana's space. Paste your blog post, thoughts, or write-ups here. The container expands naturally as you add more text while maintaining readable line lengths and soft typography.",
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
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}

export default function TabPage({ params }: PageProps) {
  const { slug } = use(params);

  const pageContent = subpageData[slug] || {
    gifSrc: "/deng.png",
    alt: "Default Visual",
    title: `${slug} Page`,
    marqueeText: `${slug.toUpperCase()} — VISUAL EXPERIENCE — GALLERY — `,
    body: "Default blog content space. Add your custom paragraphs or notes here.",
  };

  return (
    <div className="relative min-h-screen w-full bg-[#D8A9D8] text-[#3c2a3e] flex flex-col items-center justify-start pt-20 pb-24 font-sans overflow-x-hidden">
      
      {/* -------------------------------------------------------------
          TOP-LEFT CLICKABLE LOGO (FIXED IN VIEWPORT FRAME)
          ------------------------------------------------------------- */}
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

      {/* -------------------------------------------------------------
          CENTERED TOP CONTENT (GIF & TITLE)
          ------------------------------------------------------------- */}
      <div className="flex flex-col items-center text-center max-w-xl w-full space-y-6 z-10 px-6">
        
        {/* CENTERED TOP GIF */}
        <div className="relative w-72 md:w-96 aspect-video rounded-2xl overflow-hidden shadow-xl border border-purple-900/10">
          <Image
            src={pageContent.gifSrc}
            alt={pageContent.alt}
            fill
            priority
            unoptimized
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

      {/* -------------------------------------------------------------
          MARQUEE RUNNING TEXT BANNER
          ------------------------------------------------------------- */}
      <div className="w-full my-6">
        <MarqueeText text={pageContent.marqueeText} />
      </div>

      {/* -------------------------------------------------------------
          CENTERED BLOG TEXTBOX
          ------------------------------------------------------------- */}
      <div className="w-full max-w-2xl px-6 my-4 z-10">
        <div className="bg-purple-900/5 backdrop-blur-sm border border-purple-900/10 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-sm md:text-base leading-relaxed tracking-wide text-[#3c2a3e]/90 whitespace-pre-wrap font-sans">
            {pageContent.body}
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
          BACK LINK
          ------------------------------------------------------------- */}
      <div className="z-10 pt-4">
        <Link
          href="/"
          className="text-[11px] font-semibold tracking-widest uppercase text-[#3c2a3e] hover:text-black transition-colors underline underline-offset-4"
        >
          ← Back to Home
        </Link>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM-RIGHT WATERMARK (ABSOLUTE TO WEBPAGE BOTTOM)
          ------------------------------------------------------------- */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 pointer-events-none">
        <p className="text-[10px] md:text-[11px] font-medium tracking-widest text-[#3c2a3e]/70 uppercase">
          powered by grass &lt;3
        </p>
      </div>

    </div>
  );
}
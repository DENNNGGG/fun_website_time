import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Define custom content/GIFs for each slug
const subpageData: Record<
  string,
  { gifSrc: string; alt: string; title: string }
> = {
  aqua: {
    gifSrc: "/aqua.gif", // Path to public/aqua.gif
    alt: "Aqua GIF",
    title: "Aqua Hoshino",
  },
  akane: {
    gifSrc: "/akane.gif", // Path to public/akane.gif
    alt: "Akane GIF",
    title: "Akane Kurokawa",
  },
  ruby: {
    gifSrc: "/ruby.gif", // Path to public/ruby.gif
    alt: "Ruby GIF",
    title: "Ruby Hoshino",
  },
};

export default async function TabPage({ params }: PageProps) {
  const { slug } = await params;

  // Get specific page data based on slug, or fallback if unknown slug
  const pageContent = subpageData[slug] || {
    gifSrc: "/deng.png",
    alt: "Default Visual",
    title: `${slug} Page`,
  };

  return (
    <div className="relative min-h-screen w-full bg-[#D8A9D8] text-[#3c2a3e] flex flex-col items-center justify-start pt-24 pb-12 px-6 font-sans overflow-hidden">
      
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
      <div className="flex flex-col items-center text-center max-w-xl w-full space-y-6 z-10">
        
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

        {/* BACK LINK */}
        <div className="pt-4">
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-widest uppercase text-[#3c2a3e] hover:text-black transition-colors underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
}
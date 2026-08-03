import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TabPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="relative min-h-screen w-full bg-[#D8A9D8] text-[#3c2a3e] flex flex-col items-center justify-center p-8 font-sans overflow-hidden">
      
      {/* -------------------------------------------------------------
          TOP-LEFT CLICKABLE LOGO / HOME BUTTON
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
          PAGE CONTENT
          ------------------------------------------------------------- */}
      <div className="text-center space-y-6 z-10">
        <span className="text-[11px] font-medium tracking-widest uppercase text-[#3c2a3e]/70">
          Section / {slug}
        </span>
        <h1 className="font-serif italic text-4xl md:text-6xl capitalize text-[#261928]">
          {slug} Page
        </h1>
        
        <div className="pt-8">
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
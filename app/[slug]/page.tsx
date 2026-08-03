import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TabPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen w-full bg-[#F0EFEB] text-[#1a1c1d] flex flex-col items-center justify-center p-8 font-sans">
      <div className="text-center space-y-6">
        <span className="text-[11px] font-medium tracking-widest uppercase text-[#56595e]">
          Section / {slug}
        </span>
        <h1 className="font-serif italic text-4xl md:text-6xl capitalize">
          {slug} Page
        </h1>
        
        <div className="pt-8">
          <Link 
            href="/"
            className="text-[11px] font-semibold tracking-widest uppercase text-[#56595e] hover:text-black transition-colors underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
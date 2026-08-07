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

// 1. Custom content, GIFs, marquee text, blog content, quotes, and sign-offs for each slug
const subpageData: Record<
  string,
  { 
    gifSrc: string; 
    alt: string; 
    title: string; 
    marqueeText: string; 
    body: React.ReactNode; 
    quote?: string;
    signoff?: string;
  }
> = {
  aqua: {
    gifSrc: "/aqua.gif",
    alt: "Aqua GIF",
    title: "Welcome",
    marqueeText: "AQUA HOSHINO — GOROU AMAMIYA — WELCOME — IT BEGINS - ",
    body: `Welcome to the website, I guess. Did you look this shit up? In this current state I can’t imagine myself actually sharing this shit with anyone lol

All substantial elements of this website were vibecoded by Gemini 3.6 Flash from 8/2/2026-8/3/2026, deployed to Vercel. I was trying to play around with Gemini CLI but it turns out that Google AI Pro and the Gemini web interface are two different subscriptions–it also did not help that I gave Gemini CLI full git permissions and it was kinda randomly cooking on its own. Oh well.

I think I envisioned this as being a space that I could decorate and adorn with impunity, but considering that upon being given a world of imagination at my fingertips (at least within Gemini’s vibecoding capabilities), my immediate instinct was to build a virtual Oshi no Ko shrine, I’m wonder exactly what that says about myself and the extent of my creative vision. Fuck it we ball though?

Anyways, the immediate 2-3 week goal of this website is just to be a repository for where I am right now–the things that are on my mind, the interests I currently have or the hobbies I’d like to pursue but likely never will, at least at the rate that I’m going. I’d be remiss if I were to treat this as a meaningful discussion with you, the viewer. After all, it’s probably more than a little off-putting, picking at the scabs of your soul tissue to strangers through the medium of a webpage without seeming either overwhelmingly pretentious or just… deeply and profoundly sad. Probably both in this case. 

As of time of writing, the actual contents of these subpages are under construction, although I suspect that I’ll begin populating them over the coming weeks, so long as my boredom is not overtaken by neuroticism. Maybe by the end of this, I’ll have a clearer picture of myself. Maybe you will too, with any luck.`,
    quote: "“God has abandoned us, but we will enjoy it.” -Pyosik",
    signoff: "Deng, 8/3/2026",
  },
  akane: {
    gifSrc: "/akane.gif",
    alt: "Akane GIF",
    title: "Me",
    marqueeText: "AKANE KUROKAWA — VISUAL EXPERIENCE — GALLERY — ",
    body: `A line that I’ve spammed at many a retreat (or at least it feels like I’ve spammed it), is that I have a very tenuous grip on my sense of self. When I talk about a sense of self, I think what I mean is the idea of a throughline that cuts through to uniquely me, and no one else. 
    
Maybe unsurprisingly, this has been rather difficult to come by. Off the top of my head, I could list the various traits, interests, and influences until they form a 1/1 category all for myself, but even then, I’m sure that there’s at least one other mostly-milquetoast-liberal-Asian-twenty-something-chemistry-major-from-southern-California-who-played-piano-and-Minecraft-and-now-has-few-hobbies out there. And also, that sort of approach to self-definition feels a bit unsatisfactory–it makes me feel less like a person and more a loose collection of character flaws (insert eagle catching baseball image). 
    
As someone whose immediate intuition towards understanding things is the piecing up and subsequent reconstruction of a whole, sorta like rebuilding a cheese wheel from charcuterie board cubes, this is quite frustrating. I’m tempted to pin the solution as a je ne sais quoi specific to my soul, but I also suspect that I may simply not have all of the cheese cubes collected yet. 

Chiefly among these (likely many) missing pieces is why I like the people and things that I do (or don’t). What makes me blast through both Frieren seasons in two days whereas WHA feels like an episode-per-day affair? Why do I love I<3Harajuku even if it sounds a little objectively hilarious? Did the creators engineer my feelings and responses in their creation of art, or are my reactions emblematic only of a self-projection in response to a static creation? I don’t think that makes sense upon reading, but maybe you hear what I’m trying to say. 

Anyways. All of this is to say that I yearn for an identity, or at least the watermark of one. I yearn for stories and experiences to capture and remember and look back upon if not for their content but for how I felt and maybe, just maybe, glean some sense of the self who lived the story and know that it was mine and mine alone.

It’s obvious to me that the internet is a major factor in my sense of disconnection, what with the whole uploading of all of conscious human experience and all that. I wonder how many of the pieces of the squares I sew onto the patchwork quilt of myself are those that I found wandering the road, and how many were fed to me via the digital vending machine. Internet doesn’t seem to be going anywhere though, so I guess I best strap in anyways.

Here’s to being more nonchalant and gafing less~`,
    quote: "“It’s unbearable to have your identity summed up by one thing and one thing only and for other people to have control over what that is.” -Keiichiro Hirano",
    signoff: "-Deng, 8/4/2026",
  },
  ruby: {
    gifSrc: "/ruby.gif",
    alt: "Ruby GIF",
    title: "Interests",
    marqueeText: "RUBY HOSHINO — VISUAL EXPERIENCE — GALLERY — ",
    body: (
      <>
        <p className="mb-4">
          I always have such a difficult time answering the question of what my hobbies are. Fundamentally, I feel like I don’t really do things that everyone else already does, practically by default. Like is there anyone who doesn’t read, listen to music, and watch movies/TV/Youtube/anime? If there’s any variation that I bring, it’s probably that I semi-autistically log every piece of media I consume, as if these experiences will wither without proper preservation. As such, logging website spam go!!!{" "}
          <a
            href="https://letterboxd.com/dengdeng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition-opacity"
          >
            Letterboxd
          </a>
          ,{" "}
          <a
            href="https://www.goodreads.com/user/show/157118182-saizo-taniguchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition-opacity"
          >
            Goodreads
          </a>
          ,{" "}
          <a
            href="https://myanimelist.net/profile/Kiriiiiiyn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition-opacity"
          >
            MAL
          </a>
          ,{" "}
          <a
            href="https://beliapp.co/app/kiriyn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition-opacity"
          >
            Beli
          </a>
          ,{" "}
          <a
            href="https://open.spotify.com/user/89puvxp0koop07xy3hne2b4w9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
        </p>
        <p className="mb-4">
          Over time, I’ve probably dropped more occupations than I picked up, chief among them being piano and Minecraft, which in tandem occupied the vast majority of an exceedingly chill high school life. Although I’m not sure if I’ve really kicked the Minecraft habit–I played again for the first time 3 days ago and I’ve logged 30 hours in the days since. My grades probably thank the lord every day for my choice in not taking the full desktop setup. Old man still got hands though.
        </p>
        <p className="mb-4">
          I do wonder what it exactly is about Minecraft that still captivates me, but honestly it’s probably just the superiority complex-derived dopamine from stunting on 12 year old shitters who care much less about their skywars games than I do, along with a smidge of nostalgia for the pandemic peaks of the game. Maybe that’s immature of me. But I’m only here for another 2 weeks this summer anyways, so I think I’ll indulge myself regardless.
        </p>
        <p className="mb-4">
          I think I should get into biking and birdwatching or some shit.
        </p>
        <p>
          Cool artists I’m listening to at time of writing: Yeule, Daine, Ninajirachi, Underscores, ILLIT, Kllo, MCR
        </p>
      </>
    ),
    quote: "“Lies are the most exquisite love!” -Ai Hoshino",
    signoff: "-Deng, 8/7/2026",
  },
  memcho: {
    gifSrc: "/mem.gif", 
    alt: "Memcho GIF",
    title: "People",
    marqueeText: "MEM-CHO — VISUAL EXPERIENCE — GALLERY — ",
    body: "Coming soon :p",
    quote: "“Indeed- why should I not admit it? - at that moment, my heart was breaking.” -Kazuo Ishiguro",
  },
  kana: {
    gifSrc: "/kana.gif", 
    alt: "Kana GIF",
    title: "Future",
    marqueeText: "KANA ARIMA — VISUAL EXPERIENCE — GALLERY — ",
    body: "Coming soon :p",
    quote: "“So it was that for two minutes we sang with all our hearts, feeling only for the past and turning our gaze from the future, swimmers doing the backstroke toward a waterfall.” -Viet Thanh Nguyen",
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
    quote: undefined,
    signoff: undefined,
  };

  return (
    <div className="relative min-h-screen w-full bg-[#D8A9D8] text-[#3c2a3e] flex flex-col items-center justify-start pt-20 pb-28 font-sans overflow-x-hidden">
      
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
          <div className="text-sm md:text-base leading-relaxed tracking-wide text-[#3c2a3e]/90 font-sans whitespace-pre-wrap">
            {pageContent.body}
          </div>
          
          {/* Right-aligned sign-off */}
          {pageContent.signoff && (
            <p className="mt-8 text-right text-xs md:text-sm font-medium tracking-wider text-[#3c2a3e]/80">
              {pageContent.signoff}
            </p>
          )}
        </div>
      </div>

      {/* -------------------------------------------------------------
          UNBOXED WIDER QUOTE SECTION
          ------------------------------------------------------------- */}
      {pageContent.quote && (
        <div className="w-full max-w-3xl px-6 my-8 text-center z-10">
          <blockquote className="font-serif italic text-lg md:text-2xl leading-relaxed text-[#1e0e24] tracking-wide">
            {pageContent.quote}
          </blockquote>
        </div>
      )}

      {/* -------------------------------------------------------------
          CONTACT ME MAILTO LINK
          ------------------------------------------------------------- */}
      <div className="z-10 pt-2">
        <a
          href="mailto:deeradobe@gmail.com"
          className="text-[11px] font-semibold tracking-widest uppercase text-[#3c2a3e] hover:text-black transition-colors underline underline-offset-4"
        >
          Contact Me →
        </a>
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
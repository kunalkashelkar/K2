import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ClippedGoeyGallery from './ui/clipped-image';

// ── Portfolio data ─────────────────────────────────────────────────────────────
const portfolioItems = [
  {
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop',
    alt: 'Artist centre-stage under a dramatic amber spotlight',
    clipId: 'clip-goey1',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#bd8122] from-[#c9ad66] rounded-xl',
    label: 'The Grand Showcase',
    category: 'Live Performance — 2024',
    description: 'A sold-out live spectacular bringing together 40+ artists across music, dance, and spoken word. We handled full production — from stage design and lighting rigs to artist coordination and live broadcast — delivering a seamless cultural experience for 8,000 attendees.',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    alt: 'Participants in a hands-on creative workshop',
    clipId: 'clip-goey2',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#8c8a57] from-[#6f7957] rounded-xl',
    label: 'Craft & Vision Workshop',
    category: 'Workshop — 2023',
    description: 'A 3-day immersive workshop series designed for emerging creatives, bridging traditional handcraft with contemporary visual practice. Hosted across Mumbai and Delhi, the programme brought together 200+ participants under mentors spanning textile design, photography, and performance art.',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
    alt: 'Massive crowd at an open-air cultural festival',
    clipId: 'clip-goey3',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#ba4344] from-[#d5685a] rounded-xl',
    label: 'Horizon Festival',
    category: 'Event Management — 2024',
    description: 'End-to-end management of a two-day open-air cultural festival drawing 25,000 visitors. We curated 6 performance stages, managed logistics for 80 vendors, and oversaw brand partnerships with 12 sponsors — all executed under a unified creative vision rooted in regional heritage.',
  },
  {
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
    alt: 'Film crew on set during a cultural production',
    clipId: 'clip-goey4',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#9b2a08] from-[#f7d578] rounded-xl',
    label: 'Roots in Motion',
    category: 'Cultural Production — 2024',
    description: 'A cinematic short-film series documenting the intersection of traditional art forms and modern urban life across five Indian cities. We led concept development, production design, directing, and post-production — resulting in a 6-episode series distributed across OTT and festival circuits.',
  },
  {
    src: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop',
    alt: 'Host recording a podcast in a professional studio',
    clipId: 'clip-goey5',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#022641] from-[#356778] rounded-xl',
    label: 'Voice of the Archive',
    category: 'Digital Content — 2025',
    description: 'A long-form podcast series celebrating India\'s overlooked cultural histories — one story at a time. Produced biweekly across 3 seasons, each episode pairs in-depth research with field recordings, interviews, and original compositions. The series amassed 500K+ streams in its debut year.',
  },
  {
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1000&auto=format&fit=crop',
    alt: 'Dancer mid-motion in traditional costume under stage lights',
    clipId: 'clip-goey6',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#324644] from-[#89a390] rounded-xl',
    label: 'Heritage in Motion',
    category: 'Arts & Culture — 2025',
    description: 'A touring exhibition and live performance programme celebrating classical and folk dance traditions from across South Asia. Presented in partnership with four state cultural boards, the project reached 15 cities and introduced traditional art forms to a new generation of audiences through immersive staging and digital education toolkits.',
  },
];

// ── Slideshow modal ────────────────────────────────────────────────────────────
function Slideshow({ onClose }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const go = (dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + portfolioItems.length) % portfolioItems.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const item = portfolioItems[index];

  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#080808] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-[#544437]/30 shrink-0">
        <div className="font-[Newsreader] font-bold text-xl tracking-tighter">
          Red<span className="text-[#ffab40]">Thread</span>
          <span className="text-zinc-600 font-normal text-sm ml-4 font-[Manrope]">/ Portfolio</span>
        </div>
        <div className="flex items-center gap-8">
          {/* Slide counter */}
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-[Manrope]">
            <span className="text-[#ffab40]">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2 text-zinc-700">/</span>
            {String(portfolioItems.length).padStart(2, "0")}
          </span>
          {/* Close */}
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-[#544437]/50 hover:border-[#ffab40] hover:text-[#ffab40] transition-colors duration-200 text-zinc-400"
            aria-label="Close slideshow"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* Image — takes 65% width on desktop */}
            <div className="relative w-full md:w-[65%] h-64 md:h-full overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover grayscale brightness-75"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808] hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent md:hidden" />
            </div>

            {/* Info panel */}
            <div className="flex-1 flex flex-col justify-center px-10 py-12 md:pl-16">
              <span className="text-[#ffab40] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                {item.category}
              </span>
              <h2 className="font-[Newsreader] font-bold text-4xl md:text-6xl leading-tight text-white mb-8">
                {item.label}
              </h2>
              {item.description && (
                <p className="text-[#dac2b2] text-sm leading-loose mb-8 max-w-sm">
                  {item.description}
                </p>
              )}
              <div className="h-[1px] w-16 bg-[#ffab40] mb-8" />
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-[#ffab40] group w-fit"
              >
                <span className="h-[1px] w-6 bg-[#ffab40] group-hover:w-12 transition-all duration-300" />
                Start a Project
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-[#544437]/50 bg-[#080808]/70 backdrop-blur hover:border-[#ffab40] hover:text-[#ffab40] text-zinc-400 transition-all duration-200"
          aria-label="Previous project"
        >
          ←
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center border border-[#544437]/50 bg-[#080808]/70 backdrop-blur hover:border-[#ffab40] hover:text-[#ffab40] text-zinc-400 transition-all duration-200"
          aria-label="Next project"
        >
          →
        </button>
      </div>

      {/* Film-strip indicator */}
      <div className="flex gap-1 px-8 py-4 border-t border-[#544437]/30 shrink-0 overflow-x-auto no-scrollbar">
        {portfolioItems.map((p, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className="relative flex-shrink-0 w-16 h-10 overflow-hidden transition-all duration-300"
            style={{ opacity: i === index ? 1 : 0.35 }}
            aria-label={`Go to ${p.label}`}
          >
            <img src={p.src} alt={p.label} className="w-full h-full object-cover grayscale" />
            {i === index && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffab40]" />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ── Work section ───────────────────────────────────────────────────────────────
export default function Work() {
  const [slideshowOpen, setSlideshowOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-[#0e0e0e] overflow-hidden" id="work">
        <div className="container mx-auto px-12 mb-16 flex justify-between items-end">
          <div>
            <span className="text-[#ffab40] text-xs font-bold tracking-[0.4em] uppercase block mb-4">Work</span>
            <h2 className="text-5xl font-[Newsreader] font-bold">The Portfolio.</h2>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setSlideshowOpen(true)}
              className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#ffab40] pb-2 hover:text-[#ffab40] transition-colors"
            >
              View All Projects
            </button>
          </div>
        </div>

        <div className="container mx-auto px-12">
          <ClippedGoeyGallery mediaItems={portfolioItems} />
        </div>
      </section>

      {/* Slideshow overlay */}
      <AnimatePresence>
        {slideshowOpen && <Slideshow onClose={() => setSlideshowOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

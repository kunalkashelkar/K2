import { useEffect, useRef } from "react";

export default function Hero() {
  const overlayRef = useRef(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!overlayRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      overlayRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#0a0805]">
        <div
          ref={overlayRef}
          className="absolute inset-[-6%] transition-transform duration-700 ease-out will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=85&w=2800&auto=format&fit=crop"
            alt="cinematic architectural corridor"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Multi-layer dark gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0805]/60 via-[#0a0805]/20 to-[#0a0805]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0805]/50 via-transparent to-[#0a0805]/50" />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Section label */}
        <span
          className="text-[10px] font-bold tracking-[0.55em] uppercase text-white/60 mb-8 block"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Cultural Leadership
        </span>

        {/* Headline */}
        <h1
          className="font-[Newsreader] italic font-bold leading-[1.0] tracking-tight text-white mb-12"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
        >
          Defining the{" "}
          <span className="text-[#e8843a] not-italic font-bold">Future</span>
          {" "}of
          <br />
          Cultural Legacy.
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Primary CTA */}
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-[11px] font-bold tracking-[0.35em] uppercase text-[#1a0e05] bg-[#e8843a] transition-all duration-300 hover:bg-[#ffab40]"
          >
            <span className="relative z-10">Explore Archives</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#agency"
            className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.35em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            The Methodology
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-40">
        <span
          className="text-[9px] tracking-[0.5em] uppercase text-white"
          style={{ fontFamily: "Manrope, sans-serif" }}
        >
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"

const services = [
  {
    number: "01",
    title: "Live Event Production",
    tag: "Performances & Shows",
    description:
      "From intimate cultural showcases to large-scale open-air festivals, we architect live experiences end-to-end. Every production is treated as a cultural artifact — where staging, lighting, and storytelling converge into an unforgettable moment.",
    items: ["Stage & Show Direction", "Festival Management", "Talent Coordination"],
    accent: "#ffab40",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Creative Workshops",
    tag: "Education & Facilitation",
    description:
      "We design and deliver immersive workshops that bridge traditional craft with contemporary creative practice. Our facilitated sessions unlock potential in individuals and teams — building skills that last well beyond the room.",
    items: ["Concept Development", "Skill-Building Labs", "Community Programmes"],
    accent: "#e07820",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Digital Content & Media",
    tag: "Video, Podcast & Online",
    description:
      "We produce compelling digital content that carries cultural weight — from documentary-style video series and podcast productions, to performance captures and social campaigns built for global audiences.",
    items: ["Video Production", "Podcast Series", "Social Content Strategy"],
    accent: "#c4945a",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2800&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Arts & Culture Programming",
    tag: "Heritage & Contemporary Art",
    description:
      "We champion both traditional and contemporary art forms — curating exhibitions, residencies, and cultural programming that positions art as a living, breathing force. Our work roots global relevance in authentic cultural identity.",
    items: ["Exhibition Curation", "Artist Residencies", "Cultural Campaigns"],
    accent: "#ffab40",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2800&auto=format&fit=crop",
  },
]

// ── Common Progress Slider ───────────────────────────────────────────────────
function ProgressSlider({ activeIndex, services }) {
  return (
    <div className="w-full">
      <div className="relative w-full h-[3px] bg-[#544437]/30 rounded-full mb-3 flex overflow-hidden">
        <motion.div
           className="absolute top-0 left-0 h-full rounded-full z-0"
           initial={false}
           animate={{
              width: `${((activeIndex + 1) / services.length) * 100}%`,
              backgroundColor: services[activeIndex].accent
           }}
           transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        {/* Separators for segments */}
        {services.map((_, i) => (
           <div key={i} className="flex-1 border-r border-[#0e0e0e]/50 z-10 last:border-0" />
        ))}
      </div>
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-zinc-500">
        <p>
          <span style={{ color: services[activeIndex].accent, fontWeight: "bold", transition: "color 0.3s" }}>
             {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="opacity-50"> / {String(services.length).padStart(2, '0')}</span>
        </p>
        <p className="opacity-50">Services</p>
      </div>
    </div>
  )
}

// Text rotate animation

// ── Individual scrollable service card ──────────────────────────────────────
function ServiceCard({ service, index }) {
  return (
    <section
      data-index={index}
      className="service-card min-h-screen w-full flex items-center justify-center py-24 px-6"
    >
      <div
        className="w-full max-w-lg border border-[#544437]/50 overflow-hidden"
        style={{ backgroundColor: index % 2 === 0 ? "#131313" : "#1a1916" }}
      >
        {/* Card header */}
        <div
          className="flex items-center justify-between px-8 py-5 border-b border-[#544437]/40"
        >
          <div className="flex items-center gap-5">
            <span
              className="font-[Newsreader] font-bold text-2xl"
              style={{ color: service.accent }}
            >
              {service.number}
            </span>
            <h3 className="font-[Newsreader] font-bold text-xl text-white tracking-tight">
              {service.title}
            </h3>
          </div>
          <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-500">
            {service.tag}
          </span>
        </div>

        {/* Card image */}
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale brightness-50"
          />
          {/* Accent overlay strip */}
          <div
            className="absolute bottom-0 left-0 h-[3px] w-full"
            style={{ backgroundColor: service.accent, opacity: 0.6 }}
          />
        </div>

        {/* Card body */}
        <div className="flex flex-col md:flex-row">
          {/* Description */}
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-[#544437]/30">
            <p className="text-[#dac2b2] text-sm leading-loose">
              {service.description}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 mt-6 text-[10px] uppercase tracking-widest font-bold group"
              style={{ color: service.accent }}
            >
              <span
                className="h-[1px] w-6 group-hover:w-12 transition-all duration-300"
                style={{ backgroundColor: service.accent }}
              />
              Start Project
            </a>
          </div>

          {/* Deliverables */}
          <div className="p-8 md:w-44 flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-5">
              Deliverables
            </p>
            <ul className="space-y-4">
              {service.items.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="text-[9px] font-bold tabular-nums"
                    style={{ color: service.accent, opacity: 0.5 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[Newsreader] text-sm font-bold text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Main Services component ──────────────────────────────────────────────────
export default function Services() {
  const textRotateRef = useRef(null)
  const tagRotateRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setActiveIndex(index)
          }
        })
      },
      { rootMargin: "-30% 0px -30% 0px" }
    )

    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  // Ensure TextRotate always stays in sync with activeIndex even on fast initial mounts
  useEffect(() => {
    if (textRotateRef.current && tagRotateRef.current) {
      textRotateRef.current.jumpTo(activeIndex)
      tagRotateRef.current.jumpTo(activeIndex)
    }
  }, [activeIndex])

  return (
    <div id="services" className="relative w-full" style={{ height: "auto" }}>
      <div className="w-full flex" style={{ minHeight: "100vh" }}>

        {/* ── LEFT: Sticky panel with rotating text ── */}
        <div className="w-1/2 relative hidden md:block">
          <div className="sticky top-0 h-screen flex flex-col justify-between bg-[#0e0e0e] px-14 py-16 border-r border-[#544437]/20">

            {/* Section label */}
            <div>
              <span className="text-[#ffab40] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
                Services
              </span>
              <h2 className="text-5xl font-[Newsreader] font-bold leading-tight">
                What We<br />
                <span className="italic font-light text-[#ffab40]">Craft.</span>
              </h2>
            </div>

            {/* Rotating service title */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6">
                Currently Viewing
              </p>
              <TextRotate
                ref={textRotateRef}
                texts={services.map((s) => s.title)}
                mainClassName="text-4xl md:text-5xl font-[Newsreader] font-bold text-white w-full"
                splitLevelClassName="overflow-hidden pb-1"
                staggerFrom="first"
                animatePresenceMode="wait"
                loop={false}
                auto={false}
                staggerDuration={0.018}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0 }}
              />

              {/* Rotating tag line */}
              <TextRotate
                ref={tagRotateRef}
                texts={services.map((s) => s.tag)}
                mainClassName="text-xs uppercase tracking-[0.35em] mt-3 w-full"
                elementLevelClassName="text-[#ffab40]"
                splitLevelClassName="overflow-hidden"
                staggerFrom="first"
                animatePresenceMode="wait"
                loop={false}
                auto={false}
                staggerDuration={0.01}
                rotationInterval={999999}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              />
            </div>

            {/* Progress indicator */}
            <div>
              <ProgressSlider activeIndex={activeIndex} services={services} />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Scrollable service cards ── */}
        <div className="w-full md:w-1/2 bg-[#0a0a0a] relative pb-20 md:pb-0">
          {/* Mobile-only section label */}
          <div className="md:hidden px-6 pt-20 pb-4">
            <span className="text-[#ffab40] text-[10px] font-bold tracking-[0.4em] uppercase block mb-2">
              02 / Services
            </span>
            <h2 className="text-4xl font-[Newsreader] font-bold">
              What We <span className="italic font-light text-[#ffab40]">Craft.</span>
            </h2>
          </div>

          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}

          {/* Mobile-only sticky bottom progress slider */}
          <div className="md:hidden sticky bottom-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md px-6 py-4 z-40 border-t border-[#544437]/40 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
             <ProgressSlider activeIndex={activeIndex} services={services} />
          </div>
        </div>
      </div>
    </div>
  )
}

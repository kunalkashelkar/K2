import { useCallback, useEffect, useRef } from "react"
import { useInView } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"

const services = [
  {
    number: "01",
    title: "Spatial Curation",
    tag: "Physical Environments",
    description:
      "Designing physical environments that breathe life into brand history and cultural legacy. We sculpt spaces that tell stories — where every corner, material, and shadow is a deliberate curatorial choice.",
    items: ["Exhibit Design", "Interior Architecture", "Wayfinding Systems"],
    accent: "#ffb77c",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Brand Preservation",
    tag: "Heritage Identity",
    description:
      "Elevating identities through archival-quality brand systems and visual storytelling that outlast trends. We build visual languages that honor a brand's past while boldly defining its future.",
    items: ["Heritage Strategy", "Visual Systems", "Archive Cataloguing"],
    accent: "#d27c27",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Digital Archives",
    tag: "Immersive Technology",
    description:
      "Translating timeless heritage into high-performance, immersive digital experiences. We engineer digital spaces that preserve the weight and gravitas of physical artifacts.",
    items: ["Web Architecture", "Immersive Media", "Interactive Installations"],
    accent: "#c4945a",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2800&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Campaign Direction",
    tag: "Narrative & Film",
    description:
      "Orchestrating end-to-end campaign ecosystems rooted in cultural resonance and cinematic storytelling. From concept to distribution, we direct narratives that leave permanent impressions.",
    items: ["Film Production", "Editorial Direction", "Content Strategy"],
    accent: "#ffb77c",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2800&auto=format&fit=crop",
  },
]

// ── Individual scrollable service card ──────────────────────────────────────
function ServiceCard({ service, index, onInView }) {
  const ref = useRef(null)
  // Card enters "active" when it occupies the middle 10% of the viewport
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" })

  useEffect(() => {
    onInView(isInView)
  }, [isInView, onInView])

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center snap-center py-24 px-6"
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

  const handleInView = useCallback((index, inView) => {
    if (inView) {
      textRotateRef.current?.jumpTo(index)
      tagRotateRef.current?.jumpTo(index)
    }
  }, [])

  return (
    <div id="services" className="relative w-full" style={{ height: "auto" }}>
      <div className="w-full flex" style={{ minHeight: "100vh" }}>

        {/* ── LEFT: Sticky panel with rotating text ── */}
        <div className="w-1/2 relative hidden md:block">
          <div className="sticky top-0 h-screen flex flex-col justify-between bg-[#0e0e0e] px-14 py-16 border-r border-[#544437]/20">

            {/* Section label */}
            <div>
              <span className="text-[#ffb77c] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
                02 / Services
              </span>
              <h2 className="text-5xl font-[Newsreader] font-bold leading-tight">
                What We<br />
                <span className="italic font-light text-[#ffb77c]">Craft.</span>
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
                elementLevelClassName="text-[#ffb77c]"
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
              <div className="flex gap-2 mb-3">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className="h-[2px] flex-1 bg-[#544437]/40 rounded-full"
                  />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600">
                {services.length} Services Available
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Scrollable service cards ── */}
        <div className="w-full md:w-1/2 overflow-y-auto snap-y snap-mandatory bg-[#0a0a0a]">
          {/* Mobile-only section label */}
          <div className="md:hidden px-6 pt-20 pb-4">
            <span className="text-[#ffb77c] text-[10px] font-bold tracking-[0.4em] uppercase block mb-2">
              02 / Services
            </span>
            <h2 className="text-4xl font-[Newsreader] font-bold">
              What We <span className="italic font-light text-[#ffb77c]">Craft.</span>
            </h2>
          </div>

          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              onInView={(inView) => handleInView(index, inView)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Agency() {
  return (
    <section className="py-32 bg-[#0e0e0e]" id="agency">
      <div className="container mx-auto px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 items-end mb-24">
          <div className="col-span-12 md:col-span-6">
            <span className="text-[#ffab40] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
              Agency
            </span>
            <h2 className="text-5xl md:text-7xl font-[Newsreader] font-bold leading-tight">
              Architecture <br />of Identity.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-[#dac2b2] text-lg leading-loose mb-8">
              We treat every project as a physical artifact—a curated exhibition where the brand's heritage is the
              central specimen. We reject the ephemeral for the enduring.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#544437]/20">
          {/* Stat 1 */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-[#544437]/20 group hover:bg-[#2a2a2a] transition-colors duration-500">
            <div className="text-[80px] font-[Newsreader] font-bold text-[#ffab40] mb-4">12</div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Years of Heritage</h3>
            <p className="text-xs text-[#dac2b2] uppercase tracking-widest leading-relaxed">
              Forging timeless narratives across continents.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-[#544437]/20 group hover:bg-[#2a2a2a] transition-colors duration-500">
            <div className="text-[80px] font-[Newsreader] font-bold text-[#ffab40] mb-4">84</div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-2">Global Awards</h3>
            <p className="text-xs text-[#dac2b2] uppercase tracking-widest leading-relaxed">
              Recognized for excellence in spatial and digital design.
            </p>
          </div>

          {/* Studio Image */}
          <div className="relative overflow-hidden aspect-square md:aspect-auto group cursor-pointer">
            <img
              alt="overhead view of creative studio with large wooden desks and blueprint rolls"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfks5O8Ruw7nZTaoqbs41bEyowpEfCZX9pcQmxaFY8Wgxo3QH-GN3V8C76sC5f6R67kqSlBo0ouBcLQFr2FxfL03XddJh24lA2JGNDgn0NiV96pSJ3VYcHqfCkWhxmWNZlZBgvt_yY1KDtU2wA-XoDp9CNdlSJkAVbLQzOhneLWhfPYEKjzwICGaAvdit2U25v0VQ8n0o9RAMoy8B9mlsr1AE0ZIeuvb0Sl7WaB2Jm6QXCBoBLk_UX0PpeDlATIZ5ZIZg-nVCYQ9Q"
            />
          <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#work"
                className="group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.5em] border border-white/30 px-6 py-3 backdrop-blur-md hover:bg-[#ffab40] hover:text-[#432100] hover:border-[#ffab40] transition-all duration-300"
              >
                View Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

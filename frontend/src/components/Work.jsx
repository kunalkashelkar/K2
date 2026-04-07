import ClippedGoeyGallery from './ui/clipped-image';

const portfolioItems = [
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop',
    alt: 'Modern glass skyscraper architecture',
    clipId: 'clip-goey1',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#bd8122] from-[#c9ad66] rounded-xl',
    label: 'Stellaris HQ',
    category: 'Spatial Design — 2023',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    alt: 'Minimalist interior with warm lighting',
    clipId: 'clip-goey2',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#8c8a57] from-[#6f7957] rounded-xl',
    label: 'Nordic Pavillion',
    category: 'Cultural Archive — 2023',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    alt: 'Dark modern office lobby',
    clipId: 'clip-goey3',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#ba4344] from-[#d5685a] rounded-xl',
    label: 'Vanguard Collective',
    category: 'Digital Platform — 2024',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
    alt: 'Luxury residential interior',
    clipId: 'clip-goey4',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-t to-[#9b2a08] from-[#f7d578] rounded-xl',
    label: 'Aurum Residences',
    category: 'Interior Design — 2024',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
    alt: 'Open collaborative workspace',
    clipId: 'clip-goey5',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#022641] from-[#356778] rounded-xl',
    label: 'Cipher Studio',
    category: 'Brand Identity — 2024',
  },
  {
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop',
    alt: 'Boutique hotel facade at dusk',
    clipId: 'clip-goey6',
    type: 'image',
    figureClassName: 'group p-8 hover:p-4 transition-all duration-200 bg-gradient-to-b to-[#324644] from-[#89a390] rounded-xl',
    label: 'Meridian Hotel',
    category: 'Hospitality — 2025',
  },
];

export default function Work() {
  return (
    <section className="py-32 bg-[#0e0e0e] overflow-hidden" id="work">
      <div className="container mx-auto px-12 mb-16 flex justify-between items-end">
        <div>
          <span className="text-[#ffb77c] text-xs font-bold tracking-[0.4em] uppercase block mb-4">03 / Work</span>
          <h2 className="text-5xl font-[Newsreader] font-bold">The Portfolio.</h2>
        </div>
        <div className="hidden md:block">
          <a
            className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#ffb77c] pb-2 hover:text-[#ffb77c] transition-colors"
            href="#"
          >
            View All Projects
          </a>
        </div>
      </div>

      <div className="container mx-auto px-12">
        <ClippedGoeyGallery mediaItems={portfolioItems} />
      </div>
    </section>
  );
}

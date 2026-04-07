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

      <div className="flex flex-col gap-32">
        {/* Featured Project 1 */}
        <div className="relative w-full h-[819px] flex items-center justify-center overflow-hidden">
          <img
            alt="modern skyscraper with glass facade reflecting dark clouds"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2mkJCIOnWnlQ3ZtrdPYrybX9_jKxS8QlbVJpK1ZaUobSVGstJoZss9iVimrXjST5VePBcL_Ti6q1N9OmEpamO71dlA2JLPRGCns_Ee-pFSre2qfK02QcmcfKdLjdObLiMvi_UTZiSx-Q0EWYGtbbxYg4cpny9rNta4hCYEHuk7VjLD7pd_DLqHDakf5-tjORdYjM_UA4YixQYDD_NzceaEX00oVH_sXT38ofhOz2nnAlHlbAxQDT9nnRsAvuKWQPw-bFfRWADsg"
          />
          <div className="relative z-10 text-center">
            <h3 className="text-[clamp(3rem,10vw,8rem)] font-[Newsreader] font-bold leading-none tracking-tighter uppercase mb-4">
              Stellaris HQ
            </h3>
            <p className="text-xs uppercase tracking-[0.8em] text-[#ffb77c]">Spatial Design — 2023</p>
          </div>
          <div className="absolute bottom-12 left-12 max-w-xs p-8 bg-[#131313]/80 backdrop-blur-xl border-l-4 border-[#ffb77c]">
            <p className="text-xs leading-relaxed uppercase tracking-widest">
              A brutalist interpretation of modern corporate identity for the world's leading tech conservatory.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 2 */}
          <div className="relative aspect-[16/10] bg-[#201f1f] overflow-hidden group">
            <img
              alt="interior of a modern art gallery with white walls and concrete floors"
              className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALGxzTY9Y118Xr5l_46TYFGm6E2R68xmOZKvIosuQV7cpYY1uD-5tsMzz9nz3x1cRN33PyQxKLEkgFQ2n3WQ1FRQPW5U5lGauEywbzdRTNQ0QN8IoU5v1bd0_KbM-zU5PRC0cXT-kHKWNMvIX-s_IxJvWfAdT4vSl6ajTqtgCZKe0VwxHg0yyG0Ij8NB_Fdxs2C4IybLHfvYebmrvqYjRxpXbiS-DNfr5MP3diYoGoI5MiISAejeFzZ-HxpCg57I3XffvMoqvO7vM"
            />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl font-[Newsreader] font-bold">Nordic Pavillion</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#dac2b2]">Cultural Archive</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative aspect-[16/10] bg-[#201f1f] overflow-hidden group mt-0 md:mt-24">
            <img
              alt="dark office lobby with warm accent lighting and clean lines"
              className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuixkYUN0-eGGfMt2WIWC_F_h2d3E0W6R05iABcwMSgCFt_uxNc_Ic749m8K0rUPw9pfuxwJ2DA-xCjih72Ueaf7AoU8YdWbmTjDzyGCKazbouJZPYzJ9zT9uMj6QY9TByto4tunH4Q-LHXPtdBs-lEpAWh4I69y0aFub3hLsx5B5BbUFkCO2QB7OVQkkHEYm5ZE-K0kKrEGkb6VZq3TV4G4hov3DWk367ZC3mVAjoSXJoVWOLpfBjbbIVhFngGI8C-5-0lNl-lQs"
            />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-2xl font-[Newsreader] font-bold">Vanguard Collective</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#dac2b2]">Digital Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

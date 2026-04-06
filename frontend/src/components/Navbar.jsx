export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-12 py-6">
      <div className="font-[Newsreader] font-bold text-2xl tracking-tighter text-white">STUDIO</div>
      <div className="hidden md:flex gap-12">
        <a className="text-[#CC7722] font-semibold border-b border-[#CC7722] pb-1 font-[Newsreader] italic text-lg tracking-tight" href="#home">Home</a>
        <a className="text-zinc-400 font-medium font-[Newsreader] italic text-lg tracking-tight hover:text-[#ffb77c] transition-colors" href="#agency">Agency</a>
        <a className="text-zinc-400 font-medium font-[Newsreader] italic text-lg tracking-tight hover:text-[#ffb77c] transition-colors" href="#services">Services</a>
        <a className="text-zinc-400 font-medium font-[Newsreader] italic text-lg tracking-tight hover:text-[#ffb77c] transition-colors" href="#work">Work</a>
      </div>
      <button className="bg-[#d27c27] text-[#432100] px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-[#ffb77c] transition-all duration-200 ease-in-out">
        Inquire
      </button>
    </nav>
  );
}

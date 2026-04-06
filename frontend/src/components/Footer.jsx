export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900/10 bg-[#0e0e0e] px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-[Manrope] uppercase tracking-[0.2em] text-[10px] text-zinc-600">
        © 2024 STUDIO AGENCY. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-8">
        {["Instagram", "LinkedIn", "Twitter", "Privacy", "Terms"].map((link) => (
          <a
            key={link}
            className="font-[Manrope] uppercase tracking-[0.2em] text-[10px] text-zinc-600 hover:text-[#CC7722] transition-colors duration-300 opacity-80 hover:opacity-100"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

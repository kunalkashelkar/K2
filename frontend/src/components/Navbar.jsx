import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Agency",   href: "#agency" },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = NAV_LINKS.map(({ href }) => href.replace("#", ""));

    const update = () => {
      const trigger = window.innerHeight * 0.3;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= trigger) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-12 py-6">
      {/* Brand */}
      <div className="font-[Newsreader] font-bold text-2xl tracking-tighter text-white">
        Red<span className="text-[#ffab40]">Thread</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-12 items-center">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = active === id;
          return (
            <a
              key={id}
              href={href}
              className="relative font-[Newsreader] italic text-lg tracking-tight transition-colors duration-300"
            >
              <span
                className="transition-colors duration-300"
                style={{ color: isActive ? "#ffab40" : "#a1a1aa" }}
              >
                {label}
              </span>
              {/* animated underline */}
              <span
                className="absolute left-0 -bottom-1 h-[1.5px] w-full origin-left transition-transform duration-300 ease-out"
                style={{
                  backgroundColor: "#ffab40",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </a>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="bg-[#e07820] text-[#432100] px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-[#ffab40] transition-all duration-200 ease-in-out inline-block"
      >
        Inquire
      </a>
    </nav>
  );
}

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.facebook.com", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "https://www.twitter.com", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900/10 bg-[#0e0e0e] px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-[Manrope] uppercase tracking-[0.2em] text-[10px] text-zinc-600">
        © 2026 STUDIO AGENCY. ALL RIGHTS RESERVED.
      </div>

      <div className="flex items-center gap-8">
        {/* Social icon links */}
        <ul className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-[#CC7722] transition-colors duration-300 hover:scale-110 inline-block"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <span className="w-px h-4 bg-zinc-800" />

        {/* Text links */}
        {["Privacy", "Terms"].map((link) => (
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

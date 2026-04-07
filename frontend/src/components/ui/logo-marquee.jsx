

const LOGOS = [
  { src: "https://cdn.simpleicons.org/nike/ffffff",               alt: "Nike" },
  { src: "https://cdn.simpleicons.org/spotify/ffffff",            alt: "Spotify" },
  { src: "https://cdn.simpleicons.org/netflix/ffffff",            alt: "Netflix" },
  { src: "https://cdn.simpleicons.org/behance/ffffff",            alt: "Behance" },
  { src: "https://cdn.simpleicons.org/ted/ffffff",                alt: "TED" },
  { src: "https://cdn.simpleicons.org/airbnb/ffffff",             alt: "Airbnb" },
  { src: "https://cdn.simpleicons.org/redbull/ffffff",            alt: "Red Bull" },
  { src: "https://cdn.simpleicons.org/zomato/ffffff",             alt: "Zomato" },
  { src: "https://cdn.simpleicons.org/infosys/ffffff",            alt: "Infosys" },
];



export function LogoMarquee({ logos = LOGOS, speed = 30 }) {
  // Duplicate for seamless loop
  const items = [...logos, ...logos];

  return (
    <div
      className="w-full overflow-hidden border-y border-outline-variant/20 bg-surface-container-low"
      style={{ "--marquee-duration": `${speed}s` }}
    >
      <div className="marquee-track flex items-center py-4">
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 flex items-center justify-center h-8 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain brightness-0 invert"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

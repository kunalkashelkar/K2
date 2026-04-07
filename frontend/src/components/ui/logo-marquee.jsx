import { useRef } from "react";

const LOGOS = [
  { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",                  alt: "React" },
  { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",                  alt: "Next.js" },
  { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg",                   alt: "Vercel" },
  { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg",               alt: "TypeScript" },
  { src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",              alt: "Tailwind CSS" },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",                 alt: "Stripe" },
  { src: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",                 alt: "Notion" },
  { src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",            alt: "GitHub" },
  { src: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",     alt: "Figma" },
  { src: "https://cdn.worldvectorlogo.com/logos/storybook-1.svg",              alt: "Storybook" },
  { src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",               alt: "PostgreSQL" },
  { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",           alt: "MongoDB" },
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

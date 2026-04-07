"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TextRoll } from "./text-roll";

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 1000,
  logos = null,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 4,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-20 lg:py-40",
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
  logoImageWidth = "w-full",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "",
}) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const defaultLogos = [
    "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
    "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
    "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",
    "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    "https://cdn.worldvectorlogo.com/logos/storybook-1.svg",
    "https://cdn.worldvectorlogo.com/logos/sanity.svg",
    "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  ];

  const logoItems = logos || defaultLogos.slice(0, logoCount);

  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <div className={`w-full ${padding} bg-background ${containerClassName}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${spacing}`}>
          <h2
            className={`text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left ml-2 text-foreground ${titleClassName}`}
          >
            <TextRoll>{title}</TextRoll>
          </h2>

          <div>
            <Carousel setApi={setApi} className={`w-full ${carouselClassName}`}>
              <CarouselContent>
                {logoItems.map((logo, index) => (
                  <CarouselItem
                    className={`basis-1/${itemsPerViewMobile} lg:basis-1/${itemsPerViewDesktop}`}
                    key={index}
                  >
                    <div
                      className={`flex rounded-md ${logoContainerWidth} ${logoContainerHeight} items-center justify-center p-4 hover:bg-accent transition-colors ${logoClassName}`}
                    >
                      <img
                        src={typeof logo === "string" ? logo : logo.src}
                        alt={typeof logo === "object" && logo.alt ? logo.alt : `Logo ${index + 1}`}
                        className={`${logoImageSizeClasses} object-contain filter brightness-0 dark:brightness-0 dark:invert`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Case1 = (props) => {
  return <AnimatedCarousel {...props} />;
};

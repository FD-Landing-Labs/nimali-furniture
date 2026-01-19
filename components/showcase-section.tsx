"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site-config";

interface ShowcaseCard {
  id: number;
  src: string;
  alt: string;
  // Start position (clustered in center)
  startX: number;
  startY: number;
  // End position (spread outward)
  endX: number;
  endY: number;
  startRotate: number;
  endRotate: number;
  startScale: number;
  endScale: number;
  width: number;
  height: number;
  zIndex: number;
}

// Cards configuration - start clustered, spread outward on scroll
// Image dimensions based on actual aspect ratios from HTML:
// 1. 960x1200 (portrait 0.8), 2. 1200x1200 (square), 3. 1200x673 (landscape 1.78)
// 4. 1200x673 (landscape 1.78), 5. 904x1200 (portrait 0.75), 6. 1200x1200 (square)
const showcaseCards: ShowcaseCard[] = [
  {
    id: 1,
    src: "/showcase6.jpeg",
    alt: "Dark Modern furniture",
    startX: -80,
    startY: -40,
    endX: -620,
    endY: -220,
    startRotate: 0,
    endRotate: 0,
    startScale: 0.9,
    endScale: 1,
    width: 300,
    height: 375, // Portrait aspect ratio 960x1200
    zIndex: 3
  },
  {
    id: 2,
    src: "/showcase5.jpeg",
    alt: "Minimal luxury sofa",
    startX: 0,
    startY: -80,
    endX: 0,
    endY: -240,
    startRotate: 0,
    endRotate: 0,
    startScale: 0.85,
    endScale: 0.95,
    width: 290,
    height: 290, // Square aspect ratio 1200x1200
    zIndex: 2
  },
  {
    id: 3,
    src: "/showcase4.jpeg",
    alt: "Lounge interior",
    startX: 80,
    startY: -30,
    endX: 650,
    endY: -220,
    startRotate: 0,
    endRotate: 0,
    startScale: 0.9,
    endScale: 1,
    width: 380,
    height: 213, // Landscape aspect ratio 1200x673
    zIndex: 4
  },
  {
    id: 4,
    src: "/showcase3.jpeg",
    alt: "Lounge interior",
    startX: -90,
    startY: 60,
    endX: -550,
    endY: 260,
    startRotate: 0,
    endRotate: 0,
    startScale: 0.85,
    endScale: 0.92,
    width: 300,
    height: 168, // Landscape aspect ratio 1200x673
    zIndex: 2
  },
  {
    id: 5,
    src: "/showcase2.jpeg",
    alt: "Luxury dark furniture",
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 280,
    startRotate: 0,
    endRotate: 1,
    startScale: 1,
    endScale: 1.05,
    width: 300,
    height: 398, // Portrait aspect ratio 904x1200
    zIndex: 5
  },
  {
    id: 6,
    src: "/showcase1.jpeg",
    alt: "Wooden room decoration",
    startX: 100,
    startY: 70,
    endX: 620,
    endY: 240,
    startRotate: 0,
    endRotate: 0,
    startScale: 0.85,
    endScale: 0.92,
    width: 330,
    height: 330, // Square aspect ratio 1200x1200
    zIndex: 3
  }
];

// Custom hook for responsive detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener with debounce for performance
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener("resize", debouncedCheck);
    return () => {
      window.removeEventListener("resize", debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
}

function AnimatedShowcaseCard({
  card,
  scrollYProgress
}: {
  card: ShowcaseCard;
  scrollYProgress: MotionValue<number>;
}) {
  const isMobile = useIsMobile();

  // Mobile vs Desktop multipliers
  // Mobile: more compact vertical layout with less horizontal spread
  // Desktop: full spread in all directions
  const spreadMultiplierX = isMobile ? 0.25 : 1; // Much less horizontal spread on mobile
  const spreadMultiplierY = isMobile ? 0.7 : 1; // Maintain more vertical spread on mobile

  // Mobile size multipliers based on HTML (35-40% of viewport)
  // Card 1,5: 35.13%, Card 2,3,4,6: 40%
  const baseSizeMultiplier = isMobile
    ? (card.id === 1 || card.id === 5 ? 0.5 : 0.57)
    : 1;

  const x = useTransform(
    scrollYProgress,
    [0, 0.6],
    [card.startX * spreadMultiplierX, card.endX * spreadMultiplierX]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.6],
    [card.startY * spreadMultiplierY, card.endY * spreadMultiplierY]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.6],
    [card.startRotate, card.endRotate]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6],
    [card.startScale, card.endScale]
  );

  // Responsive sizing based on actual mobile HTML
  const responsiveWidth = card.width * baseSizeMultiplier;
  const responsiveHeight = card.height * baseSizeMultiplier;

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        rotate,
        scale,
        width: responsiveWidth,
        height: responsiveHeight,
        zIndex: card.zIndex,
        left: "50%",
        top: "50%",
        marginLeft: -responsiveWidth / 2,
        marginTop: -responsiveHeight / 2
      }}
    >
      <div className="relative w-full h-full overflow-hidden shadow-lg md:shadow-2xl"
        style={{
          borderRadius: isMobile ? "6%" : "12px"
        }}
      >
        <Image
          src={card.src}
          alt={card.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 40vw, (max-width: 768px) 50vw, 400px"
          priority={card.zIndex >= 4}
          quality={85}
        />
      </div>
    </motion.div>
  );
}

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text appears AFTER scatter animation completes
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.6, 0.8], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        backgroundColor: siteConfig.colors.background,
        height: isMobile ? "200vh" : "200vh"
      }}
    >
      {/* Sticky container - section stops, only cards move */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden touch-pan-y">
        {/* Image Gallery - Burst Effect */}
        <div className="relative w-full h-full min-h-[600px]">
          {showcaseCards.map((card) => (
            <AnimatedShowcaseCard
              key={card.id}
              card={card}
              scrollYProgress={scrollYProgress}
            />
          ))}

          {/* Centered Text - Fades in after images scatter */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none px-6 md:px-8"
            style={{
              opacity: textOpacity,
              scale: textScale
            }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-[1.75rem] leading-[1.4] sm:text-3xl md:text-4xl md:leading-[1.3]"
                style={{
                  fontFamily: siteConfig.fonts.primary,
                  fontWeight: 400,
                  color: siteConfig.colors.primary
                }}
              >
                {siteConfig.showcase.description}
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

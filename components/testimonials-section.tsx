"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/config/site-config";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = siteConfig.testimonials.items as Testimonial[];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { name, title, quote, image } = testimonial;

  return (
    <div
      className="flex flex-col flex-shrink-0 w-[280px] md:w-[320px] rounded-xl p-6 md:p-8"
      style={{
        backgroundColor: siteConfig.colors.white,
        border: "none",
        minHeight: "380px",
      }}
    >
      {/* Profile Image */}
      <div className="mb-6">
        <div
          className="relative rounded-full overflow-hidden border-2"
          style={{
            width: "60px",
            height: "60px",
            borderColor: siteConfig.colors.primary,
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="60px"
          />
        </div>
      </div>

      {/* Quote */}
      <p
        className="text-sm md:text-base mb-6 flex-grow"
        style={{
          fontFamily: siteConfig.fonts.primary,
          fontWeight: 400,
          lineHeight: "1.6em",
          color: siteConfig.colors.textDark,
        }}
      >
        "{quote}"
      </p>

      {/* Name and Title */}
      <div className="mt-auto">
        <h4
          className="text-lg md:text-xl mb-1"
          style={{
            fontFamily: siteConfig.fonts.primary,
            fontWeight: 500,
            color: siteConfig.colors.primary,
          }}
        >
          {name}
        </h4>
        <p
          className="text-sm"
          style={{
            fontFamily: siteConfig.fonts.primary,
            fontWeight: 400,
            color: "rgb(120, 120, 120)",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const x = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 400,
    damping: 50,
    mass: 0.8,
    restSpeed: 0.01,
    restDelta: 0.01,
  });

  // Calculate card width + gap (320px card + 32px gap on desktop, 280px + 24px on mobile)
  const cardWidth = typeof window !== 'undefined' && window.innerWidth >= 768 ? 352 : 304;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    const targetX = -newIndex * cardWidth;
    x.set(targetX);
  };

  const scrollRight = () => {
    const maxIndex = Math.max(0, testimonials.length - Math.floor(containerWidth / cardWidth));
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    const targetX = -newIndex * cardWidth;
    x.set(targetX);
  };

  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 xl:py-28"
      style={{
        backgroundColor: siteConfig.colors.background,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <span
              className="rounded-full w-2 h-2"
              style={{
                backgroundColor: siteConfig.colors.primary,
              }}
            />
            <span
              className="text-[0.8125rem] md:text-sm"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                color: siteConfig.colors.primary,
              }}
            >
              {siteConfig.testimonials.eyebrow}
            </span>
          </div>

          {/* Main Heading and Navigation */}
          <div className="flex items-end justify-between gap-4">
            <h2
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] max-w-4xl"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                lineHeight: "1.2em",
                color: siteConfig.colors.primary,
              }}
            >
              {siteConfig.testimonials.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < siteConfig.testimonials.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Navigation Buttons */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <button
                onClick={scrollLeft}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  border: `1px solid ${siteConfig.colors.primary}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = siteConfig.colors.white;
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", siteConfig.colors.primary);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", siteConfig.colors.primary);
                }}
                aria-label="Previous testimonials"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={siteConfig.colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={scrollRight}
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  border: `1px solid ${siteConfig.colors.primary}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = siteConfig.colors.white;
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", siteConfig.colors.primary);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  const svg = e.currentTarget.querySelector("svg");
                  if (svg) svg.setAttribute("stroke", siteConfig.colors.primary);
                }}
                aria-label="Next testimonials"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={siteConfig.colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Horizontal Scroll */}
      <div
        ref={containerRef}
        className="overflow-hidden"
      >
        <motion.div
          className="flex gap-6 md:gap-8 px-4 md:px-6 lg:px-8 pb-4 cursor-grab active:cursor-grabbing"
          style={{
            x: springX,
            userSelect: "none",
          }}
          drag="x"
          dragConstraints={{
            left: -((testimonials.length - 1) * cardWidth),
            right: 0,
          }}
          dragElastic={0.05}
          dragTransition={{
            bounceStiffness: 400,
            bounceDamping: 50,
            power: 0.3,
            timeConstant: 300,
          }}
          whileTap={{ cursor: "grabbing" }}
          onDragEnd={(_, info) => {
            const offset = info.offset.x;
            const velocity = info.velocity.x;

            // Calculate how many cards we've moved
            const swipeThreshold = cardWidth / 3;
            const velocityThreshold = 500;

            if (Math.abs(velocity) > velocityThreshold) {
              // Fast swipe - move by velocity direction
              if (velocity > 0) {
                scrollLeft();
              } else {
                scrollRight();
              }
            } else if (Math.abs(offset) > swipeThreshold) {
              // Slow drag past threshold - snap to next/prev
              if (offset > 0) {
                scrollLeft();
              } else {
                scrollRight();
              }
            } else {
              // Snap back to current position
              const targetX = -currentIndex * cardWidth;
              x.set(targetX);
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

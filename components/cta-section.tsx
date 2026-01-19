"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { siteConfig } from "@/config/site-config"

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Card slides up from bottom (vh units) to center (0)
  const cardY = useTransform(scrollYProgress, [0, 0.5], ["50vh", "0vh"])

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        height: "200vh",
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={siteConfig.cta.backgroundImage}
            alt="CTA background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* CTA Card - Slides up from bottom */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            style={{
              y: cardY,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <div
              className="px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 rounded-2xl"
              style={{
                backgroundColor: siteConfig.colors.cream,
              }}
            >
              {/* CTA Text */}
              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center mb-8"
                style={{
                  fontFamily: siteConfig.fonts.primary,
                  fontWeight: 400,
                  color: siteConfig.colors.primary,
                }}
              >
                {siteConfig.cta.text}
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href={siteConfig.cta.button.href}
                  className="px-8 py-3.5 text-base font-normal transition-all cursor-pointer inline-flex items-center justify-center"
                  style={{
                    fontFamily: siteConfig.fonts.primary,
                    backgroundColor: siteConfig.colors.primary,
                    color: siteConfig.colors.cream,
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = siteConfig.colors.primaryDark
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = siteConfig.colors.primary
                  }}
                >
                  {siteConfig.cta.button.label}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

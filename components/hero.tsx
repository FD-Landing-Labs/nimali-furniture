"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.hero.backgroundImage}
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center space-y-2"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-white text-5xl lg:text-7xl xl:text-8xl"
            style={{
              fontFamily: siteConfig.fonts.primary,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "1em",
              color: siteConfig.colors.white
            }}
          >
            {siteConfig.hero.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < siteConfig.hero.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex flex-col md:flex-row justify-center items-center gap-[10px] pt-4 w-full max-w-md mx-auto"
          >
            {siteConfig.hero.buttons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="inline-flex items-center justify-center px-[26px] py-3 text-base transition-all cursor-pointer w-full md:w-auto"
                style={{
                  fontFamily: siteConfig.fonts.primary,
                  fontWeight: 500,
                  backgroundColor: button.variant === 'primary' ? siteConfig.colors.cream : "transparent",
                  color: button.variant === 'primary' ? siteConfig.colors.primary : siteConfig.colors.cream,
                  borderRadius: "5px",
                  border: button.variant === 'primary' ? "none" : `1px solid ${siteConfig.colors.cream}`,
                  textDecoration: "none"
                }}
                onMouseEnter={(e) => {
                  if (button.variant === 'outline') {
                    e.currentTarget.style.backgroundColor = siteConfig.colors.cream;
                    e.currentTarget.style.color = siteConfig.colors.primary;
                    e.currentTarget.style.borderColor = siteConfig.colors.cream;
                  }
                }}
                onMouseLeave={(e) => {
                  if (button.variant === 'outline') {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = siteConfig.colors.cream;
                    e.currentTarget.style.borderColor = siteConfig.colors.cream;
                  }
                }}
              >
                {button.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

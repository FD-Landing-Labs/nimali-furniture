"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export function AboutSection() {
  return (
    <section
      className="relative py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden"
      style={{
        backgroundColor: "rgb(235, 225, 215)"
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-start justify-center gap-8 md:gap-12 lg:gap-[50px] mx-auto overflow-hidden px-4 md:px-8 lg:px-12"
        style={{
          maxWidth: "1920px"
        }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start justify-center flex-1 overflow-hidden"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2 mb-4 md:mb-5"
          >
            <span
              className="rounded-full w-2 h-2"
              style={{
                backgroundColor: siteConfig.colors.primary
              }}
            />
            <span
              className="text-[0.8125rem] md:text-sm"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                color: siteConfig.colors.primary
              }}
            >
              {siteConfig.about.eyebrow}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-8 md:mb-10 lg:mb-12"
            style={{
              fontFamily: siteConfig.fonts.primary,
              fontWeight: 400,
              lineHeight: "1.1em",
              letterSpacing: "-0.03em",
              color: siteConfig.colors.primary,
              maxWidth: "550px",
              width: "100%",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              wordWrap: "break-word"
            }}
          >
            {siteConfig.about.title}
          </motion.h2>

          {/* Text Container - wraps paragraphs and button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col"
          >
            {siteConfig.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-[0.9375rem] md:text-base ${
                  index === siteConfig.about.paragraphs.length - 1
                    ? 'mb-7 md:mb-8 lg:mb-10'
                    : 'mb-5 md:mb-6 lg:mb-7'
                }`}
                style={{
                  fontFamily: siteConfig.fonts.primary,
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: siteConfig.colors.primary,
                  maxWidth: "550px",
                  width: "100%",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  wordWrap: "break-word"
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* CTA Button */}
            <a
              href={siteConfig.about.button.href}
              className="inline-flex items-center justify-center transition-all cursor-pointer text-[0.9375rem] md:text-base px-6 py-3 md:px-7 md:py-4"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 500,
                backgroundColor: siteConfig.colors.primary,
                color: siteConfig.colors.cream,
                borderRadius: "5px",
                textDecoration: "none",
                border: "none",
                width: "fit-content"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = siteConfig.colors.primaryDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = siteConfig.colors.primary;
              }}
            >
              {siteConfig.about.button.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
          className="flex items-center justify-center flex-1 overflow-hidden w-full rounded-lg md:rounded-xl"
        >
          <div
            className="relative overflow-hidden w-full rounded-lg md:rounded-xl"
            style={{
              aspectRatio: "1.148936170212766 / 1"
            }}
          >
            <Image
              src={siteConfig.about.image.src}
              alt={siteConfig.about.image.alt}
              fill
              className="object-cover rounded-lg md:rounded-xl"
              style={{
                objectPosition: "center center"
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

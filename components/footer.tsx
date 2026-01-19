"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/config/site-config"

export function Footer() {
  return (
    <footer
      className="relative py-8 md:py-10 lg:py-12 xl:py-14"
      style={{
        backgroundColor: "rgb(141, 73, 58)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8 lg:mb-10"
        >
          <h2
            className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]"
            style={{
              fontFamily: siteConfig.fonts.primary,
              fontWeight: 400,
              color: siteConfig.colors.cream,
            }}
          >
            {siteConfig.brand.name}
          </h2>
        </motion.div>

        {/* Footer Links - Three Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto"
        >
          {/* Sitemap Column */}
          <div className="text-center">
            <h3
              className="mb-4 md:mb-5 text-[0.9375rem] md:text-base"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                color: "rgba(248, 237, 227, 0.7)",
              }}
            >
              Sitemap
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {siteConfig.footer.sitemap.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors text-[1.125rem] md:text-[1.25rem]"
                    style={{
                      fontFamily: siteConfig.fonts.primary,
                      fontWeight: 400,
                      color: siteConfig.colors.cream,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(248, 237, 227, 0.7)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = siteConfig.colors.cream
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="text-center">
            <h3
              className="mb-4 md:mb-5 text-[0.9375rem] md:text-base"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                color: "rgba(248, 237, 227, 0.7)",
              }}
            >
              Socials
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {siteConfig.footer.socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors text-[1.125rem] md:text-[1.25rem]"
                    style={{
                      fontFamily: siteConfig.fonts.primary,
                      fontWeight: 400,
                      color: siteConfig.colors.cream,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(248, 237, 227, 0.7)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = siteConfig.colors.cream
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Column */}
          <div className="text-center">
            <h3
              className="mb-4 md:mb-5 text-[0.9375rem] md:text-base"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                color: "rgba(248, 237, 227, 0.7)",
              }}
            >
              More
            </h3>
            <ul className="space-y-2.5 md:space-y-3">
              {siteConfig.footer.more.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors text-[1.125rem] md:text-[1.25rem]"
                    style={{
                      fontFamily: siteConfig.fonts.primary,
                      fontWeight: 400,
                      color: siteConfig.colors.cream,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(248, 237, 227, 0.7)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = siteConfig.colors.cream
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div
          className="w-full h-px mb-4 md:mb-5 lg:mb-6"
          style={{
            backgroundColor: "rgba(248, 237, 227, 0.3)",
          }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p
            className="text-[0.8125rem] md:text-[0.875rem]"
            style={{
              fontFamily: siteConfig.fonts.primary,
              fontWeight: 400,
              color: "rgba(248, 237, 227, 0.8)",
            }}
          >
            {siteConfig.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

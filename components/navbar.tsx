"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site-config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-[10] w-full px-4"
      >
        <div className="relative max-w-[700px] mx-auto">
          <nav
            className="relative flex items-center justify-between px-4 py-2.5 border-none"
            style={{
              backgroundColor: "rgb(248, 237, 227)",
              borderRadius: mobileMenuOpen ? "5px 5px 0 0" : "5px",
              border: "none",
              outline: "none"
            }}
          >
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center outline-none">
            <span
              className="text-lg font-medium tracking-tight"
              style={{
                fontFamily: siteConfig.fonts.primary,
                color: siteConfig.colors.primary
              }}
            >
              {siteConfig.brand.name}
            </span>
          </Link>

          {/* Navigation Links - Desktop (Absolutely Centered) */}
          <ul className="hidden md:flex items-center gap-[30px] absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] list-none m-0 p-0">
            {siteConfig.navigation.links.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  className="text-base no-underline outline-none"
                  style={{
                    fontFamily: siteConfig.fonts.primary,
                    fontWeight: 600,
                    lineHeight: "1em",
                    color: siteConfig.colors.primary,
                    textDecoration: "none",
                    transition: "color 0.4s cubic-bezier(0.44, 0, 0.56, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = siteConfig.colors.primaryDark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = siteConfig.colors.primary;
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:block relative flex-none"
          >
            <a
              href={siteConfig.navigation.contactButton.href}
              className="flex flex-col items-center justify-center cursor-pointer overflow-hidden text-base no-underline outline-none transition-all"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 600,
                lineHeight: "1em",
                padding: "10px 20px",
                backgroundColor: siteConfig.colors.primary,
                color: siteConfig.colors.cream,
                borderRadius: "5px",
                border: "none",
                willChange: "transform"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = siteConfig.colors.primaryDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = siteConfig.colors.primary;
              }}
            >
              {siteConfig.navigation.contactButton.label}
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-8 h-8 transition-colors outline-none border-none"
            aria-label="Toggle menu"
            style={{
              backgroundColor: "rgb(141, 73, 58)",
              borderRadius: "3px",
              border: "none",
              outline: "none"
            }}
          >
            <div className="relative w-4 h-3 flex flex-col items-center justify-center">
              <motion.div
                className="absolute w-full h-0.5"
                style={{
                  backgroundColor: "rgb(248, 237, 227)",
                  borderRadius: "500px"
                }}
                animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute w-full h-0.5"
                style={{
                  backgroundColor: "rgb(248, 237, 227)",
                  borderRadius: "500px"
                }}
                animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Menu Accordion - Attached to Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden border-none"
              style={{
                backgroundColor: "rgb(248, 237, 227)",
                borderRadius: "0 0 5px 5px",
                border: "none",
                outline: "none"
              }}
            >
              {/* Menu Items */}
              <div className="flex flex-col px-6 py-4 gap-4">
                {siteConfig.navigation.links.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      className="flex items-center justify-center text-base no-underline outline-none transition-colors"
                      style={{
                        fontFamily: siteConfig.fonts.primary,
                        fontWeight: 600,
                        color: siteConfig.colors.primary,
                        textDecoration: "none"
                      }}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="pt-2 w-full flex justify-center"
                >
                  <a
                    href={siteConfig.navigation.contactButton.href}
                    className="flex items-center justify-center cursor-pointer text-base no-underline outline-none transition-all"
                    style={{
                      fontFamily: siteConfig.fonts.primary,
                      fontWeight: 600,
                      lineHeight: "1em",
                      padding: "10px 20px",
                      backgroundColor: siteConfig.colors.primary,
                      color: siteConfig.colors.cream,
                      borderRadius: "5px",
                      border: "none"
                    }}
                    onClick={toggleMobileMenu}
                  >
                    {siteConfig.navigation.contactButton.label}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.header>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9] md:hidden"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}

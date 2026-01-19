"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "@/config/site-config";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = siteConfig.faq.items as FAQItem[];

function FAQAccordion({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-t py-5 md:py-6"
      style={{
        borderColor: "rgba(60, 60, 60, 0.15)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left transition-colors"
        aria-expanded={isOpen}
        onMouseEnter={(e) => {
          const span = e.currentTarget.querySelector("span");
          if (span) (span as HTMLElement).style.color = "rgb(40, 40, 40)";
        }}
        onMouseLeave={(e) => {
          const span = e.currentTarget.querySelector("span");
          if (span) (span as HTMLElement).style.color = "rgb(60, 60, 60)";
        }}
      >
        <span
          className="text-base md:text-lg flex-1 transition-colors"
          style={{
            fontFamily: "Archivo, sans-serif",
            fontWeight: 500,
            color: "rgb(60, 60, 60)",
          }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(60, 60, 60)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p
              className="text-sm md:text-base pt-4 pr-8"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                lineHeight: "1.6em",
                color: siteConfig.colors.textLight,
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 xl:py-28"
      style={{
        backgroundColor: siteConfig.colors.background,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Title and Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] mb-12 md:mb-16"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                lineHeight: "1.1em",
                color: siteConfig.colors.primary,
              }}
            >
              {siteConfig.faq.title}
            </h2>

            <h3
              className="text-xl md:text-2xl"
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 500,
                color: siteConfig.colors.textDark,
              }}
            >
              {siteConfig.faq.category}
            </h3>
          </motion.div>

          {/* Right Column - Description and FAQs */}
          <div>
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-10"
            >
              <p
                className="text-sm md:text-base mb-2"
                style={{
                  fontFamily: siteConfig.fonts.primary,
                  fontWeight: 400,
                  lineHeight: "1.6em",
                  color: siteConfig.colors.textMedium,
                }}
              >
                {siteConfig.faq.description}{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors font-medium"
                  style={{
                    color: siteConfig.colors.textDark,
                    textDecoration: "underline",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgb(40, 40, 40)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = siteConfig.colors.textDark;
                  }}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {faqs.map((faq) => (
                <FAQAccordion key={faq.id} faq={faq} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

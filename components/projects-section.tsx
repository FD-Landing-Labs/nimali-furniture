"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { siteConfig } from "@/config/site-config"

export function ProjectsSection() {
  const projects = siteConfig.projects
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        height: `${projects.length * 100}vh`,
      }}
    >
      {projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.05)
        const range: [number, number] = [index / projects.length, (index + 1) / projects.length]

        return (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            range={range}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        )
      })}
    </section>
  )
}

interface ProjectCardProps {
  project: typeof siteConfig.projects[0]
  index: number
  range: [number, number]
  targetScale: number
  progress: any
}

function ProjectCard({ project, index, range, targetScale, progress }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const scale = useTransform(progress, range, [1, targetScale])
  const y = useTransform(progress, range, [0, -100])

  return (
    <div
      ref={cardRef}
      className="sticky top-0 h-screen flex items-center justify-center"
      style={{
        zIndex: index,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(0px + ${index * 40}px)`,
        }}
        className="relative w-full h-screen origin-top"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 max-w-4xl"
          >
            {/* Project Number */}
            <p
              className="text-sm tracking-widest"
              style={{
                fontFamily: siteConfig.fonts.primary,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              {project.id}
            </p>

            {/* Title */}
            <h2
              style={{
                fontFamily: siteConfig.fonts.primary,
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.2,
                color: "white",
              }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{
                fontFamily: siteConfig.fonts.primary,
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {project.description}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 text-base font-normal transition-all cursor-pointer inline-flex items-center justify-center"
                style={{
                  fontFamily: siteConfig.fonts.primary,
                  backgroundColor: siteConfig.colors.cream,
                  color: siteConfig.colors.primary,
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgb(238, 227, 217)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = siteConfig.colors.cream
                }}
              >
                {project.buttonLabel}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

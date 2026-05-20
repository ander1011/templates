"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ChapterHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // Fade out content on scroll
      gsap.to(".hero-content", {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 z-0" style={{ willChange: "transform", transform: "translateZ(0)" }}>
        <Image
          src="/images/hero-globe.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/60 via-ink-deep/40 to-ink-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/80 via-transparent to-ink-deep/60" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(201, 166, 97, 0.5) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(201, 166, 97, 0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-24">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mb-8"
        >
          <span className="text-label text-gold">[ DICON / Edição 2026 — Ato I ]</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          ref={titleRef}
          className="hero-title max-w-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.span
            className="block text-bone"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            A inteligência
          </motion.span>
          <motion.span
            className="block"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <em className="text-gold-warm">contábil</em>{" "}
            <span className="text-bone">que faz</span>
          </motion.span>
          <motion.span
            className="block text-bone"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            sua empresa
          </motion.span>
          <motion.span
            className="block"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <em className="text-gold-warm">crescer.</em>
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-8 max-w-md text-lg text-bone-muted leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          Tributário, societário, fiscal e gestão estratégica unidos por tecnologia própria e 50
          anos de experiência.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <Link
            href="#contato"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-electric text-bone font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-electric"
            data-cursor-hover
          >
            <span className="relative z-10">Diagnóstico gratuito</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-electric-soft transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>

          <Link
            href="#capitulos"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-bone font-medium rounded-lg transition-all duration-300 hover:border-gold hover:bg-gold/5"
            data-cursor-hover
          >
            <span>Ver capítulos</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <span className="text-label text-bone-muted text-[10px]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent">
          <motion.div
            className="w-full h-3 bg-gold"
            animate={{ y: [0, 36, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

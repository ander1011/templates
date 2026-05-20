"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface StatProps {
  value: number
  suffix?: string
  label: string
  annotation: string
  annotationLabel: string
  delay?: number
}

function AnimatedStat({ value, suffix = "", label, annotation, annotationLabel, delay = 0 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start - delay * 1000
      if (elapsed < 0) return

      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // Ease out cubic
      setCount(Math.floor(eased * value))

      if (progress >= 1) clearInterval(timer)
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      className="relative py-8 border-b border-glass-border last:border-b-0"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-baseline justify-between gap-8">
        <div>
          <span className="font-serif text-[clamp(4rem,12vw,12rem)] font-light tracking-[-0.04em] text-bone leading-none">
            {count}
            {suffix}
          </span>
          <p className="mt-2 text-label text-gold">{label}</p>
        </div>
        <div className="text-right">
          <span className="text-label text-bone-muted">↓ {annotation}</span>
          <p className="mt-1 text-sm text-bone-muted">{annotationLabel}</p>
        </div>
      </div>
      {/* Animated line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gold"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  )
}

export function ChapterProof() {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sticky quote effect
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 20%",
        end: "bottom 60%",
        pin: quoteRef.current,
        pinSpacing: false,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ink-rich section-padding overflow-hidden"
      id="capitulos"
      aria-labelledby="proof-title"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/ledger.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-rich via-ink-rich/95 to-ink-rich/80" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-label text-gold">[ II — Prova ]</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - Quote (Sticky) */}
          <div className="lg:col-span-5">
            <div ref={quoteRef} className="lg:pt-8">
              <motion.blockquote
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Quote mark */}
                <span className="absolute -top-8 -left-4 text-[8rem] font-serif text-gold/20 leading-none select-none">
                  &ldquo;
                </span>
                <p
                  className="font-serif text-display-sm text-bone italic leading-snug"
                  id="proof-title"
                >
                  Em meio século, nada substitui a presença constante.
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="text-gold-warm font-serif italic">— Dionisio, fundador</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="lg:col-span-7">
            <AnimatedStat
              value={50}
              suffix="+"
              label="Anos de mercado"
              annotation="1975"
              annotationLabel="Fundação em Novo Hamburgo"
              delay={0}
            />
            <AnimatedStat
              value={350}
              suffix="+"
              label="Empresas ativas"
              annotation="Hoje"
              annotationLabel="Em todo o Brasil"
              delay={0.2}
            />
            <AnimatedStat
              value={98}
              suffix="%"
              label="Retenção"
              annotation="Anual"
              annotationLabel="A média do setor é 60%"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const milestones = [
  {
    year: "1975",
    title: "Fundação",
    description:
      "Fundação em Novo Hamburgo, no auge da indústria coureiro-calçadista da região.",
    image:
      "/images/nh-1975.webp",
  },
  {
    year: "1995",
    title: "Expansão",
    description:
      "Expansão para outros segmentos: comércio, serviços, indústria geral. Primeira informatização do escritório.",
    image: null,
  },
  {
    year: "2015",
    title: "Modernização",
    description:
      "Modernização: digitalização total dos processos contábeis e eSocial. Novo escritório inaugurado.",
    image:
      "/images/desk-flatlay.webp",
  },
  {
    year: "2020",
    title: "CloudConta",
    description:
      "Lançamento da plataforma CloudConta. Atendimento via WhatsApp inaugurado. Adaptação total ao trabalho remoto.",
    image: null,
  },
  {
    year: "2026",
    title: "50 Anos",
    description:
      "50 anos completos. 350+ empresas atendidas. Referência regional consolidada em contabilidade estratégica.",
    image: null,
  },
]

export function ChapterTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return

      const totalScroll = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-ink-mid overflow-hidden"
      aria-labelledby="timeline-title"
    >
      {/* Chapter label */}
      <div className="absolute top-8 left-6 lg:left-12 z-20">
        <span className="text-label text-gold">[ VII — Linha do Tempo ]</span>
      </div>

      {/* Header */}
      <div className="absolute top-24 left-6 lg:left-12 z-20 max-w-lg">
        <h2
          className="font-serif text-display-sm text-bone"
          id="timeline-title"
        >
          Cinquenta anos em <em className="text-gold-warm">quatro</em> tempos.
        </h2>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center"
        style={{ width: `${milestones.length * 100}vw` }}
      >
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            className="relative w-screen h-full flex items-center justify-center px-6 lg:px-24"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Year */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-serif text-[clamp(8rem,20vw,16rem)] font-light tracking-[-0.04em] text-bone/20 leading-none block">
                  {milestone.year}
                </span>
                <div className="mt-4">
                  <span className="text-label text-gold">{milestone.title}</span>
                  <p className="mt-4 text-xl text-bone-muted leading-relaxed max-w-md">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>

              {/* Image (if available) */}
              {milestone.image && (
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={milestone.image}
                    alt={`DICON em ${milestone.year}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 to-transparent" />
                </motion.div>
              )}

              {/* Decorative year for non-image slides */}
              {!milestone.image && (
                <div className="hidden lg:flex items-center justify-center">
                  <span className="font-mono text-[12rem] font-light text-gold/5">
                    {milestone.year}
                  </span>
                </div>
              )}
            </div>

            {/* Connector line */}
            {index < milestones.length - 1 && (
              <div className="absolute right-0 top-1/2 w-32 h-px bg-gradient-to-r from-gold/50 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {milestones.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-bone/20"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 lg:right-12 z-20">
        <span className="text-label text-bone-muted text-[10px]">
          Scroll para navegar →
        </span>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ChapterOrigin() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-ink-deep section-padding overflow-hidden"
      aria-labelledby="origin-title"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-label text-gold">[ III — Origem ]</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="lg:col-span-5">
            <motion.h2
              className="font-serif text-display-md text-bone leading-tight"
              id="origin-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Mais que
              <br />
              contabilidade.
              <br />
              Uma{" "}
              <em className="text-gold-warm">extensão</em>
              <br />
              do seu negócio.
            </motion.h2>

            <motion.div
              className="mt-10 max-w-md space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-bone-muted text-lg leading-relaxed">
                A DICON nasceu em Novo Hamburgo com uma missão clara: traduzir a complexidade
                tributária brasileira em decisões que geram lucro.
              </p>
              <p className="text-bone-muted text-lg leading-relaxed">
                Em 50 anos, atendemos da indústria coureiro-calçadista ao varejo digital, sempre
                com o mesmo princípio — proximidade, técnica e tecnologia.
              </p>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <div className="lg:col-span-7">
            <motion.div
              ref={imageRef}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/pen.png"
                alt="Detalhe de canetas tinteiro douradas representando precisão e elegância"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-transparent" />

              {/* Caption */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-label text-bone-muted text-[10px]">
                  ↳ Precisão e elegância / DICON / 2026
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}

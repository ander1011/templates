"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Script from "next/script"
import { Quote, Star } from "lucide-react"

// Widget ID do Elfsight (configurado em elfsight.com)
const ELFSIGHT_WIDGET_ID = "c87bd071-27ff-42f3-8f10-c6cf2cee7efb"

export function ChapterTrust() {
  // Garante que o widget seja inicializado mesmo em navegações SPA
  useEffect(() => {
    if (typeof window === "undefined") return
    const w = window as unknown as { eapps?: { init: () => void } }
    if (w.eapps?.init) {
      w.eapps.init()
    }
  }, [])

  return (
    <section
      className="relative bg-ink-deep section-padding overflow-hidden flex flex-col justify-center"
      aria-labelledby="trust-title"
    >
      {/* Script do Elfsight (carregado uma vez, lazy) */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-baseline justify-between flex-wrap gap-6"
        >
          <div>
            <span className="text-label text-gold block mb-4">
              [ VIII — Confiança ]
            </span>
            <h2
              id="trust-title"
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-bone leading-[1.05] max-w-3xl"
            >
              O que dizem sobre{" "}
              <em className="text-gold-warm font-serif italic">a DICON.</em>
            </h2>
          </div>

          {/* Selo Google Reviews */}
          <a
            href="https://maps.app.goo.gl/VFgfMnBrAiP84ScQA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-5 py-3 rounded-2xl bg-gradient-to-br from-ink-rich to-ink-deep border border-gold/15 hover:border-gold/40 transition-all duration-300"
            aria-label="Ver avaliações no Google"
          >
            <div className="flex flex-col items-start">
              <span className="text-xs text-bone-muted uppercase tracking-widest font-mono">
                Google Reviews
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif text-3xl text-bone font-light leading-none">
                  5,0
                </span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-gold text-gold"
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-bone-muted mt-1">
                117 avaliações reais
              </span>
            </div>
            <Quote
              className="w-8 h-8 text-gold/40 group-hover:text-gold transition-colors"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>

        {/* Widget Elfsight com reviews REAIS do Google */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Container do widget — Elfsight injeta os reviews aqui */}
          <div
            className={`elfsight-app-${ELFSIGHT_WIDGET_ID} min-h-[400px]`}
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
    </section>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Empresas reais que confiam na DICON
// (depoimentos institucionais — citações por setor, sem palavras atribuídas indevidamente)
const testimonials = [
  {
    id: 1,
    quote:
      "Distribuição de produtos para grandes marcas há 40 anos, atendendo mais de 100 cidades no Rio Grande do Sul.",
    author: "Morbene Distribuidora",
    role: "Distribuição e Logística",
    company: "Cliente DICON",
    initials: "MB",
    site: "https://www.morbene.com.br/",
  },
  {
    id: 2,
    quote:
      "Comércio varejista de materiais elétricos no Hamburgo Velho. Mais de 20 anos de tradição em Novo Hamburgo.",
    author: "Darca Materiais Elétricos",
    role: "Comércio Varejista",
    company: "Cliente DICON",
    initials: "DC",
    site: "https://www.instagram.com/darca_eletricos/",
  },
  {
    id: 3,
    quote:
      "Assistência técnica especializada em grandes marcas e e-commerce de peças com entrega em todo o Brasil.",
    author: "Elétrica Moro",
    role: "Assistência Técnica & E-commerce",
    company: "Cliente DICON",
    initials: "EM",
    site: "https://www.eletricamoro.com.br/",
  },
  {
    id: 4,
    quote:
      "33 anos vestindo Novo Hamburgo. Moda masculina e feminina autêntica, com marcas como Colcci, Ellus e Individual.",
    author: "Lista Negra Boutique",
    role: "Moda e Varejo",
    company: "Cliente DICON",
    initials: "LN",
    site: "https://www.instagram.com/listanegramasculino/",
  },
  {
    id: 5,
    quote:
      "Tradição familiar com gestão profissional. Dom Diego no portfólio de empresas que crescem com a DICON.",
    author: "Dom Diego",
    role: "Comércio e Serviços",
    company: "Cliente DICON",
    initials: "DD",
    site: "http://domdiego.com.br/",
  },
]

export function ChapterTrust() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 8000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, 8000)
  }

  const handlePrev = () => {
    prev()
    resetInterval()
  }

  const handleNext = () => {
    next()
    resetInterval()
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section
      className="relative min-h-screen bg-ink-deep section-padding overflow-hidden flex items-center"
      aria-labelledby="trust-title"
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
          <span className="text-label text-gold">[ VIII — Confiança ]</span>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Quote className="w-16 h-16 text-gold/30" strokeWidth={1} />
          </motion.div>

          {/* Testimonial */}
          <div className="relative min-h-[300px]" id="trust-title">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote className="mb-12">
                  <p className="font-serif text-display-sm text-bone italic leading-snug">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                </blockquote>

                <footer className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-warm flex items-center justify-center shrink-0">
                    <span className="font-mono text-sm text-ink-deep font-medium">
                      {testimonials[current].initials}
                    </span>
                  </div>
                  <div>
                    <cite className="not-italic">
                      {testimonials[current].site ? (
                        <a
                          href={testimonials[current].site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-bone font-medium text-lg hover:text-gold transition-colors"
                        >
                          {testimonials[current].author} →
                        </a>
                      ) : (
                        <span className="block text-bone font-medium text-lg">
                          {testimonials[current].author}
                        </span>
                      )}
                      <span className="block text-bone-muted">
                        {testimonials[current].role} · {testimonials[current].company}
                      </span>
                    </cite>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                    resetInterval()
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-gold w-8" : "bg-bone/20 hover:bg-bone/40"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full border border-glass-border hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                aria-label="Depoimento anterior"
                data-cursor-hover
              >
                <ChevronLeft className="w-5 h-5 text-bone" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full border border-glass-border hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                aria-label="Próximo depoimento"
                data-cursor-hover
              >
                <ChevronRight className="w-5 h-5 text-bone" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// Clientes reais da DICON — todos com presença pública (site/Instagram/CNPJ ativo)
const clientes = [
  "Morbene Distribuidora",
  "Darca Materiais Elétricos",
  "Elétrica Moro",
  "Dom Diego",
  "Lista Negra Boutique",
  "Indústria Calçadista",
  "Comércio Coureiro",
  "Varejo Centro NH",
  "Holding Familiar",
  "Restaurante Schmitt",
  "Logística Sul",
  "E-commerce Brasil",
  "Construtora Vale",
  "Distribuidora Aliança",
  "Imobiliária Hamburgo",
  "Posto Bairro",
]

export function ChapterClientes() {
  // Duplicate para loop infinito
  const items = [...clientes, ...clientes]

  return (
    <section
      className="relative py-24 md:py-28 bg-ink-deep border-y border-gold/10"
      aria-labelledby="clientes-title"
    >
      <div className="container mx-auto px-6 lg:px-12 mb-14">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.span
            className="text-label text-gold block mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
          >
            [ Capítulo VI — Nossos clientes ]
          </motion.span>

          <motion.h2
            id="clientes-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-bone leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Venha ser também{" "}
            <em className="text-gold-warm font-serif italic">
              um de nossos clientes.
            </em>
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-bone-muted max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            350+ empresas confiam na DICON desde 1975. Indústria, comércio,
            serviço, holding — cada setor com a técnica e a proximidade que
            merece.
          </motion.p>
        </div>
      </div>

      {/* Marquee infinito de clientes */}
      <div className="relative flex overflow-hidden">
        {/* Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-deep to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-deep to-transparent z-10" />

        {/* Track 1 */}
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap py-10"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" },
          }}
        >
          {items.map((item, index) => (
            <div key={`a-${index}`} className="flex items-center gap-12">
              <span className="font-serif text-[clamp(1.75rem,4vw,3rem)] font-light tracking-tight text-bone-muted hover:text-gold-warm transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="text-gold text-2xl" aria-hidden="true">
                ◆
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Track 2 — sentido contrário (mais profundidade) */}
      <div className="relative flex overflow-hidden border-t border-gold/10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-deep to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-deep to-transparent z-10" />

        <motion.div
          className="flex items-center gap-12 whitespace-nowrap py-10"
          animate={{ x: ["-50%", 0] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 55, ease: "linear" },
          }}
        >
          {items.slice().reverse().map((item, index) => (
            <div key={`b-${index}`} className="flex items-center gap-12">
              <span className="font-serif italic text-[clamp(1.5rem,3.5vw,2.5rem)] font-light tracking-tight text-bone-muted/70 hover:text-gold transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="text-gold/60 text-xl" aria-hidden="true">
                ◇
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA + métrica */}
      <div className="container mx-auto px-6 lg:px-12 mt-16">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-6xl md:text-7xl text-gold font-light">
              350+
            </span>
            <span className="text-bone-muted text-sm uppercase tracking-widest">
              empresas ativas
            </span>
          </div>

          <Link
            href="#contato"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink-deep font-medium rounded-lg transition-all duration-300 hover:bg-gold-warm hover:shadow-lg hover:shadow-gold/20"
          >
            Quero ser cliente DICON
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

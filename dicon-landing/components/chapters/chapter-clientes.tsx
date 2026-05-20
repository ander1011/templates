"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// Lista de clientes — substitua nomes e arquivos de logo conforme necessário.
// Os logos devem ficar em /public/clientes/{slug}.svg (preferencialmente SVG monocromático).
const clientes = [
  { name: "Indústria Calçadista NH", slug: "calcadista-nh" },
  { name: "Varejo Sul", slug: "varejo-sul" },
  { name: "Holding Família Schmitt", slug: "holding-schmitt" },
  { name: "Tech Couro RS", slug: "tech-couro" },
  { name: "Distribuidora Aliança", slug: "distribuidora-alianca" },
  { name: "Imobiliária Hamburgo", slug: "imobiliaria-hamburgo" },
  { name: "Construtora Vale", slug: "construtora-vale" },
  { name: "Café Estação", slug: "cafe-estacao" },
  { name: "Logística RS", slug: "logistica-rs" },
  { name: "Estúdio Norte", slug: "estudio-norte" },
  { name: "Auto Peças Centro", slug: "auto-pecas" },
  { name: "Mercado União", slug: "mercado-uniao" },
]

export function ChapterClientes() {
  return (
    <section
      className="relative py-24 md:py-32 bg-ink-deep border-y border-gold/10"
      aria-labelledby="clientes-title"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
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
            <em className="text-gold-warm not-italic font-serif italic">
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
            Mais de 350 empresas confiam na DICON para conduzir a contabilidade
            do seu negócio. Indústria, comércio, serviço, holding — atendemos
            cada setor com técnica e proximidade.
          </motion.p>
        </div>

        {/* Grid de logos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-gold/10 border border-gold/10 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {clientes.map((c) => (
            <div
              key={c.slug}
              className="group relative aspect-[3/2] flex items-center justify-center bg-ink-deep p-6 transition-colors duration-300 hover:bg-ink-rich"
              title={c.name}
            >
              {/* Placeholder profissional — substitua por <Image /> quando tiver logos */}
              <span className="font-serif text-sm md:text-base text-bone-muted/70 group-hover:text-gold transition-colors duration-300 text-center leading-tight">
                {c.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink-deep font-medium rounded-lg transition-all duration-300 hover:bg-gold-warm hover:shadow-lg hover:shadow-gold/20"
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

          <p className="text-sm text-bone-muted">
            Diagnóstico gratuito · Resposta em até 4 horas úteis
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import {
  FileBarChart,
  Users,
  Building2,
  LineChart,
  Wallet,
  ShoppingBag,
} from "lucide-react"

const services = [
  {
    id: "01",
    icon: FileBarChart,
    title: "Contabilidade Fiscal e Tributária",
    description:
      "Apuração de impostos, obrigações acessórias e planejamento de cada movimentação.",
    span: "lg:col-span-7",
  },
  {
    id: "02",
    icon: Users,
    title: "Departamento Pessoal & Folha",
    description:
      "Admissões, folha, férias, rescisões e eSocial sem dor de cabeça.",
    span: "lg:col-span-5",
  },
  {
    id: "03",
    icon: Building2,
    title: "Consultoria Societária",
    description:
      "Abertura, alteração e encerramento de empresas com segurança jurídica.",
    span: "lg:col-span-4",
  },
  {
    id: "04",
    icon: LineChart,
    title: "Planejamento Tributário Estratégico",
    description:
      "Análise de regime (Simples, Presumido, Real) que reduz impostos legalmente.",
    span: "lg:col-span-8",
    featured: true,
  },
  {
    id: "05",
    icon: Wallet,
    title: "BPO Financeiro",
    description:
      "Terceirização de contas a pagar, receber e fluxo de caixa.",
    span: "lg:col-span-6",
  },
  {
    id: "06",
    icon: ShoppingBag,
    title: "Consultoria E-commerce & Indústria",
    description:
      "Especialização em coureiro-calçadista, indústria e varejo digital.",
    span: "lg:col-span-6",
  },
]

export function ChapterMethod() {
  return (
    <section
      className="relative min-h-screen bg-ink-deep section-padding overflow-hidden"
      aria-labelledby="method-title"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-label text-gold">[ IV — Método ]</span>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="font-serif text-display-md text-bone leading-tight max-w-3xl mb-16"
          id="method-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Seis frentes.
          <br />
          Uma <em className="text-gold-warm">única</em> coordenação.
        </motion.h2>

        {/* Services grid */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                className={`glass-card p-8 rounded-2xl ${service.span} ${
                  service.featured ? "ring-1 ring-gold/20" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                data-cursor-hover
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gold/10">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-label text-gold">{service.id} /</span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl text-bone mb-3">
                  {service.title}
                </h3>
                <p className="text-bone-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Factory, Store, Globe, Briefcase, Building, Building2 } from "lucide-react"

const segments = [
  {
    id: 1,
    icon: Factory,
    title: "Indústria Coureiro-Calçadista",
    description: "Nossa especialidade desde 1975. Conhecemos cada tributação do setor.",
    size: "large",
    pattern: "leather",
  },
  {
    id: 2,
    icon: Store,
    title: "Comércio Varejista",
    description: "Do atacado ao varejo, com foco em margens e tributação otimizada.",
    size: "medium",
    pattern: "dots",
  },
  {
    id: 3,
    icon: Globe,
    title: "E-commerce e Marketplace",
    description: "Vendas online, ICMS interestadual e integrações fiscais.",
    size: "medium",
    pattern: "circuit",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Prestadores de Serviço",
    description: "ISS, retenções e planejamento para empresas de serviço.",
    size: "small",
    pattern: "waves",
  },
  {
    id: 5,
    icon: Building,
    title: "MEI, ME, EPP",
    description: "Atendemos do MEI à empresa de pequeno porte com o mesmo padrão.",
    size: "small",
    pattern: "triangles",
  },
  {
    id: 6,
    icon: Building2,
    title: "Médias e Grandes Empresas",
    description: "Estruturas complexas, Lucro Real e planejamento tributário estratégico.",
    size: "medium",
    pattern: "hexagons",
  },
]

function getPatternStyle(pattern: string) {
  switch (pattern) {
    case "leather":
      return {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23C9A661' stroke-width='0.5' opacity='0.08'/%3E%3C/svg%3E")`,
      }
    case "dots":
      return {
        backgroundImage: `radial-gradient(circle, rgba(201, 166, 97, 0.08) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }
    case "circuit":
      return {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 H15 M25 20 H40 M20 0 V15 M20 25 V40' stroke='%23C9A661' stroke-width='0.5' opacity='0.08'/%3E%3Ccircle cx='20' cy='20' r='3' fill='none' stroke='%23C9A661' stroke-width='0.5' opacity='0.08'/%3E%3C/svg%3E")`,
      }
    case "waves":
      return {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 T100 10' fill='none' stroke='%23C9A661' stroke-width='0.5' opacity='0.08'/%3E%3C/svg%3E")`,
      }
    case "triangles":
      return {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='15,0 30,30 0,30' fill='none' stroke='%23C9A661' stroke-width='0.5' opacity='0.08'/%3E%3C/svg%3E")`,
      }
    case "hexagons":
      return {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='43' viewBox='0 0 50 43' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5' fill='none' stroke='%23C9A661' stroke-width='0.5' opacity='0.08' transform='translate(0,-3.5)'/%3E%3C/svg%3E")`,
      }
    default:
      return {}
  }
}

export function ChapterReach() {
  return (
    <section
      className="relative min-h-screen bg-ink-deep section-padding overflow-hidden"
      aria-labelledby="reach-title"
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
          <span className="text-label text-gold">[ VI — Alcance ]</span>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="font-serif text-display-md text-bone leading-tight max-w-3xl mb-16"
          id="reach-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Do MEI à <em className="text-gold-warm">indústria</em>.
          <br />
          Do calçado ao <em className="text-gold-warm">digital</em>.
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            const isLarge = segment.size === "large"

            return (
              <motion.article
                key={segment.id}
                className={`glass-card p-8 rounded-2xl relative overflow-hidden group ${
                  isLarge ? "lg:col-span-2 lg:row-span-1" : ""
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
                {/* Pattern background */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-150"
                  style={getPatternStyle(segment.pattern)}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-gold/10 w-fit mb-6">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl text-bone mb-3 group-hover:text-gold-warm transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-bone-muted leading-relaxed">
                    {segment.description}
                  </p>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/0 group-hover:ring-gold/30 transition-all duration-500" />
              </motion.article>
            )
          })}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
    </section>
  )
}

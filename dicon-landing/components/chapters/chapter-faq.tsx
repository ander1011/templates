"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X } from "lucide-react"

const faqs = [
  {
    id: "01",
    question: "Vocês atendem MEI?",
    answer:
      "Sim. Atendemos do MEI a grandes empresas, com o mesmo padrão técnico. Nosso foco é oferecer a melhor solução tributária independente do porte.",
  },
  {
    id: "02",
    question: "Como funciona a migração da minha contabilidade atual?",
    answer:
      "Cuidamos de todo o processo em até 30 dias, sem ônus pra você. Solicitamos documentação ao escritório anterior, integramos ao CloudConta e ativamos o atendimento. Você não precisa se preocupar com nada.",
  },
  {
    id: "03",
    question: "O que é a CloudConta?",
    answer:
      "Plataforma proprietária da DICON que centraliza WhatsApp, documentos fiscais, dashboards em tempo real e automações. É o seu portal de gestão contábil 24/7.",
  },
  {
    id: "04",
    question: "Quanto custa contratar a DICON?",
    answer:
      "Honorários variam conforme regime tributário, faturamento e complexidade. Solicite um diagnóstico gratuito — em 24h enviamos proposta personalizada sem compromisso.",
  },
  {
    id: "05",
    question: "Atendem fora de Novo Hamburgo?",
    answer:
      "Sim. Atendemos clientes em todo o RS e Brasil 100% remoto via CloudConta. A tecnologia permite atendimento de excelência independente da localização.",
  },
  {
    id: "06",
    question: "Como é o atendimento no dia a dia?",
    answer:
      "Você fala direto com o contador responsável pelo seu CNPJ — via WhatsApp, telefone ou portal. Sem URA, sem fila, sem ticket. Atendimento humano e personalizado.",
  },
]

interface FAQItemProps {
  id: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ id, question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      className="border-b border-glass-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
        data-cursor-hover
      >
        <div className="flex items-center gap-6">
          <span className="text-label text-gold">{id}.</span>
          <h3 className="font-serif text-xl lg:text-2xl text-bone group-hover:text-gold-warm transition-colors">
            {question}
          </h3>
        </div>
        <div
          className={`p-2 rounded-full border border-glass-border transition-all duration-300 ${
            isOpen ? "bg-gold border-gold rotate-0" : "group-hover:border-gold/40"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className={`w-4 h-4 ${isOpen ? "text-ink-deep" : "text-bone"}`} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-4 h-4 text-bone" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 pl-12 lg:pl-16 pr-12 text-bone-muted text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function ChapterFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="relative min-h-screen bg-ink-rich section-padding overflow-hidden"
      aria-labelledby="faq-title"
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
          <span className="text-label text-gold">[ IX — Dúvidas ]</span>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="font-serif text-display-md text-bone leading-tight mb-16"
          id="faq-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Antes de você <em className="text-gold-warm">perguntar</em>.
        </motion.h2>

        {/* FAQ list */}
        <div className="max-w-4xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}

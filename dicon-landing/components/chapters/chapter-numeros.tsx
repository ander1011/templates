"use client"

import { motion } from "framer-motion"

const numeros = [
  { valor: "50", sufixo: "anos", label: "de mercado contábil" },
  { valor: "350", sufixo: "+", label: "empresas ativas" },
  { valor: "15", sufixo: "k+", label: "obrigações entregues/ano" },
  { valor: "98", sufixo: "%", label: "retenção de clientes" },
  { valor: "4h", sufixo: "", label: "tempo médio de resposta" },
  { valor: "0", sufixo: "", label: "multas por erro contábil" },
]

export function ChapterNumeros() {
  return (
    <section
      className="relative py-20 md:py-28 bg-ink-rich border-y border-gold/10 overflow-hidden"
      aria-labelledby="numeros-title"
    >
      {/* Padrão decorativo dourado de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,166,97,0.6) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header curto */}
        <motion.div
          className="mb-12 md:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-label text-gold block mb-4">
            [ Os números falam por si ]
          </span>
          <h2
            id="numeros-title"
            className="font-serif text-3xl md:text-5xl font-light tracking-tight text-bone leading-tight"
          >
            Cinco décadas{" "}
            <em className="text-gold-warm font-serif italic">
              construindo confiança.
            </em>
          </h2>
        </motion.div>

        {/* Grid de números */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gold/10 border border-gold/10 rounded-2xl overflow-hidden">
          {numeros.map((n, idx) => (
            <motion.div
              key={n.label}
              className="bg-ink-rich p-8 md:p-10 flex flex-col items-start justify-between min-h-[180px] md:min-h-[220px] transition-colors duration-300 hover:bg-ink-mid"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <span className="text-xs text-gold/60 font-mono">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="mt-auto">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl md:text-7xl font-light text-bone leading-none tracking-tight">
                    {n.valor}
                  </span>
                  {n.sufixo && (
                    <span className="font-serif text-3xl md:text-5xl text-gold font-light leading-none">
                      {n.sufixo}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm md:text-base text-bone-muted leading-snug max-w-[14rem]">
                  {n.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

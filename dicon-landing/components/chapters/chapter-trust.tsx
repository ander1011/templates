"use client"

import { motion } from "framer-motion"
import { ExternalLink, Quote } from "lucide-react"

// Clientes reais verificáveis publicamente (sites/Instagram ativos)
// Apenas informações públicas — descrição do negócio do cliente, sem palavras atribuídas
const clientesDestaque = [
  {
    nome: "Morbene Distribuidora",
    setor: "Distribuição e Logística",
    descricao: "40 anos distribuindo produtos para grandes marcas em mais de 100 cidades do Rio Grande do Sul.",
    site: "https://www.morbene.com.br",
    iniciais: "MB",
    cor: "from-blue-500/20 to-blue-700/30",
  },
  {
    nome: "Darca Materiais Elétricos",
    setor: "Comércio Varejista",
    descricao: "Comércio varejista de materiais elétricos em Hamburgo Velho. Mais de 20 anos servindo Novo Hamburgo.",
    site: "https://www.instagram.com/darca_eletricos/",
    iniciais: "DC",
    cor: "from-amber-500/20 to-amber-700/30",
  },
  {
    nome: "Elétrica Moro",
    setor: "Assistência Técnica & E-commerce",
    descricao: "Assistência técnica especializada e loja virtual com entrega em todo o Brasil.",
    site: "https://www.eletricamoro.com.br",
    iniciais: "EM",
    cor: "from-emerald-500/20 to-emerald-700/30",
  },
  {
    nome: "Lista Negra Boutique",
    setor: "Moda e Varejo",
    descricao: "33 anos vestindo Novo Hamburgo. Moda masculina e feminina com marcas como Colcci, Ellus e Individual.",
    site: "https://www.instagram.com/listanegramasculino/",
    iniciais: "LN",
    cor: "from-rose-500/20 to-rose-700/30",
  },
  {
    nome: "Dom Diego",
    setor: "Comércio e Serviços",
    descricao: "Empresa tradicional com gestão profissional no portfólio DICON.",
    site: "http://www.domdiego.com.br",
    iniciais: "DD",
    cor: "from-violet-500/20 to-violet-700/30",
  },
]

export function ChapterTrust() {
  return (
    <section
      className="relative bg-ink-deep section-padding overflow-hidden border-y border-gold/10"
      aria-labelledby="trust-title"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="text-label text-gold block mb-6">
            [ Capítulo VIII — Confiança ]
          </span>
          <h2
            id="trust-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-bone leading-[1.05]"
          >
            Empresas que confiam{" "}
            <em className="text-gold-warm font-serif italic">na DICON.</em>
          </h2>
          <p className="mt-6 text-lg text-bone-muted max-w-2xl leading-relaxed">
            Cinco décadas atendendo negócios que constroem o Rio Grande do Sul.
            Cada nome aqui é uma empresa real que cresce com a gente.
          </p>
        </motion.div>

        {/* Grid de clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10 rounded-2xl overflow-hidden">
          {clientesDestaque.map((c, idx) => (
            <motion.a
              key={c.nome}
              href={c.site}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-ink-deep p-8 md:p-10 flex flex-col gap-6 transition-all duration-300 hover:bg-ink-rich min-h-[280px]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 text-gold/30 group-hover:text-gold/60 transition-colors"
                strokeWidth={1.5}
              />

              {/* Descrição */}
              <p className="font-serif text-lg md:text-xl text-bone leading-snug flex-1 italic">
                {c.descricao}
              </p>

              {/* Footer com avatar + nome */}
              <footer className="flex items-center justify-between gap-3 pt-4 border-t border-bone/10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${c.cor} border border-bone/20 flex items-center justify-center shrink-0`}
                  >
                    <span className="font-mono text-xs text-bone font-medium">
                      {c.iniciais}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="block text-bone font-medium text-sm truncate group-hover:text-gold transition-colors">
                      {c.nome}
                    </span>
                    <span className="block text-bone-muted text-xs truncate">
                      {c.setor}
                    </span>
                  </div>
                </div>

                <ExternalLink
                  className="w-4 h-4 text-bone-muted/40 group-hover:text-gold transition-colors shrink-0"
                  strokeWidth={1.5}
                />
              </footer>
            </motion.a>
          ))}

          {/* Card final — "seja o próximo" */}
          <motion.div
            className="group relative bg-gradient-to-br from-gold/10 to-gold/5 p-8 md:p-10 flex flex-col justify-center items-start gap-4 min-h-[280px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="font-mono text-xs text-gold uppercase tracking-widest">
              VAGA ABERTA
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-bone leading-tight">
              Seja a próxima empresa{" "}
              <em className="text-gold-warm italic">deste mural.</em>
            </h3>
            <a
              href="#contato"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-ink-deep text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gold-warm hover:shadow-lg hover:shadow-gold/20"
            >
              Falar com a DICON →
            </a>
          </motion.div>
        </div>

        {/* Nota de rodapé com link Google */}
        <motion.p
          className="mt-10 text-sm text-bone-muted text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Quer ver depoimentos de clientes?{" "}
          <a
            href="https://maps.app.goo.gl/VFgfMnBrAiP84ScQA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            Veja nossas avaliações no Google →
          </a>
        </motion.p>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

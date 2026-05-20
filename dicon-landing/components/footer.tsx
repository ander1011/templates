"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  empresa: [
    { label: "Sobre", href: "#origem" },
    { label: "História", href: "#timeline" },
    { label: "Depoimentos", href: "#confianca" },
  ],
  servicos: [
    { label: "Fiscal e Tributário", href: "#metodo" },
    { label: "Departamento Pessoal", href: "#metodo" },
    { label: "Consultoria Societária", href: "#metodo" },
    { label: "Planejamento Tributário", href: "#metodo" },
    { label: "BPO Financeiro", href: "#metodo" },
  ],
  plataforma: [
    { label: "CloudConta", href: "#tecnologia" },
    { label: "WhatsApp Integrado", href: "#tecnologia" },
    { label: "Dashboards", href: "#tecnologia" },
  ],
  contato: [
    { label: "(51) 9977-3266", href: "https://wa.me/555199773266", external: true },
    { label: "(51) 3594-3787", href: "tel:+555135943787" },
    { label: "dicon@dicon.cnt.br", href: "mailto:dicon@dicon.cnt.br" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-ink-deep border-t border-glass-border" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Top section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Logo and manifesto */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl text-bone mb-6">DICON</h2>
              <p className="font-serif text-lg text-bone-muted italic leading-relaxed max-w-sm">
                &ldquo;Cinquenta anos traduzindo a complexidade tributária brasileira em decisões
                que geram lucro.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Empresa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-label text-gold mb-4">Empresa</h3>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-bone-muted hover:text-bone transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Serviços */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-label text-gold mb-4">Serviços</h3>
                <ul className="space-y-3">
                  {footerLinks.servicos.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-bone-muted hover:text-bone transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Plataforma */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-label text-gold mb-4">Plataforma</h3>
                <ul className="space-y-3">
                  {footerLinks.plataforma.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-bone-muted hover:text-bone transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contato */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-label text-gold mb-4">Contato</h3>
                <ul className="space-y-3">
                  {footerLinks.contato.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-bone-muted hover:text-bone transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-bone-muted">
              © 2026 DICON Contabilidade · Novo Hamburgo · CRC/RS [número]
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
              <Link
                href="/privacidade"
                className="text-xs text-bone-muted hover:text-bone transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-bone-muted/50">·</span>
              <Link
                href="/lgpd"
                className="text-xs text-bone-muted hover:text-bone transition-colors"
              >
                LGPD
              </Link>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://instagram.com/diconcontabilidade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-glass-border hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
              aria-label="Instagram da DICON"
              data-cursor-hover
            >
              <Instagram className="w-5 h-5 text-bone" />
            </Link>
            <Link
              href="https://linkedin.com/company/dicon-contabilidade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-glass-border hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
              aria-label="LinkedIn da DICON"
              data-cursor-hover
            >
              <Linkedin className="w-5 h-5 text-bone" />
            </Link>
          </motion.div>

          {/* Site credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-label text-bone-muted/50 text-[10px]">
              ↳ Site cuidado em Novo Hamburgo, 2026.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido"),
  cnpj: z.string().optional(),
  revenue: z.string().min(1, "Selecione o faturamento"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function ChapterCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section
      id="contato"
      className="relative min-h-screen bg-ink-deep section-padding overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/images/hero-globe.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep via-ink-deep/95 to-ink-deep" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-label text-gold">[ X — Convite ]</span>
        </motion.div>

        {/* Header */}
        <motion.h2
          className="font-serif text-display-md text-bone text-center leading-tight max-w-4xl mx-auto mb-20"
          id="cta-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Vamos conversar
          <br />
          sobre o <em className="text-gold-warm">futuro</em>
          <br />
          da sua empresa?
        </motion.h2>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            className="glass-card p-8 lg:p-10 rounded-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-2xl text-bone mb-8">
              Solicite seu diagnóstico gratuito
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-serif text-xl text-bone mb-2">
                  Mensagem enviada!
                </h4>
                <p className="text-bone-muted">
                  Entraremos em contato em até 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm text-bone-muted mb-2">
                    Nome *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-ink-mid border border-glass-border rounded-lg text-bone placeholder:text-bone-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email and WhatsApp */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm text-bone-muted mb-2">
                      E-mail *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-ink-mid border border-glass-border rounded-lg text-bone placeholder:text-bone-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm text-bone-muted mb-2">
                      WhatsApp *
                    </label>
                    <input
                      {...register("whatsapp")}
                      type="tel"
                      id="whatsapp"
                      className="w-full px-4 py-3 bg-ink-mid border border-glass-border rounded-lg text-bone placeholder:text-bone-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(51) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-400">{errors.whatsapp.message}</p>
                    )}
                  </div>
                </div>

                {/* CNPJ */}
                <div>
                  <label htmlFor="cnpj" className="block text-sm text-bone-muted mb-2">
                    CNPJ (opcional)
                  </label>
                  <input
                    {...register("cnpj")}
                    type="text"
                    id="cnpj"
                    className="w-full px-4 py-3 bg-ink-mid border border-glass-border rounded-lg text-bone placeholder:text-bone-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                {/* Revenue */}
                <div>
                  <label htmlFor="revenue" className="block text-sm text-bone-muted mb-2">
                    Faturamento mensal *
                  </label>
                  <select
                    {...register("revenue")}
                    id="revenue"
                    className="w-full px-4 py-3 bg-ink-mid border border-glass-border rounded-lg text-bone focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="ate-30k">Até R$ 30.000</option>
                    <option value="30k-100k">R$ 30.000 - R$ 100.000</option>
                    <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                    <option value="500k-mais">Acima de R$ 500.000</option>
                  </select>
                  {errors.revenue && (
                    <p className="mt-1 text-sm text-red-400">{errors.revenue.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-bone-muted mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-ink-mid border border-glass-border rounded-lg text-bone placeholder:text-bone-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Conte um pouco sobre sua empresa..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-electric text-bone font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-electric-soft hover:shadow-glow-electric disabled:opacity-50 disabled:cursor-not-allowed"
                  data-cursor-hover
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar diagnóstico gratuito
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="glass-card p-8 lg:p-10 rounded-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-2xl text-bone mb-8">Contato direto</h3>

            <div className="space-y-6">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/5551990990909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-ink-mid/50 hover:bg-ink-mid transition-colors group"
                data-cursor-hover
              >
                <div className="p-3 rounded-xl bg-green-500/20">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <span className="block text-sm text-bone-muted">WhatsApp</span>
                  <span className="block text-bone group-hover:text-gold-warm transition-colors">
                    (51) 99099-0909
                  </span>
                </div>
              </Link>

              {/* Phone */}
              <Link
                href="tel:+555135943787"
                className="flex items-center gap-4 p-4 rounded-xl bg-ink-mid/50 hover:bg-ink-mid transition-colors group"
                data-cursor-hover
              >
                <div className="p-3 rounded-xl bg-gold/10">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="block text-sm text-bone-muted">Telefone</span>
                  <span className="block text-bone group-hover:text-gold-warm transition-colors">
                    (51) 3594-3787
                  </span>
                </div>
              </Link>

              {/* Email */}
              <Link
                href="mailto:contato@diconcontabil.com.br"
                className="flex items-center gap-4 p-4 rounded-xl bg-ink-mid/50 hover:bg-ink-mid transition-colors group"
                data-cursor-hover
              >
                <div className="p-3 rounded-xl bg-electric/10">
                  <Mail className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <span className="block text-sm text-bone-muted">E-mail</span>
                  <span className="block text-bone group-hover:text-gold-warm transition-colors">
                    contato@diconcontabil.com.br
                  </span>
                </div>
              </Link>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-ink-mid/50">
                <div className="p-3 rounded-xl bg-gold/10">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="block text-sm text-bone-muted">Endereço</span>
                  <span className="block text-bone">Novo Hamburgo, RS</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-ink-mid/50">
                <div className="p-3 rounded-xl bg-gold/10">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <span className="block text-sm text-bone-muted">Horário</span>
                  <span className="block text-bone">Segunda a sexta, 8h às 18h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

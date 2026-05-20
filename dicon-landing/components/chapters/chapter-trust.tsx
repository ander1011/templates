"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

interface Review {
  author: string
  rating: number
  text: string
  relativeTime: string
  profilePhoto?: string
  authorUrl?: string
}

interface ReviewsData {
  rating: number
  totalReviews: number
  reviews: Review[]
  updatedAt: string
}

export function ChapterTrust() {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d: ReviewsData) => {
        if (d.reviews && d.reviews.length > 0) {
          setData(d)
        } else {
          setError("sem reviews")
        }
      })
      .catch(() => setError("erro"))
      .finally(() => setLoading(false))
  }, [])

  const reviews = data?.reviews ?? []

  const next = () => {
    setDirection(1)
    setCurrent((p) => (p + 1) % reviews.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (reviews.length < 2) return
    intervalRef.current = setInterval(next, 10000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [reviews.length])

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (reviews.length >= 2) intervalRef.current = setInterval(next, 10000)
  }

  // Se a API ainda não tá configurada / falhou / sem reviews, esconde a seção
  if (!loading && (error || reviews.length === 0)) {
    return null
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 100 : -100, opacity: 0 }),
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
          className="mb-10 flex items-baseline justify-between flex-wrap gap-4"
        >
          <span className="text-label text-gold">[ Capítulo VIII — Confiança ]</span>

          {data && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1" aria-label={`${data.rating} de 5 estrelas`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= Math.round(data.rating) ? "fill-gold text-gold" : "text-bone/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-bone-muted">
                {data.rating.toFixed(1)} · {data.totalReviews} avaliações no Google
              </span>
            </div>
          )}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Loading skeleton */}
          {loading && (
            <div className="space-y-6 animate-pulse">
              <div className="h-16 w-16 bg-bone/5 rounded-full" />
              <div className="h-8 bg-bone/5 rounded w-full max-w-2xl" />
              <div className="h-8 bg-bone/5 rounded w-full max-w-xl" />
              <div className="h-8 bg-bone/5 rounded w-full max-w-md" />
            </div>
          )}

          {/* Reviews */}
          {!loading && reviews.length > 0 && (
            <>
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <Quote className="w-14 h-14 text-gold/30" strokeWidth={1} />
              </motion.div>

              <div className="relative min-h-[280px]" id="trust-title">
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
                    {/* Stars do review */}
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i <= reviews[current].rating ? "fill-gold text-gold" : "text-bone/20"
                          }`}
                        />
                      ))}
                    </div>

                    <blockquote className="mb-10">
                      <p className="font-serif text-display-sm text-bone italic leading-snug">
                        &ldquo;{reviews[current].text}&rdquo;
                      </p>
                    </blockquote>

                    <footer className="flex items-center gap-5">
                      {reviews[current].profilePhoto ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={reviews[current].profilePhoto}
                          alt={reviews[current].author}
                          className="w-14 h-14 rounded-full border-2 border-gold/20 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-warm flex items-center justify-center shrink-0">
                          <span className="font-mono text-sm text-ink-deep font-medium">
                            {reviews[current].author
                              .split(" ")
                              .map((n) => n[0])
                              .filter(Boolean)
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div>
                        <cite className="not-italic">
                          <span className="block text-bone font-medium text-base">
                            {reviews[current].author}
                          </span>
                          <span className="block text-bone-muted text-sm">
                            {reviews[current].relativeTime} · Google
                          </span>
                        </cite>
                      </div>
                    </footer>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              {reviews.length > 1 && (
                <div className="flex items-center justify-between mt-14">
                  <div className="flex items-center gap-3">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > current ? 1 : -1)
                          setCurrent(index)
                          resetInterval()
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === current ? "bg-gold w-8" : "bg-bone/20 w-2 hover:bg-bone/40"
                        }`}
                        aria-label={`Ver depoimento ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        prev()
                        resetInterval()
                      }}
                      className="p-3 rounded-full border border-bone/15 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                      aria-label="Depoimento anterior"
                    >
                      <ChevronLeft className="w-5 h-5 text-bone" />
                    </button>
                    <button
                      onClick={() => {
                        next()
                        resetInterval()
                      }}
                      className="p-3 rounded-full border border-bone/15 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                      aria-label="Próximo depoimento"
                    >
                      <ChevronRight className="w-5 h-5 text-bone" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

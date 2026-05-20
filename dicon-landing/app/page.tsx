"use client"

import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"
import { CustomCursor } from "@/components/custom-cursor"
import { ChapterHero } from "@/components/chapters/chapter-hero"
import { ChapterProof } from "@/components/chapters/chapter-proof"
import { ChapterOrigin } from "@/components/chapters/chapter-origin"
import { ChapterMarquee } from "@/components/chapters/chapter-marquee"
import { ChapterMethod } from "@/components/chapters/chapter-method"
import { ChapterReach } from "@/components/chapters/chapter-reach"
import { ChapterTimeline } from "@/components/chapters/chapter-timeline"
import { ChapterTrust } from "@/components/chapters/chapter-trust"
import { ChapterFAQ } from "@/components/chapters/chapter-faq"
import { ChapterCTA } from "@/components/chapters/chapter-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    
    if (prefersReducedMotion) {
      setIsLoading(false)
      setShowContent(true)
    }
  }, [])

  const handleLoaderComplete = () => {
    setIsLoading(false)
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 100)
  }

  return (
    <>
      {/* Loader */}
      <Loader onComplete={handleLoaderComplete} />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Main content */}
      <main
        id="main-content"
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Chapter I - Hero */}
        <ChapterHero />

        {/* Chapter II - Prova (Stats) */}
        <ChapterProof />

        {/* Chapter III - Origem */}
        <ChapterOrigin />

        {/* Chapter IV - Marquee */}
        <ChapterMarquee />

        {/* Chapter V - Método (Serviços) */}
        <ChapterMethod />



        {/* Chapter VII - Alcance */}
        <ChapterReach />

        {/* Chapter VIII - Linha do Tempo */}
        <ChapterTimeline />

        {/* Chapter IX - Confiança (Depoimentos) */}
        <ChapterTrust />

        {/* Chapter X - Dúvidas (FAQ) */}
        <ChapterFAQ />

        {/* Chapter XI - Convite (CTA) */}
        <ChapterCTA />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

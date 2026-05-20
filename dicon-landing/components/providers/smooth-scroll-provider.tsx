"use client"

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollContextType {
  lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export function useSmoothScroll() {
  return useContext(SmoothScrollContext)
}

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Check for reduced motion or low-power devices
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isLowEnd =
      navigator.hardwareConcurrency <= 4 ||
      (navigator as any).deviceMemory <= 4 ||
      window.matchMedia("(max-width: 768px)").matches // desativa smooth scroll no mobile

    if (prefersReducedMotion || isLowEnd) {
      return // scroll nativo (60fps garantido)
    }

    // Initialize Lenis — calibrado para fluidez (duration menor = menos lag)
    const lenisInstance = new Lenis({
      duration: 0.8, // antes 1.2 — sensação mais responsiva
      easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out-cubic (mais natural)
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1, // pouco mais rápido
      touchMultiplier: 1.5, // mobile mais natural
      syncTouch: false,
    })

    lenisRef.current = lenisInstance
    setLenis(lenisInstance)

    // Connect Lenis to ScrollTrigger
    lenisInstance.on("scroll", ScrollTrigger.update)

    // Add Lenis's requestAnimationFrame to GSAP's ticker
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000)
    })

    // Disable GSAP's default lag smoothing
    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenisInstance.destroy()
      gsap.ticker.remove((time) => {
        lenisInstance.raf(time * 1000)
      })
    }
  }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

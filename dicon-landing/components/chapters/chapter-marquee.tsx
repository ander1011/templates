"use client"

import { motion } from "framer-motion"

const competencies = [
  "Fiscal",
  "Folha",
  "Societário",
  "Tributário",
  "Planejamento",
  "BPO",
  "E-commerce",
  "Indústria",
]

export function ChapterMarquee() {
  // Duplicate the array for seamless loop
  const items = [...competencies, ...competencies]

  return (
    <section
      className="relative py-16 bg-ink-mid overflow-hidden"
      aria-label="Áreas de atuação"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Marquee container */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-mid to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-mid to-transparent z-10" />

        {/* Animated marquee */}
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="font-serif text-[clamp(3rem,8vw,6rem)] font-light tracking-[-0.04em] text-bone hover:text-gold-warm transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="text-gold text-3xl" aria-hidden="true">
                ◆
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}

import { ChapterHero } from "@/components/chapters/chapter-hero"
import { ChapterProof } from "@/components/chapters/chapter-proof"
import { ChapterOrigin } from "@/components/chapters/chapter-origin"
import { ChapterMarquee } from "@/components/chapters/chapter-marquee"
import { ChapterMethod } from "@/components/chapters/chapter-method"
import { ChapterReach } from "@/components/chapters/chapter-reach"
import { ChapterTimeline } from "@/components/chapters/chapter-timeline"
import { ChapterTrust } from "@/components/chapters/chapter-trust"
import { ChapterClientes } from "@/components/chapters/chapter-clientes"
import { ChapterFAQ } from "@/components/chapters/chapter-faq"
import { ChapterCTA } from "@/components/chapters/chapter-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content">
      <ChapterHero />
      <ChapterProof />
      <ChapterOrigin />
      <ChapterMarquee />
      <ChapterMethod />
      <ChapterReach />
      <ChapterTimeline />
      <ChapterTrust />
      <ChapterClientes />
      <ChapterFAQ />
      <ChapterCTA />
      <Footer />
    </main>
  )
}

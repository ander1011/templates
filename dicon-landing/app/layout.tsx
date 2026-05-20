import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// ═══════════════════════════════════════════════════════════════════════════
// Fonts
// ═══════════════════════════════════════════════════════════════════════════

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
})

// ═══════════════════════════════════════════════════════════════════════════
// Metadata & SEO
// ═══════════════════════════════════════════════════════════════════════════

export const metadata: Metadata = {
  metadataBase: new URL("https://diconcontabil.com.br"),
  title: "DICON Contabilidade Novo Hamburgo/RS — 50 anos | Inteligência contábil para empresas",
  description:
    "Contabilidade premium em Novo Hamburgo desde 1975. Plataforma CloudConta, atendimento WhatsApp e 350+ empresas atendidas. Diagnóstico gratuito.",
  keywords: [
    "contador novo hamburgo",
    "contabilidade novo hamburgo RS",
    "contabilidade coureiro-calçadista",
    "contabilidade para indústria",
    "contabilidade e-commerce RS",
    "planejamento tributário RS",
    "DICON contabilidade",
    "CloudConta",
  ],
  authors: [{ name: "DICON Contabilidade" }],
  creator: "DICON Contabilidade",
  publisher: "DICON Contabilidade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://diconcontabil.com.br",
    siteName: "DICON Contabilidade",
    title: "DICON Contabilidade — 50 anos de inteligência contábil",
    description:
      "Contabilidade premium em Novo Hamburgo desde 1975. Plataforma CloudConta, atendimento WhatsApp e 350+ empresas atendidas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DICON Contabilidade — A inteligência contábil que faz sua empresa crescer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DICON Contabilidade — 50 anos de inteligência contábil",
    description:
      "Contabilidade premium em Novo Hamburgo desde 1975. Plataforma CloudConta e 350+ empresas atendidas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#050A14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// ═══════════════════════════════════════════════════════════════════════════
// JSON-LD Schema
// ═══════════════════════════════════════════════════════════════════════════

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://diconcontabil.com.br/#organization",
      name: "DICON Contabilidade",
      alternateName: "DICON",
      url: "https://diconcontabil.com.br",
      logo: "https://diconcontabil.com.br/logo.svg",
      image: "https://diconcontabil.com.br/og-image.jpg",
      description:
        "Contabilidade premium em Novo Hamburgo desde 1975. Especialistas em tributário, societário, fiscal e gestão estratégica.",
      foundingDate: "1975",
      email: "dicon@dicon.cnt.br",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Primeiro de Março, 910",
        addressLocality: "Novo Hamburgo",
        addressRegion: "RS",
        postalCode: "93320-102",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-51-9977-3266",
        contactType: "customer service",
        availableLanguage: "Portuguese",
      },
      sameAs: [
        "https://www.instagram.com/contabilidadedicon",
        "https://www.linkedin.com/company/dicon-contabilidade",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://diconcontabil.com.br/#localbusiness",
      name: "DICON Contabilidade",
      image: "https://diconcontabil.com.br/og-image.jpg",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Av. Primeiro de Março, 910",
          addressLocality: "Novo Hamburgo",
          addressRegion: "RS",
          postalCode: "93320-102",
          addressCountry: "BR",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Rua Bartolomeu de Gusmão, 481",
          addressLocality: "Novo Hamburgo",
          addressRegion: "RS",
          postalCode: "93542-000",
          addressCountry: "BR",
        },
      ],
      telephone: "+55-51-3594-3787",
      email: "dicon@dicon.cnt.br",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      priceRange: "$$",
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// Root Layout
// ═══════════════════════════════════════════════════════════════════════════

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-ink-deep`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-ink-deep text-bone overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-ink-deep focus:rounded-lg"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

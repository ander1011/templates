import { NextResponse } from "next/server"

// Cache: revalida a cada 24 horas (86400s)
// Custo estimado: ~30 chamadas/mês = ~R$ 0,50 (dentro da cota grátis de 10k)
export const revalidate = 86400

// Place ID da DICON Escritório de Contabilidade em Novo Hamburgo
// (obtido via Place Search com a query "DICON Escritorio Contabilidade Novo Hamburgo")
const DICON_PLACE_ID = "ChIJs8esQq1DGZUR4D_9z_R9zic"

export interface Review {
  author: string
  rating: number
  text: string
  relativeTime: string
  profilePhoto?: string
  authorUrl?: string
}

export interface ReviewsResponse {
  rating: number
  totalReviews: number
  reviews: Review[]
  updatedAt: string
}

async function fetchPlaceDetails(placeId: string, apiKey: string) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json")
  url.searchParams.set("place_id", placeId)
  url.searchParams.set("fields", "rating,user_ratings_total,reviews")
  url.searchParams.set("language", "pt-BR")
  url.searchParams.set("reviews_sort", "newest")
  url.searchParams.set("key", apiKey)

  const res = await fetch(url.toString(), {
    next: { revalidate: 86400 },
  })

  if (!res.ok) {
    throw new Error(`Google API error: ${res.status}`)
  }

  return res.json()
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "GOOGLE_PLACES_API_KEY não configurada" },
      { status: 500 }
    )
  }

  try {
    const data = await fetchPlaceDetails(DICON_PLACE_ID, apiKey)

    if (data.status !== "OK") {
      return NextResponse.json(
        {
          error: data.status,
          message: data.error_message ?? "Erro desconhecido",
        },
        { status: 502 }
      )
    }

    const result = data.result ?? {}
    const reviews: Review[] = (result.reviews ?? [])
      .filter((r: { text?: string; rating?: number }) => r.text && r.text.length > 30 && r.rating && r.rating >= 4)
      .slice(0, 6)
      .map(
        (r: {
          author_name: string
          rating: number
          text: string
          relative_time_description: string
          profile_photo_url?: string
          author_url?: string
        }) => ({
          author: r.author_name,
          rating: r.rating,
          text: r.text,
          relativeTime: r.relative_time_description,
          profilePhoto: r.profile_photo_url,
          authorUrl: r.author_url,
        })
      )

    const payload: ReviewsResponse = {
      rating: result.rating ?? 0,
      totalReviews: result.user_ratings_total ?? 0,
      reviews,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    })
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    )
  }
}

import { NextResponse } from "next/server";
import { fetchPlaceId, fetchPlaceDetails } from "@/lib/googleReviews";

export const revalidate = 86400;

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GOOGLE_PLACES_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const envPlaceId = process.env.GOOGLE_PLACE_ID;
    let placeId: string | null = envPlaceId ?? null;
    if (!placeId) {
      placeId = await fetchPlaceId(
        "Al Zahra Beauty Center Sharjah",
        apiKey
      );
      if (!placeId) {
        return NextResponse.json(
          { error: "Place not found" },
          { status: 404 }
        );
      }
    }

    const details = await fetchPlaceDetails(placeId, apiKey);
    if (!details) {
      return NextResponse.json(
        { error: "Failed to fetch place details" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      rating: details.rating,
      totalRatings: details.user_ratings_total,
      reviews: details.reviews.slice(0, 10),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

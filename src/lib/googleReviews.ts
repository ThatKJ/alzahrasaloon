export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

export interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export async function fetchPlaceId(
  query: string,
  apiKey: string
): Promise<string | null> {
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=place_id&key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.candidates?.[0]?.place_id ?? null;
}

export async function fetchPlaceDetails(
  placeId: string,
  apiKey: string
): Promise<PlaceDetails | null> {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!data.result) return null;
  return {
    rating: data.result.rating ?? 0,
    user_ratings_total: data.result.user_ratings_total ?? 0,
    reviews: (data.result.reviews ?? []).map((r: GoogleReview) => ({
      author_name: r.author_name,
      rating: r.rating,
      text: r.text,
      relative_time_description: r.relative_time_description,
    })),
  };
}

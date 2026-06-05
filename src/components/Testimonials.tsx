"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface ReviewData {
  author_name: string;
  rating: number;
  text: string;
}

interface ApiResponse {
  rating?: number;
  totalRatings?: number;
  reviews?: ReviewData[];
}

const staticReviews = [
  {
    name: "Manna",
    tag: "Google Review",
    text: "I had a great experience at the salon. Staff is very professional and kind. They understand exactly what the customer needs.",
    rating: 5,
  },
  {
    name: "Debaki Prasain",
    tag: "Google Review",
    text: "The salon is clean, welcoming, and beautifully maintained. Staff are incredibly professional and friendly.",
    rating: 5,
  },
  {
    name: "Nikita Tolia",
    tag: "Google Review",
    text: "Protein hair treatment results were amazing. Hair feels soft, shiny, and healthy.",
    rating: 5,
  },
  {
    name: "Sheeba K Johnson",
    tag: "Google Review",
    text: "Facial and manicure service was very relaxing. Staff were gentle and professional.",
    rating: 5,
  },
  {
    name: "Sultan Jan",
    tag: "Google Review",
    text: "Hair cut and color service was excellent. Very satisfied with results.",
    rating: 5,
  },
  {
    name: "Ishani Rao",
    tag: "Google Review",
    text: "Friendly staff, great atmosphere, and very good service overall.",
    rating: 5,
  },
  {
    name: "Christy Jiju",
    tag: "Google Review",
    text: "Best salon experience, highly recommended for waxing and beauty services.",
    rating: 5,
  },
  {
    name: "Dhanya Madhavan",
    tag: "Google Review",
    text: "Very clean salon and professional team, I always feel comfortable here.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [perView, setPerView] = useState(3);
  const [reviews, setReviews] = useState(staticReviews);
  const [liveRating, setLiveRating] = useState<number | null>(null);
  const [liveCount, setLiveCount] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const check = () => setPerView(window.innerWidth < 768 ? 1 : 3);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/reviews", { signal: controller.signal })
      .then((r) => r.json())
      .then((data: ApiResponse) => {
        if (!data.reviews || data.reviews.length === 0) return;
        const mapped = data.reviews.map((r) => ({
          name: r.author_name,
          tag: "Google Review" as const,
          text: r.text,
          rating: r.rating,
        }));
        setReviews(mapped);
        if (data.rating) setLiveRating(data.rating);
        if (data.totalRatings) setLiveCount(data.totalRatings);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
    return () => controller.abort();
  }, []);

  const totalSlides = Math.max(1, Math.ceil(reviews.length / perView));

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const extended = [...reviews, ...reviews.slice(0, perView)];

  const trustBadges = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      label: liveRating ? `${liveRating}\u2605 Rated Salon` : "4.5\u2605 Rated Salon",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      label: liveCount ? `${liveCount}+ Google Reviews` : "500+ Google Reviews",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Trusted in Sharjah",
    },
  ];

  return (
    <section className="py-section-gap bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-container-margin mb-12">
        <div className="text-center mb-10">
          <span className="text-label-md font-label-md text-primary uppercase tracking-widest mb-4 block">
            Real Reviews
          </span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-surface-container-lowest px-5 py-3 rounded-full shadow-soft border border-outline-variant/20 text-sm font-label-md text-on-surface"
            >
              <span className="text-primary">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative max-w-7xl mx-auto px-container-margin select-none"
      >
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            className="flex gap-6"
            animate={{
              x:
                perView === 1
                  ? `-${current * 100}%`
                  : `-${current * (100 / 3)}%`,
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {extended.map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  perView === 1 ? "w-full" : "w-[calc(33.333%-1rem)]"
                }`}
              >
                <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-7 shadow-soft border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: review.rating ?? 5 }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-[18px] h-[18px] text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )
                      )}
                    </div>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-5 font-body-md">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                    <div>
                      <p className="font-bold text-sm text-on-surface font-label-md">
                        {review.name}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <svg
                          className="w-3.5 h-3.5 text-primary"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-label-sm">
                          {review.tag}
                        </span>
                      </div>
                    </div>
                    {loaded && (
                      <div className="flex items-center gap-1 px-2.5 py-1.5 bg-primary/5 rounded-full">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="text-[10px] text-primary font-bold tracking-wider font-label-sm">
                          VERIFIED
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-soft border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            aria-label="Previous reviews"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-outline-variant hover:bg-primary/50"
                }`}
                aria-label={`Go to review group ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-surface-container-lowest shadow-soft border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            aria-label="Next reviews"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

# Beauty Salon Website

A modern, luxury beauty salon website. Designed to reflect a premium salon brand experience with seamless WhatsApp booking, live Google Reviews, and a mobile-first responsive interface.

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language** — TypeScript
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation** — [Framer Motion](https://www.framer.com/motion/)
- **Fonts** — Playfair Display (headings), Montserrat (body)
- **Icons** — Inline SVG (Heroicons)
- **Deployment** — Ready for Cloudflare Pages, Vercel, or any Node.js host

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, About, Services (3), Final CTA |
| `/services` | Full services list, bridal banner, special offers |
| `/gallery` | Salon gallery with lightbox |
| `/about` | About salon, why choose us |
| `/contact` | Contact info, inquiry form, Google Maps embed |
| `/faqs` | Accordion-style FAQ with category filters |
| `/careers` | Job listings + application form via WhatsApp |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |

## Features

- **WhatsApp Booking** — Every CTA button opens WhatsApp with a pre-filled booking message
- **Live Google Reviews** — Fetches real reviews via the Google Places API (with static fallback)
- **Multi-page architecture** — 5 main pages + 4 supporting pages
- **Global testimonials carousel** — Auto-advancing, pause-on-hover, prev/next controls on every page
- **SEO optimized** — LocalBusiness JSON-LD schema, geo meta tags, keyword-rich alt texts, per-page metadata
- **Luxury design system** — Consistent tokens (colors, typography, spacing) via Tailwind theme
- **Mobile responsive** — Mobile-first, hamburger nav, responsive grids
- **Floating WhatsApp button** — Always visible for instant booking

## Getting Started

### 1. Clone and install

```bash
git clone <repo-url>
cd al-zahra-beauty
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_PLACES_API_KEY` | Yes (for live reviews) | Google Places API key |
| `GOOGLE_PLACE_ID` | No | Your Place ID (skips lookup) |

Without the API key, reviews fall back to built-in static data — the site works either way.

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build

```bash
npm run build
npm start
```

## Customization

All salon identity lives in a single file:

**`src/lib/config.ts`** — All salon identity and contact details in one place. Update your brand name, phone, WhatsApp link, address, and hours from a single file.

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── api/reviews/
│   ├── careers/
│   ├── contact/
│   ├── faqs/
│   ├── gallery/
│   ├── privacy-policy/
│   ├── services/
│   ├── terms-of-service/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── BridalBanner.tsx
│   ├── Contact.tsx
│   ├── FinalCTA.tsx
│   ├── FloatingWhatsApp.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── GalleryLightbox.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── SchemaMarkup.tsx
│   ├── ScrollReveal.tsx
│   ├── Services.tsx
│   ├── SpecialOffers.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
└── lib/
    ├── config.ts
    └── googleReviews.ts
```

## Credits

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/).

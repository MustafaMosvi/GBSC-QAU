# GBSC-QAU — Gilgit-Baltistan Student Council Website
**Quaid-i-Azam University, Islamabad**  
*Next.js App Router · TypeScript · Editorial UI/UX · Cultural Identity · SEO-Ready*

---

## 1. Overview & Creative Direction

This website is the institutional platform and digital archive for the **Gilgit-Baltistan Student Council at Quaid-i-Azam University, Islamabad (GBSC-QAU)**.

Designed under the creative direction **“The Mountain Archive — Heritage in Motion”**, the site combines the visual language of an editorial publication, an academic repository, and a living student collective. It rejects generic templates and commercial marketing aesthetics in favor of:
- **Restrained Mountain Palette:** Midnight ink navy (`#0A1C2A`), warm paper ivory (`#F7F4ED`), alpine mineral teal (`#285E62`), and muted terracotta (`#A64B35`).
- **Editorial Typography:** Scholarly serif display paired with highly readable sans-serif and archival classification tags.
- **Authentic Insignia:** Features the genuine council emblem with the **Markhor** (courage & sure footing), the **Three Mountain Ranges** (Karakoram, Himalaya, Hindu Kush), and the **Fountain Pen** (scholarship & student voice).
- **Documentary Photography:** Genuine high-resolution regional landscapes, student study circles, campus book fairs, and cultural gatherings.
- **Data Integrity:** Strict adherence to factual transparency—no fabricated founding dates, invented cabinet officers, fake awards, or misleading contact endpoints.

---

## 2. Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5.8 (Strict typing)
- **Styling:** Vanilla Tailwind CSS with curated design tokens & CSS variables
- **Icons:** Lucide React
- **Media:** Next.js Image Optimization (`next/image`)
- **Metadata & SEO:** Next.js Metadata API, dynamic sitemap (`sitemap.ts`), robots rules (`robots.ts`), and JSON-LD Structured Data

---

## 3. Running Locally

### Prerequisites
- Node.js 20.x or 22.x
- npm, pnpm, or yarn

### Setup Commands
```bash
# 1. Install dependencies (required to populate peer packages and types)
npm install

# 2. Start the local development server
npm run dev

# 3. Open in your browser
# Navigate to http://localhost:3000
```

### Quality & Production Checks
```bash
# Run TypeScript compilation and strict type-checking
npm run typecheck

# Run ESLint validation
npm run lint

# Build the production bundle
npm run build

# Start the production server
npm run start
```

---

## 4. Primary & Supporting Routes

| Route | Page | Purpose & Content |
|---|---|---|
| `/` | **Home** | The complete signature editorial experience across 14 distinct sections. |
| `/about` | **About & Cabinet** | Purpose, mission/values, emblem heraldry, constitutional cabinet structure, chairman message. |
| `/events` | **Events & Programs** | Master calendar, program spotlights, confirmed sessions, and archived gatherings. |
| `/events/study-circles` | **Study Circles** | Reading themes, decolonial historiography, glaciology, and discussion guidelines. |
| `/events/workshops-seminars` | **Workshops & Seminars** | Distinction between practical academic skill labs and public scholarly colloquiums. |
| `/events/cultural` | **Cultural Life** | Multilingual traditions (Balti, Shina, Burushaski, Wakhi, Khowar), music, and attire. |
| `/events/book-fairs` | **Book Fairs** | Campus literary festivals, reading access, and book exchange tables. |
| `/gallery` | **Archive Gallery** | Responsive documentary photo grid with category filters and accessible keyboard lightbox. |
| `/contact` | **Contact Council** | Validated client contact form, campus meeting points, and information integrity policy. |
| `/announcements` | **Announcements** | Verified notices board with publication dates, categories, and full texts. |
| `/help-desk` | **Student Help Desk** | Peer mentorship, freshmen campus onboarding, hostel guidance, and disclaimers. |
| `/history` | **Council History** | Institutional narrative and chronological milestone timeline across historical eras. |
| `/our-pride` | **Our Pride** | Verified student accomplishments in cryosphere research, service, and leadership. |
| `/faq` | **Frequently Asked Questions** | Accessible, searchable accordion with factual answers to common queries. |

---

## 5. Content Architecture & Separation of Concerns

Content records are strictly decoupled from presentation components. To update content without editing UI code, modify the typed files in `content/`:

- `lib/site-config.ts` — Site name, institution descriptor, base URLs, navigation items, campus address, and legal disclaimers.
- `content/events.ts` — Active program tracks and verified event records.
- `content/announcements.ts` — Official notices, ticker announcement, and bulletin articles.
- `content/cabinet.ts` — Cabinet portfolios, duties, and Chairman perspective statement.
- `content/gallery.ts` — Photographic records, categories, captions, and dates.
- `content/history.ts` — Milestones and institutional narrative.
- `content/achievements.ts` — Our Pride student contributions.
- `content/help-desk.ts` — Guidance areas, liaison offices, and scope disclaimers.
- `content/faq.ts` — Categorized question-and-answer repository.

---

## 6. Image Assets Directory

All local imagery is organized under `public/images/`:
- `public/images/branding/gbsc-logo.png` — Official council emblem extracted from original archives.
- `public/images/hero/karakoram-hero.jpg` — Majestic high-resolution Karakoram alpine landscape.
- `public/images/events/study-circle.jpg` — Documentary photograph of student intellectual study circle.
- `public/images/events/cultural-night.jpg` — Authentic student cultural gathering and rubab recital.
- `public/images/events/book-fair.jpg` — Open-air campus promenade book exhibition.
- `public/images/heritage/hunza-heritage.jpg` — Baltit Fort architectural stone and timber woodwork.
- `public/images/gallery/attabad-lake.jpg` — Glacial turquoise waters of Attabad Lake.

---

## 7. Contact Form & Production Backend Integration

The contact form at `/contact` features comprehensive client-side validation (name, email, subject, topic, and message length) and provides an honest user experience:
- In this stage, it transparently acknowledges that no arbitrary database is connected.
- It generates an automated direct `mailto:` link populated with user inputs addressed to `contact@gbsc-qau.org`.
- **To connect a production endpoint:**
  1. Set up an API route at `app/api/contact/route.ts` or connect an external service (e.g. Resend, Formspree, or Nodemailer).
  2. Point `components/contact/contact-form.tsx` to `fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })`.

---

## 8. SEO & Deployment Preparation

1. **Environment Variables:**
   - Copy `.env.example` to `.env.local`.
   - Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://gbsc-qau.org`).
2. **Canonical & Sitemaps:**
   - `app/sitemap.ts` and `app/robots.ts` read from `siteConfig.baseUrl` dynamically.
   - Structured JSON-LD schema for `EducationalOrganization` is injected into the homepage.
3. **Institutional Approvals Prior to Public Launch:**
   - [ ] Ratify elected cabinet member names and upload verified officer portraits.
   - [ ] Confirm official email inbox credentials (`contact@gbsc-qau.org`).
   - [ ] Post scheduled semester event dates as executive committee confirms them.

---

*Designed and engineered with pride for the Gilgit-Baltistan Student Council at Quaid-i-Azam University, Islamabad.*

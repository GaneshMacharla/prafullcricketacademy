# Product Requirements Document (PRD)
## PCA – Praful Cricket Academy Website

**Document Status:** Approved / In Progress  
**Version:** 1.0.0  
**Target:** Production-grade marketing & enquiry platform for PCA Praful Cricket Academy

---

## 1. Project Overview & Objectives

**PCA – Praful Cricket Academy** is a cricket coaching facility located in Bowenpally, Secunderabad. This project delivers a high-conversion, mobile-first, premium digital presence for the academy.

### Primary Goals:
1. **Establish Trust & Professionalism:** Portray PCA as an elite, disciplined training environment rather than a generic local business.
2. **Drive Trial Session Inquiries:** Streamline high-intent conversion pathways for parents and aspiring cricketers via clear CTAs, phone calls, WhatsApp messages, and structured trial requests.
3. **Transparent & Verified Academy Details:** Display genuine location, verified Google review score (4.8 ★ from 83 reviews), operating hours, and verified facility attributes without fabricating accomplishments.

---

## 2. Information Grounding & Verification Rules

In accordance with strict brand integrity rules, all content must be explicitly categorized:

| Category | Source / Status | Policy |
| :--- | :--- | :--- |
| **Academy Name** | Verified: PCA – Praful Cricket Academy (also referenced as Kamlesh Prafull Cricket Academy / KPCA) | Display accurately |
| **Address** | Verified: 186A, Plassy Lines, Bowenpally, Secunderabad, Hyderabad, Telangana 500011 | Display prominently with Google Maps link |
| **Phone** | Verified: `087123 10862` | One-touch tel link |
| **Google Plus Code** | Verified: `FFFF+J6, Secunderabad, Telangana` | Included in location schema and details |
| **Reputation Metrics** | Verified: 4.8 ★ Google Rating (83 Reviews) | Highlight genuine rating; no fabricated awards or ranking claims |
| **Facilities Verified** | Practice nets, cricket training area, parking, washrooms, drinking water (Verified from Playo/Justdial/Listing) | Feature confirmed amenities |
| **Training Programs** | Proposed: Batting, Bowling, Fielding, Physical Conditioning & Match Simulation | Clearly presented as core curriculum focus areas |
| **Imagery** | Licensed / curated sports imagery with clear asset manifest (`/public/images/README.md`) | Provide plug-and-play image replacement workflow for owner-authorized photos |

---

## 3. Target Audience & User Journey

### Audience Segments:
1. **Parents of Young Cricketers (Ages 6–18):**
   - *Key Needs:* Safety, professional discipline, structured training schedule, trustworthy environment, transparent contact options.
   - *Primary Action:* Book a trial session / WhatsApp or call for batch timings and fees.
2. **Aspiring Young Cricketers & Club Players:**
   - *Key Needs:* High-grade practice nets, technical bowling/batting drills, match preparation, fitness training.
   - *Primary Action:* Inquire about specialized skill coaching or net booking.

---

## 4. Visual & Brand Design System

- **Aesthetic:** Modern, athletic, premium dark theme with high-contrast typography and subtle cricket grass emerald/lime accents (`#10b981` / `#22c55e`).
- **Typography:** Modern athletic sans-serif (`Outfit` & `Inter`).
- **Cards & Components:** Sleek frosted dark surfaces (`rgba(255, 255, 255, 0.04)`), crisp borders (`rgba(255, 255, 255, 0.1)`), glowing hover states.
- **Mobile Experience:** Large touch targets (min 44px), sticky bottom quick-action bar (`Call`, `WhatsApp`, `Book Trial`).

---

## 5. Information Architecture & Key Sections

1. **Header & Navigation:** Sticky blur navbar with Logo, Links (About, Programs, Facilities, Gallery, Location, Contact), and "Book a Trial" CTA button.
2. **Hero Section:** High-impact dynamic headline ("Build Your Game. Build Your Future."), verified trust badge ("⭐ 4.8 Rated on Google (83 Reviews)"), primary action buttons.
3. **Trust & Metric Highlights:** Key verified metrics (Rating, Location, 24/7 or Extended access, Net facilities).
4. **Academy Philosophy & Overview:** "Where Passion Meets Practice" – disciplined development framework.
5. **Core Training Focus Areas:** Interactive cards for Batting, Bowling, Fielding, and Cricket Fitness.
6. **Ground & Practice Facilities:** Practice nets, turf/matting wickets, training zones, amenities.
7. **Curated Photo Gallery:** Masonry filterable gallery with category tags (Training, Nets, Match Practice) and replacement guide.
8. **Genuine Reviews & Reputation:** Google rating showcase with direct link to read reviews on Google Maps.
9. **Location & Directions:** Interactive map placeholder with fallback to official Google Maps route link, address details, and Plus Code.
10. **Trial Booking & Contact Form:** High-conversion form with validation for Indian mobile numbers, age, preferred training discipline, and trial date request.
11. **Footer:** Quick links, verified contact details, opening hours, copyright, and schema metadata.
12. **Persistent Mobile Actions:** Sticky bottom action bar (`Call`, `WhatsApp`, `Book Trial`).

---

## 6. Technical Stack & SEO

- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables & Animations
- **Icons:** Lucide React
- **SEO & Structured Data:** `SportsActivityLocation` / `LocalBusiness` JSON-LD schema, Open Graph tags, canonical meta, mobile viewport optimization.
- **Performance Budget:** Zero bloated dependencies, optimized SVG/WebP assets, fast first contentful paint (< 1.2s).

---

## 7. Legal & Media Compliance

- No unauthorized scraping or downloading of Google Maps photos.
- Placeholder cricket imagery organized with `/public/images/README.md` documenting replacement paths.
- Privacy-friendly analytics and no hardcoded secret keys.

# Asenso Special Inspections

## Overview

Marketing website for Asenso Special Inspections — a family-owned, minority-owned ICC-certified special inspections and QA/QC firm based in Southern California. Built with Next.js + TypeScript + Tailwind CSS + shadcn/ui.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Hosting**: Vercel
- **Domain**: asensoinspections.com (GoDaddy, DNS pointed to Vercel)
- **Fonts**: Manrope (via next/font)

## Project Structure

```
app/
├── layout.tsx              # Root layout with Manrope font and metadata
├── page.tsx                # Home / landing page (single-page, all sections)
├── globals.css             # Tailwind directives + Asenso design tokens
└── contact/
    ├── actions.ts          # Server action for form → Slack webhook
    └── schema.ts           # Zod validation schema

components/
├── ui/                     # shadcn/ui components
├── nav.tsx                 # Sticky nav + mobile drawer
├── identity-band.tsx       # Business identity banner
├── hero.tsx                # Hero section
├── diff-band.tsx           # 4-column differentiators
├── services.tsx            # Services with sidebar nav
├── credentials.tsx         # Credential tabs (ICC/AWS/ACI/IFC/Jurisdictions)
├── why-asenso.tsx          # Why section + comparison table
├── process.tsx             # 4-step process
├── projects.tsx            # Selected projects grid
├── senior-staff.tsx        # Staff cards
├── who-we-serve.tsx        # Audience cards
├── contact-section.tsx     # Contact info + form
├── footer.tsx              # Footer
├── logo.tsx                # Reusable logo SVG
└── section-tag.tsx         # Gold uppercase section label

lib/
└── utils.ts                # cn() helper from shadcn
```

## Development

```bash
npm run dev        # Start dev server (port 3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Deployment

The site deploys to Vercel. Next.js is auto-detected.

1. Connect the repo to Vercel
2. Vercel auto-detects Next.js and uses the correct build settings
3. Add `SLACK_WEBHOOK_URL` in Vercel project settings
4. Point GoDaddy domain to Vercel via DNS settings
5. Every push to main auto-deploys

## Forms

Contact form uses a Next.js server action — no third-party form services. Form submissions post to a Slack webhook. Validation via Zod.

## Design Tokens

All colors are defined in `app/globals.css` as CSS custom properties:

- `navy` (#142235) — primary brand, dark sections, headings
- `gold` (#B8924A) — accent, CTAs, highlights
- `sand` (#EAE2D6) — section backgrounds
- `stone` (#D6D1C8) — borders, form inputs
- `offwhite` (#FDFAF7) — page background
- `charcoal` (#2A2F36) — body text
- `muted` (#7A7670) — secondary text

## Constraints

- Do NOT suggest third-party form services (Formspree, Netlify Forms, etc.) — use server actions
- Do NOT use CSS Modules — use Tailwind CSS only
- Do NOT add a database unless explicitly requested
- Keep pages under 500 lines — decompose into components if larger
- Use shadcn/ui for all UI components — do not install competing component libraries
- Use Zod for form validation
- Single-page architecture — all sections on `/` with anchor scroll navigation

## Environment Variables

| Variable           | Description                              |
| ------------------ | ---------------------------------------- |
| SLACK_WEBHOOK_URL  | Slack webhook for form notifications     |

Copy `.env.example` to `.env.local` and fill in values. For Vercel, add in project settings.

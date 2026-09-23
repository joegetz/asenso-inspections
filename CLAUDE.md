# Asenso Construction Quality

## Overview

Marketing website for Asenso, a family-owned, minority-owned construction quality firm based in Southern California. Special inspection, QA/QC, and owner’s quality programs. Built with Next.js + TypeScript + Tailwind CSS + shadcn/ui.

## Brand Architecture (read before touching copy or identity)

The full system lives in the Asenso brand kit. The rules that bind this repo:

- **Wordmark is `ASENSO`.** Extended descriptor `CONSTRUCTION QUALITY` wherever there is
  width (nav, footer, covers). Compact descriptor `QUALITY` only in tight lockups.
- **Never lead with "Inspections" as the category.** Special inspection is a *service*
  the firm offers, not the ceiling of what it is. "Construction quality" is a program;
  "inspections" is a price-shopped line item. Using "Special Inspections" as a service
  name inside the services list is correct and expected.
- **Positioning:** the rigor and accreditation of a national firm, the responsiveness of
  a boutique, and transparent, real-time reporting the incumbents don't offer.
  Three pillars: **Rigorous. Responsive. Transparent.** Always set on one line, never
  stacked as three.
- **Motifs** live in `components/motif.tsx`. *Gayaman* (Kalinga centipede; protection) is
  the signature register. Monochrome gold only. **One pattern moment per surface:**
  logo OR pattern, never both competing. Density belongs inside a bounded panel or band
  with clean space beside it; never scattered evenly across a surface.
- **One mark, every size.** `AsensoMark` (the register stack) is the only mark. The
  header and footer lockups are the same component with no variant. There is no
  reduced single-spear glyph; it was retired.
- **Never** add a second accent color, a gradient, or a drop shadow. Never use the koru.
  Never use stock photography of generic hard-hat handshakes. Never claim a reporting
  platform the firm has not built.
- **Credibility comes from evidence density, not visual scale.** Named inspectors with
  certification numbers, named jurisdictions, named projects with dates, published
  response-time commitments. When in doubt, remove an element and add a fact.
- **Tone:** modern, plainspoken, confident, technical without being dry. Own the words
  *transparent, real-time, traceable, auditable, data-driven, senior, named*.
- **Copy mechanics.** American spelling, always: program, color, rigor, analyze. The
  brand kit itself is written in British spelling; convert it. Do not use em dashes in
  prose. Use a colon, a comma, or a second sentence. Do not use "delve", "leverage" as a
  verb, "robust", "seamless", "in today's landscape", or a rule-of-three flourish where
  one plain sentence does the work.
- **Cultural caution:** motif names are drawn from the ethnographic record and are not yet
  verified by a practitioner. Do not publish motif names or cultural claims in
  client-facing copy until reviewed.

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
├── motif.tsx               # Gayaman register system + the house mark
├── services.tsx            # Two-layer service model (see below)
├── credentials.tsx         # Credential tabs (ICC/AWS/ACI/IFC/Jurisdictions)
├── why-asenso.tsx          # The single "why us" argument + comparison table
├── process.tsx             # 4-step process
├── projects.tsx            # Sector strip + selected projects grid
├── senior-staff.tsx        # Staff cards
├── who-we-serve.tsx        # Audience cards
├── contact-section.tsx     # Contact info + form
├── footer.tsx              # Footer
├── logo.tsx                # Reusable logo SVG
└── section-tag.tsx         # Gold uppercase section label

lib/
└── utils.ts                # cn() helper from shadcn
```

## Service Model

Two layers, and the order matters.

**Layer 1, how we are engaged** (program level, retained, harder to displace):
Embedded QA/QC, Owner's Quality Management, Inspection Readiness and Evidence.

**Layer 2, what we cover in the field** (the technical scope):
Special and Deputy Inspection, Structural Observation and Threshold, MEP
Inspection and QA, Non-Destructive Testing, Source and Shop Inspection,
Materials Testing.

Materials testing is the one scope placed with an accredited partner, and the
site says so plainly. That admission is worth more than another checkmark.

**Never say "self-perform" on this site.** It is a general contractor's word for
doing work with its own forces rather than subbing it out. Borrowing it puts
Asenso on the subcontractor side of the table and makes the technical layer sound
defensive, as though answering an accusation of brokering that nobody made. Say
what we cover; note the one partnered scope in a sentence.

The transparency pillar is proved by one specific mechanic, not by adjectives:
**every condition is tracked in a register from open to verified closed**, and
findings are issued the day they are raised with the code basis and photo
evidence attached. Repeat that mechanic; do not repeat the word "transparent".

## Role Titles

The firm is moving its people from inspector titles to quality management
titles. Inspection is something we are carded for; quality management is what
we are retained to do. The ladder:

| Level | Title |
|---|---|
| Principal | Principal and Quality Director |
| Site anchor | Resident Quality Manager |
| Senior | Senior Quality Manager, `<discipline>` |
| Core | Quality Manager, `<discipline>` |
| Records | Quality Program Manager, Records and Closeout |
| Developing | Associate Quality Manager, `<coverage>` |

**The one rule that keeps this honest:** a title describes what the person
manages on the program. It never replaces a carded credential. ICC Special
Inspector, AWS CWI, ACI and city deputy registrations keep their exact legal
names in the certifications list under each person, and in `credentials.tsx`.
Never retitle a certification, and never imply someone manages a scope they are
not carded for. Historical role names on past projects in `projects.tsx` also
stay as they were actually held.

## Public Profiles Policy

The leadership tier is named publicly: Raymond Getz III, Raymond Mitchell, Raymond
Getz IV and Victor Getz, with carded credentials and, where published, card numbers
that can be checked against the issuing registry.

Everyone else is **not** named on the public site. The bench appears in
`components/coverage.tsx` as capacity: network size, registered jurisdictions,
mobilization time, and the special inspection categories covered, with in-house
scopes distinguished from partnered ones. Named quality managers, deputy card numbers
and resumes are provided at proposal stage for a defined scope.

This mirrors the firm's existing policy in `Asenso_Deputy_Inspector_Coverage.md`.
Do not add profile cards for non-leadership staff without an explicit decision to
change the policy: it is a poaching surface and a maintenance burden, and stale
profiles cost more credibility than absent ones. Two profiles were understated by
five and ten years before the September 2026 pass.

**Never publish a coverage or registration claim that has not been verified against
the current registry.** For a compliance firm an out-of-date coverage claim is the
worst available error.

## Do Not Repeat Yourself

The site previously made the same argument in three places (`diff-band`,
`why-asenso`, `firm-story`). Those are now consolidated into `why-asenso`, and
`diff-band` and `project-proof` have been retired. Before adding a section, check
that its argument is not already made elsewhere. Saying a thing three times reads
as padding, not as evidence.

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
- Multi-route architecture. `/` (home), `/services`, `/leadership`, `/projects`.
  Nav, identity band and footer live in `app/layout.tsx`, not in the pages.
  `/#why` and `/#contact` are anchors on the home route. A `/sample-report` route is
  planned and not yet built.

## Environment Variables

| Variable           | Description                              |
| ------------------ | ---------------------------------------- |
| SLACK_WEBHOOK_URL  | Slack webhook for form notifications     |

Copy `.env.example` to `.env.local` and fill in values. For Vercel, add in project settings.

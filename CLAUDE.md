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
- **Name services by the work, never by the side of the table.** "Owner-Side
Verification" told a GC we might be pointed at them and told a testing lab or
prime that we compete with them for owner work. A meaningful share of the firm's
work arrives as a subconsultant to labs and primes, so nothing on the site may
read as channel conflict. Say what the work is (Independent Quality Assurance),
name who retains us in a chip, and state both channels plainly: retained directly
by owners, CMs and GCs, or brought in as a subconsultant by laboratories and
prime firms.

**Complementary, never displacing.** Asenso is brought on to strengthen the
quality program on a project, not to take it over. Do not write "we run the
quality function", "we act as your quality team" or anything that reads as
replacing the GC's QC manager or the owner's staff. A general contractor with a
QC manager will not buy a firm that says it is replacing them; they will buy
certified capacity that carries the inspection program and keeps the record.
Owner-side work is the one place independence is the point, and it is framed as
verification alongside the contractor's own QC program, not instead of it.

**Never assert a code section, statute or registration that has not been verified
against the current source.** No "CBC §1705" on a card, no coverage matrix of
ticks by jurisdiction, no cert described as current when the resume says "in
renewal". This is a compliance firm: a wrong section number or a lapsed
registration published as active costs far more than the label was ever worth.
When a fact is not verified, describe the work instead and leave the citation out.

**Never attack another firm.** Not by name, not by category, not by
implication. No "most firms sell inspections by the visit", no comparison table
with a "National Lab" column, no "not a box we tick", no "whoever is free that
week". The competitive frame in the brand kit is for internal reasoning about
positioning; it is not copy. State what Asenso commits to and make each
commitment checkable. A reader who is evaluating three firms will do the
comparison themselves, and a firm that does it for them looks like the one that
needs to.

**No brag stacks.** A run of claims separated by commas ("ICC-certified
inspectors, AHJ-ready documentation, principals on the job, and reporting you can
audit the same day") is four assertions with nothing behind any of them, and it
usually duplicates evidence already on screen. Describe the work; let the
credential pills, the comparison table and the certification lists carry the
claims. Do not argue with the category either ("not a line item") — the reader
does not think of themselves as buying one.

**Copy mechanics.** American spelling, always: program, color, rigor, analyze. The
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

Two families of service. **Not a hierarchy** — this was wrong in an earlier
version and it misrepresents how the firm sells.

**Retained quality programs** run alongside the client's team for the duration
of a job: Embedded QA/QC, Independent Quality Assurance, Inspection Readiness
and Evidence.

**Inspection and testing services** are bought on their own, for a defined
package of work: Special and Deputy Inspection, Structural Observation, MEP
Inspection and QA, Non-Destructive Testing, Source and Shop Inspection,
Materials Testing.

Both are sellable on their own; many projects take one and add the other. Never
present the disciplines as "what sits underneath" the programs, or with a label
like "what we cover in the field" that reads as a component list. A client can
hire Asenso for non-destructive testing alone and never buy a program.

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
| Senior | Senior Quality Manager |
| Core | Quality Manager |
| Records | Quality Program Manager, Records and Closeout |
| Developing | Associate Quality Manager, `<coverage>` |

**No contractor, prime or host firm names anywhere on the site.** Not on profile
cards, not in project meta lines. Naming Hensel Phelps, Northrop Grumman, Clark or
a host inspection firm tells competitors who the bench works through and names
firms that never agreed to appear here. Public agency owners (Department of
Defense, County of Orange) and the projects themselves are fine; the firms are
named at proposal stage.

**No narrative bios on profile cards.** A card
carries the person, the title, the tenure and the certifications. That is all.
Paragraphs describing what someone authored, which general contractor they are
placed with, or which campus they ran are proposal content: they tell competitors
where the bench is deployed, and they name clients who never agreed to appear on
a public website. The certifications are the proof; the narrative is the claim.

**Titles carry no discipline qualifier.** Not "Quality Manager, Whole-Building
Compliance", not "QA/QC Manager, Structural and MEP". Appending a discipline
narrows the person back into a trade specialist, which is the framing the firm is
moving away from, and it reads as a caveat on the title rather than a description
of range. The range belongs in the paragraph and the certifications underneath.

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

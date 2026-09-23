import { SectionTag } from "./section-tag";

// Delivery history of our team, delivered under the GC or host
// inspection firm shown.
const projects = [
  {
    sector: "Aviation",
    title: "LAX Terminal 5 Modernization",
    meta: "Hensel Phelps · $1.6B · Los Angeles, CA · Active",
    desc: "Structural QA team: receiving inspection, material traceability and heat-number verification across structural steel, concrete, embeds, anchors, and welding; deficiency logs, NCRs, and turnover records.",
    tags: ["Material Traceability", "Structural Steel", "Welding"],
  },
  {
    sector: "Federal · Defense",
    title: "Sentinel Program (GBSD)",
    meta: "Northrop Grumman / Clark · Department of Defense",
    desc: "Construction Quality Manager for classified DoD facilities under EM-385 and ICD-705 — multidiscipline quality and BIM coordination on remote federal installations.",
    tags: ["DoD", "EM-385 / ICD-705", "CQM"],
  },
  {
    sector: "Healthcare · Campus",
    title: "City of Hope — Orange County Hospital",
    meta: "Fenagh · 6-Level Hospital · Irvine, CA",
    desc: "QA Lead Special Inspector on a six-level HCAI hospital — daily structural inspection, special-inspection coordination, and HCAI Inspector-of-Record interface through closeout.",
    tags: ["HCAI / OSHPD", "Structural Steel", "QC Program Lead"],
  },
  {
    sector: "Aviation",
    title: "San Diego International Airport — Terminal 1",
    meta: "$3.4B · San Diego, CA",
    desc: "MEP inspection on the full replacement of the 1960s terminal — conduit, feeders, panels, disconnects, and automatic transfer switches, with energization and testing.",
    tags: ["MEP", "Energization", "Aviation"],
  },
  {
    sector: "Public Agency · Aviation",
    title: "John Wayne Airport — AIP & Terminal Improvements",
    meta: "County of Orange · $220M+ · Orange County, CA",
    desc: "QA Senior Special Inspector and oversight across capital improvement and Essential Facility seismic retrofit programs — ~175 structural connections, equipment anchorage, and full closeout documentation.",
    tags: ["Structural Steel", "Seismic Upgrade", "Public Agency"],
  },
  {
    sector: "Healthcare",
    title: "Children's Hospital of Orange County (CHOC)",
    meta: "Orange County, CA",
    desc: "Welding and structural inspection for hospital expansion and pharmacy relocation — structural steel, moment frames, seismic anchors, and inspection per AWS D1.1 and AISC standards.",
    tags: ["AWS D1.1", "Seismic Anchors", "OSHPD"],
  },
  {
    sector: "Federal · Remote",
    title: "Naval Air Weapons Station — China Lake",
    meta: "Remote Mojave Installation · 2022–2023",
    desc: "Special inspector on South Airfield military construction: MEP seismic bracing, equipment anchorage, reinforced concrete, and structural masonry on a remote federal installation.",
    tags: ["Seismic Anchorage", "Remote", "Federal"],
  },
  {
    sector: "Water · Wastewater",
    title: "Orange County Sanitation District — Plant 2",
    meta: "Process Pipe Welding · Orange County, CA",
    desc: "QA Senior Special Inspector for in-service gas-line pipe welding — removal from service, fit-up and welding to Welding Procedure Specifications, sequencing, and return to service.",
    tags: ["Pipe Welding", "WPS", "Process"],
  },
  {
    sector: "Water · Wastewater",
    title: "Ontario Wells No. 37 & 39 — Ion-Exchange Treatment",
    meta: "20″ Process Pipeline · Ontario, CA",
    desc: "QA Certified Welding Inspector for a below-grade process pipeline — fit-up and welding of joints, flanges, and fittings on ion-exchange water-treatment facilities.",
    tags: ["CWI", "Process Pipeline", "Water Treatment"],
  },
  {
    sector: "DSA · Higher Education",
    title: "Long Beach City College — Math & Tech Building V",
    meta: "DSA · Long Beach, CA",
    desc: "QA Senior Special Inspector — steel framing, pipe welding for HVAC, elevator construction, and reinforced concrete. Direct interface with DSA Inspector of Record throughout.",
    tags: ["DSA", "Steel Framing", "Reinforced Concrete"],
  },
  {
    sector: "Entertainment · Commercial",
    title: "Disneyland — Splash Mountain Renovation",
    meta: "$60M · Anaheim, CA",
    desc: "Quality control oversight for welding and metalwork — steel frame, column supports, and trusses inspected to AWS D1.1. Full documentation of procedures and corrective actions.",
    tags: ["AWS D1.1", "Steel Trusses", "QC Program"],
  },
];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-[1.6rem] transition-all hover:bg-white/[0.07] hover:border-gold/30">
      <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-gold mb-[0.9rem] before:content-[''] before:w-1 before:h-1 before:bg-gold before:rounded-full before:shrink-0">
        {p.sector}
      </div>
      <h3 className="text-[0.95rem] font-extrabold text-white mb-[0.4rem] leading-[1.3] tracking-tight">
        {p.title}
      </h3>
      <div className="text-[12px] text-sand/40 mb-[0.6rem]">{p.meta}</div>
      <p className="text-[13px] text-sand/50 leading-[1.65]">{p.desc}</p>
      <div className="flex items-center justify-between mt-[0.85rem] gap-3">
        <div className="flex flex-wrap gap-[0.35rem]">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-[0.06em] uppercase text-gold/70 bg-gold/10 rounded-full px-[9px] py-[3px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const sectors = [
  { label: "Federal / Defense", example: "Sentinel \u00b7 Vandenberg SFB" },
  { label: "Industrial", example: "Semiconductor \u00b7 Process" },
  { label: "Healthcare", example: "City of Hope \u00b7 CHOC \u00b7 Hoag" },
  { label: "Aviation", example: "JWA \u00b7 LAX \u00b7 San Diego Int'l" },
  { label: "Education / DSA", example: "K\u201312 \u00b7 Community College" },
  { label: "Water / Wastewater", example: "Treatment \u00b7 Pipe welding" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-navy py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Team Experience</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-white mb-4">
          Work our staff
          <br />
          have delivered.
        </h2>
        <p className="text-[16px] text-sand/[0.48] max-w-[620px] mb-14 leading-[1.8] font-normal">
          Our quality managers earned their credentials across GCs, labs and
          agencies in aviation, healthcare, federal, industrial, and
          education, now consolidated under one firm. This is their collective
          delivery history.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-5 border-y border-white/[0.08] py-6 mb-12">
          {sectors.map((sector) => (
            <div key={sector.label}>
              <div className="text-[12px] font-bold text-white leading-[1.3] mb-1">
                {sector.label}
              </div>
              <div className="text-[11px] text-sand/[0.38] leading-[1.4]">
                {sector.example}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <p className="text-[12px] text-sand/[0.32] leading-[1.7] mt-10 max-w-[860px]">
          Projects reflect our team’s delivery history, performed under the
          GC or host firm shown. Dollar figures are total
          project value, shown for context. References available on request.
        </p>
      </div>
    </section>
  );
}

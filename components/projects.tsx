import { SectionTag } from "./section-tag";

// Engagements delivered by Asenso and its inspectors as the named special
// inspector / QA lead.
const firmProjects = [
  {
    sector: "Public Agency · Aviation",
    title: "John Wayne Airport — AIP Improvement Program",
    meta: "County of Orange · $220M Program · Orange County, CA",
    desc: "QA Senior Special Inspector for a major capital improvement program — overseeing daily structural activities, interfacing with County inspectors and regulatory agencies, and managing full closeout documentation.",
    tags: ["Structural Steel", "Welding", "Concrete", "Public Agency"],
  },
  {
    sector: "Public Agency · Aviation",
    title: "John Wayne Airport — Terminal Improvements (P202)",
    meta: "County of Orange · $102M · Orange County, CA",
    desc: "QA Field Representative overseeing seismic upgrades to Terminal A & B, structural welding sequences, mechanical/electrical systems, and coordination with Swinerton Builders and JWA Operations.",
    tags: ["Seismic Upgrade", "Structural Welding", "Owner's Rep"],
  },
  {
    sector: "Healthcare · Campus",
    title: "City of Hope — Orange County Hospital",
    meta: "Fenagh · 6-Level Hospital · Irvine, CA",
    desc: "QA Lead Special Inspector on a six-level hospital — erection and daily structural inspection, special-inspection coordination, and HCAI Inspector-of-Record interface from groundbreaking through closeout.",
    tags: ["HCAI / OSHPD", "Structural Steel", "QC Program Lead"],
  },
  {
    sector: "Healthcare",
    title: "Children’s Hospital of Orange County (CHOC)",
    meta: "Orange County, CA",
    desc: "Welding and structural inspection for hospital expansion and pharmacy relocation — including structural steel, moment frames, seismic anchors, and non-destructive testing per AWS D1.1, D1.3, and AISC standards.",
    tags: ["AWS D1.1", "NDT", "Seismic Anchors"],
  },
  {
    sector: "Healthcare",
    title: "Hoag Hospital Newport Beach",
    meta: "Newport Beach, CA",
    desc: "Spray-applied fireproofing inspections and reinforced concrete observations — verifying proper application and curing of fireproofing coatings on welded structural steel supports for hospital expansion.",
    tags: ["Fireproofing", "Reinforced Concrete", "Structural Steel"],
  },
  {
    sector: "DSA · Higher Education",
    title: "Long Beach City College — Math & Tech Building V",
    meta: "DSA · Ninyo & Moore · Long Beach, CA",
    desc: "QA Senior Special Inspector for new academic building construction — steel framing, pipe welding for HVAC, elevator construction, and reinforced concrete. Direct interface with DSA Inspector of Record throughout.",
    tags: ["DSA", "Steel Framing", "Reinforced Concrete"],
  },
  {
    sector: "DSA · K–12 Education",
    title: "Hawthorne High School — Athletic Facilities",
    meta: "DSA Title 24 · Los Angeles, CA",
    desc: "Welding inspector ensuring DSA Title 24, AWS D1.1, and AISC compliance for structural steel columns, beams, and connections. Full documentation of welder qualifications, WPS, and seismic safety requirements.",
    tags: ["DSA Title 24", "AWS D1.1", "Structural Steel"],
  },
  {
    sector: "Entertainment · Commercial",
    title: "Disneyland — Splash Mountain Renovation",
    meta: "$60M Enhancement Project · Anaheim, CA",
    desc: "Quality control oversight for all welding and metalwork on a major theme park renovation — steel frame, column supports, and trusses inspected to AWS D1.1. Full documentation of procedures and corrective actions.",
    tags: ["AWS D1.1", "Steel Trusses", "QC Program"],
  },
];

// Landmark projects from the careers of Asenso's senior inspectors. Dollar
// figures are total project value for context, not Asenso's scope or contract.
const careerProjects = [
  {
    sector: "Industrial · Semiconductor",
    title: "Texas Instruments Semiconductor Fab",
    meta: "Project value $11B · Lehi, UT",
    desc: "QC inspection of structural, mechanical, and MEP installations on a 300mm wafer-fab campus tied into the operating plant — the closest analog in our portfolio to a process facility.",
    tags: ["Structural / MEP", "Industrial", "Mission-Critical"],
  },
  {
    sector: "Aviation",
    title: "LAX Terminal 5 Modernization",
    meta: "Project value $1.6B · Hensel Phelps · Los Angeles, CA",
    desc: "Structural Quality Manager — receiving inspection, material traceability and heat-number verification across structural steel, concrete, embeds, anchors, and welding; deficiency logs, NCRs, and turnover records.",
    tags: ["Material Traceability", "Structural Steel", "Welding"],
  },
  {
    sector: "Aviation",
    title: "San Diego International Airport — Terminal 1",
    meta: "Project value $3.4B · San Diego, CA",
    desc: "MEP inspection on the full replacement of the 1960s terminal — conduit, feeders, panels, disconnects, and automatic transfer switches, with energization and testing.",
    tags: ["MEP", "Energization", "Aviation"],
  },
  {
    sector: "Federal · Defense",
    title: "Sentinel Program (GBSD)",
    meta: "Northrop Grumman / Clark · Department of Defense",
    desc: "Construction Quality Manager for classified DoD facilities on the Air Force’s ground-based ICBM modernization, under EM-385 and ICD-705 — leading multidiscipline quality and BIM coordination.",
    tags: ["DoD", "EM-385 / ICD-705", "CQM"],
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
];

function ProjectCard({ p }: { p: (typeof firmProjects)[number] }) {
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
      <div className="flex flex-wrap gap-[0.35rem] mt-[0.85rem]">
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
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-navy py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Project Experience</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-white mb-4">
          The work behind the credentials.
        </h2>
        <p className="text-[16px] text-sand/[0.48] max-w-[600px] mb-14 leading-[1.8] font-normal">
          A cross-section of the projects our team has delivered &mdash; public
          agency, healthcare, education, federal, and industrial. References
          available upon request.
        </p>

        {/* Firm engagements */}
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-gold mb-2">
          Asenso Engagements
        </div>
        <p className="text-[13.5px] text-sand/40 max-w-[620px] mb-7 leading-[1.7]">
          Projects delivered with Asenso inspectors as the named special
          inspector or QA lead.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {firmProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* Career experience */}
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-gold mb-2">
          Landmark Experience Our Senior Inspectors Bring
        </div>
        <p className="text-[13.5px] text-sand/40 max-w-[640px] mb-7 leading-[1.7]">
          Career experience our senior inspectors carry to every Asenso project.
          Dollar figures are total project value shown for context &mdash; not
          Asenso&rsquo;s scope or contract.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careerProjects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

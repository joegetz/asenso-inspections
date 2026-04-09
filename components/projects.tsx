import { SectionTag } from "./section-tag";

const projects = [
  {
    sector: "Public Agency \u00b7 Aviation",
    title: "John Wayne Airport \u2014 AIP Improvement Program",
    meta: "County of Orange \u00b7 $220M Program \u00b7 Orange County, CA",
    desc: "QA Senior Special Inspector for a major capital improvement program \u2014 overseeing daily structural activities, interfacing with County inspectors and regulatory agencies, and managing full closeout documentation.",
    tags: ["Structural Steel", "Welding", "Concrete", "Public Agency"],
  },
  {
    sector: "Public Agency \u00b7 Aviation",
    title: "John Wayne Airport \u2014 Terminal Improvements (P202)",
    meta: "County of Orange \u00b7 $102M \u00b7 Orange County, CA",
    desc: "QA Field Representative and Construction Manager overseeing seismic upgrades to Terminal A & B, structural welding sequences, mechanical/electrical systems, and coordination with Swinerton Builders and JWA Operations.",
    tags: ["Seismic Upgrade", "Structural Welding", "CM Oversight"],
  },
  {
    sector: "DSA \u00b7 K\u201312 Education",
    title: "Hawthorne High School \u2014 Athletic Facilities",
    meta: "DSA Title 24 \u00b7 Los Angeles, CA",
    desc: "Welding inspector ensuring DSA Title 24, AWS D1.1, and AISC compliance for structural steel columns, beams, and connections. Full documentation of welder qualifications, WPS, and seismic safety requirements.",
    tags: ["DSA Title 24", "AWS D1.1", "Structural Steel"],
  },
  {
    sector: "DSA \u00b7 Higher Education",
    title: "Mt. San Antonio College \u2014 Pedestrian Bridge",
    meta: "DSA Title 24 \u00b7 Walnut, CA",
    desc: "Welding inspections for a pedestrian bridge and elevator support structure \u2014 verifying seismic compliance, structural steel connections, AWS D1.1 weld quality, and load-bearing capacity for public access.",
    tags: ["DSA Title 24", "Bridge Structure", "AWS D1.1"],
  },
  {
    sector: "DSA \u00b7 Higher Education",
    title: "Long Beach City College \u2014 Math & Tech Building V",
    meta: "DSA \u00b7 Ninyo & Moore \u00b7 Long Beach, CA",
    desc: "QA Senior Special Inspector for new academic building construction \u2014 steel framing, pipe welding for HVAC, elevator construction, and reinforced concrete. Direct interface with DSA Inspector of Residence throughout.",
    tags: ["DSA", "Steel Framing", "Reinforced Concrete"],
  },
  {
    sector: "Healthcare",
    title: "Children\u2019s Hospital of Orange County (CHOC)",
    meta: "Orange County, CA",
    desc: "Welding and structural inspection for hospital expansion and pharmacy relocation \u2014 including structural steel, moment frames, seismic anchors, and non-destructive testing per AWS D1.1, D1.3, and AISC standards.",
    tags: ["AWS D1.1", "NDT", "Seismic Anchors"],
  },
  {
    sector: "Healthcare",
    title: "Hoag Hospital Newport Beach",
    meta: "Newport Beach, CA",
    desc: "Spray-applied fireproofing inspections and reinforced concrete observations \u2014 verifying proper application and curing of fireproofing coatings on welded structural steel supports for hospital expansion.",
    tags: ["Fireproofing", "Reinforced Concrete", "Structural Steel"],
  },
  {
    sector: "Healthcare \u00b7 Campus",
    title: "City of Hope \u2014 Irvine Campus",
    meta: "QC Lead \u00b7 2-Year Program \u00b7 Irvine, CA",
    desc: "QC Lead for the full Irvine campus build over a two-year engagement \u2014 overseeing comprehensive QC program management and coordination across structural, mechanical, and other trades from groundbreaking through closeout.",
    tags: ["QC Program Lead", "Healthcare Campus", "Multi-Trade", "2-Year Program"],
  },
  {
    sector: "Entertainment \u00b7 Commercial",
    title: "Disneyland \u2014 Splash Mountain Renovation",
    meta: "$60M Enhancement Project \u00b7 Anaheim, CA",
    desc: "Quality control oversight for all welding and metalwork on a major theme park renovation \u2014 steel frame, column supports, and trusses inspected to AWS D1.1. Full documentation of procedures and corrective actions.",
    tags: ["AWS D1.1", "Steel Trusses", "QC Program"],
  },
  {
    sector: "Federal \u00b7 Defense",
    title: "Vandenberg Air Force Base \u2014 Sentinel Program",
    meta: "Department of Defense \u00b7 GBSD Nuclear Refurbishment",
    desc: "Led QC for a DoD nuclear refurbishment program \u2014 managing inspections for launch facilities and secure communication centers under the Ground Based Strategic Deterrent (GBSD) Sentinel initiative.",
    tags: ["DoD", "QC Program Lead", "Federal"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-navy py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Project Experience</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-white mb-4">
          Work we&apos;ve put
          <br />
          our name on.
        </h2>
        <p className="text-[16px] text-sand/[0.48] max-w-[560px] mb-14 leading-[1.8] font-normal">
          A cross-section of projects our senior staff have delivered &mdash;
          public agency, healthcare, education, and beyond. References available
          upon request.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-[1.6rem] transition-all hover:bg-white/[0.07] hover:border-gold/30"
            >
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-gold mb-[0.9rem] before:content-[''] before:w-1 before:h-1 before:bg-gold before:rounded-full before:shrink-0">
                {p.sector}
              </div>
              <h3 className="text-[0.95rem] font-extrabold text-white mb-[0.4rem] leading-[1.3] tracking-tight">
                {p.title}
              </h3>
              <div className="text-[12px] text-sand/40 mb-[0.6rem]">
                {p.meta}
              </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}

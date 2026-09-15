import { SectionTag } from "./section-tag";

const services = [
  {
    id: "svc-qaqc",
    title: "QA/QC Program Management",
    code: "Owner \u00b7 GC \u00b7 Agency",
    desc: "Embedded quality assurance and control support for contractors, owners, and public agencies who need active oversight throughout construction \u2014 not just code-triggered inspection milestones.",
    items: [
      "Project-specific QA/QC plan development",
      "Pre-pour & pre-placement readiness verification",
      "Non-conformance tracking & resolution",
      "Owner\u2019s representative support",
      "Contractor QC program review",
      "Issue resolution follow-through",
      "Closeout documentation & readiness packages",
    ],
  },
  {
    id: "svc-special",
    title: "Special Inspections",
    code: "IBC Ch. 17 / CBC",
    desc: "Continuous and periodic special inspections per the project Statement of Special Inspections \u2014 performed by ICC-certified inspectors licensed in the relevant jurisdiction.",
    items: [
      "Reinforcing Steel Placement",
      "Concrete Placement & Curing",
      "Shotcrete Placement",
      "Pre-Stress & Post-Tensioned Concrete",
      "Structural Steel Welding",
      "High-Strength Bolting",
      "Reinforced Masonry Construction",
      "Epoxy Anchor Installation",
      "Mechanical Anchors",
      "Non-Destructive Testing",
      "Fireproofing",
      "Structural Wood",
      "Exterior Insulation & Finish Systems (EIFS)",
      "Welder Qualifications",
      "Steel & Welding Fabricator Shop Inspections",
    ],
  },
  {
    id: "svc-cqm",
    title: "Construction Quality Management",
    code: "Owner · EPC",
    desc: "Serving as the owner’s or EPC’s embedded quality team — verifying the trade contractors’ work on your behalf across the full structural scope, with the planning, documentation, and closeout a financed or mission-critical build requires.",
    items: [
      "Inspection & Test Plan (ITP) development",
      "Hold & witness-point register management",
      "USACE three-phase control",
      "Receiving inspection & material traceability",
      "Non-conformance (NCR) tracking to closure",
      "Heat-number & mill-cert verification",
      "MSHA-ready remote / industrial mobilization",
      "Turnover & closeout documentation packages",
    ],
  },
  {
    id: "svc-materials",
    title: "Materials Testing",
    code: "ASTM · ISO/IEC 17025",
    desc: "Field sampling and testing of concrete, masonry, and soils, with laboratory breaks through our ISO/IEC 17025-accredited partner of twenty years — accredited-lab results without the rotating staff of a national branch network.",
    items: [
      "Concrete field testing (slump, air, temperature)",
      "Concrete cylinder casting & accredited-lab breaks",
      "Grout prism & mortar compression tests",
      "Reinforcing & anchor verification",
      "Soils & compaction coordination",
      "Chain-of-custody from field to lab",
      "Calibrated equipment with current certificates",
    ],
  },
  {
    id: "svc-ndt",
    title: "Non-Destructive Testing",
    code: "ASNT · AWS",
    desc: "Visual and non-destructive examination of structural welds, coordinated with ASNT-qualified personnel — sized to the project’s acceptance criteria and inspection test plan.",
    items: [
      "Visual weld inspection by CWI",
      "Ultrasonic testing (UT) coordination",
      "Magnetic particle (MT) & dye penetrant (PT)",
      "Bolting verification — turn-of-nut & direct tension",
      "Welder & WPS qualification review",
    ],
  },
  {
    id: "svc-structural",
    title: "Structural Observation",
    code: "ASCE 7",
    desc: "Structural observation services coordinated with the Structural Engineer of Record \u2014 ensuring field conditions match design intent at every required phase.",
    items: [
      "Phased site visits per observation program",
      "Deficiency tracking & resolution log",
      "SEOR coordination and reporting",
      "Final structural observation letter for AHJ",
      "Coordination with building department at closeout",
    ],
  },
  {
    id: "svc-threshold",
    title: "Threshold Inspections",
    code: "CBC \u00a71705",
    desc: "Threshold building inspection services for projects triggering mandatory structural observation \u2014 including large concrete and post-tensioned structures.",
    items: [
      "Concrete & post-tensioned slab systems",
      "Moment frames and shear wall construction",
      "Sequential phase documentation",
      "Threshold inspection reports for AHJ",
    ],
  },
];

const navItems = [
  { href: "#svc-qaqc", label: "QA/QC Program Management" },
  { href: "#svc-special", label: "Special Inspections" },
  { href: "#svc-cqm", label: "Construction Quality Management" },
  { href: "#svc-materials", label: "Materials Testing" },
  { href: "#svc-ndt", label: "Non-Destructive Testing" },
  { href: "#svc-structural", label: "Structural Observation" },
  { href: "#svc-threshold", label: "Threshold Inspections" },
];

export function Services() {
  return (
    <section id="services" className="bg-offwhite py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Services</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          Inspection & Quality Services
        </h2>
        <p className="text-[16px] text-muted max-w-[600px] mb-14 leading-[1.8] font-normal">
          From code-required special inspections to materials testing and
          embedded quality management for owners and EPC teams &mdash;
          ICC-certified across the full IBC Chapter 17 and CBC scope, licensed
          in California and deployed on industrial sites across Texas and the
          Mountain West.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Sidebar nav — hidden on mobile */}
          <div className="hidden lg:block sticky top-[88px] max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-4">
              Jump to
            </div>
            <ul className="list-none flex flex-col gap-[0.2rem]">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="block py-[0.55rem] px-[0.85rem] rounded-md no-underline text-[13.5px] font-medium text-muted transition-all border-l-2 border-transparent hover:bg-sand hover:text-navy hover:border-l-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service panels */}
          <div className="flex flex-col gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-offwhite border border-border rounded-xl p-[2.2rem] px-8 transition-colors relative overflow-hidden scroll-mt-[100px] group hover:border-gold/30 before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-0 before:w-[3px] before:bg-gold before:opacity-0 before:transition-opacity hover:before:opacity-100"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-[1.1rem] font-extrabold text-navy">
                    {svc.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-gold bg-gold/10 px-[10px] py-1 rounded-full whitespace-nowrap shrink-0">
                    {svc.code}
                  </span>
                </div>
                <p className="text-[14px] text-muted leading-[1.75] mb-[1.2rem]">
                  {svc.desc}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-[0.4rem] gap-x-3 list-none">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] text-charcoal leading-[1.5] before:content-[''] before:w-1 before:h-1 before:bg-gold before:shrink-0 before:mt-[7px] before:[clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionTag } from "./section-tag";

/**
 * Two layers, deliberately.
 * Layer 1 is how the firm is engaged: program-level, retained, harder to
 * displace. Layer 2 is what the firm self-performs, which is what separates
 * us from boutiques who broker the work out.
 */

const engagements = [
  {
    id: "svc-embedded",
    title: "Embedded QA/QC",
    code: "CM · GC · Owner's Rep",
    desc: "We sit inside your team and run the quality function for the duration of the job, rather than being called out per inspection.",
    items: [
      "Project-specific QA/QC plan",
      "Inspection and test plan (ITP) development",
      "Hold and witness point register",
      "Contractor QC program review",
      "Non-conformance tracking to closure",
      "Pre-pour and pre-placement readiness",
      "Turnover and closeout packages",
    ],
  },
  {
    id: "svc-owner",
    title: "Owner's Quality Management",
    code: "Owner · EPC",
    desc: "We act as the owner's or EPC's quality team, verifying the trade contractors' work on your behalf across the full scope, with the planning, traceability and closeout a financed or mission-critical build requires.",
    items: [
      "Independent verification of contractor QC",
      "USACE three-phase control",
      "Receiving inspection and material traceability",
      "Heat number and mill certificate verification",
      "Owner's representative support",
      "Remote and industrial mobilization",
      "Turnover documentation packages",
    ],
  },
  {
    id: "svc-readiness",
    title: "Inspection Readiness and Evidence",
    code: "Readiness",
    desc: "We walk each area and attach the evidence before the request goes in, so it passes the first time instead of costing a second round.",
    items: [
      "Pre-request area walks",
      "Photo evidence with the code basis attached",
      "Findings issued the day they are raised",
      "Condition register, open to verified closed",
      "Deficiency resolution follow-through",
      "AHJ and SEOR coordination",
      "Closeout readiness verification",
    ],
  },
];

const capabilities = [
  {
    title: "Special and Deputy Inspection",
    code: "IBC / CBC Ch. 17",
    desc: "Continuous and periodic inspection per the Statement of Special Inspections, by ICC-certified inspectors carrying the deputy card for the jurisdiction.",
  },
  {
    title: "Structural Observation and Threshold",
    code: "ASCE 7 · CBC §1705",
    desc: "Phased site visits with the Structural Engineer of Record, a deficiency log carried to resolution, and the final observation letter for closeout.",
  },
  {
    title: "MEP Inspection and QA",
    code: "Mech · Elec · Plumb",
    desc: "Mechanical, electrical and plumbing inspection and quality support. Real depth on our senior bench, not a box we tick.",
  },
  {
    title: "Non-Destructive Testing",
    code: "ASNT · AWS",
    desc: "Ultrasonic, magnetic particle and dye penetrant testing on welds and structural connections, performed in house by our own technicians.",
  },
  {
    title: "Source and Shop Inspection",
    code: "Source",
    desc: "Fabricated steel traceability, heat numbers, weld and bolt QA at the shop before it ships, and again when it lands in the field.",
  },
  {
    title: "Materials Testing",
    code: "ASTM · ISO/IEC 17025",
    desc: "Field sampling of concrete, masonry and soils, with laboratory breaks through our ISO/IEC 17025 accredited partner of twenty years.",
  },
];

const ch17Scope = [
  "Reinforcing steel placement",
  "Concrete placement and curing",
  "Shotcrete",
  "Prestressed and post-tensioned concrete",
  "Structural steel welding",
  "High-strength bolting",
  "Reinforced masonry",
  "Epoxy and mechanical anchors",
  "Fireproofing",
  "Structural wood",
  "EIFS",
  "Welder qualifications",
];

export function Services() {
  return (
    <section id="services" className="bg-offwhite pt-16 pb-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Services</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          Construction quality,
          <br />
          run as a program.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start mb-16">
          <p className="text-[16px] text-muted max-w-[620px] leading-[1.8] font-normal">
            Most firms sell inspections by the visit. We are usually retained to
            run the quality function itself, which is a different engagement:
            scoped to the project and the phase, held for the duration, and
            answerable for the record at closeout. We self-perform the field
            work underneath it.
          </p>
          <div className="border-l-2 border-gold pl-5">
            <div className="brand-label-sm text-muted mb-3">On this page</div>
            <ul className="list-none flex flex-col gap-2">
              {[
                { href: "#engagement", label: "How we are engaged" },
                { href: "#self-performed", label: "What we self-perform" },
                { href: "#ch17", label: "Full IBC Chapter 17 scope" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13.5px] font-semibold text-navy no-underline transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Layer 1: engagement models */}
        <div id="engagement" className="brand-label text-gold mb-6 scroll-mt-[100px]">
          How we are engaged
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">
          {engagements.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="bg-offwhite border border-border rounded-xl p-7 scroll-mt-[100px] flex flex-col transition-colors hover:border-gold/30"
            >
              <span className="brand-label-sm text-gold mb-3">{svc.code}</span>
              <h3 className="text-[1.05rem] font-extrabold text-navy leading-[1.25] mb-3">
                {svc.title}
              </h3>
              <p className="text-[13.5px] text-muted leading-[1.7] mb-5">
                {svc.desc}
              </p>
              <ul className="list-none flex flex-col gap-[0.35rem] mt-auto">
                {svc.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[12.5px] text-charcoal leading-[1.5] before:content-[''] before:w-1 before:h-1 before:bg-gold before:shrink-0 before:mt-[7px] before:[clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Layer 2: self-performed capability */}
        <div id="self-performed" className="mb-6 scroll-mt-[100px]">
          <div className="brand-label text-gold mb-2">What we self-perform</div>
          <p className="text-[13.5px] text-muted max-w-[560px] leading-[1.7]">
            Our own certified people in the field. Materials testing is the one
            scope we place with an accredited partner, and we say so.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 border-t border-border pt-10">
          {capabilities.map((cap) => (
            <div key={cap.title}>
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h4 className="text-[0.92rem] font-bold text-navy leading-[1.3]">
                  {cap.title}
                </h4>
              </div>
              <div className="brand-label-sm text-gold mb-2">{cap.code}</div>
              <p className="text-[13px] text-muted leading-[1.65]">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        <div id="ch17" className="mt-12 border-t border-border pt-8 scroll-mt-[100px]">
          <div className="brand-label-sm text-muted mb-4">
            Full IBC Chapter 17 scope
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {ch17Scope.map((s) => (
              <span
                key={s}
                className="text-[12px] font-medium text-charcoal bg-sand border border-stone/60 rounded-full px-3 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

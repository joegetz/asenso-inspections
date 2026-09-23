import { SectionTag } from "./section-tag";

/**
 * Two layers, deliberately.
 * Layer 1 is how the firm is engaged: program-level, retained, harder to
 * displace. Layer 2 is the technical scope underneath it.
 *
 * Layer 2 carries no code chips. Every one of them was either a restatement
 * of the title it sat on or a code citation nobody had verified, and this is a
 * compliance firm: an asserted section number that turns out to be wrong costs
 * more than the label was ever worth.
 *
 * Do not call layer 2 "what we self-perform". Self-perform is a general
 * contractor's word for doing work with its own forces instead of subbing it
 * out. Borrowing it puts the firm on the subcontractor side of the table and
 * sounds defensive. Say what we cover, and note the one partnered scope in a
 * sentence.
 */

const engagements = [
  {
    id: "svc-embedded",
    title: "Embedded QA/QC",
    code: "Alongside your team",
    desc: "We work inside your team and carry the inspection and test plan, the hold points and the record, so your QC manager is not carrying it alone.",
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
    title: "Owner-Side Verification",
    code: "For the owner or EPC",
    desc: "Independent verification for the owner or EPC, checking the work against the contract documents alongside the contractor's own QC program, with the traceability and closeout a financed or mission-critical build requires.",
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
    code: "Before the request goes in",
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
    desc: "Continuous and periodic inspection per the Statement of Special Inspections, by ICC-certified inspectors carrying the deputy card for the jurisdiction.",
  },
  {
    title: "Structural Observation and Threshold",
    desc: "Phased site visits with the Structural Engineer of Record, a deficiency log carried to resolution, and the final observation letter for closeout.",
  },
  {
    title: "MEP Inspection and QA",
    desc: "Mechanical, electrical and plumbing inspection and quality support, carried by senior people who have run these systems.",
  },
  {
    title: "Non-Destructive Testing",
    desc: "Ultrasonic, magnetic particle and dye penetrant testing on welds and structural connections, performed in house by our own technicians.",
  },
  {
    title: "Source and Shop Inspection",
    desc: "Fabricated steel traceability, heat numbers, weld and bolt QA at the shop before it ships, and again when it lands in the field.",
  },
  {
    title: "Materials Testing",
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
          Quality support that
          <br />
          stays on the job.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start mb-16">
          <p className="text-[16px] text-muted max-w-[620px] leading-[1.8] font-normal">
            We are brought on to strengthen the quality program on a project,
            not to replace the people already running it. Scoped to the work
            and the phase, held for the duration, and answerable for the record
            at closeout. The field scope underneath is covered by our own
            certified people.
          </p>
          <div className="border-l-2 border-gold pl-5">
            <div className="brand-label-sm text-muted mb-3">On this page</div>
            <ul className="list-none flex flex-col gap-2">
              {[
                { href: "#engagement", label: "How we are engaged" },
                { href: "#field-scope", label: "What we cover in the field" },
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

        {/* Layer 2: technical scope */}
        <div id="field-scope" className="mb-6 scroll-mt-[100px]">
          <div className="brand-label text-gold mb-2">
            What we cover in the field
          </div>
          <p className="text-[13.5px] text-muted max-w-[600px] leading-[1.7]">
            Our own certified people, on their own cards. Materials testing is
            the one scope we place with an accredited partner.
          </p>
        </div>

        <div className="border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`p-7 border-border ${
                  i % 3 !== 2 ? "lg:border-r" : ""
                } ${i % 2 !== 1 ? "sm:border-r lg:border-r-0" : ""} ${
                  i < capabilities.length - 1 ? "border-b sm:border-b" : ""
                } ${i >= capabilities.length - 3 ? "lg:border-b-0" : ""}`}
              >
                <h4 className="text-[0.95rem] font-bold text-navy leading-[1.3] mb-2">
                  {cap.title}
                </h4>
                <p className="text-[13px] text-muted leading-[1.65]">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          <div id="ch17" className="bg-sand/50 border-t border-border p-7 scroll-mt-[100px]">
            <div className="brand-label-sm text-muted mb-4">
              Every category under IBC Chapter 17
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {ch17Scope.map((c) => (
                <span
                  key={c}
                  className="text-[12px] font-medium text-charcoal bg-offwhite border border-stone/60 rounded-full px-3 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

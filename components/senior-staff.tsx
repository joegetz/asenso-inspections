import { SectionTag } from "./section-tag";

const staff = [
  {
    initials: "RG",
    name: "Raymond Getz III",
    title: "Principal and Quality Director",
    exp: "20+ years experience",
    featured: true,
    owns: "Directs the firm's quality program and is in the field at the steel and bolting peaks. Senior review on every engagement, not a name on a signature page. Most recently QC Lead on the two-year City of Hope Irvine campus program, running quality across structural and multiple trades from groundbreaking through closeout.",
    certs: [
      "AWS Certified Welding Inspector (CWI)",
      "ICC Structural Steel & Bolting Special Inspector",
      "ICC Structural Welding Special Inspector",
      "ICC Structural Masonry Special Inspector",
      "ICC Spray-Applied Fireproofing Special Inspector",
      "ICC Firestopping Credential of Learning Achievement",
      "IFC / International Firestop Council Certified",
    ],
  },
  {
    initials: "RM",
    name: "Raymond Mitchell",
    title: "QA/QC Manager",
    exp: "15+ years experience",
    featured: false,
    owns: "Holds the general contractor to the contract documents across phased construction, keeps the deficiency record and drives closeout punch items to acceptance. Covers the whole building rather than one trade: structural steel, concrete, masonry and fireproofing; electrical distribution, fire alarm and security; plumbing, HVAC and waterproofing. Currently QC Manager on a confidential data center program, after the Texas Instruments 300mm fabrication facility in Lehi, Utah, and John Wayne Airport\u2019s $220M program.",
    certs: [
      { text: "ICC Master of Special Inspection", bold: true },
      "ICC California Commercial Building Inspector",
      "ICC California Commercial Electrical Inspector",
      "ICC California Plumbing Inspector",
      "ICC Reinforced Concrete Special Inspector",
      "ICC Post-Tensioned Concrete Special Inspector",
      "ICC Structural Masonry Special Inspector",
      "ICC Soils Special Inspector",
      "ICC Structural Steel & Welding Special Inspector",
      "ICC High-Strength Bolting Special Inspector",
      "ICC Spray-Applied Fireproofing Special Inspector",
      "AWS Certified Welding Inspector (CWI)",
      "DSA Masonry Inspector",
      "DSA Shotcrete Inspector",
      "ACI Concrete Field Testing Technician, Grade I",
      "ACI Masonry Technician",
      "ACI Anchor Inspector",
      "Firestop & Fire Wrap Inspector",
    ],
  },
  {
    initials: "R4",
    name: "Raymond Getz IV",
    title: "Construction Quality Manager",
    exp: "15+ years experience",
    featured: false,
    owns: "Runs quality programs on DSA and HCAI work. Authored the governing Quality Management Plan on a healthcare program and administers three-phase control on each definable feature of work, running the preparatory meeting with the superintendent and trade foreman before work starts. USACE Construction Quality Manager. Currently Construction Quality Manager at LAX Terminal 5 with Hensel Phelps, after the $40M Ivanhoe Elementary campus for LAUSD under DSA and four years on the Sentinel program.",
    certs: [
      "USACE Construction Quality Manager",
      "AWS Certified Welding Inspector, No. 22070261",
      "ICC Reinforced Concrete Special Inspector, No. 8889657",
      "ICC Prestressed Concrete Special Inspector",
      "ICC Structural Masonry Special Inspector",
      "ICC Spray-Applied Fireproofing Special Inspector",
      "ACI Concrete Field Testing Technician, Grade I",
    ],
  },
  {
    initials: "VG",
    name: "Victor Getz",
    title: "Quality Manager",
    exp: "20+ years experience",
    featured: false,
    owns: "Twenty years on DSA school, HCAI hospital, federal and civic work, verifying the complete building against the approved documents. Owns the inspection request lookahead, coordination of special inspection and the testing laboratory, and the verified-report record, with quality issues carried to documented closure. Two LAUSD campuses and Katella High School under DSA Application No. 30-H1. Most recently QA/QC Lead on Navy facilities at Oxnard with Clark Construction.",
    certs: [
      "ICC California Commercial Building Inspector, No. 5264286",
      "ICC Reinforced Concrete Special Inspector",
      "ICC Prestressed Concrete Special Inspector",
      "ICC Structural Masonry Special Inspector",
      "ICC Spray-Applied Fireproofing Special Inspector",
      "LADBS Deputy Inspector, Wood Construction, P041321",
      "ACI Concrete Field Testing Technician, Grade I",
    ],
  },
];

export function SeniorStaff() {
  return (
    <section id="senior-staff" className="bg-sand py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Leadership</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          Who owns quality
          <br />
          on your job.
        </h2>
        <p className="text-[16px] text-muted max-w-[560px] mb-14 leading-[1.8] font-normal">
          The practice began in 2000, when two brothers moved from concrete
          placement into special inspection. It is second-generation and
          family-run. These four lead the quality program on your job, and
          they are the same people from the pre-construction meeting to the
          closeout package. Titles describe what each person manages; the certifications
          beneath each name are the carded credentials they hold. Where a card
          number is published it can be checked against the issuing registry.
        </p>
        <div className="columns-1 sm:columns-2 gap-6">
          {staff.map((s) => (
            <div
              key={s.name}
              className={`bg-offwhite border rounded-[14px] p-8 relative overflow-hidden break-inside-avoid mb-6 ${
                s.featured ? "border-gold/30" : "border-border"
              }`}
            >
              {s.featured && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
              )}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-[10px] bg-navy text-gold text-[13px] font-extrabold tracking-[0.04em] flex items-center justify-center shrink-0">
                  {s.initials}
                </div>
                <div>
                  <div className="text-[1rem] font-extrabold text-navy tracking-tight mb-0.5">
                    {s.name}
                  </div>
                  <div className="text-[12.5px] font-medium text-muted mb-[3px]">
                    {s.title}
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.06em] uppercase text-gold">
                    {s.exp}
                  </div>
                </div>
              </div>
              <p className="text-[13.5px] text-charcoal leading-[1.7] mb-6">
                {s.owns}
              </p>
              <div className="brand-label-sm text-gold mb-[0.7rem]">
                Certifications
              </div>
              <ul className="list-none flex flex-col gap-[0.45rem]">
                {s.certs.map((cert) => {
                  const text = typeof cert === "string" ? cert : cert.text;
                  const isBold = typeof cert !== "string" && cert.bold;
                  return (
                    <li
                      key={text}
                      className="flex items-start gap-2 text-[13px] text-muted leading-[1.5] before:content-[''] before:w-1 before:h-1 before:bg-gold before:shrink-0 before:mt-[6px] before:[clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
                    >
                      {isBold ? (
                        <strong className="text-charcoal font-bold">
                          {text}
                        </strong>
                      ) : (
                        text
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Advisor band */}
        <div className="mt-6 bg-navy rounded-[14px] p-7 px-8">
          <p className="text-[13.5px] text-sand/55 leading-[1.7]">
            <strong className="text-white font-semibold">
              Engineering advisory:
            </strong>{" "}
            Magdalena Cejudo, P.E., a licensed Professional Engineer providing
            structural engineering review, so field findings are backed by
            licensed judgment when a project calls for it.
          </p>
        </div>
      </div>
    </section>
  );
}

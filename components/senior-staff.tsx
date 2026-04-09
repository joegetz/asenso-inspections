import { SectionTag } from "./section-tag";

const staff = [
  {
    initials: "RG",
    name: "Raymond Getz III",
    title: "Lead Inspector",
    exp: "20+ years experience",
    featured: true,
    certs: [
      "AWS Certified Welding Inspector (CWI)",
      "ICC \u2014 Steel & Bolting, Welding, Masonry, Fireproofing",
      "ICC Firestopping Credential of Learning Achievement",
      "IFC / International Firestop Council Certified",
    ],
  },
  {
    initials: "RM",
    name: "Raymond Mitchell",
    title: "Senior Inspector",
    exp: "15+ years experience",
    featured: false,
    certs: [
      { text: "ICC Master of Special Inspection", bold: true },
      "ICC \u2014 Concrete, Prestressed, Masonry, Steel & Bolting, Welding, Fireproofing",
      "AWS Certified Welding Inspector (CWI)",
      "ACI \u2014 Anchor Inspector, Masonry & Concrete Field Tech",
      "CA Commercial Building & Plumbing Inspector",
      "Long Beach Registered Deputy Inspector",
    ],
  },
  {
    initials: "R4",
    name: "Raymond Getz IV",
    title: "Senior Inspector",
    exp: "10+ years experience",
    featured: false,
    certs: [
      "AWS Certified Welding Inspector (CWI)",
      "ICC \u2014 Concrete, Prestressed, Masonry, Fireproofing",
    ],
  },
  {
    initials: "VG",
    name: "Victor Getz",
    title: "Senior Inspector",
    exp: "10+ years experience",
    featured: false,
    certs: [
      "ICC \u2014 Concrete, Prestressed, Masonry, Fireproofing",
      "CA Commercial Building Inspector",
      "LA City Registered Deputy Inspector \u2014 Wood Construction",
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
          The people leading
          <br />
          every project.
        </h2>
        <p className="text-[16px] text-muted max-w-[560px] mb-14 leading-[1.8] font-normal">
          Our senior staff are the consistent presence on your job &mdash; from
          the pre-construction meeting to the closeout package. This isn&apos;t
          the full team, but it&apos;s who leads the work.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {staff.map((s) => (
            <div
              key={s.name}
              className={`bg-offwhite border rounded-[14px] p-8 relative overflow-hidden ${
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
              <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold mb-[0.7rem]">
                Key Certifications
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
      </div>
    </section>
  );
}

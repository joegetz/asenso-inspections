import { Layers, Home, Briefcase, Building, Download } from "lucide-react";
import { SectionTag } from "./section-tag";

const audiences = [
  {
    icon: Layers,
    title: "General Contractors",
    desc: "Fast mobilization, same-day reports, direct communication. Whether you contract us directly or we're assigned through your testing lab, you get the same responsiveness and inspector continuity.",
  },
  {
    icon: Home,
    title: "Structural Engineers of Record",
    desc: "We support your structural observation program with thorough documentation \u2014 so your stamp is backed by defensible field records throughout every construction phase.",
  },
  {
    icon: Briefcase,
    title: "Testing Labs & Prime Contractors",
    desc: "Need qualified inspectors for overflow work, DSA projects, or high-accountability jobs? We support established labs and primes with certified staff who can mobilize quickly and deliver AHJ-ready documentation.",
  },
  {
    icon: Building,
    title: "Public Agencies & Owners",
    desc: "For projects requiring embedded QC oversight, independent verification, or compliance with diversity goals. K\u201312, community college, public works, and infrastructure \u2014 our minority/SBE status supports your outreach requirements.",
  },
];

export function WhoWeServe() {
  return (
    <section id="serve" className="bg-sand py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Who We Serve</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          Projects we support.
          <br />
          People we work with.
        </h2>
        <p className="text-[16px] text-muted max-w-[560px] mb-14 leading-[1.8] font-normal">
          We work directly with GCs, engineers, owners, and agencies — or partner
          with established labs who need qualified inspectors on demanding
          projects. Either way, you get the same team, the same credentials, and
          the same responsiveness.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="bg-offwhite border border-border rounded-xl p-6"
            >
              <a.icon className="w-7 h-7 text-gold mb-3" />
              <h3 className="text-[0.95rem] font-bold text-navy mb-2">
                {a.title}
              </h3>
              <p className="text-[13px] text-muted leading-[1.7]">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Capability Statement CTA */}
        <div className="bg-offwhite border border-border rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Download className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <h3 className="text-[1.05rem] font-bold text-navy mb-1">
                Download Capability Statement
              </h3>
              <p className="text-[13.5px] text-muted leading-[1.6] max-w-[560px]">
                Full service lines, certifications, jurisdictions, ownership
                status, and project examples in a format ready for estimators,
                PMs, and agency reviewers.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-gold text-navy text-[12px] font-extrabold tracking-[0.1em] uppercase px-6 py-3 rounded-full no-underline transition-all hover:opacity-88 hover:-translate-y-px whitespace-nowrap shrink-0"
          >
            Request PDF
          </a>
        </div>
      </div>
    </section>
  );
}

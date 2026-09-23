import { Layers, Home, Briefcase, Building } from "lucide-react";
import { SectionTag } from "./section-tag";

const audiences = [
  {
    icon: Layers,
    title: "General Contractors",
    desc: "Fast mobilization, same-day reports, direct communication. Whether you contract us directly or we're assigned through your testing lab, you get the same responsiveness and the same people start to finish.",
  },
  {
    icon: Home,
    title: "Structural Engineers of Record",
    desc: "We support your structural observation program with thorough documentation, so your stamp is backed by defensible field records throughout every construction phase.",
  },
  {
    icon: Briefcase,
    title: "Testing Labs & Prime Contractors",
    desc: "Need certified quality staff for overflow work, DSA projects or high-accountability jobs? We support established labs and primes with carded people who mobilize quickly and deliver AHJ-ready documentation.",
  },
  {
    icon: Building,
    title: "Public Agencies & Owners",
    desc: "For projects requiring embedded QC oversight, independent verification, or compliance with diversity goals. K\u201312, community college, public works, and infrastructure. Our minority and SBE status supports your outreach requirements.",
  },
];

export function WhoWeServe() {
  return (
    <section id="serve" className="bg-sand py-16 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Who We Serve</SectionTag>
        <h2 className="text-[clamp(1.25rem,1.9vw,1.6rem)] font-extrabold leading-[1.15] tracking-tight text-navy mb-3">
          Who we work with.
        </h2>
        <p className="text-[14px] text-muted max-w-[580px] mb-10 leading-[1.7] font-normal">
          We work directly with GCs, engineers, owners and agencies, or we partner
          with established labs who need certified quality staff on demanding
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

        <p className="text-[13.5px] text-muted leading-[1.7] mt-10 pt-8 border-t border-stone/60">
          Estimators, PMs and agency reviewers can take the whole picture in one
          file.{" "}
          <a
            href="/asenso-capability-statement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-semibold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Download the capability statement (PDF)
          </a>
          .
        </p>
      </div>
    </section>
  );
}

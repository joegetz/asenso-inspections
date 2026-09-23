import Link from "next/link";
import { SectionTag } from "./section-tag";

const engagements = [
  {
    code: "CM · GC · Owner's Rep",
    title: "Embedded QA/QC",
    desc: "We sit inside your team and run the quality function for the duration of the job, rather than being called out per inspection.",
  },
  {
    code: "Owner · EPC",
    title: "Owner's Quality Management",
    desc: "We act as the owner's or EPC's quality team, verifying the trade contractors' work on your behalf across the full scope.",
  },
  {
    code: "Readiness",
    title: "Inspection Readiness and Evidence",
    desc: "We walk each area and attach the evidence before the request goes in, so it passes the first time instead of costing a second round.",
  },
];

export function ServicesTeaser() {
  return (
    <section className="bg-offwhite py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Services</SectionTag>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <div>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
              Construction quality,
              <br />
              run as a program.
            </h2>
            <p className="text-[16px] text-muted max-w-[580px] leading-[1.8] font-normal">
              Most firms sell inspections by the visit. We are usually retained
              to run the quality function itself, and we self-perform the field
              work underneath it.
            </p>
          </div>
          <Link
            href="/services"
            className="shrink-0 bg-navy text-offwhite text-[12px] font-extrabold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full no-underline transition-all hover:bg-[#1c3148] hover:-translate-y-px"
          >
            All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {engagements.map((e) => (
            <Link
              key={e.title}
              href="/services"
              className="bg-offwhite border border-border rounded-xl p-7 no-underline transition-colors hover:border-gold/30 group"
            >
              <span className="brand-label-sm text-gold mb-3 block">
                {e.code}
              </span>
              <h3 className="text-[1.05rem] font-extrabold text-navy leading-[1.25] mb-3 transition-colors group-hover:text-gold">
                {e.title}
              </h3>
              <p className="text-[13.5px] text-muted leading-[1.7]">{e.desc}</p>
            </Link>
          ))}
        </div>

        <p className="text-[13px] text-muted mt-8 leading-[1.7]">
          Underneath: special and deputy inspection, structural observation and
          threshold, MEP, non-destructive testing, source and shop inspection,
          and materials testing.{" "}
          <Link href="/services" className="text-navy font-semibold underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
            See the full scope
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

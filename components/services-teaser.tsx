import Link from "next/link";
import { Section } from "./section";

const engagements = [
  {
    code: "Alongside your team",
    title: "Embedded QA/QC",
    desc: "We work inside your team and carry the inspection and test plan, the hold points and the record, so your QC manager is not carrying it alone.",
  },
  {
    code: "Owner, EPC or prime",
    title: "Independent Quality Assurance",
    desc: "Quality assurance carried out independently of the party performing the work, checking it against the contract documents alongside the contractor's own QC program.",
  },
  {
    code: "Before the request goes in",
    title: "Inspection Readiness and Evidence",
    desc: "We walk each area and attach the evidence before the request goes in, so it passes the first time instead of costing a second round.",
  },
];

/**
 * A band, not a chapter. Rows with rules between them rather than cards,
 * so it does not read as another grid of boxes.
 */
export function ServicesTeaser() {
  return (
    <Section
      level="band"
      eyebrow="What we do"
      title="Quality support that stays on the job."
      intro="We are brought on to strengthen the quality program on a project, not to replace the people already running it. Retained directly by owners, CMs and general contractors, or brought in as a subconsultant by testing laboratories and prime firms."
      aside={
        <Link
          href="/services"
          className="inline-block bg-navy text-offwhite text-[12px] font-extrabold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full no-underline transition-all hover:bg-[#1c3148] hover:-translate-y-px"
        >
          All Services
        </Link>
      }
    >
      <div className="border-t border-border">
        {engagements.map((e) => (
          <Link
            key={e.title}
            href="/services"
            className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-x-8 gap-y-1 py-6 border-b border-border no-underline group items-baseline"
          >
            <div>
              <div className="brand-label-sm text-gold mb-1">{e.code}</div>
              <h3 className="text-[1rem] font-extrabold text-navy leading-[1.25] transition-colors group-hover:text-gold">
                {e.title}
              </h3>
            </div>
            <p className="text-[13.5px] text-muted leading-[1.7] max-w-[620px]">
              {e.desc}
            </p>
          </Link>
        ))}
      </div>

      <p className="text-[13px] text-muted mt-6 leading-[1.7] max-w-[760px]">
        Underneath: special and deputy inspection, structural observation and
        threshold, MEP, non-destructive testing, source and shop inspection.
        Materials testing is placed with our accredited partner.{" "}
        <Link
          href="/services"
          className="text-navy font-semibold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
        >
          See the full scope
        </Link>
        .
      </p>
    </Section>
  );
}

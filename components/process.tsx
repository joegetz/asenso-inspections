import { SectionTag } from "./section-tag";

const steps = [
  {
    num: "01",
    title: "SSI & Drawing Review",
    desc: "We review the Statement of Special Inspections, structural drawings, and specs before the first pour. No surprises in the field.",
  },
  {
    num: "02",
    title: "Pre-Construction Meeting",
    desc: "We align with the GC, SEOR, and AHJ on inspection scope, hold points, phasing, and reporting expectations before work begins.",
  },
  {
    num: "03",
    title: "Field Inspections",
    desc: "On-site per your SSI \u2014 continuous or periodic. Same-day digital field reports. Same inspector every visit.",
  },
  {
    num: "04",
    title: "Closeout Package",
    desc: "Final summary report, all field logs, NCR resolution, and observation letters \u2014 compiled and ready for AHJ submittal.",
  },
];

function DotPattern() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 900 500"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id="dot"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="15" cy="15" r="1" fill="#EAE2D6" opacity=".055" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot)" />
      </svg>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-navy py-24 px-8 relative overflow-hidden">
      <DotPattern />
      <div className="max-w-[--container-site] mx-auto relative z-1">
        <SectionTag>How We Work</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-white mb-4">
          SSI review to permit closeout.
        </h2>
        <p className="text-[16px] text-sand/[0.48] max-w-[560px] mb-14 leading-[1.8] font-normal">
          Structured around your project schedule &mdash; not a lab&apos;s
          dispatch queue.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="text-[2.8rem] font-extrabold tracking-tight text-gold/[0.18] leading-none mb-[1.2rem]">
                {step.num}
              </div>
              <div className="w-8 h-px bg-gold mb-[1.2rem] opacity-40" />
              <h4 className="text-[0.9rem] font-bold text-white mb-[0.45rem]">
                {step.title}
              </h4>
              <p className="text-[13px] text-sand/[0.48] leading-[1.7]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

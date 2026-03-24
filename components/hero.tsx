import { Shield, Clock, FileText, Briefcase } from "lucide-react";

const jurisdictions = [
  "LA City",
  "LA County",
  "Orange County",
  "Riverside County",
  "San Bernardino County",
  "Long Beach",
];

const credPills = [
  {
    icon: Shield,
    label: "ICC \u00b7 AWS \u00b7 ACI \u00b7 IFC Certified",
    sub: "Full IBC Ch. 17 scope coverage across the team",
  },
  {
    icon: Clock,
    label: "24\u201348 Hour Mobilization",
    sub: "7 days a week across Southern California",
  },
  {
    icon: FileText,
    label: "Same-Day Field Reports",
    sub: "Digital delivery, AHJ-ready documentation",
  },
  {
    icon: Briefcase,
    label: "Deep DSA Experience",
    sub: "K\u201312, community college & public works",
  },
];

function HexPattern() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 900 700"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id="geo"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,2 58,17 58,35 30,50 2,35 2,17"
              fill="none"
              stroke="#EAE2D6"
              strokeWidth=".6"
              opacity=".04"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center bg-navy relative overflow-hidden py-24 px-8"
    >
      <HexPattern />
      <div className="max-w-[--container-site] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-1">
        {/* Left column */}
        <div>
          <div className="text-[10px] font-bold tracking-[0.34em] uppercase text-gold mb-6 flex items-center gap-3 before:content-[''] before:block before:w-7 before:h-px before:bg-gold">
            ICC-Certified &middot; Southern California
          </div>
          <h1 className="text-[clamp(2.8rem,4.8vw,4.2rem)] font-extrabold leading-[1.04] tracking-tight text-white mb-6">
            Certified expertise.
            <br />
            Reliable delivery.
            <br />
            <em className="not-italic text-gold">Every project.</em>
          </h1>
          <p className="text-[16px] text-sand/[0.58] leading-[1.85] mb-[0.85rem] max-w-[500px] font-normal">
            Asenso provides ICC-certified special inspections, structural
            observation, threshold inspections, and QA/QC services &mdash; with a
            credential stack deep enough to cover any IBC Chapter 17 scope, and a
            team responsive enough to move at your pace.
          </p>
          <p className="text-[13px] text-gold/65 leading-[1.65] mb-[2.2rem] max-w-[480px] italic">
            Family-owned and family-staffed &mdash; we&apos;ve built this firm on
            the certifications, the relationships, and the reputation we&apos;re
            proud to put our name on.
          </p>
          <div className="flex gap-4 flex-wrap mb-[2.4rem]">
            <a
              href="#contact"
              className="bg-gold text-navy text-[12px] font-extrabold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full no-underline transition-all hover:opacity-88 hover:-translate-y-px"
            >
              Start a Project
            </a>
            <a
              href="#credentials"
              className="bg-transparent text-sand/75 text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full border-[1.5px] border-sand/20 no-underline transition-colors hover:border-sand/50"
            >
              View Credentials
            </a>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-sand/[0.28] mr-[0.2rem]">
              Licensed in
            </span>
            {jurisdictions.map((j) => (
              <span
                key={j}
                className="text-[11px] font-semibold text-sand/50 bg-white/5 border border-white/[0.08] rounded-full px-3 py-1 whitespace-nowrap"
              >
                {j}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — credential pills (hidden on tablet and below) */}
        <div className="hidden lg:flex flex-col gap-[0.85rem]">
          {credPills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-start gap-[14px] bg-white/5 border border-white/[0.08] rounded-[10px] p-4 px-[1.2rem]"
            >
              <pill.icon className="w-[18px] h-[18px] text-gold shrink-0 mt-0.5" />
              <div>
                <div className="text-[12px] font-bold text-white mb-0.5">
                  {pill.label}
                </div>
                <div className="text-[11px] text-sand/[0.42] leading-[1.4]">
                  {pill.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

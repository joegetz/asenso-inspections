import { Shield, Clock, FileText, Briefcase } from "lucide-react";
import { GayamanPanel } from "./motif";

const jurisdictions = [
  "Los Angeles",
  "Orange County",
  "San Diego",
  "Dallas–Fort Worth",
  "Austin",
  "Salt Lake City",
  "Denver",
];

const credPills = [
  {
    icon: Shield,
    label: "ICC · AWS · ACI · IFC",
    sub: "Full IBC Ch. 17 coverage",
  },
  {
    icon: Clock,
    label: "24–48 Hour Response",
    sub: "CA · TX · Mountain West",
  },
  {
    icon: FileText,
    label: "Same-Day Reports",
    sub: "AHJ-ready documentation",
  },
  {
    icon: Briefcase,
    label: "DSA Experience",
    sub: "K–12 · College · Public Works",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center bg-navy relative overflow-hidden py-24 px-8"
    >
      {/* The one pattern moment on this surface: gayaman, bounded to the
          right edge, with clean space beside it. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[26px] opacity-40 pointer-events-none hidden md:block"
      >
        <GayamanPanel />
      </div>

      <div className="max-w-[--container-site] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center relative z-1">
        {/* Left column */}
        <div>
          <div className="brand-label text-gold mb-6 flex items-center gap-3 before:content-[''] before:block before:w-7 before:h-px before:bg-gold">
            Construction Quality &middot; California, Texas &amp; the Mountain West
          </div>
          <h1 className="text-[clamp(2.8rem,4.8vw,4.2rem)] font-extrabold leading-[1.04] tracking-tight text-white mb-5">
            Quality oversight for
            <br />
            high-accountability
            <br />
            <em className="not-italic text-gold">construction.</em>
          </h1>
          <p className="text-[13px] font-bold tracking-[0.16em] uppercase text-sand/[0.55] mb-[1.6rem]">
            Rigorous. Responsive. Transparent.
          </p>
          <p className="text-[16px] text-sand/[0.58] leading-[1.85] mb-[2.2rem] max-w-[520px] font-normal">
            Special inspection, structural observation and embedded QA/QC,
            from the first drawing review through the closeout package. We work
            alongside the team already on your project, and every condition we
            raise is tracked until it is verified closed.
          </p>
          <div className="flex gap-4 flex-wrap mb-[2.4rem]">
            <a
              href="#contact"
              className="bg-gold text-navy text-[12px] font-extrabold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full no-underline transition-all hover:opacity-88 hover:-translate-y-px"
            >
              Discuss a Project
            </a>
            <a
              href="/leadership"
              className="bg-transparent text-sand/75 text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full border-[1.5px] border-sand/20 no-underline transition-colors hover:border-sand/50"
            >
              Meet the Team
            </a>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="brand-label-sm text-sand/[0.28] mr-[0.2rem]">
              Working in
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

        {/* Right column: credential pills (hidden on tablet and below) */}
        <div className="hidden lg:flex flex-col gap-[0.85rem]">
          {credPills.map((pill) => (
            <div
              key={pill.label}
              className="flex items-start gap-[14px] bg-white/5 border border-white/[0.08] rounded-[10px] p-4 px-[1.2rem]"
            >
              <pill.icon className="w-[18px] h-[18px] text-gold shrink-0 mt-0.5" />
              <div>
                <div className="text-[12px] font-bold text-white mb-0.5 brand-nums">
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

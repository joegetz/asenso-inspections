import Link from "next/link";
import {
  GraduationCap,
  Plane,
  Heart,
  Shield,
  Droplets,
  Factory,
} from "lucide-react";

/**
 * Evidence at a glance, directly under the hero. No headline, no intro.
 * A strip, not a chapter.
 */

const stats = [
  { figure: "20+", label: "Years senior field experience" },
  { figure: "~30", label: "Inspector network" },
  { figure: "24–48", label: "Hours to mobilize" },
  { figure: "3", label: "Registered jurisdictions" },
];

const sectors = [
  { icon: Heart, label: "Healthcare / HCAI" },
  { icon: Plane, label: "Aviation" },
  { icon: Factory, label: "Advanced Manufacturing" },
  { icon: Shield, label: "Federal / Defense" },
  { icon: GraduationCap, label: "Education / DSA" },
  { icon: Droplets, label: "Water / Wastewater" },
];

export function ProofBand() {
  return (
    <div className="bg-offwhite border-b border-border">
      <div className="max-w-[--container-site] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 py-9">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <span className="text-[1.7rem] font-extrabold text-navy leading-none tracking-tight brand-nums shrink-0">
                {s.figure}
              </span>
              <span className="text-[12px] text-muted leading-[1.35]">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-7 flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="brand-label-sm text-muted shrink-0">
            Sectors we work in
          </span>
          {sectors.map((s) => (
            <Link
              key={s.label}
              href="/projects"
              className="flex items-center gap-2 no-underline group"
            >
              <s.icon className="w-[18px] h-[18px] text-gold shrink-0" />
              <span className="text-[12.5px] font-semibold text-navy transition-colors group-hover:text-gold whitespace-nowrap">
                {s.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

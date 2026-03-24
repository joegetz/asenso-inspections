import { Layers, Home, Briefcase } from "lucide-react";
import { SectionTag } from "./section-tag";

const audiences = [
  {
    icon: Layers,
    title: "General Contractors",
    desc: "We work around your pour schedule, not the other way around. Reach us directly, same-day reports, no dispatch lag. Hold points don\u2019t stall your job.",
  },
  {
    icon: Home,
    title: "Architects & Engineers of Record",
    desc: "We support your structural observation program and keep documentation tight \u2014 so your stamp is backed by a thorough, defensible field record every phase.",
  },
  {
    icon: Briefcase,
    title: "Public Agencies & DSA Projects",
    desc: "K\u201312, community college, public works. We know the documentation rigor and agency coordination those projects demand. Our minority/SBE status supports your outreach goals.",
  },
];

export function WhoWeServe() {
  return (
    <section id="serve" className="bg-sand py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Who We Serve</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          Built for the people running the job.
        </h2>
        <p className="text-[16px] text-muted max-w-[560px] mb-14 leading-[1.8] font-normal">
          GC supers, engineers of record, and public agency PMs &mdash; people
          who need an inspector that&apos;s certified, prepared, and reachable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="bg-offwhite border border-border rounded-xl p-8"
            >
              <a.icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-[1rem] font-bold text-navy mb-2">{a.title}</h3>
              <p className="text-[13.5px] text-muted leading-[1.7]">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Users, Clock, Shield, Monitor } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Founder-led firm",
    desc: "You work with the principals \u2014 not an account manager at a national lab.",
  },
  {
    icon: Clock,
    title: "24\u201348 hr scheduling",
    desc: "Fast mobilization when your schedule can\u2019t wait for a lab\u2019s dispatch queue.",
  },
  {
    icon: Shield,
    title: "Inspector continuity",
    desc: "The same certified inspector on your project, start to finish. No rotating bodies.",
  },
  {
    icon: Monitor,
    title: "AHJ-ready reports",
    desc: "Same-day digital field reports formatted for the building department, SEOR, and owner.",
  },
];

export function DiffBand() {
  return (
    <div className="bg-sand py-[2.8rem] px-8">
      <div className="max-w-[--container-site] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-[0.35rem]">
            <item.icon className="w-[22px] h-[22px] text-gold mb-[0.4rem]" />
            <strong className="text-[0.9rem] font-bold text-navy">
              {item.title}
            </strong>
            <span className="text-[13px] text-muted leading-[1.5]">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

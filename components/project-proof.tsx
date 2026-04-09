import { Building2, GraduationCap, Plane, Heart, Shield } from "lucide-react";

const sectors = [
  {
    icon: Plane,
    label: "Aviation",
    example: "John Wayne Airport",
  },
  {
    icon: Heart,
    label: "Healthcare",
    example: "City of Hope · CHOC · Hoag",
  },
  {
    icon: GraduationCap,
    label: "Education / DSA",
    example: "K–12 · Community College",
  },
  {
    icon: Shield,
    label: "Federal / Defense",
    example: "Vandenberg AFB",
  },
  {
    icon: Building2,
    label: "Public Works",
    example: "County & Municipal",
  },
];

export function ProjectProof() {
  return (
    <div className="bg-offwhite py-16 px-8 border-y border-border">
      <div className="max-w-[--container-site] mx-auto">
        <div className="text-center mb-10">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted mb-2">
            Trusted on
          </div>
          <h3 className="text-[1.4rem] font-extrabold text-navy tracking-tight">
            High-accountability projects across Southern California
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-lg transition-colors hover:bg-sand/50"
            >
              <sector.icon className="w-7 h-7 text-gold" />
              <div>
                <div className="text-[0.85rem] font-bold text-navy mb-1">
                  {sector.label}
                </div>
                <div className="text-[11px] text-muted leading-[1.4]">
                  {sector.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

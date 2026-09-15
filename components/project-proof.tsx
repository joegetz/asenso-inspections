import {
  Building2,
  GraduationCap,
  Plane,
  Heart,
  Shield,
  Droplets,
  Factory,
} from "lucide-react";

const sectors = [
  {
    icon: Plane,
    label: "Aviation",
    example: "JWA · LAX · San Diego Int'l",
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
    example: "Sentinel · Vandenberg AFB",
  },
  {
    icon: Factory,
    label: "Industrial",
    example: "Semiconductor · Process",
  },
  {
    icon: Droplets,
    label: "Water / Wastewater",
    example: "Treatment · Pipe Welding",
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
            Team experience across
          </div>
          <h3 className="text-[1.4rem] font-extrabold text-navy tracking-tight">
            High-accountability sectors across California, Texas &amp; the Mountain West
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {sectors.map((sector) => (
            <a
              key={sector.label}
              href="#projects"
              className="w-[136px] flex flex-col items-center text-center gap-3 p-4 rounded-lg transition-all hover:bg-sand/50 hover:-translate-y-0.5 no-underline group cursor-pointer"
            >
              <sector.icon className="w-7 h-7 text-gold transition-transform group-hover:scale-110" />
              <div>
                <div className="text-[0.85rem] font-bold text-navy mb-1 transition-colors group-hover:text-gold">
                  {sector.label}
                </div>
                <div className="text-[11px] text-muted leading-[1.4]">
                  {sector.example}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

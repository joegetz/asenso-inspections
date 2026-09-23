import {
  GraduationCap,
  Plane,
  Heart,
  Shield,
  Droplets,
  Factory,
} from "lucide-react";

const sectors = [
  {
    icon: Shield,
    label: "Federal / Defense",
    example: "Sentinel · Vandenberg SFB",
  },
  { icon: Factory, label: "Industrial", example: "Semiconductor · Process" },
  {
    icon: Heart,
    label: "Healthcare",
    example: "City of Hope · CHOC · Hoag",
  },
  { icon: Plane, label: "Aviation", example: "JWA · LAX · San Diego Int'l" },
  {
    icon: GraduationCap,
    label: "Education / DSA",
    example: "K–12 · Community College",
  },
  {
    icon: Droplets,
    label: "Water / Wastewater",
    example: "Treatment · Pipe welding",
  },
];

/** Sector proof inside the navy projects section. The light treatment now
 * lives in ProofBand on home, so this is the dark variant only. */
export function SectorStrip({ eyebrow }: { eyebrow?: string }) {
  return (
    <div className="border-y border-white/[0.08] py-8 mb-12">
      {eyebrow && <div className="brand-label text-gold mb-7">{eyebrow}</div>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-7">
        {sectors.map((sector) => (
          <div key={sector.label} className="flex flex-col items-start gap-3">
            <sector.icon className="w-7 h-7 text-gold shrink-0" />
            <div>
              <div className="text-[0.85rem] font-bold text-white mb-1">
                {sector.label}
              </div>
              <div className="text-[11px] text-sand/[0.38] leading-[1.4]">
                {sector.example}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

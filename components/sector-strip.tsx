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
    icon: Heart,
    label: "Healthcare / HCAI",
    example: "City of Hope \u00b7 CHOC \u00b7 Hoag",
  },
  { icon: Plane, label: "Aviation", example: "LAX \u00b7 JWA \u00b7 San Diego Int'l" },
  {
    icon: Factory,
    label: "Advanced Manufacturing",
    example: "Semiconductor \u00b7 Data centers",
  },
  {
    icon: Shield,
    label: "Federal / Defense",
    example: "Sentinel \u00b7 Vandenberg SFB",
  },
  {
    icon: GraduationCap,
    label: "Education / DSA",
    example: "K\u201312 \u00b7 Community college",
  },
  {
    icon: Droplets,
    label: "Water / Wastewater",
    example: "Treatment \u00b7 Pipe welding",
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

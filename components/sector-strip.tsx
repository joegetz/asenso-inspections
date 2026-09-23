import Link from "next/link";
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

/**
 * Sector proof. "light" sits on the off-white page ground as its own band;
 * "dark" sits inside the navy projects section as a header strip.
 */
export function SectorStrip({
  variant = "light",
  heading,
  eyebrow,
}: {
  variant?: "light" | "dark";
  heading?: string;
  eyebrow?: string;
}) {
  const dark = variant === "dark";

  return (
    <div
      className={
        dark
          ? "border-y border-white/[0.08] py-8 mb-12"
          : "bg-offwhite py-16 px-8 border-y border-border"
      }
    >
      <div className={dark ? "" : "max-w-[--container-site] mx-auto"}>
        {(eyebrow || heading) && (
          <div className={dark ? "mb-7" : "text-center mb-10"}>
            {eyebrow && (
              <div
                className={`brand-label mb-2 ${
                  dark ? "text-gold" : "text-muted"
                }`}
              >
                {eyebrow}
              </div>
            )}
            {heading && (
              <h3
                className={`text-[1.4rem] font-extrabold tracking-tight ${
                  dark ? "text-white" : "text-navy"
                }`}
              >
                {heading}
              </h3>
            )}
          </div>
        )}

        <div
          className={
            dark
              ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-7"
              : "flex flex-wrap justify-center gap-x-4 gap-y-2"
          }
        >
          {sectors.map((sector) => {
            const inner = (
              <>
                <sector.icon
                  className={`w-7 h-7 text-gold shrink-0 transition-transform group-hover:scale-110 ${
                    dark ? "" : ""
                  }`}
                />
                <div>
                  <div
                    className={`text-[0.85rem] font-bold mb-1 transition-colors group-hover:text-gold ${
                      dark ? "text-white" : "text-navy"
                    }`}
                  >
                    {sector.label}
                  </div>
                  <div
                    className={`text-[11px] leading-[1.4] ${
                      dark ? "text-sand/[0.38]" : "text-muted"
                    }`}
                  >
                    {sector.example}
                  </div>
                </div>
              </>
            );

            return dark ? (
              <div
                key={sector.label}
                className="flex flex-col items-start gap-3 group"
              >
                {inner}
              </div>
            ) : (
              <Link
                key={sector.label}
                href="/projects"
                className="w-[136px] flex flex-col items-center text-center gap-3 p-4 rounded-lg transition-all hover:bg-sand/50 hover:-translate-y-0.5 no-underline group cursor-pointer"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

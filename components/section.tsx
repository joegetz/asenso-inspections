import { SectionTag } from "./section-tag";

/**
 * Three weights, and only three. Before this existed every section was a
 * chapter: eyebrow, huge headline, intro paragraph, grid of cards. Four of
 * those in a row is monotony, not hierarchy.
 *
 *   chapter  the argument of the page. At most two per route.
 *   band     supporting material. Inline heading, no intro paragraph.
 *   strip    evidence at a glance. Eyebrow only, or nothing.
 */

type Level = "chapter" | "band" | "strip";
type Ground = "offwhite" | "sand" | "navy";

const pad: Record<Level, string> = {
  chapter: "py-24",
  band: "py-16",
  strip: "py-10",
};

const grounds: Record<Ground, string> = {
  offwhite: "bg-offwhite",
  sand: "bg-sand",
  navy: "bg-navy",
};

export function Section({
  level = "chapter",
  ground = "offwhite",
  id,
  eyebrow,
  title,
  intro,
  aside,
  children,
  className,
}: {
  level?: Level;
  ground?: Ground;
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const dark = ground === "navy";

  return (
    <section
      id={id}
      className={`${grounds[ground]} ${pad[level]} px-8 ${
        level === "strip" ? "border-y border-border" : ""
      } ${className ?? ""}`}
    >
      <div className="max-w-[--container-site] mx-auto">
        {(eyebrow || title) && (
          <div
            className={
              level === "chapter"
                ? "mb-12"
                : "mb-8 flex flex-wrap items-end justify-between gap-6"
            }
          >
            <div>
              {eyebrow &&
                (level === "chapter" ? (
                  <SectionTag>{eyebrow}</SectionTag>
                ) : (
                  <div
                    className={`brand-label mb-2 ${
                      dark ? "text-gold" : "text-gold"
                    }`}
                  >
                    {eyebrow}
                  </div>
                ))}
              {title && (
                <h2
                  className={`font-extrabold tracking-tight ${
                    level === "chapter"
                      ? "text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.07]"
                      : "text-[clamp(1.25rem,1.9vw,1.6rem)] leading-[1.15]"
                  } ${dark ? "text-white" : "text-navy"} ${
                    intro && level === "chapter" ? "mb-4" : ""
                  }`}
                >
                  {title}
                </h2>
              )}
              {intro && level === "chapter" && (
                <p
                  className={`text-[16px] max-w-[620px] leading-[1.8] font-normal ${
                    dark ? "text-sand/[0.48]" : "text-muted"
                  }`}
                >
                  {intro}
                </p>
              )}
              {intro && level !== "chapter" && (
                <p
                  className={`text-[14px] max-w-[560px] leading-[1.7] mt-2 ${
                    dark ? "text-sand/[0.45]" : "text-muted"
                  }`}
                >
                  {intro}
                </p>
              )}
            </div>
            {aside && <div className="shrink-0">{aside}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

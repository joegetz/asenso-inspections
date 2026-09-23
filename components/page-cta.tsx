import Link from "next/link";

/**
 * Closing band. Deliberately on the sand ground: it sits directly above the
 * navy footer, and two navy surfaces in a row merge into one shapeless block.
 * No motif here either, because the footer carries the gayaman rule a few
 * hundred pixels below and one pattern moment per surface is the rule.
 */
export function PageCta({
  heading,
  body,
  secondary,
}: {
  heading: string;
  body: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-sand px-8 py-20 border-t border-stone/60">
      <div className="max-w-[--container-site] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
        <div>
          <h2 className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight text-navy mb-4">
            {heading}
          </h2>
          <p className="text-[15px] text-muted leading-[1.8] max-w-[540px]">
            {body}
          </p>
        </div>
        <div className="flex gap-4 flex-wrap lg:justify-end">
          <Link
            href="/#contact"
            className="bg-navy text-offwhite text-[12px] font-extrabold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full no-underline transition-all hover:bg-[#1c3148] hover:-translate-y-px"
          >
            Discuss a Project
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="bg-transparent text-charcoal text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full border-[1.5px] border-stone no-underline transition-colors hover:border-navy"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

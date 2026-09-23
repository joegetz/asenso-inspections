import Link from "next/link";
import { GayamanRule } from "./motif";

export function PageCta({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="bg-navy px-8 py-20">
      <div className="max-w-[--container-site] mx-auto">
        <div aria-hidden="true" className="opacity-45 mb-10 max-w-[180px]">
          <GayamanRule />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            <h2 className="text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold leading-[1.12] tracking-tight text-white mb-4">
              {heading}
            </h2>
            <p className="text-[15px] text-sand/[0.5] leading-[1.8] max-w-[540px]">
              {body}
            </p>
          </div>
          <div className="flex gap-4 flex-wrap lg:justify-end">
            <Link
              href="/#contact"
              className="bg-gold text-navy text-[12px] font-extrabold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full no-underline transition-all hover:opacity-88 hover:-translate-y-px"
            >
              Discuss a Project
            </Link>
            <Link
              href="/leadership"
              className="bg-transparent text-sand/75 text-[12px] font-bold tracking-[0.1em] uppercase px-7 py-[13px] rounded-full border-[1.5px] border-sand/20 no-underline transition-colors hover:border-sand/50"
            >
              See the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { SectionTag } from "./section-tag";

const stats = [
  { value: "Since 2000", label: "Inspecting the work that carries load" },
  { value: "25+", label: "Certified inspectors across the region" },
  { value: "2nd Gen", label: "Family-owned, minority-owned, SBE" },
  { value: "4 States", label: "CA · AZ · NV · UT project experience" },
];

export function FirmStory() {
  return (
    <section id="firm" className="bg-offwhite py-24 px-8 border-b border-border">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>The Firm</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4 max-w-[720px]">
          Built by people who have done
          <br />
          the work they inspect.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start mt-10">
          {/* Narrative */}
          <div className="flex flex-col gap-5">
            <p className="text-[16px] text-charcoal leading-[1.85]">
              Asenso&rsquo;s quality practice began in 2000, when two brothers
              moved from concrete placement and real estate into special
              inspections. That origin is the firm&rsquo;s edge. An inspector who
              has run the pour and placed the steel sees the problem coming before
              it ever reaches a report &mdash; and a checklist cannot teach that.
            </p>
            <p className="text-[16px] text-charcoal leading-[1.85]">
              A quarter-century on, Asenso is second-generation and family-run:
              more than twenty-five certified inspectors across Southern
              California and the Southwest. A national lab sends whoever is free
              that week. We do the opposite. The same senior inspector stays on
              your job from the first pour to the closeout package, with his own
              name on every report.
            </p>
            <p className="text-[16px] text-charcoal leading-[1.85]">
              That commitment comes from who we are. Our family&rsquo;s Filipino
              and Samoan roots carry a real pride in the work and a duty to bring
              the next generation up behind us. Those were family values before
              they were business ones &mdash; and they are why our name on a
              report still means something.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 my-3">
              <p className="text-[1.15rem] font-bold text-navy leading-[1.5] tracking-tight">
                &ldquo;We have run the pour and placed the steel, so we know what
                right looks like before we are asked to certify it.&rdquo;
              </p>
            </blockquote>

            <p className="text-[14px] text-muted leading-[1.8]">
              Today the firm is led by{" "}
              <strong className="text-charcoal font-semibold">
                Joseph Getz, President
              </strong>
              , who pairs the family&rsquo;s field expertise with a modern
              operating model &mdash; same-day digital field reports, a
              single document-control workflow with full traceability, and the
              systems discipline that lets us deploy a credentialed roster on
              demand. Rigorous in the field, transparent in the record.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-4">
            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-sand/60 border border-border rounded-xl p-6"
              >
                <div className="text-[1.9rem] font-extrabold text-navy leading-none tracking-tight mb-2">
                  {s.value}
                </div>
                <div className="text-[12.5px] text-muted leading-[1.5]">
                  {s.label}
                </div>
              </div>
            ))}
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-gold text-center mt-1">
              Rigorous · Responsive · Transparent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

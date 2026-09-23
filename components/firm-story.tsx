import { SectionTag } from "./section-tag";

export function FirmStory() {
  return (
    <section id="firm" className="bg-offwhite pt-14 pb-16 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <div className="max-w-[760px]">
          <SectionTag>The Firm</SectionTag>
          <h2 className="text-[clamp(1.5rem,2.2vw,1.95rem)] font-extrabold leading-[1.12] tracking-tight text-navy mb-5">
            Built by people who have done the work they inspect.
          </h2>

          <p className="text-[15px] text-charcoal leading-[1.8] mb-4">
            Asenso&rsquo;s quality practice began in 2000, when two brothers moved
            from concrete placement into special inspections. An inspector who has
            run the pour and placed the steel sees the problem coming before it
            reaches a report. A checklist cannot teach that.
          </p>

          <p className="text-[15px] text-charcoal leading-[1.8] mb-6">
            A quarter-century on, the firm is second-generation and family-run,
            with Filipino and Samoan roots that carry a real pride in the work.
            Reputation is the whole business when the name on the report is also
            the name on the door.
          </p>

          <blockquote className="border-l-2 border-gold pl-5 mb-6">
            <p className="text-[1.05rem] font-bold text-navy leading-[1.5] tracking-tight">
              &ldquo;We have run the pour and placed the steel, so we know what
              right looks like before we are asked to certify it.&rdquo;
            </p>
          </blockquote>

          <p className="text-[13px] text-muted leading-[1.75]">
            Led by{" "}
            <strong className="text-charcoal font-semibold">
              Joseph Getz, President
            </strong>
            , pairing the family&rsquo;s field expertise with a modern operating
            model: same-day digital field reports, single-workflow document
            control, and the systems discipline to deploy a credentialed roster
            on demand.
          </p>
        </div>
      </div>
    </section>
  );
}

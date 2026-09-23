import { SectionTag } from "./section-tag";

/**
 * The bench, shown as capacity rather than as a list of people.
 * A GC looking past the named leadership is asking "can you cover my
 * program", and a number plus a coverage map answers that better than
 * three more profile cards.
 */

const stats = [
  { figure: "~30", label: "Inspector network", sub: "Family core, plus surge" },
  { figure: "3", label: "Registered jurisdictions", sub: "LADBS · Long Beach · LA County" },
  { figure: "24–48", label: "Hours to mobilize", sub: "Typical scheduling response" },
];

const categories = [
  {
    title: "Structural steel and welding",
    sub: "Including high-strength bolting",
    basis: "AWS CWI",
    self: true,
  },
  {
    title: "Reinforced concrete",
    sub: "Rebar, anchors and epoxy dowels, post-tensioned",
    basis: "ICC · ACI",
    self: true,
  },
  {
    title: "Structural and reinforced masonry",
    sub: "Including shotcrete under DSA approval",
    basis: "ICC · DSA",
    self: true,
  },
  {
    title: "Sprayed fire-resistive materials",
    sub: "Fireproofing and firestopping",
    basis: "ICC · IFC",
    self: true,
  },
  {
    title: "Non-destructive testing",
    sub: "UT, MT and PT on structural welds",
    basis: "ASNT · AWS",
    self: true,
  },
  {
    title: "Soils, compaction and laboratory testing",
    sub: "Placed with our accredited partner, not self-performed",
    basis: "ISO/IEC 17025 partner",
    self: false,
  },
];

export function Coverage() {
  return (
    <section id="coverage" className="bg-navy py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Bench and Coverage</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-white mb-4">
          Depth behind
          <br />
          the named team.
        </h2>
        <p className="text-[16px] text-sand/[0.48] max-w-[620px] mb-14 leading-[1.8] font-normal">
          The quality managers above lead the program. Behind them is a wider
          bench of carded inspectors and a surge network for the peaks, so
          coverage does not thin out when three trades run at once.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-white/[0.08] py-8 mb-14">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[2.4rem] font-extrabold text-gold leading-none tracking-tight mb-2 brand-nums">
                {s.figure}
              </div>
              <div className="text-[13px] font-bold text-white mb-1">
                {s.label}
              </div>
              <div className="text-[12px] text-sand/[0.4] leading-[1.4]">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="brand-label text-gold mb-6">
          Special inspection categories we cover
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7 mb-12">
          {categories.map((c) => (
            <div key={c.title}>
              <div className="flex items-start gap-2 mb-1">
                <span
                  className={`text-[13px] leading-[1.4] shrink-0 ${
                    c.self ? "text-gold" : "text-sand/30"
                  }`}
                  aria-hidden="true"
                >
                  {c.self ? "✓" : "·"}
                </span>
                <h4 className="text-[0.92rem] font-bold text-white leading-[1.35]">
                  {c.title}
                </h4>
              </div>
              <div className="text-[12.5px] text-sand/[0.45] leading-[1.6] pl-[18px] mb-1">
                {c.sub}
              </div>
              <div className="brand-label-sm text-gold/70 pl-[18px]">
                {c.basis}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.08] pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <p className="text-[13.5px] text-sand/[0.5] leading-[1.75]">
            <strong className="text-white font-semibold">
              Registered coverage.
            </strong>{" "}
            Deputy and special inspector registrations are held individually and
            listed on each building department&rsquo;s public registry. Orange
            County, San Diego, Riverside and San Bernardino are registerable on
            demand for a defined scope and start window.
          </p>
          <p className="text-[13.5px] text-sand/[0.5] leading-[1.75]">
            <strong className="text-white font-semibold">
              Named people at proposal.
            </strong>{" "}
            Category coverage is shared openly for teaming and
            pre-qualification. Named quality managers, deputy card numbers and
            full resumes are provided when we are formally proposed on a
            defined scope, matched to that project&rsquo;s jurisdiction and
            schedule.
          </p>
        </div>
      </div>
    </section>
  );
}

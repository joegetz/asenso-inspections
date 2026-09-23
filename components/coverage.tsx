import { SectionTag } from "./section-tag";

/**
 * The bench, shown as capacity rather than as a list of people.
 * A GC looking past the named leadership is asking "can you cover my
 * program", and a number plus a coverage map answers that better than
 * three more profile cards.
 */

const bodies = [
  { body: "ICC", label: "Certified" },
  { body: "AWS", label: "Welding" },
  { body: "ACI", label: "Field & anchor" },
  { body: "IFC", label: "Firestop" },
  { body: "DSA", label: "Masonry \u00b7 shotcrete" },
  { body: "USACE", label: "Quality manager" },
];

const registries = [
  { authority: "City of Los Angeles", type: "Registered Deputy Inspector" },
  { authority: "City of Long Beach", type: "Registered Deputy Inspector" },
  { authority: "County of Los Angeles", type: "Deputy / Special Inspector" },
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
    sub: "Placed with our accredited partner",
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
          bench of carded inspectors and a surge network of around thirty, so
          coverage does not thin out when three trades run at once. These are
          the bodies we carry credentials from and the categories we cover.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 border-y border-white/[0.08] py-7 mb-14">
          {bodies.map((b) => (
            <div
              key={b.body}
              className="bg-white/[0.04] border border-white/[0.08] rounded-[10px] py-4 px-3 text-center"
            >
              <div className="text-[0.95rem] font-extrabold text-white tracking-tight mb-0.5">
                {b.body}
              </div>
              <div className="text-[10.5px] text-sand/[0.4] leading-[1.3]">
                {b.label}
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
          <div>
            <div className="brand-label-sm text-gold mb-3">
              Registered deputy coverage
            </div>
            <ul className="list-none flex flex-col gap-2 mb-4">
              {registries.map((r) => (
                <li
                  key={r.authority}
                  className="flex items-baseline justify-between gap-4 text-[13px] border-b border-white/[0.06] pb-2"
                >
                  <span className="text-white font-semibold">
                    {r.authority}
                  </span>
                  <span className="text-sand/[0.42] text-[12px] text-right">
                    {r.type}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[12.5px] text-sand/[0.42] leading-[1.7]">
              Registrations are held individually and listed on each
              department&rsquo;s public registry. Orange County, San Diego,
              Riverside and San Bernardino are registerable on demand.
            </p>
          </div>
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

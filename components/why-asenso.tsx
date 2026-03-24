import { SectionTag } from "./section-tag";
import { Info } from "lucide-react";

const features = [
  {
    num: "01",
    title: "The same inspector, start to finish",
    desc: "No rotating staff, no hand-off gaps. The inspector at your pre-con meeting is on-site every phase \u2014 and remembers what was agreed at the last one.",
  },
  {
    num: "02",
    title: "Reports that hold up in front of agencies",
    desc: "Field reports issued same day, formatted for the AHJ, SEOR, and owner. Written to satisfy the building department \u2014 not just to check a box.",
  },
  {
    num: "03",
    title: "You can reach us when it matters",
    desc: "Mid-pour and need an answer fast? Call us directly. No call center, no dispatch queue \u2014 you get the inspector or a principal, immediately.",
  },
  {
    num: "04",
    title: "Family-built, credential-proven",
    desc: "Asenso is family-owned and family-staffed. Every cert on our team is real, current, and earned \u2014 not borrowed from a subcontractor we\u2019ll dispatch without telling you.",
  },
];

const tableRows = [
  {
    label: "Inspector continuity",
    asenso: "\u2713 Same inspector throughout",
    lab: "Varies by staff",
    boutique: "Often, but varies",
  },
  {
    label: "24\u201348 hr mobilization",
    asenso: "\u2713 Standard",
    lab: "Dispatch queue, slower",
    boutique: "Depends on size",
  },
  {
    label: "Principal access",
    asenso: "\u2713 Direct to founder",
    lab: "Account manager layer",
    boutique: "Sometimes",
  },
  {
    label: "Full cert stack visible",
    asenso: "\u2713 Published, verified",
    lab: "Not typically shown",
    boutique: "Rarely",
  },
  {
    label: "DSA experience",
    asenso: "\u2713 Deep field experience",
    lab: "Yes, DSA-approved",
    boutique: "Varies",
  },
  {
    label: "In-house materials lab",
    asenso: "Partnered out",
    lab: "\u2713 In-house",
    boutique: "Usually partnered",
  },
  {
    label: "Minority/DBE firm",
    asenso: "\u2713 Minority-owned, SBE",
    lab: "Typically not",
    boutique: "Varies",
  },
];

export function WhyAsenso() {
  return (
    <section id="why" className="bg-offwhite py-24 px-8 relative overflow-hidden">
      <div className="max-w-[--container-site] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: features */}
          <div>
            <SectionTag>Why Asenso</SectionTag>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
              Boutique service.
              <br />
              Big-firm credentials.
            </h2>
            <p className="text-[16px] text-muted max-w-[560px] mb-14 leading-[1.8] font-normal">
              The large labs have the lab footprint. What they can&apos;t give you
              is a principal who answers the phone, an inspector who knows your
              project, and a firm that moves at your pace.
            </p>
            <div className="flex flex-col gap-[1.8rem]">
              {features.map((f) => (
                <div key={f.num} className="flex gap-[1.4rem] items-start">
                  <div className="text-[2.4rem] font-extrabold tracking-tight text-gold/[0.18] leading-none shrink-0 w-12">
                    {f.num}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-bold mb-1 text-navy">
                      {f.title}
                    </h4>
                    <p className="text-[13.5px] text-muted leading-[1.7]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: comparison table */}
          <div>
            <div className="overflow-x-auto border border-border rounded-xl bg-offwhite">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr>
                    <th className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted p-[0.7rem_0.85rem] text-left border-b border-stone" />
                    <th className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold p-[0.7rem_0.85rem] text-left border-b border-stone">
                      Asenso
                    </th>
                    <th className="hidden sm:table-cell text-[10px] font-bold tracking-[0.15em] uppercase text-muted p-[0.7rem_0.85rem] text-left border-b border-stone">
                      Large Lab
                      <br />
                      <span className="font-normal text-[0.85em] tracking-normal">
                        (NV5, Twining)
                      </span>
                    </th>
                    <th className="hidden sm:table-cell text-[10px] font-bold tracking-[0.15em] uppercase text-muted p-[0.7rem_0.85rem] text-left border-b border-stone">
                      Other Boutique
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={row.label}>
                      <td
                        className={`font-semibold text-charcoal whitespace-nowrap p-[0.65rem_0.85rem] align-top leading-[1.5] ${
                          i < tableRows.length - 1
                            ? "border-b border-stone/50"
                            : ""
                        }`}
                      >
                        {row.label}
                      </td>
                      <td
                        className={`text-navy font-semibold p-[0.65rem_0.85rem] align-top leading-[1.5] ${
                          i < tableRows.length - 1
                            ? "border-b border-stone/50"
                            : ""
                        }`}
                      >
                        {row.asenso.startsWith("\u2713") && (
                          <span className="text-gold">{"\u2713"} </span>
                        )}
                        {row.asenso.replace(/^\u2713\s*/, "")}
                      </td>
                      <td
                        className={`hidden sm:table-cell text-muted p-[0.65rem_0.85rem] align-top leading-[1.5] ${
                          i < tableRows.length - 1
                            ? "border-b border-stone/50"
                            : ""
                        }`}
                      >
                        {row.lab.startsWith("\u2713") && (
                          <span className="text-gold">{"\u2713"} </span>
                        )}
                        {row.lab.replace(/^\u2713\s*/, "")}
                      </td>
                      <td
                        className={`hidden sm:table-cell text-muted p-[0.65rem_0.85rem] align-top leading-[1.5] ${
                          i < tableRows.length - 1
                            ? "border-b border-stone/50"
                            : ""
                        }`}
                      >
                        {row.boutique}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sm:hidden text-[11px] text-muted mt-3 italic">
              Swipe to compare &mdash; large lab and boutique columns hidden on
              small screens.
            </p>
            <div className="bg-gold/[0.08] border border-gold/20 rounded-[10px] p-[1.1rem] px-[1.3rem] mt-6 flex gap-3 items-start">
              <Info className="w-[18px] h-[18px] text-gold shrink-0 mt-0.5" />
              <p className="text-[13px] text-charcoal leading-[1.6]">
                <strong className="text-navy font-bold">
                  On DBE & SBE certification:
                </strong>{" "}
                We are actively pursuing DBE certification and are a registered
                small business. For public agency projects with diversity and small
                business goals, contact us to discuss how we can support your
                compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

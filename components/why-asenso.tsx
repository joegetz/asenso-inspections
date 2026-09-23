import { Section } from "./section";
import { Info } from "lucide-react";

/**
 * One argument, made once, in the form that makes it easiest to check.
 * The four numbered features that used to sit beside this table said the
 * same four things the table says. The table wins: it is scannable, and it
 * names who we are being compared against.
 */

const tableRows = [
  {
    label: "Inspector continuity",
    asenso: "✓ Same quality manager throughout",
    lab: "Varies by staff availability",
    boutique: "Often, but varies",
  },
  {
    label: "24–48 hr mobilization",
    asenso: "✓ Standard",
    lab: "Dispatch queue, slower",
    boutique: "Depends on size",
  },
  {
    label: "Principal access",
    asenso: "✓ Direct to a principal",
    lab: "Account manager layer",
    boutique: "Sometimes",
  },
  {
    label: "Findings tracked to closure",
    asenso: "✓ Register carried day to day",
    lab: "Report by report",
    boutique: "Varies",
  },
  {
    label: "Full cert stack visible",
    asenso: "✓ Published with card numbers",
    lab: "Not typically shown",
    boutique: "Rarely",
  },
  {
    label: "DSA and HCAI experience",
    asenso: "✓ Deep field experience",
    lab: "Yes, DSA-approved",
    boutique: "Varies",
  },
  {
    label: "In-house materials lab",
    asenso: "Partnered out, and we say so",
    lab: "✓ In-house",
    boutique: "Usually partnered",
  },
  {
    label: "Minority / DBE firm",
    asenso: "✓ Minority-owned, DGS-certified SBE",
    lab: "Typically not",
    boutique: "Varies",
  },
];

export function WhyAsenso() {
  return (
    <Section
      id="why"
      ground="sand"
      eyebrow="Why Asenso"
      title={
        <>
          Senior people.
          <br />
          Evidence you can check.
        </>
      }
      intro="National labs have scale and an accredited lab. Boutique firms have personal service. Both tend to miss the same things: continuity of the person on your job, direct access to a principal, and a record you can audit while the work is still running."
    >
      <div className="overflow-x-auto border border-stone/70 rounded-xl bg-offwhite">
        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr>
              <th className="brand-label-sm text-muted p-[0.85rem_1.1rem] text-left border-b border-stone" />
              <th className="brand-label-sm text-gold p-[0.85rem_1.1rem] text-left border-b border-stone">
                Asenso
              </th>
              <th className="hidden sm:table-cell brand-label-sm text-muted p-[0.85rem_1.1rem] text-left border-b border-stone">
                National Lab
              </th>
              <th className="hidden sm:table-cell brand-label-sm text-muted p-[0.85rem_1.1rem] text-left border-b border-stone">
                Boutique Firm
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => {
              const edge =
                i < tableRows.length - 1 ? "border-b border-stone/50" : "";
              return (
                <tr key={row.label}>
                  <td
                    className={`font-semibold text-charcoal p-[0.8rem_1.1rem] align-top leading-[1.5] ${edge}`}
                  >
                    {row.label}
                  </td>
                  <td
                    className={`text-navy font-semibold p-[0.8rem_1.1rem] align-top leading-[1.5] ${edge}`}
                  >
                    {row.asenso.startsWith("✓") && (
                      <span className="text-gold">{"✓"} </span>
                    )}
                    {row.asenso.replace(/^✓\s*/, "")}
                  </td>
                  <td
                    className={`hidden sm:table-cell text-muted p-[0.8rem_1.1rem] align-top leading-[1.5] ${edge}`}
                  >
                    {row.lab.startsWith("✓") && (
                      <span className="text-gold">{"✓"} </span>
                    )}
                    {row.lab.replace(/^✓\s*/, "")}
                  </td>
                  <td
                    className={`hidden sm:table-cell text-muted p-[0.8rem_1.1rem] align-top leading-[1.5] ${edge}`}
                  >
                    {row.boutique}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="sm:hidden text-[11px] text-muted mt-3 italic">
        Lab and boutique columns are hidden on small screens.
      </p>

      <div className="bg-gold/[0.08] border border-gold/20 rounded-[10px] p-[1.1rem] px-[1.3rem] mt-6 flex gap-3 items-start max-w-[860px]">
        <Info className="w-[18px] h-[18px] text-gold shrink-0 mt-0.5" />
        <p className="text-[13px] text-charcoal leading-[1.6]">
          <strong className="text-navy font-bold">
            On SBE and VSBE certification:
          </strong>{" "}
          We are a California DGS-certified Small Business (Micro) and Small
          Business for Public Works (SB-PW), qualifying as an SBE, and as a
          VSBE where agencies recognize the DGS micro designation. DBE
          certification is in progress.
        </p>
      </div>
    </Section>
  );
}

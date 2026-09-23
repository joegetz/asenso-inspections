import { Section } from "./section";
import { Info } from "lucide-react";

/**
 * Commitments, not comparisons.
 *
 * This was a three-column table setting Asenso against "National Lab" and
 * "Boutique Firm", with entries like "dispatch queue, slower" and "account
 * manager layer". That is attacking other firms, which this brand does not
 * do. The substance was worth keeping, so it is stated as what we commit to
 * on every job. Every row is checkable. None of them mention anyone else.
 */

const commitments = [
  {
    label: "The person on your job",
    detail:
      "The same quality manager from the pre-construction meeting through the closeout package.",
  },
  {
    label: "Mobilization",
    detail: "24 to 48 hours, as standard.",
  },
  {
    label: "Access",
    detail: "You reach a principal directly.",
  },
  {
    label: "Findings",
    detail:
      "Issued the day they are raised, with the code basis and photo evidence attached.",
  },
  {
    label: "Open conditions",
    detail:
      "Carried in a register day to day until each one is verified closed.",
  },
  {
    label: "Certifications",
    detail:
      "Published per person, with card numbers you can check against the issuing registry.",
  },
  {
    label: "DSA and HCAI",
    detail:
      "Field experience on school work under DSA and hospital work under HCAI.",
  },
  {
    label: "Materials testing",
    detail:
      "Placed with our ISO/IEC 17025 accredited partner of twenty years.",
  },
  {
    label: "Business status",
    detail:
      "Minority-owned. California DGS-certified Small Business, Micro and SB-PW.",
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
      intro="What we commit to on every job, and how you can verify each one while the work is still running."
    >
      <div className="border border-stone/70 rounded-xl bg-offwhite overflow-hidden">
        {commitments.map((c, i) => (
          <div
            key={c.label}
            className={`grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-x-8 gap-y-1 p-[1.1rem_1.3rem] ${
              i < commitments.length - 1 ? "border-b border-stone/50" : ""
            }`}
          >
            <div className="text-[13.5px] font-bold text-navy leading-[1.5]">
              {c.label}
            </div>
            <div className="text-[13.5px] text-charcoal leading-[1.6]">
              {c.detail}
            </div>
          </div>
        ))}
      </div>

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

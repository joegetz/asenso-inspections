import { SectionTag } from "./section-tag";

/**
 * No named individuals. Anyone who could appear in a proposal as delivery
 * stays off the public site, including the principal, who is also the Quality
 * Director and is proposed like anyone else.
 *
 * The reason is commercial. A proposal should read as selection: these are the
 * quality managers we chose for your project. If the bench is published, the
 * client can see it was not a selection, it was the roster, and they can count
 * capacity and treat availability as a negotiating point rather than a
 * commitment. The deputy registries already publish individuals by name and
 * card, so this is not about hiding credentials. It is about who does the
 * selecting.
 */

const commitments = [
  {
    label: "A principal signs the work",
    detail:
      "A principal of the firm is accountable for every engagement and is in the field at the phases that carry the most risk. Not a name on a signature page.",
  },
  {
    label: "The same people, start to finish",
    detail:
      "The quality managers assigned to a project stay on it, from the pre-construction meeting through the closeout package.",
  },
  {
    label: "Named in the proposal",
    detail:
      "We name the quality managers for your project, with their certifications and deputy card numbers, matched to the scope, the jurisdiction and the schedule. Card numbers can be checked against the issuing registry.",
  },
  {
    label: "Second generation",
    detail:
      "The practice began in 2000, when two brothers moved from concrete placement into special inspection. It is family-run, and reputation is the whole business when the name on the report is the name on the door.",
  },
];

export function SeniorStaff() {
  return (
    <section id="senior-staff" className="bg-sand py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>The Team</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          Who does the work
          <br />
          on your job.
        </h2>
        <p className="text-[16px] text-muted max-w-[620px] mb-12 leading-[1.8] font-normal">
          Senior quality managers carrying ICC, AWS, ACI and DSA certifications,
          including the ICC Master of Special Inspection. We name the people on
          your project when we propose on it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
          {commitments.map((c) => (
            <div key={c.label} className="border-t-2 border-gold pt-5">
              <h3 className="text-[1rem] font-extrabold text-navy leading-[1.3] mb-2">
                {c.label}
              </h3>
              <p className="text-[13.5px] text-muted leading-[1.7]">
                {c.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-[14px] p-7 px-8">
          <p className="text-[13.5px] text-sand/55 leading-[1.7]">
            <strong className="text-white font-semibold">
              Engineering advisory:
            </strong>{" "}
            Magdalena Cejudo, P.E., a licensed Professional Engineer providing
            structural engineering review, so field findings are backed by
            licensed judgment when a project calls for it.
          </p>
        </div>
      </div>
    </section>
  );
}

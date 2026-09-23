import type { Metadata } from "next";
import { SeniorStaff } from "@/components/senior-staff";
import { Coverage } from "@/components/coverage";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "The Team & Credentials | Asenso Construction Quality",
  description:
    "How Asenso staffs a project, the certifying bodies the team carries, the special inspection categories covered, and registered deputy coverage across Southern California. Named quality managers and card numbers come with the proposal.",
};

/**
 * Who leads it, then the depth behind them.
 *
 * Two sections were deleted from this page. The credentials inventory,
 * because every certification in it already appeared on a person's card a
 * few hundred pixels above. And the firm story, because four detailed
 * profiles demonstrate "built by people who have done the work" far better
 * than a paragraph claiming it. The one fact worth keeping from it, the
 * 2000 lineage, now sits in the intro below.
 */
export default function LeadershipPage() {
  return (
    <>
      <SeniorStaff />
      <Coverage />
      <PageCta
        heading="Named people, card numbers and resumes come with the proposal."
        body="Category coverage is open. Tell us the scope and the jurisdiction and we will name the quality manager, provide their deputy card number and confirm availability against your schedule."
        secondary={{ href: "/projects", label: "See Projects" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { FirmStory } from "@/components/firm-story";
import { SeniorStaff } from "@/components/senior-staff";
import { Coverage } from "@/components/coverage";
import { Credentials } from "@/components/credentials";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Leadership & Credentials | Asenso Construction Quality",
  description:
    "The quality managers who lead the program on your job, their carded credentials and card numbers, the bench behind them, and the special inspection categories Asenso covers across Southern California.",
};

export default function LeadershipPage() {
  return (
    <>
      <FirmStory />
      <SeniorStaff />
      <Coverage />
      <Credentials />
      <PageCta
        heading="Named people, card numbers and resumes come with the proposal."
        body="Category coverage is open. Tell us the scope and the jurisdiction and we will name the quality manager, provide their deputy card number and confirm availability against your schedule."
        secondary={{ href: "/projects", label: "See Projects" }}
      />
    </>
  );
}

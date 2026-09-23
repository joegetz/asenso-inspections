import type { Metadata } from "next";
import { Services } from "@/components/services";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Services | Asenso Construction Quality",
  description:
    "Construction quality run as a program: embedded QA/QC, owner's quality management and inspection readiness, with special and deputy inspection, structural observation, MEP, NDT and source inspection self-performed underneath.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <PageCta
        heading="Tell us the scope, the jurisdiction and the start window."
        body="We will come back with the categories we cover, the quality manager we would put on it, and what the program costs. You should not need a discovery call to get a straight answer."
        secondary={{ href: "/leadership", label: "Meet the Team" }}
      />
    </>
  );
}

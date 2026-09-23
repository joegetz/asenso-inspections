import type { Metadata } from "next";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { WhoWeServe } from "@/components/who-we-serve";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Services | Asenso Construction Quality",
  description:
    "Construction quality run as a program: embedded QA/QC, owner's quality management and inspection readiness, over a field scope of special and deputy inspection, structural observation, MEP, NDT and source inspection.",
};

/** What we do, then how we run it, then who we do it for. */
export default function ServicesPage() {
  return (
    <>
      <Services />
      <Process />
      <WhoWeServe />
      <PageCta
        heading="Tell us the scope, the jurisdiction and the start window."
        body="We will come back with the categories we cover, the quality manager we would put on it, and what the program costs. You should not need a discovery call to get a straight answer."
        secondary={{ href: "/leadership", label: "Meet the Team" }}
      />
    </>
  );
}

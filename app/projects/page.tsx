import type { Metadata } from "next";
import { Projects } from "@/components/projects";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Projects | Asenso Construction Quality",
  description:
    "Work Asenso's quality managers have delivered across federal and defense, industrial, healthcare, aviation, education under DSA, and water and wastewater programs.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <PageCta
        heading="References are available for any project on this page."
        body="Every project listed reflects delivery history performed under the general contractor or host firm shown. Ask and we will connect you with the person who ran it."
        secondary={{ href: "/services", label: "See Services" }}
      />
    </>
  );
}

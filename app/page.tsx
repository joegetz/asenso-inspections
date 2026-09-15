import { Nav } from "@/components/nav";
import { IdentityBand } from "@/components/identity-band";
import { Hero } from "@/components/hero";
import { ProjectProof } from "@/components/project-proof";
import { DiffBand } from "@/components/diff-band";
import { Services } from "@/components/services";
import { Credentials } from "@/components/credentials";
import { WhyAsenso } from "@/components/why-asenso";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { FirmStory } from "@/components/firm-story";
import { SeniorStaff } from "@/components/senior-staff";
import { WhoWeServe } from "@/components/who-we-serve";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <IdentityBand />
      <Hero />
      <WhoWeServe />
      <ProjectProof />
      <Services />
      <DiffBand />
      <Credentials />
      <WhyAsenso />
      <SeniorStaff />
      <Process />
      <Projects />
      <FirmStory />
      <ContactSection />
      <Footer />
    </>
  );
}

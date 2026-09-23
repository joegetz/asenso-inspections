import { Hero } from "@/components/hero";
import { ProofBand } from "@/components/proof-band";
import { ServicesTeaser } from "@/components/services-teaser";
import { WhyAsenso } from "@/components/why-asenso";
import { ContactSection } from "@/components/contact-section";

/**
 * Home has one job: convince in a few screens, then take the enquiry.
 * Hero (claim) -> proof at a glance -> what we do -> why us -> contact.
 * Process and who-we-serve moved to /services, where they belong.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProofBand />
      <ServicesTeaser />
      <WhyAsenso />
      <ContactSection />
    </>
  );
}

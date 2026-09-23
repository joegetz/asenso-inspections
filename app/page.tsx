import { Hero } from "@/components/hero";
import { SectorStrip } from "@/components/sector-strip";
import { WhoWeServe } from "@/components/who-we-serve";
import { ServicesTeaser } from "@/components/services-teaser";
import { WhyAsenso } from "@/components/why-asenso";
import { Process } from "@/components/process";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <SectorStrip
        eyebrow="Team experience across"
        heading="High-accountability sectors across California, Texas & the Mountain West"
      />
      <WhoWeServe />
      <ServicesTeaser />
      <WhyAsenso />
      <Process />
      <ContactSection />
    </>
  );
}

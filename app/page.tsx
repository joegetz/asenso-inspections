import { Hero } from "@/components/hero";
import { WhoWeServe } from "@/components/who-we-serve";
import { WhyAsenso } from "@/components/why-asenso";
import { Process } from "@/components/process";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeServe />
      <WhyAsenso />
      <Process />
      <ContactSection />
    </>
  );
}

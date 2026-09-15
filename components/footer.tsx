import { Logo } from "./logo";

const identityTags = [
  "Minority-Owned Business",
  "DGS-Certified SBE (Micro & SB-PW)",
  "Pursuing DBE Certification",
];

export function Footer() {
  return (
    <footer className="bg-navy py-12 px-8">
      <div className="max-w-[--container-site] mx-auto grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-12 items-start">
        <Logo className="text-white" />

        <div className="flex flex-col gap-[0.55rem]">
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-sand/[0.28] mb-[0.3rem]">
            Business Identity
          </p>
          {identityTags.map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 text-[11.5px] font-medium text-sand/[0.45] before:content-[''] before:w-1 before:h-1 before:bg-gold before:rounded-full before:opacity-50 before:shrink-0"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="text-right sm:self-end">
          <p className="text-[12px] text-sand/30 leading-[1.9]">
            &copy; {new Date().getFullYear()} Asenso. All rights reserved.
            <br />
            Asenso Consulting Co.
            <br />
            ICC &middot; AWS &middot; ACI &middot; IFC Certified
            <br />
            Insured &middot; workers&rsquo; comp &amp; general liability &middot;
            additional-insured on request
          </p>
          <p className="text-[11px] text-sand/[0.22] mt-2">
            California &middot; Texas &middot; Mountain West &middot; Southwest
          </p>
        </div>
      </div>
    </footer>
  );
}

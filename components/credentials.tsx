"use client";

import { useState } from "react";
import { SectionTag } from "./section-tag";
import { Info } from "lucide-react";

const summaryItems = [
  { body: "ICC", label: "Certified" },
  { body: "AWS", label: "Welding" },
  { body: "ACI", label: "Field & Anchor" },
  { body: "IFC", label: "Firestop" },
  { body: "LA City", label: "Registered" },
  { body: "Long Beach", label: "Registered" },
];

type TabId = "icc" | "aws" | "aci" | "ifc" | "jurisdictions";

const tabs: { id: TabId; label: string }[] = [
  { id: "icc", label: "ICC" },
  { id: "aws", label: "AWS Welding" },
  { id: "aci", label: "ACI" },
  { id: "ifc", label: "IFC Firestop" },
  { id: "jurisdictions", label: "Jurisdiction Approvals" },
];

const iccCerts = [
  "Master of Special Inspection",
  "Reinforced Concrete Special Inspector",
  "Prestressed Concrete Special Inspector",
  "Structural Steel & Bolting Special Inspector",
  "Structural Welding Special Inspector",
  "Structural Masonry Special Inspector",
  "Spray-Applied Fireproofing Special Inspector",
  "Firestopping Credential of Learning Achievement",
  "CA Commercial Building Inspector",
  "CA Commercial Plumbing Inspector",
];

const aciCerts = [
  "Post-Installed Concrete Anchor Installation Inspector",
  "Concrete Field Testing Technician, Grade I",
  "Masonry Field Testing Technician",
];

const jurisdictions = [
  {
    authority: "City of Los Angeles",
    type: "Registered Deputy Inspector",
    certs: ["Wood Construction"],
  },
  {
    authority: "City of Long Beach",
    type: "Registered Deputy Inspector",
    certs: [
      "Concrete \u00b7 Driven Pile \u00b7 Epoxy \u00b7 Fireproofing",
      "Masonry \u00b7 Prestressed Concrete \u00b7 Structural Steel & Welding",
    ],
  },
  {
    authority: "County of Los Angeles",
    type: "ICC credentials accepted",
    certs: [
      "Full IBC Chapter 17 special inspection scope",
      "CBC compliant \u00b7 all materials categories",
    ],
  },
  {
    authority: "Orange County",
    type: "ICC credentials accepted",
    certs: [
      "Full IBC Chapter 17 special inspection scope",
      "CBC compliant \u00b7 all materials categories",
    ],
  },
  {
    authority: "Riverside County",
    type: "ICC credentials accepted",
    certs: [
      "Full IBC Chapter 17 special inspection scope",
      "CBC compliant \u00b7 all materials categories",
    ],
  },
  {
    authority: "San Bernardino County",
    type: "ICC credentials accepted",
    certs: [
      "Full IBC Chapter 17 special inspection scope",
      "CBC compliant \u00b7 all materials categories",
    ],
  },
];

function CertRow({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 px-4 bg-offwhite border border-border rounded-md">
      <span className="text-[14px] font-medium text-charcoal">{name}</span>
    </div>
  );
}

function DsaCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gold/[0.08] border border-gold/20 rounded-[10px] p-[1.1rem] px-[1.3rem] mt-5 flex gap-3 items-start">
      <Info className="w-[18px] h-[18px] text-gold shrink-0 mt-0.5" />
      <p className="text-[13px] text-charcoal leading-[1.6]">{children}</p>
    </div>
  );
}

export function Credentials() {
  const [activeTab, setActiveTab] = useState<TabId>("icc");

  return (
    <section id="credentials" className="bg-sand py-24 px-8">
      <div className="max-w-[--container-site] mx-auto">
        <SectionTag>Our Team&apos;s Credentials</SectionTag>
        <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
          The certification stack
          <br />
          behind every inspection.
        </h2>

        {/* Intro + summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-14">
          <p className="text-[15px] text-muted leading-[1.8]">
            Every inspector on the Asenso team holds active, verified
            certifications from the leading bodies in the industry &mdash; ICC,
            AWS, ACI, and IFC. We don&apos;t say &ldquo;ICC certified&rdquo; as
            a marketing line. Below is the full credential inventory our team
            collectively holds, organized by certifying body.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {summaryItems.map((item) => (
              <div
                key={item.body}
                className="bg-offwhite border border-border rounded-[10px] p-[1.1rem] px-4 text-center"
              >
                <div className="text-[1rem] font-extrabold text-navy tracking-tight mb-0.5">
                  {item.body}
                </div>
                <div className="text-[10px] font-semibold tracking-[0.06em] uppercase text-muted">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mb-8 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[11px] font-bold tracking-[0.08em] uppercase px-[14px] py-[6px] rounded-full border-[1.5px] cursor-pointer transition-all whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "bg-navy text-white border-navy"
                  : "bg-transparent text-muted border-stone hover:bg-navy hover:text-white hover:border-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "icc" && (
          <div className="flex flex-col gap-2">
            {iccCerts.map((c) => (
              <CertRow key={c} name={c} />
            ))}
          </div>
        )}

        {activeTab === "aws" && (
          <div>
            <div className="flex flex-col gap-2">
              <CertRow name="AWS Certified Welding Inspector (CWI)" />
            </div>
            <p className="text-[13px] text-muted mt-5 leading-[1.7]">
              Three AWS CWIs on staff &mdash; covering structural steel welding
              inspection, welder qualifications, and fabricator shop inspections
              across all project types.
            </p>
          </div>
        )}

        {activeTab === "aci" && (
          <div className="flex flex-col gap-2">
            {aciCerts.map((c) => (
              <CertRow key={c} name={c} />
            ))}
          </div>
        )}

        {activeTab === "ifc" && (
          <div>
            <div className="flex flex-col gap-2">
              <CertRow name="IFC / International Firestop Council Certified" />
            </div>
            <p className="text-[13px] text-muted mt-5 leading-[1.7]">
              IFC certification combined with ICC Firestopping credentials gives
              our team comprehensive firestop inspection coverage across
              penetrations, joints, and rated assemblies.
            </p>
          </div>
        )}

        {activeTab === "jurisdictions" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {jurisdictions.map((j) => (
                <div
                  key={j.authority}
                  className="bg-offwhite border border-border rounded-xl p-[1.6rem]"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-[0.92rem] font-extrabold text-navy">
                        {j.authority}
                      </div>
                      <div className="text-[10px] font-semibold text-muted">
                        {j.type}
                      </div>
                    </div>
                  </div>
                  <ul className="list-none flex flex-col gap-[0.4rem]">
                    {j.certs.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-[12.5px] text-muted leading-[1.4] before:content-[''] before:w-1 before:h-1 before:bg-gold before:shrink-0 before:mt-[6px] before:[clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-muted mt-6 leading-[1.7]">
              Working in a jurisdiction not listed? Contact us &mdash; our ICC
              certifications are accepted by most Southern California
              municipalities, and we can confirm coverage for your specific project
              location before you engage.
            </p>
            <DsaCallout>
              <strong className="text-navy font-bold">DSA Experience:</strong>{" "}
              Our team has worked on DSA-regulated K&ndash;12 and community
              college projects and understands the inspector qualification,
              documentation, and agency coordination those jobs require.
              We&apos;re actively pursuing formal DSA listing and are transparent
              about where we stand today.
            </DsaCallout>
          </div>
        )}
      </div>
    </section>
  );
}

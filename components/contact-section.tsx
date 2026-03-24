"use client";

import { useActionState } from "react";
import { SectionTag } from "./section-tag";
import { submitContact } from "@/app/contact/actions";
import { Phone, Mail, MapPin } from "lucide-react";

function HexPattern() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 900 700"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id="geo2"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,2 58,17 58,35 30,50 2,35 2,17"
              fill="none"
              stroke="#142235"
              strokeWidth=".7"
              opacity=".035"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo2)" />
      </svg>
    </div>
  );
}

const initialState = { success: false, error: "" };

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <section
      id="contact"
      className="bg-offwhite py-24 px-8 relative overflow-hidden"
    >
      <HexPattern />
      <div className="max-w-[--container-site] mx-auto relative z-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-20 items-start">
          {/* Left: contact info */}
          <div>
            <SectionTag>Get in Touch</SectionTag>
            <h2 className="text-[clamp(1.9rem,3vw,2.6rem)] font-extrabold leading-[1.07] tracking-tight text-navy mb-4">
              Let&apos;s talk about your project.
            </h2>
            <p className="text-[15px] text-muted leading-[1.8] mb-8">
              Send us a project brief or call to talk scope. We respond within one
              business day &mdash; and we&apos;re happy to jump on a quick call
              before you commit to anything.
            </p>
            <div className="flex items-start gap-3 text-[13.5px] text-muted mb-[0.9rem]">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-[3px]" />
              <span>(949) 606-3428 &nbsp;&middot;&nbsp; Mon&ndash;Sat 6AM&ndash;7PM</span>
            </div>
            <div className="flex items-start gap-3 text-[13.5px] text-muted mb-[0.9rem]">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-[3px]" />
              <span>info@asensoinspections.com</span>
            </div>
            <div className="flex items-start gap-3 text-[13.5px] text-muted mb-[0.9rem]">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-[3px]" />
              <span>
                LA City & County &middot; Orange County &middot; Riverside &middot;
                San Bernardino &middot; Long Beach
              </span>
            </div>
            <div className="mt-8 p-[1.1rem_1.3rem] bg-navy/[0.06] rounded-lg text-[13px] text-muted leading-[1.6]">
              <strong className="text-navy font-bold">
                Urgent or same-day needs?
              </strong>{" "}
              Call us directly &mdash; if you&apos;re mid-pour and need an
              inspector on-site, we&apos;ll do everything we can to get there.
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-sand border border-stone rounded-[14px] p-[2.6rem]">
            {state.success ? (
              <div className="text-center py-10 px-4">
                <strong className="block text-[1.3rem] font-extrabold text-navy mb-2">
                  Message received.
                </strong>
                <p className="text-[14px] text-muted">
                  We&apos;ll follow up within one business day.
                </p>
              </div>
            ) : (
              <form action={formAction}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[1.1rem]">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="Michael"
                      className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none placeholder:text-stone"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="Torres"
                      className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none placeholder:text-stone"
                    />
                  </div>
                </div>
                <div className="mb-[1.1rem]">
                  <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="ABC General Contractors"
                    className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none placeholder:text-stone"
                  />
                </div>
                <div className="mb-[1.1rem]">
                  <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="m.torres@contractor.com"
                    className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none placeholder:text-stone"
                  />
                </div>
                <div className="mb-[1.1rem]">
                  <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                    className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none placeholder:text-stone"
                  />
                </div>
                <div className="mb-[1.1rem]">
                  <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none cursor-pointer appearance-none"
                  >
                    <option value="">Select a service&hellip;</option>
                    <option>Special Inspections (IBC Ch. 17)</option>
                    <option>Structural Observation</option>
                    <option>Threshold Inspections (CBC &sect;1705)</option>
                    <option>QA/QC Program Management</option>
                    <option>Multiple / Full Project Coverage</option>
                    <option>Not Sure &mdash; Let&apos;s Talk</option>
                  </select>
                </div>
                <div className="mb-[1.1rem]">
                  <label className="block text-[10px] font-bold tracking-[0.14em] uppercase text-muted mb-[0.4rem]">
                    Project Description
                  </label>
                  <textarea
                    name="message"
                    placeholder="e.g. 4-story Type I concrete + masonry in Anaheim — concrete and masonry special inspections, starts Q3 2025"
                    className="w-full bg-offwhite border border-stone rounded-md text-charcoal text-[14px] font-medium py-[11px] px-[14px] transition-colors focus:border-gold focus:outline-none resize-y min-h-[100px] placeholder:text-stone"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gold text-navy text-[13px] font-extrabold tracking-[0.1em] uppercase py-[14px] rounded-full mt-2 cursor-pointer transition-all hover:opacity-88 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed border-none"
                >
                  {isPending ? "Sending\u2026" : "Send Project Brief"}
                </button>
                {state.error && (
                  <p className="text-[13px] text-red-600 mt-3 text-center">
                    {state.error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#credentials", label: "Credentials" },
  { href: "#why", label: "Why Asenso" },
  { href: "#projects", label: "Projects" },
  { href: "#senior-staff", label: "Senior Staff" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 620) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-100 bg-offwhite/96 backdrop-blur-[16px] border-b border-border px-8">
        <div className="max-w-[--container-site] mx-auto flex items-center justify-between h-[68px]">
          <Logo className="text-navy" />

          {/* Desktop links */}
          <ul className="hidden sm:flex items-center gap-[2.2rem] list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="no-underline text-muted text-[13px] font-medium transition-colors hover:text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden sm:inline-block bg-navy text-offwhite text-[12px] font-bold tracking-[0.1em] uppercase px-[22px] py-[10px] rounded-full transition-all hover:bg-[#1c3148] hover:-translate-y-px no-underline"
          >
            Start a Project
          </a>

          {/* Hamburger */}
          <button
            className="flex sm:hidden flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-1 shrink-0"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-[1.5px] bg-navy rounded-sm transition-transform duration-250 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-navy rounded-sm transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] bg-navy rounded-sm transition-transform duration-250 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed top-[68px] inset-x-0 bottom-0 bg-offwhite/98 backdrop-blur-[16px] z-99 flex flex-col p-8 overflow-y-auto sm:hidden">
          <ul className="list-none flex flex-col gap-1 mb-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-[1.15rem] font-bold text-navy no-underline py-[0.85rem] border-b border-border tracking-tight hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-gold text-navy text-[13px] font-extrabold tracking-[0.1em] uppercase px-7 py-[15px] rounded-full no-underline hover:opacity-88"
          >
            Start a Project
          </a>
          <div className="mt-8 flex flex-col gap-2">
            {[
              "Family-Owned Business",
              "Minority-Owned Business",
              "Small Business (SBE)",
              "Pursuing DBE Certification",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold tracking-[0.08em] uppercase text-muted flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const tags = [
  { label: "Minority-Owned Business", pursuing: false },
  { label: "Small Business (SBE)", pursuing: false },
  { label: "Pursuing DBE Certification", pursuing: true },
];

export function IdentityBand() {
  return (
    <div className="bg-navy py-3 px-8 border-b border-white/[0.06]">
      <div className="max-w-[--container-site] mx-auto flex items-center justify-center flex-wrap gap-y-[0.4rem] gap-x-[1.6rem]">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`text-[10.5px] font-semibold tracking-[0.1em] uppercase flex items-center gap-1.5 ${
              tag.pursuing
                ? "text-gold/65 before:bg-gold/50"
                : "text-sand/50 before:bg-gold"
            } before:content-[''] before:w-1 before:h-1 before:rounded-full before:shrink-0`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

import { AsensoMark } from "./motif";

type LogoProps = {
  className?: string;
  /**
   * "extended" is CONSTRUCTION QUALITY. Use it wherever there is width:
   * nav, footer, letterhead, covers, signage.
   * "compact" is QUALITY, for tight lockups only, where the extended
   * descriptor would overhang the wordmark.
   */
  descriptor?: "extended" | "compact";
  href?: string;
};

/**
 * The lockup. Identical in the header and the footer by construction:
 * the register mark, the wordmark, the descriptor. Only the ink color
 * changes between light and dark grounds.
 */
export function Logo({
  className,
  descriptor = "extended",
  href = "/",
}: LogoProps) {
  return (
    <a
      href={href}
      aria-label="Asenso, Construction Quality"
      className={`flex items-center gap-[13px] no-underline ${className ?? ""}`}
    >
      <AsensoMark className="w-9 h-9 shrink-0" />
      <div className="flex flex-col leading-none gap-[3px]">
        <span className="text-[15px] font-extrabold tracking-[0.2em] uppercase">
          Asenso
        </span>
        <span className="text-[8.5px] font-semibold tracking-[0.24em] text-gold uppercase whitespace-nowrap">
          {descriptor === "compact" ? "Quality" : "Construction Quality"}
        </span>
      </div>
    </a>
  );
}

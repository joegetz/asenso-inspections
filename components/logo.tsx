export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className={`flex items-center gap-[13px] no-underline ${className ?? ""}`}>
      <svg className="w-9 h-9 shrink-0" viewBox="0 0 36 36" fill="none">
        <path
          d="M4 24 C8 24,10 14,15 14 C20 14,21 24,26 24 C29 24,30.5 20,33 18"
          stroke="#B8924A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 18 C6 18,8 10,13 10 C18 10,19 22,24 22 C27 22,28.5 18,33 16"
          stroke="#B8924A"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity=".35"
        />
        <path d="M14 30 L17 26 L20 30 Z" fill="#B8924A" opacity=".2" />
      </svg>
      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-[15px] font-extrabold tracking-[0.2em] uppercase">
          ASENSO
        </span>
        <span className="text-[9px] font-semibold tracking-[0.22em] text-gold uppercase">
          Special Inspections
        </span>
      </div>
    </a>
  );
}

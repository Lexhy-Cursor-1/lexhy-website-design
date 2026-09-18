import { Link } from "react-router-dom";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return <img src="/lexhy-official-logo.png" alt="" className={`${className} object-contain`} aria-hidden="true" />;
}

export function BrandLockup() {
  return (
    <Link to="/" className="inline-flex items-center gap-3 text-foreground" aria-label="Lexhy home">
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[18px] font-bold tracking-[0.04em]">LEXHY</span>
        <span className="mt-1 text-[9px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Management company</span>
      </span>
    </Link>
  );
}

import { Link } from "react-router-dom";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path d="M5 14.5C5 10.9 7.9 8 11.5 8H25L31 14V39H40.5L47 45.5V54C47 56.2 45.2 58 43 58H17.5L5 45.5V14.5Z" fill="currentColor" />
      <path d="M59 49.5C59 53.1 56.1 56 52.5 56H39L33 50V25H23.5L17 18.5V10C17 7.8 18.8 6 21 6H46.5L59 18.5V49.5Z" fill="currentColor" />
    </svg>
  );
}

export function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${inverse ? "text-primary-foreground" : "text-foreground"}`} aria-label="Lexhy home">
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[19px] font-bold tracking-[0.02em]">LEXHY</span>
        <span className="mt-1 text-[10px] font-normal tracking-[0.04em]">Management company</span>
      </span>
    </Link>
  );
}

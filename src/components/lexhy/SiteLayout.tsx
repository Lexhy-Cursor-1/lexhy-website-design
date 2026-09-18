import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrandLockup, LogoMark } from "./LogoMark";

const navItems = [
  ["Private wealth", "/private-wealth"],
  ["How it works", "/how-it-works"],
  ["Member firms", "/member-firms"],
] as const;

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="site-container flex h-full items-center justify-between">
        <BrandLockup />
        <nav className="flex items-center gap-7" aria-label="Primary navigation">
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, path]) => (
              <NavLink key={path} to={path} className={({ isActive }) => `nav-link ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/invitation" className="nav-link text-muted-foreground">Invitation only</NavLink>
          </div>
          <Button asChild variant="outline" className="h-10 rounded-none border-foreground bg-transparent px-4 text-[11px] uppercase tracking-[0.16em] hover:bg-foreground hover:text-background">
            <Link to="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="site-container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="font-sans text-sm font-bold tracking-[0.04em]">LEXHY</span>
            </div>
            <p className="mt-7 max-w-[76ch] text-xs leading-6 text-primary-foreground/65">
              Lexhy is a management company. It does not practise law. Legal services are provided only by independently owned member firms authorised in the relevant jurisdiction. Contact does not create a lawyer-client relationship. Membership is by invitation only.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-primary-foreground/65 md:justify-end">
            <Link to="/private-wealth" className="hover:text-primary-foreground">Private wealth</Link>
            <Link to="/how-it-works" className="hover:text-primary-foreground">How it works</Link>
            <Link to="/member-firms" className="hover:text-primary-foreground">Member firms</Link>
            <Link to="/contact" className="hover:text-primary-foreground">Contact</Link>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-5 text-[11px] text-primary-foreground/50">
          © {new Date().getFullYear()} Lexhy. Powered by Lexhy.
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setVisible(false);
    const frame = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className={visible ? "page-enter" : "opacity-0"}>{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return (
    <section className="site-container py-20 md:py-28 lg:py-32">
      <div className="max-w-5xl">
        <p className="eyebrow">{kicker}</p>
        <h1 className="page-title mt-7">{title}</h1>
        <div className="mt-8 max-w-[68ch] text-base leading-relaxed text-muted-foreground md:text-lg">{children}</div>
      </div>
    </section>
  );
}

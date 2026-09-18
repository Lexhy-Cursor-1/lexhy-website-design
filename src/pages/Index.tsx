import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaqSection, faqItems } from "@/components/lexhy/FaqSection";
import { LogoMark } from "@/components/lexhy/LogoMark";
import { PageMeta } from "@/components/lexhy/PageMeta";

const statements = [
  ["The firm remains the firm", "Licence, client and judgement stay with the practice that signs the advice."],
  ["One record across countries", "Source of wealth is not rebuilt for every new adviser."],
  ["Introducers, not a marketplace", "Work arrives from family offices, private banks and trustees. This site does not list lawyers or publish a fee."],
];

const Index = () => (
  <>
    <PageMeta title="Lexhy — Management company for independent private-wealth firms" description="Lexhy is the management company behind independently owned private-wealth law firms. It does not practise law or give legal advice." path="/" faq={faqItems} />
    <section className="site-container py-24 md:py-32 lg:py-36">
      <div className="max-w-6xl">
        <p className="eyebrow">Independent member firms</p>
        <h1 className="hero-title mt-8 max-w-5xl">Private wealth, held by licensed firms.</h1>
        <p className="mt-9 max-w-[67ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
          Lexhy is the management company behind independently owned private-wealth practices. It does not practise law. A member firm takes the engagement. Lexhy runs the system around it.
        </p>
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Button asChild className="h-11 rounded-none bg-foreground px-6 text-[11px] uppercase tracking-[0.16em] text-background hover:bg-transparent hover:text-foreground hover:ring-1 hover:ring-foreground">
            <Link to="/contact">Contact <ArrowRight /></Link>
          </Button>
          <Link to="/invitation" className="quiet-link">Membership is by invitation only <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>

    <section className="border-t border-border">
      <div className="site-container grid md:grid-cols-3">
        {statements.map(([title, text], index) => (
          <article key={title} className="border-b border-border py-12 md:min-h-[290px] md:border-b-0 md:border-r md:px-9 md:py-16 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <span className="font-sans text-xs text-muted-foreground">0{index + 1}</span>
            <h2 className="mt-12 font-serif text-3xl leading-tight">{title}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-foreground text-primary-foreground">
      <div className="site-container grid gap-10 py-20 md:grid-cols-[auto_1fr] md:gap-20 md:py-24">
        <LogoMark className="h-14 w-14" />
        <div>
          <h2 className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-6xl">Not a law firm. Not a directory. Not a lead shop.</h2>
          <p className="mt-8 max-w-[68ch] text-base leading-relaxed text-primary-foreground/70">
            Legal services are provided only by member firms authorised in the relevant jurisdiction. Contact does not create a lawyer-client relationship.
          </p>
        </div>
      </div>
    </section>
    <FaqSection />
  </>
);

export default Index;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/lexhy/PageMeta";

const Index = () => (
  <>
    <PageMeta title="Lexhy — Management company for the file" description="Lexhy holds the file and access list across the operating company and private affairs. It does not practise law." path="/" />
    <section className="site-container py-24 md:py-32 lg:py-36">
      <div className="max-w-6xl rise-sequence">
        <p className="eyebrow">Operating company · Private affairs</p>
        <h1 className="hero-title mt-8 max-w-5xl">The file, held. Member firms practise.</h1>
        <p className="mt-9 max-w-[67ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
          Lexhy is the management company behind independently owned practices. It holds the file and access list. It does not practise law.
        </p>
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center rise-sequence">
          <Button asChild className="h-11 rounded-none bg-foreground px-6 text-[11px] uppercase tracking-[0.16em] text-background hover:bg-transparent hover:text-foreground hover:ring-1 hover:ring-foreground">
            <Link to="/contact">Contact <ArrowRight /></Link>
          </Button>
          <Link to="/for-firms#interest" className="quiet-link">Request an invitation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>

    <section className="border-t border-border">
      <div className="site-container grid md:grid-cols-2">
        <article className="border-b border-border py-14 md:min-h-[300px] md:border-b-0 md:border-r md:pr-12 md:py-20">
          <p className="eyebrow">For principals and owners</p>
          <h2 className="mt-8 max-w-lg font-serif text-4xl leading-tight">One file across both books.</h2>
          <p className="mt-6 max-w-[55ch] text-muted-foreground">Operating company and legacy private affairs stay connected. The appointed member firm takes the engagement and signs the advice.</p>
          <Link to="/the-file" className="quiet-link mt-9">See the file <ArrowRight className="h-4 w-4" /></Link>
        </article>
        <article className="py-14 md:min-h-[300px] md:pl-12 md:py-20">
          <p className="eyebrow">For independent firms</p>
          <h2 className="mt-8 max-w-lg font-serif text-4xl leading-tight">Pedigree, surfaced with discipline.</h2>
          <p className="mt-6 max-w-[55ch] text-muted-foreground">Lexhy connects appointed counsel to principals who hold both the operating company and private affairs. Membership is by invitation only.</p>
          <Link to="/for-firms" className="quiet-link mt-9">For firms <ArrowRight className="h-4 w-4" /></Link>
        </article>
      </div>
    </section>

    <section className="border-t border-border bg-paper">
      <div className="site-container py-20 md:py-28">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Product walkthrough</p>
            <h2 className="section-title mt-5">The file, in sequence.</h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.14em] text-muted-foreground sm:block">Film pending</span>
        </div>
        <div className="mt-10 aspect-video border border-border bg-background" aria-label="Reserved frame for the externally produced product walkthrough film">
          <div className="flex h-full items-center justify-center px-6 text-center">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">External dissolve film will appear here when approved and supplied.</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Illustrative product stills. Not legal advice. Lexhy does not practise law.</p>
      </div>
    </section>
  </>
);

export default Index;

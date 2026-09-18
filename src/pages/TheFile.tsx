import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function TheFile() {
  return <>
    <PageMeta title="The file | Lexhy" description="One Lexhy file connects the operating company and private affairs. Independently owned member firms practise and sign the advice." path="/the-file" />
    <PageIntro kicker="For principals and owners" title="Both books, held together.">
      Lexhy holds the file and its access list across the operating company and private affairs. The appointed member firm takes the engagement and signs the advice.
    </PageIntro>
    <section className="border-t border-border bg-paper">
      <div className="site-container grid gap-12 py-20 md:grid-cols-2 md:gap-24 md:py-28">
        <div><p className="eyebrow">The operating company</p><h2 className="section-title mt-5">The business in motion.</h2><p className="mt-6 max-w-[55ch] text-muted-foreground">Instructions, documents and access remain ordered around the work. Lexhy runs the system around the file.</p></div>
        <div><p className="eyebrow">Private affairs</p><h2 className="section-title mt-5">The other book, connected.</h2><p className="mt-6 max-w-[55ch] text-muted-foreground">For owners who hold both the operating company and private affairs, the record stays coherent while responsibilities remain distinct.</p></div>
      </div>
    </section>
    <section className="border-t border-border"><div className="site-container py-16 md:py-20"><p className="max-w-[68ch] font-serif text-3xl leading-snug md:text-4xl">Lexhy is not counsel. Independently owned member firms practise.</p><Link to="/contact" className="quiet-link mt-8">Contact <ArrowRight className="h-4 w-4" /></Link></div></section>
  </>;
}
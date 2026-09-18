import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function Pedigree() {
  return <>
    <PageMeta title="Pedigree | Lexhy" description="Lexhy uses appointed-line quality and confirmed similar-matter work to support disciplined access to independent member firms." path="/pedigree" />
    <PageIntro kicker="Trust" title="Pedigree, without the theatre.">
      Appointed-line quality is considered in context. Similar-matter work may be confirmed on the platform. There is no public roster.
    </PageIntro>
    <section className="border-t border-border bg-paper"><div className="site-container grid gap-12 py-20 md:grid-cols-3 md:gap-10 md:py-28"><article><span className="text-xs text-muted-foreground">01</span><h2 className="mt-10 font-serif text-3xl">Relevant work</h2><p className="mt-5 text-muted-foreground">Experience is considered against the instruction, not presented as a popularity score.</p></article><article><span className="text-xs text-muted-foreground">02</span><h2 className="mt-10 font-serif text-3xl">Clear appointment</h2><p className="mt-5 text-muted-foreground">The member firm accepts the engagement and remains responsible for its work.</p></article><article><span className="text-xs text-muted-foreground">03</span><h2 className="mt-10 font-serif text-3xl">Defined access</h2><p className="mt-5 text-muted-foreground">The file records who can see what. Lexhy manages the system, not the advice.</p></article></div></section>
  </>;
}
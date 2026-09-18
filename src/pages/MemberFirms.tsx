import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function MemberFirms() {
  return (
    <>
      <PageMeta title="Member firms | Lexhy" description="Lexhy membership is by invitation for independently owned private-wealth law firms, one market at a time." path="/member-firms" />
      <PageIntro kicker="Member firms" title="Membership is by invitation.">
        Lexhy does not list firms for comparison and does not run an open join shop. One market at a time.
      </PageIntro>
      <section className="border-t border-border bg-paper">
        <div className="site-container grid gap-14 py-20 md:grid-cols-2 md:gap-24 md:py-28">
          <div>
            <p className="eyebrow">The division</p>
            <h2 className="section-title mt-5">They keep the practice.</h2>
            <p className="mt-6 max-w-[55ch] leading-relaxed text-muted-foreground">The licence, the client, the legal work and the name on the advice remain with the independently owned member firm.</p>
          </div>
          <div>
            <p className="eyebrow">The work around it</p>
            <h2 className="section-title mt-5">They hand Lexhy everything that is not the law.</h2>
            <p className="mt-6 max-w-[55ch] leading-relaxed text-muted-foreground">Management, platform and operations support are designed to reduce the cost of winning a client and the cost of keeping one.</p>
          </div>
        </div>
      </section>
      <section className="border-t border-border">
        <div className="site-container py-20 md:py-28">
          <p className="eyebrow">The test</p>
          <p className="mt-6 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">If the cost of winning a client and the cost of keeping one do not fall, membership should not continue.</p>
        </div>
      </section>
      <section className="border-t border-border bg-paper">
        <div className="site-container py-16 md:py-20">
          <p className="eyebrow">Founding cohort</p>
          <p className="mt-5 text-lg">Names are added when a firm has accepted.</p>
          <div className="mt-9 flex flex-wrap gap-8">
            <Link to="/invitation" className="quiet-link">Invitation only <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="quiet-link">Advisers use Contact <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

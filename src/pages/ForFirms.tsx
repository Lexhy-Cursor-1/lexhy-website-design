import { InquiryForm } from "@/components/lexhy/InquiryForm";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function ForFirms() {
  return <>
    <PageMeta title="For firms | Lexhy" description="Lexhy works with independently owned practices by invitation. Member firms practise; Lexhy runs the system around the file." path="/for-firms" />
    <PageIntro kicker="For independent practices" title="The practice remains yours.">
      Lexhy surfaces pedigreed counsel to principals who need their operating company and private affairs held together. The member firm takes the engagement and signs the advice.
    </PageIntro>
    <section className="border-t border-border bg-paper"><div className="site-container grid gap-14 py-20 md:grid-cols-2 md:gap-24 md:py-28"><div><p className="eyebrow">What stays with the firm</p><h2 className="section-title mt-5">Judgement and engagement.</h2><p className="mt-6 max-w-[55ch] text-muted-foreground">The firm practises. Its name is on the advice. Lexhy does not write in the firm’s name.</p></div><div><p className="eyebrow">What Lexhy holds</p><h2 className="section-title mt-5">The file and access.</h2><p className="mt-6 max-w-[55ch] text-muted-foreground">A disciplined record around instructions, access and status, across both books.</p></div></div></section>
    <section id="interest" className="border-t border-border"><div className="site-container max-w-5xl py-20 md:py-28"><p className="eyebrow">Private note</p><h2 className="section-title mt-5">Request an invitation.</h2><p className="mt-6 max-w-[62ch] text-muted-foreground">Membership is by invitation; this note does not create membership.</p><div className="mt-12"><InquiryForm type="firm" /></div></div></section>
  </>;
}
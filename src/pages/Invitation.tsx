import { InquiryForm } from "@/components/lexhy/InquiryForm";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function Invitation() {
  return (
    <>
      <PageMeta title="Invitation only | Lexhy" description="Lexhy membership is extended by invitation. A principal may leave a private note; it is not an application or offer." path="/invitation" />
      <PageIntro kicker="Invitation only" title="There is no public application.">
        Membership is extended. A principal may leave a private note. That note is not an application, a demo request or an offer.
      </PageIntro>
      <section className="border-t border-border bg-paper">
        <div className="site-container max-w-5xl py-16 md:py-24">
          <InquiryForm type="invitation" />
        </div>
      </section>
    </>
  );
}

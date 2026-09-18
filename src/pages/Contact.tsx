import { InquiryForm } from "@/components/lexhy/InquiryForm";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function Contact() {
  return (
    <>
      <PageMeta title="Contact | Lexhy management company" description="Contact Lexhy about an operating company or private affairs. Lexhy does not practise law or give legal advice." path="/contact" />
      <PageIntro kicker="Contact" title="Get in touch.">
        <p>Lexhy does not give legal advice.</p>
        <p>If an independently owned member firm can assist, they will reply.</p>
      </PageIntro>
      <section className="border-t border-border bg-paper">
        <div className="site-container max-w-5xl py-16 md:py-24">
          <InquiryForm type="contact" />
        </div>
      </section>
    </>
  );
}

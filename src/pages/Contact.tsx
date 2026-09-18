import { FaqSection, faqItems } from "@/components/lexhy/FaqSection";
import { InquiryForm } from "@/components/lexhy/InquiryForm";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

export default function Contact() {
  return (
    <>
      <PageMeta title="Contact | Lexhy" description="Contact Lexhy. Lexhy does not give legal advice; an independently owned member firm may reply if it can assist." path="/contact" faq={faqItems} />
      <PageIntro kicker="Contact" title="Get in touch.">
        <p>Lexhy does not give legal advice.</p>
        <p>If a member firm can assist, they will reply.</p>
      </PageIntro>
      <section className="border-t border-border bg-paper">
        <div className="site-container max-w-5xl py-16 md:py-24">
          <InquiryForm type="contact" />
        </div>
      </section>
      <FaqSection compact />
    </>
  );
}

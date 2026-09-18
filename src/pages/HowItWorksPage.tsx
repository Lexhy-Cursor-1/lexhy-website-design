import { FaqSection, faqItems } from "@/components/lexhy/FaqSection";
import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

const parts = [
  ["01", "Families and advisers", "A named member firm. Scope in that firm’s letter. A person, a next date and the documents in one place. No grid and no fee on this website."],
  ["02", "Member firms", "Introducer inbound, reused KYC, billing, referral with credit recorded and an audit trail. Other firms cannot open the file."],
  ["03", "Money", "The family pays the firm. The firm pays Lexhy for management, platform and operations services. There is no fee-sharing in restricted markets."],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageMeta title="How it works | Lexhy" description="See how Lexhy supports families, advisers and independently owned member firms while keeping legal work with licensed practices." path="/how-it-works" faq={faqItems} />
      <PageIntro kicker="Operating model" title="Two sides. Two environments. One brand.">
        The member firm owns the engagement and the legal work. Lexhy manages the system around client intake, records, operations and introductions.
      </PageIntro>
      <section className="border-t border-border bg-paper">
        <div className="site-container py-20 md:py-28">
          {parts.map(([number, title, text]) => (
            <article key={title} className="grid gap-5 border-t border-border py-11 md:grid-cols-[90px_0.7fr_1.3fr] md:gap-12 md:py-14">
              <span className="text-xs text-muted-foreground">{number}</span>
              <h2 className="font-serif text-3xl leading-tight">{title}</h2>
              <p className="max-w-[58ch] leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <FaqSection />
    </>
  );
}

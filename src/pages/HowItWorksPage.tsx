import { PageMeta } from "@/components/lexhy/PageMeta";
import { PageIntro } from "@/components/lexhy/SiteLayout";

const parts = [
  ["01", "Instructed", "A principal, owner, introducer or adviser makes contact. Lexhy does not give legal advice."],
  ["02", "On the line", "An independently owned member firm accepts the engagement. The scope sits in that firm’s letter."],
  ["03", "Draft", "The member firm practises. Lexhy keeps the file, access list and status ordered around the work."],
  ["04", "Your decision", "The member firm signs the advice. The principal decides what follows."],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageMeta title="How it works | Lexhy" description="A short sequence from instruction to decision. Lexhy holds the file; independently owned member firms practise." path="/how-it-works" />
      <PageIntro kicker="How it works" title="One file. Clear responsibility.">
        Lexhy runs the system around the file. The appointed member firm takes the engagement, practises and signs the advice.
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
    </>
  );
}

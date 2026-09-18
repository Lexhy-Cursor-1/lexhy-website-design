import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/lexhy/SiteLayout";
import { PageMeta } from "@/components/lexhy/PageMeta";

const desks = [
  ["01", "The family", "Wills, powers and succession sit with the member firm that knows the family and accepts the engagement. The legal judgement remains there."],
  ["02", "The holding structure", "Trusts, family offices and funds are considered alongside the structure already in place. Lexhy supports the operating record, not the legal advice."],
  ["03", "The operating business", "Private wealth often includes the company the family built. Member firms handle the legal work around ownership, governance and transition."],
  ["04", "More than one jurisdiction", "Origin and hub can sit on one operating record. Each member firm remains responsible for work in the jurisdiction where it is authorised."],
];

export default function PrivateWealth() {
  return (
    <>
      <PageMeta title="Private wealth | Lexhy" description="Independent member firms advise families across succession, holding structures, operating businesses and multiple jurisdictions." path="/private-wealth" />
      <PageIntro kicker="Private wealth" title="Family, capital and the operating business.">
        Member firms advise on succession, trusts, estate administration, family governance and the legal work around family offices and privately held companies. Lexhy is not counsel. The appointed member firm is.
      </PageIntro>
      <section className="border-t border-border bg-paper">
        <div className="site-container py-20 md:py-28">
          <p className="eyebrow">Four connected desks</p>
          <div className="mt-10 grid border-t border-border md:grid-cols-2">
            {desks.map(([number, title, text], index) => (
              <article key={title} className={`border-b border-border py-10 md:min-h-[250px] md:p-12 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                <span className="text-xs text-muted-foreground">{number}</span>
                <h2 className="mt-8 font-serif text-3xl">{title}</h2>
                <p className="mt-5 max-w-[56ch] leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border">
        <div className="site-container py-16 md:py-20">
          <p className="max-w-[68ch] font-serif text-3xl leading-snug md:text-4xl">Introductions usually come from a family office, private bank or trustee. Families may use Contact. There is no online quote.</p>
          <Link to="/contact" className="quiet-link mt-8">Contact <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}

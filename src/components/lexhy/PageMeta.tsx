import { Helmet } from "react-helmet-async";

const BASE_URL = "https://lexhy-vibe-draft.lovable.app";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  faq?: { question: string; answer: string }[];
};

export function PageMeta({ title, description, path, faq }: PageMetaProps) {
  const canonical = `${BASE_URL}${path === "/" ? "/" : path}`;
  const faqSchema = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {faqSchema ? <script type="application/ld+json">{JSON.stringify(faqSchema)}</script> : null}
    </Helmet>
  );
}

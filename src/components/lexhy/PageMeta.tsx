import { useEffect } from "react";

const BASE_URL = "https://lexhy-vibe-draft.lovable.app";

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  faq?: { question: string; answer: string }[];
};

export function PageMeta({ title, description, path, faq }: PageMetaProps) {
  useEffect(() => {
    const canonical = `${BASE_URL}${path === "/" ? "/" : path}`;
    document.title = title;

    const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    document.getElementById("page-faq-schema")?.remove();
    if (faq) {
      const schema = document.createElement("script");
      schema.id = "page-faq-schema";
      schema.type = "application/ld+json";
      schema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      });
      document.head.appendChild(schema);
    }

    return () => document.getElementById("page-faq-schema")?.remove();
  }, [description, faq, path, title]);

  return null;
}

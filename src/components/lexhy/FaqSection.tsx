import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqItems = [
  {
    question: "Is Lexhy a law firm?",
    answer: "No. Lexhy is a management company. It does not practise law and does not give legal advice. Legal work is done only by independently owned member firms that hold a practising licence in the relevant country.",
  },
  {
    question: "Who is my lawyer if I contact Lexhy?",
    answer: "Your lawyer is the member firm that accepts the engagement, not Lexhy. Sending a message on this website does not create a lawyer-client relationship.",
  },
  {
    question: "How do families start?",
    answer: "By introduction from a private bank, family office, trustee or other adviser, or by using the Contact form. Lexhy does not publish prices or a list of lawyers to compare.",
  },
  {
    question: "Can a law firm join Lexhy?",
    answer: "Membership is by invitation only. Lexhy does not operate an open application shop.",
  },
  {
    question: "How does Lexhy get paid?",
    answer: "Member firms pay Lexhy for management, platform and operations services. In markets that restrict non-lawyer fee-sharing, Lexhy does not take a share of legal fees.",
  },
];

export function FaqSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border-t border-border bg-paper">
      <div className="site-container grid gap-10 py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-28">
        <div>
          <p className="eyebrow">Questions, answered</p>
          <h2 className="section-title mt-4">A clear division of responsibility.</h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {faqItems.slice(0, compact ? 3 : faqItems.length).map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="py-6 text-left font-sans text-base font-medium no-underline hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[68ch] pb-6 text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

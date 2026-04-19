import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "What home configurations are available at Swasti Sri Serenity?",
    answer:
      "The community offers thoughtfully planned 1.5 BHK and 2.5 BHK residences designed for comfort, accessibility, and peaceful senior living.",
  },
  {
    question: "Is medical and emergency support available on campus?",
    answer:
      "Yes. The project is planned with round-the-clock assistance and emergency support to provide residents and families peace of mind.",
  },
  {
    question: "Can family members visit or stay over occasionally?",
    answer:
      "Absolutely. Family visits are encouraged, and guest-friendly spaces are designed to make interactions comfortable and meaningful.",
  },
  {
    question: "How do I schedule a site visit or get pricing details?",
    answer:
      "Use the Schedule Site Visit button or contact form to connect with the sales team. They will share current pricing, availability, and booking guidance.",
  },
  {
    question: "Is this suitable for independent retirement living?",
    answer:
      "Yes. The project is ideal for seniors seeking independent living with community engagement, safety features, and support infrastructure nearby.",
  },
  {
    question: "Where is the project located?",
    answer:
      "Swasti Sri Serenity is located in Koheda, Hyderabad, with access to key city routes and essential conveniences.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-22 px-6 overflow-hidden bg-[#fff9f1] border-t border-[#eadfcd]">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-10">
        <Reveal animation="up">
          <p className="text-[#7a5f35] tracking-[0.2em] uppercase text-xs font-semibold mb-3">FAQs</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#173445] mb-4 leading-tight">
            Questions Before You Decide
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Clear answers about lifestyle, support, and next steps for your residential home journey.
          </p>
        </Reveal>
      </div>

      <Reveal animation="scale" delay={0.15}>
        <div className="rounded-2xl border border-[#e8dcc8] bg-white shadow-sm px-5 md:px-8 py-3 md:py-5">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-[#efe5d6]">
                <AccordionTrigger className="text-left text-[#173445] text-base md:text-lg font-semibold py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6b7280] text-sm md:text-base leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FAQSection;

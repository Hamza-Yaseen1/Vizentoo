"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "../globals.css";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive design solutions including UI/UX design, brand identity development, digital marketing assets, and professional print materials. Our services are tailored to meet your specific business needs.",
  },
  {
    question: "How does the subscription model work?",
    answer:
      "Our subscription model provides you with dedicated design support on a monthly basis. You get access to experienced designers who understand your brand, without the overhead costs of a full-time team.",
  },
  {
    question: "What is the turnaround time for projects?",
    answer:
      "Typical turnaround times vary based on project complexity. Simple designs can be delivered within 24-48 hours, while more complex projects may take 3-5 business days. We'll always provide clear timelines upfront.",
  },
  {
    question: "Can I request revisions to the designs?",
    answer:
      "Absolutely! We offer unlimited revisions until you're completely satisfied with the design. Our goal is to ensure the final product perfectly matches your vision and requirements.",
  },
  {
    question: "How do I communicate my design needs?",
    answer:
      "We have a streamlined process for submitting design requests through our platform. You can provide detailed briefs, reference materials, and communicate directly with your assigned designer.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes! We work with startups, small businesses, and large enterprises. Whether you need a single project or ongoing design support, we can tailor our services to your needs.",
  },
  {
    question: "Can you create designs that match my existing brand?",
    answer:
      "Absolutely. We can work within your existing brand guidelines to ensure all designs are consistent with your current visual identity.",
  },
  {
    question: "Do you provide source files for the designs?",
    answer:
      "Yes, upon project completion, we deliver all the necessary source files, including editable formats like Adobe Illustrator, Photoshop, or Figma files.",
  },
  {
    question: "What if I need designs in multiple languages?",
    answer:
      "We can create multilingual designs. Just provide the translated text, and we'll ensure it’s incorporated seamlessly into your designs.",
  },
  {
    question: "Do you offer rush or priority services?",
    answer:
      "Yes, for urgent projects we offer expedited delivery options. Additional fees may apply depending on the complexity and deadline.",
  },
  {
    question: "Can you handle both digital and print design?",
    answer:
      "Yes! We specialize in both. From social media graphics and website UI to brochures, business cards, and packaging, we’ve got you covered.",
  },
  {
    question:
      "Do you help with creative direction if I’m not sure what I want?",
    answer:
      "Of course. We can guide you through the design process, offer mood boards, and provide creative concepts to help shape your vision.",
  },
  {
    question: "What design tools do you use?",
    answer:
      "We primarily use industry-standard tools such as Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, and Canva for certain projects.",
  },
  {
    question: "Is my information and brand data kept confidential?",
    answer:
      "Yes. We take your privacy seriously and ensure all files, brand assets, and information remain secure and confidential.",
  },
  {
    question: "Can you redesign or improve my existing designs?",
    answer:
      "Absolutely. We can refresh outdated designs, enhance layouts, and modernize your branding while keeping the core identity intact.",
  },
];

function Questions() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Have more question?</h2>
          <p className="text-gray-600 text-lg">
            Think of Vizentoo as your very own in-house team but completely
            stress-free and hassle-free{" "}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
            >
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
            <a href="/Contact">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Questions;

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer comprehensive design solutions including UI/UX design, brand identity development, digital marketing assets, and professional print materials. Our services are tailored to meet your specific business needs."
    },
    {
        question: "How does the subscription model work?",
        answer: "Our subscription model provides you with dedicated design support on a monthly basis. You get access to experienced designers who understand your brand, without the overhead costs of a full-time team."
    },
    {
        question: "What is the turnaround time for projects?",
        answer: "Typical turnaround times vary based on project complexity. Simple designs can be delivered within 24-48 hours, while more complex projects may take 3-5 business days. We'll always provide clear timelines upfront."
    },
    {
        question: "Can I request revisions to the designs?",
        answer: "Absolutely! We offer unlimited revisions until you're completely satisfied with the design. Our goal is to ensure the final product perfectly matches your vision and requirements."
    },
    {
        question: "How do I communicate my design needs?",
        answer: "We have a streamlined process for submitting design requests through our platform. You can provide detailed briefs, reference materials, and communicate directly with your assigned designer."
    }
];

function Questions() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                    Have more question?
                    </h2>
                    <p className="text-gray-600 text-lg">
                    Think of Vizentoo as your very own in-house team  but
                    completely stress-free and hassle-free                    </p>
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
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Questions